import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

import "./About.css"

export default class About extends Component {

    render() {
        return (
            <div id="about" className="app-nav">
                <h1>Who I Am</h1>
                <Card className="about-card">
                    <Card.Body>
                        {this.renderBio()}
                    </Card.Body>
                </Card>
            </div>
        );
    }

    renderBio() {
        return (
            <Card.Text>
                {this.bioHeader()}
                <br />
                <br />
                {this.bioContent()}
            </Card.Text>
        );
    }

    bioHeader() {
        return (
            <em className="about-header">
                Hi there 👋 I'm<b>&nbsp;Zachary Wikel</b> but feel free to call me Zach!
            </em>
        );
    }

    bioContent() {
        return (
            <>
            I was born and raised in Milan, Ohio, surrounded by farmland and Ohio State fans (including myself!). 
            After joining the United States Army, I spent six years operating this <u>{this.aircraftLink()}</u>  
            &nbsp;while working with and leading exceptional individuals. Following my time in the service, I transitioned to 
            studying computer science and found that I have a real passion for systems and embedded software. I'm particularly 
            interested in projects that involve optimization or efficiency, as I enjoy the challenge of finding ways to make 
            things run more smoothly and effectively. When I'm not at my desk tinkering with software or hardware projects, 
            you can usually find me on the trails running, climbing, or mountaineering. Thank you for taking the time to visit 
            my portfolio and learn more about my passions and interests. Feel free to reach out and connect using my links below!
            </>
        );
    }

    aircraftLink() {
        return (
            <a className="about-link"
                href="https://www.ga-asi.com/remotely-piloted-aircraft/gray-eagle"
                target="_blank"
                rel="noopener noreferrer">aircraft</a>
        );
    }

}
