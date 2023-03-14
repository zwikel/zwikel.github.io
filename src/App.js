import { Container } from "react-bootstrap";

import "./App.css";
import Background from "./components/background/Background";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Background />
            <Header />
            <Container className="app-container">
                <Home />
                <About />
                <Contact />
            </Container>
            <Footer />
        </div>
    );
}

export default App;
