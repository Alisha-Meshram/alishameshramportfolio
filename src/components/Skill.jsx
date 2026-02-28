import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHtml5 } from "react-icons/fa";
import { PiFileCssBold } from "react-icons/pi";
import { FaBootstrap } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { TbBrandReact } from "react-icons/tb";
import { FaSquareGithub } from "react-icons/fa6";

const Skill = () => {
  const Skill=[
   { name:'HTML',icon:<FaHtml5 />},
   { name:'CSS',icon:< PiFileCssBold  />},
   { name:'Bootstrap',icon:<FaBootstrap />},
   { name:'Javascript',icon:<RiJavascriptFill />},
   { name:'React',icon:<TbBrandReact />},
   { name:'Node.Js',icon:<RiNodejsLine />},
   { name:'MangoDB',icon:<SiMongodb />},
   { name:'Express.Js',icon:<SiExpress />},
   { name:'SQL',icon:<TbBrandMysql />},
   { name:'GitHub',icon:<FaSquareGithub />},
 
  
  ]
  return (
    <section
      id="skill"
      style={{
        padding: "100px 0",
        backgroundColor: "#fef6e6"
      }}
    >
      <Container>

        {/* Title */}
        
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
          Technical Skills
        </h2>
      </div>
       

        <Row>

{Skill.map((skill) => (

  <Col md={3} sm={4} xs={6} key={skill}>

    <div
      style={{
        textAlign: "center",
        padding: "25px",
        marginBottom: "20px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        backgroundColor: "white",
        
        transition: "0.3s",
        cursor: "pointer"
      }}

      onMouseOver={(e)=>{
        e.currentTarget.style.transform="translateY(-5px)";
        e.currentTarget.style.boxShadow="0px 8px 20px rgba(0,0,0,0.15)";
      }}

      onMouseOut={(e)=>{
        e.currentTarget.style.transform="translateY(0px)";
        e.currentTarget.style.boxShadow="none";
      }}

    >

      <div style={{marginBottom:"10px",fontSize:"1.5rem",fontWeight:"800"}}>
        {skill.icon}
      </div>

      <h6 style={{fontSize:"1.5rem",fontWeight:"800"}}>{skill.name}</h6>

    </div>

  </Col>

))}

</Row>

      </Container>
    </section>
  );
};

export default Skill;