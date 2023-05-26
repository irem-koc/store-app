import React from "react";
import "./Signup.css";
import { Box, Button, FormControl, TextField } from "@mui/material";
const Signup = () => {
    return (
        <Box className="sign-in-form"
            component="form"
            sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
        >
            <FormControl fullWidth >
                <TextField 
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                />
            </FormControl>
            <FormControl fullWidth>
                <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                />
            </FormControl>
            <Button variant="contained">Sign In</Button>
        </Box>
    );
};

export default Signup;
