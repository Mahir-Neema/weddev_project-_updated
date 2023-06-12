import React from "react";
import "./AboutTrainer.css";

function AboutTrainer() {
  return (
    <>
      <div className="about_trainer_container">
        <div className="about_trainer_content">
          <div className="trainer_name">Partha Chatterjee</div>
          <div className="trainer_des_heading">(International Karate Trainer)</div>
          <p className="trainer_des">
            Partha is a renowned karate trainer and part of Japan Karate
            Association World Federation. He has trained thousands of students
            in his career and very passionate in this field. He's a part of the
            reverred Shotokan group in India.
          </p>
        </div>
        <div className="about_trainer_image">
          <img
            src="https://uploads-ssl.webflow.com/6470f486d88df1dd87238a7e/6470f53b7e03b0faa8a41373_trainer1.png"
            alt="Trainer Profile image"
          />
        </div>
      </div>
    </>
  );
}

export default AboutTrainer;
