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

    const [description, setDescription] = useState("");

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email) {
            window.location.href = `mailto:${email}?subject=Contacting You&body=${encodeURIComponent(description)}`;
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
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: "500px",
                    marginBottom: "2rem",
                }}
            >
                <textarea
                    value={description}
                    onChange={handleDescriptionChange}
                    placeholder="Enter your message here..."
                    style={{
                        width: "100%",
                        padding: "1rem",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        marginBottom: "1rem",
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: "0.75rem 2rem",
                        borderRadius: "5px",
                        backgroundColor: "#2a8d94",
                        color: "#000000",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Submit
                </button>
            </form>
            <p>Follow me on social media:</p>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "2.5rem",
                }}
            >
                {email && (
                    <a href={`mailto:${email}`}>
                        <img src={envelopeIcon} alt="email" className="socialIcon" />
                    </a>
                )}
                {devDotTo && (
                    <a href={`https://dev.to/${devDotTo}`} target="_blank" rel="noopener noreferrer">
                        <img src={mediumIcon} alt="Dev.to" className="socialIcon" />
                    </a>
                )}
                {gitHub && (
                    <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer">
                        <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
                    </a>
                )}
                {instagram && (
                    <a
                        href={`https://www.instagram.com/${instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={instagramIcon} alt="Instagram" className="socialIcon" />
                    </a>
                )}
                {linkedIn && (
                    <a
                        href={`https://www.linkedin.com/in/${linkedIn}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
                    </a>
                )}
                {medium && (
                    <a href={`https://medium.com/@${medium}`} target="_blank" rel="noopener noreferrer">
                        <img src={mediumIcon} alt="Medium" className="socialIcon" />
                    </a>
                )}
                {twitter && (
                    <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="Twitter" className="socialIcon" />
                    </a>
                )}
                {youTube && (
                    <a
                        href={`https://www.youtube.com/c/${youTube}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={youTubeIcon} alt="YouTube" className="socialIcon" />
                    </a>
                )}
                {facebook && (
                    <a
                        href={`https://www.facebook.com/${facebook}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={facebookIcon} alt="Facebook" className="socialIcon" />
                    </a>
                )}
                {whatsapp && (
                    <a
                        href={`https://wa.me/${whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={whatsappIcon} alt="WhatsApp" className="socialIcon" />
                    </a>
                )}
            </div>
            <p className="small" style={{ marginTop: "2rem", color: "white" }}>
                <p>&copy; 2024 {name}. All rights reserved.</p>
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