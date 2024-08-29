import React, { useState } from "react";
import PropTypes from "prop-types";

import facebookIcon from "../images/socials/facebook.svg";
import whatsappIcon from "../images/socials/whatsapp.svg";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import mediumIcon from "../images/socials/medium.svg";
import twitterIcon from "../images/socials/twitter.svg";
import youTubeIcon from "../images/socials/youtube.svg";

const Footer = (props) => {
    const {
        devDotTo,
        email,
        gitHub,
        instagram,
        linkedIn,
        medium,
        name,
        primaryColor,
        twitter,
        youTube,
        facebook,
        whatsapp,
    } = props;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email) {
            window.location.href = `mailto:${email}?subject=Contacting You&body=${encodeURIComponent(formData.message)}`;
        }
    };

    return (
        <div
            id="footer"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2.5rem",
                padding: "5rem 0 3rem",
                backgroundColor: "#070707",
                width: "100vw",
                textAlign: "center",
                animation: "fadeIn 1s ease-in-out",
            }}
        >
            <div style={{ textAlign: "center", width: "100%", maxWidth: "600px" }}>
                <h2>Contact Me</h2>
                <p>If you have any questions or just want to get in touch, feel free to send me a message:</p>
                <form id="contact-form" onSubmit={handleSubmit} style={{ width: "100%" }}>
                    <div style={{ marginBottom: "1rem" }}>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your name"
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                borderRadius: "5px",
                                border: "1px solid #19acc9",
                                transition: "border-color 0.3s, box-shadow 0.3s",
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: "1rem" }}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                borderRadius: "5px",
                                border: "1px solid #13adcf",
                                transition: "border-color 0.3s, box-shadow 0.3s",
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: "1rem" }}>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Enter your message"
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                borderRadius: "5px",
                                border: "1px solid #14a0c7",
                                transition: "border-color 0.3s, box-shadow 0.3s",
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            padding: "0.75rem 2rem",
                            borderRadius: "5px",
                            backgroundColor: "#0ed0de",
                            color: "#060606",
                            border: "rtym 1px solid #000000",
                            cursor: "pointer",
                            marginTop: "1rem",
                            transition: "background-color 0.3s, transform 0.3s",
                        }}
                    >
                        Send
                    </button>
                </form>
            </div>
            <p>Follow me on social media:</p>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "2.5rem",
                    flexWrap: "wrap",
                }}
            >
                {email && (
                    <a href={`mailto:${email}`}>
                        <img
                            src={envelopeIcon}
                            alt="email"
                            className="socialIcon"
                            style={{ transition: "transform 0.3s" }}
                        />
                    </a>
                )}
                {devDotTo && (
                    <a href={`https://dev.to/${devDotTo}`} target="_blank" rel="noopener noreferrer">
                        <img
                            src={mediumIcon}
                            alt="Dev.to"
                            className="socialIcon"
                            style={{ transition: "transform 0.3s" }}
                        />
                    </a>
                )}
                {gitHub && (
                    <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer">
                        <img
                            src={gitHubIcon}
                            alt="GitHub"
                            className="socialIcon"
                            style={{ transition: "transform 0.3s" }}
                        />
                    </a>
                )}
                {instagram && (
                    <a
                        href={`https://www.instagram.com/${instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={instagramIcon}
                            alt="Instagram"
                            className="socialIcon"
                            style={{ transition: "transform 0.3s" }}
                        />
                    </a>
                )}
                {linkedIn && (
                    <a
                        href={`https://www.linkedin.com/in/${linkedIn}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={linkedInIcon}
                            alt="LinkedIn"
                            className="socialIcon"
                            style={{ transition: "transform 0.3s" }}
                        />
                    </a>
                )}
                {medium && (
                    <a href={`https://medium.com/@${medium}`} target="_blank" rel="noopener noreferrer">
                        <img
                            src={mediumIcon}
                            alt="Medium"
                            className="socialIcon"
                            style={{ transition: "transform 0.3s" }}
                        />
                    </a>
                )}
                {twitter && (
                    <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
                        <img
                            src={twitterIcon}
                            alt="Twitter"
                            className="socialIcon"
                            style={{ transition: "transform 0.3s" }}
                        />
                    </a>
                )}
                {youTube && (
                    <a
                        href={`https://www.youtube.com/c/${youTube}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={youTubeIcon}
                            alt="YouTube"
                            className="socialIcon"
                            style={{ transition: "transform 0.3s" }}
                        />
                    </a>
                )}
                {facebook && (
                    <a
                        href={`https://www.facebook.com/${facebook}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={facebookIcon}
                            alt="Facebook"
                            className="socialIcon"
                            style={{ transition: "transform 0.3s" }}
                        />
                    </a>
                )}
                {whatsapp && (
                    <a
                        href={`https://wa.me/${whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={whatsappIcon}
                            alt="WhatsApp"
                            className="socialIcon"
                            style={{ transition: "transform 0.3s" }}
                        />
                    </a>
                )}
            </div>
            <p className="small" style={{ marginTop: "2rem", color: "white" }}>
                &copy; 2024 {name}. All rights reserved.
            </p>
        </div>
    );
};

Footer.defaultProps = {
    name: "",
};

Footer.propTypes = {
    devDotTo: PropTypes.string,
    email: PropTypes.string,
    gitHub: PropTypes.string,
    instagram: PropTypes.string,
    linkedIn: PropTypes.string,
    medium: PropTypes.string,
    name: PropTypes.string.isRequired,
    primaryColor: PropTypes.string,
    twitter: PropTypes.string,
    youTube: PropTypes.string,
    facebook: PropTypes.string,
    whatsapp: PropTypes.string,
};

export default Footer;