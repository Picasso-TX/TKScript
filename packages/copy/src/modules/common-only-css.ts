import utils from "../utils/event";
import type { Website } from "../websites";
import { DOM_STAGE } from "../constant/event";

const website: Website = {
  config: {
    runAt: DOM_STAGE.END,
  },
  regexp: new RegExp(
    [
      "16map\\.com",
      "ai-bot\\.cn"
    ].join("|")
  ),
  init: function () {
    utils.hideButton();
    utils.enableUserSelectByCSS(
    `
      body * :not(input):not(textarea) {-webkit-touch-callout: auto !important;-webkit-user-select: auto !important;-moz-user-select: auto !important;-khtml-user-select: auto !important;-ms-user-select: auto !important;}
    `);
  }
};

export default website;
