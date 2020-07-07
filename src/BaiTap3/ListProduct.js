import React from "react";
import ProductItem from './ProductItem';
export default function ListProduct() {
    return (
        <section id="smartphone" className="container-fluid pt-5 pb-5">
            <h1 className="text-white text-center">BEST SMARTPHONE</h1>
            <div className="row">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </section>
    );
};