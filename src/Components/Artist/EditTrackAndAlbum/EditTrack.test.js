import React from 'react'
import {shallow} from 'enzyme'
import 'jest-enzyme';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect';
import EditTrack from './EditTrack';
import axios from "axios";

configure({ adapter: new Adapter() });

describe('<EditTrack/>', () => {

    it('EditTrack renders without crashing', () => {
        shallow(<EditTrack/>);
    });
    it('EditTrack header check', () => {
        const wrapper = shallow(<EditTrack/>);
        expect(wrapper.contains( <h1 className="display-5 text-light mt-5 text-center">Edit Track</h1>)).toEqual(true);
    });
    it('Track states check', () => {
        const wrapper = shallow(<EditTrack/>);
       expect(wrapper.state().trackNewName).toEqual("");
       expect(wrapper.state().albumId).toEqual("");
       expect(wrapper.state().trackId).toEqual("");
       
    });
    it('Track states check', () => {

        const wrapper = shallow(<EditTrack
            location={{state: {albumId: 1234,trackId:1234}}}
            />);
        wrapper.setState({
            trackNewName:"mostafa",
        })
        expect(wrapper.state().trackNewName).toEqual("mostafa");
        expect(wrapper.state().albumId).toEqual(1234);
        expect(wrapper.state().trackId).toEqual(1234);
    });
    it('Track edit request', () => {

        const wrapper = shallow(<EditTrack
            location={{state: {albumId: "5e90e8fbe1451e424477b131",trackId:"5e90e902dbaa5b45a48541f3"}}}
            />);
        wrapper.setState({
            trackNewName:"Song name",
        })

        axios
        .patch("https://spotify.mocklab.io/me/albums/" +wrapper.state().albumId+
            "/tracks/" + wrapper.state().trackId,
          {
            "name": wrapper.state().trackNewName,
          },
          {
            headers: {
              authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          expect(res.status).toEqual(200)
        })
    });

  
});