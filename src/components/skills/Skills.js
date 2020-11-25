import React from "react";
import {Card, Col, Image, Row} from "react-bootstrap";
import {skills} from "./SkillsInfo";
import "./Skills.css";

const Skills = () => {
    return (
        <div id="skills" className="app-nav">
            <h1>What I Can Do</h1>
            <Row className="skills-row">

                <Col sm={6} md={6} lg={4}>
                    <Card className="app-card skills-card">
                        <Card.Header className="app-card-header skills-card-header">
                            Languages
                        </Card.Header>
                        <Card.Body>
                            <Card.Text className="skills-card-text">
                                {skills.languages.map((skill, index) => (
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

                <Col sm={6} md={6} lg={4}>
                    <Card className="app-card skills-card">
                        <Card.Header className="app-card-header skills-card-header">
                            Technologies
                        </Card.Header>
                        <Card.Body>
                            <Card.Text className="skills-card-text">
                                {skills.technologies.map((skill, index) => (
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

                <Col sm={6} md={6} lg={4}>
                    <Card className="app-card skills-card">
                        <Card.Header className="app-card-header skills-card-header">
                            Tools
                        </Card.Header>
                        <Card.Body>
                            <Card.Text className="skills-card-text">
                                {skills.tools.map((skill, index) => (
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

            </Row>
        </div>
    );
};

export default Skills;