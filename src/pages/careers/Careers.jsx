import React, { useEffect, useState } from "react";
import "./Careers.scss";
import Job from "../../components/job/job.jsx";
import { Row, Alert, Spinner, Col } from "react-bootstrap";

// Helper function to decode HTML entities (more comprehensive basic list)
const decodeHtmlEntities = (text) => {
  if (!text) return "";
  // Use a temporary element in memory if possible (only works client-side, but safer)
  // This check ensures it doesn't break SSR/build if `document` is unavailable
  if (typeof document !== "undefined") {
    const tempElement = document.createElement("textarea");
    tempElement.innerHTML = text;
    return tempElement.value;
  } else {
    // Basic fallback for Node.js environment (less reliable)
    return text
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, " ")
      .replace(/&rsquo;/g, "'") // Add common entities as needed
      .replace(/&ldquo;/g, '"')
      .replace(/&rdquo;/g, '"');
  }
};

// Helper function to strip HTML tags using regex
const stripHtmlTags = (html) => {
  if (!html) return "";
  // Replace <br> and paragraph closing tags with spaces first for better spacing
  let text = html.replace(/<br\s*\/?>/gi, " ").replace(/<\/p>/gi, " ");
  // Strip remaining HTML tags
  text = text.replace(/<[^>]+>/g, "");
  // Replace multiple whitespace characters with a single space and trim
  return text.replace(/\s\s+/g, " ").trim();
};

// Helper function to truncate text
const truncateText = (text, maxLength = 500) => {
  // Increased maxLength to 250
  if (!text || text.length <= maxLength) return text;
  // Ensure truncation doesn't happen mid-word if possible
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  // Only truncate at last space if it's reasonably close to the end
  if (lastSpace > maxLength - 50 && lastSpace > 0) {
    return truncated.substring(0, lastSpace) + "...";
  }
  return truncated + "...";
};

function FecthCareers() {
  const [ourCareers, setOurCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);
    console.log("Fetching initial careers list...");

    fetch(
      "https://boards-api.greenhouse.io/v1/boards/hivefinancialsystems/jobs/"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `HTTP error fetching list! status: ${response.status}`
          );
        }
        console.log("Initial list fetched successfully.");
        return response.json();
      })
      .then((listData) => {
        if (!listData.jobs || listData.jobs.length === 0) {
          console.log("No jobs found in the list.");
          if (isMounted) {
            setOurCareers([]);
            setLoading(false);
          }
          return;
        }
        console.log(`Found ${listData.jobs.length} jobs. Fetching details...`);

        const detailPromises = listData.jobs.map((job) =>
          fetch(
            `https://boards-api.greenhouse.io/v1/boards/hivefinancialsystems/jobs/${job.id}`
          )
            .then((res) => {
              if (!res.ok) {
                throw new Error(
                  `Failed to fetch details for job ${job.id}: ${res.status}`
                );
              }
              return res.json();
            })
            .then((detailData) => {
              const rawContent = detailData?.content;
              let description = "No description available.";
              if (rawContent) {
                const decodedContent = decodeHtmlEntities(rawContent); // Decode first
                const strippedContent = stripHtmlTags(decodedContent); // Then strip tags
                description = truncateText(strippedContent); // Then truncate (now using 250 chars)
                // Log the final description being generated for this job
                // console.log(`Job ${job.id} Description:`, description);
              }
              return {
                ...job,
                shortDescription: description,
              };
            })
            .catch((detailError) => {
              console.error(
                `Error processing details for job ${job.id}:`,
                detailError
              );
              return {
                ...job,
                shortDescription: "Error loading description.",
              };
            })
        );

        Promise.all(detailPromises).then((jobsWithDetails) => {
          console.log("All job details processed.");
          if (isMounted) {
            const sortedJobs = jobsWithDetails.sort((a, b) =>
              a.title.localeCompare(b.title)
            );
            setOurCareers(sortedJobs);
            setLoading(false);
          }
        });
      })
      .catch((fetchError) => {
        console.error("Error fetching initial careers list:", fetchError);
        if (isMounted) {
          setError(fetchError.message);
          setOurCareers([]);
          setLoading(false);
        }
      });

    return () => {
      console.log("Careers component unmounting.");
      isMounted = false;
    };
  }, []);

  return { careers: ourCareers, loading, error };
}

const Careers = () => {
  const { careers, loading, error } = FecthCareers();

  // Loading State
  if (loading) {
    return (
      <Row
        className="Careers-cotainer p-0 justify-content-center align-items-center"
        style={{ minHeight: "300px" }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading Job Listings...</span>
        </Spinner>
      </Row>
    );
  }

  // Error State
  if (error) {
    return (
      <Row className="Careers-cotainer p-0" style={{ minHeight: "300px" }}>
        <Col xs={12} md={8} lg={6} className="mx-auto my-5">
          <Alert variant="danger">Failed to load job listings: {error}</Alert>
        </Col>
      </Row>
    );
  }

  // No Jobs State
  if (careers.length === 0) {
    return (
      <Row className="Careers-cotainer p-0" style={{ minHeight: "300px" }}>
        <Col xs={12} md={8} lg={6} className="mx-auto my-5 text-center">
          <p>No open positions at this time. Please check back later.</p>
        </Col>
      </Row>
    );
  }

  // Success State
  return (
    <>
      <Row className="Careers-cotainer p-0">
        <div className="job-container-item">
          {careers.map((career) => (
            // Pass data to Job component
            <Job
              key={career.id}
              id={career.id}
              title={career.title}
              location={career.location?.name || "Location not specified"}
              description={career.shortDescription} // Pass the processed description
              detailPagePath={`https://job-boards.greenhouse.io/hivefinancialsystems/jobs/${career.id}`}
            />
          ))}
        </div>
      </Row>
    </>
  );
};

export default Careers;
