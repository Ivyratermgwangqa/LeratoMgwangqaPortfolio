import React from "react";
import image from "../images/umbrella-4692572.jpg"; // Your background image

const imageAltText = "desktop with books and laptop";

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
        description: "Learnaz Hub is an E-learning platform designed for users of all ages to learn new skills and gain knowledge in various fields. Our platform offers a wide range of courses, from technical skills to creative arts, delivered by industry experts. Our goal is to make education accessible, engaging, and effective for everyone.",
        url: "https://learnaz-hub.vercel.app/",
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