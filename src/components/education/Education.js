import React from "react";
import {Card, Jumbotron} from "react-bootstrap";
import Tilt from "react-tilt";
import CSU from "../../assets/education/CSU-Ram-357-Gold.png";
import "./Education.css"

const Education = () => {
    return (
        <div id="education" className="app-nav">
            <h1>Where I Started</h1>
            <Jumbotron className="app-jumbo">
                <Tilt options={{max: 20}}>
                    <Card className="app-card">
                        <Card.Header>
                            <Card.Img className="education-image" src={CSU} alt="Colorado State University"/>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className="education-card-title">Colorado State University</Card.Title>
                            <Card.Text className="education-card-text">
                                <strong>Bachelor of Science</strong>
                                <br/>
                                <strong>Major:</strong> Computer Science
                                <br/>
                                <strong>Minor:</strong> Mathematics
                                <br/>
                                <strong>Graduation:</strong> May 2021
                                <br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Tilt>
            </Jumbotron>
            {/*<Jumbotron className="app-jumbo">*/}
            {/*    <Tilt options={{max: 20}}>*/}
            {/*        <Card className="education-card">*/}
            {/*            <Card.Header>*/}
            {/*                <Card.Img className="education-image" src={COCHISE} alt="Cochise College"/>*/}
            {/*            </Card.Header>*/}
            {/*            <Card.Body>*/}
            {/*                <Card.Title className="education-card-title">Cochise College</Card.Title>*/}
            {/*                <Card.Text className="education-card-text">*/}
            {/*                    <strong>Associate of Applied Science</strong>*/}
            {/*                    <br/>*/}
            {/*                    <strong>Major:</strong> Unmanned Aircraft Systems and Operations*/}
            {/*                    <br/>*/}
            {/*                    <strong>Graduation:</strong> Jan 2021*/}
            {/*                    <br/>*/}
            {/*                </Card.Text>*/}
            {/*            </Card.Body>*/}
            {/*        </Card>*/}
            {/*    </Tilt>*/}
            {/*</Jumbotron>*/}
        </div>
    );
};

export default Education;