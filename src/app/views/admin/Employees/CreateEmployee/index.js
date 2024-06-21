import React from "react";
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
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import Colors from "../../../../assets/styles";

const steps = [
  "Personal info",
  "Skill and Experience",
  "Job Preference",
  "Personal Documents",
  "Additional Details",
];

const EmployeeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const {
    register:register1,
    handleSubmit : handleSubmit1,
    formState: { errors:errors1 },
    watch:watch1,
  } = useForm();
  const [activeStep, setActiveStep] = React.useState(0);

  const onSubmit = (data) => {
    console.log(data);
    setActiveStep((prevStep) => prevStep + 1);
  };

//   const handleNext = () => {

//     setActiveStep((prevStep) => prevStep + 1);
//   };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

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
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
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
            onSubmit={handleSubmit(onSubmit)}
          >
            
              
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                  Personal Details
                </Typography>
                <Grid item xs={12} sm={12}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    width="130px"
                    marginTop="10px"
                  >
                    <Typography>Upload Photo</Typography>
                    <Avatar sx={{ width: 80, height: 80, bgcolor: "#ff4081" }}>
                      <IconButton component="label" sx={{ color: Colors.white }}>
                        <PhotoCamera />
                        <input hidden accept="image/*" type="file" />
                      </IconButton>
                    </Avatar>
                  </Box>
                </Grid>
                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={5}>
                      <InputLabel
                        sx={{ fontWeight: "bold", color: Colors.black }}
                      >
                        First Name
                      </InputLabel>
                      <TextField
                        fullWidth
                        {...register("firstName", {
                          required: "First name is required",
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
                        {...register("lastName", { required: true })}
                        error={!!errors.lastName}
                        helperText={errors.lastName && "Last name is required"}
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
                        {...register("phoneNumber", { required: true })}
                        error={!!errors.phoneNumber}
                        helperText={
                          errors.phoneNumber && "Phone number is required"
                        }
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
                        {...register("email", { required: true })}
                        error={!!errors.email}
                        helperText={errors.email && "Email is required"}
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
                        {...register("emergencyNumber", { required: true })}
                        error={!!errors.emergencyNumber}
                        helperText={
                          errors.emergencyNumber &&
                          "Emergency number is required"
                        }
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
                        {...register("age", { required: true })}
                        error={!!errors.age}
                        helperText={errors.age && "Age is required"}
                      />
                    </Grid>
                  </Grid>
                </Box>
              
                <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}
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
                onSubmit={handleSubmit1(onSubmit)}
              >
                
                  
                    <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                      Personal Details
                    </Typography>
                    <Grid item xs={12} sm={12}>
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        width="130px"
                        marginTop="10px"
                      >
                        <Typography>Upload Photo</Typography>
                        <Avatar sx={{ width: 80, height: 80, bgcolor: "#ff4081" }}>
                          <IconButton component="label" sx={{ color: Colors.white }}>
                            <PhotoCamera />
                            <input hidden accept="image/*" type="file" />
                          </IconButton>
                        </Avatar>
                      </Box>
                    </Grid>
                    <Box sx={{ mt: 2 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={5}>
                          <InputLabel
                            sx={{ fontWeight: "bold", color: Colors.black }}
                          >
                            First Name
                          </InputLabel>
                          <TextField
                            fullWidth
                            {...register("firstName", {
                              required: "First name is required",
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
                            {...register("lastName", { required: true })}
                            error={!!errors.lastName}
                            helperText={errors.lastName && "Last name is required"}
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
                            {...register("phoneNumber", { required: true })}
                            error={!!errors.phoneNumber}
                            helperText={
                              errors.phoneNumber && "Phone number is required"
                            }
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
                            {...register("email", { required: true })}
                            error={!!errors.email}
                            helperText={errors.email && "Email is required"}
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
                            {...register("emergencyNumber", { required: true })}
                            error={!!errors.emergencyNumber}
                            helperText={
                              errors.emergencyNumber &&
                              "Emergency number is required"
                            }
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
                            {...register("age", { required: true })}
                            error={!!errors.age}
                            helperText={errors.age && "Age is required"}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  
                    <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}
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

            
        
            </> )}
      </Box>
    </>
  );
};

export default EmployeeForm;
