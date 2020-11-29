import React, {Component} from "react";
import {Card, Col, Image, Row} from "react-bootstrap";
import {skills} from "./SkillsInfo";
import "./Skills.css";

export default class Skills extends Component {

        render() {
            return (
                <div id="skills" className="app-nav">
                    <h1>What I Can Do</h1>
                    <Row className="skills-row">
                        {this.renderSkills("Languages", skills.languages)}
                        {this.renderSkills("Technologies", skills.technologies)}
                        {this.renderSkills("Tools", skills.tools)}
                    </Row>
                </div>
            );
        }

        renderSkills(title, skillsList){
            return(
                <Col sm={6} md={6} lg={4}>
                    <Card className="app-card skills-card">
                        <Card.Header className="app-card-header skills-card-header">
                            {title}
                        </Card.Header>
                        <Card.Body>
                            <Card.Text className="skills-card-text">
                                {skillsList.map((skill, index) => (
                                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank"
                         rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.skillName} rounded
                               className="skills-image m-2"/> {skill.skillName}
                      </a>
                    </span>
                                ))}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            );
        }
}