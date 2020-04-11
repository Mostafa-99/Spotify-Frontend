import React, { createContext, Component } from "react";

export const ConfigContext = createContext();
/** Class of Configrations to the base URL to switch between backend and mocking service.
 * @extends Component
 */
class ConfigContextProvider extends Component {
  state = {
    /**baseURL of requests
     * @memberof ConfigContextProvider
     */
    baseURL: "http://138.91.114.14/api",
  };

  render() {
    return (
      <ConfigContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ConfigContext.Provider>
    );
  }
}

export default ConfigContextProvider;
