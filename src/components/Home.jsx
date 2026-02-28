import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profile from "../assets/profile_photo.png";

const Home = () => {
  return (
    <div
      id="home"
      style={{
        minHeight: "100vh",
        backgroundColor: "#fef6e6",
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        paddingTop: "120px"
      }}
    >
      <Container>

        <Row className="align-items-center">

          {/* LEFT SIDE */}

          <Col lg={6} md={12}>

            <h1
              style={{
                fontSize: "3.5rem",
                fontWeight: "900",
                color: "#141e30",
                marginBottom: "10px"
              }}
            >
              Hi, I'm Aalisha
            </h1>


            <h3
              style={{
                fontSize: "2rem",
                color: "#243b55",
                marginBottom: "20px",
                fontWeight: "bold"
              }}
            >
              MERN Stack Developer
            </h3>


            <p
              style={{
                maxWidth: "500px",
                color: "#444",
                lineHeight: "28px",
                fontSize: "1.3rem"
              }}
            >
              I build modern and responsive web applications using
              MongoDB, Express, React and Node.js. Passionate about
              creating clean and user-friendly interfaces.
            </p>



            {/* Buttons */}

            <div style={{ marginTop: "25px" }}>

              <a href="#project">

                <button
                  style={{
                    background:
                      "linear-gradient(to right,#141e30,#243b55)",
                    color: "white",
                    border: "none",
                    padding: "12px 25px",
                    borderRadius: "8px",
                    marginRight: "15px",
                    cursor: "pointer"
                  }}
                >
                  View Projects
                </button>

              </a>



              <button
                style={{
                  background: "transparent",
                  color: "#141e30",
                  border: "2px solid #141e30",
                  padding: "12px 25px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}
              >
                Download CV
              </button>

            </div>

          </Col>



          {/* RIGHT SIDE */}

          <Col lg={6} md={12} className="text-center">

            <img
              src={profile}
              alt="profile"
              style={{
                width: "300px",
                maxWidth: "100%",
                borderRadius: "20px",
                boxShadow:
                  "0px 10px 30px rgba(0,0,0,0.2)",
                marginTop: "20px"
              }}
            />

          </Col>


        </Row>

      </Container>

    </div>
  );
};

export default Home;