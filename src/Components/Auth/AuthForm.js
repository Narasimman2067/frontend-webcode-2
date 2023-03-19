import {
  Button,
  Dialog,
  FormLabel,
  IconButton,

  TextField,
  Typography,
} from "@mui/material";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { Box } from "@mui/system";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const labelStyle = { mt: 1, mb: 1 };
export const AuthForm = ({onSubmit, isAdmin }) => {
  const navigate =useNavigate()
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isSignup, setIsSignup] = useState(false);
  const handleChange =(e)=>{
    setInputs((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value,
    
    }))
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
   onSubmit({inputs,signup:isAdmin ? false :isSignup})
  }
  return (
    <Dialog PaperProps={{ style: { borderRadius: 20 } }}  open={"true"}>
      <Box sx={{ ml: "auto", padding: 1 }}>
        <IconButton LinkComponent={Link} to="/home">
          <CloseRoundedIcon />
        </IconButton>
      </Box>
      <Typography
        variant="h4"
        margin={"auto"}
        textAlign={"center"}
        fontFamily={"algerian"}
      >
        {isSignup ? "signUp" : "login"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          display={"flex"}
          padding={4}
          justifyContent={"center"}
          flexDirection="column"
          gap="0.1rem"
          width={350}
          margin="auto"
          alignContent={"center"}
        >
          {!isAdmin && isSignup && (
            <>
              {" "}
              <FormLabel sx={{ mt: 1, mb: 1 }}>Name</FormLabel>
              <TextField
              value={inputs.name}
              onChange={handleChange}
              variant="standard"
                type={"text"}
                name="name"
                placeholder="type your name"
              />
            </>
          )}

          <FormLabel sx={{ mt: 1, mb: 1 }}>Email</FormLabel>
          <TextField
             value={inputs.email}
             onChange={handleChange}
            variant="standard"
            type={"email"}
            name="email"
            placeholder="type your email"
          ></TextField>
          <FormLabel sx={labelStyle}>Password</FormLabel>

          <TextField
             value={inputs.password}
             onChange={handleChange}
            variant="standard"
            type={"password"}
            name="password"
            placeholder="type your password"
          />
          <Button
            sx={{ mt: 2, borderRadius: 10, bgcolor: "brown" }}
            type={"submit"}
            variant="contained"
            fullWidth
          >
              
          
            {isSignup ? "signUp" : "login"}
          </Button>
         {!isAdmin && isSignup && (<Button
            LinkComponent={Link}
            to={"/home"}
            onClick={() => setIsSignup(!isSignup)}
            sx={{ mt: 2, borderRadius: 10 }}
         
            fullWidth
          >  
          Switch to {"signup " &&  isSignup ? "login" : "Signup" }
          </Button>)}
        </Box>
      </form>
    </Dialog>
  );
};
