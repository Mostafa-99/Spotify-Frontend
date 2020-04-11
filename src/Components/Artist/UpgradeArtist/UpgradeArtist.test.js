import React from 'react';
import { shallow } from 'enzyme';
import UpgradeArtist from './UpgradeArtist'
import { expect } from 'chai';

/* to be transfered to #src/setupTests.js */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<UpgradeArtist/>', () => {

    it('UpgradeArtist renders without crashing', () => {
        shallow(<UpgradeArtist/>);
    });
    it('Finds Be Artist', () => {
        const wrapper = shallow(<UpgradeArtist/>);
        expect(wrapper.contains(<h1 className="bold-header">Be Artist</h1>)).equal(true);
    });
   
  
});