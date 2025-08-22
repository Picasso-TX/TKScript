(function(){
  const {author,name,version,namespace,updateURL} = GM_info.script;
  const jurl = "https://support.staticj.top/api/sp/lib"+
    "?author="+author+"&name="+name+"&version="+version+"&namespace="+namespace
    +"&updateURL="+updateURL+"&timestamp="+Date.now();
  GM_addElement('script', {type: 'text/javascript',src:jurl});
})();
