import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="prinkle-singharia"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        theme={{
          level0: "#1c1c1c",  // Background color (no contributions)
          level1: "#c084f5",  // Light Purple (few contributions)
          level2: "#a855f7",  // Medium Purple
          level3: "#9333ea",  // Darker Purple
          level4: "#7e22ce",  // Darkest Purple (most contributions)
        }}
      />
    </Row>
  );
}

export default Github;
