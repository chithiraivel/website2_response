import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import a from "../src/Assets/8.png";

const Doger = () => {
  return (
    <div>
      <div className="doger">
        <div className="dog5">
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} className="dog4">
              <Typography className="dog1">
                Love dogs? Get paid for it!
              </Typography>
              <Typography className="dog2">
                Caring for dogs is what you do best. Connecting dog walkers,
                sitters, and trainers with a nationwide community of pet parents
                who have dog walking, overnight sitting & boarding, or training
                needs is what we do best. Build your business and become your
                own boss with Wag!.
              </Typography>
              <Typography className="dog3">
                Meet some Pet Caregivers who walk for Wag!
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src={a} />
            </Grid>
          </Grid>

          
        </div>
        
      </div>
      <Grid container spacing={1}>
            <Grid item xs={12} md={12} className="dog6">

            </Grid>
            </Grid>
    </div>
  );
};

export default Doger;
