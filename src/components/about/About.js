import React from "react";
import {Button, Card} from "react-bootstrap";

import "./About.css"

function About() {
    return (
        <div id="about" className="app-nav">
            <h1>Who I Am</h1>
            <Card className="app-card">
                <Card.Header className="app-card-header">
                    Hi there 👋 I'm<strong>&nbsp;Zachary Wikel</strong> but feel free to call me Zach!
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        I was born and raised in the small town of Milan, Ohio surrounded by farmland and buckeye
                        fans (myself included). I joined the United States Army shortly after graduating high school and
                        spent six years in settings such as Texas, Kuwait, Iraq, and South Korea. While in the Army, I
                        had the pleasure of working with and leading many great people while flying&nbsp;
                        <a className="about-link"
                           href="https://en.wikipedia.org/wiki/General_Atomics_MQ-1C_Gray_Eagle"
                           target="_blank"
                           rel="noopener noreferrer">this aircraft</a>. During my career, my interest in problem
                        solving and learning how things worked grew exponentially. I decided to change gears and moved
                        to Fort Collins, Colorado to further my education and to pursue this newly developed interest.
                        <br/>
                        <br/>
                        I’m currently a senior at Colorado State University majoring in computer science with a
                        minor in mathematics. My upper-level computer science classes consist of databases,
                        distributed systems, machine learning, and networking. I am experienced with Agile and Scrum
                        methodologies as a member of a team during software development. I consider myself proficient
                        with object-oriented programming languages though my favorite language is C. I graduate in May
                        2021 and am eager to find a team to work with and see what we can design and develop.
                    </Card.Text>
                    <br/>
                    <Button href="#contact" variant="outline" title="contact" size="md" className="about-button">
                        <i className="fas fa-mail-bulk"/> Get in Touch
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default About;