// 图片压缩
zipImg = function (path, cb) {  //图片压缩
    var img = new Image();
    img.src = path; // 传过来的图片路径在这里用。
    img.onload = function() {
     var that = this;
     //生成比例
     var w = that.width,
      h = that.height,
      scale = w / h;
     w = 480; //|| w; //480  你想压缩到多大，改这里
     h = w / scale;
     //生成canvas
     var canvas = document.createElement('canvas');
     var ctx = canvas.getContext('2d');
     canvas.width = w;
     canvas.height = h;
     ctx.drawImage(that, 0, 0, w, h);
     var base64 = canvas.toDataURL('image/jpeg', 0.4); //1最清晰，越低越模糊
     cb(base64);
    }
   }
   //手机号校验
function isValidMobile(phoneNum) {
    return /^\d{11}$/.test(phoneNum);
}
//邮箱前端校验正则
function isValidEmail(email) {
    return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
}
//中文名称
function isValidName(name) {
    return /^[\u4E00-\u9FA5]{2,4}$/.test(name)
}
//邮编前端校验正则
function isValidPostCode(postCode) {
    return /^[1-9][0-9]{5}$/.test(postCode);
}
//身份证前端校验正则
function isValidID(num) {
    num = num.toUpperCase();
    if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num))) {
        return false;
    }
    //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
    var len, re;
    len = num.length;
    if (len == 15) {
        re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
        var arrSplit = num.match(re);
        //检查生日日期是否正确
        var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
        var bGoodDay;
        bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
        if (!bGoodDay) {
            return false;
        } else {
            //将15位身份证转成18位
            //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
            var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
            var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
            var nTemp = 0, i;
            num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6);
            for (i = 0; i < 17; i++) {
                nTemp += num.substr(i, 1) * arrInt[i];
            }
            num += arrCh[nTemp % 11];
            return num;
        }
    }
    if (len == 18) {
        re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
        var arrSplit = num.match(re);
        //检查生日日期是否正确
        var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
        var bGoodDay;
        bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
        if (!bGoodDay) {
            return false;
        } else {
            //检验18位身份证的校验码是否正确。
            //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
            var valnum;
            var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
            var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
            var nTemp = 0, i;
            for (i = 0; i < 17; i++) {
                nTemp += num.substr(i, 1) * arrInt[i];
            }
            valnum = arrCh[nTemp % 11];
            if (valnum != num.substr(17, 1)) {
                return false;
            }
            return num;
        }
    }
    return false;
}
//银行卡号前端正则校验
function isValidBankNum(bankno) {
    var lastNum = bankno.substr(bankno.length - 1, 1); //取出最后一位（与luhn进行比较）
    var first15Num = bankno.substr(0, bankno.length - 1); //前15或18位
    var newArr = new Array();
    for (var i = first15Num.length - 1; i > -1; i--) { //前15或18位倒序存进数组
        newArr.push(first15Num.substr(i, 1));
    }
    var arrJiShu = new Array(); //奇数位*2的积 <9
    var arrJiShu2 = new Array(); //奇数位*2的积 >9
    var arrOuShu = new Array(); //偶数位数组
    for (var j = 0; j < newArr.length; j++) {
        if ((j + 1) % 2 == 1) { //奇数位
            if (parseInt(newArr[j]) * 2 < 9) arrJiShu.push(parseInt(newArr[j]) * 2);
            else arrJiShu2.push(parseInt(newArr[j]) * 2);
        } else //偶数位
            arrOuShu.push(newArr[j]);
    }

    var jishu_child1 = new Array(); //奇数位*2 >9 的分割之后的数组个位数
    var jishu_child2 = new Array(); //奇数位*2 >9 的分割之后的数组十位数
    for (var h = 0; h < arrJiShu2.length; h++) {
        jishu_child1.push(parseInt(arrJiShu2[h]) % 10);
        jishu_child2.push(parseInt(arrJiShu2[h]) / 10);
    }

    var sumJiShu = 0; //奇数位*2 < 9 的数组之和
    var sumOuShu = 0; //偶数位数组之和
    var sumJiShuChild1 = 0; //奇数位*2 >9 的分割之后的数组个位数之和
    var sumJiShuChild2 = 0; //奇数位*2 >9 的分割之后的数组十位数之和
    var sumTotal = 0;
    for (var m = 0; m < arrJiShu.length; m++) {
        sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
    }

    for (var n = 0; n < arrOuShu.length; n++) {
        sumOuShu = sumOuShu + parseInt(arrOuShu[n]);
    }

    for (var p = 0; p < jishu_child1.length; p++) {
        sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p]);
        sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p]);
    }
    //计算总和
    sumTotal = parseInt(sumJiShu) + parseInt(sumOuShu) + parseInt(sumJiShuChild1) + parseInt(sumJiShuChild2);

    //计算luhn值
    var k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10;
    var luhn = 10 - k;

    if (lastNum == luhn) {
        return true;
    } else {
        return false;
    }
}
function gettoday() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    return year + "-" + month + "-" + day
}


