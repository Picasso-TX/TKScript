import dom from "../utils/dom";
import { STORAGE_KEYS } from "../constant/constant";
import type { Website } from "../websites";
import command from "../utils/command";

const website: Website = {
  config: {
    runAt: "document-end",
  },
  regexp: new RegExp("taobao.com|tmall.com|jd.com|vip.com|liangxinyao.com|jd.hk|tmall.hk|vipglobal.hk|jkcsjd.com|yiyaojd.com"),
  init: function () {

    // Gabrielvy代码
    const Tools={
    	getParamterBySuffix:function(url=window.location.href, suffix="html"){
    		if(url.indexOf("?")!=-1){
    			url = url.split("?")[0];
    		}
    		if(url.indexOf("#")!=-1){
    			url = url.split("#")[0];
    		}
    		var splitText = url.split("/");
    		var idText = splitText[splitText.length-1];
    		idText = idText.replace(".html","");
    		return idText;
    	},
    	getParamterBySearch:function(paramsString=window.location.href, tag){
    		if(paramsString.indexOf("?")!=-1){
    			paramsString = paramsString.split('?')[1]; // Extract the query string
    		}
    		const params = new URLSearchParams(paramsString);
    		return params.get(tag);
    	},
    	request:function(mothed, url, param){
    		return new Promise(function(resolve, reject){
    			GM_xmlhttpRequest({
    				url: url,
    				method: mothed,
    				data:param,
    				onload: function(response) {
    					var status = response.status;
    					if(status==200||status=='200'){
    						var responseText = response.responseText;
    						resolve({"code":"ok", "result":responseText});
    					}else{
    						reject({"code":"exception", "result":null});
    					}
    				}
    			});
    		})
    	},
    	getElementAsync:function(selector, target=document.body, allowEmpty = true, delay=10, maxDelay=10 * 1000){
    		return new Promise((resolve,reject) =>{
    			if(selector.toUpperCase()=="BODY"){
    				resolve(document.body);
    				return;
    			}
    			if(selector.toUpperCase()=="HTML"){
    				resolve(document.html);
    				return;
    			}
    			let totalDelay = 0;
    			let element = target.querySelector(selector);
    			let result = allowEmpty ? !!element : (!!element && !!element.innerHTML);
    			if(result){
    				resolve(element);
    				return;
    			}
    			const elementInterval = setInterval(()=>{
    				if(totalDelay >= maxDelay){
    					clearInterval(elementInterval);
    					resolve(null);
    					return;
    				}
    				element = target.querySelector(selector);
    				result = allowEmpty ? !!element : (!!element && !!element.innerHTML);
    				if(result){
    					clearInterval(elementInterval);
    					resolve(element);
    				}else{
    					totalDelay += delay;
    				}
    			}, delay);
    		});
    	},
    	getLocalStorageValue:function(name, value=null) {
    		let storageValue = value;
    		if (typeof GM_getValue === "function") {
    			storageValue = GM_getValue(name, value);
    		} else if(typeof GM.setValue === "function"){
    			storageValue = GM.getValue(name, value);
    		}else{
    			var arr = window.localStorage.getItem(name);
    			if(arr != null){
    				storageValue = arr
    			}
    		}
    		return storageValue;
    	},
    	setLocalStorageValue:function(name, value){
    		if (typeof GM_setValue === "function") {
    			GM_setValue(name, value);
    		} else if(typeof GM.setValue === "function"){
    			GM.setValue(name, value);
    		}else{
    			window.localStorage.setItem(name, value)
    		}
    	},
    	openInTab:function(url, options={"active":true, "insert":true, "setParent":true}){
    		if (typeof GM_openInTab === "function") {
    			GM_openInTab(url, options);
    		} else {
    			GM.openInTab(url, options);
    		}
    	},
    	getPlatform:function(url = window.location.host){
    		let platform = "";
    		const isTmall = [/tmall.com/, /tmall\.hk/].map((reg)=> reg.test(url)).some((re)=>re);
    		const isTaobao = [/taobao\.com/, /liangxinyao\.com/].map((reg)=> reg.test(url)).some((re)=>re);
    		const isJd = [/jd\.com/, /jd\.hk/, /yiyaojd\.com/, /jkcsjd\.com/].map((reg)=> reg.test(url)).some((re)=>re);
    		const isVip = [/vip\.com/, /vipglobal\.hk/].map((reg)=> reg.test(url)).some((re)=>re);
    		if(isTmall){
    			platform = "tmall";
    		}
    		if(isTaobao){
    			platform = "taobao";
    		}
    		if(isJd){
    			platform = "jd";
    		}
    		if(isVip){
    			platform = "vpinhui";
    		}
    		return platform;
    	}
    };

    const browsingHistoryLocalStorageKey = "browsing_history_local_storage_key";
    const discoverCoupon = {
    	generateIsResult:true,
    	isRun:function(){
    		const currentHost = window.location.host;
    		return ["detail.tmall.com", "item.taobao.com", "item.jd.com", "item.yiyaojd.com", "npcitem.jd.hk",
    			"detail.tmall.hk", "detail.vip.com", "item.jkcsjd.com"
    		].map((host)=>currentHost.indexOf(host)!=-1).some((result)=>result);
    	},
    	encodeTitle:function(title){
    		if(!title){
    			return "";
    		}
    		title = title.replace(/\t|\r/g,"");
    		return encodeURIComponent(title);
    	},
    	getGoodsInfo:function(platform){
    		var goodsId = "";
    		var goodsName = "";
    		const href = window.location.href;
    		if(platform=="taobao"){
    			goodsId = Tools.getParamterBySearch(window.location.search, "id");
    			try{
    				const titleObj = document.querySelector("[class^='ItemTitle--']");
    				if(!!titleObj){
    					goodsName = titleObj.textContent;
    				}
    			}catch(e){}

    		}else if(platform=="tmall"){
    			goodsId = Tools.getParamterBySearch(window.location.search, "id");
    			try{
    				const titleObj = document.querySelector("[class^='ItemTitle--']");
    				if(!!titleObj){
    					goodsName = titleObj.textContent;
    				}
    			}catch(e){}

    		}else if(platform=="jd"){
    			goodsId = Tools.getParamterBySuffix(href);
    			try{
    				const titleObj = document.querySelector("[class='sku-name']");
    				if(!!titleObj){
    					goodsName = titleObj.textContent;
    				}
    			}catch(e){}
    		}else if(platform=="vpinhui"){
    			goodsId = Tools.getParamterBySuffix(href).replace("detail-","");
    			const titleObj = document.querySelector("[class='pib-title-detail']");
    			if(!!titleObj){
    				goodsName = titleObj.textContent;
    			}
    		}
    		return {"goodsId":goodsId, "goodsName":this.encodeTitle(goodsName)};
    	},
    	browsingHistory:function(platform, goodsId){
    		let histories = Tools.getLocalStorageValue(browsingHistoryLocalStorageKey, []);
    		let saveContent = platform+"_"+goodsId;
    		if(!histories.includes(saveContent)){
    			histories.unshift(saveContent);
    			Tools.setLocalStorageValue(browsingHistoryLocalStorageKey, histories.slice(0,60));
    		}
    	},
    	getHandlerElement:async function(handler){
    		const getElement = async (handler)=>{
    			const promiseArray = [];
    			const handlers = handler.split("@");
    			for(let i=0; i<handlers.length; i++){
    				const eleName = handlers[i];
    				if(!eleName){
    					continue;
    				}
    				if(eleName=="body"){
    					promiseArray.push(
    						new Promise((resolve,reject) =>{ resolve(document.body) })
    					);
    				}else if(eleName=="html"){
    					promiseArray.push(
    						new Promise((resolve,reject) =>{ resolve(document.html) })
    					);
    				}else{
    					promiseArray.push(Tools.getElementAsync(eleName, document.body, true, 10, 1500));
    				}
    			}
    			const element = await Promise.race(promiseArray);
    			return element ? element : null;
    		}

    		const element = await getElement(handler);
    		return new Promise((resolve,reject) =>{
    			resolve(element);
    		});
    	},
    	generateHtml:async function(platform, goodsId, goodsName){
    		if(!platform || !goodsId){
    			return "kong";
    		}
    		let addition = "";
    		if(platform=="vpinhui"){
    			const vip = goodsId.split("-");
    			addition = vip[0];
    			goodsId = vip[1];
    		}

    		this.browsingHistory(platform, goodsId);
    		const goodsCouponUrl = "https://tt.shuqiandiqiu.com/api/coupon/query?no=3&version=1.0.2&platform="+platform+"&id="+goodsId+"&q="+goodsName+"&addition="+addition;
    		try{
    			const data = await Tools.request("GET", goodsCouponUrl, null);
    			if(data.code=="ok" && !!data.result){
    				const json = JSON.parse(data.result);
    				await this.generateCoupon(platform, json.data);
    				await this.generateQrcode(platform, json.mscan);
    				//开启插入检测
    				let heartms = 0;
    				const HEART_DELAY = 1500, MAX_MS = 1000*30;
    				const generateResultInterval = setInterval(async ()=>{
    					if(this.generateIsResult){
    						if(document.querySelector("*[name='exist-llkbccxs-9246-hi']") || heartms>=MAX_MS){
    							clearInterval(generateResultInterval);
    						}else{
    							await this.generateCoupon(platform, json.data);
    						}
    					}
    					heartms += HEART_DELAY;
    				}, HEART_DELAY);
    			}
    		}catch(e){console.log(e);}
    	},
    	generateCoupon:async function(platform, result){
    		try{
    			this.generateIsResult = false;
    			if(!result || result==="null" || !result.hasOwnProperty("css") || !result.hasOwnProperty("html") || !result.hasOwnProperty("handler")){
    				return;
    			}

    			const {css, html, handler, templateId} = result;
    			if(!css || !html || !handler){
    				return;
    			}
    			GM_addStyle(css);

    			// 添加HTML, 需要动态检测元素
    			const handlerElement = await this.getHandlerElement(handler);
    			if(!handlerElement){
    				return;
    			}
    			if(platform=="taobao"){
    				handlerElement.parentNode.insertAdjacentHTML('afterend', html);
    			}else if(platform=="tmall"){
    				handlerElement.parentNode.insertAdjacentHTML('afterend', html);
    			}else if(platform=="jd"){
    				handlerElement.insertAdjacentHTML('afterend', html);
    			}else if(platform=="vpinhui"){
    				handlerElement.insertAdjacentHTML('afterend', html);
    			}

    			const templateElement = document.querySelector("div[id='"+templateId+"']");
    			if(!templateElement){
    				return;
    			}

    			const couponId = templateElement.getAttribute("data-id");
    			const goodsPrivateUrl = "https://tt.shuqiandiqiu.com/api/private/change/coupon?no=3&v=1.0.2&platform="+platform+"&id=";
    			if(!/\d/.test(couponId)){
    				return;
    			}

    			setInterval(()=>{
    				templateElement.querySelectorAll("*").forEach((element)=>{
    					element.removeAttribute("data-spm-anchor-id");
    				});
    			},400);

    			const couponElementA = templateElement.querySelector("a[name='cpShUrl']"), clickedTag = "aclicked";
    			if(couponElementA){
    				couponElementA.addEventListener("click",()=>{
    					event.stopPropagation();
    					event.preventDefault();
    					if(couponElementA.getAttribute(clickedTag)){
    						return;
    					}
    					couponElementA.setAttribute(clickedTag, "true");
    					const href = couponElementA.getAttribute("href");
    					if(href && href.indexOf("https://")!=-1){
    						Tools.openInTab(href);
    						couponElementA.removeAttribute(clickedTag);
    					}else{
    						Tools.request("GET", goodsPrivateUrl+couponId, null).then((privateResultData)=>{
    							if(privateResultData.code==="ok" && !!privateResultData.result){
    								let url = JSON.parse(privateResultData.result).url;
    								if(url){
    									Tools.openInTab(url);
    								}
    							}
    							couponElementA.removeAttribute(clickedTag);
    						}).then(()=>{
    							couponElementA.removeAttribute(clickedTag);
    						});
    					}
    				});
    			}

    			const canvasElement = document.querySelector("#ca"+templateId);
    			if(!canvasElement){
    				return;
    			}
    			const qrcodeResultData = await Tools.request("GET", goodsPrivateUrl+couponId, null);
    			if(!!qrcodeResultData && qrcodeResultData.code==="ok" && !!qrcodeResultData.result){
    				let img = JSON.parse(qrcodeResultData.result).img;
    				if(!!img){
    					let cxt = canvasElement.getContext("2d");
    					let imgData = new Image();
    					imgData.src = img;
    					imgData.onload=function(){
    						cxt.drawImage(imgData, 0, 0, imgData.width, imgData.height);
    					}
    				}
    			}
    		}catch(e){
    			console.log(e);
    		}finally{
    			this.generateIsResult = true;
    		}
    	},
    	generateQrcode:async function(platform, mscan){
    		if(!mscan || mscan==="null" || !mscan.hasOwnProperty("mount")
    			|| !mscan.hasOwnProperty("html")|| !mscan.hasOwnProperty("qrcode")){
    			return;
    		}
    		const {mount, html, qrcode, iden} = mscan;
    		if(!!mount && !!html && !!qrcode && !!iden){
    			const mountElement = await Tools.getElementAsync(mount, document.body, true, 10, 1500);
    			if(mountElement){
    				mountElement.insertAdjacentHTML('afterend', html);
    				let canvasElement = document.getElementById("mscan"+iden);
    				let width = canvasElement.getAttribute("width");
    				let height = canvasElement.getAttribute("height");
    				let cxt = canvasElement.getContext("2d");
    				let imgData = new Image();
    				imgData.src = qrcode;
    				imgData.onload=function(){
    					cxt.drawImage(imgData, 0, 0, width, height);
    				}
    			}
    		}
    	},
    	skuConstraints:function(platform){ //如果sku太多就折叠
    		if(platform=="tmall" || platform=="taobao"){
    			Tools.getElementAsync("[class='skuItemWrapper']", document.body, false, 10, 1500).then((skuItemWrapper)=>{
    				if(skuItemWrapper != null){
    					const { style } = skuItemWrapper;
    					style.maxHeight = "400px";
    					style.overflow = "auto";
    				}
    			}).catch(()=>{console.log(e);});
    		}else if(platform=="jd"){
    			const skuItemWrapper = document.querySelector("#choose-attrs");
    			if(skuItemWrapper){
    				const { style } = skuItemWrapper;
    				style.maxHeight = "400px";
    				style.overflow = "auto";
    			}
    		}
    	},
    	start:function(){
    		if(!this.isRun()){
    			return;
    		}
    		const platform = Tools.getPlatform();
    		if(!platform){
    			return;
    		}
    		this.skuConstraints(platform);
    		const goodsData = this.getGoodsInfo(platform);
    		this.generateHtml(platform, goodsData.goodsId, goodsData.goodsName);
    	}
    };

    const couponSearch = {
    	browsedHtml:`<div style="position:absolute;white-space: nowrap; top:7px;padding:2px 5px;font-size:11px;background-color:rgb(3,106,251);color:#FFF;z-index:9999999999;border-radius:20px;right:10px;"><b>已浏览</b></div>`,
    	intervalIsRunComplete:true,
    	getHistories:function(){
    		return Tools.getLocalStorageValue(browsingHistoryLocalStorageKey, []);
    	},
    	isRun:function(){
    		const visitHref = window.location.href;
    		return [
    			/^https:\/\/www\.taobao\.com(\/|\/\?)?/i,//淘宝首页
    			/^https:\/\/s\.taobao\.com/i,
    			/^https:\/\/shop(\d+)\.taobao\.com/i,
    			/^https:\/\/www\.tmall\.com(\/|\/\?)?/i,//天猫首页
    			/pages\.tmall\.com/i,
    			/list\.tmall\.com/i,
    			/list\.tmall\.hk/i,
    			/tmall\.com\/category/i,
    			/tmall\.com\/search/i,
    			/tmall\.com\/shop/i,
    			/tmall\.com\/\?q=/i,
    			/maiyao\.liangxinyao\.com/i,
    			/^https:\/\/www\.jd\.com(\/|\/\?)?/i, //京东主页
    			/search\.jd\.com/i,
    			/search\.jd\.hk/i,
    			/pro\.jd\.com\/mall/i,
    			/jd\.com\/view_search/i, //商店主页
    			/category\.vip\.com/i,
    			/list\.vip\.com/i
    		].map((reg)=>(new RegExp(reg)).test(visitHref)).some((res)=>res);
    	},
    	requestConf:function(){
    		return new Promise((resolve, reject) => {
    			Tools.request("GET", "https://tt.shuqiandiqiu.com/api/plugin/load/conf", null).then((data)=>{
    				if(data.code=="ok" && !!data.result){
    					resolve(data.result);
    				}else{
    					resolve(null);
    				}
    			});
    		});
    	},
    	pickupElements:function(confString){ //收集列表的元素
    		const visitHref = window.location.href;
    		const selectorElementList = new Array();
    		let confFilter = confString;
    		try{
    			confFilter = confFilter.replace(/\\\\/g,"\\");
    		}catch(e){}
    		const confJson = JSON.parse(confFilter);
    		for(let key in confJson){
    			if(!confJson.hasOwnProperty(key)){
    				continue;
    			}
    			for(let i=0; i<confJson[key].length; i++){
    				const itemJson = confJson[key][i];
    				if(!itemJson.hasOwnProperty("elements") || !itemJson.hasOwnProperty("matches")){
    					continue;
    				}
    				const {elements, matches} = itemJson;
    				const isMatch = matches.map((reg)=>(new RegExp(reg, "i")).test(visitHref)).some((res)=>res);
    				if(isMatch){
    					for(let j=0; j<elements.length; j++){
    						selectorElementList.push({
    							"element":elements[j]["element"],
    							"findA":elements[j]["findA"],
    							"page":elements[j]["page"]
    						});
    					}
    				}
    			}
    		}
    		return selectorElementList;
    	},
    	transformElements:function(selectors){
    		const items = [];
    		selectors.forEach((elementObj)=>{
    			if(elementObj.element){
    				const elements = document.querySelectorAll(elementObj.element);
    				elements.forEach((element)=>{
    					if(element){
    						items.push({"element":element, "findA": elementObj.findA, "page":elementObj.page});
    					}
    				});
    			}
    		});
    		if(items.length>0){
    			this.queryAll(items);
    		}
    	},
    	queryAll:function(items){
    		this.intervalIsRunComplete = false;
    		const promises = [];
    		const histories = this.getHistories();
    		items.forEach((item)=>{
    			promises.push(this.queryOne(item,histories));
    		});
    		Promise.all(promises).then((result)=>{
    			this.intervalIsRunComplete = true;
    		});
    	},
    	queryOne:function(item,histories){
    		const { element, page, findA} = item;
    		const self = this;
    		return new Promise(function(resolve, reject){
    			if(element.getAttribute("querycxll")){  //当存在时，说明已经处理过了
    				resolve("processed");
    				return;
    			}
    			element.setAttribute("querycxll", "true");
    			element.style.position = "relative";
    			element.addEventListener("click", function(e){
    				element.insertAdjacentHTML('beforeend', self.browsedHtml);
    			});

    			let goodsDetailUrl = null;
    			if(findA==="this"){ //说明本身就是A标签
    				goodsDetailUrl = element.getAttribute("href");
    			}else if(/^child@/.test(findA)){
    				const elementA = element.querySelector(findA.replace(/^child@/,""));
    				if(elementA){
    					goodsDetailUrl = elementA.getAttribute("href");
    				}
    			}
    			if(!goodsDetailUrl){
    				resolve("exception-url-null");
    				return;
    			}

    			let analysisData = null;
    			if(/^jd_/.test(page)){
    				let jdId = Tools.getParamterBySuffix(goodsDetailUrl);
    				if(!!jdId) analysisData = {"id":jdId, "platform":"jd"};
    			}else if(/^vpinhui_/.test(page)){
    				let vipId = Tools.getParamterBySuffix(goodsDetailUrl).replace("detail-","");;
    				if(!!vipId){
    					analysisData = {"id":vipId.split("-")[1], "platform":"vpinhui"};
    				}
    			}else{
    				let platform = Tools.getPlatform(goodsDetailUrl);
    				let id = Tools.getParamterBySearch(goodsDetailUrl, "id");
    				if(platform && id){
    					analysisData = {"id":id, "platform":platform};
    				}
    			}
    			if(!analysisData){
    				resolve("exception-data-null");
    				return;
    			}

    			if(histories.includes(analysisData.platform + "_" + analysisData.id)){
    				element.insertAdjacentHTML('beforeend', self.browsedHtml);
    			}

    			const searchUrl = "https://tt.shuqiandiqiu.com/api/ebusiness/q/c?p="+analysisData.platform+"&id="+analysisData.id+"&no=3";
    			Tools.request("GET", searchUrl, null).then((data)=>{
    				if(data.code=="ok" && !!data.result){
    					const {tip, encryptLink} = JSON.parse(data.result);
    					if(tip){
    						element.insertAdjacentHTML('beforeend', tip);
    					}
    					if(encryptLink){
    						let decryptUrl = null;
    						try{
    							const decryptLink = atob(encryptLink);
    							decryptUrl = decryptLink.split('').reverse().join('');
    						}catch(e){}
    						if(decryptUrl){
    							self.relativeJu(page, element, decryptUrl);
    						}
    					}
    				}
    				resolve("success");
    			}).catch(()=>{
    				resolve("error");
    			});
    		});
    	},
    	relativeJu:function(page, element, decryptUrl){
    		const self = this;
    		try{
    			if(page.indexOf("jd_")!=-1){
    				element.querySelectorAll("a").forEach((element_a)=>{
    					if(element_a.getAttribute("href").indexOf("item.jd.com")!=-1){
    						element_a.removeAttribute(onclick);
    						element_a.addEventListener("click", function(e){
    							e.preventDefault();
    							e.stopPropagation();
    							Tools.openInTab(decryptUrl);
    						});
    					}
    				});
    			}
    			else if(page.indexOf("taobao_")!=-1 || page.indexOf("tmall_")!=-1){
    				element.addEventListener("click", function(e){
    					const target = e.target
    					const tagName = target.tagName.toUpperCase();
    					let isPreventDefault = false;
    					if(tagName==="A"){ //只有点击A标签才去判断
    						const href = target.getAttribute("href");
    						const isDetail = [/detail\.tmall\.com\/item\.htm/, /item\.taobao\.com\/item\.htm/]
    							.map((reg)=> reg.test(href))
    							.some((result) => result);
    						if(isDetail){
    							isPreventDefault = true;
    						}
    					}else{
    						isPreventDefault = true;
    					}
    					if(isPreventDefault){
    						e.preventDefault();
    						e.stopPropagation();
    						Tools.openInTab(decryptUrl);
    					}
    				});
    			}
    			else if(page.indexOf("vpinhui_")!=-1){
    				element.querySelectorAll("a").forEach((element_a)=>{
    					if(element_a.getAttribute("href").indexOf("detail.vip.com/detail-")!=-1){
    						element_a.addEventListener("click", function(e){
    							e.preventDefault();
    							e.stopPropagation();
    							Tools.openInTab(decryptUrl);
    						});
    					}
    				});
    			}
    		}catch(e){
    			console.log(e);
    		}
    	},
    	start:function(){
    		if(this.isRun()){
    			this.requestConf().then((confString)=>{
    				const selectors = this.pickupElements(confString);
    				if(this.intervalIsRunComplete){
    					this.transformElements(selectors);
    				}
    				setInterval(()=>{
    					if(this.intervalIsRunComplete){
    						this.transformElements(selectors);
    					}
    				}, 1500);
    			});
    		}
    	}
    };

    discoverCoupon.start();
    couponSearch.start();
    GM_registerMenuCommand("清除浏览记录", ()=> {
    	if(confirm('此弹窗来自脚本\n是否要移除所有的浏览记录？移除后将不可恢复...')){
    		Tools.setLocalStorageValue(browsingHistoryLocalStorageKey,[]); //已浏览标识
    	}
    });
    
  }
};

export default website;
