import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import './App.css';
import SortBar from "./SortBar";
import InfoCard from "./InfoCard";

class SchoolPage extends Component {
    render() {
      return (
        <div>
          <Header />
          <main role="main">
            <div className="container marketing my-5">
          {/*<SortBar />*/}

              <br /><br />

              <InfoCard />

              <hr className="featurette-divider"/>

            </div>

            <Footer/>
          </main>
        </div>
      )
    }
}

export default SchoolPage;
