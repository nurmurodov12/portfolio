import React from "react";
import "./project.css";

const Project = () => {
  const projects = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrwVBt7QqSm7OA1OVKIPLAoMU9Rx3CoeLFuZNZ2-LgnT_1TIrcIihkOhOBxyZWdg&s=10&ec=121924562",
      url: "https://project-26-bice.vercel.app/",
      description:
        "This project created for furniture and products. I made without AI.",
      gitHUb: "https://github.com/nurmurodov12/project-26",
      title: "Shop App",
    },
    {
      id: 2,
      image: "https://i.ibb.co/fYNQVTYX/2026-08-12-121229.png",
      url: "https://smart-edu-crm.vercel.app",
      description:
        "This was for Study Center. I have work for 2 months. I made without Cloude AI. I think this project is good and comfortable ",
      gitHUb: "https://github.com/nurmurodov12/smartEduCRM",
      title: "Smart Edu CRM",
    },
    {
      id: 3,
      image: "https://i.ibb.co/HDJ91Nmz/2026-08-12-121526.png",
      url: "https://imtihon-6-beta.vercel.app",
      description:
        "This project made for shopping. You can buy and sell in this website. In short this site is comfortable. I know small however I love this site",
      gitHUb: "https://github.com/nurmurodov12/imtihon-6",
      title: "Shop App",
    },
    {
      id: 4,
      image: "https://media.istockphoto.com/id/1314210006/photo/grocery-store-shop-in-vintage-style-with-fruit-and-vegetables-crates-on-the-street.jpg?s=612x612&w=0&k=20&c=UFL3bRQkWH7dt6EMLswvM4u8-1sPQU9T5IFHXuBbClU=",
      url: "https://project-23-two.vercel.app",
      description:
        "This site isn't working. Given that I must fix the API, so this isn't working.",
      gitHUb: "https://github.com/nurmurodov12/Project-23",
      title: "Online-Shop",
    },
  ];

  return (
    <div className="project">
      <div className="container">
        <div className="project-content">
          <div className="project-title">
            <p className="title-p">02 / PROJECTS</p>
            <h1>
              Things I've built <br /> and shipped.
            </h1>
            <p className="title-p2">
              Personal projects, freelance work, and open-source contributions —
              a cross-section of what I care about. Code on laptop screen
            </p>
          </div>

          <div className="parent-project">
            {projects.map((val) => {
              return (
                <div className="project-box">
                  <div className="project-box-top">
                    <img src={val.image} alt="" />
                  </div>

                  <div className="project-box-bottom">
                    <h3>{val.title}</h3>
                    <p>{val.description}</p>

                    <div className="btns">
                      <button></button>

                      <button class="button-89" role="button">
                        <a href={val.gitHUb}>
                          <i class="fa-brands fa-github"></i>
                        </a>
                      </button>

                      <button className="button-89" role="button">
                        <a href={val.url}>
                          <i class="fa-solid fa-globe"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
