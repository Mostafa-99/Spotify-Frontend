import React from 'react'
import {shallow} from 'enzyme'
import 'jest-enzyme';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect';
import YourLibraryPlaylists from './YourLibraryPlaylists';
import axios from "axios";

configure({ adapter: new Adapter() });

describe('<YourLibraryPlaylists/>', () => {

    it('YourLibraryPlaylists renders without crashing', () => {
        shallow(<YourLibraryPlaylists/>);
    });
    it('YourLibraryPlaylists states check', () => {
        const wrapper = shallow(<YourLibraryPlaylists/>);
       expect(wrapper.state().playLists).toEqual([]);
       expect(wrapper.state().likedSongs).toEqual([]);

    });
    it('YourLibraryPlaylists page request', () => {

        const wrapper = shallow(<YourLibraryPlaylists/>);

        axios.get("https://spotify.mocklab.io/artists/5e923dd09df6d9ca9f10a473/created-playlists"
            
            )
            .then(res => {
                if(res.status===200)
                {   
                    console.log(res);  
                    wrapper.state().playLists= res.data.data;
                }
            });
        axios.get("https://spotify.mocklab.io/your-library")
            .then(res => {
                if(res.status===200)
                {   
                    console.log(res);  
                    wrapper.state().likedSongs= res.data.likedTracks;
                }
            });
            
        
    });

  
});