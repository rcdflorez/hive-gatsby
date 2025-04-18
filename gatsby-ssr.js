// gatsby-ssr.js
import React from 'react';

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="external-script-body"
      src="https://boards.greenhouse.io/embed/job_board/js?for=hivefinancialsystems"
      type="text/javascript"
    ></script>,
  ]);
};
