import React from 'react';
import {Col, Container, Row} from 'reactstrap'
import {BarChart, PieChart} from 'react-d3-components';
import './styles.css';

class DevData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pie_data: {
                label: 'loading...',
                values: [{x: 'loading...', y: 1}]
            },

            age_data_minority: [{
                label: "loading...",
                values: [{x: "loading...", y: 1}]
            }],

            avg_age: [{
                label: "loading...",
                values: [{x: "loading...", y: 1}]
            }],
            pieLoaded: false,
            age_data_loaded: false,
            avg_age_loaded: false,
            percentages: {}
        };
    }

    componentDidMount() {
        const minority_dict = {
            "African American": 0,
            "Women": 0,
            "Latinx": 0,
            "Asian American": 0,
            "LGBTQ": 0,
            "Native American": 0
        };

        const percentage_dict = {
            "African American": 0,
            "Women": 0,
            "Latinx": 0,
            "Asian American": 0,
            "LGBTQ": 0,
            "Native American": 0
        };

        const male_age_minority_dict = {
            "20": 0,
            "30": 0,
            "40": 0,
            "50": 0,
            "60": 0,
            "70": 0,
            "80": 0,
            "90": 0
        };

        const female_age_minority_dict = {
            "20": 0,
            "30": 0,
            "40": 0,
            "50": 0,
            "60": 0,
            "70": 0,
            "80": 0,
            "90": 0
        };

        const avg_age_dict = {
            "Arts and Entertainment": 0,
            "Politics": 0,
            "Music": 0,
            "Medicine": 0,
            "Business": 0,
            "Food": 0,
            "Life, Physical, and Social Science": 0,
            "Architecture and Engineering": 0,
            "Computer Science and Mathematics": 0,
            "Education": 0,
            "Community and Social Service": 0
        };

        const counter_dict = {
            "Arts and Entertainment": 0,
            "Politics": 0,
            "Music": 0,
            "Medicine": 0,
            "Business": 0,
            "Food": 0,
            "Life, Physical, and Social Science": 0,
            "Architecture and Engineering": 0,
            "Computer Science and Mathematics": 0,
            "Education": 0,
            "Community and Social Service": 0
        };

        const minority_pie_data = {
            label: 'Minority Percentage(%)',
            values: [{x: 'African American', y: 0}, {x: 'Women', y: 0}, {x: 'Latinx', y: 0}, {
                x: 'Asian American',
                y: 0
            },
                {x: 'LGBTQ', y: 0}, {x: 'Native American', y: 0}]
        };

        const age_minority_data = [
            {
                label: 'Age Distribution Between Minorities (Male)',
                values: [{x: '20', y: 0}, {x: '30', y: 0}, {x: '40', y: 0},
                    {x: '50', y: 0}, {x: '60', y: 0}, {x: '70', y: 0}, {x: '80', y: 0}, {x: '90', y: 0}]
            },
            {
                label: 'Age Distribution Between Minorities (Female)',
                values: [{x: '20', y: 0}, {x: '30', y: 0}, {x: '40', y: 0},
                    {x: '50', y: 0}, {x: '60', y: 0}, {x: '70', y: 0}, {x: '80', y: 0}, {x: '90', y: 0}]
            }
        ];

        const avg_age_data = [
            {
                label: "Average Age in Fields",
                values: [{x: "Arts and Entertainment", y: 0}, {x: "Politics", y: 0}, {x: "Music", y: 0},
                    {x: "Medicine", y: 0}, {x: "Business", y: 0}, {
                        x: "Food",
                        y: 0
                    }, {x: "Life, Physical, and Social Science", y: 0},
                    {x: "Architecture and Engineering", y: 0}, {
                        x: "Computer Science and Mathematics",
                        y: 0
                    }, {x: "Education", y: 0},
                    {x: "Community and Social Service", y: 0}]
            }
        ];
        fetch("http://api.majorminorities.me/person")
            .then(results => {
                return results.json();
            }).then(minorities => {
            for (let i = 0; i < minorities.length; i++) {
                minority_dict[minorities[i].minority_1]++;
                minority_dict[minorities[i].minority_2]++;
                if (minorities[i].gender === "Male") {
                    male_age_minority_dict["" + Math.floor(minorities[i].age / 10) * 10]++;
                } else {
                    female_age_minority_dict["" + Math.floor(minorities[i].age / 10) * 10]++;
                }
                avg_age_dict[minorities[i].industry] += minorities[i].age;
                counter_dict[minorities[i].industry]++;
            }
        }).then(dummy => {
            let total = 0;
            for (let i = 0; i < minority_pie_data.values.length; i++) {
                minority_pie_data.values[i].y = minority_dict[minority_pie_data.values[i].x];
                total += minority_pie_data.values[i].y;
            }

            for (let i = 0; i < minority_pie_data.values.length; i++) {
                percentage_dict[minority_pie_data.values[i].x] = minority_pie_data.values[i].y / total * 100;
            }

            this.setState({
                pie_data: minority_pie_data,
                percentages: percentage_dict,
                pieLoaded: true,
            });


            for (let i = 0; i < age_minority_data[0].values.length; i++) {
                age_minority_data[0].values[i].y = male_age_minority_dict[age_minority_data[0].values[i].x];
                age_minority_data[1].values[i].y = female_age_minority_dict[age_minority_data[1].values[i].x];
            }

            for (let i = 0; i < avg_age_data[0].values.length; i++) {
                avg_age_data[0].values[i].y = avg_age_dict[avg_age_data[0].values[i].x] / counter_dict[avg_age_data[0].values[i].x];
            }

            console.log(avg_age_data);

            // age_minority_data[0].values[0].x = "0-10";
            // age_minority_data[0].values[1].x = "10-20";
            age_minority_data[0].values[0].x = "20-30";
            age_minority_data[0].values[1].x = "30-40";
            age_minority_data[0].values[2].x = "40-50";
            age_minority_data[0].values[3].x = "50-60";
            age_minority_data[0].values[4].x = "60-70";
            age_minority_data[0].values[5].x = "70-80";
            age_minority_data[0].values[6].x = "80-90";
            age_minority_data[0].values[7].x = "90-100";

            // age_minority_data[1].values[0].x = "0-10";
            // age_minority_data[1].values[1].x = "10-20";
            age_minority_data[1].values[0].x = "20-30";
            age_minority_data[1].values[1].x = "30-40";
            age_minority_data[1].values[2].x = "40-50";
            age_minority_data[1].values[3].x = "50-60";
            age_minority_data[1].values[4].x = "60-70";
            age_minority_data[1].values[5].x = "70-80";
            age_minority_data[1].values[6].x = "80-90";
            age_minority_data[1].values[7].x = "90-100";

            this.setState({
                age_data_minority: age_minority_data,
                age_data_loaded: true,
            });
            avg_age_data[0].values[0].x = "Arts";
            avg_age_data[0].values[1].x = "Politics";
            avg_age_data[0].values[2].x = "Music";
            avg_age_data[0].values[3].x = "Medicine";
            avg_age_data[0].values[4].x = "Business";
            avg_age_data[0].values[5].x = "Food";
            avg_age_data[0].values[6].x = "Social Science";
            avg_age_data[0].values[7].x = "Engr";
            avg_age_data[0].values[8].x = "Comp Sci/Math";
            avg_age_data[0].values[9].x = "Education";
            avg_age_data[0].values[10].x = "Social Service";
            this.setState({
                avg_age: avg_age_data,
                avg_age_loaded: true,
            })
        });
    }

    render() {
        let sort = null;

        return (
            <Container className="marketing">

                <main role="main">

                    {this.state.pieLoaded &&
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
                            <h1 className="h1-style">Minority Percentage(%)</h1>
                            <p className="lead">Women: {Math.round(this.state.percentages["Women"])}%</p>
                            <p className="lead">African
                                American: {Math.round(this.state.percentages["African American"])}%</p>
                            <p className="lead">Latinx: {Math.round(this.state.percentages["Latinx"])}%</p>
                            <p className="lead">Asian
                                American: {Math.round(this.state.percentages["Asian American"])}%</p>
                            <p className="lead">Native
                                American: {Math.round(this.state.percentages["Native American"])}%</p>
                            <p className="lead">LGBTQ: {Math.round(this.state.percentages["LGBTQ"])}%</p>
                            <p className="fine-print">*Rounded to nearest integer</p>
                        </Col>
                    </Row>
                    }
                    {this.state.age_data_loaded &&
                    <Row className="featurette first-row-margin">
                        <Col>
                            <BarChart
                                groupedBars
                                data={this.state.age_data_minority}
                                width={700}
                                height={400}
                                margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
                        </Col>
                        <Col>
                            <h1 className="h1-style">Age Distribution of Minorities</h1>
                            <Row>
                                <div className="color-legend male"></div>
                                <p className="lead">Male</p>
                            </Row>
                            <Row>
                                <div className="color-legend female"></div>
                                <p className="lead">Female</p>
                            </Row>
                        </Col>
                    </Row>
                    }
                    {this.state.avg_age_loaded &&
                    <Row>
                        <Col>
                            <h1 className="center text-center">Age Distribution Among Industries</h1>
                            <BarChart
                                groupedBars
                                data={this.state.avg_age}
                                width={1200}
                                height={400}
                                margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
                        </Col>
                    </Row>
                    }
                </main>
                }
            </Container>)
    }
}

export default DevData; 