import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from "./LandingPage";
import SchoolPage from "./SchoolPage";
import VolunteerPage from "./VolunteerPage";
import CharityPage from "./CharityPage";
import AboutPage from "./AboutPage";
import './App.css';
import CharityPage1 from "./CharityEntity1";
import CharityEntity2 from "./CharityEntity2";
import CharityEntity3 from "./CharityEntity3";
import SchoolPage1 from "./SchoolPage1";
import SchoolPage3 from "./SchoolPage3";
import SchoolPage2 from "./SchoolPage2";
import VolunteerPage3 from "./VolunteerPage3";
import VolunteerPage2 from "./VolunteerPage2";
import VolunteerPage1 from "./VolunteerPage1";

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter basename={""}>
                    <Switch>
                        <Route exact path="/" component={LandingPage}/>
                        <Route exact path="/school" component={SchoolPage}/>
                        {/*<Route path="/listing/:business" component={BusinessPage} /> */}
                        {/*<Route path={this.window.location}*/}
                        <Route exact path="/volunteer" component={VolunteerPage}/>
                        <Route exact path="/charity" component={CharityPage}/>
                        <Route exact path={"/charity/1"} component={CharityPage1} />
                        <Route exact path={"/charity/2"} component={CharityEntity2} />
                        <Route exact path={"/charity/3"} component={CharityEntity3} />
                        <Route exact path={"/school/1"} component={SchoolPage1} />
                        <Route exact path={"/school/2"} component={SchoolPage2} />
                        <Route exact path={"/school/3"} component={SchoolPage3} />
                        <Route exact path={"/volunteer/1"} component={VolunteerPage1} />
                        <Route exact path={"/volunteer/2"} component={VolunteerPage2} />
                        <Route exact path={"/volunteer/3"} component={VolunteerPage3} />
                        <Route exact path="/about" component={AboutPage}/>
                        <Route component={LandingPage}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
