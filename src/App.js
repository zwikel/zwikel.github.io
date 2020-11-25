import React from "react";
import {Container} from "react-bootstrap";
import Particles from 'react-particles-js';

import "./App.css";
import {particleOptions} from "./ParticleOptions";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Particles className="app-particles" params={particleOptions}/>
            <Header/>
            <Container className="app-container">
                <Home/>
                <About/>
                <hr/>
                <Education/>
                <hr/>
                <Skills/>
                <hr/>
                <Projects/>
                <hr/>
                <Contact/>
                <hr/>
            </Container>
            <Footer/>
        </div>
    );
}

export default App;
