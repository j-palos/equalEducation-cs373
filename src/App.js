import React, { Component } from 'react';
// import logo from './logo.svg';
import './styles/carousel.css';
import './styles/bootstrap-4.1.3-dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from "./LandingPage";
import SchoolPage from "./SchoolPage";
import VolunteerPage from "./VolunteerPage";
import CharityPage from "./CharityPage";
import AboutPage from "./AboutPage";

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                         <Route exact path="/" component={LandingPage} />
                        <Route exact path="/school" component={SchoolPage} />
                         {/*<Route path="/listing/:business" component={BusinessPage} /> */}
                        {/*<Route path={this.window.location}*/}
                        <Route exact path="/volunteer" component={VolunteerPage} />
                        <Route exact path="/charity" component={CharityPage} />
                        <Route exact path="/about" component={AboutPage} />
                         <Route component={LandingPage} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;