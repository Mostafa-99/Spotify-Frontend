import React from 'react'
import {shallow} from 'enzyme'
import 'jest-enzyme';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect';
import ConfigContext from './ConfigContext';
configure({ adapter: new Adapter() });

describe('<ConfigContext/>', () => {

    it('ConfigContext renders without crashing', () => {
        shallow(<ConfigContext/>);
    });
});