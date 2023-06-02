import React, { useContext, useEffect, useState } from "react";
import "./ProductList.css";
import { Context } from "../../context/Context";
import Spinner from "../Spinner/Spinner";
import ProductItem from "../ProductItem/ProductItem";
import { Alert, AlertTitle } from "@mui/material";
const ProductList = () => {
    const { data, setData, cart } = useContext(Context);

    const [alert, setAlert] = useState(false);
    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch("https://dummyjson.com/products/")
            ).json();
            setData(data.products);
        };
        dataFetch();
    }, [setData]);
    const payment = cart.reduce(function (charCount, item) {
        return charCount + item.price * item.count;
    }, 0);
    useEffect(() => {
        return () => {
            setAlert(!alert);
            setTimeout(() => setAlert(false), 6000);
        };
    }, [payment, alert]);
    useEffect(() => {
        return () => {
            setAlert(false);
        };
    }, []);
    

    return !data.length ? (
        <Spinner />
    ) : (
        <div>
            <div className="product-list">
                {data.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
            {alert ? (
                <Alert
                    sx={{
                        width: 400,
                        display: "flex",
                        justifyContent: "flex-start",
                        position: "fixed",
                        bottom: 0,
                        mx: "auto",
                        right: 10,
                    }}
                    severity="success"
                >
                    <AlertTitle>Success</AlertTitle>
                    This is a success alert — <strong>check it out!</strong>
                </Alert>
            ) : (
                ""
            )}
        </div>
    );
};

export default ProductList;
