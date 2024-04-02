
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
            <h1 className={Styles.skills3}>My <span style={{color : "cyan"}}>Skills</span></h1>
            </div>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {/* <div>
                <h1>My <span>Skills</span></h1>
            </div> */}
            <Grid item xs={6}>
            <div className={`${Styles.skills4} ${Styles.skills9}`}>
                <div>
                    <div>
                        <span className={Styles.skills5}>Programming Language</span>
                    </div>
                    <div>
                        <ul className={Styles.skills6}>
                            <li >Java Script</li>
                            <li >Java</li>
                            <li >C++</li>
                        </ul>
                    </div>
                </div>
            </div>
            </Grid>
            <Grid item xs={6}>
            <div  className={`${Styles.skills4} ${Styles.skills8}`} >
                <div>
                    <div>
                        <span className={Styles.skills5}>Course Work</span>
                    </div>
                    <div>
                        <ul className={Styles.skills6}>
                            <li>Object oriented Programming Language (OOPS) </li>
                            <li>Data Base MAnagement System (DBMS)</li>
                        </ul>
                    </div>
                </div>
            </div>
            </Grid>
          </Grid>

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
            <div className={`${Styles.skills4} ${Styles.skills9}`}>
                <div>
                    <div>
                        <span className={Styles.skills5}>Web Development</span>
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
            </Grid>
            <Grid item xs={6}>
            <div className={`${Styles.skills4} ${Styles.skills8}`}>
                <div>
                    <div>
                        <span className={Styles.skills5}>Certification</span>
                    </div>
                    <div>
                        <ul className={Styles.skills6}>
                            <li>Full Stack Java Developer</li>
                        </ul>
                    </div>
                </div>
            </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Skills;
