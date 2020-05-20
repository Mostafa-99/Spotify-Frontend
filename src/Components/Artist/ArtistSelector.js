import React, { Component } from "react";
import Albums from "./Albums/Albums";
import ManageProfile from './ManageProfile/ManageProfile'
import Overview from './OverviewPage/Overview'
import UpgradeArtist from "./UpgradeArtist/UpgradeArtist";
import { ProfileContext } from "../../Context/ProfileContext";
/** Class of Artist page selector. It checks the user role in Profile context and shows the page of artist or upgrade to artist page
 * @extends Component
 */
class ArtistSelector extends Component {
  /**Gets the data in profile context of the user
   * @memberof ArtistSelector
   */
  static contextType = ProfileContext;

  render() {
    return (
      <div>
        {this.context.user.role === "artist" ? <Albums /> : <UpgradeArtist />}
      </div>
    );
  }
}
export default ArtistSelector;