//当前时间+3的后一年
function addYear(date, years) {

    var date = new Date(date);

    date.setDate(date.getDate() - 1);

    var year = date.getFullYear() + years;

    var month = date.getMonth() + 1;

    var day = date.getDate();

    var hours = date.getHours();

    var minutes = date.getMinutes();

    var mm = "'" + month + "'";

    var dd = "'" + day + "'";

    //单位数前面加0

    if (mm.length == 3) {

        month = "0" + month;

    }

    if (dd.length == 3) {

        day = "0" + day;

    }
    var time = year + "-" + month + "-" + day;
    console.log(time)
    return time;
}//手机号校验
function isValidMobile(phoneNum) {
    return /^\d{11}$/.test(phoneNum);
}
//邮箱前端校验正则
function isValidEmail(email) {
    return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
}
//中文名称
function isValidName(name) {
    return /^[\u4E00-\u9FA5]{2,4}$/.test(name)
}
//邮编前端校验正则
function isValidPostCode(postCode) {
    return /^[1-9][0-9]{5}$/.test(postCode);
}
//身份证前端校验正则
function isValidID(num) {
    num = num.toUpperCase();
    if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num))) {
        return false;
    }
    //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
    var len, re;
    len = num.length;
    if (len == 15) {
        re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
        var arrSplit = num.match(re);
        //检查生日日期是否正确
        var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
        var bGoodDay;
        bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
        if (!bGoodDay) {
            return false;
        } else {
            //将15位身份证转成18位
            //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
            var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
            var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
            var nTemp = 0, i;
            num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6);
            for (i = 0; i < 17; i++) {
                nTemp += num.substr(i, 1) * arrInt[i];
            }
            num += arrCh[nTemp % 11];
            return num;
        }
    }
    if (len == 18) {
        re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
        var arrSplit = num.match(re);
        //检查生日日期是否正确
        var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
        var bGoodDay;
        bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
        if (!bGoodDay) {
            return false;
        } else {
            //检验18位身份证的校验码是否正确。
            //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
            var valnum;
            var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
            var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
            var nTemp = 0, i;
            for (i = 0; i < 17; i++) {
                nTemp += num.substr(i, 1) * arrInt[i];
            }
            valnum = arrCh[nTemp % 11];
            if (valnum != num.substr(17, 1)) {
                return false;
            }
            return num;
        }
    }
    return false;
}
//银行卡号前端正则校验
function isValidBankNum(bankno) {
    var lastNum = bankno.substr(bankno.length - 1, 1); //取出最后一位（与luhn进行比较）
    var first15Num = bankno.substr(0, bankno.length - 1); //前15或18位
    var newArr = new Array();
    for (var i = first15Num.length - 1; i > -1; i--) { //前15或18位倒序存进数组
        newArr.push(first15Num.substr(i, 1));
    }
    var arrJiShu = new Array(); //奇数位*2的积 <9
    var arrJiShu2 = new Array(); //奇数位*2的积 >9
    var arrOuShu = new Array(); //偶数位数组
    for (var j = 0; j < newArr.length; j++) {
        if ((j + 1) % 2 == 1) { //奇数位
            if (parseInt(newArr[j]) * 2 < 9) arrJiShu.push(parseInt(newArr[j]) * 2);
            else arrJiShu2.push(parseInt(newArr[j]) * 2);
        } else //偶数位
            arrOuShu.push(newArr[j]);
    }

    var jishu_child1 = new Array(); //奇数位*2 >9 的分割之后的数组个位数
    var jishu_child2 = new Array(); //奇数位*2 >9 的分割之后的数组十位数
    for (var h = 0; h < arrJiShu2.length; h++) {
        jishu_child1.push(parseInt(arrJiShu2[h]) % 10);
        jishu_child2.push(parseInt(arrJiShu2[h]) / 10);
    }

    var sumJiShu = 0; //奇数位*2 < 9 的数组之和
    var sumOuShu = 0; //偶数位数组之和
    var sumJiShuChild1 = 0; //奇数位*2 >9 的分割之后的数组个位数之和
    var sumJiShuChild2 = 0; //奇数位*2 >9 的分割之后的数组十位数之和
    var sumTotal = 0;
    for (var m = 0; m < arrJiShu.length; m++) {
        sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
    }

    for (var n = 0; n < arrOuShu.length; n++) {
        sumOuShu = sumOuShu + parseInt(arrOuShu[n]);
    }

    for (var p = 0; p < jishu_child1.length; p++) {
        sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p]);
        sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p]);
    }
    //计算总和
    sumTotal = parseInt(sumJiShu) + parseInt(sumOuShu) + parseInt(sumJiShuChild1) + parseInt(sumJiShuChild2);

    //计算luhn值
    var k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10;
    var luhn = 10 - k;

    if (lastNum == luhn) {
        return true;
    } else {
        return false;
    }
}
function gettoday() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    return year + "-" + month + "-" + day
}


