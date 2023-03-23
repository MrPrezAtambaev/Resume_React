import React from "react";
import Card from "react-bootstrap/Card";
import { FaArrowAltCircleRight } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bolotbekov Akyl </span>
            from <span className="purple"> Kyrgyzstan, Bishkek</span>
            <br />I am Junior Front-end Developer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <FaArrowAltCircleRight /> Playing Games
            </li>
            <li className="about-activity">
              <FaArrowAltCircleRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <FaArrowAltCircleRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">MrPrezAtambaev</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
