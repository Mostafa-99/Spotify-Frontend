'use strict';
module.exports = {
  get: () => {
    return Promise.resolve({
      data: [
        [   {
              "id": 1,
              "name": "HeartBreak Weather",
              "owner": [
                {
                  "id": 7879,
                  "name": "Nial Horran"
                }
              ],
              "images": "https://i.scdn.co/image/ab67616d0000b2733d13e91ce05c4e9b3e7201b7",
              "tracks": [
                {
                  "href": "google.com",
                  "total": "1"
                }
              ]
            }
          ]
      ]
    });
  }
};