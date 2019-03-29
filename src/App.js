import React, { Component } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Interests from "./components/Interests";
import Contact from "./components/Contact";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                </div>

                <Switch>
                    <Route path="/" exact component={About} />
                    <Route path="/experience" component={Experience} />
                    <Route path="/skills" component={Skills} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/interests" component={Interests} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
