import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am passionate about leveraging technology to solve real-world problems and have a strong background in Artificial Intelligence, Software Development, and Cloud Infrastructure.
            <br />
            <br />
            My interests lie in creating innovative solutions in AI, Data Science, and Cloud Infrastructure, with extensive hands-on experience in tools and technologies like Python, AWS, Kubernetes, and Terraform.
            <br />
            <br />
            I thrive on developing scalable applications with React.js, FastAPI and deploying ML models on AWS SageMaker and Google Cloud Platform.
            <br />
            <br />
            I've worked as a 
            
            <b className="purple"> System Engineer</b> at 
            <b className="purple"> Tata Consultancy Services (TCS)</b> for 3 years, where I built predictive models on AWS SageMaker, developed time-series forecasting models, and optimized cloud-based ETL pipelines for large-scale datasets. I also designed business intelligence dashboards and collaborated with Agile teams to drive data-driven decision-making.
              <br />
              <br />
              I specialize in{" "}
              <i>
                <b className="purple">
                  Machine Learning, Natural Language Processing, and Cloud Computing.
                </b>
              </i>
              <br />
              <br />
              My interests lie in creating innovative solutions in{" "}
              <i>
                <b className="purple">AI, Data Science, and Cloud Infrastructure,</b>
              </i>{" "}
              with extensive hands-on experience in tools and technologies like{" "}
              <i>
                <b className="purple">
                  Python, AWS, Kubernetes, and Terraform.
                </b>
              </i>
              <br />
              <br />
              I thrive on developing scalable applications with{" "}
              <b className="purple">React.js, FastAPI</b> and deploying ML models on{" "}
              <b className="purple">AWS SageMaker</b> and Google Cloud Platform.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/prinkle-singharia"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/prinkle-singharia"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/prinkle-singharia-b486b3182/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/prinkle-singharia"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
