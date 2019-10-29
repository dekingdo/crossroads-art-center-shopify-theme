/**
 * Loading webfonts :D 
 */

import WebFont from "webfontloader";

export default () => {
  WebFont.load({
    google: {
      families: ["Montserrat:400,400i,600,600i"]
    }
  });
}