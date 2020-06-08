import React from "react";
import { Route, Redirect } from "react-router-dom";
import UpgradeArtist from "../Components/Artist/UpgradeArtist/UpgradeArtist";

export const ArtistProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("isLoggedIn")==="true" && localStorage.getItem("userType")==="artist") {
          return <Component {...props} />;
        } else {
          return (
            <UpgradeArtist/>
          );
        }
      }}
    />
  );
};