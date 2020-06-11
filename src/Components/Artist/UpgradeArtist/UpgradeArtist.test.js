import React from 'react'
import {shallow} from 'enzyme'
import 'jest-enzyme';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect';
import UpgradeArtist from './UpgradeArtist';
/* to be transfered to #src/setupTests.js */

configure({ adapter: new Adapter() });

describe('<UpgradeArtist/>', () => {

    it('UpgradeArtist renders without crashing', () => {
        shallow(<UpgradeArtist/>);
    });
    it('Finds Be Artist', () => {
        const wrapper = shallow(<UpgradeArtist/>);
        expect(wrapper.contains(<h1 className="bold-header">Be Artist</h1>)).toEqual(true);
    });
    it('Check code', () => {
        const wrapper = shallow(<UpgradeArtist/>);
       expect(wrapper.state('code')).toEqual("");
    });
  
});