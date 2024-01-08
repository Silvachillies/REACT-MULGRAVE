import { Link, Outlet, Navigate } from "react-router-dom";
import { ShoppingBasket, Instagram, Facebook, Phone } from "lucide-react";
export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="title">MULGRAVE WATCHES</h1>
      <ul>
        <li>
          <a href="homepage">HOME</a>
        </li>
        <li>
          <a href="about">ABOUT</a>
        </li>
        <li>
          <a href="watches">WATCHES</a>
        </li>

        <li>
          <a href="contact">CONTACT</a>
        </li>
        <li>
          <a href="cart">CART</a>
        </li>
      </ul>
      <div className="socials">
        <Instagram />
        <Facebook />
        <Phone />
      </div>
    </nav>
  );
}
