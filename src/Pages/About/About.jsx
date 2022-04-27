import React from "react";
import PageTitle from "../Shared/PageTitle/PageTitle";

const About = () => {
  <PageTitle title="About" />;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex flex-column justify-content-center h-100">
            <h1 className="display-2 fw-bold text-blue">Ruhul Amin Sujon</h1>
            <p className="fs-5">
              My goal has always been to be a Certified MERN Stack developer.
              Last 4-5 months, I spent most of my time learning React JS, and
              I'm aiming to learning some new things in the upcoming days. I
              also hope to improve my communication and public speaking skills.
              That will be helps me to join the appropriate job sector as a full
              time MERN Stack developer. I really want to be a proactive and
              valuable team member at my company, wherever I work. I want to
              lead a team, so I will improve my leadership skills and gain more
              experience.
            </p>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://ruhul-amin-sujon-portfolio.netlify.app/"
              >
                <button className="btn btn-primary">My Portfolio</button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-center align-items-center py-3">
            <img
              className="img-fluid grow"
              src="https://i.ibb.co/YZCkmL7/ruhul-amin-sujon.png"
              alt="Ruhul Amin Sujon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
