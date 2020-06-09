import React from 'react'
import {shallow} from 'enzyme'
import 'jest-enzyme';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect';
import SearchNavBar from "./SearchNavBar"
import axios from "axios";

configure({ adapter: new Adapter() });

describe('<SearchNavBar/>', () => {

    it('SearchNavBar renders without crashing', () => {
        shallow(<SearchNavBar/>);
    });
    it('SearchNavBar states check', () => {
        const wrapper = shallow(<SearchNavBar/>);
       expect(wrapper.state().notFound).toEqual("0");
       expect(wrapper.state().text).toEqual([""]);
       expect(wrapper.state().searchingstate).toEqual("");

       expect(wrapper.state().artists).toEqual([]);
       expect(wrapper.state().albums).toEqual([]);
       expect(wrapper.state().playLists).toEqual([]);
       expect(wrapper.state().tracks).toEqual([]);
       tracks
    });
    it('SearchNavBar page request', () => {

        const wrapper = shallow(<SearchNavBar/>);

        expect(wrapper.contains(
        <div id='search-input' className="col-8" >
            <input onChange={event => this.searchHandlerMocking(event.target.value)} type="text" id="search-text-input" name="search-text-input" placeholder="Search for Artists, Albums, Or Songs" ></input>
        </div>
        )).toEqual(true);
        
        axios
        .get("http://spotify.mocklab.io/artists/5e923dd09df6d9ca9f10a473/top-tracks")
        .then((res) => {
          if (res.status === 200) {
            console.log(res);  
            wrapper.state().tracks=res.data.data;      
          }

        });
    });

  
});