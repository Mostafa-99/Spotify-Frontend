import React from 'react'
import {shallow} from 'enzyme'
import 'jest-enzyme';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect';
import ManageProfile from './ManageProfile';
import axios from "axios";

configure({ adapter: new Adapter() });

describe('<ManageProfile/>', () => {

    it('ManageProfile renders without crashing', () => {
        shallow(<ManageProfile/>);
    });
    it('ManageProfile header check & Artist ManageProfile request check', () => {
        const wrapper = shallow(<ManageProfile/>);
        expect(wrapper.contains(<span class="sr-only">Loading...</span>)).toEqual(true);
        axios
        .get("https://spotify.mocklab.io/me", {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          if (res.status === 200) {              
              this.setState((prevState) => ({
                  user: {
                      ...prevState.user,
                      image: res.data.images,
                      name: res.data.name,
                      background:res.data.images,
                      //background: res.data.artistInfo.background,
                      bio: res.data.artistInfo.biography,
                    },
                    pageLoaded:true,
                }));
                expect(res.status).toEqual(200)
                expect(wrapper.contains(<div className="col-lg-9 container top-section"></div>)).toEqual(true);
          }
        }).catch();
    });

    it('Artist manage profile check', () => {
        const wrapper = shallow(<ManageProfile/>);
    });
    
});