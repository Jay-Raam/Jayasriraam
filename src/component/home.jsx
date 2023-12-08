import React from "react";
import myImage from '../image/baner-4.png'; 
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.one}>
          <div className={styles.text}>
            <h1 className={styles.text1}>I'm your Friend</h1>
            <p className={styles.text2}>Find the Solution</p>
           <a href="https://www.linkedin.com/in/jayasriraam/" className={styles.alt}><button type="button" className={styles.btn}>Read More</button></a>
          </div>
          <div className={styles.image}>
            <img src={myImage} alt="the men" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
