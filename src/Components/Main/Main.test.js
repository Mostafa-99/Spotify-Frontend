import React from 'react'
import {shallow} from 'enzyme'
import 'jest-enzyme';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect';
import Main from './Main';
configure({ adapter: new Adapter() });

describe('<Main/>', () => {

    it('Main renders without crashing', () => {
        shallow(<Main/>);
    });
    it('Main header check', () => {
        const wrapper = shallow(<Main/>);
        expect(wrapper.contains(<h1>Music for everyone.</h1>)).toEqual(true);
    });
});