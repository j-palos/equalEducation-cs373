import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
// import './App.css';
import Link from "react-router-dom/es/Link";
import oakland from "./images/static/oakland.jpg";
import houston from "./images/static/texascity.jpg";
import houstonisd from "./images/static/HoustonISD.png";
import SortBar from "./SortBar"
import InfoCard from "./InfoCard"

class SchoolPage extends Component {


    render() {
        return (
            <div>
                <Header/>
                <main role="main">
                    <div className="container marketing my-5">
                        {/* <hr class="featurette-divider"> */}
                        <SortBar />

                        <br/>
                        <br/>
                        
                        <div className="row">
                          <InfoCard />
                        </div>

                    </div>
                    <hr className="featurette-divider"/>
                    {/* FOOTER */}
                    <Footer/>
                </main>
                {/* Bootstrap core JavaScript
  ================================================== */}
                {/* Placed at the end of the document so the pages load faster */}
            </div>);
    }
}

export default SchoolPage;
