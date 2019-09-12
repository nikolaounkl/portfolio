import React, { Component } from "react";
import "./App.css";
import { Switch, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Interests from "./components/Interests";
import NotFound from "./components/NotFound";

import DataContextProvider from "./contexts/DataContext"

class App extends Component {
    render() {
        return (
            <DataContextProvider>
                <HashRouter>
                    <div className="App">
                        <Navbar />
                    </div>

                    <Switch>
                        <Route path="/" exact component={About} />
                        <Route path="/experience" exact component={Experience} />
                        <Route path="/skills" exact component={Skills} />
                        <Route path="/projects" exact component={Projects} />
                        <Route path="/interests" exact component={Interests} />
                        <Route component={NotFound} />
                    </Switch>
                </HashRouter>
            </DataContextProvider>
        );
    }
}

export default App;
