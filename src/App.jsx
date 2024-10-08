import React from "react";
import ParticleBackground from "./Components/ParticleBackground";
import ParticleComponent from "./Components/ParticleComponent";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
    name: "Lerato Mgwangqa",
    title: "Software Engineer | Aspiring AI Engineer",
    email: "ivyratermgwangqa@gmail",
    gitHub: "Ivyratermgwangqa",
    instagram: "ivyrater0411",
    linkedIn: "lerato-mgwangqa-941344238",
    medium: "Lerato Mgwangqa",
    twitter: "@LeratoMgwangqa",
    facebook: "Lerato Mgwangqa",
    whatsapp: "27672544756",
    youTube: "..........",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
    return (
        <div id="main">
            {/* Background Particles */}
            <ParticleBackground />

            {/* Foreground Content */}
            <Header />
            <Home name={siteProps.name} title={siteProps.title} />
            <About />
            <Portfolio />

            {/* Particle Overlay */}
            <ParticleComponent />

            <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
        </div>
    );
};

export default App;