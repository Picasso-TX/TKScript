import utils from "../utils/event";
import type { Website } from "../websites";

const website: Website = {
  regexp: new RegExp(
    [
      "cnki",
      "oh100",
      "fwsir",
      "wenxm",
      "unjs",
      "yjbys",
      "360doc",
      "850500",
      "jianbiaoku",
      "kejudati",
      "yuque",
      "cnrencai",
      "ndPureView",
      "jianshu",
      "linovelib",
      "chazidian",
      "juejin",
      "zgbk",
      "yuedu\\.baidu",
      "shubaoc",
      "51cto",
      "ddwk8",
      "fanqienovel\\.com/reader",
      "cooco\\.net\\.cn",
      "aipiaxi",
      "wenku\\.csdn\\.net",
      "mcmod\\.cn",
      "51cto\\.com",
      "educoder\\.net",
      "vcsmemo\\.com",
      "www\\.lyrical-nonsense\\.com",
      "tongxiehui\\.net",
      "www\\.xuexila\\.com",
      "www\\.ruiwen\\.com"
    ].join("|")
  ),
  init: function () {
    utils.hideButton();
    utils.enableUserSelectByCSS();
    utils.enableOnCopyByCapture();
  },
};

export default website;
