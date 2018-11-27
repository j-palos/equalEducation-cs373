import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Footer from "./components/Footer";
import RouteBuilder from './components/Routes/RouteBuilder';
import MyNavbar from "./components/MyNavbar/MyNavbar";

class App extends Component {


    render() {
        return (

            <BrowserRouter basename={""}>
                <React.Fragment>
                    <MyNavbar className="App"/>
                    <RouteBuilder/>
                    <Footer/>
                </React.Fragment>
            </BrowserRouter>

        );
    }
}

export default App;
