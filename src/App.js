import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import RouteBuilder from './components/RouteBuilder';

class App extends Component {
    render() {
        return (

            <BrowserRouter basename={""}>
                <React.Fragment>
                    <Header className="App"/>
                    <RouteBuilder/>
                    <Footer/>
                </React.Fragment>
            </BrowserRouter>

        );
    }
}

export default App;
