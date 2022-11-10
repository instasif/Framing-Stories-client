import React from "react";
import About from "../About/About";
import Fq from "../F/Q/Fq";
import Gellery from "../Gallery/Gellery";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";

const Home = () => {
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
