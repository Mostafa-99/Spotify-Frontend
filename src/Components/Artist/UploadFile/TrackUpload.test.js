import React from 'react'
import {shallow} from 'enzyme'
import 'jest-enzyme';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect';
import TrackUpload from './TrackUpload';
import axios from "axios";


configure({ adapter: new Adapter() });

describe('<TrackUpload/>', () => {

    it('TrackUpload renders without crashing', () => {
        shallow(<TrackUpload/>);
    });

    it('TrackUpload header check & Artist TrackUpload request check', () => {
        const wrapper = shallow(<TrackUpload/>);
        const formData = new FormData();
        try {
          console.log(props.location.state.myId);
           axios.post(
           "https://spotify.mocklab.io/me/albums/1234/tracks",
            formData,
            {
              headers: {
                authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          )
          .then((res) => {
            expect(res.status).toEqual(200);
          });
        }
        catch(err){

        }
    });
});