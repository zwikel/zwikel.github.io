import React, {Component} from "react";
import {Card, Col, Row} from "react-bootstrap";

import "./Projects.css";
import "./ProjectsInfo";
import {projects} from "./ProjectsInfo";

export default class Projects extends Component {

    render() {
        return (
            <div id="projects" className="app-nav app-div">
                <h1>What I Have Done</h1>
                <Row>
                    {this.renderProject(projects.TRIPCO)}
                    {this.renderProject(projects.AWGET)}
                </Row>
                <Row>
                    {this.renderProject(projects.TWITTER)}
                    {this.renderProject(projects.LIBRARY)}
                </Row>
                <Row>
                    {this.renderProject(projects.TRAIL)}
                    {this.renderProject(projects.PORTFOLIO)}
                </Row>
            </div>
        );
    }

    renderProject(project) {
        return (
            <Col sm={12} md={6} lg={6}>
                <Card className="app-card project-card">
                    <Card.Header className="app-card-header font-weight-bold">{project.name}</Card.Header>
                    <Card.Body>
                        <Card.Title className="project-card-title">{project.ltt}</Card.Title>
                        <Card.Text>
                            {project.text}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        );
    }

}