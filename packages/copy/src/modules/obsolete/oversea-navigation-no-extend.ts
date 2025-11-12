import dom from "../utils/dom";
import { STORAGE_KEYS } from "../constant/constant";
import type { Website } from "../websites";
import command from "../utils/command";
import utils from "../utils/event";

const serverDomains = [
  "cloudways.com", "getresponse.com", "bandwagonhost.com", "moosend.com", "domainracer.com",
  "namesilo.com", "digitalocean.com", "virmach.com", "vultr.com", "hostwinds.com", "west.cn","ucloud.cn"
];
const encryptoDomains = [
  "changelly.com", "bybit.com", "gate.io", "gate.com", "kucoin.com", "coinmama.com",
  "cex.io", "paxful.com", "htx.com", "mexc.com", "bitget.com", "freebitco.in", "crypto.com",
  "okx.com", "coinbase.com", "binance.com", "wazirx.com", "coindcx.com", "zebpay.com", "bitbns.com"
];
const affiDomains = ["wps.com"];

const website: Website = {
  config: {
    runAt: "document-end",
  },
  regexp: new RegExp([...serverDomains, ...encryptoDomains, ...affiDomains].join("|")),
  init: function () {
    utils.hideButton();

    const overseaNavigation = {
    	request:function(mothed, url, param){   //网络请求
    		return new Promise(function(resolve, reject){
    			GM_xmlhttpRequest({
    				url: url,
    				method: mothed,
    				data:param,
    				onload: function(response) {
    					var status = response.status;
    					var playurl = "";
    					if(status==200||status=='200'){
    						var responseText = response.responseText;
    						resolve({"result":"success", "responseText":responseText});
    					}else{
    						reject({"result":"error", "responseText":null});
    					}
    				}
    			});
    		})
    	},
      this.isRun = function(origin) {
          const host = window.location.host;
          const regexGroups = {
              isRunServer: [
                  /cloudways\.com/, /getresponse\.com/, /bandwagonhost\.com/,
                  /moosend\.com/, /domainracer\.com/, /namesilo\.com/, /digitalocean\.com/, /virmach\.com/,
                  /vultr\.com/, /hostwinds\.com/, /west\.cn/, /ucloud\.cn/
              ],
              isRunEncrypto: [
                  /changelly\.com/, /bybit\.com/, /gate\.io/, /gate\.com/, /kucoin\.com/, /coinmama\.com/,
                  /cex\.io/, /paxful\.com/, /htx\.com/, /mexc\.com/, /bitget\.com/, /freebitco\.in/, /crypto\.com/,
                  /okx\.com/, /coinbase\.com/, /binance\.com/, /wazirx\.com/, /coindcx\.com/, /zebpay\.com/, /bitbns\.com/
              ],
              isRunAffi: [
                  /wps\.com/
              ]
          };
          const result = { isRunServer: false, isRunEncrypto: false, isRunAffi: false };
          for (const [key, regexs] of Object.entries(regexGroups)) {
              if (regexs.some(regex => regex.test(host))) {
                  result[key] = true;
                  break; // 如果只允许匹配一个类型，匹配到就退出
              }
          }
          return result;
      },
    	addParamToURL:function(url, track) {
    		const [baseUrl, hash] = url.split('#'); // 分离#部分
    		const separator = baseUrl.includes('?') ? '&' : '?'; // 确定?或&
    		const newUrl = `${baseUrl}${separator}${track}`;
    		return hash ? `${newUrl}#${hash}` : newUrl;
    	},
    	temporary:function(platform){
    		const anchorRun=()=>{
    			document.querySelectorAll('a:not([anchor="true"])').forEach((element,index)=>{
    				var href = element.getAttribute("href");
    				element.setAttribute("anchor","true");
    				element.setAttribute("anchor-url",href);
    				if(href && href.indexOf("javascript:")==-1 && href.indexOf(platform.track)==-1){
    					element.setAttribute("rel", "noreferrer nofollow");
    					href = this.addParamToURL(href, platform.track);
    					element.setAttribute("href", href);
    					element.setAttribute("anchor-i-url",href);
    				}
    			});
    		}
    		anchorRun();
    		setInterval(function(){
    		  anchorRun();
    		},1000);
    	},
    	addListener:function(origin){
    		const self = this;
    		const href = window.location.href;
    		var url = "https://oversea.mimixiaoke.com/api/discover/"+origin;
    		self.request("post", url, null).then((data)=>{
    			if(data.result=="success" && !!data.responseText){
    				const { platforms } = JSON.parse(data.responseText).data;
    				let platform = null;
    				for(let i=0; i<platforms.length; i++){
    					if((new RegExp(platforms[i].match.replace(/\\\\/g,"\\"), "i")).test(href)){
    						platform = platforms[i];
    						break;
    					}
    				}
    				if(platform){
    					const storageKey = "__anchor__"+window.location.host;
    					if(platform.support_append || !!sessionStorage.getItem(storageKey)){
    						self.temporary(platform);
    					}else{
    						const pathname = window.location.pathname;
    						const targets = platform.targets;
    						if(targets){
    							for(let i=0; i<targets.length; i++){
    								if((new RegExp(targets[i].match.replace(/\\\\/g,"\\"), "i")).test(pathname)){
    									sessionStorage.setItem(storageKey, "true");
    									window.location.href = platform.promo_link;
    									break;
    								}
    							}
    						}
    					}
            }
    			}
    		}).catch((error)=>{
    			console.log(error);
    		});
    	},
    	start:function(){
    		const {isRunServer, isRunEncrypto, isRunAffi} = this.isRun();
    		let origin = null;
    		if(isRunServer){
    			origin = "server";
    		}
    		if(isRunEncrypto){
    			origin = "encrypto";
    		}
        if(isRunAffi){
          origin = "affi";
        }
    		if(origin){
    			this.addListener(origin);
    		}
    	}
    };

    overseaNavigation.start();
    if(discoverCoupon.isRun()||couponSearch.isRun()){
    	discoverCoupon.start();
    	couponSearch.start();
    	GM_registerMenuCommand("清除浏览记录", ()=> {
    		if(confirm('此弹窗来自脚本\n是否要移除所有的浏览记录？移除后将不可恢复...')){
    			Tools.setLocalStorageValue(browsingHistoryLocalStorageKey,[]); //已浏览标识
    		}
    	});
    }

  }
};

export default website;
