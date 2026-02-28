import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <section
      id="about"
      style={{
        padding: "80px 0",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Container>
        {/* Section Title */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
  <h2
    style={{
      fontWeight: 700,
      fontSize: "2.5rem",
      fontFamily: "'DM Serif Display', serif",
      display: "inline-block",      
      borderBottom: "3px solid #2c5aa0", 
      paddingBottom: "5px",        
    }}
  >
    About Me
  </h2>
</div>

        <Row className="justify-content-center">
          <Col md={10} xs={12}>
          

            <p style={{ fontSize: "1.2rem", lineHeight: "26px", marginBottom: "15px",   fontFamily: "'Open Sans', sans-serif",color:"#333333" }}>
              I am a passionate MERN Stack Developer who loves building scalable and modern web applications. I enjoy turning ideas into efficient, user-friendly digital solutions using MongoDB, Express.js, React.js, and Node.js.
            </p>

            <p style={{ fontSize: "1.2rem", lineHeight: "26px", marginBottom: "15px",fontFamily: "'Open Sans', sans-serif",color:"#333333" }}>
              I have worked on full-stack applications including eCommerce platforms, CRUD dashboards, login & authentication systems, and web forms with file upload functionality. My focus is on writing clean, maintainable code and creating seamless user experiences.
            </p>

            <p style={{ fontSize: "1.2rem", lineHeight: "26px", marginBottom: "15px", fontFamily: "'Open Sans', sans-serif",color:"#333333"}}>
              Solving real-world problems with technology motivates me. I enjoy exploring modern web technologies, optimizing performance, and building responsive applications that make life easier for users.
            </p>

            <p style={{ fontSize: "1.2rem", lineHeight: "26px", marginBottom: "15px", fontFamily: "'Open Sans', sans-serif",color:"#333333"}}>
              I am currently seeking an opportunity as an entry-level MERN Stack Developer where I can contribute to meaningful projects, grow professionally, and expand my expertise in full-stack development.
            </p>

            <p style={{ fontSize: "1.2rem", lineHeight: "26px", marginBottom: "15px", fontFamily: "'Open Sans', sans-serif",color:"#333333"}}>
              Outside of coding, I enjoy learning about UI/UX design, exploring new tech trends, and taking on challenges that improve my problem-solving skills.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;