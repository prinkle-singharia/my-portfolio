import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import coldEmailGenerator from "../../Assets/Projects/coldEmailGenerator.png";
import dialogflowChatbot from "../../Assets/Projects/dialogflowChatbot.png";
import customerSegmentation from "../../Assets/Projects/customerSegmentation.png";
import textClassification from "../../Assets/Projects/textClassification.png";
import sportsCommentary from "../../Assets/Projects/sportsCommentary.png";
import depressionDetection from "../../Assets/Projects/depressionDetection.png";
import cricketWinner from "../../Assets/Projects/cricketWinner.png";
import loanApproval from "../../Assets/Projects/loanApproval.png";
import statusApp from "../../Assets/Projects/statusApp.png";
import iOSapp from "../../Assets/Projects/iOSapp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coldEmailGenerator}
              isBlog={false}
              title="AI Powered Cold Email Generator using LangChain 📧🤖"
              description="I built GenAI Cold Email Generator, an AI-powered tool that automates cold email writing and personalization using LLMs and prompt engineering. This project streamlines outreach by crafting engaging, customized emails tailored to recipients, boosting response rates for businesses and professionals."
              ghLink="https://github.com/prinkle-singharia/genAi-cold-email-generator"
            />
          </Col>
        
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dialogflowChatbot}
              isBlog={false}
              title="Chotu: AI-Powered Food Ordering Chatbot using DialogFlow 🍔🤖"
              description="Meet Chotu, an intelligent NLP chatbot built using Google Dialogflow, seamlessly integrated into a food ordering website. It assists users in placing orders and automatically stores them in a MySQL database for real-time processing. With intent recognition, entity extraction, and webhook-driven automation, Chotu enhances customer experience while optimizing backend efficiency."
              ghLink="https://github.com/prinkle-singharia/end_to_end_dialogflow_chatbot"
              demoLink="https://bot.dialogflow.com/a7adb998-7b67-4d9f-ab1e-1f4bcce10c34"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={customerSegmentation}
              isBlog={false}
              title="Customer Recommendation System"
              description="A system designed to group customers based on their shopping patterns and recommend products tailored to their preferences. It provides clear insights into customer behavior and features interactive dashboards to support personalized marketing strategies."
              ghLink="https://github.com/prinkle-singharia/clustering-system"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textClassification}
              isBlog={false}
              title="News Article Classification"
              description="A system that classifies news articles automatically using AI, making tasks like document organization and content filtering more efficient. It features a streamlined development process with tools to manage experiments, track models, and ensure reliable performance."
              ghLink="https://github.com/prinkle-singharia/ai_text_classification"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sportsCommentary}
              isBlog={false}
              title="Image-to-Commentary, AI Sports Commentary Generator"
              description="An innovative system that generates engaging sports commentary from video frames, combining computer vision and natural language processing techniques. It processes thousands of cricket video frames, delivering accurate and dynamic commentaries, while leveraging cloud infrastructure for seamless deployment."
              //ghLink="https://github.com/soumyajit4419/Editor.io"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={depressionDetection}
              isBlog={true}
              title="Depression Detection through Audio"
              description="A system that analyzes speech to detect depression by converting audio signals into spectrogram images for more effective classification. Built using PyTorch and CNNs, it leverages a dataset of 5,000 labeled audio samples, enabling accurate identification of emotional states to support mental health assessment."
              //ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://zenodo.org/records/4166324"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cricketWinner}
              isBlog={false}
              title="Cricket Match Winner Prediction"
              description="A machine learning model designed to predict cricket match outcomes with 98% accuracy. It analyzes factors like team details, venue, and toss decisions, providing reliable insights based on historical IPL data up to 2018."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loanApproval}
              isBlog={false}
              title="Tackling Gender Bias in Loan Approval Model"
              description="A project aimed at identifying and addressing gender bias in loan approval predictions. It used data analysis and visualization tools to uncover trends, achieving 97% accuracy, while highlighting disparities between male and female approval rates, leading to data augmentation for fairness."
              ghLink="https://github.com/prinkle-singharia/data_bais_analysis"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={statusApp}
              isBlog={false}
              title="StatusApp - Real-Time Employee Availability Tracking App"
              description="Developed an Android application using Java and Android Studio for real-time employee tracking, improving data accuracy by 25% through optimized database design. Enhanced user engagement by 20% with a seamless login feature integrated with Google Firebase and ensured cross-platform availability through deployment on iOS and Android stores."
              // ghLink="https://github.com/prinkle-singharia/data_bais_analysis"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iOSapp}
              isBlog={false}
              title="SAMPARK - iOS App for Real-Time Data Aggregation of Govt. of India Employees"
              description="Developed a full-stack iOS application using Swift and Xcode, consolidating real-time data from five organizational websites into a single platform. Improved operational efficiency and user experience, achieving a 30% increase in data accessibility speed."
              //ghLink="https://github.com/prinkle-singharia/data_bais_analysis"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
