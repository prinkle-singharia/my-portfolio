import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prinkle Singharia </span>
            from <span className="purple"> Boston, MA.</span>
            <br />
            <br />
            I am currently pursuing my Master's in Artificial Intelligence from Northeastern University.
            <br />
            <br />
            I have been employed as a System Engineer at TATA Consultancy Services for 3 years.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badmiton
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> Reading Novels
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> Building iOS Apps
            </li>
          </ul>

          <br />
          <p style={{ color: "rgb(155 126 172)" }}>
            "Code is like humor. When you have to explain it, it’s bad."{" "}
          </p>
          <footer className="blockquote-footer">Prinkle</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
