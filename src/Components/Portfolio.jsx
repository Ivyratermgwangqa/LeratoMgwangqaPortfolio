// src/components/Portfolio.js
import React from "react";
import Carousel from "./Carousel"; // Import the Carousel component

const projectList = [
    {
        title: "RESIDENCE-BASED MANAGEMENT SYSTEM FOR STUDENTS 🎉",
        description: "Developed a system to manage student residence information efficiently.",
        url: "https://github.com/Ivyratermgwangqa/SPU-Residence-Management.git",
    },
    {
        title: "GITHUB TOP REPO ANALYSIS PROJECT",
        description: "This project provides an analysis of the top repositories on GitHub based on various metrics such as stars, forks, and activity.",
        url: "https://github.com/Ivyratermgwangqa/github-top-repos-analysis.git",
    },
    {
        title: "My Resume Site",
        description: "A simple site to show off my resume and projects.",
        url: "https://lerato-mgwangqa-portfolio.vercel.app/",
    },
    {
        title: "C PRINTF",
        description: "Implemented a simplified version of the C printf function.",
        url: "https://github.com/Ivyratermgwangqa/printf.git",
    },
    {
        title: "Learnaz-Hub",
        description: "Learnaz Hub is an E-learning platform designed for users of all ages to learn new skills and gain knowledge in various fields.",
        url: "https://learnaz-hub.vercel.app/",
    },
];

const Portfolio = () => {
    return (
        <section
            className="padding"
            id="portfolio"
            style={{
                padding: "3rem",
                backgroundColor: "#000000",
            }}
        >
            <h2 style={{ textAlign: "center", width: "100%" }}>Portfolio</h2>
            <div style={{ paddingTop: "3rem" }}>
                <Carousel projects={projectList} /> {/* Pass the project list to the Carousel */}
            </div>
        </section>
    );
};

export default Portfolio;