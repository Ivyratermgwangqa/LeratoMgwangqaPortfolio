import React from "react";

const Experience = ({ experiences }) => {
    return (
        <section id="experience">
            <h2>Experience</h2>
            {experiences.map((experience, index) => (
                <div key={index} className="experience-item">
                    <h3>{experience.title}</h3>
                    <h4>{experience.company}</h4>
                    <p>{experience.duration}</p>
                    <p>{experience.description}</p>
                </div>
            ))}
        </section>
    );
};

export default Experience;
