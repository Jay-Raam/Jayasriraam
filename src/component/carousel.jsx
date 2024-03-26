import React, { useState, useEffect } from "react";
import styles from "./carousel.module.css"; 


const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = 3; 

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => {
        if (prevIndex === totalSlides - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 3000); 

    return () => clearInterval(interval);
  }, [totalSlides]);

  const slideStyle = {
    transform: `translateX(-${slideIndex * 100}%)`,
    transition: "transform 0.3s ease",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "center",
  };

  const slideContents = [
    {
      title: "Web Development",
      list: [
        "Html & Css",
        "JavaScript",
        "React",
        "Vite , Python",
        "Mysql , Mangodb",
        "Version Control",
      ],
    },
    {
      title: "UI/UX Development",
      list: [
        "Interactivity",
        "UX writing",
        "Prototyping",
        "Usability Testing",
        "User Research",
        "Performance Optimization",
      ],
    },
    {
      title: "Branding",
      list: [
        "Logo Design",
        "Tagline",
        "Make a Trend",
        "Marketing Strategy",
        "Customer Experience",
      ],
    },
  ];

  return (
    <div className={styles.skill}>
      <div className={styles.one}>
        <div className={styles.container}>
          <div className={styles.zero}>
            {slideContents.map((slide, index) => (
              <div
                key={index}
                className={`${styles.slide} myClass`}
                style={slideStyle}
              >
                <h1>{slide.title}</h1>
                <ul className={styles.text_list}>
                  {slide.list.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
