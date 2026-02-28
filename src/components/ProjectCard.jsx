import React from "react";
import { Card, Button } from "react-bootstrap";

const ProjectCard = ({ title, description, image, live, github }) => {
  return (
    <Card
      style={{
        background: "rgba(255,255,255,0.05)",
        borderRadius: "15px",
        backdropFilter: "blur(10px)",
        padding: "15px",
        color: "white",
        marginBottom: "20px"
      }}
    >

      <Card.Img
        variant="top"
        src={image}
        style={{
          height: "180px",
          objectFit: "cover",
          borderRadius: "10px"
        }}
      />

      <Card.Body>

        <Card.Title style={{ textAlign: "center" }}>
          {title}
        </Card.Title>

        <Card.Text style={{ textAlign: "center" }}>
          {description}
        </Card.Text>

        <div style={{ textAlign: "center" }}>

          <Button
            variant="primary"
            size="sm"
            href={live}
            style={{ marginRight: "10px" }}
          >
            Live
          </Button>

          <Button
            variant="outline-light"
            size="sm"
            href={github}
          >
            Github
          </Button>

        </div>

      </Card.Body>

    </Card>
  );
};

export default ProjectCard;