import { initBaseEvent, initBaseStyle } from "./init-timelygogo";
import { initWebsite, getSelectedText } from "./deploy-timelygogo";
import instance from "./utils/instance";
import { isEmptyContent } from "./utils/copy";
import { MOUSE_UP } from "./constant/event";

(function () {
  const websiteConfig = initWebsite();
  initBaseEvent(websiteConfig);
  initBaseStyle();
  window.addEventListener(
    MOUSE_UP,
    e => {
      const handler = () => {
        const content = getSelectedText();
        if (isEmptyContent(content)) {
          instance.hide();
          return void 0;
        }
        instance.onCopy(content, e);
      };
      websiteConfig.delay ? setTimeout(handler, websiteConfig.delay) : handler();
    },
    websiteConfig.captureInstance
  );
})();
