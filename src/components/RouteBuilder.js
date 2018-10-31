import {Redirect, Route, Switch} from "react-router-dom";
import LandingPage from "../LandingPage";
import SchoolPage from "../SchoolPage";
import CharityPage from "../CharityPage";
import AboutPage from "./AboutPage";
import React, {Component} from "react";
import EntityContainer from "../entityComponents/EntityContainer";
import CommunityPage from "../CommunityPage";


export default class RouteBuilder extends Component {

    constructor(props) {
        super();
        this.state = {}
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path={'/schools/'} render={() => (<Redirect to="/schools/1"/>)}/>
                <Route exact path={'/schools/:id'} component={SchoolPage}/>
                <Route exact path="/charities" render={() => (<Redirect to="/charities/1"/>)}/>
                <Route exact path="/charities/:id" component={CharityPage}/>
                <Route exact path="/communities" render={() => (<Redirect to="/communities/1"/>)}/>
                <Route exact path="/communities/:id" component={CommunityPage}/>
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
