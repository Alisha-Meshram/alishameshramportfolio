import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";


const MyNavbar = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      style={{
        background: "linear-gradient(to right,#141e30,#243b55)",
        padding: "15px"
      }}
      variant="dark"
    >
      <Container>

        {/* Logo */}
        <Navbar.Brand
          href="#home"
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            letterSpacing: "2px"
          }}
        >
          Aalisha.dev
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>

<Nav className="ms-auto fw-semibold">

  <Nav.Link
    href="#home"
    style={{
      color: "#ffffff",
      marginLeft: "20px",
      transition: "0.3s",
      letterSpacing: "1px"
    }}
    onMouseEnter={e => e.target.style.color="#00d4ff"}
    onMouseLeave={e => e.target.style.color="#ffffff"}
  >
    Home
  </Nav.Link>

  <Nav.Link
    href="#about"
    style={{
      color: "#ffffff",
      marginLeft: "20px",
      transition: "0.3s",
      letterSpacing: "1px"
    }}
    onMouseEnter={e => e.target.style.color="#00d4ff"}
    onMouseLeave={e => e.target.style.color="#ffffff"}
  >
    About
  </Nav.Link>

  <Nav.Link
    href="#skill"
    style={{
      color: "#ffffff",
      marginLeft: "20px",
      transition: "0.3s",
      letterSpacing: "1px"
    }}
    onMouseEnter={e => e.target.style.color="#00d4ff"}
    onMouseLeave={e => e.target.style.color="#ffffff"}
  >
    Skills
  </Nav.Link>

  <Nav.Link
    href="#project"
    style={{
      color: "#ffffff",
      marginLeft: "20px",
      transition: "0.3s",
      letterSpacing: "1px"
    }}
    onMouseEnter={e => e.target.style.color="#00d4ff"}
    onMouseLeave={e => e.target.style.color="#ffffff"}
  >
    Projects
  </Nav.Link>

  <Nav.Link
    href="#contact"
    style={{
      color: "#ffffff",
      marginLeft: "20px",
      transition: "0.3s",
      letterSpacing: "1px"
    }}
    onMouseEnter={e => e.target.style.color="#00d4ff"}
    onMouseLeave={e => e.target.style.color="#ffffff"}
  >
    Contact
  </Nav.Link>

</Nav>

</Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default MyNavbar;