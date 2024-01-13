import React from "react";
import styles from "./Contact.module.css";
import myImage_1 from '../image/image 22.png';
import myImage_2 from '../image/image 24.png';
import myImage_3 from '../image/image 25.png';
import myImage_4 from '../image/image 26.png';


function Contact(){
    const d = new Date();
    return <div className={styles.contact}>
        <div className={styles.container}>
            <div className={styles.one}>
                <div className={styles.two}>
                    <div className={styles.logo_text}>
                         <div className={styles.text}>
                                    <h1 className={styles.name}>Jayasriraam</h1>
                                    <h4>Welcome To Tech World</h4>
                         </div>
                         <div className={styles.link}>
                                <a href="https://www.instagram.com/_ivanjay_/">
                                     <img src={myImage_1} alt="instagram" />
                                </a>
                                <a href="https://twitter.com/ivan_jayram?t=0ohlOMl-kJ4vww7czNHjSA&s=09">
                                    <img src={myImage_2} alt="x" />
                                </a>
                                <a href="https://github.com/Jay-Raam">
                                    <img src={myImage_3} alt="github" />
                                </a>
                                <a href="https://www.linkedin.com/in/jayasriraam">
                                    <img src={myImage_4} alt="linkedin" /> 
                                </a>
                         </div>
                    </div>
                </div>
                  <div className={styles.menu}>
                        <ul className={styles.five}>
                            <a href="/"><li>Focus</li></a>
                            <a href="/"><li>Goal</li></a>
                            <a href="/"><li>Success</li></a>
                            <a href="/"><li>Do all Time</li></a>
                        </ul>
                    </div>
                <div className={styles.three}>
                   <div className={styles.contact1}>
                        <h1>Get in Touch</h1>
                             <div className={styles.link_text}>
                                <a href="https://www.instagram.com/_ivanjay_/">_ivanjay_</a>
                                <a href="/">Jayasriraam.job@gmail.com</a>
                                <a href="/">+91 9790161669</a>
                             </div>
                    </div>
                </div>
            </div>

            <div className={styles.copy}>
                    <h6>Jayasriraam</h6>
                    <p>{d.getFullYear()} Copyright Received By Jayasriraam</p>
            </div>
        </div>
    </div>
}

export default Contact;
