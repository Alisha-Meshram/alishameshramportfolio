import React from "react";
import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { MdLocationOn, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      style={{
        padding: "40px 0",
        backgroundColor: "#111",
        color: "white"
      }}
    >
      <Container style={{ textAlign: "center" }}>

        {/* Name */}
        <h4>Aalisha Meshram</h4>

        <p>MERN Stack Developer</p>


        {/* Social Links */}
        <div style={{ marginBottom: "20px" }}>

          <a
            href="https://github.com/Alisha-Meshram"
            target="_blank"
            style={{ margin: "10px", color: "white", fontSize: "24px" }}
          >
            <FaGithub />
          </a>


          <a
            href="https://www.linkedin.com/in/alisha-meshram-110835233/"
            target="_blank"
            style={{ margin: "10px", color: "white", fontSize: "24px" }}
          >
            <FaLinkedin />
          </a>

        </div>


        {/* Skills Icons */}
        <div style={{ marginBottom: "20px", fontSize: "22px" }}>

          <FaReact style={{ margin: "8px" }} />
          <FaNodeJs style={{ margin: "8px" }} />
          <SiExpress style={{ margin: "8px" }} />
          <SiMongodb style={{ margin: "8px" }} />

        </div>


        {/* Basic Info */}

        <p>
          <MdEmail /> aalishameshram15@gmail
        </p>

        <p>
          <MdLocationOn /> Nagpur, Maharashstra, India
        </p>


        <hr style={{background:"gray"}}/>


        {/* Copyright */}

        <p style={{fontSize:"14px"}}>
          © 2026 Aalisha Meshram | All Rights Reserved
        </p>


      </Container>
    </footer>
  );
};

export default Footer;