import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import HomeNavBar from './HomeNavBar';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('<HomeNavBar /> ', () => {
    let wrapper;
    it('HomeNavBar renders without crashing ', () => {
        wrapper =shallow(<HomeNavBar />);
    });
});
