import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Styles from "../styles/skills.module.scss";
const Skills = () => {
  return (
    <>
      <div className={Styles.skills1}>
        <Box sx={{ width: "100%" }}>
          <div className={Styles.skills2}>
            <h1 className={Styles.skills3}>
              My <span style={{ color: "cyan" }}>Skills</span>
            </h1>
          </div>

          {/* <div>
                <h1>My <span>Skills</span></h1>
            </div> */}
          <div className={Styles.sectt}>
            <div className={`${Styles.skills4} ${Styles.skills9}`}>
              <div>
                <h1 className={Styles.skills5}>Programming Language</h1>
              </div>
              <div>
                <ul className={Styles.skills6}>
                  <li>Java Script</li>
                  <li>Java</li>
                  <li>C++</li>
                </ul>
              </div>
            </div>
            <div className={`${Styles.skills4} ${Styles.skills8}`}>
              <div>
                <div>
                  <h1 className={Styles.skills5}>Course Work</h1>
                </div>
                <div>
                  <ul className={Styles.skills6}>
                    <li>Object oriented Programming Language (OOPS) </li>
                    <li>Data Base MAnagement System (DBMS)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={Styles.sectt}>
            <div className={`${Styles.skills4} ${Styles.skills9}`}>
              <div>
                <div>
                  <h1 className={Styles.skills5}>Web Development</h1>
                </div>
                <div>
                  <ul className={Styles.skills6}>
                    <li>Html</li>
                    <li>Css</li>
                    <li>Boot Strap</li>
                    <li>Java Script</li>
                    <li>Jquery</li>
                    <li>React js</li>
                    <li>Angular 17</li>
                    <li>Next js</li>
                    <li>Material Ui</li>
                    <li>Nodejs</li>
                    <li>Express JS</li>
                    <li>Ejs</li>
                    <li>Mongodb</li>
                    <li>Postgreql</li>
                    <li>Aws Management</li>
                    <li>Core Java</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`${Styles.skills4} ${Styles.skills8}`}>
              <div>
                <div>
                  <h1 className={Styles.skills5}>Certification</h1>
                </div>
                <div>
                  <ul className={Styles.skills6}>
                    <li>Full Stack Java Developer</li>
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

export default Skills;
