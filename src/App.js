import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Skill from "./component/Skill";
import Blog from "./component/Blog";
import Portfolio from "./component/Work";
import Contact from "./component/Contact";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Home />
      </header>
      <div className="about" id="about">
        <About />
      </div>
      <div className="skill">
        <Skill />
      </div>
      <div className="blog" id="blog">
        <Blog />
      </div>
      <div className="Portfolio">
        <Portfolio />
      </div>
      <div className="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
