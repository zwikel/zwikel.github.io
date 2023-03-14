import React, { Component } from "react";
import { Col, Row, Card } from "react-bootstrap";

import './Contact.css'

export default class Contact extends Component {

    render() {
        return (
            <div id="contact" className="app-nav">
                <h1>Where To Find Me</h1>
                <Card className="contact-card">
                    <Card.Body>
                        <Row className="d-flex justify-content-between">
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
                                "https://drive.google.com/file/d/1qw0MpLy61Wo1jufezwt_P7MUhAsSJuzF/view?usp=share_link",
                                "fas fa-file fab fa-6x contact-button")}
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        );
    }

    renderContactButton(label, link, icon) {
        return (
            <Col className="contact-col">
                <a className="text-light text-decoration-none"
                    href={link}
                    target="_blank" rel="noopener noreferrer">
                    <i className={icon} />
                    <br />
                    {label}
                </a>
            </Col>
        );
    }

}