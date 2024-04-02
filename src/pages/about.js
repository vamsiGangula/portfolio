import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Styles from "../styles/about.module.scss";
import Image from "../public/images/WhatsApp_Image_2024-04-02_at_10.29.35_AM-removebg-preview.png"

const About = () => {
  return (
    <>
      <div className={Styles.about1}>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <div className={Styles.aboutimg}>
                <img src={Image} alt="error" width={350}/>
              </div>
            </Grid>
            <Grid item xs={8}>
              <div className={Styles.aboutanimate}>
                <div>
                  <h1 className={Styles.about2}>About <span className={Styles.about3}>Me</span></h1>
                </div>
                <div>
                  <h4 className={Styles.about4}>Full Stack Developer</h4>
                </div>
                <div className={Styles.about7}>
                  <p className={Styles.about5}>
                    Certainly! Here's a condensed version of the "About Me"
                    section in two paragraphs: Hello! I'm Vamsi Gangula, a
                    passionate Full Stack Developer currently pursuing my B.Tech
                    degree. With a strong background in both front-end and
                    back-end development, I specialize in creating efficient and
                    user-friendly web applications. Leveraging technologies such
                    as React, Node.js, and MongoDB, I have successfully
                    delivered a variety of projects ranging from e-commerce
                    platforms to blogging websites. Committed to continuous
                    learning and staying updated with the latest industry
                    trends, I approach every task with enthusiasm, creativity,
                    and a commitment to excellence.
                  </p>
                  <p className={Styles.about5}>Outside of coding, I enjoy participating in coding challenges, exploring new technologies, and contributing to open-source projects. With a keen interest in web development and competitive programming, I am eager to take on new challenges, expand my skillset, and contribute to meaningful projects that make a positive impact. If you're interested in learning more about my professional experience, skills, or have any exciting opportunities you'd like to discuss, please feel free to contact me. I look forward to connecting with you!</p>
                </div>
                <div>
                    <button className={Styles.about6}>
                        Read More
                    </button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default About;
