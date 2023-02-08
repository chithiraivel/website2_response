import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import React from "react";
import  Container  from "@mui/system/Container";
import  Box  from "@mui/system/Box";
import  Button  from "@mui/material/Button";

const Blocker = () => {
  return (
    <div> 

      <div className="blocker">
      <Typography sx={{textAlign:'center',fontSize:'40px',fontWeight:'bloder',color:'white'}}>We've been around the block</Typography>
  
      <Grid container spacing={1} >
        <Grid item xs={12} md={6} >
        <Container maxWidth='sm'>
          <Typography sx={{ display: "flex",justifyContent:'center',marginTop:'40px',marginLeft:'100px'}}>
            <Typography>
              <Typography className="blocker1">400K+ </Typography>
              <Typography className="blocker3">Pet Caregivers</Typography>
            </Typography>
            <Typography className="blocker2">
              {" "}
              Our community of 400,000+ Pet Caregivers nationwide are dog
              people, and it shows.
            </Typography>
          </Typography>
          </Container>
        </Grid>
       
        <Grid item xs={12} md={6}>
          <Typography sx={{ display: "flex",justifyContent:'center',marginTop:'40px',marginRight:'100px' }}>
            <Typography>
              <Typography className="blocker1">16M+</Typography>{" "}
              <Typography className="blocker3">Meals donated</Typography>
            </Typography>
            <Typography className="blocker2">
              {" "}
              We’ve donated over 16 million meals! A portion of our proceeds
              from the walks you book help to feed shelter dogs in your area..
            </Typography>
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={1} >
        <Grid item xs={12} md={6} >
        <Container maxWidth='sm'>
          <Typography sx={{ display: "flex",justifyContent:'center',marginTop:'40px',marginLeft:'100px'}}>
            <Typography>
              <Typography className="blocker1">5.3K+ </Typography>
              <Typography className="blocker3">Cities across the U.S.</Typography>
            </Typography>
            <Typography className="blocker2">
              {" "}
              Pet Caregivers with Wag! have a trusted 
               with over 12 million pet
               Sitting, Walking, Boarding & Training, across 5,300+ cities in all 50 U.S. states.
            </Typography>
          </Typography>
          </Container>
        </Grid>
       
        <Grid item xs={12} md={6}>
          <Typography sx={{ display: "flex",justifyContent:'center',marginTop:'40px',marginRight:'100px' }}>
            <Typography>
              <Typography className="blocker1">99%</Typography>{" "}
              <Typography className="blocker3">5-star reviews</Typography>
            </Typography>
            <Typography className="blocker2">
              {" "}
              Making Pet Parents happy is what we do best — 99% of 
              Wag! services result in a 5-star review.
            </Typography>
          </Typography>
        </Grid>
       
       <Box sx={{textAlign:'center',margin:'0 auto',marginTop:'20px'}}>
        <Button className='blocker4'>Sign Up now</Button>
        <Typography sx={{marginTop:'10px',color:'white'}}>Have some questions? Visit our FAQ page</Typography>
        </Box>
      </Grid>
      </div>
    </div>
  );
};

export default Blocker;
