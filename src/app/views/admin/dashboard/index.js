import React from "react";
import { Box, Chip, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Images } from "../../../assets/images/index";
import Colors from "../../../assets/styles";

const cardData = [
  {
    title: "Employees",
    value: "$53,000",
    icon: Images.userDashboard,
    trend: Images.trendingUp,
    trendPercent: "8.5%",
    color: "rgba(245, 117, 27, 1)",
  },
  {
    title: "jobs",
    value: "2300",
    icon: Images.jobDashboard,
    trend: Images.trendingUp,
    trendPercent: "1.5%",
    color: "rgba(245, 117, 27, 1)",
  },
  {
    title: "Companies",
    value: "3,020",
    icon: Images.companyDashboard,
    trend: Images.trendingDowm,
    trendPercent: "4.5%",
    color: "rgba(245, 14, 158, 1)",
  },
  {
    title: "Job Pending",
    value: "53,000",
    icon: Images.jobPendingDashboard,
    trend: Images.trendingUp,
    trendPercent: "8.5%",
    color: "rgba(245, 117, 27, 1)",
  },
];
const jobDetails = [
  {
    jobName: "Leasing Consultant",
    company: "Dubai Tower",
    dateTime: "12.09.2023 - 12.53 PM",
    person: 2,
    jobType: "Temporary",
    status: "completed",
  },
  {
    jobName: "Ground/House Keeping",
    company: "Momin Tower",
    dateTime: "12.09.2023 - 12.53 PM",
    person: 1,
    jobType: "Permanent",
    status: "inProgress",
  },
  {
    jobName: "Lead Maintenance",
    company: "Joshua Company",
    dateTime: "12.09.2023 - 12.53 PM",
    person: 3,
    jobType: "Permanent",
    status: "cancelled",
  },
];

const tableHead=["Job Name","Company","Date-Time","Person","Job Type","Status"]


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
                        background:Colors.backgroundColor,
                        borderRadius: "15px",
                        boxShadow: "0xp 0px 100px 0xp rgba(0,0,0,0.1)",
                      }}
                    >
                      <Box
                        sx={{
                          px: 3,
                          py: 1,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box sx={{ width: "100%" }}>
                          <Typography
                            variant={"body2"}
                            sx={{ color: Colors.black, fontWeight: 600 }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              mt: 2,
                              fontSize: "23px   ",
                            }}
                          >
                            {item.value}
                          </Typography>
                        </Box>
                        <Box>
                          <img width="50px" src={item.icon} />
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          pl: 2,
                          py: 1,
                          display: "flex",
                          gap: "3px",
                          fontSize: "14px",
                          alignItems: "center",
                        }}
                      >
                        <img src={item.trend} />{" "}
                        <Box sx={{ color: item.color }}>
                          {item.trendPercent}
                        </Box>{" "}
                        <Box sx={{ fontWeight: 600 }}>from past week</Box>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box sx={{ padding: '20px',background:Colors.backgroundColor ,mt:3,ml:2 ,pl:2,borderRadius:"10px" }}>
      <Box sx={{fontSize:"24px",fontWeight:"bold"}}>Job Details</Box>
      <TableContainer sx={{mt:2,boxShadow: "0xp 0px 100px 0xp rgba(0,0,0,0.1)",}} >
        <Table>
          <TableHead>
            <TableRow sx={{borderRadius:"10px"}}>
            {tableHead.map((column, index) => (
                <TableCell
                  key={index}
                  sx={{ fontWeight: "600", color: Colors.black,backgroundColor:"rgb(241 230 244)" }}
                >
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {jobDetails.map((job, index) => (
              <TableRow key={index} >
                <TableCell >{job.jobName}</TableCell>
                <TableCell >{job.company}</TableCell>
                <TableCell >{job.dateTime}</TableCell>
                <TableCell >{job.person}</TableCell>
                <TableCell >{job.jobType}</TableCell>
                
                <TableCell  >
                  <Typography
                    sx={{
                      backgroundColor:
                        job.status === "completed"
                          ? Colors.seaGreen
                          : job.status === "inProgress"? Colors.yellow: Colors.red,
                      borderRadius: "20px",
                      textAlign: "center",
                      py: 0.7,
                      color: Colors.white,
                      fontSize: "12px",
                      textTransform:"capitalize "
                    }}
                  >
                    {job.status}
                  </Typography>
               
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </Box>
  );
}

export default Dashboard;
