import React, { useEffect, useState } from "react";
import "./Careers.scss"; //
import Job from "./job/job"; //
import { Row, Alert } from "react-bootstrap"; // Added Alert for error display

// Removed unused imports and functions (regex, parse, parseHtmlEnteties, decodeHTMLEntities, etc.)

function FecthCareers() {
  const [ourCareers, setOurCareers] = useState([]); // Initialize with empty array
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    setLoading(true);
    setError(null);
    // Fetch jobs from the Greenhouse API
    fetch(
      "https://boards-api.greenhouse.io/v1/boards/hivefinancialsystems/jobs/"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.jobs) {
          // Sort jobs by title (or choose another field like updated_at)
          const sortedJobs = data.jobs.sort((a, b) =>
            a.title.localeCompare(b.title)
          );
          setOurCareers(sortedJobs);
        } else {
          setOurCareers([]); // Handle case where jobs array might be missing
        }
        setLoading(false);
      })
      .catch((fetchError) => {
        console.error("Error fetching careers:", fetchError);
        setError(fetchError.message);
        setLoading(false);
      });
  }, []); // Empty dependency array means fetch only once on mount

  // Return loading, error, or data state
  return { careers: ourCareers, loading, error };
}

const Careers = () => {
  const { careers, loading, error } = FecthCareers(); // Get state from the hook

  if (loading) {
    return (
      <Row
        className="Careers-cotainer p-0 justify-content-center align-items-center"
        style={{ minHeight: "300px" }}
      >
        {/* You can replace this with a spinner component */}
        <div>Loading...</div>
      </Row>
    );
  }

  if (error) {
    return (
      <Row className="Careers-cotainer p-0" style={{ minHeight: "300px" }}>
        <Col xs={12} md={8} lg={6} className="mx-auto my-5">
          <Alert variant="danger">
            Failed to load job listings. Error: {error}
          </Alert>
        </Col>
      </Row>
    );
  }

  if (careers.length === 0) {
    return (
      <Row className="Careers-cotainer p-0" style={{ minHeight: "300px" }}>
        <Col xs={12} md={8} lg={6} className="mx-auto my-5 text-center">
          <p>No open positions at this time. Please check back later.</p>
        </Col>
      </Row>
    );
  }

  return (
    <>
      {/* */}
      <Row className="Careers-cotainer p-0">
        <div className="job-container-item">
          {careers.map((career) => (
            <Job
              key={career.id} // Use the unique job ID from Greenhouse as the key
              id={career.id} // Pass the job ID
              title={career.title} // Pass the job title
              location={career.location.name} // Pass the location name
              // Keep internal linking to the detail page component
              detailPagePath={`/careers/${career.id}`}
            />
          ))}
        </div>
      </Row>
    </>
  );
};

export default Careers;
