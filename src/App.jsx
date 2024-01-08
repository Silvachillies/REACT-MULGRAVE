import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import Homepage from "./Homepage";
import CartProvider from "./Cart";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Homepage />
    </CartProvider>
  );
}

export default App;
