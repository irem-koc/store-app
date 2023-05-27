import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Divider } from "@mui/material";

import "./ProductItem.css";
import { Context } from "../../context/Context";

const ProductItem = ({ product }) => {
    const { cart, setCart } = useContext(Context);
    const handleCart = () => {
        if (cart.find((item) => item.id === product.id)) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, count: item.count + 1 }
                        : item
                )
            );
        } else {
            setCart([...cart, { ...product, count: 1 }]);
        }
    };
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
                <Button onClick={handleCart} variant="contained">
                    Add to Card
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductItem;
