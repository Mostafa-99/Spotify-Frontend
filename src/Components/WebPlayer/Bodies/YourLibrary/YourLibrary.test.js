import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import YourLibrary from './YourLibrary';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<YourLibrary /> ', () => {
    let wrapper;
    it('YourLibrary renders without crashing ', () => {
        wrapper =shallow(<YourLibrary />);
    });
    
});



