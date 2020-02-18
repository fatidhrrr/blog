import React, { Fragment } from "react";
import "./css/style.css";
import Nav from "./components/Nav";
import Logo from "./components/Logo";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

const App = () => {
    return (
        <div className="body">
            <Logo/>
            <Nav/>
            <Carousel/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;