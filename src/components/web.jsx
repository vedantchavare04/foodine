import { Routes, Route } from "react-router-dom";
import {App,AppLoader} from "./home.jsx";
import Detail from "./detail.jsx";
import Option from "./options.jsx";
import Product from "./products.jsx";
import Footer from "./footer.jsx";
import React, { useEffect, useState } from "react";
import Shop from "./shop.jsx"

function Web() {
  return (
    <Routes>
      <Route exact path="/" element={<div>
        <AppLoader/>
        <App />
        <Detail/>
        <Option />
        <Product />
        <Footer/>

        </div>} />

      <Route exact path="/shop" element={<div>
        <Shop />
        </div>
        } />
    </Routes>
  );
}

export default Web;