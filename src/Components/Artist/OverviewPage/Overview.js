import React, { Component } from "react";
import axios from "axios";
import "../SideBar/ArtistSidebar";
import ArtistSidebar from "../SideBar/ArtistSidebar";
import { Link } from "react-router-dom";
import { ConfigContext } from "../../../Context/ConfigContext";
import ArtistHeading from "../ManageProfile/ArtistHeading";
import "../ArtistBody.css";
import { Doughnut, Line, defaults,Chart } from "react-chartjs-2";
import "./Overview.css";

var  numberOfLikesYears={
  labels:[],
  data:[]
}
var  numberOfLikesMonths={
  labels:[],
  data:[]
}
var numberOfLikesDays={
  labels:[],
  data:[]
}
/** Class of Albums of artist. It gets the albums of the artist in the artist mode
 * @extends Component
 */
class Overview extends Component {
  static contextType = ConfigContext;
  static styleOfGraph={

  };
  
  constructor() {
    super();
    this.state = {
      user: {
        image: "",
      },
      numberOfLikesLineData: {
        labels: [],
        datasets: [
          {
            label: "Popularity last 5 years",
            fill: false,
            lineTension: 0.3,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgb(40, 255, 50)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(51, 51, 51,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 10,
            pointHoverRadius: 11,
            pointHoverBackgroundColor: "rgba(51, 51, 1,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [],
          },
        ],
      },
     
    };
    this.chooseGraphType=this.chooseGraphType.bind(this)

  }
  chooseGraphType(e) {
    console.log(e.target.id);
    var typeOfGraph=e.target.id;
   
    var graphobj = {...this.state.numberOfLikesLineData}
    
    if(typeOfGraph==="day-option"){
      graphobj.datasets[0].data=numberOfLikesDays.data;
      graphobj.labels=numberOfLikesDays.labels;

    }
    else if(typeOfGraph==="month-option"){
      graphobj.datasets[0].data=numberOfLikesMonths.data;
      graphobj.labels=numberOfLikesMonths.labels;

    }
    else if(typeOfGraph==="year-option"){
      graphobj.datasets[0].data=numberOfLikesYears.data;
      graphobj.labels=numberOfLikesYears.labels;

    }
   
    
  

     console.log(numberOfLikesDays);
     console.log(this.state.numberOfLikesLineData);
  }
  componentDidMount() {
    console.log(this.state.fileName);
    console.log(this.context.baseURL);
    axios
      .get(this.context.baseURL+"/meArtist/numberOfLikes", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          
              numberOfLikesYears=res.data.data.years;
              numberOfLikesDays=res.data.data.days;
              numberOfLikesMonths= res.data.data.months;            
        
          console.log(numberOfLikesYears);
          console.log(numberOfLikesDays);
          console.log(numberOfLikesMonths);

        }
      });

    axios
      .get(this.context.baseURL+"/me", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          this.setState((prevState) => ({
            user: {
              ...prevState.user,
              image: res.data.images,
            },
          }));
        }
      });
  }
  render() {
    const options = {
      maintainAspectRatio: false,
    };
    
    return (
      <div className="artist-body">
        <ArtistHeading />

        <div id="artist-audience" className="container page-container">
          <div className="row">
            <ArtistSidebar img={this.state.user.image}/>
            <div className="col-lg-9 col-sm-12 statistics-section">
              <div className="statistics-div">
                <div className="statistics-info">
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown button
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <div
                        className="dropdown-item"
                        id="day-option"
                        onClick={this.chooseGraphType}
                      >
                        Day
                      </div>
                      <div className="dropdown-item" id="month-option" onClick={this.chooseGraphType}>
                        Month
                      </div>
                      <div className="dropdown-item" id="year-option" onClick={this.chooseGraphType}>
                        Year
                      </div>
                    </div>
                  </div>
                  <Line id="lineChart" data={this.state.numberOfLikesLineData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
