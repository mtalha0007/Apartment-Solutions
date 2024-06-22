import React from 'react'
import { AppBar, Avatar, Box, Breadcrumbs, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import Colors from '../../../assets/styles'
import useBreadCrumb from '../../../hooks/useBreadCrumb'
import { Link } from 'react-router-dom';
import { Person, Notifications, PlaylistRemove, PlaylistPlay } from '@mui/icons-material';
import { useAuth } from '../../../context/index';
import MenuIcon from '@mui/icons-material/Menu';
function Header({ status, toggleStatus }) {
  const { pageName } = useBreadCrumb();
  const data = window.location.pathname;
  const { userLogout } = useAuth();

  return (
    <AppBar sx={{ bgcolor: Colors.white, boxShadow: 0 }}>
      <Toolbar sx={{bgcolor:Colors.dashboardBgColor}}>
        <Grid
          container
          py={2}
          // px={3}
          justifyContent={"space-between"}
        >
          <Grid item xs={12}
            sx={{
              transition: "all .3s ease-in-out",
              ml: status == false ? "270px" : 0
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
                backgroundColor:Colors.backgroundColor,
                borderRadius:"10px",
                p:1,
              boxShadow:" 5px 5px 10px 0 rgba(0, 0, 0, 0.1)"
              }}
            >
              <Box role="presentation"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  
                }}
              >
              
                <Box>
                  <IconButton onClick={toggleStatus}>
                    {status == true ? <MenuIcon /> : <MenuIcon />}
                  </IconButton>
                </Box>
              </Box>
              <Box sx={{display:"flex",mr:2,gap:'10px'}}> 
                <Avatar></Avatar>
                <Box sx={{display:"flex",flexDirection:"column"}}>
                <Box sx={{color:"black",fontWeight:"bold"}}>Moni Roy</Box>
                <Box sx={{color:"black"}}>Admin</Box>
                </Box>
                {/* <Button
                onClick={() => userLogout()}
                  sx={{
                    gap: "5px",
                    color: "#718096",
                    fontWeight: 700,
                    textTransform: "capitalize"
                  }}
                >
                  <Person />
                  {"Sign out"}
                </Button> */}
                {/* <IconButton>
                  <Notifications sx={{ color: "#718096" }} />
                </IconButton> */}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header