import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import myImage from "../../image/my-image.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home-content">
          <div className="hero">
            <div className="hero-left">
              <h1>
                I create & make <br />
                <span>digital things</span>
                <br /> that matter
              </h1>

              <p>
                I am a junior developer for now. I worked at small projects. I
                will study at PDP University. I will get IELTS 8+. These are my
                goals.{" "}
              </p>

              <div className="header-btns">
                <button className="first-btn">View My Work</button>
                <button className="second-btn">
                  <Link className="link-none">Get in Touch</Link>
                </button>
              </div>

              <div className="experence">
                <div className="cart">
                  <h2 className="text-1">3+</h2>
                  <p>Projects Completed</p>
                </div>

                <div className="cart cart-2">
                  <h2>3+</h2>
                  <p>Projects Completed</p>
                </div>

                <div className="cart cart-3">
                  <h2 className="text-3">24+</h2>
                  <p>Projects Completed</p>
                </div>
              </div>
            </div>

            <div className="hero-right">
              <div className="user">
                <div className="user-top">
                  <img src={myImage} alt="" />
                </div>

                <div className="user-bottom">
                  <h2>Temur Nurmurodov</h2>
                  <p>
                    <i class="fa-solid fa-location-dot"></i> Samarkand,
                    Kattakurgan
                  </p>

                  <div className="skills">
                    <div className="skill">
                      <p>React</p>
                    </div>

                    <div className="skill">
                      <p>JavaScript</p>
                    </div>

                    <div className="skill">
                      <p>Figma</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="talents">
            <Link className="none">
              <div className="talent">
                <div className="icon">
                  <i class="fa-solid fa-book"></i>
                </div>
                <p className="talent-p1">My Story</p>
                <p className="talent-p2">Background & education</p>
              </div>
            </Link>

               <Link className="none">
              <div className="talent">
                <div className="icon">
                 <i class="fa-solid fa-terminal"></i>
                </div>
                <p className="talent-p1">Tech Stack</p>
                <p className="talent-p2">Tools & languages </p>
              </div>
            </Link>


               <Link className="none">
              <div className="talent">
                <div className="icon">
                  <i class="fa-solid fa-code"></i>
                </div>
                <p className="talent-p1">Projects</p>
                <p className="talent-p2">What i've built</p>
              </div>
            </Link>

               <Link className="none">
              <div className="talent">
                <div className="icon">
                 <i class="fa-solid fa-envelope"></i>
                </div>
                <p className="talent-p1">Contact</p>
                <p className="talent-p2">Let's collobrate</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
