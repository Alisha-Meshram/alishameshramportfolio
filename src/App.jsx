import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import MyNavbar from "./components/MyNavbar";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <MyNavbar />
      <section id="#home">
        <Home />
      </section>
      <section id="#about">
        <About />
      </section>
      <section id="#skill">
        <Skill />
      </section>

      <section id="#project">
        <Project />
      </section>
      <section id="#experience">
      <Experience />
      </section>
     
      <section id="#contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;
