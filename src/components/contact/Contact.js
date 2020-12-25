import React, {Component} from "react";
import {Col, Jumbotron, Row} from "react-bootstrap";

import './Contact.css'

export default class Contact extends Component {

    render() {
        return (
            <div id="contact" className="app-nav app-after-card">
                <h1>Where To Find Me</h1>
                <Jumbotron className="app-jumbo">
                    <Row>
                        {this.renderContactButton("Email",
                            "mailto:zacharywikel@gmail.com",
                            "fas fa-envelope-square fab fa-6x contact-button")}
                        {this.renderContactButton("LinkedIn",
                            "https://www.linkedin.com/in/zachary-wikel/",
                            "fab fa-linkedin fa-6x contact-button")}
                        {this.renderContactButton("GitHub",
                            "https://github.com/zwikel",
                            "fab fa-github-square fa-6x contact-button")}
                        {this.renderContactButton("Resume",
                            "https://drive.google.com/file/d/16s1TBQMcvqH2HIZrV-pkWCWt4DvnkUDC/view?usp=sharing",
                            "fas fa-file fab fa-6x contact-button")}
                    </Row>
                </Jumbotron>
            </div>
        );
    }

    renderContactButton(label, link, icon) {
        return (
            <Col className="contact-col">
                <a className="text-light text-decoration-none"
                   href={link}
                   target="_blank" rel="noopener noreferrer">
                    <i className={icon}/>
                    <br/>
                    {label}
                </a>
            </Col>
        );
    }

}