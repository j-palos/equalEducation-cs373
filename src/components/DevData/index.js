import React from 'react';
import {Container, Row, Col} from 'reactstrap'
import {BarChart, PieChart} from 'react-d3-components';
import './styles.css';

class DevData extends React.Component {
    constructor() {
        super();
        this.state = {
            pie_data: {
                label: 'loading...',
                values: [{x: 'loading...', y: 1}]
            },

            percentages: {}
        };
    }

    componentDidMount () {
        const minority_dict = { 
            "African American": 0,
            "Women": 0,
            "Latinx": 0,
            "Asian American": 0,
            "LGBTQ": 0,
            "Native American": 0
        }

        const percentage_dict = {
            "African American": 0,
            "Women": 0,
            "Latinx": 0,
            "Asian American": 0,
            "LGBTQ": 0,
            "Native American": 0
        }

        var minority_pie_data = {
            label: 'Minority Percentage(%)',
            values: [{x: 'African American', y: 0}, {x: 'Women', y: 0}, {x: 'Latinx', y: 0}, {x: 'Asian American', y: 0},
                     {x: 'LGBTQ', y: 0}, {x: 'Native American', y : 0}]
        };

        fetch("http://api.majorminorities.me/person")
            .then(results => {
                return results.json();
            }).then(minorities => {
                for (let i = 0; i < minorities.length; i++) {
                    minority_dict[minorities[i].minority_1]++;
                    minority_dict[minorities[i].minority_2]++;
                }
            }).then(dummy => {
                console.log(minority_dict);
                let total = 0;
                for (let i = 0; i < minority_pie_data.values.length; i++) {
                    minority_pie_data.values[i].y = minority_dict[minority_pie_data.values[i].x];
                    total += minority_pie_data.values[i].y;
                }

                for (let i = 0; i < minority_pie_data.values.length; i++) {
                    percentage_dict[minority_pie_data.values[i].x] = minority_pie_data.values[i].y/total * 100;
                    console.log(percentage_dict);
                }

                this.setState({
                    pie_data: minority_pie_data,
                    percentages: percentage_dict 
                })
            });
    }
    
    render() {
        var sort = null;

        console.log("render");
        console.log(this.state.pie_data);
        //debugger;
        return (
        <Container className="marketing">
            <main role="main">
                <Row className="featurette first-row-margin">
                    <Col>
                        <PieChart
                            data={this.state.pie_data}
                            width={600}
                            height={400}
                            margin={{top: 10, bottom: 10, left: 100, right: 100}}
                            sort={sort}/>
                    </Col>
                    <Col>
                        <h1 className="h1-style" id="about-site">Minority Percentage(%)</h1>
                        <p className="lead">Women: {Math.round(this.state.percentages["Women"])}%</p>
                        <p className="lead">African American: {Math.round(this.state.percentages["African American"])}%</p>
                        <p className="lead">Latinx: {Math.round(this.state.percentages["Latinx"])}%</p>
                        <p className="lead">Asian American: {Math.round(this.state.percentages["Asian American"])}%</p>
                        <p className="lead">Native American: {Math.round(this.state.percentages["Native American"])}%</p>
                        <p className="lead">LGBTQ: {Math.round(this.state.percentages["LGBTQ"])}%</p>
                        <p className="fine-print">*Rounded to nearest integer</p>
                    </Col>
                </Row>
            </main>
        </Container>)
    }
}

export default DevData; 