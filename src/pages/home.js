import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "../styles/home.css";
import GitHub from "../JSXLOGOS/GitHub";
import LinkedIn from "../JSXLOGOS/LinkedIn";
import Image from "../public/images/WhatsApp_Image_2024-04-02_at_10.29.35_AM-removebg-preview.png"
const Home = () => {
  return (
    <>
      <div className="homesec">
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <div className="headsectionanim">
                <div>
                  <p className="heading">Hello,It's Me</p>
                </div>
                <div>
                  <h2 className="home-1">Vamsi Gangula</h2>
                </div>
                <div>
                  <h4 className="home-2">And I'm a <span>Full Stack Developer</span></h4>
                </div>
                <div>
                  <p className="home-3">
                    I am a B.tech student. I am intersted in Web development and
                    also doing competitive programming
                  </p>
                </div>
                <div>
                    <ul className="home-4">
                        <li className="home-5">
                          <span><GitHub/></span>
                        </li>
                        <li className="home-6">
                        <span><LinkedIn/></span>
                        </li>
                        <li  className="home-6"> Naukri</li>
                    </ul>
                </div>
                <div>
                    <button className="home-7">
                        Download Resume
                    </button>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="home-img">
                <img src={Image} alt="error" width={500} />
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Home;
