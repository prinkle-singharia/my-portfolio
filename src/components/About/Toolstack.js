import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiXcode,
  SiJupyter,
  SiSpringboot,
  SiAmazonaws,
  SiPowerbi,
  SiTableau,
  SiDocker,
  SiKubernetes,
  SiOracle,
  SiPostgresql,
  SiTerraform,
  SiMlflow,
  SiJira,
  SiBitbucket,
  SiConfluence,
  SiScikitlearn,
  SiTensorflow,
  SiPandas,
  SiGradle,
  SiApachemaven,
  SiPostman,
  SiApachespark,
  SiIntellijidea,
  SiEclipseide,
  SiAndroidstudio,
  SiSwagger,
} from "react-icons/si";
import { RiTestTubeLine } from "react-icons/ri"; // Substitute for Mockito and JUnit
import { AiOutlineFile } from "react-icons/ai"; // Substitute for SoapUI
import { FaRobot } from "react-icons/fa"; // Substitute for Huggingface

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
    { icon: <SiXcode />, name: "Xcode" },
    { icon: <SiJupyter />, name: "Jupyter Notebook" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <SiAmazonaws />, name: "AWS" },
    { icon: <SiPowerbi />, name: "Power BI" },
    { icon: <SiTableau />, name: "Tableau" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <SiOracle />, name: "OracleDB" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiTerraform />, name: "Terraform" },
    { icon: <SiMlflow />, name: "MLFlow" },
    { icon: <SiJira />, name: "Jira" },
    { icon: <SiBitbucket />, name: "Bitbucket" },
    { icon: <SiConfluence />, name: "Confluence" },
    { icon: <SiScikitlearn />, name: "Scikit-learn" },
    { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <SiPandas />, name: "Pandas" },
    { icon: <RiTestTubeLine />, name: "JUnit" },
    { icon: <SiApachemaven />, name: "Maven" },
    { icon: <SiGradle />, name: "Gradle" },
    { icon: <RiTestTubeLine />, name: "Mockito" },
    { icon: <AiOutlineFile />, name: "SoapUI" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiApachespark />, name: "Apache Spark" },
    { icon: <SiIntellijidea />, name: "IntelliJ IDEA" },
    { icon: <SiEclipseide />, name: "Eclipse" },
    { icon: <SiAndroidstudio />, name: "Android Studio" },
    { icon: <SiSwagger />, name: "Swagger" },
    { icon: <FaRobot />, name: "Huggingface" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <div className="icon-container">
            {tool.icon}
            <span className="tooltip">{tool.name}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;