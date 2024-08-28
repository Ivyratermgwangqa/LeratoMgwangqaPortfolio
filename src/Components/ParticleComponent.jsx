import React from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticleComponent = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesOptions = {
        particles: {
            number: {
                value: 50, // Adjust the number of particles
            },
            color: {
                value: "#ff0000", // Change particle color for this component
            },
            links: {
                enable: true,
                distance: 120,
                color: "#ff0000",
                opacity: 0.5,
                width: 1,
            },
            move: {
                enable: true,
                speed: 2,
            },
            size: {
                value: 4, // Different size for the particles
                random: true,
            },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                onClick: {
                    enable: true,
                    mode: "push",
                },
            },
            modes: {
                repulse: {
                    distance: 100,
                },
                push: {
                    quantity: 3,
                },
            },
        },
        detectRetina: true,
    };

    return <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />;
};

export default ParticleComponent;