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
import AboutPage from "./AboutPage";
import React, {Component} from "react";
import EntityContainer from "../entityComponents/EntityContainer";


export default class RouteBuilder extends Component {

    constructor(props) {
        super();
        this.state = {
            // route: props.url.match
        }
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/school" component={SchoolPage}/>
                <Route exact path="/volunteer" component={VolunteerPage}/>
                <Route exact path="/charity" component={CharityPage}/>
                <Route path={`/school/:entityId`} render={(props) => <EntityContainer{...props} type={'school'}/>}/>
                {/*<Route path={`/charity/:entityId`} component={<EntityContainer type={'charity'}/>}/>*/}
                {/*<Route path={`/community/:entityId`} component={<EntityContainer type={'community'}/>}/>*/}
                <Route exact path={"/charity/1"} component={CharityPage1}/>
                <Route exact path={"/charity/2"} component={CharityEntity2}/>
                <Route exact path={"/charity/3"} component={CharityEntity3}/>
                <Route exact path={"/school/1"} component={SchoolPage1}/>
                <Route exact path={"/school/2"} component={SchoolPage2}/>
                <Route exact path={"/school/3"} component={SchoolPage3}/>
                <Route exact path={"/volunteer/1"} component={VolunteerPage1}/>
                <Route exact path={"/volunteer/2"} component={VolunteerPage2}/>
                <Route exact path={"/volunteer/3"} component={VolunteerPage3}/>
                <Route exact path="/about" component={AboutPage}/>
                <Route component={LandingPage}/>
            </Switch>
        )
    }
}
