import React from "react";
import { Route, Redirect } from "react-router-dom";

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
            <Redirect
              to={{
                pathname: "/home",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};