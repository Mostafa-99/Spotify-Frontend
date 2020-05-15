import React from 'react'
import {shallow} from 'enzyme'
import 'jest-enzyme';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect';
import Albums from './Albums';
configure({ adapter: new Adapter() });

describe('<Albums/>', () => {

    it('Albums renders without crashing', () => {
        shallow(<Albums/>);
    });
    it('Albums header check', () => {
        const wrapper = shallow(<Albums/>);
        expect(wrapper.contains(<h2 className="section-title albums">Albums</h2>)).toEqual(true);
    });
    it('Artist albums check', () => {
        const wrapper = shallow(<Albums/>);
       // expect(wrapper.state()).toEqual({artistAlbums: []});
       expect(wrapper.state('artistAlbums')).toEqual([]);
    });
  
});