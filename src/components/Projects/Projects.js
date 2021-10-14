import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Leave <strong className="purple">Template </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few templates we've made recently!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Leave"
              description="Tjdkydjgdngdbczbfzhfshrsrhsbfzbfsf Fjsjtsfjshfsfhsbfsjtstj Nfsjtdjtzfjsjtdjtsjtdyk Jgdjtdtjdjtkydykdykdyk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Leave 2"
              description="Dear Sir/Madam,

With respect, I have to say that I am suffering from severe fever and headache since last night. My family doctor has advised me to take proper bed rest for two days and therefore I am unable to attend the school from (this date) to (that date). 

Kindly grant me a leave of absence for two days. I will be really grateful for this kind gesture. 

Thank you.

Yours sincerely,
(Your name),
(Your class and section),
(Your Roll number)."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Leave 3"
              description="Dear Sir/Ma'am,

With all due respect, I would like to bring your attention to the fact that my best friend’s wedding is on (date) and I have been invited to attend it. He is a very dear friend of mine and the wedding is taking place at (the name of the place). In order to be there, I need a leave of absence of (number of days) from (date) to (date).

Please grant me a leave of absence for (number of days). I am eagerly waiting for your response as I have to book the tickets too.

Thank you for considering.

Yours Truly,
(Name)."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Leave 4"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js.Easy to write blogs using markdown."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
