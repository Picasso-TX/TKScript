import utils from "../utils/event";
import type { Website } from "../websites";

const website: Website = {
  regexp: new RegExp([
    "rrdynb", "fuwu7", "jinrilvsi\\.com","www\\.9136\\.com",
    "www\\.jdxzz\\.com",
    "www\\.gaosan\\.com",
    "lqsbcl\\.net"
  ].join("|")),
  init: function () {
    utils.hideButton();
    utils.enableUserSelectByCSS();
    utils.enableOnCopyByCapture();
    utils.enableOnKeyDownByCapture();
    utils.enableOnSelectStartByCapture();
    utils.enableOnContextMenuByCapture();
  },
};

export default website;
