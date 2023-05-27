import React, { useContext } from "react";
import "./Card.css";
import { Context } from "../../context/Context";
import CardItem from "../CardItem/CardItem";

// or
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
const Card = () => {
    const { cart, setCart } = useContext(Context);
    const total = cart.reduce(function (charCount, item) {
        return charCount + item.count;
    }, 0);
    const payment= cart.reduce(function (charCount, item) {
        return charCount + item.price*item.count;
    }, 0);;
    return (
        <TableContainer sx={{ width: "80%",mx: "auto"}} component={Paper}>
            <Table sx={{ minWidth: 650, mx: "auto" }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Image (100g serving)</TableCell>
                        <TableCell>Brand</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell align="right">Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cart.map((item,i) => (
                        <CardItem key={i} item={item} cart={cart} setCart={setCart} />
                    ))}
                    <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell colSpan={2}>Product Count</TableCell>
                        <TableCell align="right">{total}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Total Payment</TableCell>
                        <TableCell colSpan={2} align="right">{payment}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Card;
