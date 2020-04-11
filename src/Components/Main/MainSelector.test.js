import React from 'react'
import {shallow} from 'enzyme'
import 'jest-enzyme';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect';
import MainSelector from './MainSelector';
configure({ adapter: new Adapter() });

describe('<MainSelector/>', () => {

    it('MainSelector renders without crashing', () => {
        shallow(<MainSelector/>);
    });
});