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
      numberOfLikesAndFollowersLineDataYears: {
        labels: [],
        datasets: [
          {
            label: "Likes",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(40,255,50,0.1)",
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
          }, {
            label: "Followers",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(255,205,40,0.1)",
            borderColor: "rgb(255, 205, 40)",
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
          }
        ],
      },
      numberOfLikesAndFollowersLineDataMonths: {
        labels: [],
        datasets: [
          {
            label: "Likes",
            fill: false,
            lineTension: 0.3,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgb(255, 40, 40)",
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
          }, {
            label: "Followers",
            fill: false,
            lineTension: 0.3,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgb(224, 171, 22)",
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
          }
        ],
      },
      numberOfLikesAndFollowersLineDataDays: {
        labels: [],
        datasets: [
          {
            label: "Likes",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(22,69,224,0.1)",
            borderColor: "rgb(22, 69, 224)",
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
          }, {
            label: "Followers",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(224,22,207,0.1)",
            borderColor: "rgb(224, 22, 207)",
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
          }
        ],
      },
     
    };

  }
  
 
  componentDidMount() {
    console.log(this.state.fileName);
    console.log(this.context.baseURL);
  

    //console.log(this.state.numberOfLikesAndFollowrsLineDataYears);
    axios
      .get(this.context.baseURL+"/meArtist/numberOfLikesAndFollowers", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);  
          this.state.numberOfLikesAndFollowersLineDataYears.labels=res.data.years.labels;
          this.state.numberOfLikesAndFollowersLineDataYears.datasets[0].data=res.data.years.likes.data;
          this.state.numberOfLikesAndFollowersLineDataYears.datasets[1].data=res.data.years.followers.data; 

          this.state.numberOfLikesAndFollowersLineDataMonths.labels=res.data.months.labels;
          this.state.numberOfLikesAndFollowersLineDataMonths.datasets[0].data=res.data.months.likes.data;
          this.state.numberOfLikesAndFollowersLineDataMonths.datasets[1].data=res.data.months.followers.data;  
                 
          this.state.numberOfLikesAndFollowersLineDataDays.labels=res.data.days.labels;
          this.state.numberOfLikesAndFollowersLineDataDays.datasets[0].data=res.data.days.likes.data;
          this.state.numberOfLikesAndFollowersLineDataDays.datasets[1].data=res.data.days.followers.data;         
        }
        this.setState((prevState) => ({
          user: {
            ...prevState.user,
          },
        }));
      });

 
      console.log(this.state);
  }
  render() {
   
    return (
      <div className="artist-body">
        <ArtistHeading />

        <div id="artist-audience" className="container page-container">
          <div className="row">
            <ArtistSidebar/>
            <div className="col-lg-9 col-sm-12 statistics-section">
              <div className="statistics-div">
                <div className="statistics-info">
                  <h3 className="graph-title display-5 text-light mt-5 text-center">Number of likes and followers per year</h3>
                  <Line id="lineChart" data={this.state.numberOfLikesAndFollowersLineDataYears} />
                  <h3 className="graph-title display-5 text-light mt-5 text-center">Number of likes and followers per month</h3>
                  <Line id="lineChart" data={this.state.numberOfLikesAndFollowersLineDataMonths} />
                  <h3 className="graph-title display-5 text-light mt-5 text-center">Number of likes and followers per day</h3>
                  <Line id="lineChart" data={this.state.numberOfLikesAndFollowersLineDataDays} />
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
