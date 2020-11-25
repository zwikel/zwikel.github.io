import React from "react";
import Typewriter from 'typewriter-effect/';

import './Home.css';
import Headshot from "../../assets/pictures/Headshot.webp";

function Home() {
    return (
        <div id="home" className="home-horizontal">
            <div className="home-vertical">
                <img className="home-headshot" src={Headshot} alt="Zachary Wikel"/>
                <br/>
                <div className="home-name">Zachary Wikel</div>
                <div className="home-typewriter">
                    <Typewriter
                        options={{
                            strings: ['Programmer', 'Innovator', 'Team Player', 'Leader'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                {/*<a href="#about">*/}
                <i className="fas fa-chevron-circle-down fa-3x home-down-button"/>
                {/*</a>*/}
            </div>
        </div>
    );
}

export default Home;