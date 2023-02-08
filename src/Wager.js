import  Typography  from '@mui/material/Typography'
import  Grid  from '@mui/material/Grid'
import React from 'react'
import a from '../src/Assets/5.svg'
import b from '../src/Assets/6.svg'
import c from '../src/Assets/7.svg'

const wager = () => {
  return (
    <div>
      
      <div className='wager'>     <h1>Why Wag!?</h1>
     <Grid container spacing={1} >
     <Grid item xs={12} md={4} >
           <img src={a}/>
           <Typography className='letter'>Flexibility</Typography>
           <Typography sx={{marginLeft:'50px'}} className='letter2'>Make money on your own time. Set your own schedule.
             Enjoy the flexibility of choosing how and when you want 
            to work—grab a last minute ASAP walk or plan out walks 
            weeks in advance!</Typography>
     </Grid>

     <Grid item xs={12} md={4} >
     <img src={b}/>
     <Typography className='letter'>Technology</Typography>
     <Typography sx={{marginLeft:'50px'}} className='letter2'>Wag! is a fast, friendly, and convenient
         platform that offers instant pay, 
        real-time GPS tracking, automated report cards, and live chat with clients.</Typography>
     </Grid>

     <Grid item xs={12} md={4} >
     <img src={c}/>
     <Typography className='letter'>Safety</Typography>
     <Typography sx={{marginLeft:'50px'}} className='letter2'>Our dedicated 24/7 customer support team 
        sticks by you, and services booked on the Wag! platform may be 
        protected with up to $1M property damage protection. See the
   <span style={{color:'lightgreen'}}>customer claims policy </span>
for details.</Typography>
     </Grid>
     </Grid>
     </div>

    </div>
  )
}

export default wager