import React, {Component} from 'react';
import Link from "react-router-dom/es/Link";
import oakland from "./images/static/oakland.jpg";
import json_file from "./json/districts.json";
import axios from 'axios';


const data = JSON.stringify(json_file);

class InfoCard extends React.Component {
  constructor() {
      super();
      this.state = {
          districtList:[]
      };
  }

  componentWillMount() {
    //var test = JSON.parse(data);
    //console.log(json_file.districts.district[0]);
    let districts = json_file.districts.district
    this.setState({
      districtList: districts
    });
  }

  render() {
    // console.log(this.props.id);
    // console.log(json_file.districts.district[this.props.id]);
    const districtList = this.state.districtList;
    let districtListBlock = '';

    if(districtList.length > 0) {
      districtListBlock = districtList.map( obj => {
        console.log(obj.img);
        return(
          <div className="col-md-4 text-center d-flex align-items-stretch">
            <div className="card mb-4 box-shadow">
                <div className="distimg"><Link to={obj.school_link}><img className="card-img-top" src={obj.img} alt/></Link></div>
                <div className="card-body">
                    <h2 className="card-text"><Link to={obj.school_link} className="text-dark">{obj.title}</Link></h2>
                    <p className="card-text"><span>Location: <strong>{obj.location}</strong></span></p>
                    <p className="card-text"><span>Population under Poverty: <strong>{obj.poverty}</strong></span></p>
                    <p className="card-text"><span>{obj.description}</span></p>
                    <p className="card-text">
                      <span>Opportunities Available:
                        <Link to={obj.opportunity_link} className="text-dark">
                          <strong>{obj.opportunity}</strong>
                        </Link>
                      </span>
                    </p>
                    <p className="card-text">
                      <span>Charities Involved:
                        <Link to={obj.charity_link} className="text-dark">
                          <strong>{obj.charity}</strong>
                        </Link>
                      </span>
                    </p>
                </div>
            </div>
          </div>

        );
      })
    }

    return (
      <div className="row" >
        {districtListBlock}
      </div>

    );
  }
}

export default InfoCard;
