import React from 'react';
import { shallow } from 'enzyme';
import HomeNavBar from '../HomeNavBar';
import RecentActivity from '../RecentActivity';

it('renders without crashing', () => {
  shallow(<HomeNavBar />);
});

it("Snapshot testing", () => {
    const HomeNavBarTest = shallow(
        <HomeNavBar />
    );
    expect(HomeNavBarTest).toMatchInlineSnapshot(`ShallowWrapper {}`);
  });

  it('should render the Recent Activity component if logged in', () => {
    const CheckNavBar = shallow(<HomeNavBar />);
    CheckNavBar.setState({status:"connected"});
    expect(CheckNavBar.contains(<RecentActivity/>))
});