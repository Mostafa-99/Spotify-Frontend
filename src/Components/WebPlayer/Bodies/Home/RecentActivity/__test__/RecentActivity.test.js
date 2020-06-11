import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import RecentActivity from '../RecentActivity'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import axios from "axios";

Enzyme.configure({ adapter: new Adapter() });


describe('Recent Activity Test', () => {

    let wrapper;

it('renders without crashing', () => {
    wrapper = Enzyme.shallow(<RecentActivity/>);
});

it("Snapshot testing", () => {
    const RecentActivityTest = shallow(
        <RecentActivity />
    );
    expect(RecentActivityTest).toMatchInlineSnapshot(`ShallowWrapper {}`);
  });

  it('has the initial state ', () => {
    expect(wrapper.state().recents).toEqual([]),
    expect(wrapper.state().recents.length).toEqual(0),
    expect(wrapper.state().totalResults).toEqual(0),
    expect(wrapper.state().Loaded).toEqual(false),
    expect(wrapper.state().currentPage).toEqual(1),
    expect(wrapper.contains(<span class="sr-only">Loading...</span>)).toEqual(true);
  })

  it('test next page', () => {

    let component = wrapper.instance();
    component.nextpage(1);
    expect(wrapper.state().currentPage).toEqual(1);
  })
  

  axios
  .get("https://spotify.mocklab.io/me/notifications?limit=4", {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
  .then(res => {
    console.log(res)
  if (res.status===200)
  {       
          this.setState({
           recents : res.data.data.results.items.map( recents => ({
        id:recents.data.id,
         time:recents.time,
        description: recents.notification.body,
       image:recents.data.images
      })),
      currentPage:pagenumber,
     totalResults: res.data.data.results.total,
     Loaded:true
          });
          expect(res.status).toEqual(200);
          expect(wrapper.contains(<span class="sr-only">Loading...</span>)).toEqual(false);
          expect(wrapper.state().recents.length).notEqual(0);
        }}).catch();
});




