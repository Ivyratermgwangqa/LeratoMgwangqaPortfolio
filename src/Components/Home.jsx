import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import image from "../images/Black-building.jpg"; // Background image

const imageAltText = "Lerato Mgwangqa Background image";

const Home = ({ name, title }) => {
    return (
        <section
            id="home"
            className="min-height"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "#fff", // Ensures the text is visible on a dark background
                position: "relative", // Allows positioning of child elements
                minHeight: "100vh", // Ensures the section takes full viewport height
            }}
        >
            <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
                <h1>{name}</h1>
                <h2>{title}</h2>
            </div>
            <div style={{ position: "absolute", bottom: "3rem", left: "50%", transform: "translateX(-50%)" }}>
                <img src={arrowSvg} style={{ height: "2rem", width: "3rem" }} alt="Down arrow" />
            </div>
        </section>
    );
};

Home.defaultProps = {
    name: "",
    title: "",
};

Home.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Home;