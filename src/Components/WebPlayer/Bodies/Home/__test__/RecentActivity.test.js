import React from 'react';
import { shallow } from 'enzyme';
import RecentActivity from '../RecentActivity';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });


describe('Recent Activity Test', () => {

    let wrapper;

it('renders without crashing', () => {
    wrapper = Enzyme.shallow(<RecentActivity />);
});

it("Snapshot testing", () => {
    const RecentActivityTest = shallow(
        <RecentActivity />
    );
    expect(RecentActivityTest).toMatchInlineSnapshot(`ShallowWrapper {}`);
  });

  it('has the initial state count of no recents', () => {
    expect(wrapper.state()).toEqual({"recents":[]});
  })

})