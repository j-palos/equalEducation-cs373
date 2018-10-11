import React, {Component} from 'react';
import Link from "react-router-dom/es/Link";
import oakland from "./images/static/oakland.jpg";
import json_file from "./json/districts.json";
import { Button } from 'reactstrap';
import './App.css';

const renderImg = (page) => {
  console.log(typeof page);
  return require(page);
}

class InfoCard extends React.Component {
  constructor() {
      super();
      this.state = {
          districtList:[]
      };
  }

  componentWillMount() {
    let districts = json_file.districts.district
    this.setState({
      districtList: districts
    });
  }

  render() {
    const districtList = this.state.districtList;
    let districtListBlock = '';

    if(districtList.length > 0) {
      districtListBlock = districtList.map( obj => {
        console.log(obj.img);
        return(
          <div className="col-md-4 text-center d-flex align-items-stretch">
            <div className="card mb-4 box-shadow">
                <div className="distimg"><Link to={obj.school_link}><img className="card-img-top card_height" src={obj.img} alt/></Link></div>
                <div className="card-body">
                    <h2 className="card-text">{obj.title}</h2>
                    <p className="card-text">Location: <strong>{obj.location}</strong></p>
                    <p className="card-text">Population under Poverty: <strong>{obj.poverty}</strong></p>
                    <p className="card-text">{obj.description}</p>
                    <p className="card-text">
                      Opportunities Available:<Link to={obj.opportunity_link}><strong>{obj.opportunity}</strong></Link>
                    </p>
                    <p className="card-text">
                      Charities Involved:<Link to={obj.charity_link}><strong>{obj.charity}</strong></Link>
                    </p>
                    <Button outline color="primary" href={obj.school_link}>Learn More</Button>
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
