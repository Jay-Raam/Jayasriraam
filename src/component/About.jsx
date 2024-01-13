import React from "react";
import myImage from '../image/m11.avif'; 
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.About}>
      <div className={styles.container}>
        <div className={styles.one}>
            <div className={styles.text}>
                      <h1 className={styles.text1}>About Us</h1>
          <p className={styles.text2}>
I possess a wide range of skills in React.Js, HTML, CSS, and JavaScript, as well as C#. My specialization lies in UI/UX design, where I demonstrate exceptional attention to detail and a talent for crafting visually captivating and intuitive interfaces.
<br/>
<br/>
Eager to embark on my tech adventure, I bring not just skills, but a creative mindset. Ready to roll up my sleeves, I'm here to collaborate and breathe life into your ideas. 
<br/>
<br/>
Let's turn the ordinary into extraordinary! 🚀🎨
          </p>
           <a href="https://drive.google.com/file/d/1Y61n0IjA9nbJY-jDgymer7k38oeKK-NP/view?usp=sharing" className={styles.alt}><button type="button" className={styles.btn}>Resume</button></a>
            </div>
            <div className={styles.image}>
             <img src={myImage} alt="the men" className="image-1" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
