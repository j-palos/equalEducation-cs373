import {Route, Switch} from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import SchoolPage from "../GridContainers/SchoolPage";
import CharityPage from "../GridContainers/CharityPage";
import AboutPage from "../AboutPage/index";
import React, {Component} from "react";
import EntityContainer from "../EntityComponents/EntityContainer";
import CommunityPage from "../GridContainers/CommunityPage";
import SearchPage from '../Search/SearchPage';
import DataVisualization from '../DataVisualization'


export default class RouteBuilder extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path={'/schools/'} component={SchoolPage}/>
                <Route path={'/schools/:page'} component={SchoolPage}/>
                <Route exact path="/charities" component={CharityPage}/>
                <Route path="/charities/:page" component={CharityPage}/>
                <Route exact path="/communities" component={CommunityPage}/>
                <Route path="/communities/:page" component={CommunityPage}/>
                <Route exact path={`/school/:entityId`}
                       render={(props) => <EntityContainer{...props} type={'school'}/>}/>
                <Route exact path={`/charity/:entityId`}
                       render={(props) => <EntityContainer{...props} type={'charity'}/>}/>
                <Route exact path={`/community/:entityId`}
                       render={(props) => <EntityContainer{...props} type={'community'}/>}/>

                <Route exact path="/about" component={AboutPage}/>
                <Route exact path="/search" component={SearchPage}/>
                <Route exact path="/search/:input" component={SearchPage}/>
                <Route exact path="/datavisualization" component={DataVisualization}/>
            </Switch>
        )
    }
}