//当前时间+3的后一年
function addYear(date, years) {

    var date = new Date(date);

    date.setDate(date.getDate() - 1);

    var year = date.getFullYear() + years;

    var month = date.getMonth() + 1;

    var day = date.getDate();

    var hours = date.getHours();

    var minutes = date.getMinutes();

    var mm = "'" + month + "'";

    var dd = "'" + day + "'";

    //单位数前面加0

    if (mm.length == 3) {

        month = "0" + month;

    }

    if (dd.length == 3) {

        day = "0" + day;

    }
    var time = year + "-" + month + "-" + day;
    console.log(time)
    return time;
}
//判断是否是微信浏览器的函数
function isWeiXin() {
    //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
    var ua = window.navigator.userAgent.toLowerCase();
    //通过正则表达式匹配ua中是否含有MicroMessenger字符串
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}
//解决微信浏览器问题
function fixscroll() {
    if (isWeiXin()) {
        $("input,select").blur(function () {
            setTimeout(function () {
                var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
                window.scrollTo(0, Math.max(scrollHeight - 1, 0));
            }, 100);
        })

        //		$("input").focus(function(){
        //	        interval = setTimeout(function(){
        //	        document.body.scrollTop = document.body.scrollHeight;
        //	        },100)
        //	    })
    }
    // var isTransverse = false
    // var evt = "onorientationchange" in window ? "orientationchange" : "resize";
    // window.addEventListener(evt,resize,false);
    // 	function resize(fals) {
    // 		if((window.orientation == 0 || window.orientation == 180)&&isTransverse) {
    // 			vm.show1 = false
    // 			vm.show2 = false
    // 			isTransverse = false
    // 			location.reload()
    // 		}else {
    // 			vm.show1 = false
    // 			vm.show2 = false
    // 			isTransverse = true
    // 		}
    // 	}
    // resize(true);
}
// 微信回弹问题
(function () {
    let myFunction
    let isWXAndIos = isWeiXinAndIos()
    if (isWXAndIos) {
        document.body.addEventListener('focusin', () => {
            clearTimeout(myFunction)
        })
        document.body.addEventListener('focusout', () => {
            clearTimeout(myFunction)
            myFunction = setTimeout(function () {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            }, 200)
        })
    }
})()

function isWeiXinAndIos() {
    let ua = '' + window.navigator.userAgent.toLowerCase()
    let isWeixin = /MicroMessenger/i.test(ua)
    let isIos = /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(ua)
    return isWeixin && isIos
}

