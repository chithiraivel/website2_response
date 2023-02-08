import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import a from "../src/Assets/11.png";
import b from "../src/Assets/12.png";


const petter = () => {
  return (
    <div>
      <Typography sx={{textAlign:'center',fontSize:'40px',fontWeight:'bolder',color:'gray'}}>Hear from Pet Caregivers like you</Typography>
      <div style={{display:'flex',justifyContent:'center',color:'gray'}}>
        <div>
          <div className="petter1">
            <p>
              I'm getting paid to hang out with dogs. explore LA get some
              sunshine get some excersice. it's a really awesome gig! I'm
              getting paid to hang out with dogs.
            </p>
            <p>
              <img src={a} />
            </p>
          </div>
          <p style={{textAlign:'center'}}><b>Katie M. </b> Doa Walker in Los Anaeles</p>

          <p className="petter2">
            <i class="fa fa-play-circle"></i>
          </p>
        </div>


       
        <div>
          <div className="petter1">
            <p>
              I'm getting paid to hang out with dogs. explore LA get some
              sunshine get some excersice. it's a really awesome gig! I'm
              getting paid to hang out with dogs.
            </p>
            <p>
              <img src={b} />
            </p>
          </div>
          <p style={{textAlign:'center'}}><b>Kalsey M. </b>Doa Walker in New York</p>

          <p className="petter2">
            <i class="fa fa-play-circle"></i>
          </p>
         
        </div>
   
      </div>
    </div>
  );
};

export default petter;
