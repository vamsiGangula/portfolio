import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Styles from "../styles/contact.module.scss";
import TextFieldComp from "../components/textField/TextFieldComp";
import { useMediaQuery } from '@mui/material';
const Contact = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  return (
    <>
      <div className={`${Styles.contact1} ${Styles.contact6}`}>
        <Box sx={{ width: "100%" }}>
          <div>
            <h1 className={Styles.contact3}>
              Contact <span style={{ color: "cyan" }}>Me</span>
            </h1>
          </div>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={!isMobile ? 2 : 0}></Grid>
            <Grid item xs={isMobile ? 12 : 8}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                   <div className={Styles.contact4 + " contact4 "}>
                   <TextFieldComp label="Full Name" id="fullName"/>
                   </div>
                </Grid>
                <Grid item xs={6}>
                <div className={Styles.contact4 + " contact4 "}>
                   <TextFieldComp label="Email Address" id="emailAddress"/>
                   </div>
                   </Grid>
              </Grid>

              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                <div className={Styles.contact4 + " contact4 "}>
                   <TextFieldComp label="Mobile Number" id="mobileNumber"/>
                   </div>
                   </Grid>
                <Grid item xs={6}>
                <div className={Styles.contact4 + " contact4 "}>
                   <TextFieldComp label="Email Subject" id="emailSubject"/>
                   </div>
                   </Grid>
              </Grid>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12}>
                <div className={Styles.contact4 + " contact4 "}>
                   <TextFieldComp label="Your Message" id="yourMessage"/>
                   </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={!isMobile ? 2 : 0}></Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Contact;
