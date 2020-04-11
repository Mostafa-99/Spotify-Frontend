import React from 'react';
import { shallow } from 'enzyme';
import HelpPage from './HelpPage'
import { expect } from 'chai';

/* to be transfered to #src/setupTests.js */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<HelpPage/>', () => {

    it('AccountHelp renders without crashing', () => {
        shallow(<HelpPage/>);
    });
    it('does not render Feature header', () => {
        const wrapper = shallow(<HelpPage/>);
        // expect(wrapper.contains(welcome)).toBe(true);
        //expect(wrapper).toContainReact(help);
        expect(wrapper.contains(<h3>Account & Payment</h3>)).equal(true);
        expect(wrapper.contains(<h1>Listen Offline</h1>)).equal(true);
        expect(wrapper.contains(<h1>Still not on Spotify?</h1>)).equal(true);
 
    });
   
  
});