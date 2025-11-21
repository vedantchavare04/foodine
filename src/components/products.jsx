import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from "react";
import {useProduct} from "../store/useProduct.js";

function Product(){
  const{products,loading,error,fetchProducts}=useProduct();
  
    useEffect(()=>{
      fetchProducts()
    },[fetchProducts])

    return <div>
    <div class="prodcards">
        <div class="prodgroc">
          <div class="type">
        <h1 class="groccard">Grocery & Daily essentials</h1>
        </div>
        <div class="ar_cards">
        {products.map(i => (
      <div key={i.id}>
        <div class="card">
        <div class="card__shine"></div>
        <div class="card__glow"></div>
        <div class="card__content">
    <div  class="card__image" style={{
    backgroundImage: `url(${i.image})`,
    backgroundSize: "cover",backgroundPosition: "center",}}
></div>
    <div class="card__text">
      <p class="card__title">{i.item}</p>
      <p class="card__description">{i.quantity}</p>
      <p class="card__description">{i.reviews}(1.5k+)</p>
    </div>
    <div class="card__footer">
      <div class="card__price">₹{i.price}</div>
      <div class="card__button">
        <svg height="16" width="16" viewBox="0 0 24 24">
          <path
            stroke-width="2"
            stroke="currentColor"
            d="M4 12H20M12 4V20"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</div>
</div>
    ))}
    </div>
</div>
    <div class="medicard">
    <h1 class="groccard">Pharmaceuticals & Health care</h1>
    <div class="card">
  <div class="card__shine"></div>
  <div class="card__glow"></div>
  <div class="card__content">
    <div class="pharma__image"></div>
    <div class="card__text">
      <p class="card__title">Cold syrup</p>
      <p class="card__description">50ml</p>
      <p class="card__description">Reviews ⭐⭐⭐⭐(2.1k+)</p>
    </div>
    <div class="card__footer">
      <div class="card__price">₹150</div>
      <div class="card__button">
        <svg height="16" width="16" viewBox="0 0 24 24">
          <path
            stroke-width="2"
            stroke="currentColor"
            d="M4 12H20M12 4V20"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</div>

    </div>
</div>
</div>
}

export default Product;