//获取浏览器参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
//判断产品状态
function getserviceType() {
    if (getUrlParam('serviceType') == 3) {
        return false
    } else {
        return true
    }
}
//当天日期加几天
function addDate(date, days) {
    if (days == undefined || days == '') {

        days = 1;

    }

    var date = new Date(date);

    date.setDate(date.getDate() + days);

    var month = date.getMonth() + 1;

    var day = date.getDate();

    var hours = date.getHours();

    var minutes = date.getMinutes();

    var mm = "'" + month + "'";

    var dd = "'" + day + "'";

    //单位数前面加0

    if (mm.length == 3) {

        month = "0" + month;

    }

    if (dd.length == 3) {

        day = "0" + day;

    }

    //	var time = date.getFullYear() + "-" + month + "-" + day + " " + hours + ":" + minutes;
    var time = date.getFullYear() + "-" + month + "-" + day;

    return time;

}
function getTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    return year + "-" + month + "-" + day + ' ' + hour + ':' + minute + ':' + second
}
//身份证获取年龄
function GetAge(identityCard, proposalDate) {
    if (proposalDate) proposalDate = proposalDate.replace(/-/g, '/')
    var len = (identityCard + "").length;
    if (len == 0) {
        return 0;
    } else {
        if ((len != 15) && (len != 18))//身份证号码只能为15位或18位其它不合法
        {
            return 0;
        }
    }
    var strBirthday = "";
    if (len == 18)//处理18位的身份证号码从号码中得到生日和性别代码
    {
        strBirthday = identityCard.substr(6, 4) + "/" + identityCard.substr(10, 2) + "/" + identityCard.substr(12, 2);
    }
    if (len == 15) {
        strBirthday = "19" + identityCard.substr(6, 2) + "/" + identityCard.substr(8, 2) + "/" + identityCard.substr(10, 2);
    }
    //时间字符串里，必须是“/”
    var birthDate = new Date(strBirthday);
    var nowDateTime = '';
    if (proposalDate == undefined) {
        nowDateTime = new Date()
    } else {
        nowDateTime = new Date(proposalDate)
    }
    var age = nowDateTime.getFullYear() - birthDate.getFullYear();
    //再考虑月、天的因素;.getMonth()获取的是从0开始的，这里进行比较，不需要加1
    if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
        age--;
    }
    // console.log('age:'+age)
    return age;
}
function getAgeBybirthday(birthday, proposalDate) {
    var birthDate = new Date(birthday);
    var nowDateTime = '';
    if (proposalDate == undefined) {
        nowDateTime = new Date()
    } else {
        nowDateTime = new Date(proposalDate)
    }
    var age = nowDateTime.getFullYear() - birthDate.getFullYear();
    return age;
}
//判断出生天数是否大于多少天
function birthdayCompare(idCard, day, proposalDate) {
    if (proposalDate) proposalDate = proposalDate.replace(/-/g, '/')
    var birthday = "";
    if (idCard != null && idCard != "") {
        if (idCard.length == 15) {
            birthday = "19" + idCard.substr(6, 6);
        } else if (idCard.length == 18) {
            birthday = idCard.substr(6, 8);
        }

        birthday = birthday.replace(/(.{4})(.{2})/, "$1-$2-");
    }

    if (day == undefined || day == '') {

        day = 0;

    }
    //生日+天数
    var date = new Date(birthday);
    date.setDate(date.getDate() + day);
    //当前日期
    var datenow = '';
    if (proposalDate == undefined) {
        datenow = new Date()
    } else {
        datenow = new Date(proposalDate)
    }
    var year = datenow.getFullYear();
    var month = datenow.getMonth() + 1;
    var day = datenow.getDate();
    var now = new Date(year + '/' + month + '/' + day);
    now.setDate(now.getDate())

    return date.getTime() <= now.getTime()
}
//session本地存储
function setItem(key, value) {
    return sessionStorage.setItem(key, JSON.stringify(value));
}
function getItem(key) {
    let value = sessionStorage.getItem(key)
    if (value) return JSON.parse(value)
    else return undefined
}
function removeItem(key) {
    window.sessionStorage.removeItem(key);
}

