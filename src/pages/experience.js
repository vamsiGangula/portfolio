import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Styles from "../styles/experience.module.scss";
const Experience = () => {
  return (
    <>
      <div className={Styles.experience1}>
        <Box sx={{ width: "100%" }}>
          <div className={Styles.experience2}>
            <h1 className={Styles.experience3}>
              My <span style={{ color: "cyan" }}>Experience</span>
            </h1>
          </div>
          <div className={Styles.sectt}>
            <div className={`${Styles.experience4} ${Styles.experience9}`}>
              <div>
                <div>
                  <h1 className={Styles.experience5}>
                    Dr Reddy Foundations
                  </h1>
                </div>
                <div>
                  <ul className={Styles.experience6}>
                    <li>Full Stack Developer</li>
                    <li>Duration : 2024 March To Present</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`${Styles.experience4} ${Styles.experience8}`}>
              <div>
                <div>
                  <h1 className={Styles.experience5}>Axlr Data Pvt.Ltd</h1>
                </div>
                <div>
                  <ul className={Styles.experience6}>
                    <li>Full Stack Web Developer</li>
                    <li>Creating E-commerce Websites</li>
                    <li>Duration 2022 to 2024</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};

export default Experience;
