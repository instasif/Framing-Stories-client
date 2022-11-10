import React from "react";
import UseTitle from "../../../Hooks/UseTitle";
import About from "../About/About";
import Fq from "../F/Q/Fq";
import Gellery from "../Gallery/Gellery";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";

const Home = () => {
    UseTitle('Home')
    return (
        <div>
            <Slider />
            <Gellery/>
            <About />
            <Services />
            <Fq/>
        </div>
    );
};

export default Home;