//回填信息
function orderDetail() {
    if (getUrlParam('lsjOrderNo') || getItem('lsjOrderNo')) {
        var channelCode = getUrlParam('channelCode');
        var lsjOrderNo = getUrlParam('lsjOrderNo') || getItem('lsjOrderNo');
        var lsjOrderKey = getUrlParam('lsjOrderKey') || getItem('uukey');
        var data = {
            nonRequestInfo: {
                //头信息
                headerInfo: {
                    requestType: 'N0004',
                    channelCode: channelCode
                },
                //bodyInfo
                bodyInfo: {
                    baseInfo: {
                        lsjOrderNo: lsjOrderNo,
                        lsjOrderKey: lsjOrderKey
                    }
                }
            }
        }
        api.post('/nonInsure/applyIssue', data).then(res => {
            if (res.nonResponseInfo.headerInfo.resultCode == '0000') {
                var detail = res.nonResponseInfo.bodyInfo
                //回填投保人信息
                if (detail.applicantInfo) {
                    vm.name = detail.applicantInfo.name
                    vm.cardnum = detail.applicantInfo.certificateNo
                    vm.tel = detail.applicantInfo.mobileTel
                    vm.email = detail.applicantInfo.email
                    vm.cardtype_num = detail.applicantInfo.certificateType
                }
                //回填投保人被保人关系
                if (detail.proposalOrderList) {
                    if (detail.proposalOrderList[0].applicantToInsured == '01') {
                        vm.insuredtype = '本人'
                        vm.applicantToInsured = '01'
                    } else if (detail.proposalOrderList[0].applicantToInsured == '02') {
                        vm.insuredtype = '配偶'
                        vm.applicantToInsured = '02'
                    } else if (detail.proposalOrderList[0].applicantToInsured == '03') {
                        vm.insuredtype = '子女'
                        vm.applicantToInsured = '03'
                    } else if (detail.proposalOrderList[0].applicantToInsured == '04') {
                        vm.insuredtype = '父母'
                        vm.applicantToInsured = '04'
                    } else if (detail.proposalOrderList[0].applicantToInsured == '05') {
                        vm.insuredtype = '亲戚'
                        vm.applicantToInsured = '05'
                    } else if (detail.proposalOrderList[0].applicantToInsured == '41') {
                        vm.insuredtype = '父亲'
                        vm.applicantToInsured = '41'
                    } else if (detail.proposalOrderList[0].applicantToInsured == '42') {
                        vm.insuredtype = '母亲'
                        vm.applicantToInsured = '42'
                    } else if (detail.proposalOrderList[0].applicantToInsured == '06') {
                        vm.insuredtype = '其他'
                        vm.applicantToInsured = '06'
                    }
                }
                //回填被保人信息
                if (detail.insuredInfoList && detail.proposalOrderList[0].applicantToInsured != '01') {
                    vm.insuredname = detail.insuredInfoList[0].name
                    vm.insured_card_num = detail.insuredInfoList[0].certificateNo
                }
                //回填房屋信息
                if (detail.proposalOrderList[0].buildingList) {
                    vm.house_add = detail.proposalOrderList[0].buildingList[0].provinceName + ' ' + detail.proposalOrderList[0].buildingList[0].countryName + ' ' + detail.proposalOrderList[0].buildingList[0].cityName
                    vm.provinceName = detail.proposalOrderList[0].buildingList[0].provinceName
                    vm.countryName = detail.proposalOrderList[0].buildingList[0].countryName
                    vm.cityName = detail.proposalOrderList[0].buildingList[0].cityName
                    vm.provinceCode = detail.proposalOrderList[0].buildingList[0].provinceCode
                    vm.countryCode = detail.proposalOrderList[0].buildingList[0].countryCode
                    vm.cityCode = detail.proposalOrderList[0].buildingList[0].cityCode
                    vm.addressInfo = detail.proposalOrderList[0].buildingList[0].addressInfo
                }
                //回填车辆信息
                if (detail.proposalOrderList[0].carInfoList) {
                    vm.seatnum = detail.proposalOrderList[0].carInfoList[0].vehicleSeats
                    vm.framenum = detail.proposalOrderList[0].carInfoList[0].vinNo
                    vm.city = detail.proposalOrderList[0].carInfoList[0].licenseNo.match(/[\u4e00-\u9fa5]+/g)[0]
                    vm.carnum = detail.proposalOrderList[0].carInfoList[0].licenseNo.slice(1)
                }
                //页面信息参数
                //  				var re= /lsjOrderNo=(\S*)&/
                //  				var str = detail.baseInfo.requestHtmlParam.match(re)
                //  				console.log(str)
                var have_lsjOrderNo = false
                //新的地址参数
                var paramstr = ''
                var params = detail.baseInfo.requestHtmlParam.split("&");
                params.forEach((item, index) => {
                    if (item.indexOf('lsjOrderNo') > -1) {
                        params[index] = `lsjOrderNo=${lsjOrderNo}`
                        have_lsjOrderNo = true
                    }
                })
                paramstr = params.join('&')
                if (!have_lsjOrderNo) {
                    paramstr = `lsjOrderNo=${lsjOrderNo}&` + params.join('&')
                }
                vm.requestHtmlParam = paramstr
            }
        }).catch(err => {
            vm.$dialog.toast({ mes: err });
        })
    }
}

