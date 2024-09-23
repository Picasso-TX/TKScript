// ==UserScript==
// @name       解除网站不允许复制的限制（优化版）🔥🔥🔥
// @name:zh    解除网站不允许复制的限制（优化版）🔥🔥🔥
// @name:zh-TW 解除網站不允許複製的限制（優化版）🔥🔥🔥
// @description       解除部分网站不允许复制的限制，文本选中后点击复制按钮即可复制，主要用于：百度文库|道客巴巴|腾讯文档|豆丁网|无忧考网|学习啦|蓬勃范文|思否社区|力扣|知乎|语雀|QQ文档|360doc|17k|CSDN等，云服务器导航，在原脚本的基础上，优化了部分功能，如有补充请留言反馈~
// @description:zh    解除部分网站不允许复制的限制，文本选中后点击复制按钮即可复制，主要用于：百度文库|道客巴巴|腾讯文档|豆丁网|无忧考网|学习啦|蓬勃范文|思否社区|力扣|知乎|语雀|QQ文档|360doc|17k|CSDN等，云服务器导航，在原脚本的基础上，优化了部分功能，如有补充请留言反馈~
// @description:zh-TW 解除部分網站不允許複製的限制，文本選中後點擊複製按鈕即可複製，主要用於：百度文庫|道客巴巴|騰訊文檔|豆丁網|無憂考網|學習啦|蓬勃範文|思否社區|力扣|知乎|語雀|QQ文檔|360doc|17k|CSDN等，雲伺服器導航，在原指令碼或直譯式程式的基礎上，優化了部分功能，如有補充請留言反饋~
// @namespace   picassoTX_lifting_restrictions
// @version     2.0.4
// @author      WindrunnerMax,picassoTX
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAWtJREFUaEPtmeERwiAMhYuuo87QzqAr6LmF7RZeXcHO0M6grqPxaq2HnC0BA8IZ/woh33sJekEkkX9E5Pkn/wMwW21TAddd55hI3TgHzbk6ZCax0Q7MlxswCWy/1gwCBbBYbXKA5Km+fWr4nXiIoACESApZKBCT7HLcN2PgQQG0CT86DG51n7QOIjiAVvHuwsBBvAHIjSqT++oBVe35cl33N15bXqdjmavlFDRAm6wOIngAHURQANhr9lyVr7wZAKsa5Tp2gFJNm1jsgKyarIaNmkN7xn48SR1ggAELvDlAWTbYWKQlhD2Uch0D8C2EqCdvTRz9NYoQk3wJNzG5pIYBSR2IvgcYgP8LSQr8erCF7WXSJsYeSrnOGECdVVImYxPLGKCbjvl64BhHUmekqMFWH9LXkPczAjQgpoX6XmAEYGO36z0M4FphXfxBB3QbXX8/9KChnssArpywcsBVMi7jol4pXSbwbezoAe60/xRPTdKM8AAAAABJRU5ErkJggg==
// @match       *://wenku.baidu.com/view/*
// @match       *://wenku.baidu.com/share/*
// @match       *://wenku.baidu.com/link*
// @match       *://wenku.baidu.com/aggs/*
// @match       *://wenku.baidu.com/ndPureView/*
// @match       *://*.doc88.com/*
// @match       *://wk.baidu.com/view/*
// @match       *://*.zhihu.com/*
// @match       *://docs.qq.com/doc/*
// @match       *://docs.qq.com/sheet/*
// @match       *://boke112.com/*/*
// @match       *://*.diyifanwen.com/*
// @match       *://www.uemeds.cn/*
// @match       *://www.oh100.com/*
// @match       *://www.aiyuke.com/news/*
// @match       *://www.fwsir.com/*
// @match       *://www.wenxm.cn/*
// @match       *://www.unjs.com/*
// @match       *://*.yjbys.com/*
// @match       *://*.qidian.com/*
// @match       *://*.zongheng.com/*
// @match       *://*.17k.com/*
// @match       *://*.ciweimao.com/*
// @match       *://book.qq.com/*
// @match       *://*.360doc.com/content/*
// @match       *://*.850500.com/news/*
// @match       *://utaten.com/lyric/*
// @match       *://*.jianbiaoku.com/*
// @match       *://www.kejudati.com/*
// @match       *://*.blog.csdn.net/*
// @match       *://*.bilibili.com/read/*
// @match       *://*.cnki.net/KXReader/*
// @match       *://*.cnrencai.com/*
// @match       *://*.jianshu.com/p/*
// @match       *://*.linovelib.com/novel/*
// @match       *://*.juejin.cn/post/*
// @match       *://*.zgbk.com/ecph/*
// @match       *://yuedu.baidu.com/*
// @match       *://www.shubaoc.com/*
// @match       *://blog.51cto.com/*
// @match       *://*.docin.com/*
// @match       *://*.ddwk8.cn/*
// @match       *://fanqienovel.com/*
// @match       *://*.examcoo.com/*
// @match       *://*.rrdynb.com/*
// @match       *://*.fuwu7.com/*
// @match       *://*.aipiaxi.com/*
// @match       *://wenku.csdn.net/*
// @match       *://www.kdocs.cn/*
// @match       *://*.mcmod.cn/*
// @match       *://*.yuque.com/*
// @match       *://*.51cto.com/*
// @match       *://vcsmemo.com/article/*
// @match       *://www.jinrilvsi.com/*
// @match       *://www.9136.com/*
// @match       *://www.jdxzz.com/*
// @match       *://www.gaosan.com/*/*.html
// @match       *://ai-bot.cn/sites/*.html
// @match       *://www.lyrical-nonsense.com/lyrics/*
// @match       *://tongxiehui.net/by/*
// @match       *://www.xuexila.com/*
// @match       *://www.ruiwen.com/article/*
// @match       *://*.cooco.net.cn/testdetail/**
// @match       *://*.cloud.tencent.com/*
// @match       *://cloud.tencent.com/*
// @match       *://*.huaweicloud.com/*
// @match       *://*.aliyun.com/*
// @match       *://www.51test.net/show/*.html
// @match       *://16map.com/sites/*.html
// @match       *://*.lqsbcl.net/*/**
// @match       *://*.taobao.com/*
// @match       *://*.tmall.com/*
// @match       *://*.tmall.hk/*
// @match       *://*.liangxinyao.com/*
// @match       *://chaoshi.detail.tmall.com/*
// @match       *://pages.tmall.com/wow/an/cs/search**
// @match       *://*.jd.com/*
// @match       *://*.jd.hk/*
// @match       *://item.jkcsjd.com/*
// @match       *://*.yiyaojd.com/*
// @match       *://www.vipglobal.hk
// @match       *://*.vip.com/*
// @match       *://detail.vip.com/detail-*
// @match       *://www.vipglobal.hk/detail-*
// @match       *://category.vip.com/suggest.php**
// @match       *://list.vip.com/*.html
// @exclude     *://cloud.tencent.com/login*
// @exclude     *://console.cloud.tencent.com/*
// @exclude     *://market.cloud.tencent.com/*
// @exclude     *://www.aliyun.com/smarter-engine/*
// @exclude     *://account.aliyun.com/*
// @exclude     *://developer.aliyun.com/*
// @exclude     *://promotion.aliyun.com/*
// @exclude     *://summit.aliyun.com/*
// @exclude     *://startup.aliyun.com/*
// @exclude     *://university.aliyun.com/*
// @exclude     *://careers.aliyun.com/*
// @exclude     *://market.aliyun.com/*
// @exclude     *://yunqi.aliyun.com/*
// @exclude     *://help.aliyun.com/*
// @exclude     *://g.alicdn.com/*
// @exclude     *://passport.aliyun.com/*
// @exclude     *://*.console.aliyun.com/*
// @exclude     *://auth.huaweicloud.com/*
// @exclude     *://support.huaweicloud.com/*
// @exclude     *://console.huaweicloud.com/*
// @exclude     *://stat.doc88.com/*
// @exclude     *://www.lqsbcl.net/*
// @exclude     *://jianghu.taobao.com/*
// @exclude     *://login.taobao.com/*
// @exclude     *://uland.taobao.com/*
// @exclude     *://map.taobao.com/*
// @exclude     *://creator.guanghe.taobao.com/*
// @exclude     *://myseller.taobao.com/*
// @exclude     *://qn.taobao.com/*
// @exclude     *://jingfen.jd.com/*
// @exclude     *://passport.jd.com/*
// @exclude     *://jmw.jd.com/*
// @exclude     *://passport.shop.jd.com/*
// @exclude     *://passport.vip.com/*
// @exclude     *://huodong.taobao.com/wow/z/guang/gg_publish/*
// @connect     server.staticj.top
// @connect     res3.doc88.com
// @connect     tt.shuqiandiqiu.com
// @supportURL  https://github.com/Picasso-TX/TKScript/issues
// @updateURL   https://api.staticj.top/script/update/copy-scriptcat.user.js
// @downloadURL https://api.staticj.top/script/update/copy-scriptcat.user.js
// @license     MIT
// @run-at      document-start
// @antifeature referral-link 【此提示为满足GreasyFork社区规范而添加，实际使用无任何强制跳转，代码可查，请知悉】
// @grant       unsafeWindow
// @grant       GM_openInTab
// @grant       GM.openInTab
// @grant       GM_addStyle
// @grant       GM.getValue
// @grant       GM_getValue
// @grant       GM_xmlhttpRequest
// @grant       GM.xmlHttpRequest
// @grant       GM_registerMenuCommand
// @grant       GM_setValue
// @grant       GM.setValue
// ==/UserScript==
(function () {
    'use strict';

    var css_248z$2 = ".__copied-button{align-items:center;background:#000;border-radius:3px;color:#fff;cursor:pointer;display:flex;font-size:12px;justify-content:center;opacity:0;padding:4px 10px;position:absolute;transition:opacity .3s;z-index:-1000}";

    var css_248z$1 = "#select-tooltip,#sfModal,.modal-backdrop,div[id^=reader-helper]{display:none!important}.modal-open{overflow:auto!important}._sf_adjust_body{padding-right:0!important}";

    var css_248z = "@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-moz-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-o-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-ms-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@-moz-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@-o-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@-ms-keyframes fadeOut{0%{opacity:1}to{opacity:0}}.web-toast-kkli9{background:rgba(0,0,0,.7);border-radius:3px;color:#fff;font-size:14px;left:50%;line-height:1;padding:10px;position:fixed;transform:translateX(-50%);-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-o-transform:translateX(-50%);-ms-transform:translateX(-50%);white-space:nowrap;z-index:1e+27}.fadeOut{animation:fadeOut .5s}.fadeIn{animation:fadeIn .5s}";

    /*!
    * 版权说明：原脚本https://github.com/WindrunnerMax/TKScript/ 采用MIT开源协议
    * 本脚本开源地址：https://github.com/Picasso-TX/TKScript 继承原脚本，以MIT协议开源
    *
    * MIT协议是一种开放源代码软件授权协议，全称为Massachusetts Institute of Technology License。
    * 该协议允许自由地使用、复制、修改、合并、发布、分发、再授权和销售软件及其副本的任何部分。
    * MIT协议要求在软件的所有副本中包含版权声明和许可声明
    *
    * 特此声明！
    */
    const DOM_STAGE = {
      START: "document-start",
      END: "document-end"
    };
    const DOM_READY = "DOMContentLoaded";
    const PAGE_LOADED = "load";
    const MOUSE_UP = "mouseup";
    const COPY = "copy";
    const SELECT_START = "selectstart";
    const CONTEXT_MENU = "contextmenu";
    const KEY_DOWN = "keydown";

    const opt = Object.prototype.toString;
    function isString(value) {
      return opt.call(value) === "[object String]";
    }

    const dom$1 = {
      query: function(selector) {
        return document.querySelector(selector);
      },
      attr: function(selector, attr, value) {
        const dom2 = document.querySelector(selector);
        dom2 && dom2.setAttribute(attr, value);
      },
      append: function(selector, content) {
        const container = document.createElement("div");
        if (isString(content)) {
          container.innerHTML = content;
        } else {
          container.appendChild(content);
        }
        const targetDOM = document.querySelector(selector);
        targetDOM && targetDOM.append(container);
        return container;
      },
      remove: function(selector) {
        const targetDOM = document.querySelector(selector);
        targetDOM && targetDOM.remove();
      }
    };

    const initBaseEvent = (websiteConfig) => {
      window.addEventListener(DOM_READY, () => {
        if (websiteConfig.initCopyEvent) {
          document.oncopy = (e) => e.stopPropagation();
          document.body.oncopy = (e) => e.stopPropagation();
          document.addEventListener(COPY, (e) => e.stopPropagation());
          document.body.addEventListener(COPY, (e) => e.stopPropagation());
        }
      });
    };
    const initBaseStyle = () => {
      window.addEventListener(DOM_READY, () => {
        dom$1.append("head", `<style>${css_248z$2}</style>`);
        dom$1.append("head", `<style>${css_248z$1}</style>`);
        dom$1.append("head", `<style>${css_248z}</style>`);
      });
    };

    /*!
     * 外部引用`static.doc88.com`声明
     * 此部分是在处理`doc88.com`才会加载的资源文件，此资源文件由该网站加载时提供
     */
    let path = "";
    const website$o = {
      regexp: /.*doc88\.com\/.+/,
      init: () => {
        dom$1.append(
          "body",
          `<style id="copy-element-hide">#left-menu{display: none !important;}</style>`
        );
        GM_xmlhttpRequest({
          method: "GET",
          url: "https://res3.doc88.com/resources/js/modules/main-v2.min.js?v=2.56",
          onload: function(response) {
            const result = /\("#cp_textarea"\).val\(([\S]*?)\);/.exec(response.responseText);
            if (result)
              path = result[1];
          }
        });
        window.addEventListener("load", () => {
          const cpFn = unsafeWindow.copyText.toString();
          const fnResult = /<textarea[\s\S]*?>'\+([\S]*?)\+"<\/textarea>/.exec(cpFn);
          if (fnResult)
            path = fnResult[1];
        });
      },
      getSelectedText: () => {
        let select = unsafeWindow;
        path.split(".").forEach((v) => {
          select = select[v];
        });
        if (!select) {
          unsafeWindow.Config.vip = 1;
          unsafeWindow.Config.logined = 1;
          dom$1.remove("#copy-element-hide");
        }
        return select;
      }
    };

    const TEXT_PLAIN = "text/plain";
    const TEXT_HTML = "text/html";
    const execCopyCommand = (data) => {
      const textarea = document.createElement("textarea");
      const handler = (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        for (const [key, value] of Object.entries(data)) {
          event.clipboardData && event.clipboardData.setData(key, value);
        }
      };
      textarea.addEventListener(COPY, handler, true);
      textarea.style.position = "fixed";
      textarea.style.left = "-999999999px";
      textarea.style.top = "-999999999px";
      textarea.value = data[TEXT_PLAIN] || " ";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.removeEventListener(COPY, handler);
      document.body.removeChild(textarea);
    };
    const isEmptyContent = (data) => {
      if (!data)
        return true;
      return isString(data) ? !data : !data[TEXT_PLAIN];
    };
    const copy = (data) => {
      const params = isString(data) ? { [TEXT_PLAIN]: data } : data;
      const plainText = params[TEXT_PLAIN];
      if (!plainText)
        return false;
      if (navigator.clipboard && window.ClipboardItem) {
        const dataItems = {};
        for (const [key, value] of Object.entries(params)) {
          const blob = new Blob([value], { type: key });
          dataItems[key] = blob;
        }
        navigator.clipboard.write([new ClipboardItem(dataItems)]).catch(() => {
          execCopyCommand(params);
        });
      } else {
        execCopyCommand(params);
      }
      return true;
    };

    let dom = null;
    let isReadyToHidden = false;
    const instance = {
      id: "__copy",
      className: "__copied-button",
      init: function(name) {
        const container = document.createElement("div");
        container.id = this.id;
        container.className = this.className;
        container.innerText = name || "复制";
        container.addEventListener("mouseup", (e) => e.stopPropagation(), true);
        container.addEventListener("mousedown", (e) => e.stopPropagation(), true);
        dom = container;
        document.body.appendChild(dom);
      },
      getInstance: function() {
        if (dom === null) {
          this.init();
        }
        return dom;
      },
      show: function(event) {
        if (isReadyToHidden)
          return void 0;
        const dom2 = this.getInstance();
        dom2.style.left = `${event.pageX + 30}px`;
        dom2.style.top = `${event.pageY}px`;
        dom2.style.opacity = "1";
        dom2.style.zIndex = "1000";
      },
      hide: function(keep = 350) {
        const dom2 = this.getInstance();
        dom2.style.opacity = "0";
        if (keep) {
          isReadyToHidden = true;
          setTimeout(() => {
            dom2.style.zIndex = "-10000";
            isReadyToHidden = false;
          }, keep);
        }
      },
      onCopy: function(content, event) {
        const dom2 = this.getInstance();
        this.show(event);
        dom2.onclick = () => {
          copy(content);
          this.hide();
        };
      },
      enable: function() {
        const dom2 = this.getInstance();
        dom2.style.display = "flex";
      },
      disable: function() {
        const dom2 = this.getInstance();
        dom2.style.display = "none";
      },
      destroy: function() {
        const el = this.getInstance();
        el.remove();
        dom = null;
      }
    };

    const stopNativePropagation = (event) => {
      event.stopPropagation();
    };
    var utils = {
      hideButton: () => {
        instance.disable();
      },
      showButton: () => {
        instance.enable();
      },
      removeAttributes: (selector, attr = []) => {
        const dom = isString(selector) ? document.querySelector(selector) : selector;
        dom && attr.forEach((item) => dom.removeAttribute(item));
      },
      enableUserSelectByCSS: (css) => {
        const defaultCss = `
      *{-webkit-touch-callout: auto !important;-webkit-user-select: auto !important;-moz-user-select: auto !important;-khtml-user-select: auto !important;-ms-user-select: auto !important;}
    `;
        const style = document.createElement("style");
        style.innerHTML = !!css ? css : defaultCss;
        const head = document.getElementsByTagName("head")[0];
        if (head) {
          head.appendChild(style);
        } else {
          window.addEventListener(
            PAGE_LOADED,
            () => document.getElementsByTagName("head")[0].appendChild(style)
          );
        }
      },
      enableOnSelectStart: (selector) => {
        const dom = document.querySelector(selector);
        dom && dom.addEventListener(SELECT_START, stopNativePropagation);
      },
      enableOnContextMenu: (selector) => {
        const dom = document.querySelector(selector);
        dom && dom.addEventListener(CONTEXT_MENU, stopNativePropagation);
      },
      enableOnCopy: (selector) => {
        const dom = document.querySelector(selector);
        dom && dom.addEventListener(COPY, stopNativePropagation);
      },
      enableOnKeyDown: (selector) => {
        const dom = document.querySelector(selector);
        dom && dom.addEventListener(KEY_DOWN, (e) => {
          if (e.key === "c" && e.ctrlKey)
            return e.stopPropagation();
        });
      },
      enableOnSelectStartByCapture: () => {
        window.addEventListener(SELECT_START, stopNativePropagation, true);
        document.addEventListener(SELECT_START, stopNativePropagation, true);
      },
      enableOnContextMenuByCapture: () => {
        window.addEventListener(CONTEXT_MENU, stopNativePropagation, true);
        document.addEventListener(CONTEXT_MENU, stopNativePropagation, true);
      },
      enableOnCopyByCapture: () => {
        window.addEventListener(COPY, stopNativePropagation, true);
        document.addEventListener(COPY, stopNativePropagation, true);
      },
      enableOnKeyDownByCapture: () => {
        document.addEventListener(
          KEY_DOWN,
          (e) => e.ctrlKey && e.key.toLocaleUpperCase() === "C" && e.stopPropagation(),
          true
        );
      }
    };

    const website$n = {
      regexp: /.*wk\.baidu\.com\/view\/.+/,
      init: function() {
        utils.hideButton();
        utils.enableOnSelectStartByCapture();
        window.onload = () => {
          dom$1.attr(".sf-edu-wenku-vw-container", "style", "");
        };
      }
    };

    const website$m = {
      regexp: /.*zhihu\.com\/.*/,
      init: function() {
        utils.hideButton();
        utils.enableUserSelectByCSS();
        utils.enableOnCopyByCapture();
        if (location.hostname === "zhuanlan.zhihu.com") {
          const removeFocalPointModal = (mutationsList) => {
            for (const mutation of mutationsList) {
              const addedNodes = mutation.addedNodes;
              for (let i = 0; i < addedNodes.length; i++) {
                const target = addedNodes[i];
                if (target.nodeType != 1)
                  return void 0;
                if (target instanceof HTMLDivElement && target.querySelector("[data-focus-scope-start]")) {
                  const element = target.querySelector("[data-focus-scope-start]");
                  element && element.parentElement && element.parentElement.textContent && element.parentElement.textContent.indexOf("立即登录/注册") > -1 && element.parentElement.parentElement && element.parentElement.parentElement.removeChild(element.parentElement);
                }
              }
            }
          };
          const observer = new MutationObserver(removeFocalPointModal);
          observer.observe(document, { childList: true, subtree: true });
        }
      }
    };

    const website$l = {
      regexp: /.*docs\.qq\.com\/.+/,
      config: {
        initCopyEvent: false,
        captureInstance: true,
        delay: 100
      },
      init: function() {
        window.onload = () => {
          utils.hideButton();
        };
      },
      getSelectedText: function() {
        var _a;
        if (unsafeWindow.pad && unsafeWindow.pad.editor && !unsafeWindow.pad.editor.isCopyable()) {
          utils.showButton();
          const editor = unsafeWindow.pad.editor;
          if (editor.getCopyContent) {
            const content = editor.getCopyContent() || {};
            const plainText = content.plain || "";
            const htmlText = content.html || "";
            return {
              [TEXT_PLAIN]: plainText,
              [TEXT_HTML]: htmlText
            };
          } else {
            editor._docEnv.copyable = true;
            editor.clipboardManager.copy();
            const plainText = editor.clipboardManager.customClipboard.plain || "";
            const htmlText = editor.clipboardManager.customClipboard.html || "";
            editor._docEnv.copyable = false;
            return {
              [TEXT_PLAIN]: plainText,
              [TEXT_HTML]: htmlText
            };
          }
        } else if (unsafeWindow.SpreadsheetApp && unsafeWindow.SpreadsheetApp.permissions && unsafeWindow.SpreadsheetApp.permissions.sheetStatus && unsafeWindow.SpreadsheetApp.permissions.sheetStatus.canCopy === false && unsafeWindow.SpreadsheetApp.permissions.sheetStatus.canEdit && unsafeWindow.SpreadsheetApp.permissions.sheetStatus.canEdit() === false) {
          utils.showButton();
          const SpreadsheetApp = unsafeWindow.SpreadsheetApp;
          const [selection] = SpreadsheetApp.view.getSelectionRanges();
          if (selection) {
            const text = [];
            const { startColIndex, startRowIndex, endColIndex, endRowIndex } = selection;
            for (let i = startRowIndex; i <= endRowIndex; i++) {
              for (let k = startColIndex; k <= endColIndex; k++) {
                const cell = SpreadsheetApp.workbook.activeSheet.getCellDataAtPosition(i, k);
                if (!cell)
                  continue;
                text.push(" ", ((_a = cell.formattedValue) == null ? void 0 : _a.value) || cell.value || "");
              }
              i !== endRowIndex && text.push("\n");
            }
            const str = text.join("");
            return /^\s*$/.test(str) ? "" : str;
          }
          return "";
        }
        return "";
      }
    };

    const website$k = {
      regexp: new RegExp("boke112\\.com"),
      init: function() {
        utils.enableOnCopyByCapture();
        const template = `
            <style>
                :not(input):not(textarea)::selection {
                    background-color: #2440B3 !important;
                    color: #fff !important;
                }

                :not(input):not(textarea)::-moz-selection {
                    background-color: #2440B3 !important;
                    color: #fff !important;
                }
            </style>
        `;
        dom$1.append("head", template);
      }
    };

    const website$j = {
      regexp: /diyifanwen/,
      init: function() {
        utils.hideButton();
        utils.enableOnCopyByCapture();
        utils.enableOnKeyDownByCapture();
      }
    };

    const website$i = {
      regexp: /mbalib/,
      init: function() {
        window.onload = () => {
          utils.removeAttributes("fullScreenContainer", ["oncopy", "oncontextmenu", "onselectstart"]);
        };
      }
    };

    const website$h = {
      regexp: new RegExp(".+www.uemeds.cn/.+"),
      init: function() {
        utils.hideButton();
        utils.enableUserSelectByCSS();
      }
    };

    const website$g = {
      regexp: new RegExp(".+aiyuke.com/news/.+"),
      init: function() {
        utils.hideButton();
        utils.enableUserSelectByCSS();
      }
    };

    const website$f = {
      regexp: new RegExp("qidian"),
      init: function() {
        utils.hideButton();
        utils.enableUserSelectByCSS();
        utils.enableOnCopy(".main-read-container");
        utils.enableOnContextMenu(".main-read-container");
      }
    };

    const website$e = {
      regexp: new RegExp("zongheng"),
      init: function() {
        utils.removeAttributes(".reader_box", ["style", "unselectable", "onselectstart"]);
        utils.removeAttributes(".reader_main", ["style", "unselectable", "onselectstart"]);
        utils.hideButton();
        utils.enableOnKeyDown("body");
        utils.enableUserSelectByCSS();
        utils.enableOnCopy(".content");
        utils.enableOnContextMenu("body");
        utils.enableOnSelectStart(".content");
      }
    };

    const website$d = {
      regexp: new RegExp("17k"),
      init: () => {
        utils.hideButton();
        utils.enableOnCopy(".readAreaBox .p");
      }
    };

    const website$c = {
      regexp: new RegExp("ciweimao"),
      init: function() {
        utils.hideButton();
        utils.enableUserSelectByCSS();
        utils.enableOnCopy("#J_BookCnt");
        utils.enableOnContextMenu("body");
        utils.enableOnSelectStart("#J_BookCnt");
      }
    };

    const website$b = {
      regexp: new RegExp("book\\.qq"),
      init: function() {
        utils.hideButton();
        utils.enableOnCopy("body");
        utils.enableUserSelectByCSS();
        utils.enableOnContextMenu("body");
        utils.enableOnSelectStart("body");
      }
    };

    const website$a = {
      regexp: new RegExp("utaten"),
      init: function() {
        utils.hideButton();
        utils.enableUserSelectByCSS();
        utils.enableOnSelectStartByCapture();
      }
    };

    const website$9 = {
      config: {
        runAt: "document-start"
      },
      regexp: new RegExp("wenku.baidu.com/(view|link|aggs).*"),
      init: function() {
        dom$1.append("head", `<style>@media print { body{ display:block; } }</style>`);
        let canvasDataGroup = [];
        const originObject = {
          context2DPrototype: unsafeWindow.document.createElement("canvas").getContext("2d").__proto__
        };
        document.createElement = new Proxy(document.createElement, {
          apply: function(target, thisArg, argumentsList) {
            const element = Reflect.apply(target, thisArg, argumentsList);
            if (argumentsList[0] === "canvas") {
              const tmpData = {
                canvas: element,
                data: []
              };
              element.getContext("2d").fillText = function(...args) {
                tmpData.data.push(args);
                originObject.context2DPrototype.fillText.apply(this, args);
              };
              canvasDataGroup.push(tmpData);
            }
            return element;
          }
        });
        let pageData = {};
        Object.defineProperty(unsafeWindow, "pageData", {
          set: (v) => pageData = v,
          get: function() {
            if (!pageData.vipInfo)
              return pageData.vipInfo = {};
            pageData.vipInfo.global_svip_status = 1;
            pageData.vipInfo.global_vip_status = 1;
            pageData.vipInfo.isVip = 1;
            pageData.vipInfo.isWenkuVip = 1;
            return pageData;
          }
        });
        const templateCSS = [
          "<style id='copy-template-css'>",
          "body{overflow: hidden !important}",
          "#copy-template-html{position: fixed; top: 0; right: 0; bottom: 0; left: 0; display: flex; align-items: center; justify-content: center;z-index: 999999; background: rgba(0,0,0,0.5);}",
          "#copy-template-html > .template-container{height: 80%; width: 80%; background: #fff; }",
          ".template-container > .title-container{display: flex; align-items: center; justify-content: space-between;padding: 10px;border-bottom: 1px solid #eee;}",
          "#copy-template-text{height: 100%; width: 100%;position: relative; overflow: auto;background: #fff;}",
          "#copy-template-html #template-close{cursor: pointer;}",
          "</style>"
        ].join("");
        const render = () => {
          canvasDataGroup = canvasDataGroup.filter((item) => item.canvas.id);
          var templateText = canvasDataGroup.map((canvasData, index) => {
            const computedTop = index * Number(canvasData.canvas.clientHeight);
            const textItem = canvasData.data.map(
              (item) => `<div style="position: absolute; left: ${item[1]}px; top: ${item[2] + computedTop}px">${item[0]}</div>`
            );
            return textItem.join("");
          });
          const editorView = document.querySelector("#editor-view");
          if (editorView) {
            templateText = [editorView.innerHTML];
          }
          const templateHTML = [
            "<div id='copy-template-html'>",
            "<div class='template-container'>",
            "<div class='title-container'>",
            "<div>请自行复制</div>",
            "<div id='template-close'>关闭</div>",
            "</div>",
            "<div id='copy-template-text'>",
            templateText.join(""),
            "</div>",
            "</div>",
            "</div>"
          ].join("");
          dom$1.append("body", templateHTML);
          dom$1.append("body", templateCSS);
          const closeButton = document.querySelector("#copy-template-html #template-close");
          const close = () => {
            dom$1.remove("#copy-template-html");
            dom$1.remove("#copy-template-css");
            closeButton && closeButton.removeEventListener("click", close);
          };
          closeButton && closeButton.addEventListener("click", close);
        };
        document.addEventListener("DOMContentLoaded", () => {
          dom$1.append(
            "head",
            `<style>#copy-btn-wk{padding: 10px; background: rgba(0,0,0,0.5);position: fixed; left:0; top: 40%;cursor: pointer;color: #fff; z-index: 99999;}</style>`
          );
          dom$1.append("body", "<div id='copy-btn-wk'>复制</div>");
          const btn = dom$1.query("#copy-btn-wk");
          btn && (btn.onclick = render);
        });
      },
      getSelectedText: () => {
        if (window.getSelection && (window.getSelection() || "").toString()) {
          return (window.getSelection() || "").toString();
        }
        const result = /查看全部包含“([\s\S]*?)”的文档/.exec(document.body.innerHTML);
        if (result)
          return result[1];
        return "";
      }
    };

    var __async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e2) {
            reject(e2);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e2) {
            reject(e2);
          }
        };
        var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const website$8 = {
      config: {
        runAt: "document-end"
      },
      regexp: new RegExp("taobao.com|tmall.com|jd.com|vip.com|liangxinyao.com|jd.hk|tmall.hk|vipglobal.hk|jkcsjd.com|yiyaojd.com"),
      init: function() {
        const Tools = {
          getParamterBySuffix: function(url = window.location.href, suffix = "html") {
            if (url.indexOf("?") != -1) {
              url = url.split("?")[0];
            }
            if (url.indexOf("#") != -1) {
              url = url.split("#")[0];
            }
            var splitText = url.split("/");
            var idText = splitText[splitText.length - 1];
            idText = idText.replace(".html", "");
            return idText;
          },
          getParamterBySearch: function(paramsString = window.location.href, tag) {
            if (paramsString.indexOf("?") != -1) {
              paramsString = paramsString.split("?")[1];
            }
            const params = new URLSearchParams(paramsString);
            return params.get(tag);
          },
          request: function(mothed, url, param) {
            return new Promise(function(resolve, reject) {
              GM_xmlhttpRequest({
                url,
                method: mothed,
                data: param,
                onload: function(response) {
                  var status = response.status;
                  if (status == 200 || status == "200") {
                    var responseText = response.responseText;
                    resolve({ "code": "ok", "result": responseText });
                  } else {
                    reject({ "code": "exception", "result": null });
                  }
                }
              });
            });
          },
          getElementAsync: function(selector, target = document.body, allowEmpty = true, delay = 10, maxDelay = 10 * 1e3) {
            return new Promise((resolve, reject) => {
              if (selector.toUpperCase() == "BODY") {
                resolve(document.body);
                return;
              }
              if (selector.toUpperCase() == "HTML") {
                resolve(document.html);
                return;
              }
              let totalDelay = 0;
              let element = target.querySelector(selector);
              let result = allowEmpty ? !!element : !!element && !!element.innerHTML;
              if (result) {
                resolve(element);
                return;
              }
              const elementInterval = setInterval(() => {
                if (totalDelay >= maxDelay) {
                  clearInterval(elementInterval);
                  resolve(null);
                  return;
                }
                element = target.querySelector(selector);
                result = allowEmpty ? !!element : !!element && !!element.innerHTML;
                if (result) {
                  clearInterval(elementInterval);
                  resolve(element);
                } else {
                  totalDelay += delay;
                }
              }, delay);
            });
          },
          getLocalStorageValue: function(name, value = null) {
            let storageValue = value;
            if (typeof GM_getValue === "function") {
              storageValue = GM_getValue(name, value);
            } else if (typeof GM.setValue === "function") {
              storageValue = GM.getValue(name, value);
            } else {
              var arr = window.localStorage.getItem(name);
              if (arr != null) {
                storageValue = arr;
              }
            }
            return storageValue;
          },
          setLocalStorageValue: function(name, value) {
            if (typeof GM_setValue === "function") {
              GM_setValue(name, value);
            } else if (typeof GM.setValue === "function") {
              GM.setValue(name, value);
            } else {
              window.localStorage.setItem(name, value);
            }
          },
          openInTab: function(url, options = { "active": true, "insert": true, "setParent": true }) {
            if (typeof GM_openInTab === "function") {
              GM_openInTab(url, options);
            } else {
              GM.openInTab(url, options);
            }
          },
          getPlatform: function(url = window.location.host) {
            let platform = "";
            const isTmall = [/tmall.com/, /tmall\.hk/].map((reg) => reg.test(url)).some((re) => re);
            const isTaobao = [/taobao\.com/, /liangxinyao\.com/].map((reg) => reg.test(url)).some((re) => re);
            const isJd = [/jd\.com/, /jd\.hk/, /yiyaojd\.com/, /jkcsjd\.com/].map((reg) => reg.test(url)).some((re) => re);
            const isVip = [/vip\.com/, /vipglobal\.hk/].map((reg) => reg.test(url)).some((re) => re);
            if (isTmall) {
              platform = "tmall";
            }
            if (isTaobao) {
              platform = "taobao";
            }
            if (isJd) {
              platform = "jd";
            }
            if (isVip) {
              platform = "vpinhui";
            }
            return platform;
          }
        };
        const browsingHistoryLocalStorageKey = "browsing_history_local_storage_key";
        const discoverCoupon = {
          generateIsResult: true,
          isRun: function() {
            const currentHost = window.location.host;
            return [
              "detail.tmall.com",
              "item.taobao.com",
              "item.jd.com",
              "item.yiyaojd.com",
              "npcitem.jd.hk",
              "detail.tmall.hk",
              "detail.vip.com",
              "item.jkcsjd.com"
            ].map((host) => currentHost.indexOf(host) != -1).some((result) => result);
          },
          encodeTitle: function(title) {
            if (!title) {
              return "";
            }
            title = title.replace(/\t|\r/g, "");
            return encodeURIComponent(title);
          },
          getGoodsInfo: function(platform) {
            var goodsId = "";
            var goodsName = "";
            const href = window.location.href;
            if (platform == "taobao") {
              goodsId = Tools.getParamterBySearch(window.location.search, "id");
              try {
                const titleObj = document.querySelector("[class^='ItemTitle--']");
                if (!!titleObj) {
                  goodsName = titleObj.textContent;
                }
              } catch (e2) {
              }
            } else if (platform == "tmall") {
              goodsId = Tools.getParamterBySearch(window.location.search, "id");
              try {
                const titleObj = document.querySelector("[class^='ItemTitle--']");
                if (!!titleObj) {
                  goodsName = titleObj.textContent;
                }
              } catch (e2) {
              }
            } else if (platform == "jd") {
              goodsId = Tools.getParamterBySuffix(href);
              try {
                const titleObj = document.querySelector("[class='sku-name']");
                if (!!titleObj) {
                  goodsName = titleObj.textContent;
                }
              } catch (e2) {
              }
            } else if (platform == "vpinhui") {
              goodsId = Tools.getParamterBySuffix(href).replace("detail-", "");
              const titleObj = document.querySelector("[class='pib-title-detail']");
              if (!!titleObj) {
                goodsName = titleObj.textContent;
              }
            }
            return { "goodsId": goodsId, "goodsName": this.encodeTitle(goodsName) };
          },
          browsingHistory: function(platform, goodsId) {
            let histories = Tools.getLocalStorageValue(browsingHistoryLocalStorageKey, []);
            let saveContent = platform + "_" + goodsId;
            if (!histories.includes(saveContent)) {
              histories.unshift(saveContent);
              Tools.setLocalStorageValue(browsingHistoryLocalStorageKey, histories.slice(0, 60));
            }
          },
          getHandlerElement: function(handler) {
            return __async(this, null, function* () {
              const getElement = (handler2) => __async(this, null, function* () {
                const promiseArray = [];
                const handlers = handler2.split("@");
                for (let i = 0; i < handlers.length; i++) {
                  const eleName = handlers[i];
                  if (!eleName) {
                    continue;
                  }
                  if (eleName == "body") {
                    promiseArray.push(
                      new Promise((resolve, reject) => {
                        resolve(document.body);
                      })
                    );
                  } else if (eleName == "html") {
                    promiseArray.push(
                      new Promise((resolve, reject) => {
                        resolve(document.html);
                      })
                    );
                  } else {
                    promiseArray.push(Tools.getElementAsync(eleName, document.body, true, 10, 1500));
                  }
                }
                const element2 = yield Promise.race(promiseArray);
                return element2 ? element2 : null;
              });
              const element = yield getElement(handler);
              return new Promise((resolve, reject) => {
                resolve(element);
              });
            });
          },
          generateHtml: function(platform, goodsId, goodsName) {
            return __async(this, null, function* () {
              if (!platform || !goodsId) {
                return "kong";
              }
              let addition = "";
              if (platform == "vpinhui") {
                const vip = goodsId.split("-");
                addition = vip[0];
                goodsId = vip[1];
              }
              this.browsingHistory(platform, goodsId);
              const goodsCouponUrl = "https://tt.shuqiandiqiu.com/api/coupon/query?no=3&version=1.0.2&platform=" + platform + "&id=" + goodsId + "&q=" + goodsName + "&addition=" + addition;
              try {
                const data = yield Tools.request("GET", goodsCouponUrl, null);
                if (data.code == "ok" && !!data.result) {
                  const json = JSON.parse(data.result);
                  yield this.generateCoupon(platform, json.data);
                  yield this.generateQrcode(platform, json.mscan);
                  let heartms = 0;
                  const HEART_DELAY = 1500, MAX_MS = 1e3 * 30;
                  const generateResultInterval = setInterval(() => __async(this, null, function* () {
                    if (this.generateIsResult) {
                      if (document.querySelector("*[name='exist-llkbccxs-9246-hi']") || heartms >= MAX_MS) {
                        clearInterval(generateResultInterval);
                      } else {
                        yield this.generateCoupon(platform, json.data);
                      }
                    }
                    heartms += HEART_DELAY;
                  }), HEART_DELAY);
                }
              } catch (e2) {
                console.log(e2);
              }
            });
          },
          generateCoupon: function(platform, result) {
            return __async(this, null, function* () {
              try {
                this.generateIsResult = false;
                if (!result || result === "null" || !result.hasOwnProperty("css") || !result.hasOwnProperty("html") || !result.hasOwnProperty("handler")) {
                  return;
                }
                const { css, html, handler, templateId } = result;
                if (!css || !html || !handler) {
                  return;
                }
                GM_addStyle(css);
                const handlerElement = yield this.getHandlerElement(handler);
                if (!handlerElement) {
                  return;
                }
                if (platform == "taobao") {
                  handlerElement.parentNode.insertAdjacentHTML("afterend", html);
                } else if (platform == "tmall") {
                  handlerElement.parentNode.insertAdjacentHTML("afterend", html);
                } else if (platform == "jd") {
                  handlerElement.insertAdjacentHTML("afterend", html);
                } else if (platform == "vpinhui") {
                  handlerElement.insertAdjacentHTML("afterend", html);
                }
                const templateElement = document.querySelector("div[id='" + templateId + "']");
                if (!templateElement) {
                  return;
                }
                const couponId = templateElement.getAttribute("data-id");
                const goodsPrivateUrl = "https://tt.shuqiandiqiu.com/api/private/change/coupon?no=3&v=1.0.2&platform=" + platform + "&id=";
                if (!/\d/.test(couponId)) {
                  return;
                }
                setInterval(() => {
                  templateElement.querySelectorAll("*").forEach((element) => {
                    element.removeAttribute("data-spm-anchor-id");
                  });
                }, 400);
                const couponElementA = templateElement.querySelector("a[name='cpShUrl']"), clickedTag = "aclicked";
                if (couponElementA) {
                  couponElementA.addEventListener("click", () => {
                    event.stopPropagation();
                    event.preventDefault();
                    if (couponElementA.getAttribute(clickedTag)) {
                      return;
                    }
                    couponElementA.setAttribute(clickedTag, "true");
                    const href = couponElementA.getAttribute("href");
                    if (href && href.indexOf("https://") != -1) {
                      Tools.openInTab(href);
                      couponElementA.removeAttribute(clickedTag);
                    } else {
                      Tools.request("GET", goodsPrivateUrl + couponId, null).then((privateResultData) => {
                        if (privateResultData.code === "ok" && !!privateResultData.result) {
                          let url = JSON.parse(privateResultData.result).url;
                          if (url) {
                            Tools.openInTab(url);
                          }
                        }
                        couponElementA.removeAttribute(clickedTag);
                      }).then(() => {
                        couponElementA.removeAttribute(clickedTag);
                      });
                    }
                  });
                }
                const canvasElement = document.querySelector("#ca" + templateId);
                if (!canvasElement) {
                  return;
                }
                const qrcodeResultData = yield Tools.request("GET", goodsPrivateUrl + couponId, null);
                if (!!qrcodeResultData && qrcodeResultData.code === "ok" && !!qrcodeResultData.result) {
                  let img = JSON.parse(qrcodeResultData.result).img;
                  if (!!img) {
                    let cxt = canvasElement.getContext("2d");
                    let imgData = new Image();
                    imgData.src = img;
                    imgData.onload = function() {
                      cxt.drawImage(imgData, 0, 0, imgData.width, imgData.height);
                    };
                  }
                }
              } catch (e2) {
                console.log(e2);
              } finally {
                this.generateIsResult = true;
              }
            });
          },
          generateQrcode: function(platform, mscan) {
            return __async(this, null, function* () {
              if (!mscan || mscan === "null" || !mscan.hasOwnProperty("mount") || !mscan.hasOwnProperty("html") || !mscan.hasOwnProperty("qrcode")) {
                return;
              }
              const { mount, html, qrcode, iden } = mscan;
              if (!!mount && !!html && !!qrcode && !!iden) {
                const mountElement = yield Tools.getElementAsync(mount, document.body, true, 10, 1500);
                if (mountElement) {
                  mountElement.insertAdjacentHTML("afterend", html);
                  let canvasElement = document.getElementById("mscan" + iden);
                  let width = canvasElement.getAttribute("width");
                  let height = canvasElement.getAttribute("height");
                  let cxt = canvasElement.getContext("2d");
                  let imgData = new Image();
                  imgData.src = qrcode;
                  imgData.onload = function() {
                    cxt.drawImage(imgData, 0, 0, width, height);
                  };
                }
              }
            });
          },
          skuConstraints: function(platform) {
            if (platform == "tmall" || platform == "taobao") {
              Tools.getElementAsync("[class='skuItemWrapper']", document.body, false, 10, 1500).then((skuItemWrapper) => {
                if (skuItemWrapper != null) {
                  const { style } = skuItemWrapper;
                  style.maxHeight = "400px";
                  style.overflow = "auto";
                }
              }).catch(() => {
                console.log(e);
              });
            } else if (platform == "jd") {
              const skuItemWrapper = document.querySelector("#choose-attrs");
              if (skuItemWrapper) {
                const { style } = skuItemWrapper;
                style.maxHeight = "400px";
                style.overflow = "auto";
              }
            }
          },
          start: function() {
            if (!this.isRun()) {
              return;
            }
            const platform = Tools.getPlatform();
            if (!platform) {
              return;
            }
            this.skuConstraints(platform);
            const goodsData = this.getGoodsInfo(platform);
            this.generateHtml(platform, goodsData.goodsId, goodsData.goodsName);
          }
        };
        const couponSearch = {
          browsedHtml: `<div style="position:absolute;white-space: nowrap; top:7px;padding:2px 5px;font-size:11px;background-color:rgb(3,106,251);color:#FFF;z-index:9999999999;border-radius:20px;right:10px;"><b>已浏览</b></div>`,
          intervalIsRunComplete: true,
          getHistories: function() {
            return Tools.getLocalStorageValue(browsingHistoryLocalStorageKey, []);
          },
          isRun: function() {
            const visitHref = window.location.href;
            return [
              /^https:\/\/www\.taobao\.com(\/|\/\?)?/i,
              /^https:\/\/s\.taobao\.com/i,
              /^https:\/\/shop(\d+)\.taobao\.com/i,
              /^https:\/\/www\.tmall\.com(\/|\/\?)?/i,
              /pages\.tmall\.com/i,
              /list\.tmall\.com/i,
              /list\.tmall\.hk/i,
              /tmall\.com\/category/i,
              /tmall\.com\/search/i,
              /tmall\.com\/shop/i,
              /tmall\.com\/\?q=/i,
              /maiyao\.liangxinyao\.com/i,
              /^https:\/\/www\.jd\.com(\/|\/\?)?/i,
              /search\.jd\.com/i,
              /search\.jd\.hk/i,
              /pro\.jd\.com\/mall/i,
              /jd\.com\/view_search/i,
              /category\.vip\.com/i,
              /list\.vip\.com/i
            ].map((reg) => new RegExp(reg).test(visitHref)).some((res) => res);
          },
          requestConf: function() {
            return new Promise((resolve, reject) => {
              Tools.request("GET", "https://tt.shuqiandiqiu.com/api/plugin/load/conf", null).then((data) => {
                if (data.code == "ok" && !!data.result) {
                  resolve(data.result);
                } else {
                  resolve(null);
                }
              });
            });
          },
          pickupElements: function(confString) {
            const visitHref = window.location.href;
            const selectorElementList = new Array();
            let confFilter = confString;
            try {
              confFilter = confFilter.replace(/\\\\/g, "\\");
            } catch (e2) {
            }
            const confJson = JSON.parse(confFilter);
            for (let key in confJson) {
              if (!confJson.hasOwnProperty(key)) {
                continue;
              }
              for (let i = 0; i < confJson[key].length; i++) {
                const itemJson = confJson[key][i];
                if (!itemJson.hasOwnProperty("elements") || !itemJson.hasOwnProperty("matches")) {
                  continue;
                }
                const { elements, matches } = itemJson;
                const isMatch = matches.map((reg) => new RegExp(reg, "i").test(visitHref)).some((res) => res);
                if (isMatch) {
                  for (let j = 0; j < elements.length; j++) {
                    selectorElementList.push({
                      "element": elements[j]["element"],
                      "findA": elements[j]["findA"],
                      "page": elements[j]["page"]
                    });
                  }
                }
              }
            }
            return selectorElementList;
          },
          transformElements: function(selectors) {
            const items = [];
            selectors.forEach((elementObj) => {
              if (elementObj.element) {
                const elements = document.querySelectorAll(elementObj.element);
                elements.forEach((element) => {
                  if (element) {
                    items.push({ "element": element, "findA": elementObj.findA, "page": elementObj.page });
                  }
                });
              }
            });
            if (items.length > 0) {
              this.queryAll(items);
            }
          },
          queryAll: function(items) {
            this.intervalIsRunComplete = false;
            const promises = [];
            const histories = this.getHistories();
            items.forEach((item) => {
              promises.push(this.queryOne(item, histories));
            });
            Promise.all(promises).then((result) => {
              this.intervalIsRunComplete = true;
            });
          },
          queryOne: function(item, histories) {
            const { element, page, findA } = item;
            const self = this;
            return new Promise(function(resolve, reject) {
              if (element.getAttribute("querycxll")) {
                resolve("processed");
                return;
              }
              element.setAttribute("querycxll", "true");
              element.style.position = "relative";
              element.addEventListener("click", function(e2) {
                element.insertAdjacentHTML("beforeend", self.browsedHtml);
              });
              let goodsDetailUrl = null;
              if (findA === "this") {
                goodsDetailUrl = element.getAttribute("href");
              } else if (/^child@/.test(findA)) {
                const elementA = element.querySelector(findA.replace(/^child@/, ""));
                if (elementA) {
                  goodsDetailUrl = elementA.getAttribute("href");
                }
              }
              if (!goodsDetailUrl) {
                resolve("exception-url-null");
                return;
              }
              let analysisData = null;
              if (/^jd_/.test(page)) {
                let jdId = Tools.getParamterBySuffix(goodsDetailUrl);
                if (!!jdId)
                  analysisData = { "id": jdId, "platform": "jd" };
              } else if (/^vpinhui_/.test(page)) {
                let vipId = Tools.getParamterBySuffix(goodsDetailUrl).replace("detail-", "");
                if (!!vipId) {
                  analysisData = { "id": vipId.split("-")[1], "platform": "vpinhui" };
                }
              } else {
                let platform = Tools.getPlatform(goodsDetailUrl);
                let id = Tools.getParamterBySearch(goodsDetailUrl, "id");
                if (platform && id) {
                  analysisData = { "id": id, "platform": platform };
                }
              }
              if (!analysisData) {
                resolve("exception-data-null");
                return;
              }
              if (histories.includes(analysisData.platform + "_" + analysisData.id)) {
                element.insertAdjacentHTML("beforeend", self.browsedHtml);
              }
              const searchUrl = "https://tt.shuqiandiqiu.com/api/ebusiness/q/c?p=" + analysisData.platform + "&id=" + analysisData.id + "&no=3";
              Tools.request("GET", searchUrl, null).then((data) => {
                if (data.code == "ok" && !!data.result) {
                  const { tip, encryptLink } = JSON.parse(data.result);
                  if (tip) {
                    element.insertAdjacentHTML("beforeend", tip);
                  }
                  if (encryptLink) {
                    let decryptUrl = null;
                    try {
                      const decryptLink = atob(encryptLink);
                      decryptUrl = decryptLink.split("").reverse().join("");
                    } catch (e2) {
                    }
                    if (decryptUrl) {
                      self.relativeJu(page, element, decryptUrl);
                    }
                  }
                }
                resolve("success");
              }).catch(() => {
                resolve("error");
              });
            });
          },
          relativeJu: function(page, element, decryptUrl) {
            try {
              if (page.indexOf("jd_") != -1) {
                element.querySelectorAll("a").forEach((element_a) => {
                  if (element_a.getAttribute("href").indexOf("item.jd.com") != -1) {
                    element_a.removeAttribute(onclick);
                    element_a.addEventListener("click", function(e2) {
                      e2.preventDefault();
                      e2.stopPropagation();
                      Tools.openInTab(decryptUrl);
                    });
                  }
                });
              } else if (page.indexOf("taobao_") != -1 || page.indexOf("tmall_") != -1) {
                element.addEventListener("click", function(e2) {
                  const target = e2.target;
                  const tagName = target.tagName.toUpperCase();
                  let isPreventDefault = false;
                  if (tagName === "A") {
                    const href = target.getAttribute("href");
                    const isDetail = [/detail\.tmall\.com\/item\.htm/, /item\.taobao\.com\/item\.htm/].map((reg) => reg.test(href)).some((result) => result);
                    if (isDetail) {
                      isPreventDefault = true;
                    }
                  } else {
                    isPreventDefault = true;
                  }
                  if (isPreventDefault) {
                    e2.preventDefault();
                    e2.stopPropagation();
                    Tools.openInTab(decryptUrl);
                  }
                });
              } else if (page.indexOf("vpinhui_") != -1) {
                element.querySelectorAll("a").forEach((element_a) => {
                  if (element_a.getAttribute("href").indexOf("detail.vip.com/detail-") != -1) {
                    element_a.addEventListener("click", function(e2) {
                      e2.preventDefault();
                      e2.stopPropagation();
                      Tools.openInTab(decryptUrl);
                    });
                  }
                });
              }
            } catch (e2) {
              console.log(e2);
            }
          },
          start: function() {
            if (this.isRun()) {
              this.requestConf().then((confString) => {
                const selectors = this.pickupElements(confString);
                if (this.intervalIsRunComplete) {
                  this.transformElements(selectors);
                }
                setInterval(() => {
                  if (this.intervalIsRunComplete) {
                    this.transformElements(selectors);
                  }
                }, 1500);
              });
            }
          }
        };
        discoverCoupon.start();
        couponSearch.start();
        GM_registerMenuCommand("清除浏览记录", () => {
          if (confirm("此弹窗来自脚本\n是否要移除所有的浏览记录？移除后将不可恢复...")) {
            Tools.setLocalStorageValue(browsingHistoryLocalStorageKey, []);
          }
        });
      }
    };

    const website$7 = {
      regexp: /csdn/,
      init: function() {
        utils.hideButton();
        utils.enableOnCopyByCapture();
        utils.enableUserSelectByCSS();
      }
    };

    const website$6 = {
      regexp: new RegExp("bilibili"),
      init: function() {
        utils.hideButton();
        utils.enableOnCopyByCapture();
      }
    };

    const website$5 = {
      regexp: new RegExp("cnki"),
      init: function() {
        utils.hideButton();
        utils.enableOnContextMenuByCapture();
        utils.enableOnKeyDownByCapture();
        utils.enableOnCopyByCapture();
      }
    };

    const website$4 = {
      regexp: new RegExp("docin.com/.*"),
      config: {
        initCopyEvent: false,
        captureInstance: true,
        delay: 100
      },
      init: function() {
        window.addEventListener(PAGE_LOADED, () => {
          var _a;
          return (_a = dom$1.query("#j_select")) == null ? void 0 : _a.click();
        });
        dom$1.append("head", "<style>#reader-copy-el{display: none;}</style>");
      },
      getSelectedText: function() {
        if (unsafeWindow.docinReader && unsafeWindow.docinReader.st) {
          return unsafeWindow.docinReader.st;
        }
        return "";
      }
    };

    const website$3 = {
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
          "vcsmemo\\.com",
          "www\\.lyrical-nonsense\\.com",
          "tongxiehui\\.net",
          "www\\.xuexila\\.com",
          "www\\.ruiwen\\.com",
          "cooco\\.net\\.cn",
          "www\\.51test\\.net"
        ].join("|")
      ),
      init: function() {
        utils.hideButton();
        utils.enableUserSelectByCSS();
        utils.enableOnCopyByCapture();
      }
    };

    const website$2 = {
      regexp: new RegExp([
        "rrdynb",
        "fuwu7",
        "jinrilvsi\\.com",
        "www\\.9136\\.com",
        "www\\.jdxzz\\.com",
        "www\\.gaosan\\.com",
        "lqsbcl\\.net"
      ].join("|")),
      init: function() {
        utils.hideButton();
        utils.enableUserSelectByCSS();
        utils.enableOnCopyByCapture();
        utils.enableOnKeyDownByCapture();
        utils.enableOnSelectStartByCapture();
        utils.enableOnContextMenuByCapture();
      }
    };

    const website$1 = {
      config: {
        runAt: DOM_STAGE.START
      },
      regexp: new RegExp(["examcoo"].join("|")),
      init: function() {
        utils.hideButton();
        utils.enableUserSelectByCSS();
        utils.enableOnCopyByCapture();
        utils.enableOnKeyDownByCapture();
        utils.enableOnSelectStartByCapture();
        utils.enableOnContextMenuByCapture();
      }
    };

    const kdoc = {
      config: {
        runAt: DOM_STAGE.START
      },
      regexp: new RegExp("kdocs"),
      init: function() {
        const patch = () => {
          unsafeWindow.APP && (unsafeWindow.APP.canCopy = () => true);
        };
        if (unsafeWindow.APP) {
          patch();
        } else {
          let APP = void 0;
          Object.defineProperty(unsafeWindow, "APP", {
            configurable: false,
            set: (value) => {
              APP = value;
              value && patch();
            },
            get: () => APP
          });
        }
      }
    };

    const website = {
      config: {
        runAt: DOM_STAGE.END
      },
      regexp: new RegExp(
        [
          "16map\\.com",
          "ai-bot\\.cn"
        ].join("|")
      ),
      init: function() {
        utils.hideButton();
        utils.enableUserSelectByCSS(
          `
      body * :not(input):not(textarea) {-webkit-touch-callout: auto !important;-webkit-user-select: auto !important;-moz-user-select: auto !important;-khtml-user-select: auto !important;-ms-user-select: auto !important;}
    `
        );
      }
    };

    const websites = [
      website$n,
      website$m,
      website$l,
      website$k,
      website$j,
      website$i,
      website$h,
      website$g,
      website$f,
      website$e,
      website$d,
      website$c,
      website$b,
      website$a,
      website$9,
      website$8,
      website$o,
      website$7,
      website$6,
      website$5,
      website$4,
      kdoc,
      website$3,
      website$2,
      website$1,
      website
    ];

    let siteGetSelectedText = null;
    const initWebsite = () => {
      let websiteConfig = {
        initCopyEvent: true,
        runAt: DOM_STAGE.END,
        captureInstance: false,
        delay: 0
      };
      const mather = (regex, website) => {
        if (regex.test(window.location.href)) {
          if (website.config)
            websiteConfig = Object.assign(websiteConfig, website.config);
          if (websiteConfig.runAt === DOM_STAGE.END) {
            window.addEventListener(DOM_READY, () => website.init());
          } else {
            website.init();
          }
          if (website.getSelectedText)
            siteGetSelectedText = website.getSelectedText;
          return true;
        }
        return false;
      };
      websites.some((website) => mather(website.regexp, website));
      return websiteConfig;
    };
    const getSelectedText = () => {
      if (siteGetSelectedText)
        return siteGetSelectedText();
      if (window.getSelection)
        return (window.getSelection() || "").toString();
      if (document.getSelection)
        return (document.getSelection() || "").toString();
      if (document.selection)
        return document.selection.createRange().text;
      return "";
    };

    (function() {
      const websiteConfig = initWebsite();
      initBaseEvent(websiteConfig);
      initBaseStyle();
      window.addEventListener(
        MOUSE_UP,
        (e) => {
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

}());
