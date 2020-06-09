import React from 'react'
import {shallow} from 'enzyme'
import 'jest-enzyme';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect';
import PlayingBar from './PlayingBar';

configure({ adapter: new Adapter() });

describe('<PlayingBar/>', () => {

    it('PlayingBar renders without crashing', () => {
        shallow(<PlayingBar/>);
    });

    it('PlayingBar states check', () => {
        const wrapper = shallow(<PlayingBar/>);
       expect(wrapper.state().volume).toEqual(50);
       expect(wrapper.state().volume_icon).toEqual("fas fa-volume-down");
    });

});