import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";


class VolunteerContainer extends Component {


    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header/>
                <main role="main">


                    {/* /.container */}
                    {/* FOOTER */}
                    <Footer/>
                </main>
            </div>
        );
    }
}

export default VolunteerContainer;
