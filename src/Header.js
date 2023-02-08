import  Typography  from '@mui/material/Typography'
import  Grid  from '@mui/material/Grid'
import  Box  from '@mui/system/Box'
import React from 'react'
import a from '../src/Assets/1.png'
import './Header.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Services', 'Health & Wellness', 'Resources','Help center and Safety'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
   <div >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
             
              textDecoration: 'none',
              height:'40px',
              width:'90px'
            }}
          >
            <img src={a}/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
             
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },color:'black'
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{color:'black'}}>{page}</Typography>
                 
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',

              textDecoration: 'none',
              height:'40px',
              width:'90px'
            }}
          >
            <img src={a}/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } ,color:'black'}} className='head2'>
            
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block',fontFamily:'inherit',margin:'10px 10px',fontSize:'13px' }}
              >
                {page}<i class="fa fa-angle-down"></i>
                
              </Button> 
            ))}
           
          </Box>

          <Box sx={{ flexGrow: 0 }} className='head' >
              {/* <span style={{fontSize:'24px'}}><i class="fa fa-user-circle-o" ></i></span> */}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <span><i class="fa fa-heartbeat" style={{color:'lightgreen',fontSize:'20px'}}></i></span>
              <span style={{color:'lightgreen',fontSize:'15px'}}> <select style={{border:'none',color:'lightgreen',fontSize:'16px'}}><option>Become a Caregiver</option><option>Become a Walker</option><option>Become a Sitter</option></select></span>
              <span style={{fontSize:'14px',marginLeft:'14px'}}><i class="fa fa-user-circle-o" ></i></span>
              <span style={{fontSize:'15px'}}> Myaccount</span>
          </Box>
        </Toolbar>
      </Container>
   
      </div>
    </div>
  )
}

export default Header