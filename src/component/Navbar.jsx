import React, { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className="App">
      <header className={`${styles.Appheader}`}>
        <nav className={`${styles.navbar}`}>
          <a href="#home" className={`${styles.logo}`}>
            Jayasriraam
          </a>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`} >
            <li onClick={removeActive}>
              <a href="#about" className={`${styles.navLink}`}>
                About
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#skill" className={`${styles.navLink}`}>
                Skill
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#blog" className={`${styles.navLink}`}>
                Blog
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#work" className={`${styles.navLink}`}>
                Works
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#contact" className={`${styles.navLink}`}>
                Contact
              </a>
            </li>
          </ul>
          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
