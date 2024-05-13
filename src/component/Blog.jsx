import React, { useEffect } from "react";
import myImage4 from "../image/img_4.jpg";
import myImage5 from "../image/img_2.jpg";
import myImage6 from "../image/img_3.jpg";
import myImage7 from "../image/img_1.jpg";
import myImage8 from "../image/img_13.webp";
import myImage9 from "../image/img_14.jpg";
import "./blog.css";

const BloggerAPIComponent = () => {
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
    <div className="container">
      <h1 className="gal">Blog</h1>
      <ul className="gal_1">
        <li className="gal_2 hidden">
          <img src={myImage4} alt="Project" className="gal_3" />
          <p className="gal_4">Tamil Famous Books and Writers</p>
          <a
            href="https://jayasriraam.blogspot.com/2024/01/tamil-literature.html"
            target="_blank"
            rel="noopener noreferrer"
            className="gal_5"
          >
            <button type="button" className="gal_6">
              Read More
            </button>
          </a>
        </li>

        <li className="gal_2 hidden">
          <img src={myImage5} alt="Project" className="gal_3" />
          <p className="gal_4">POPULAR WRITERS AND OUR BOOKS</p>
          <a
            href="https://jayasriraam.blogspot.com/2024/01/popular-writers-and-our-books.html"
            target="_blank"
            rel="noopener noreferrer"
            className="gal_5"
          >
            <button type="button" className="gal_6">
              Read More
            </button>
          </a>
        </li>
        <li className="gal_2 hidden">
          <img src={myImage6} alt="Project" className="gal_3" />
          <p className="gal_4">OPEN-SOURCE BOOKS VARIOUS TOPICS</p>
          <a
            href="https://jayasriraam.blogspot.com/2024/01/open-source-books-various-topics.html"
            target="_blank"
            rel="noopener noreferrer"
            className="gal_5"
          >
            <button type="button" className="gal_6">
              Read More
            </button>
          </a>
        </li>
        <li className="gal_2 hidden">
          <img src={myImage7} alt="Project" className="gal_3" />
          <p className="gal_4">First Gift</p>
          <a
            href="https://jayasriraam.blogspot.com/2024/02/blog-post.html"
            target="_blank"
            rel="noopener noreferrer"
            className="gal_5"
          >
            <button type="button" className="gal_6">
              Read More
            </button>
          </a>
        </li>
        <li className="gal_2 hidden">
          <img src={myImage8} alt="Project" className="gal_3" />
          <p className="gal_4">My Principle</p>
          <a
            href="https://jayasriraam.blogspot.com/2024/03/blog-post.html"
            target="_blank"
            rel="noopener noreferrer"
            className="gal_5"
          >
            <button type="button" className="gal_6">
              Read More
            </button>
          </a>
        </li>
        <li className="gal_2 hidden">
          <img src={myImage9} alt="Project" className="gal_3" />
          <p className="gal_4">Travel My Town</p>
          <a
            href="https://jayasriraam.blogspot.com/2024/04/blog-post.html"
            target="_blank"
            rel="noopener noreferrer"
            className="gal_5"
          >
            <button type="button" className="gal_6">
              Read More
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BloggerAPIComponent;
