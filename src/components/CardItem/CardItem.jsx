import React, { useContext } from "react";
import "./CardItem.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
    Button,
    ButtonGroup,
    TableCell,
    TableRow,
    Typography,
} from "@mui/material";
import { Context } from "../../context/Context";
const CardItem = ({ item }) => {
    const { cart, setCart } = useContext(Context);
    console.log(cart.length);
    const handleCountAmount = (operation) => {
        if (operation === "increase") {
            setCart(
                cart.map((ite) =>
                    ite.id === item.id ? { ...ite, count: item.count + 1 } : ite
                )
            );
        } else {
            item.count === 1 ? setCart(cart.filter((ite) => ite.id !== item.id)) :
            setCart(
                cart.map((ite) =>
                    ite.id === item.id ? { ...ite, count: item.count - 1 } : ite
                )
            );
        }
    };
    return item.count ? (
        <TableRow
            key={item.name}
            sx={{
                width: "100%",
                "&:last-child td, &:last-child th": { border: 0 },
            }}
        >
            <TableCell component="th" scope="row">
                <img width={200} src={item.thumbnail} alt={item.title} />
            </TableCell>
            
            <TableCell>{item.brand}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell align="right">
                <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                    style= {{textAlign: "center"}}
                >
                    <Button onClick={() => handleCountAmount("increase")}>
                        <AddIcon />
                    </Button>
                    <Typography sx={{px: 1, align: "center", m: "auto"}}>{item.count}</Typography>
                    <Button onClick={() => handleCountAmount("decrease")}>
                        <RemoveIcon />
                    </Button>
                </ButtonGroup>
            </TableCell>
        </TableRow>
    ) : ""
};

export default CardItem;
