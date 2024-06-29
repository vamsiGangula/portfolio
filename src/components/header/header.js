import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Styles from "./header.module.scss";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");  
  const handleClick = (linkName)=> {
    setActiveLink(linkName);
  }
  return (
    <>
      <div className={Styles.test1}>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <div>
                <h4 className={Styles.port}>Portfolio</h4>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{display : "flex"}}>
                <ul className={Styles.navtext}>
                  <li className={`${Styles.navheads} ${activeLink === "home" ? Styles.active : ""}`}><Link to="/" className={Styles.headd} onClick={() => handleClick("home")}>Home</Link></li>&nbsp;&nbsp;&nbsp;&nbsp;
                  <li className={`${Styles.navheads} ${activeLink === "about" ? Styles.active : ""}`}><Link to="/about" className={Styles.headd} onClick={() => handleClick("about")}>About</Link></li>&nbsp;&nbsp;&nbsp;&nbsp;
                  <li className={`${Styles.navheads} ${activeLink === "skills" ? Styles.active : ""}`}><Link to="/skills" className={Styles.headd} onClick={() => handleClick("skills")}>Skill</Link></li>&nbsp;&nbsp;&nbsp;&nbsp;
                  <li className={`${Styles.navheads} ${activeLink === "experience" ? Styles.active : ""}`}><Link to="/experience" className={Styles.headd} onClick={() => handleClick("experience")}>Experience</Link></li>&nbsp;&nbsp;&nbsp;&nbsp;
                  <li className={`${Styles.navheads} ${activeLink === "projects" ? Styles.active : ""}`}><Link to="/projects" className={Styles.headd} onClick={() => handleClick("projects")}>Projects</Link></li>&nbsp;&nbsp;&nbsp;&nbsp;
                  <li className={`${Styles.navheads} ${activeLink === "contact" ? Styles.active : ""}`}><Link to="/contact" className={Styles.headd} onClick={() => handleClick("contact")}>Contact</Link></li>&nbsp;&nbsp;&nbsp;&nbsp;
                </ul>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Header;