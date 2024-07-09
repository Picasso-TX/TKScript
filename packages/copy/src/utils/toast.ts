const toast = {
  show:(params)=>{
    //小提示框
    var time = params.time;
    var background = params.background;
    var color = params.color;
    var position = params.position;  //center-top, center-bottom
    var defaultMarginValue = 50;

    if(time == undefined || time == ''){
        time = 1500;
    }

    var el = document.createElement("div");
    el.setAttribute("class", "web-toast-kkli9");
    el.innerHTML = params.message;
    //背景颜色
    if(background!=undefined && background!=''){
      el.style.backgroundColor=background;
    }
    //字体颜色
    if(color!=undefined && color!=''){
      el.style.color=color;
    }

    //显示位置
    if(position==undefined || position==''){
      position = "center-bottom";
    }

    //设置显示位置，当前有种两种形式
    if(position==="center-bottom"){
      el.style.bottom = defaultMarginValue+"px";
    }else{
      el.style.top = defaultMarginValue+"px";
    }
    el.style.zIndex=999999;

    document.body.appendChild(el);
    el.classList.add("fadeIn");
    setTimeout(function () {
        el.classList.remove("fadeIn");
        el.classList.add("fadeOut");
        /*监听动画结束，移除提示信息元素*/
        el.addEventListener("animationend", function () {
            document.body.removeChild(el);
        });
        el.addEventListener("webkitAnimationEnd", function () {
            document.body.removeChild(el);
        });
    }, time);
  }
};
export default toast;
