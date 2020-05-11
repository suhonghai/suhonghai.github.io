/**
 * @name: userAgentInfo
 * @test: test font
 * @msg: 根据设备返回对应的设备机型
 * @param {type}  
 * @return {String} android ios pc
 */
export const userAgentInfo = function () {
    var ua = navigator.userAgent /* navigator.userAgent 浏览器发送的用户代理标题 */
    if ((ua.indexOf('Android') > -1) || ua.indexOf('Linux') > -1) {
        return 'android'
    } else if ((ua.indexOf('iPhone') > -1) || (ua.indexOf('iPad') > -1) || (ua.indexOf('iPod') > -1)) {
        return 'ios'
    } else if (ua.indexOf('Windows') > -1) {
        return 'pc'
    } else {
        return 'android'
    }
}
/**
 * @name: qs2obj
 * @test: test font
 * @msg: 把url地址？后面的返回成对象
 * @param {String} 
 * @return { Object }
 */
export const qs2obj = function (url) {
    var qs = url.split("?")[1];
    var arr = [];
    var res = {};
    if (!qs) {
        // return res;
    } else {
        arr = qs.split("&");
        for (var i = 0, len = arr.length; i < len; i++) {
            var key = arr[i].split("=")[0];
            var val = arr[i].split("=")[1];
            res[key] = decodeURIComponent(val);
        }
    }
    return res;
}
/**
 * @name: isValidMobile
 * @test: test font
 * @msg: 手机号校验 判断格式为13456789 开头的11位手机号
 * @param {Number} 
 * @return {boolean} 
 */
export const isValidMobile = function (phoneNum) {
    return /^1[3456789]\d{9}$/.test(phoneNum);
}
/**
 * @name: isValidID
 * @test: test font
 * @msg: 身份证前端校验正则
 * @param {Number} 
 * @return {boolean}
 */
