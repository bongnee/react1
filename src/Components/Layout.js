import React, { Component } from "react";
import './style.css';
import Nav from './Nav';
import Banner from './Banner'
import Item from './Item'
import Footer from "./Footer";

export default class Layout extends Component {
  render() {
    return (
      <div>
        {/* nav  */}
        <Nav/>

        <body>
            {/* banner  */}
            <Banner/>
            {/* item  */}
            <div className="pt-4">
                <div className="container px-lg-5">
                    <div className="row gx-lg-5">
                       <Item/>
                       <Item/>
                       <Item/>
                       <Item/>
                       <Item/>
                       <Item/>
                    </div>
                </div>
            </div>
            {/* foooter */}
            <Footer/>
        </body>
      </div>
    );
  }
}
