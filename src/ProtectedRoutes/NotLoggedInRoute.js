import React from "react";
import { Route, Redirect } from "react-router-dom";

/**
     * Protected route to allow not logged in .
     * @extends Component
     */
export const NotLoggedInRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("isLoggedIn")==="false" || localStorage.getItem('isLoggedIn')===null) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
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