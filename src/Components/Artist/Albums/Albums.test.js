import React from 'react'
import {shallow} from 'enzyme'
import 'jest-enzyme';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect';
import Albums from './Albums';
import axios from "axios";

configure({ adapter: new Adapter() });

describe('<Albums/>', () => {

    it('Albums renders without crashing', () => {
        shallow(<Albums/>);
    });
    it('Albums header check & Artist albums request check', () => {
        const wrapper = shallow(<Albums/>);
        expect(wrapper.contains(<span class="sr-only">Loading...</span>)).toEqual(true);
        axios
       .get("https://spotify.mocklab.io/me/albums", {
         headers: {
           authorization: "Bearer " + localStorage.getItem("token"),
         },
       })
       .then((res) => {
             expect(res.status).toEqual(200)
             wrapper.setState({
                pageLoaded:true,
              });
            expect(wrapper.contains(<h2 className="section-title albums">Albums</h2>)).toEqual(true);
       })
       .catch((res) => {
         responseHandler(res);
       });
    });
    it('Artist albums check', () => {
        const wrapper = shallow(<Albums/>);
       expect(wrapper.state('artistAlbums')).toEqual([]);
    });
});