 //判断网络是否连接
 var EventUtil = {
    addHandler: function(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    }
};
EventUtil.addHandler(window, "online", function() {
    alert("Online");
});
EventUtil.addHandler(window, "offline", function() {
    alert("offline");
});
//个推解决方法
// https://ask.dcloud.net.cn/article/36180