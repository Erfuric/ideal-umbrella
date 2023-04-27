import React from 'react';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        <div className="project">
          <h3>Project 1</h3>
          <p>Insert project description here</p>
          <img src="https://via.placeholder.com/300x200" alt="Project 1" />
          <div className="links">
            {/* <a href="#">Link to repository</a>
            <a href="#">Link to live demo</a> */}
          </div>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Insert project description here</p>
          <img src="https://via.placeholder.com/300x200" alt="Project 2" />
          <div className="links">
            {/* <a href="#">Link to repository</a>
            <a href="#">Link to live demo</a> */}
          </div>
        </div>
        {/* Repeat the above project placeholders for as many projects as needed */}
      </div>
    </div>
  );
}

export default Portfolio;
