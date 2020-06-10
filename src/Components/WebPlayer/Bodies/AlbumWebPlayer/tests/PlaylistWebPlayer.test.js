import React from 'react'
import {shallow} from 'enzyme'
import 'jest-enzyme';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect'
import PlaylistWebPlayer from './../PlaylistWebPlayer.js'
import axios from "axios";
import { responseHandler } from '../../../../../ReduxStore/Shared.js'

configure({ adapter: new Adapter() });

describe('<PlaylistWebPlayer/>', () => {

    it('PlaylistWebPlayer renders without crashing', () => {
        shallow(<PlaylistWebPlayer
            location={{state: {myAlbum: true, myId:"1234"}}}
            />);
    });

    it('PlaylistWebPlayer states check', () => {
        
        const wrapper = shallow(<PlaylistWebPlayer
            location={{state: {myAlbum: true, myId:"1234"}}}
            />);
        
        expect(wrapper.state().playlist_name).toEqual("");
        expect(wrapper.state().artists).toEqual("");
        expect(wrapper.state().playlist_image).toEqual("");
        expect(wrapper.state().playing_song_id).toEqual("");
        expect(wrapper.state().playing_song_name).toEqual("");

        expect(wrapper.state().is_liked).toEqual(false);
        expect(wrapper.state().is_repeating).toEqual(false);
        expect(wrapper.state().is_shuffling).toEqual(false);
        expect(wrapper.state().is_playing).toEqual(false);

        expect(wrapper.state().liked_tracks).toEqual([]);
        expect(wrapper.state().playlist_total_tracks).toEqual(0);
    });

    it('PlaylistWebPlayer page requests', () => {

        const wrapper = shallow(<PlaylistWebPlayer
            location={{state: {myAlbum: true, myId:"1234"}}}
            />);
        
        axios.get("http://spotify.mocklab.io/playlists/12345",{
            headers:{
                'Content-Type':'application/json',
                'authorization': "Bearer "+ localStorage.getItem("token"),
                "id": ""
            }
        })
        .then(res => {
            if(res.status===200){
                wrapper.setState({
                    playlist_image:res.data.data.playlist.image,
                    playlist_name:res.data.data.playlist.name,
                    playlist_total_tracks:res.data.data.playlist.totalTracks
                })
                res.data.data.playlist.artists.map((artist)=>(
                    wrapper.setState({
                        artists:artist.name
                    })
                ))
                expect(wrapper.state().playlist_name).toEqual("Global Warming");
                expect(wrapper.state().artists).toEqual("Pitbull");
            }
            else responseHandler(res);
        })
        .catch(error => {
            console.log(error);
        })

        

        axios.get("http://spotify.mocklab.io/me/likedPlaylists",{
            headers:{
                'Content-Type':'application/json',
                'authorization': "Bearer "+ localStorage.getItem("token")
            }
        })
        .then(res => {
            if(res.status===200){
                res.data.data.playlists.map((playlist) => {
                    if(playlist._id === this.state.myId){
                        this.setState({
                            is_liked:true
                        })

                        expect(wrapper.state().is_liked).toEqual(true); 

                        return playlist;
                    }
                })
            }
            else responseHandler(res);
        })
        .catch(error => {
            console.log(error);
        })

        axios.get("http://spotify.mocklab.io/playlists/12345/tracks",{
            headers:{
                'Content-Type':'application/json',
                'authorization': "Bearer "+ localStorage.getItem("token"),
                "id": ""
            }
        })
        .then(res => {
            if(res.status===200){
                wrapper.setState({tracks:res.data.data.tracksArray})
                expect(wrapper.state().tracks.length).toEqual(5);
            }
            else responseHandler(res);
        })
        .catch(error => {
           console.log(error);
        })

    });

  
});