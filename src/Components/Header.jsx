import React from "react";

const Header = () => {
    return (
        <div
            style={{
                position: "fixed",
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
                background: "#00000",
                padding: "1rem",
                top: 0,
                width: "100%",
                zIndex: 10,
            }}
        >
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#footer">Contact</a>
        </div>
    );
};

export default Header;