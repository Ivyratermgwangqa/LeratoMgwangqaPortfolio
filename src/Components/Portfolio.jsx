import React from "react";
import image from "../images/umbrella-4692572.jpg"; // Your background image

const imageAltText = "desktop with books and laptop";

const projectList = [
    {
        title: "RESIDENCE-BASED MANAGEMENT SYSTEM FOR STUDENTS 🎉",
        description: "Developed a system to manage student residence information efficiently.",
        url: "..........",
    },
    {
        title: "GITHUB TOP REPO ANALYSIS PROJECT",
        description: "This project provides an analysis of the top repositories on GitHub based on various metrics such as stars, forks, and activity.",
        url: "...........",
    },
    {
        title: "My Resume Site",
        description: "A simple site to show off my resume and projects.",
        url: "............",
    },
    {
        title: "C PRINTF",
        description: "Implemented a simplified version of the C printf function.",
        url: "..........",
    },
    {
        title: "Learnaz-Hub",
        description: "",
        url: "..........",
    },
];

const Portfolio = () => {
    return (
        <section
            className="padding"
            id="portfolio"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "#fff", // Ensures text is visible on a dark background
                padding: "3rem",
            }}
        >
            <h2 style={{ textAlign: "center" }}>Portfolio</h2>
            <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
                <div style={{ maxWidth: "40%", alignSelf: "center" }}>
                    <img
                        className="background"
                        src={image}
                        style={{ height: "90%", width: "100%", objectFit: "cover" }}
                        alt={imageAltText}
                    />
                </div>
                <div className="container">
                    {projectList.map((project) => (
                        <div className="box" key={project.title}>
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
                            </a>
                            <p className="small">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;