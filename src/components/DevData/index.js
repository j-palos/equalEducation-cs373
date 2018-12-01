import React from 'react'
import BarChart from 'react-d3'

class DevData extends React.Component {
    constructor() {
        super();
        this.state = {
            minority_pie_data: []
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

        var minority_pie_data = [
            {label: 'African American', value: 0},
            {label: 'Women', value: 0},
            {label: 'Latinx', value: 0},
            {label: 'Asian American', value: 0},
            {label: 'LGBTQ', value: 0},
            {label: 'Native American', value: 0}
          ];

        fetch("http://api.majorminorities.me/person")
            .then(results => {
                return results.json();
            }).then(minorities => {
                for (let i = 0; i < minorities.length; i++) {
                    minority_dict[minorities[i].minority_1]++;
                    minority_dict[minorities[i].minority_2]++;
                }
                //console.log(minority_dict[0]);
            }).then(dummy => {
                console.log(minority_dict);
                for (let i = 0; i < minority_pie_data.length; i++) {
                    minority_pie_data[i].value = minority_dict[minority_pie_data[i].label];
                }
                console.log(minority_pie_data);
                this.state.minority_pie_data = minority_pie_data;
            });
    }
    
    render() {
        return (<div>
            
        </div>)
    }
}

export default DevData; 