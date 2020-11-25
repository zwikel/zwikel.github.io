import React from "react";
import {Col, Jumbotron, Row} from "react-bootstrap";

import './Contact.css'

function Contact() {
    return (
        <div id="contact" className="app-nav">
            <h1>Where To Find Me</h1>
            <Jumbotron className="app-jumbo">
                <Row>
                    <Col>
                        <a className="text-light text-decoration-none "
                           href="mailto:zacharywikel@gmail.com"
                           target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-envelope-square fab fa-6x contact-button"/>
                            <br/>
                            Email
                        </a>
                    </Col>
                    <Col>
                        <a className="text-light text-decoration-none" href="https://www.linkedin.com/in/zachary-wikel/"
                           target="_blank"
                           rel="noopener noreferrer">
                            <i className="fab fa-linkedin fa-6x contact-button"/>
                            <br/>
                            LinkedIn
                        </a>
                    </Col>
                    <Col>
                        <a className="text-light text-decoration-none" href="https://github.com/zwikel"
                           target="_blank"
                           rel="noopener noreferrer">
                            <i className="fab fa-github-square fa-6x contact-button"/>
                            <br/>
                            GitHub
                        </a>
                    </Col>
                    <Col>
                        <a className="text-light text-decoration-none"
                           href="https://drive.google.com/file/d/17PARggq6SNKtgJVgAg_GBTzhvGu7HDpX/view?usp=sharing"
                           target="_blank"
                           rel="noopener noreferrer">
                            <i className="fas fa-file fab fa-6x contact-button"/>
                            <br/>
                            Resume
                        </a>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    );
}

export default Contact;