import React, { useContext } from "react";
import "./Detail.css";
import { Context } from "../../context/Context";
import { Box, Container, Typography } from "@mui/material";
const Detail = () => {
    const { data } = useContext(Context);
    const id = window.location.pathname.split("/")[2];
    const product = data.find((prod) => prod.id === Number(id));
    console.log(data);
    return (
        <Container 
            sx={{
                my: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "80%",
            }}
        >
            <Box
                sx={{
                    mx: "auto",
                    display: "block",
                }}
            >
                <img src={product.thumbnail} alt={product.title} />
            </Box>
            <Box
                sx={{
                    
                    my: 5,
                    px: 0,
                    display: "block",
                    flexDirection: "column",
                    textAlign: "center",
                }}
            >
                <Box sx={{
                    mx: 0,
                    display: "block",
                }}>
                    <Typography sx={{textAlign: "start"}} variant="h6">
                        Title: {product.title}
                    </Typography>
                </Box>
                <Box>
                    <Typography sx={{textAlign: "start"}} variant="h6">
                        Brand: {product.brand}
                    </Typography>
                </Box>
                <Box>
                    <Typography sx={{textAlign: "start"}} variant="h6">
                        Price: {product.price}
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    px: 0,
                    width: "%80",
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                }}
            >
                {product.images.map((url, i) => (
                    <img width="300px" style={{marginBottom: "10px"}}
                        sx={{
                            px: 0,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                        }}
                        src={url}
                        key={i}
                        alt={product.title}
                    />
                ))}
            </Box>
        </Container>
    );
};

export default Detail;
