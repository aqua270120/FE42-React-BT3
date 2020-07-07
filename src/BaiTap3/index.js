import React from 'react';
import Header from './Header'
import Caroussel from './Carousel';
import Promo from './Promotion';
import ListProduct from './ListProduct';
export default function BaiTap3() {
    return (
        <div className="bg-dark">
            <Header />
            <Caroussel />
            <ListProduct />
            <Promo />
        </div>
    );
}