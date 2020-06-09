
import React from 'react'
import {shallow} from 'enzyme'
import 'jest-enzyme';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect';
import YourLibraryArtists from './YourLibraryArtists';
import axios from "axios";

configure({ adapter: new Adapter() });

describe('<YourLibraryArtists/>', () => {

    it('YourLibraryArtists renders without crashing', () => {
        shallow(<YourLibraryArtists/>);
    });
    it('YourLibraryArtists states check', () => {
        const wrapper = shallow(<YourLibraryArtists/>);
       expect(wrapper.state().relatedArtists).toEqual([]);

    });
    it('YourLibraryArtists page request', () => {

        const wrapper = shallow(<YourLibraryArtists/>);

        axios.get("https://spotify.mocklab.io/artists/5e923dd09df6d9ca9f10a473/related-artists")
            .then(res => {
                if(res.status===200)
                {   
                    console.log(res);  
                    wrapper.state().relatedArtists= res.data.data;
                }
            });
    });

  
});