import React from "react";
import Carousel from './Carousel';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import ListCard from './ListCard';
import WhatWeDo from './WhatWeDo';
export default function BaiTap2() {
    return (
        <div>
            <Header />
            <Carousel />
            <div className="row">
                <WhatWeDo />
                <Contact />
            </div>
            <ListCard />
            <Footer />
        </div>
    );
};