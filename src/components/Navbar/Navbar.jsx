"use client";
import "./Navbar.css";
import Image from "next/image"; 
import Link from "next/link"; 
import logo from "../../assets/images/logo.png";
import cart from "../../assets/images/cart_icon.png";
import { ShopContext } from "../../context/ShopContext"; 
import { useContext } from "react";

const Navbar = () => {
    
    const { getTotalCartItems } = useContext(ShopContext); 

    return (
        <div className="navbar">
            <div className="nav-logo">
                <Image src={logo} alt="Brand Logo" width={50} height={50} />
                <p>Brand Store</p>
            </div>

            <ul className="nav-menu">
                <li>
                    <Link href="/">Shop</Link>
                </li>
                <li>
                    <Link href="/ShopCategory/men">
                        Men
                    </Link>
                </li>
                <li>
                    <Link href="/ShopCategory/women">
                        Women
                    </Link>
                </li>
                <li>
                    <Link href="/ShopCategory/kid">
                        Kids
                    </Link>
                </li>
            </ul>

            <div className="nav-login-cart">
                <Link href="/login">
                    <button>Login</button>
                </Link>
                <Link href="/cart">
                    <Image src={cart} alt="Cart" width={30} height={30} />
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navbar;
