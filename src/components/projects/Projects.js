import React, {Component} from "react";
import {Card, Col, Row} from "react-bootstrap";

import "./Projects.css"

export default class Projects extends Component {

    render() {
        return (
            <div id="projects" className="app-nav app-div">
                <h1>What I Have Done</h1>
                <Row>
                    {this.renderProject("TripCo", "Java, JavaScript, React, SQL",
                        " Developed as a mobile, single page application, TripCo allows a user to build a trip " +
                        "anywhere in the world. Similar to Google Maps, users can search a database for locations and " +
                        "see their selections populate on a map. Users then have other tools such as optimizing their " +
                        "trip or saving it for later. Using team-based Agile software engineering practices and test " +
                        "driven development, this application was developed alongside four other students over the " +
                        "course of a semester.")}
                    {this.renderProject("AWGET", "C, Sockets, UDP/TCP",
                        "AWGET stands for Anonymous Web Get, which is a file downloader that hides your" +
                        "identity. Similar to a ONION router or TOR network, AWGET traverses a series of" +
                        "anonymization \"stepping-stones\". These stepping-stones act as both a server and client," +
                        "they either download the requested file or pass the request along to the next stone." +
                        "Once the last stone has been reached, the file is downloaded and is passed back through" +
                        "the same series of steps. Thus, maintaining your anonymity.")}
                </Row>
                <Row>
                    {this.renderProject("Twitter Bot", "C++, Python, Tweepy, Raspberry Pi",
                        "This project takes a Raspberry Pi with a NOOBS operating system and runs a twitter bot" +
                        "application. The bot has its own twitter account and continuously checks for new" +
                        "mentions. In the message, these mentions would specify a location to the bot. The bot" +
                        "would then tweet the current weather information for that location back to that twitter" +
                        "user. This project was designed and developed alongside three other students over the" +
                        "course of a semester.")}
                    {this.renderProject("Trail and Weather Report","Python, Beautiful Soup, Qt, NOAA API",
                        "Stemming from my passion of trail running, this application reports the latest local trail" +
                        " and weather conditions. Instead of checking multiple websites for this information, this " +
                        "application combines them all into one easy to read graphical user interface. The trail " +
                        "conditions are scrapped from the county website while the weather data is obtained with API " +
                        "calls to NOAA. This helps to save me time and make sure I'm prepared in the morning before " +
                        "I go run.")}
                </Row>
                <Row className="project-more">
                    {this.renderProject("Portfolio", "JavaScript, React, CSS",
                        "That portfolio happens to be this website! After working on the TripCo project I felt " +
                        "inspired to learn more about web design. I figured what better way to learn than by making my own " +
                        "website. And what better website to make than one that shows off what you can do! This was my " +
                        "first personal web project so it took some time to figure everything out but I had fun with it. " +
                        "Feel free to check out the source code on my github and let me know what you think.")}
                    {this.renderProject("Library Database", "SQL, MariaDB, JDBC",
                        "This project allowed me to design and implement a database from scratch. The database " +
                        "would accommodate the records of a library and its corresponding needs. This included a table of " +
                        "books, authors, publishers, members, checkouts, and more. Tables were created and filled by parsing " +
                        "text documents and converting them into dump files. A simple GUI was implemented to allow a user " +
                        "to query the database and filter their corresponding results.")}
                </Row>
            </div>
        );
    }

    renderProject(header, ltt, text){
        return (
            <Col sm={12} md={6} lg={6}>
                <Card className="app-card project-card">
                    <Card.Header className="app-card-header">{header}</Card.Header>
                    <Card.Body>
                        <Card.Title className="project-card-title">{ltt}</Card.Title>
                        <Card.Text>
                            {text}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        );
    }

}