import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">SYNET W MAAONEKEDWE </span>
            from <span className="purple"> Ntcheu, Malawi.</span>
            <br />
            I am currently employed as a software developer at Kingdom Builders
            Academy.
            <br />
            I have completed Bachelor of Electronics and Computer Engineering at
            MUBAS
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />
              Watching & Playing Football Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Synet</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
