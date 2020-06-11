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

/** Class of Overview of artist. It gets the artist's info
 * @extends Component
 */
class Overview extends Component {
   /**Gets the baseURL from configrations context of the user
   * @memberof Overview
   */
  static contextType = ConfigContext;

  
  constructor() {
    super();
    this.state = {
      user: {
      /**Array of Albums of the artist
       * @memberof Overview
       * @type {image}
       */
        image: "",
      },
      /**Number Of Likes And Followers per Year for an artist
       * @memberof Overview
       */
      numberOfLikesAndFollowersLineDataYears: {
      /**Labels of Number Of Likes And Followers per Year for an artist
       * @memberof Overview
       * @type {Array<string>}
       */
        labels: [],
       /**Data for Number Of Likes And Followers per Year for an artist
       * @memberof Overview
       * @type {Array<settings>}
       */
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
      /**Number Of Likes And Followers per month for an artist
       * @memberof Overview
       */
      numberOfLikesAndFollowersLineDataMonths: {
      /**Labels of Number Of Likes And Followers per month for an artist
       * @memberof Overview
       * @type {Array<string>}
       */
        labels: [],
        /**Data for Number Of Likes And Followers per month for an artist
       * @memberof Overview
       * @type {Array<settings>}
       */
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
      /**Number Of Likes And Followers per day for an artist
       * @memberof Overview
       */
      numberOfLikesAndFollowersLineDataDays: {
      /**Labels of Number Of Likes And Followers per day for an artist
       * @memberof Overview
       * @type {Array<string>}
       */
        labels: [],
       /**Data for Number Of Likes And Followers per day for an artist
       * @memberof Overview
       * @type {Array<settings>}
       */
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
      pageTitle:"Artist Statistics",
      pageLoaded: false,
    };

  }
  
   /**When the component mounts it sends a request to the backend to load number of followers and likes per (day/month/year)
   * @memberof Overview
   */
  componentDidMount() {
    window.scrollTo(0, 0);

    console.log(this.state.fileName);
    console.log(this.context.baseURL);
    var albumId;
    var trackId;
    var endPoint="";
    var flag=0;
    try {
      
       albumId = this.props.location.state.albumId;
       flag=1;
       trackId = this.props.location.state.trackId;

       if(trackId===undefined)
       {
         endPoint="/albums/"+albumId;
         this.state.pageTitle="Album Statistics"
         console.log(endPoint);
       }  
       else
       {
         endPoint="/albums/"+albumId+"/tracks/"+trackId;
         this.state.pageTitle="Track Statistics"

       } 
    } catch (error) {
    }
    console.log(endPoint);
   // this.context.baseURL
    axios
      .get("https://spotify.mocklab.io"+"/me/numberOfLikesAndFollowers"+endPoint, {
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
          pageLoaded:true,

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
            {this.state.pageLoaded ? 
            <div className="col-lg-9 col-sm-12 statistics-section">
              <div className="statistics-div">
            <h1 className="text-light text-center mt-5">{this.state.pageTitle}</h1>
                <div className="statistics-info mb-5">
                  <h3 className="graph-title display-5 text-light mt-5 text-center">Number of likes and followers per year</h3>
                  <Line id="lineChart" data={this.state.numberOfLikesAndFollowersLineDataYears} />
                  <h3 className="graph-title display-5 text-light mt-5 text-center">Number of likes and followers per month</h3>
                  <Line id="lineChart" data={this.state.numberOfLikesAndFollowersLineDataMonths} />
                  <h3 className="graph-title display-5 text-light mt-5 text-center">Number of likes and followers per day</h3>
                  <Line id="lineChart" data={this.state.numberOfLikesAndFollowersLineDataDays} />
                </div>
              </div>
            </div>
            : 
            <div className="container w-50 pb-5 align-middle align-self-center d-flex justify-content-center">
            <div class="spinner-border text-success" role="status">
            <span class="sr-only">Loading...</span>
          </div>
              </div>}
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
