import React from 'react'
import {shallow} from 'enzyme'
import 'jest-enzyme';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect';
import Overview from './Overview';
import axios from "axios";

configure({ adapter: new Adapter() });

describe('<Overview/>', () => {

    it('Overview renders without crashing', () => {
        shallow(<Overview/>);
    });
    it('Overview states check', () => {
        const wrapper = shallow(<Overview/>);
       expect(wrapper.state().numberOfLikesAndFollowersLineDataYears.labels).toEqual([]);
       expect(wrapper.state().numberOfLikesAndFollowersLineDataYears.datasets[0].data).toEqual([]);
       expect(wrapper.state().numberOfLikesAndFollowersLineDataYears.datasets[1].data).toEqual([]);

       expect(wrapper.state().numberOfLikesAndFollowersLineDataMonths.labels).toEqual([]);
       expect(wrapper.state().numberOfLikesAndFollowersLineDataMonths.datasets[0].data).toEqual([]);
       expect(wrapper.state().numberOfLikesAndFollowersLineDataMonths.datasets[1].data).toEqual([]);
       
       expect(wrapper.state().numberOfLikesAndFollowersLineDataDays.labels).toEqual([]);
       expect(wrapper.state().numberOfLikesAndFollowersLineDataDays.datasets[0].data).toEqual([]);
       expect(wrapper.state().numberOfLikesAndFollowersLineDataDays.datasets[1].data).toEqual([]);
    });
    it('OVerview page request', () => {

        const wrapper = shallow(<Overview/>);

        expect(wrapper.contains(<span class="sr-only">Loading...</span>)).toEqual(true);
        
        axios
        .get("https://spotify.mocklab.io"+"/me/numberOfLikesAndFollowers/albums/5ec84430fcf468e8807fb645/tracks/5ec844300d5a54e890e655cb", {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          if (res.status === 200) {
            console.log(res);  
            wrapper.state().numberOfLikesAndFollowersLineDataYears.labels=res.data.years.labels;
            wrapper.state().numberOfLikesAndFollowersLineDataYears.datasets[0].data=res.data.years.likes.data;
            wrapper.state().numberOfLikesAndFollowersLineDataYears.datasets[1].data=res.data.years.followers.data; 
  
            wrapper.state().numberOfLikesAndFollowersLineDataMonths.labels=res.data.months.labels;
            wrapper.state().numberOfLikesAndFollowersLineDataMonths.datasets[0].data=res.data.months.likes.data;
            wrapper.state().numberOfLikesAndFollowersLineDataMonths.datasets[1].data=res.data.months.followers.data;  
                   
            wrapper.state().numberOfLikesAndFollowersLineDataDays.labels=res.data.days.labels;
            wrapper.state().numberOfLikesAndFollowersLineDataDays.datasets[0].data=res.data.days.likes.data;
            wrapper.state().numberOfLikesAndFollowersLineDataDays.datasets[1].data=res.data.days.followers.data;         
          }
          wrapper.setState((prevState) => ({
            user: {
              ...prevState.user,
            },
            pageLoaded:true,
  
          }));
          expect(wrapper.contains(<div className="col-lg-9 col-sm-12 statistics-section"></div>)).toEqual(true);

        });
    });

  
});