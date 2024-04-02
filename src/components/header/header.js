import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Styles from "./header.module.scss";

const Header = () => {
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
                  <li className={Styles.navheads}><Link to="/" className={Styles.headd}>Home</Link></li>
                  <li className={Styles.navheads}><Link to="/about" className={Styles.headd}>About</Link></li>
                  <li className={Styles.navheads}><Link to="/skills" className={Styles.headd}>Skill</Link></li>
                  <li className={Styles.navheads}><Link to="/experience" className={Styles.headd}>Experience</Link></li>
                  <li className={Styles.navheads}><Link to="/projects" className={Styles.headd}>Projects</Link></li>
                  <li className={Styles.navheads}><Link to="/contact" className={Styles.headd}>Contact</Link></li>
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
