import React, { useContext } from "react";

import Table from "@mui/material/Table";

import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import "./Card.css";
import { Context } from "../../context/Context";
import CardItem from "../CardItem/CardItem";
import { TableCell, TableRow } from "@mui/material";
const Card = () => {
    const { cart, setCart } = useContext(Context);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Description</TableCell>
                        <TableCell align="right">Count</TableCell>
                        {/*<TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                    </TableRow>
                </TableHead>
                {cart.map((item, i) => (
                    <CardItem
                        key={i}
                        item={item}
                        cart={cart}
                        setCart={setCart}
                    />
                ))}
            </Table>
        </TableContainer>
    );
};

export default Card;
