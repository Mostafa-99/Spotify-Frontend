import React from 'react'
import {shallow} from 'enzyme'
import 'jest-enzyme';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect';
import YourLibraryNavBar from './YourLibraryNavBar';
import axios from "axios";

configure({ adapter: new Adapter() });

describe('<YourLibraryNavBar/>', () => {

    it('YourLibraryNavBar renders without crashing', () => {
        shallow(<YourLibraryNavBar/>);
    });
    
});