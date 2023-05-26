import React, { useContext, useEffect } from "react";
import "./ProductList.css";
import { Context } from "../../context/Context";
import Spinner from "../Spinner/Spinner";
import ProductItem from "../ProductItem/ProductItem";
const ProductList = () => {
    const { data, setData } = useContext(Context);
    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch("https://dummyjson.com/products/")
            ).json();
            setData(data.products);
        };
        dataFetch();
    }, [setData]);
    return !data.length ? (
        <Spinner />
    ) : (
        <div className="product-list">
            {data.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
