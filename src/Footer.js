import  Typography  from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import  Box  from "@mui/system/Box";
import React from "react";
import a from '../src/Assets/1.png'
import b from '../src/Assets/13.png'

const Footer = () => {
    const arr=["Trust and Safety","Community guidelines","Wag! Partners","Press & Investors","Blog","Careers","Become a Dog Walker"]
    const arr2=["San Francisco","Los Angeles","Chicago","New York", "Atlanta","Washington D.C.","Dallas","Miami","Philadelphia"]
    const arr3=["Dog Health","Dog Training","Dog Grooming","Dog Breeds","Dog Names","Dog Activities","Dog Senses","Dog Behavior"]
    const arr4=[" Dog Beaches","Dog Campground","Dog Parks"," Dog Trails"]
    const arr5=["© 2023 Wag Labs, Inc. All rights reserved.","Privacy policy","CA Privacy",
    "Terms & conditions","Accessibility","Transparency"]
  return (
    <div>
      <div className="top">
        <div className="top_footer">
      <Grid container spacing={1} sx={{paddingTop:'40px'}}>
        <Grid item xs={12} md={4}>
            <div className="foot">
                <p ><img src={a} style={{height:'70px',width:'110px'}}/></p>
                <p style={{color:'lightgreen',fontSize:'18px'}}><i class="fa fa-question-circle-o"></i>Help Center</p>
                <p><img src={b} style={{height:'100px',width:'200px'}}/></p>
                <p>Download the Wag! app</p>
            </div>
        </Grid>
        <Grid item xs={12} md={2}>
            <Typography className='footer'>About Wag!</Typography>
           {arr.map((data)=> <Typography className="footer2">{data}</Typography>)}           
        </Grid>
        <Grid item xs={12} md={2}>
        <Typography className='footer'>Top Wag! cities</Typography>
        {arr2.map((data)=> <Typography className="footer2">{data}</Typography>)}
        </Grid>
        <Grid item xs={12} md={2}>
        <Typography className='footer'>Resources</Typography>
        {arr3.map((data)=> <Typography className="footer2">{data}</Typography>)}
        </Grid>
        <Grid item xs={12} md={2}>
        <Typography className='footer'>Lifestyles</Typography>
        {arr4.map((data)=> <Typography className="footer2">{data}</Typography>)}
        </Grid>
      </Grid>
      <hr></hr>
       <Box className='footer3'>
          {arr5.map((data)=> <span className="footer2">{data}</span>)}
          <span><i class="fa fa-facebook-square"  ></i></span>
          <span><i class="fa fa-instagram"></i></span>
          <span><i class="fa fa-twitter"></i></span>
       </Box>
      </div>
      </div>
    </div>
  );
};

export default Footer;
