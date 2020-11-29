import React, {Component} from "react";
import {Card, Jumbotron} from "react-bootstrap";
import Tilt from "react-tilt";
import CSU from "../../assets/education/CSU-Ram-357-Gold.png";
import "./Education.css"

export default class Education  extends Component{
    render () {
        return(
        <div id="education" className="app-nav">
            <h1>Where I Started</h1>
            {this.renderEducationCard()}
        </div>
        );
    }

    renderEducationCard(){
        return (
            <Jumbotron className="app-jumbo">
                <Tilt options={{max: 20}}>
                    <Card className="app-card">
                        <Card.Header>
                            <Card.Img className="education-image" src={CSU}/>
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
        );
    }
}