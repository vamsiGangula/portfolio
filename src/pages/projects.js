import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Styles from "../styles/projects.module.scss";
const Projects = () => {
  return (
    <>
      <div className={Styles.projects1}>
        <Box sx={{ width: "100%" }}>
          <div className={Styles.projects2}>
            <h1 className={Styles.projects3}>
              <span style={{color: "#fff"}}>My</span> <span style={{ color: "cyan" }}>Projects</span>
            </h1>
          </div>

          <div className={Styles.sectt}>
            <div className={`${Styles.projects4} ${Styles.projects8}`}>
              <div>
                <div>
                  <h1 className={Styles.projects5}>Website Names</h1>
                </div>
                <div>
                  <ul className={Styles.projects6}>
                    <li>AlmondHouse Sweets</li>
                    <li>Samsara Diamonds</li>
                    <li>Distinct Origin</li>
                    <li>Morning Mist</li>
                    <li>Shree Mahalaxmi Sweets</li>
                    <li>Project-K</li>
                    <li>Bisi Bisi</li>
                    <li>Clovy</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`${Styles.projects4} ${Styles.projects8}`}>
              <div>
                <div>
                  <h1 className={Styles.projects5}>Website Links</h1>
                </div>
                <div>
                  <ul className={Styles.projects6}>
                    <li>
                      <a
                        href="https://www.almondhouse.com/"
                        className={Styles.projects7}
                      >
                        almondhouse
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://samsaradiamonds.com/"
                        className={Styles.projects7}
                      >
                        samsara diamonds
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.distinctorigins.com/"
                        className={Styles.projects7}
                      >
                        distinct origins
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://morningmist.in/"
                        className={Styles.projects7}
                      >
                        morning mist
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://axlr.co.in/"
                        className={Styles.projects7}
                      >
                        shree Mahalaxmi Sweets
                      </a>
                    </li>
                    <li>
                      <a
                        href=" https://www.bisibisi.in/"
                        className={Styles.projects7}
                      >
                        Bisi Bisi
                      </a>
                    </li>
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

export default Projects;
