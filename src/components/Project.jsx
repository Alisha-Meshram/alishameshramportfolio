import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

const Project = () => {

  const projects = [

    {
      title: "Social Media App",
      description: "MERN stack app with login and post system",
      image:
        "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
      live: "#",
      github: "#"
    },

    {
      title: "Ecommerce Website",
      description: "Shopping website with cart and login",
      image:
        "https://cdn.pixabay.com/photo/2017/08/10/07/32/shopping-2616824_1280.jpg",
      live: "#",
      github: "#"
    },

    {
      title: "Auth System",
      description: "JWT Login and Register system",
      image:
        "https://cdn.pixabay.com/photo/2015/01/08/18/26/startup-593341_1280.jpg",
      live: "#",
      github: "#"
    },

    {
      title: "Expense Tracker",
      description: "Track income and expenses dashboard",
      image:
        "https://cdn.pixabay.com/photo/2016/11/29/12/30/phone-1869510_1280.jpg",
      live: "#",
      github: "#"
    }

  ];

  return (
    <div style={{ background: "#121212", padding: "60px 0" }}>

      <Container>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
      <h2
          style={{
            color: "white",
           

            fontWeight: 700,
      fontSize: "2.5rem",
      fontFamily: "'DM Serif Display', serif",
      display: "inline-block",      
      borderBottom: "3px solid #2c5aa0", 
      paddingBottom: "5px",        
          }}
        >
          My Projects
        </h2>
      </div>
       

        <Row>

          {projects.map((project, index) => (

            <Col md={3} key={index}>

              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                live={project.live}
                github={project.github}
              />

            </Col>

          ))}

        </Row>

      </Container>

    </div>
  );
};

export default Project;