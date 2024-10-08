import React from "react";
import image from "../images/Black-building.jpg";

const imageAltText = "purple and blue abstract background";

const description =
    "I'm Lerato Mgwangqa, an aspiring software engineer 📚 I'm currently a student at Sol Plaatje, pursuing a BSc in Mathematical and Computer Sciences";

const skillsList = [
    "Back-end development",
    "User experience",
    "Database Management",
    "Unit-testing",
    "Front-end development",
    "Collaboration",
];

const detailOrQuote =
    "In the intricate dance of programming languages, I've got moves! From the rhythm of C/C++ to the poetry of Python, and orchestrating databases with the finesse of MySQL, my skills are tuning up. I'm also well-versed in:";

const About = () => {
    return (
        <section className="padding" id="about">
            <img className="background" src={image} alt={imageAltText} />
            <div
                style={{
                    backgroundColor: "#000000",
                    width: "50%",
                    padding: "4rem",
                    margin: "3rem auto",
                    textAlign: "center",
                    borderRadius: "20px",  // Rounded corners
                    border: "5px solid #88BDBC",  // Border with different color
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)", // Add a shadow
                }}
            >
                <h2>About Myself</h2>
                <p className="large">{description}</p>
                <hr />
                <ul
                    style={{
                        textAlign: "left",
                        columns: 2,
                        fontSize: "1.25rem",
                        margin: "2rem 3rem",
                        gap: "3rem",
                    }}
                >
                    {skillsList.map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
                <hr />
                <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
            </div>
        </section>
    );
};

export default About;