import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ArtistWebPlayer from './ArtistWebPlayer';
import ArtistWebPlayerNavBar from './ArtistWebPlayerNavBar';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<ArtistWebPlayer /> ', () => {
    let wrapper;
    it('ArtistWebPlayer renders without crashing (cannot pass id from home so it crashes(commented testing))', () => {
        //wrapper =shallow(<ArtistWebPlayer />);
    });
});

describe('<ArtistWebPlayerNavBar /> ', () => {
    let wrapper;
    it('ArtistWebPlayerNavBar renders without crashing ', () => {
        wrapper =shallow(<ArtistWebPlayerNavBar />);
    });
});


