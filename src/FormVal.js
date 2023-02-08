import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import React from "react";
import a from "../src/Assets/2.webp";
import b from "../src/Assets/3.webp";
import c from "../src/Assets/4.webp";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import styled from "@mui/material/styles/styled";
import  Checkbox  from "@mui/material/Checkbox";
import Button from '@mui/material/Button';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import d from "../src/Assets/play.jpg";



const FormVal = () => {
 
  var first = document.querySelector('.first');
  const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
   
    const firstName= (e) =>{
        console.log(e.target.value);
        if(e.target.value == " "){
          first.innerHTML="hello";
        }
    }
  return (
    <div>
      

      <form>
        <div className="image">
        <Grid container spacing={1} >
        
          <Grid item xs={12} md={4} sx={{width:'100%',margin:'40px 40px',textAlign:'left',marginLeft:'180px'}}>
            <Typography sx={{fontSize:'57px',marginTop:'10px',color:'white'}}>Become a Dog </Typography>
            <Typography sx={{fontSize:'50px',marginTop:'0px',color:'white'}}> Walker with Wag!</Typography>
            <Typography sx={{fontSize:'30px',marginTop:'10px',color:'white'}}>Join our community of over 400K Pet Caregivers nationwide</Typography>
            <img src={b} style={{width:'96%',marginTop:'10px'}}/>

          </Grid>
          <Grid item xs={12} md={5}>
            <Grid container spacing={1} sx={{backgroundColor:'white',border:'1px solid white',width:'86%',boxShadow:'2px 2px 10px lightgray',marginTop:'50px',borderRadius:'4px'}}>
              <Grid item xs={12} md={9} sx={{marginTop:'40px',marginLeft:"20px",paddingBottom:'5%'}}>
                
                  <Typography sx={{fontWeight:'bold',fontFamily:'Muli,Helvetica',fontSize:'18px',opacity:'1'}}>
                    Please enter your name as it appears on your ID.
                  </Typography>
                  <TextField
                    id="margin-none"
                    margin="none"
                    placeholder="Legal first name"
                    required={true}
                    onChange={ (e) => firstName(e)}
                  />
                  
                  <br />
                  <TextField
                    id="margin-none"
                    margin="dense"
                    placeholder="Legal middle name"
                  />
                  <br />
                  <TextField
                    id="margin-none"
                    margin="dense"
                    placeholder="Legal last name"
                  />
                  <br />
                  <TextField
                    id="margin-none"
                    margin="dense"
                    placeholder="Email address"
                  />
                  <br />
                  <TextField
                    id="margin-none"
                    margin="dense"
                    placeholder="Phone Number"
                  />
                  <p style={{fontSize:'13px',textAlign:'left',opacity:'0.7'}}>By submitting my phone number, I agree to receive automated and non-automated transactional and marketing calls/texts from Wag!. Consent not required; text STOP to 24006 to opt out. Opt out instructions subject to
                     change. Message and data rates may apply. <span style={{color:'lightgreen'}}> Mobile Terms</span> apply.</p>

                     <span style={{fontSize:'13px'}}><Checkbox /></span><span style={{fontSize:'13px'}}>I agree to Wag!'s <span style={{color:'lightgreen'}}>Terms</span> (including a <span style={{color:'lightgreen'}}>mutual arbitration clause</span>) and
                     <span style={{color:'lightgreen'}}>Privacy Policy</span>.</span>
                       <p><span></span><span style={{fontSize:'13px',marginLeft:''}}><Checkbox />I confirm that I am a US resident and am over 18</span></p>
                       <Button variant="contained" disabled>Get Started</Button>
            
              </Grid>

              {isMatch ? (<div><img src={d} style={{height:'100px',width:'350px'}}/></div>) : (
                  <Grid item xs={8} md={2} sx={{marginTop:'100px'}}>
                
                  <img src={a} style={{ height: "80px", width: "80px" }} />
                  <p>Approved Caregiver? Download the app.</p>
              </Grid>
              )}
              
            </Grid>
          </Grid>
        </Grid>
        </div>
      </form>
      
    </div>
  );
};

export default FormVal;
