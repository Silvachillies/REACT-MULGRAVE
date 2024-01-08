import Navbar from "./Navbar";
import AnimatedPage from "./Animated";
import "./Watches.css";
import { PRODUCTS } from "./Products";
import { useState, useContext } from "react";
import { CartContext } from "./Cart";
import { Rows } from "lucide-react";

export default function Watches({ watch }) {
  return (
    <AnimatedPage>
      <Navbar />
      <h1>FOR SALE</h1>
      <div className="watchmenu">
        {PRODUCTS.map((watch, i) => (
          <div key={i} className="itemCard">
            <p>{watch.Name}</p>
            <p>{watch.Model}</p>
            <p>{watch.Year}</p>
            <p>{watch.Condition}</p>
            <p>{watch.Price}</p>
            <img src={watch.img} style={{ height: 200, borderRadius: "7px" }} />
            <button
              className="buy"
              onClick={() => cart.addOneToCart(watch.Name)}
            >
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </AnimatedPage>
  );
}
