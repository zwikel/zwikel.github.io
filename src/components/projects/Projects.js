import React from "react";
import {Card, Col, Row} from "react-bootstrap";

import "./Projects.css"

function Projects() {
    return (
        <div id="projects" className="app-nav app-div">
            <h1>What I Have Done</h1>
            <Row>
                <Col sm={12} md={6} lg={6}>
                    <Card className="app-card project-card">
                        <Card.Header className="app-card-header">TripCo</Card.Header>
                        <Card.Body>
                            <Card.Title className="project-card-title">Java, JavaScript, React, SQL</Card.Title>
                            <Card.Text>
                                Developed as a mobile, single page application, TripCo allows a user to build a trip
                                anywhere in the world. Similar to Google Maps, users can search a database for
                                locations and see their selections populate on a map. Users then have other tools such
                                as optimizing their trip or saving it for later. Using team-based Agile software
                                engineering practices and test driven development, this application was developed
                                alongside four other students over the course of a semester.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <Card className="app-card project-card">
                        <Card.Header className="app-card-header">AWGET</Card.Header>
                        <Card.Body>
                            <Card.Title className="project-card-title">C, Sockets, UDP/TCP</Card.Title>
                            <Card.Text>
                                AWGET stands for Anonymous Web Get, which is a file downloader that hides your
                                identity. Similar to a ONION router or TOR network, AWGET traverses a series of
                                anonymization "stepping-stones". These stepping-stones act as both a server and client,
                                they either download the requested file or pass the request along to the next stone.
                                Once the last stone has been reached, the file is downloaded and is passed back through
                                the same series of steps. Thus, maintaining your anonymity.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} lg={6}>
                    <Card className="app-card project-card">
                        <Card.Header className="app-card-header">Twitter Bot</Card.Header>
                        <Card.Body>
                            <Card.Title className="project-card-title">C++, Python, Tweepy, Raspberry Pi</Card.Title>
                            <Card.Text>
                                This project takes a Raspberry Pi with a NOOBS operating system and runs a twitter bot
                                application. The bot has its own twitter account and continuously checks for new
                                mentions. In the message, these mentions would specify a location to the bot. The bot
                                would then tweet the current weather information for that location back to that twitter
                                user. This project was designed and developed alongside three other students over the
                                course of a semester.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <Card className="app-card project-card">
                        <Card.Header className="app-card-header">Trail and Weather Report</Card.Header>
                        <Card.Body>
                            <Card.Title className="project-card-title">Python, Beautiful Soup, Qt, NOAA API</Card.Title>
                            <Card.Text>
                                Stemming from my passion of trail running, this
                                application reports the latest local trail and weather conditions. Instead of checking
                                multiple websites for this information, this application combines them all into one easy
                                to read graphical user interface. The trail conditions are scrapped from the county
                                website while the weather data is obtained with API calls to NOAA. This helps to
                                save me time and make sure I'm prepared in the morning before I go run.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="project-more">
                <Col sm={4} md={4} lg={4}>
                    <Card className="app-card">
                        <Card.Body className="project-card-title">
                            As well as this website!
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Projects;