import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ArtistWebPlayer from './ArtistWebPlayer';
import ArtistWebPlayerNavBar from './ArtistWebPlayerNavBar';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from "axios";

configure({ adapter: new Adapter() });

describe('<ArtistWebPlayer /> ', () => {
    let wrapper;
    it('ArtistWebPlayer renders without crashing ', () => {
        wrapper =shallow(<ArtistWebPlayer />);
    });
    it('YourLibrary page request', () => {

        const wrapper = shallow(<ArtistWebPlayer location={{state: 1234}}/>);

        
        axios
        .get("https://spotify.mocklab.io/artists/5e923dd09df6d9ca9f10a473", {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          if (res.status === 200) {
            console.log(res);  
            wrapper.state().isFollowed=res.data.data.following;        
          }

        });
    });
});

describe('<ArtistWebPlayerNavBar /> ', () => {
    let wrapper;
    it('ArtistWebPlayerNavBar renders without crashing ', () => {
        wrapper =shallow(<ArtistWebPlayerNavBar />);
    });
});


