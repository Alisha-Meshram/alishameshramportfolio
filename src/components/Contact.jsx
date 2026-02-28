import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        padding: "80px ",
        backgroundColor: "#f0f4f8",
      }}
    >
      <Container className="d-flex justify-content-center">
      
        <Card
          style={{
            maxWidth: "980px",
            width: "100%",
            borderRadius: "15px",
            boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
            transition: "transform 0.3s, box-shadow 0.3s",
            backgroundColor: "#ffffff",
            overflow: "hidden",
            padding:"5rem"
          }}
          className="hover-card"
        >
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
    Contact
  </h2>
</div>

          <Row noGutters={true}>
            {/* Left Section - Personal Info */}
            <Col md={6} xs={12} style={{ padding: "30px", borderRight: "1px solid #e0e0e0" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "25px",fontFamily:"'Poppins', sans-serif" }}>Personal Info</h3>
              <p style={{ fontSize: "1.3rem", lineHeight: "26px", marginBottom: "12px" }}>
                <strong>Name:</strong> Alisha Meshram
              </p>
              <p style={{ fontSize: "1.3rem", lineHeight: "26px", marginBottom: "12px" }}>
                <strong>Phone:</strong> +91-9011352247
              </p>
              <p style={{ fontSize: "1.3rem", lineHeight: "26px", marginBottom: "12px" }}>
                <strong>Address:</strong> Nagpur, Maharashtra, India
              </p>
              <p style={{ fontSize: "1.3rem", lineHeight: "26px" }}>
                <strong>Email:</strong> aalishameshram15@gmail.com
              </p>
            </Col>

            {/* Right Section - Social Links */}
            <Col
              md={6}
              xs={12}
              style={{
                padding: "30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3 style={{ fontWeight: 700, marginBottom: "25px",fontFamily:"'Poppins', sans-serif" }}>Connect with Me</h3>
              <p  style={{ fontSize: "1rem", textAlign:"center",lineHeight: "26px", marginBottom: "15px", fontFamily: "'Open Sans', sans-serif",color:"#333333"}}>
                Feel free to connect with me on LinkedIn or check out my GitHub projects.
              </p>
              <div>
                <a
                  href="https://www.linkedin.com/in/alisha-meshram-110835233/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#0A66C2",
                    fontSize: "2.5rem",
                    marginRight: "25px",
                    transition: "transform 0.3s",
                  }}
                  className="social-icon"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Alisha-Meshram"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#171515",
                    fontSize: "2.5rem",
                    transition: "transform 0.3s",
                  }}
                  className="social-icon"
                >
                  <FaGithub />
                </a>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>

      {/* Hover effects */}
      <style jsx>{`
        .hover-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
        }
        .social-icon:hover {
          transform: scale(1.2);
        }
        @media (max-width: 767px) {
          .hover-card .col-md-6 {
            border-right: none !important;
            border-bottom: 1px solid #e0e0e0;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;