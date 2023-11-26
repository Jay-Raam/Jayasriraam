import React from "react";
import styles from "./Portfolio.module.css";
import myImage_1 from '../image/m(4).png';
import myImage_2 from '../image/m(8).png';
import myImage_3 from '../image/m(7).png';
import myImage_4 from '../image/m(5).png';
import myImage_5 from '../image/m(6).png';
import myImage_6 from '../image/m5.jpg';

function Portfolio() {
  return (
    <div className={styles.portfolio}>
        <div className={styles.container}>
            <div className={styles.one}>
            <div className={styles.text}>
               <h1>Works</h1>
            </div>
                <div className={styles.second}>
                <a href="https://www.figma.com/file/hvoZq3wxifB07rsktJE5iA/2-week-work?type=design&mode=design&t=LV6j8hb9EARYNyA0-1">
                 <img src={myImage_5} alt="Project" className={styles.image}/></a>
                </div>
                <div className={styles.second}>
                <a href="https://github.com/Jay-Raam/My_portfolio.git">
                    <img src={myImage_1} alt="Project" className={styles.image} /></a>
                    <a href="https://www.figma.com/file/7mzIvV2Ku3NGb2PsSuw7Ut/Week-Work?type=design&mode=design&t=LV6j8hb9EARYNyA0-1">
                    <img src={myImage_3} alt="Project" className={styles.image}/></a>
                </div>
                <div className={styles.second}>
                <a href="https://github.com/Jay-Raam/Login_page.git">
                 <img src={myImage_2} alt="Project" className={styles.image}/></a>
                 <a href="https://www.figma.com/file/fsLirvPiTLGu65V1mRZzk0/Untitled?type=design&mode=design&t=LV6j8hb9EARYNyA0-1">
                    <img src={myImage_4} alt="Project" className={styles.image}/></a>
                </div>
                <div className={styles.second}>
                <a href="https://www.figma.com/file/hvoZq3wxifB07rsktJE5iA/2-week-work?type=design&mode=design&t=LV6j8hb9EARYNyA0-1">
                 <img src={myImage_6} alt="Project" className={styles.image}/></a>
                </div>
            </div>
        </div>     
    </div>
  );
}
export default Portfolio;
