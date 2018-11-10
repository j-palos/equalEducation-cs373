import {Route, Switch} from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import SchoolPage from "../GridContainers/SchoolPage";
import CharityPage from "../GridContainers/CharityPage";
import AboutPage from "../AboutPage/index";
import React, {Component} from "react";
import EntityContainer from "../EntityComponents/EntityContainer";
import CommunityPage from "../GridContainers/CommunityPage";


export default class RouteBuilder extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path={'/schools/'} component={SchoolPage}/>
                <Route exact path={'/schools/:page'} component={SchoolPage}/>
                <Route exact path="/charities" component={CharityPage}/>
                <Route exact path="/charities/:page" component={CharityPage}/>
                <Route exact path="/communities" component={CommunityPage}/>
                <Route exact path="/communities/:page" component={CommunityPage}/>
                <Route exact path={`/school/:entityId`}
                       render={(props) => <EntityContainer{...props} type={'school'}/>}/>
                <Route exact path={`/charity/:entityId`}
                       render={(props) => <EntityContainer{...props} type={'charity'}/>}/>
                <Route exact path={`/community/:entityId`}
                       render={(props) => <EntityContainer{...props} type={'community'}/>}/>
                <Route exact path="/about" component={AboutPage}/>
            </Switch>
        )
    }
}
