import toast from "./toast"
import { STORAGE_KEYS } from "../constant/constant";

const menuCommand = {
  serverMenu:function(){
    var isOpenServer = GM_getValue(STORAGE_KEYS.serverKey, true);
    GM_registerMenuCommand("服务器导航设置",()=>{
    	var person = prompt("是否开启服务器导航功能？请填写yes或者no....", isOpenServer ? "yes" : "no");
      if(person==null||person==undefined){
        return;
      }
      var validate = person==="no"||person==="NO"||person==="yes"|| person==="YES";
      if(validate) GM_setValue(STORAGE_KEYS.serverKey, (person==="yes"|| person==="YES"));

      var toastMessage = "开启服务器导航功能";
    	if(person==="yes"|| person==="YES"){
        toastMessage = "开启服务器导航功能";
      }else if(person==="no"|| person==="NO"){
        toastMessage = "关闭服务器导航功能";
      }else{
        toastMessage = "参数错误，只能填写yes或者no";
      }
      toast.show({"message":toastMessage, "background":"#474747"});
      //只有验证通过后，才会刷新页面
      if(validate){
        setTimeout(function(){
          location.reload();
        },1000);
      }
    });
  },
  register:function(){
    this.serverMenu();
  }
};

export default menuCommand;
