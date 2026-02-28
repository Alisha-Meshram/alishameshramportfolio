import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Experience = () => {
  const experienceData = [
    {
      title: "SCALEFULL TECHNOLOGIES LLP, MERN Stack Developer Intern",
      year:"09/2025 – 02/2026 | Pune",
      description:
      [
        "Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js (MERN Stack).",
        "Built responsive and user-friendly interfaces using React.js and Bootstrap.",
        "Designed and implemented RESTful APIs using Node.js and Express.js.",
        "Performed CRUD operations with MongoDB for efficient data management.",
        "Implemented user authentication and authorization using JWT.",
        "Integrated frontend with backend APIs using Axios / Fetch API.",
        "Managed state in React applications using useState, useEffect, and props.",
        "Used Git and GitHub for version control and project collaboration.",
        "Tested APIs using Postman.",
        "Deployed applications on platforms like Render / Netlify / Vercel."
       
      ],
    },
    {
      title: "NABH BUDDY IT SOLUTIONS, Quality Trainee Engineer",
      year:"06/2022 – 09/2023 | Nagpur",
      description:["Worked on NABH (National Accreditation Board for Hospitals) software project to support healthcare quality standards",
        "Performed manual software testing to identify bugs, errors, and functionality issues",
        "Executed test cases based on requirements and documented test results",
        "Assisted in maintaining and validating project data to ensure accuracy and consistency",
        "Collaborated with developers and team members to resolve software issues"],
       
    },
    {
      title: "SKY VISION IT SOLUTION, Frontend Developer Intern",
      year:"11/2021 – 04/2022 | NAGPUR",
      description:["Building clean and user-friendly UI layouts Using Bootstrap grid system for mobile-first design",
        "Fixing UI bugs and improving layout consistency",
        "Collaborating with team members for UI improvements",
        "Following frontend best practices and clean code standards"],
       
    },
  ];

  return (
    <section
      id="experience"
      style={{
        padding: "3rem 0",
        backgroundColor: "rgb(254, 246, 230)"

     
      }}
    >
      <Container
        style={{
          background: "#ffffff",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          overflow: "hidden",
          padding: "2rem",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: "center",
            padding: "25px",
            marginBottom: "20px",
          }}
        >
          <div style={{ textAlign: "center", }}>
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
    Experience
  </h2>
</div>

        </div>

        {/* Experience Content */}
        <Row>
          {experienceData.map((exp, index) => (
            <Col key={index} xs={12} style={{ marginBottom: "15px" }}>
              <div
                style={{
                  padding: "15px",
                  background: "#f8f9fa",
                  borderRadius: "10px",
                  borderLeft: "4px solid #2c5aa0",
                }}
              >
              <div style={{display:"flex",justifyContent:"space-between"}}>
              <h3
                  style={{
                    color: "#2c5aa0",
                    marginBottom: "8px",
                    fontSize: "1.2em",
                  }}
                >
                  {exp.title}
                </h3>

                <h5 style={{
                    color: "#000",
                    marginBottom: "8px",

                    fontSize: "1rem" }}>
                    {exp.year}
                </h5>
              </div>
               
              {Array.isArray(exp.description) ? (
                  <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: "1.8",fontFamily: "'Open Sans', sans-serif",color:"#333333" }}>
                    {exp.description.map((point, i) => (
                      <li key={i} style={{ fontSize: "16px", marginBottom: "8px" }}>
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p style={{ fontSize: "16px", lineHeight: "26px", margin: 0 }}>
                    {exp.description}
                  </p>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Experience;