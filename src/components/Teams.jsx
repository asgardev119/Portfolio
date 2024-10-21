import React, { useEffect } from "react";
import "../styles/team.css";
import VanillaTilt from "vanilla-tilt";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { pageIds } from "../utils/contants";

export const Teams = () => {
  const members = [
    {
      name: "Asgar Ansari",
      role: "front-End developer",
      dp: "/images/asgar.png",
      linkdn: "https://www.linkedin.com/in/asgar-ansari-30a43b216/",
      dec: " Currently pursuing B.Tech in Computer Science and Engineering, actively seeking opportunities in frontend development.",
    },

    {
      name: "Irfan Ansari",
      role: "front-End developer",
      dp: "/images/irf.jpg",
      linkdn: "https://www.linkedin.com/in/iirfanansarii/",
      dec: " Full-stack web developer with 2.11 years of experience, specializing in backend development with a focus on the Node.js ecosystem.",
    },

    {
      name: "Mukesh Kumar",
      role: "front-End developer",
      dp: "/images/mu.jpg",
      linkdn: "https://www.linkedin.com/in/mukesh-kumar-4597a0146/",
      dec: "Challenging myself is a big challenge and convert the ideas or logic into code. I am a MERN stack developer and specialist in React.js and Next.js.",
    },

    {
      name: "Jahangeer Ansari",
      role: "front-End developer",
      dp: "/images/jah.jpg",
      linkdn: "https://www.linkedin.com/in/jahangeer-ansari/",
      dec: " I have developed a deep understanding of the intricacies of designing, developing, multiple web-based applications.",
    },
    
  ];

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
  });

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container" id={pageIds.teams}>
      <h1>Teams</h1>

      <div className="cards">
        <Slider {...settings}>
          {members.map((obj) => {
            return (
              <div className="card">
                <div className="profileDp">
                  {" "}
                  <img src={obj.dp} alt="" />
                </div>
                <b>{obj.name}</b>
                <p>{obj.dec}</p>

                <button>
                  <a href={obj.linkdn}>View profile</a>
                </button>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
