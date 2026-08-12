import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-title">
            <p>01 / About</p>
            <h1>
              The person behind <br />
              the keyboard.
            </h1>
          </div>

          <div className="about-hero">
            <div className="about-hero-left">
              <p className="hero-firstp">
                Hi, I'm <span>Temur Nurmurodov</span> - a student of Najot
                Talim. I live in Kattakurgan. I from Uzbekistan. I'm sexteen
                years old. I was born in Kattakurgan. I am in programm for 2
                years. My experence is a little for now
              </p>

              <p className="hero-secondp">
                When I started the programmer then I was 14 years old. I
                interested to developer. I'll study at PDP University. So I try
                for IELTS 9 a lot. I have been to Turkey. I traveled to much
                places. My hobby is coding and traveling. I love myself.
              </p>

              <p className="hero-thirdp">
                I am living in Samarkand. Given that I am learning programmer
                and English at the moment. I will be senior programmer after 3
                years. In short my goals are very much.
              </p>

              <div className="hero-left-bottom">
                <h2 className="bottom-title">Where I'm headed</h2>

                <ul className="skills-ul">
                  <li>
                    <i class="fa-solid fa-chevron-left"></i>Join a product team
                    where design and engineering share equal respect
                  </li>
                  <li>
                    <i class="fa-solid fa-chevron-left"></i>
                    Build tools that help creators do more and stress less
                  </li>
                  <li>
                    <i class="fa-solid fa-chevron-left"></i>Contribute
                    meaningfully to open-source infrastructure at scale
                  </li>
                </ul>

                <div className="location">
                  <div>
                    <p>Location</p>
                    <h3>Samarkdand, Kattakurgan</h3>
                  </div>

                  <div>
                    <p>Studying</p>
                    <h3>WEB programm</h3>
                  </div>

                  <div>
                    <p>Interest</p>
                    <h3>Swimming, music</h3>
                  </div>

                  <div>
                    <p>Language</p>
                    <h3>Uzbek, English</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-hero-right">
              <p className="right-title">
                <i class="fa-solid fa-user-graduate"></i>Education Journey
              </p>

              <div className="box-parent">
                <div className="box">
                  <p className="year">2020 - 2021</p>
                  <h2>IT Center</h2>

                  <p className="academy">IT Center Academy Kattakurgan</p>

                  <p className="description">
                    Focused on mathematics and computer science. Founded the
                    school's first coding club and placed 2nd in the state
                    programming olympiad.
                  </p>
                </div>
                <div className="box">
                  <p className="year">2020 - Present</p>
                  <h2>Najot Talim</h2>

                  <p className="academy">Samarkand 95 Rudaki - A house</p>

                  <p className="description">
                  Major in Software Engineering, minor in Human-Computer Interaction. GPA: 3.8/4.0. Research assistant in the HCI lab.
                  </p>
                </div>
                <div className="box">
                  <p className="year">Future 2027</p>
                  <h2>PDP University $ Full-Time Role</h2>

                  <p className="academy">PDP University Tashkent Sergeli</p>

                  <p className="description">
                   Targeting a product engineering or design engineering role at a company that cares equally about aesthetics and reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