export const isValidID = function (num) {
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
/**
 * @name: GetAge
 * @test: test font
 * @msg: 身份证获取年龄 并且计算到某年某月某日时的年龄
 * @param {string} identityCard 身份证 
 * @param {string} proposalDate eg:2020-01-01
 * @return: 
 */

export const GetAge = function (identityCard, proposalDate) {
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
    console.log('age:' + age)
    return age;
}
/**
 * @name: 
 * @test: test font
 * @msg: 
 * @param {string} idCard 身份证 
 * @return: 
 */
export const birthdayCompare = function (idCard, day, proposalDate) {
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
/**
 * @name: isValidBankNum
 * @test: test font
 * @msg: 银行卡号前端正则校验
 * @param {String} bankno 银行卡号
 * @return: 
 */
export const isValidBankNum = function (bankno) {
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
/**
 * @name: formatTime
 * @test: test font
 * @msg: 格式化时间 年月日
 * @param {type} 
 * @return {string} eg:2020-01-01
 */
export const formatTime = function (time) {
    let date = new Date(time)
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
/**
 * @name: isValidName
 * @test: test font
 * @msg: 2到4位中文名称
 * @param {String} name  
 * @return {boolean}
 */
export const isValidName = function (name) {
    return /^[\u4E00-\u9FA5]{2,4}$/.test(name)
}
/**
 * @name: isValidEmail
 * @test: test font
 * @msg: 邮箱前端校验正则
 * @param {type} 
 * @return {boolean}
 */
export const isValidEmail = function (email) {
    return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
}
/**
 * @name: isWeiXin
 * @test: test font
 * @msg: 判断是否是微信浏览器的函数
 * @param {type} 
 * @return {boolean}
 */
export const isWeiXin = function () {
    //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
    var ua = window.navigator.userAgent.toLowerCase();
    //通过正则表达式匹配ua中是否含有MicroMessenger字符串
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}
/**
 * @name: fixscroll
 * @test: test font
 * @msg: 解决微信浏览器问题 input 软键盘不回弹
 * @param {type} 
 * @return: 
 */
export const fixscroll = function () {
    if (isWeiXin()) {
        $("input,select").blur(function () {
            setTimeout(function () {
                var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
                window.scrollTo(0, Math.max(scrollHeight - 1, 0));
            }, 100);
        })
    }
}
/**
 * @name: isWeiXinAndIos
 * @test: test font
 * @msg: 判断安卓微信环境
 * @param {type} 
 * @return {boolean}
 */
export const isWeiXinAndIos = function () {
    let ua = '' + window.navigator.userAgent.toLowerCase()
    let isWeixin = /MicroMessenger/i.test(ua)
    let isIos = /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(ua)
    return isWeixin && isIos
}
/**
 * @name: getUrlParam
 * @test: test font
 * @msg: 获取浏览器?后面key对应的value的值
 * @param {String}  name
 * @return: 
 */
export const getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return null;
}
/**
 * @name: setItem
 * @test: test font
 * @msg: session本地存储
 * @param {String} key 
 * @param {String} value 
 * @return: 
 */
export const setItem = function (key, value) {
    return sessionStorage.setItem(key, JSON.stringify(value));
}
/**
 * @name: setItem
 * @test: test font
 * @msg: 获取本地session
 * @param {String} key 
 * @param {String} value 
 * @return {String}
 */

export const getItem = function (key) {
    let value = sessionStorage.getItem(key)
    if (value) return JSON.parse(value)
    else return ''
}
/**
 * @name: removeItem
 * @test: test font
 * @msg: 获取本地session
 * @param {String} key 
 * @return 
 */
export const removeItem = function (key) {
    window.sessionStorage.removeItem(key);
}
/**
 * @name: setLocalStorage
 * @test: test font
 * @msg: localStorage本地存储
 * @param {String} key 
 * @param {String} value 
 * @return {String}
 */
export const setLocalStorage = function (key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
}
/**
 * @name: getLocalStorage
 * @test: test font
 * @msg: 获取本地localStorage
 * @param {String} key 
 * @return {String}
 */

export const getLocalStorage = function (key) {
    let value = localStorage.getItem(key)
    if (value) return JSON.parse(value)
    else return undefined
}
/**
 * @name: removeLocalStorage
 * @test: test font
 * @msg: 删除本地localStorage
 * @param {String} key 
 * @return 
 */

export const removeLocalStorage = function (key) {
    window.localStorage.removeItem(key);
}
/**
 * @name:setCookie
 * @test: test font
 * @msg: 设置cookie
 * @param {String} name   cookie的名称
 * @param {String} value   cookie的值
 * @param {String} day cookie的过期时间
 * @return: 
 */
export const setCookie = function (name, value, day) {
    if (day !== 0) {     //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
        var expires = day * 24 * 60 * 60 * 1000;
        var date = new Date(+new Date() + expires);
        document.cookie = name + "=" + escape(value) + ";expires=" + date.toUTCString();
    } else {
        document.cookie = name + "=" + escape(value);
    }
};
/**
 * @name:getCookie
 * @test: test font
 * @msg: 设置cookie
 * @param {String} name   cookie的名称
 * @param {String} value   cookie的值
 * @param {String} day cookie的过期时间
 * @return: {null} 不存在时，返回null
 */
export const getCookie = function (name) {
    var arr;
    var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
};
/**
 * @name: delCookie
 * @test: test font
 * @msg: 删除cookie
 * @param {string} name 删除cookie的名称
 * @return: 
 */
export const delCookie = function (name) {
    setCookie(name, ' ', -1);
};
/**
 * @name: numFormat
 * @test: test font
 * @msg: 千位分隔符
 * @param {type} 
 * @return: 
 */
export const numFormat = function (num) {
    num = num.toString().split(".");  // 分隔小数点
    var arr = num[0].split("").reverse();  // 转换成字符数组并且倒序排列
    var res = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (i % 3 === 0 && i !== 0) {
            res.push(",");   // 添加分隔符
        }
        res.push(arr[i]);
    }
    res.reverse(); // 再次倒序成为正确的顺序
    if (num[1]) {  // 如果有小数的话添加小数部分
        res = res.join("").concat("." + num[1]);
    } else {
        res = res.join("");
    }
    return res;
};
/**
 * @name: phoneDes
 * @test: test font
 * @msg:  手机号前3后4脱敏
 * @param {Number} phone 手机号码
 * @return {string} 178****2545
 */
export const phoneDes = function (phone) {
    if (phone && isValidMobile(phone)) {
        return phone.slice(0, 3) + '****' + phone.slice(-4)
    }
    return ''

};
/**
 * @name: idCardDes
 * @test: test font
 * @msg: 身份证前3后2脱敏
 * @param {Number} idCard 身份证号码
 * @return {string} 500*************52
 */
export const idCardDes = function (idCard) {
    if (idCard && isValidID(idCard)) {
        return idCard.slice(0, 3) + '*************' + idCard.slice(-2)
    }
    return ''
};
/**
 * @name: addYear
 * @test: test font
 * @msg: 指定日期增加指定年份和月份
 * @param {type} 
 * @return: 
 */
export const addYear = function (date, yearNum, monthNum, dayNum) {
    var yearNum = yearNum ? yearNum : 0;
    var monthNum = monthNum ? monthNum : 0;
    var dayNum = dayNum ? dayNum : 0;
    var d = date.replace(/-/g, '/')
    var date = new Date(d)
    var date_s = date.getTime();
    if (yearNum == 0) {
        date = new Date(date.setTime(date_s + 1000 * 60 * 60 * 24 * dayNum + 1000 * 60 * 60 * 24 * 30 * monthNum))
    } else {
        date = new Date(date.setTime(date_s + 1000 * 60 * 60 * 24 * (dayNum - 1) + 1000 * 60 * 60 * 24 * 30 * monthNum))
    }
    var year = date.getFullYear() + yearNum; //获取当前日期的年份
    var month = date.getMonth() + 1; //获取当前日期的月份
    var day = date.getDate(); //获取当前日期的日
    var days = date.getDate(); //获取当前日期中的月的天数
    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {

        day = "0" + day;

    }
    var time = year + '-' + month + '-' + day;
    return time;
}
/**
 * @name: isX
 * @test: test font
 * @msg:  判断大屏或者小屏 全面屏幕问题
 * @param {type} 
 * @return {boolean}
 */
export const isX = function () {
    let height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight
    let width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    if (height / width > 17 / 9) {
        return true
    }
    return false
}
/**
 * @name: 
 * @test: test font
 * @msg: 身份证获取性别
 * @param {string} idCard 身份证
 * @return 0：女  1：男
 */
export const getSex = function (idCard) {
    var sexStr = '';
    if (parseInt(idCard.slice(-2, -1)) % 2 == 1) {
        sexStr = 1;//男
    }
    else {
        sexStr = 0;//女
    }
    return sexStr;
}

/**
 * @name: getBirth
 * @test: test font
 * @msg: 身份证获取出生日期
 * @param {string} idCard
 * @return: 
 */
export const getBirth = function (idCard) {
    var birthday = "";
    if (idCard != null && idCard != "") {
        if (idCard.length == 15) {
            birthday = "19" + idCard.slice(6, 12);
        } else if (idCard.length == 18) {
            birthday = idCard.slice(6, 14);
        }
        birthday = birthday.replace(/(.{4})(.{2})/, "$1-$2-");
        //通过正则表达式来指定输出格式为:1990-01-01
    }
    return birthday;
}