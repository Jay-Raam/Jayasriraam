// AIzaSyCklqSO4T8PPL8Dh9PsB90YOgA92Rq2reo
// https://jayasriraam.blogspot.com/2024/01/tamil-literature.html
// https://jayasriraam.blogspot.com/2024/01/popular-writers-and-our-books.html
// https://jayasriraam.blogspot.com/2024/01/open-source-books-various-topics.html

import React from 'react';
import myImage4 from "../image/img_4.jpg";
import myImage5 from "../image/img_2.jpg";
import myImage6 from "../image/img_3.jpg";
import "./blog.css"

const BloggerAPIComponent = () => {
  return (
    <div className="container">
      <h1 className="gal">Blog</h1>
      <ul className="gal_1">

                            <li className="gal_2">
          <img src={myImage4} alt="Project" className="gal_3" />
          <p className="gal_4">Tamil Famous Books and Writers</p>
          <a href="https://jayasriraam.blogspot.com/2024/01/tamil-literature.html" target="_blank" rel="noopener noreferrer" className="gal_5">
            <button type="button" className="gal_6">Read More</button>
          </a>
        </li>

                  <li className="gal_2">
          <img src={myImage5} alt="Project" className="gal_3" />
          <p className="gal_4">POPULAR WRITERS AND OUR BOOKS</p>
          <a href="https://jayasriraam.blogspot.com/2024/01/popular-writers-and-our-books.html" target="_blank" rel="noopener noreferrer" className="gal_5">
            <button type="button" className="gal_6">Read More</button>
          </a>
        </li>
                <li className="gal_2">
          <img src={myImage6} alt="Project" className="gal_3" />
          <p className="gal_4">OPEN-SOURCE BOOKS VARIOUS TOPICS</p>
          <a href="https://jayasriraam.blogspot.com/2024/01/open-source-books-various-topics.html" target="_blank" rel="noopener noreferrer" className="gal_5">
            <button type="button" className="gal_6">Read More</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BloggerAPIComponent;