//生成uuid
function UUID() {
    this.id = this.createUUID()
}
UUID.prototype.valueOf = function () {
    return this.id
};
UUID.prototype.toString = function () {
    return this.id
};
UUID.prototype.createUUID = function () {
    var c = new Date(1582, 10, 15, 0, 0, 0, 0);
    var f = new Date();
    var h = f.getTime() - c.getTime();
    var i = UUID.getIntegerBits(h, 0, 31);
    var g = UUID.getIntegerBits(h, 32, 47);
    var e = UUID.getIntegerBits(h, 48, 59) + "2";
    var b = UUID.getIntegerBits(UUID.rand(4095), 0, 7);
    var d = UUID.getIntegerBits(UUID.rand(4095), 0, 7);
    var a = UUID.getIntegerBits(UUID.rand(8191), 0, 7) + UUID.getIntegerBits(UUID.rand(8191), 8, 15) + UUID.getIntegerBits(UUID.rand(8191), 0, 7) + UUID.getIntegerBits(UUID.rand(8191), 8, 15) + UUID.getIntegerBits(UUID.rand(8191), 0, 15);
    return i + g + e + b + d + a
};
UUID.getIntegerBits = function (f, g, b) {
    var a = UUID.returnBase(f, 16);
    var d = new Array();
    var e = "";
    var c = 0;
    for (c = 0; c < a.length; c++) {
        d.push(a.substring(c, c + 1))
    }
    for (c = Math.floor(g / 4); c <= Math.floor(b / 4); c++) {
        if (!d[c] || d[c] == "") {
            e += "0"
        } else {
            e += d[c]
        }
    }
    return e
};
UUID.returnBase = function (c, d) {
    var e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    if (c < d) {
        var b = e[c]
    } else {
        var f = "" + Math.floor(c / d);
        var a = c - f * d;
        if (f >= d) {
            var b = this.returnBase(f, d) + e[a]
        } else {
            var b = e[f] + e[a]
        }
    }
    return b
};
UUID.rand = function (a) {
    return Math.floor(Math.random() * a)
};



function ajax_method(url, data, method, success) {
    // 异步对象
    var ajax = new XMLHttpRequest();

    // get 跟post  需要分别写不同的代码
    if (method == 'get') {
        // get请求
        if (data) {
            // 如果有值
            url += '?';
            url += data;
        } else {

        }
        // 设置 方法 以及 url
        ajax.open(method, url);

        // send即可
        ajax.send();
    } else {
        // post请求
        // post请求 url 是不需要改变
        ajax.open(method, url, false);

        // 需要设置请求报文
        ajax.setRequestHeader("Content-type", "application/json");
        ajax.setRequestHeader("Accept", "application/json");

        // 判断data send发送数据
        if (data) {
            // 如果有值 从send发送
            ajax.send(data);
        } else {
            // 木有值 直接发送即可
            ajax.send();
        }
    }

    // 注册事件
    ajax.onreadystatechange = function () {
        // 在事件中 获取数据 并修改界面显示
        if (ajax.readyState == 4 && ajax.status == 200) {
            // console.log(ajax.responseText);

            // 将 数据 让 外面可以使用
            // return ajax.responseText;

            // 当 onreadystatechange 调用时 说明 数据回来了
            // ajax.responseText;

            // 如果说 外面可以传入一个 function 作为参数 success
            success(ajax.responseText);
        }
    }

}
//用户行为记录
function openLog(key, code, channelCode, productCode) {
    var data = {
        nonRequestInfo: {
            //主信息
            bodyInfo: {
                //信息列表
                operateLogInfoList: [
                    {
                        operateKey: key,
                        operateCode: code,
                        operateDate: getTime(),
                        channelCode: channelCode,
                        productCode: productCode
                    }
                ]
            }
        }
    }
    ajax_method(baseurl + '/nonCommon/operateLog', JSON.stringify(data), "POST", function () {

    });
}

// 设置cookie
//      * 设置cookie
//      * @param name cookie的名称
//      * @param value cookie的值
//      * @param day cookie的过期时间
var setCookie = function (name, value, day) {
    if (day !== 0) {     //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
        var expires = day * 24 * 60 * 60 * 1000;
        var date = new Date(+new Date() + expires);
        document.cookie = name + "=" + escape(value) + ";expires=" + date.toUTCString();
    } else {
        document.cookie = name + "=" + escape(value);
    }
};
// 获取cookie
//      * 获取对应名称的cookie
//      * @param name cookie的名称
//      * @returns {null} 不存在时，返回null
//      */
var getCookie = function (name) {
    var arr;
    var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
};

/*
    删除cookie
*/
var delCookie = function (name) {
    setCookie(name, ' ', -1);
    };