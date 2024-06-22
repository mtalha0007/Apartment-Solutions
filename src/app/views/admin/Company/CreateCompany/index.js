import React from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Avatar,
  IconButton,
  Container,
  InputLabel,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Colors from "../../../../assets/styles";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    
  } = useForm();

  const onSubmit =(formData)=>{
  console.log(formData)
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "10px",
          alignItems: "center",
          mt: 10,
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
          Companies /
        </Typography>
        <Typography
          sx={{ fontSize: "22px", color: Colors.primary, fontWeight: "600" }}
        >
          Add New
        </Typography>
      </Box>
      <Box
        maxWidth="lg"
        sx={{
          mt: 2,
          ml:2,
          mr:2,
          padding: "20px",
          backgroundColor: Colors.backgroundColor,
          boxShadow: "0xp 0px 100px 0xp rgba(0,0,0,0.1)",
          borderRadius: "8px",
        }}
      >
        <Typography sx={{fontSize:"20px" ,fontWeight:"bold"}}>
          Company Details
        </Typography>
        <Box component={"form"}  onSubmit={handleSubmit(onSubmit)}>    
        <Grid container spacing={3}>
            <Grid item xs={12} sm={12} >
              <Box display="flex" flexDirection="column" alignItems="center" width="100px" marginTop="20px">
              <Typography>Your Logo</Typography>
                <Avatar
                  sx={{ width: 80, height: 80, bgcolor: "#ff4081" }}
                >
                  <IconButton component="label" sx={{color:Colors.white}}>
                    <PhotoCamera />
                    <input hidden accept="image/*" type="file" />
                  </IconButton>
                </Avatar>
              
              </Box>
            </Grid>
          <Grid item xs={12} sm={5}>
            <InputLabel sx={{fontWeight:"bold",color:Colors.black}}>Company Name</InputLabel>
            <TextField
              fullWidth
              variant="outlined"
              sx={{mt:0.5}}
              margin="normal"
              {...register("companyName", {
                required: "Company Name is required",
              })}
              error={errors.companyName && true}
              helperText={errors?.companyName?.message}
              InputProps={{
                style: { borderColor: "#ff4081" },
              }}
              InputLabelProps={{
                style: { color: "#ff4081" },
              }}
              
            />
            <InputLabel sx={{fontWeight:"bold",color:Colors.black,mt:0.5}}>Phone Number</InputLabel>
            <TextField
              sx={{mt:0.5}}
              fullWidth
              variant="outlined"
              margin="normal"
              {...register("phone", {
                required: "Phone Number is required",
              })}
              error={errors.phone && true}
              helperText={errors?.phone?.message}
            />
             <InputLabel sx={{fontWeight:"bold",color:Colors.black,mt:0.5}}>Email</InputLabel>
            <TextField
             sx={{mt:0.5}}
              fullWidth
              variant="outlined"
              margin="normal"
              {...register("email", {
                required: "Email is required",
              })}
              error={errors.email && true}
              helperText={errors?.email?.message}
            />
          </Grid>
          <Grid item xs={6}>
          <InputLabel sx={{fontWeight:"bold",color:Colors.black}}>Additional Notes  (optional)</InputLabel>
            <TextField
              fullWidth
              variant="outlined"
              multiline
              rows={8}
              margin="normal"
              {...register("notes")}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
            type="submit"
              variant="contained"
              color="secondary"
              style={{ backgroundColor: "#ff4081", color: "#fff" }}
            >
              Continue
            </Button>
          </Grid>
        </Grid>
        </Box>
      </Box>
    </>
  );
};

export default App;
