import utils from "../utils/event";
import type { Website } from "../websites";

const website: Website = {
  regexp: new RegExp("ai-bot\\.cn"),
  init: function () {
    utils.hideButton();
    utils.enableUserSelectByCSS(
    `
      body * :not(input):not(textarea) {-webkit-touch-callout: auto !important;-webkit-user-select: auto !important;-moz-user-select: auto !important;-khtml-user-select: auto !important;-ms-user-select: auto !important;}
    `);
  },
};

export default website;
