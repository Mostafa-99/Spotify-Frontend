import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import SideBar from './SideBar';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<SideBar />  (WebPlayer Side Bar)', () => {
    let wrapper;
    it('SideBar renders without crashing', () => {
        wrapper =shallow(<SideBar />);
    });
    it('renders SideBar header', () => {
        expect(wrapper.contains(<span className='list-item-text'>Home</span>)).equal(true);
    });
});

