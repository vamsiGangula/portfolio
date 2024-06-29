import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import GitHub from "../JSXLOGOS/GitHub";
import LinkedIn from "../JSXLOGOS/LinkedIn";
import Naukri from "../JSXLOGOS/Naukri";
import Image from "../public/images/WhatsApp_Image_2024-04-02_at_10.29.35_AM-removebg-preview.png";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Experience from "./experience";
import Contact from "./contact";
import Styles from "../styles/home.module.scss";
const Home = () => {
  const downloadedResume = () => {
    const link = document.createElement("a");
    link.href =
      "https://sri-mahalaxmi-sweets-images.s3.eu-north-1.amazonaws.com/productthumbnails/vamsi+resume+experience.pdf";
    link.download = "vamsi_resume.pdf";
    link.click();
  };
  return (
    <>
      <div className={Styles.homesec}>
        <Box sx={{ width: "100%" }}>
          <div className={Styles.secc}>
            <div className={Styles.headsectionanim}>
              <div>
                <p className={Styles.heading}>Hello,It's Me</p>
              </div>
              <div>
                <h2 className={Styles.home_1}>Vamsi Gangula</h2>
              </div>
              <div>
                <h4 className={Styles.home_2}>
                  And I'm a <span>Full Stack Developer</span>
                </h4>
              </div>
              <div>
                <p className={Styles.home_3}>
                  Hello! I'm Vamsi, a Full Stack Developer who graduated in
                  2021. I have a passion for coding and problem-solving, which
                  led me to pursue a career in software development. I
                  specialize in creating efficient and user-friendly web
                  applications using technologies such as React, Node.js, and
                  MongoDB. During my studies, I developed a strong background in
                  both front-end and back-end development. This has equipped me
                  with the skills to handle all aspects of web development, from
                  designing responsive user interfaces to setting up and
                  managing databases. I have successfully delivered a variety of
                  projects, ranging from e-commerce platforms to blogging
                  websites. These experiences have honed my coding skills and
                  taught me the importance of writing clean, maintainable code.
                  I am committed to continuous learning and staying updated with
                  the latest industry trends. I approach every task with
                  enthusiasm, creativity, and a commitment to excellence. I am
                  always eager to take on new challenges and expand my skillset.
                  Outside of coding, I enjoy participating in coding challenges,
                  exploring new technologies, and contributing to open-source
                  projects. I am eager to contribute to meaningful projects that
                  make a positive impact. If you're interested in learning more
                  about my professional experience, skills, or have any exciting
                  opportunities you'd like to discuss, please feel free to
                  contact me. I look forward to connecting with you!
                </p>
              </div>
              <div>
                <ul className={Styles.home_4}>
                  <li
                    className={Styles.home_5}
                    onClick={() =>
                      window.open("https://github.com/VamsiGangula")
                    }
                  >
                    <span>
                      <GitHub />
                    </span>
                  </li>
                  <li
                    className={Styles.home_6}
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/vamsi-gangula-5786b822b/"
                      )
                    }
                  >
                    <span>
                      <LinkedIn />
                    </span>
                  </li>
                  <li
                    className={Styles.home_6}
                    onClick={() =>
                      window.open(
                        "https://www.naukri.com/mnjuser/profile?id=&altresid"
                      )
                    }
                  >
                    {" "}
                    <span>
                      <Naukri />
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <button className={Styles.home_7} onClick={downloadedResume}>
                  Download Resume
                </button>
              </div>
            </div>
            <div className={Styles.home_img}>
              <img src={Image} alt="error" className={Styles.img_wii}/>
            </div>
          </div>
        </Box>
      </div>
      <section className="allsec">
        <About />
      </section>
      <section className="allsec">
        <Skills />
      </section>
      <section className="allsec">
        <Experience />
      </section>
      <section className="allsec">
        <Projects />
      </section>
      <section className="allsec">
        <Contact />
      </section>
    </>
  );
};

export default Home;
