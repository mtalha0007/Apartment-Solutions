import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Images } from "../../../assets/images";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

function App() {
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
const navigate = useNavigate()
  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  return (
  

    <Grid container>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "120px",
          backgroundColor:"#F1FEFD",
          height:{xs:"100vh",md:"auto"}
        }}
      >
        <Box >
          <img
            src={Images.logo}
            alt="Bella Staffing Solutions Logo"
            style={{ width: "150px" }}
          />
        </Box>
        <Typography
          variant="h4"
          sx={{ marginTop: "20px", color: "#333", fontWeight: "bold" }}
        >
          Welcome Back
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "10px", color: "#666" }}>
          Login into your account
        </Typography>
        <Box
          component="form"
          sx={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            margin="normal"
            fullWidth
            sx={{
              // background: Colors.white,
              width: "74%",
              border: "1px solid grey",
              outline: "none",
              "& fieldset": {
                border: "none",
                borderRadius: "0px",
              },
              "&:hover": {
                borderRadius: "0px",
              },
            }}
            placeholder="Email"
            type="email"
            // {...register("email", {
            //   required: "Please enter your email",
            // })}

            // error={errors?.email?.message}
            // helperText={errors?.email?.message}
          />
          {/* {errors.email && (
            <Typography sx={{ ml: 2 }} variant="caption" color="error">
              Email is required
            </Typography>
          )} */}
          <TextField
            margin="normal"
            fullWidth
            placeholder="Password"
            sx={{
              width: "74%",
              // background: Colors.white,

              "& fieldset": {
                borderRadius: "0px",
                border: "1px solid grey",
              },
            }}
            type={showPassword ? "text" : "password"}
            // {...register("password", {
            //   required: "Please enter your password",
            // })}
            // error={errors?.password?.message}
            // helperText={errors?.password?.message}
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ),
            }}
          />
          <Box
            sx={{
              width: "75%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "20px",
              gap: "5px",
            }}
          >
            <FormControlLabel
              control={
                <Switch
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
              }
              label="Remember me"
              labelPlacement="end"
              sx={{ fontSize: "12px", fontWeight: "500" }}
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              width: "74%",
              marginTop: "35px",
              backgroundColor: "white",
              color: "#5c5c5c",
              "&:hover": { backgroundColor: "#f0f0f0" },
            }}
            onClick={()=>navigate("/dashboard")}
          >
            Log In
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          width: "100%",
          height: "100vh",
          display:{xs:"none",md:"flex"}
        }}
      >
        {/* <Box sx={{ width: "100%", textAlign: "center" }}> */}
          <img
            src={Images.sideImage}
            alt="Illustration"
            style={{ maxWidth: "100%", height: "100vh", width: "100%" }}
          />
        {/* </Box> */}
      </Grid>
    </Grid>
          
    
  );
}

export default App;
