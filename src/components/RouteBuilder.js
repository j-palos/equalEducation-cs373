import {Route, Switch} from "react-router-dom";
import LandingPage from "../LandingPage";
import SchoolPage from "../SchoolPage";
import VolunteerPage from "../VolunteerPage";
import CharityPage from "../CharityPage";
import CharityPage1 from "../CharityEntity1";
import CharityEntity2 from "../CharityEntity2";
import CharityEntity3 from "../CharityEntity3";
import SchoolPage1 from "../SchoolPage1";
import SchoolPage2 from "../SchoolPage2";
import SchoolPage3 from "../SchoolPage3";
import VolunteerPage1 from "../VolunteerPage1";
import VolunteerPage2 from "../VolunteerPage2";
import VolunteerPage3 from "../VolunteerPage3";
import AboutPage from "./AboutPage/AboutPage";
import React, {Component} from "react";


export default class RouteBuilder extends Component {

    constructor(props) {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path={'/schools/'} component={SchoolPage}/>
                <Route exact path="/schools/:id" component={SchoolPage}/>
                <Route exact path="/charities" component={CharityPage}/>
                {/*<Route path={`/school/:entityId`} render={(props) => <EntityContainer{...props} type={'school'}/>}/>*/}
                <Route exact path="/charities/:id" component={CharityPage}/>
                <Route exact path="/about" component={AboutPage}/>
                <Route component={LandingPage}/>
            </Switch>
        )
    }
}
