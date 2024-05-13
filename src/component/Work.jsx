import React, { useEffect } from "react";
import "./Work.css";
import myImage_1 from "../image/img_4.jpg";
import myImage_2 from "../image/gal_6.jpg";
import myImage_3 from "../image/img_7.jpg";
import myImage_4 from "../image/gal_5.jpg";
import myImage_5 from "../image/img_9.jpg";
import myImage_6 from "../image/img_6.jpg";

function Portfolio() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          entry.target.classList.remove("hidden");
        } else {
          entry.target.classList.remove("show");
          entry.target.classList.add("hidden");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="portfolio" id="work">
      <div className="container">
        <div className="one">
          <div className="text">
            <h1>Works</h1>
          </div>
          <div className="second">
            <div className="hidden gal___01">
              <a
                href="https://jayasriraam-protfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={myImage_5} alt="Project" className="image" />
              </a>
            </div>
            <div className="hidden gap gal___01">
              <a
                href="https://jay-raam.github.io/Movie/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={myImage_1} alt="Project" className="image" />
              </a>
              <a
                href="https://jayasriraam-weather.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={myImage_3} alt="Project" className="image" />
              </a>
            </div>
            <div className="hidden gap gal___01">
              <a
                href="https://github.com/Jay-Raam/Dashboard-Nextjs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={myImage_2} alt="Project" className="image" />
              </a>
              <a
                href="https://jay-raam.github.io/Blog/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={myImage_4} alt="Project" className="image" />
              </a>
            </div>
            <div className="hidden gal___01">
              <a
                href="https://jay-raam.github.io/Book/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={myImage_6} alt="Project" className="image" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
