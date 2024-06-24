import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Box,
  Grid,
  Avatar,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  ClickAwayListener,
  Paper,
  Chip,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import Colors from "../../../../assets/styles";
import styled from "@emotion/styled";

const steps = [
  "Personal info",
  "Skill and Experience",
  "Job Preference",
  "Personal Documents",
  "Additional Details",
];

const EmployeeForm = () => {
  const [experience, setExperience] = useState("0-1");
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState("");
  const [area, setArea] = useState("");
  const [jobType, setJobType] = useState("");
  const [selectedChips, setSelectedChips] = useState([]);

  const propertyTypes = [
    "AB Property",
    "New Construction",
    "High Rise Multi Family",
    "Rehab or Renovations",
    "Lease Up",
    "Public Housing",
    "Tax Credit",
    "Large Community 500+ Units",
  ];
  const handleChipClick = (chip) => {
    setSelectedChips((prevSelectedChips) =>
      prevSelectedChips.includes(chip)
        ? prevSelectedChips.filter((c) => c !== chip)
        : [...prevSelectedChips, chip]
    );
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    register: register1,
    handleSubmit: handleSubmit1,
    setValue,
    formState: { errors: errors1 },
  } = useForm();
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm();

  const skillTypes = [
    "Leasing Consultant",
    "Housekeeping",
    "Lead Maintenance",
    "Manager/Assistant",
    "Assistance Maintenance",
  ];
  const form1Data = (data) => {
    console.log(data);
    setActiveStep((prevStep) => prevStep + 1);
  };

  const form2Data = (data) => {
    console.log(data);
    setActiveStep((prevStep) => prevStep + 1);
  };
  const form3Data = (data) => {
    const obj = {
      area:data.area,
      jobType:data.jobType,
      propertyType: selectedChips,
      tempWork:[
          {
            hoursfrom: data.hoursFrom,
            hoursTo: data.hoursTo,
            workOnSameDay:data.workOnSameDay,
            callAfterHour:data.callAfterHour,
            workWeekends:data.workWeekends,
            haveTransportation:data?.haveTransportation,
            willtravel:data.willtravel,
            willWorkOnBraunfels:data.willWorkOnBraunfels,
            willWorkOnBorene:data.willWorkOnBorene,

        }
      ]
    };
    console.log(obj);
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelect = (skill) => {
    setSelectedSkill(skill);
    console.log(selectedSkill);
    handleClose();
  };
  const CustomStepperRoot = styled(Stepper)(({ theme }) => ({
    width: "100%",
    backgroundColor: "transparent",
    padding: 0,
  }));

  const CustomStep = styled(Step)(({ theme }) => ({
    ".MuiStepLabel-root": {
      flexDirection: "row !important",
      alignItems: "center !important",
      borderTop: "3px solid #ff4081   !important",
      paddingTop: "12px !important",
      justifyContent: "center",
    },
    ".MuiStepLabel-label": {
      marginTop: "0 !important",
    },
    ".MuiStepLabel-labelContainer": {
      width: "150px !important",
    },
    ".MuiStepConnector-root": {
      display: "none",
    },
    "&.MuiStep-active .MuiStepLabel-root": {
      borderTopColor: "#ff4081 !important", // Pink color for active step
    },
    "& .Mui-disabled": {
      borderColor: "grey !important",
    },
    "& .Mui-completed , .Mui-active": {
      color: "#ff4081 !important",
    },
  }));

  const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
    "& .MuiStepLabel-alternativeLabel": {
      marginTop: 0,
    },
  }));
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "10px",
          alignItems: "center",
          mt: 9.5,
          pl: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "26px",
            color: "rgb(148 149 153)",
            fontWeight: "600",
          }}
        >
          Employees /
        </Typography>
        <Typography
          sx={{ fontSize: "22px", color: Colors.primary, fontWeight: "600" }}
        >
          Add New
        </Typography>
      </Box>
      <Box sx={{ width: "100%", mt: 2 }}>
        <CustomStepperRoot activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <CustomStep key={index}>
              <CustomStepLabel>{label}</CustomStepLabel>
            </CustomStep>
          ))}
        </CustomStepperRoot>
        {activeStep === steps.length ? (
          <Typography variant="h6" align="center" sx={{ mt: 3, mb: 3 }}>
            All steps completed - you're finished
          </Typography>
        ) : (
          <>
            {activeStep === 0 && (
              <form
                style={{
                  marginTop: "14px",
                  marginLeft: "16px",
                  marginRight: "16px",
                  padding: "20px",
                  backgroundColor: Colors.backgroundColor,
                  boxShadow: "0xp 0px 100px 0xp rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                }}
                onSubmit={handleSubmit(form1Data)}
              >
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                  Personal Details
                </Typography>
                <Box sx={{ mt: 1.5 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        width="130px"
                      >
                        <Typography>Upload Photo</Typography>
                        <Avatar
                          sx={{ width: 80, height: 80, bgcolor: "#ff4081" }}
                        >
                          <IconButton
                            component="label"
                            sx={{ color: Colors.white }}
                          >
                            <PhotoCamera />
                            <input hidden accept="image/*" type="file" />
                          </IconButton>
                        </Avatar>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                      <InputLabel
                        sx={{ fontWeight: "bold", color: Colors.black }}
                      >
                        First Name
                      </InputLabel>
                      <TextField
                        fullWidth
                        {...register("firstName", {
                          required: "First Name is required",
                          validate: (value) =>
                            value.trim() !== "" || "First Name is required",
                        })}
                        error={errors.firstName && true}
                        helperText={errors?.firstName?.message}
                      />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                      <InputLabel
                        sx={{ fontWeight: "bold", color: Colors.black }}
                      >
                        Last Name
                      </InputLabel>
                      <TextField
                        fullWidth
                        {...register("lastName", {
                          required: "Last Name is required",
                          validate: (value) =>
                            value.trim() !== "" || "Last Name is required",
                        })}
                        error={!!errors.lastName}
                        helperText={errors?.lastName?.message}
                      />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                      <InputLabel
                        sx={{ fontWeight: "bold", color: Colors.black }}
                      >
                        Phone Number
                      </InputLabel>
                      <TextField
                        fullWidth
                        {...register("phoneNumber", {
                          required: "Phone number is required",
                          validate: (value) =>
                            value.trim() !== "" || "Phone Number is required",
                        })}
                        error={!!errors.phoneNumber}
                        helperText={errors?.phoneNumber?.message}
                      />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                      <InputLabel
                        sx={{ fontWeight: "bold", color: Colors.black }}
                      >
                        Email
                      </InputLabel>
                      <TextField
                        fullWidth
                        {...register("email", {
                          required: "Email is required",
                          validate: (value) =>
                            value.trim() !== "" || "Email is required",
                        })}
                        error={!!errors.email}
                        helperText={errors?.email?.message}
                      />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                      <InputLabel
                        sx={{ fontWeight: "bold", color: Colors.black }}
                      >
                        Emergency Number
                      </InputLabel>
                      <TextField
                        fullWidth
                        {...register("emergencyNumber", {
                          required: "Emergency Number is required",
                          validate: (value) =>
                            value.trim() !== "" ||
                            "Emergency Number is required",
                        })}
                        error={!!errors.emergencyNumber}
                        helperText={errors?.emergencyNumber?.message}
                      />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                      <InputLabel
                        sx={{ fontWeight: "bold", color: Colors.black }}
                      >
                        Age
                      </InputLabel>
                      <TextField
                        fullWidth
                        {...register("age", {
                          required: "Age is required",
                          validate: (value) =>
                            value.trim() !== "" || "Age is required",
                        })}
                        error={!!errors.age}
                        helperText={errors?.age?.message}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 3,
                  }}
                >
                  {activeStep !== 0 && (
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    // onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                </Box>
              </form>
            )}
            {activeStep === 1 && (
              <form
                style={{
                  marginTop: "14px",
                  marginLeft: "16px",
                  marginRight: "16px",
                  padding: "20px",
                  backgroundColor: Colors.backgroundColor,
                  boxShadow: "0xp 0px 100px 0xp rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                }}
                onSubmit={handleSubmit1(form2Data)}
              >
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                  Skills and Experience
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={5}>
                      <InputLabel
                        sx={{ fontWeight: "bold", color: Colors.black }}
                      >
                        Experience
                      </InputLabel>
                      <TextField
                        fullWidth
                        select
                        {...register1("experience", {
                          required: "Experience is required",
                        })}
                        error={errors1.experience && true}
                        helperText={errors1?.experience?.message}
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                      >
                        <MenuItem value="0-1">0 - 1 Year</MenuItem>
                        <MenuItem value="2-4">2 - 4 Year</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                      <InputLabel
                        sx={{ fontWeight: "bold", color: Colors.black }}
                      >
                        Desired Position
                      </InputLabel>
                      <TextField
                        fullWidth
                        {...register1("position", {
                          required: "Desired Position is required",
                          validate: (value) =>
                            value.trim() !== "" ||
                            "Desired Position is required",
                        })}
                        error={errors1.position && true}
                        helperText={errors1?.position?.message}
                      />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                      <InputLabel
                        sx={{ fontWeight: "bold", color: Colors.black }}
                      >
                        Skill Type
                      </InputLabel>
                      <Box sx={{ position: "relative" }}>
                        <FormControl fullWidth>
                          <Select
                            value={selectedSkill}
                            onClick={handleToggle}
                            onClose={handleClose}
                            MenuProps={{
                              PaperProps: {
                                sx: {
                                  opacity: "0 !important",
                                },
                              },
                            }}
                            open={open}
                            displayEmpty
                            renderValue={(selected) => {
                              if (selected === "") {
                                return;
                              }
                              return selected;
                            }}
                          >
                            {/* <MenuItem sx={{opacity:"0 !important"}} value="" disabled>
            Select
          </MenuItem> */}
                          </Select>
                        </FormControl>
                        {open && (
                          <ClickAwayListener onClickAway={handleClose}>
                            <Paper
                              sx={{
                                position: "absolute",
                                width: "100%",
                                mt: 1,
                                p: 3,
                                zIndex: 111111,
                                borderRadius: "20px",
                                boxShadow: "0px 0px 100px 0px rgb(0,0,0,0.1)",
                              }}
                            >
                              <Typography
                                sx={{
                                  mb: 2,
                                  fontWeight: "bold",
                                  fontSize: "18px",
                                }}
                              >
                                Set Skill Type
                              </Typography>
                              <Box
                                sx={{
                                  display: "flex",
                                  flexWrap: "wrap",
                                  gap: "10px",
                                }}
                              >
                                {skillTypes.map((skill, index) => (
                                  <Chip
                                    key={index}
                                    variant="outlined"
                                    onClick={() => handleSelect(skill)}
                                    label={skill}
                                  />
                                ))}
                              </Box>
                            </Paper>
                          </ClickAwayListener>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    mt: 29,
                  }}
                >
                  {activeStep !== 0 && (
                    <Button
                      sx={{ px: 4 }}
                      variant="contained"
                      color="primary"
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                  )}

                  <Button type="submit" variant="contained" color="primary">
                    {activeStep === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                </Box>
              </form>
            )}
            {activeStep === 2 && (
              <form
                style={{
                  marginTop: "14px",
                  marginLeft: "16px",
                  marginRight: "16px",
                  padding: "20px",
                  backgroundColor: Colors.backgroundColor,
                  boxShadow: "0xp 0px 100px 0xp rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                }}
                onSubmit={handleSubmit2(form3Data)}
              >
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                  Job Preference
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={10}>
                    {/* first  */}
                    <Grid item xs={12} sm={12}>
                      <Grid container spacing={8}>
                        <Grid item xs={12} sm={3}>
                          <InputLabel
                            sx={{ fontWeight: "bold", color: Colors.black }}
                          >
                            Area Town Preferred
                          </InputLabel>
                          <TextField
                            fullWidth
                            select
                            {...register2("area", {
                              required: "Area is required",
                            })}
                            error={errors2.area && true}
                            helperText={errors2?.area?.message}
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                          >
                            <MenuItem value="karachi">Karachi</MenuItem>
                            <MenuItem value="lahore">lahore</MenuItem>
                          </TextField>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                          <InputLabel
                            sx={{ fontWeight: "bold", color: Colors.black }}
                          >
                            Job Type Preference
                          </InputLabel>
                          <TextField
                            fullWidth
                            select
                            {...register2("jobType", {
                              required: "Job Type is required",
                            })}
                            error={errors2.jobType && true}
                            helperText={errors2?.jobType?.message}
                            value={jobType}
                            onChange={(e) => setJobType(e.target.value)}
                          >
                            <MenuItem value="temporary">Temporary</MenuItem>
                            <MenuItem value="permanent">Permanent</MenuItem>
                          </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <InputLabel
                            sx={{ fontWeight: "bold", color: Colors.black }}
                          >
                            Property Type
                          </InputLabel>
                          {propertyTypes.map((type) => (
                            <Chip
                              key={type}
                              label={type}
                              onClick={() => handleChipClick(type)}
                              sx={{
                                m: 1,
                                ml: 0,
                                border: selectedChips.includes(type)
                                  ? `1px solid ${Colors.primary}`
                                  : "1px solid grey",
                                background: "none",
                                color: selectedChips.includes(type)
                                  ? Colors.primary
                                  : "black",
                              }}
                              {...register2("propertyType")}
                            />
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>

                    {/* second */}
                    <Grid item xs={12} sm={12}>
                      <Grid container spacing={8}>
                        <Grid item xs={12} sm={6} sx={{ mt: 1 }}>
                          <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} sm={12}>
                              <InputLabel
                                sx={{ fontWeight: "bold", color: Colors.black }}
                              >
                                Specifications for Temporary Work
                              </InputLabel>
                              <InputLabel sx={{ mt: 1, color: Colors.black }}>
                                Hours Avaialble?
                              </InputLabel>
                            </Grid>

                            <Grid item xs={6} md={5.5}>
                              <TextField
                                fullWidth
                                type="time"
                                {...register2("hoursFrom")}
                             
                              />
                            </Grid>
                            <Grid item xs={1}>
                              to
                            </Grid>
                            <Grid item xs={6} md={5.5}>
                              <TextField
                                fullWidth
                                type="time"
                                {...register2("hoursTo")}
                              />
                            </Grid>
                          </Grid>
                          <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                            <Grid container spacing={2} alignItems="center">
                              <Grid item xs={12}>
                                <InputLabel sx={{ color: Colors.black }}>
                                  Will you work on same day assignments?
                                </InputLabel>
                                <FormControl component="fieldset">
                                  <RadioGroup
                                    name="tempWork.sameDay"
                                    {...register2("workOnSameDay")}
                                    sx={{
                                      display: "flex",
                                      flexDirection: "row",
                                    }} // Added flexbox properties
                                  >
                                    <FormControlLabel
                                      value="yes"
                                      control={<Radio />}
                                      label="Yes"
                                    />
                                    <FormControlLabel
                                      value="no"
                                      control={<Radio />}
                                      label="No"
                                    />
                                  </RadioGroup>
                                </FormControl>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <Grid container spacing={2} alignItems="center">
                              <Grid item xs={12}>
                                <InputLabel sx={{ color: Colors.black }}>
                                  On Call After Hours/Weekends?{" "}
                                </InputLabel>
                                <FormControl component="fieldset">
                                  <RadioGroup
                                    name="callAfter"
                                    sx={{
                                      display: "flex",
                                      flexDirection: "row",
                                    }}
                                    {...register2("callAfterHour")} // Added flexbox properties
                                  >
                                    <FormControlLabel
                                      value="yes"
                                      control={<Radio />}
                                      label="Yes"
                                    />
                                    <FormControlLabel
                                      value="no"
                                      control={<Radio />}
                                      label="No"
                                    />
                                  </RadioGroup>
                                </FormControl>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <Grid container spacing={2} alignItems="center">
                              <Grid item xs={12}>
                                <InputLabel sx={{ color: Colors.black }}>
                                  Work Weekends?
                                </InputLabel>
                                <FormControl component="fieldset">
                                  <RadioGroup
                                    name="workWeekends"
                                    sx={{
                                      display: "flex",
                                      flexDirection: "row",
                                    }}
                                    {...register2("workWeekends")}
                                    
                                  >
                                    <FormControlLabel
                                      value="yes"
                                      control={<Radio />}
                                      label="Yes"
                                    />
                                    <FormControlLabel
                                      value="no"
                                      control={<Radio />}
                                      label="No"
                                    />
                                  </RadioGroup>
                                </FormControl>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid item xs={6}>
                          <Grid item xs={12} sm={12} sx={{ mt: 4.4 }}>
                            <Grid container spacing={2} alignItems="center">
                              <Grid item xs={12}>
                                <InputLabel sx={{ color: Colors.black }}>
                                  Do you have Transportation?
                                </InputLabel>
                                <FormControl component="fieldset">
                                  <RadioGroup
                                    name="transportation"
                                    sx={{
                                      display: "flex",
                                      flexDirection: "row",
                                    }} 
                                    {...register2("haveTransportation")}
                                    >
                                    <FormControlLabel
                                      value="yes"
                                      control={<Radio />}
                                      label="Yes"
                                    />
                                    <FormControlLabel
                                      value="no"
                                      control={<Radio />}
                                      label="No"
                                    />
                                  </RadioGroup>
                                </FormControl>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <Grid container spacing={2} alignItems="center">
                              <Grid item xs={12}>
                                <InputLabel sx={{ color: Colors.black }}>
                                  Will You Travel?
                                </InputLabel>
                                <FormControl component="fieldset">
                                  <RadioGroup
                                    name="travel"
                                    sx={{
                                      display: "flex",
                                      flexDirection: "row",
                                    }}
                                    {...register2("willTravel")}
                                  >
                                    <FormControlLabel
                                      value="yes"
                                      control={<Radio />}
                                      label="Yes"
                                    />
                                    <FormControlLabel
                                      value="no"
                                      control={<Radio />}
                                      label="No"
                                    />
                                  </RadioGroup>
                                </FormControl>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <Grid container spacing={2} alignItems="center">
                              <Grid item xs={12}>
                                <InputLabel sx={{ color: Colors.black }}>
                                  Will You Work on Braunfels?
                                </InputLabel>
                                <FormControl component="fieldset">
                                  <RadioGroup
                                    name="braunfels"
                                    sx={{
                                      display: "flex",
                                      flexDirection: "row",
                                    }}
                                    {...register2("willWorkOnBraunfels")}

                                  >
                                    <FormControlLabel
                                      value="yes"
                                      control={<Radio />}
                                      label="Yes"
                                    />
                                    <FormControlLabel
                                      value="no"
                                      control={<Radio />}
                                      label="No"
                                    />
                                  </RadioGroup>
                                </FormControl>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <Grid container spacing={2} alignItems="center">
                              <Grid item xs={12}>
                                <InputLabel sx={{ color: Colors.black }}>
                                  Will You work on Boerne?
                                </InputLabel>
                                <FormControl component="fieldset" {...register2("willWorkOnBorene")}>
                                  <RadioGroup
                                    name="borene"
                                    sx={{
                                      display: "flex",
                                      flexDirection: "row",
                                    }}
                                    
                                    
                                    // Added flexbox properties
                                  >
                                    <FormControlLabel
                                      value="yes"
                                      control={<Radio />}
                                      label="Yes"
                                    />
                                    <FormControlLabel
                                      value="no"
                                      control={<Radio />}
                                      label="No"
                                    />
                                  </RadioGroup>
                                </FormControl>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>

                    {/* third */}
                    {/* <Grid item xs={12} sm={12}>
                      <Grid container spacing={8}>
                        <Grid item xs={12} sm={6} sx={{ mt: 1 }}>
                          <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} sm={12}>
                              <InputLabel
                                sx={{ fontWeight: "bold", color: Colors.black }}
                              >
                                Specifications for Direct Hire
                              </InputLabel>
                              <InputLabel sx={{ mt: 1, color: Colors.black }}>
                                Salary Desired
                              </InputLabel>
                            </Grid>

                            <Grid item xs={6} md={8}>
                              <TextField
                                fullWidth
                                type="text"
                                placeholder="Enter Amount"
                                // value={formValues.tempWork.hoursFrom}
                                // onChange={handleChange}
                              />
                            </Grid>
                          </Grid>

                          <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                            <Grid container spacing={2} alignItems="center">
                              <Grid item xs={12}>
                                <InputLabel sx={{ color: Colors.black }}>
                                  On Call After Hours/Weekends?{" "}
                                </InputLabel>
                                <FormControl component="fieldset">
                                  <RadioGroup
                                    name="callAfter"
                                    sx={{
                                      display: "flex",
                                      flexDirection: "row",
                                    }} // Added flexbox properties
                                  >
                                    <FormControlLabel
                                      value="yes"
                                      control={<Radio />}
                                      label="Yes"
                                    />
                                    <FormControlLabel
                                      value="no"
                                      control={<Radio />}
                                      label="No"
                                    />
                                  </RadioGroup>
                                </FormControl>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <Grid container spacing={2} alignItems="center">
                              <Grid item xs={12}>
                                <InputLabel sx={{ color: Colors.black }}>
                                  Work Weekends?
                                </InputLabel>
                                <FormControl component="fieldset">
                                  <RadioGroup
                                    name="workWeekends2"
                                    sx={{
                                      display: "flex",
                                      flexDirection: "row",
                                    }} // Added flexbox properties
                                  >
                                    <FormControlLabel
                                      value="yes"
                                      control={<Radio />}
                                      label="Yes"
                                    />
                                    <FormControlLabel
                                      value="no"
                                      control={<Radio />}
                                      label="No"
                                    />
                                  </RadioGroup>
                                </FormControl>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <Grid container spacing={2} alignItems="center">
                              <Grid item xs={12}>
                                <InputLabel sx={{ color: Colors.black }}>
                                  Insurance Benefits Mandatory?
                                </InputLabel>
                                <FormControl component="fieldset">
                                  <RadioGroup
                                    name="tempWork.sameDay"
                                    sx={{
                                      display: "flex",
                                      flexDirection: "row",
                                    }} // Added flexbox properties
                                  >
                                    <FormControlLabel
                                      value="yes"
                                      control={<Radio />}
                                      label="Yes"
                                    />
                                    <FormControlLabel
                                      value="no"
                                      control={<Radio />}
                                      label="No"
                                    />
                                  </RadioGroup>
                                </FormControl>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ mt: 1 }}>
                          <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} sm={12} sx={{ mt: 3 }}>
                              <InputLabel sx={{ mt: 1, color: Colors.black }}>
                                Minimum Salary
                              </InputLabel>
                            </Grid>

                            <Grid item xs={6} md={8}>
                              <TextField
                                fullWidth
                                type="text"
                                placeholder="Enter Amount"
                                // value={formValues.tempWork.hoursFrom}
                                // onChange={handleChange}
                              />
                            </Grid>
                          </Grid>

                          <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                            <Grid container spacing={2} alignItems="center">
                              <Grid item xs={12}>
                                <InputLabel sx={{ color: Colors.black }}>
                                  Live-On-Site?
                                </InputLabel>
                                <FormControl component="fieldset">
                                  <RadioGroup
                                    name="onSite"
                                    sx={{
                                      display: "flex",
                                      flexDirection: "row",
                                    }} // Added flexbox properties
                                  >
                                    <FormControlLabel
                                      value="yes"
                                      control={<Radio />}
                                      label="Yes"
                                    />
                                    <FormControlLabel
                                      value="no"
                                      control={<Radio />}
                                      label="No"
                                    />
                                  </RadioGroup>
                                </FormControl>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <Grid container spacing={2} alignItems="center">
                              <Grid item xs={12}>
                                <InputLabel sx={{ color: Colors.black }}>
                                  Willing To Relocate?
                                </InputLabel>
                                <FormControl component="fieldset">
                                  <RadioGroup
                                    name="r elocate"
                                    sx={{
                                      display: "flex",
                                      flexDirection: "row",
                                    }} // Added flexbox properties
                                  >
                                    <FormControlLabel
                                      value="yes"
                                      control={<Radio />}
                                      label="Yes"
                                    />
                                    <FormControlLabel
                                      value="no"
                                      control={<Radio />}
                                      label="No"
                                    />
                                  </RadioGroup>
                                </FormControl>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid> */}
                  </Grid>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    mt: 2,
                  }}
                >
                  {activeStep !== 0 && (
                    <Button
                      sx={{ px: 4 }}
                      variant="contained"
                      color="primary"
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                  )}

                  <Button type="submit" variant="contained" color="primary">
                    {activeStep === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                </Box>
              </form>
            )}
            {activeStep === 3 && (
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  mt: 2,
                }}
              >
                {activeStep !== 0 && (
                  <Button
                    sx={{ px: 4 }}
                    variant="contained"
                    color="primary"
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                )}

                <Button type="submit" variant="contained" color="primary">
                  {activeStep === steps.length - 1 ? "Finish" : "Continue"}
                </Button>
              </Box>

              //  )}
            )}
          </>
        )}
      </Box>
    </>
  );
};

export default EmployeeForm;
