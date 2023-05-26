import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Navbar = () => {
    return (
        <div>
            <AppBar
                sx={{
                    width: "80%",
                    mx: "auto",
                    horizantal: "right",
                    minHeight: "120px",
                    textAlign: "center",
                }}
                position="static"
                color="success"
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        verticalAlign: "top",
                        justifyContent: "space-between",
                        margin: "auto 0",
                    }}
                >
                    <Typography
                        sx={{
                            display: "flex",
                        }}
                        href="/"
                    >
                        <Link className="nav-link brand" to="/">
                            ELECTRONICS SHOP
                        </Link>
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                        <Typography>
                            <Link className="nav-link" to="/">
                                HOME
                            </Link>
                        </Typography>
                        <Typography>
                            <Link className="nav-link" to="/signup">
                                SIGNUP
                            </Link>
                        </Typography>
                        <Typography
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Link to="/card" style={{ textDecoration: "none" }}>
                                <span
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <span style={{ color: "white" }}>{0}</span>
                                    <ShoppingCartIcon sx={{ color: "white" }} />
                                </span>
                            </Link>
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
