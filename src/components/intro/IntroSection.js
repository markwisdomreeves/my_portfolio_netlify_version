import React from 'react'
import "./intro.css"


const IntroScreen = ({title, id}) => {
  return (
    <>
      <div className="intro-section-container">
        <div className="intro-section-content" id={id}>
          <h1>{title}</h1>
          <div className="intro-text-box">
            <div className="intro-text">
              <p>I am a passionate Web Developer.</p>
            </div>
            <a href="https://drive.google.com/file/d/1IZbv-AMM2DPuPOOhfP6C2vpsod7swkxc/view?usp=sharing" rel="noreferrer" target="_blank">Download CV</a>
            <div className="intro-text">
              <p>
                I live in Italy, Europe. I am creative and innovative in Web Development.
              </p>
              <div className="intro-text contact-info-box">
                <span>+39 377 357 3878</span>
                <span>+39 351-080-2563</span>
                <span>wisdom3510802563@gmail.com</span>
              </div>
              <p>
                I am willing to learn new technologies to improve my skills as a Great Web Developer. Apart from programming, I am also a Computer Hardware Engineer with four (4) years of work experience.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}


export default IntroScreen

