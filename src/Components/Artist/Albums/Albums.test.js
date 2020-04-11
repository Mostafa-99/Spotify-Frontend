import React from 'react';
import { shallow } from 'enzyme';
import Albums from './Albums'
import { expect } from 'chai';

/* to be transfered to #src/setupTests.js */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<Albums/>', () => {

    it('Albums renders without crashing', () => {
        shallow(<Albums/>);
    });
    it('Albums header check', () => {
        const wrapper = shallow(<Albums/>);
        expect(wrapper.contains(<h2 className="section-title albums">Albums</h2>)).equal(true);
    });
    it('Albums header check', () => {
        const wrapper = shallow(<Albums/>);
       // expect(wrapper.state()).toEqual({artistAlbums: []});
    });
   
  
});