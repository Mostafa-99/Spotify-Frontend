
import React from 'react'
import {shallow} from 'enzyme'
import 'jest-enzyme';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect';
import YourLibraryAlbums from './YourLibraryAlbums';
import axios from "axios";

configure({ adapter: new Adapter() });

describe('<YourLibraryAlbums/>', () => {

    it('YourLibraryAlbums renders without crashing', () => {
        shallow(<YourLibraryAlbums/>);
    });
    it('YourLibraryAlbums states check', () => {
        const wrapper = shallow(<YourLibraryAlbums/>);
       expect(wrapper.state().albums).toEqual([]);

    });
    it('YourLibraryAlbums page request', () => {

        const wrapper = shallow(<YourLibraryAlbums/>);

        axios.get("https://spotify.mocklab.io/artists/5e923dd09df6d9ca9f10a473/albums")
            .then(res => {
                if(res.status===200)
                {   
                    console.log(res);  
                    wrapper.state().albums= res.data.data;
                }
            });
    });

  
});