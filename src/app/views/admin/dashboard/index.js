import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Images } from "../../../assets/images/index";
import Colors from "../../../assets/styles";

const cardData = [
  {
    title: "Today's Moneys",
    value: "$53,000",
    icon: Images.userDashboard,
    trend:Images.trendingUp
  },
  {
    title: "Today's Users",
    value: "2300",
    icon: Images.jobDashboard,
    trend:Images.trendingUp

  },
  {
    title: "New Clients",
    value: "+3,020",
    icon: Images.companyDashboard,
    trend:Images.trendingDowm

  },
  {
    title: "Total Sales",
    value: "$53,000",
    icon: Images.jobPendingDashboard,
    trend:Images.trendingUp

  },
];

function Dashboard() {
  return (
    <Box>
      <Grid container>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            mt: 13,
            pl: 2,
          }}
        >
          <Grid container rowGap={"18px"}>
            <Grid item xs={12} md={12}>
              <Grid container spacing={2}>
                {cardData.map((item, ind) => (
                  <Grid item xs={12} sm={12} md={3} lg={3} key={ind}>
                    <Box
                      sx={{
                        p: 3,
                        background: Colors.white,
                        borderRadius: "15px",
                        display: "flex",
                        alignItems: "center",
                        boxShadow: "rgba(0, 0, 0, 0.02) 0px 3.5px 5.5px",
                      }}
                    >
                      <Box sx={{ width: "100%" }}>
                        <Typography
                          variant={"body2"}
                          sx={{ color: Colors.grey, fontWeight: 700 }}
                        >
                          {item.title}
                        </Typography>
                        <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                          {item.value}
                        </Typography>
                      </Box>
                      {/* {React.cloneElement(item.icon, {
                        sx: {
                          fontSize: "22px",
                          borderRadius: "12px",
                          p: "10px",
                          backgroundColor: Colors.secondary,
                          color: Colors.white,
                        },
                      })} */}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
