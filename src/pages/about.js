import React, { useState } from "react";
import Box from "@mui/material/Box";
import Styles from "../styles/about.module.scss";
import Image from "../public/images/WhatsApp_Image_2024-04-02_at_10.29.35_AM-removebg-preview.png";

const About = () => {
  const [autoHeight, setAutoHeight] = useState(false);
  const [buttonText, setButtonText] = useState("Read More");

  const handleClick = () => {
    setAutoHeight(!autoHeight);
    setButtonText(autoHeight ? "Read More" : "Show Less");
  };

  return (
    <>
      <div className={Styles.about1}>
        <Box sx={{ width: "100%" }}>
       
              <div className={Styles.aboutanimate}>
                <div className={Styles.divvvv1}>
                <div>
                  <h1 className={Styles.about2}>
                    About <span className={Styles.about3}>Me</span>
                  </h1>
                </div>
                <div>
                  <h4 className={Styles.about4}>Full Stack Developer</h4>
                </div>
                <div className={autoHeight ? Styles.about9 : Styles.about7}>
                  <p className={Styles.about5}>
                    Hello! I'm Vamsi, a Full Stack Developer with 2 years of
                    experience in web development. I specialize in creating
                    efficient and user-friendly web applications using a diverse
                    set of technologies. On the back-end, I have extensive
                    experience with Node.js and Express.js, which I use to build
                    robust and scalable server-side applications. I am
                    proficient in working with databases such as MongoDB and
                    PostgreSQL, and have a strong understanding of database
                    design and management. On the front-end, I am skilled in
                    creating dynamic and responsive user interfaces using
                    React.js, Next.js, and Angular. I have a deep understanding
                    of HTML, CSS, and JavaScript, and I am adept at using
                    libraries and frameworks such as Material UI, Bootstrap, and
                    jQuery to enhance the user experience. In addition to web
                    development, I have a solid foundation in core Java,
                    including concepts such as JSP, JDBC, Servlets, and the
                    Spring MVC flow. I am well-versed in object-oriented
                    programming (OOP) principles and design patterns. I have
                    also gained experience in creating admin panels using EJS,
                    providing clients with a powerful and intuitive interface to
                    manage their applications. I am committed to continuous
                    learning and staying updated with the latest industry
                    trends. I approach every task with enthusiasm, creativity,
                    and a commitment to excellence. I am always eager to take on
                    new challenges and expand my skillset. If you're interested
                    in learning more about my professional experience, skills,
                    or have any exciting opportunities you'd like to discuss,
                    please feel free to contact me. I look forward to connecting
                    with you!
                    
                  </p>
                </div>
                <div>
                  <button className={Styles.about6} onClick={handleClick}>
                    {buttonText}
                  </button>
                </div>
                </div>
                <div className={Styles.divvvv2}>
                <div className={Styles.aboutimg}>
                <img src={Image} alt="error" className={Styles.widthimg} />
              </div>
                </div>
              </div>
        </Box>
      </div>
    </>
  );
};

export default About;
