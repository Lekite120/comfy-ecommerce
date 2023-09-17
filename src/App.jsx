import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from './page/Home'
import AboutPage from "./page/About";
import ProductsPage from "./page/ProductsPage";
import Footer from "./components/Footer";
import CartPage from "./page/CartPage";
import SingleProduct from "./page/SingleProduct";
import ErrorPage from "./page/ErrorPage";


export default function App(){
    return(
        <Router>
            <Navbar />
            <Sidebar />
            <Routes>
                <Route path="/" exact element={<Home />}/>
                <Route path="/about" element={<AboutPage />}/>
                <Route path="/products" element={<ProductsPage />}/>
                <Route path="/products/:id" element={<SingleProduct />}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
            <Footer />
        </Router>
    )
}