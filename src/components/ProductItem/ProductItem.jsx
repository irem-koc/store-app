import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Divider } from "@mui/material";

import "./ProductItem.css";
const ProductItem = ({ product }) => {
    return (
        <Card className="card-item" sx={{ width: 300 }}>
            <CardActionArea>
                <CardMedia
                    className="card-image"
                    component="img"
                    height="140"
                    image={product.thumbnail}
                    alt={product.title}
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="span">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                </CardContent>

                <Divider />
            </CardActionArea>
            <CardActions>
                <Button variant="contained">Add to Card</Button>
            </CardActions>
        </Card>
    );
};

export default ProductItem;
