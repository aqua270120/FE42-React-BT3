import React, { Component } from "react";
import Header from './header';
import Content from './content';
import Footer from './footer';
import Sidebar from './sidebar';
export default class BaiTap1 extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
                <Sidebar />
                <Footer />
            </div>

        );
    };
};

// export default BaiTap1;