import utils from "../utils/event";
import type { Website } from "../websites";

const website: Website = {
  regexp: new RegExp("vcsmemo.com/article/.+"),
  init: function() {
    utils.hideButton();
    utils.enableUserSelectByCSS();
  }
};

export default website;
