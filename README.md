# 个人博客

-   [博客地址](http://suhhai.cn)
-   [GitHub 地址](https://github.com/suhonghai/suhonghai.github.io)
-   [GitHub Pages 地址](https://sue.suhhai.cn/)

# webpack-vue-cli

-   用 webpack 搭建的一个 vue 项目
-   git clone https://github.com/suhonghai/webpack-vue-cli.git
-   cnpm /npm i
-   cnpm run dev

# css 重置样式地址

-   [重置样式地址](https://meyerweb.com/eric/tools/css/reset/index.html)

# vue 双向绑定原理

-   VUE 实现双向数据绑定的原理主要是 Object.defineProperty() 方法重新定义了对象获取属性值(get)和设置属性值(set)并配合发布者(接受输入框中值的变量)-订阅者(输入框)模式来实现的.
-   [参考一下这位博主的博文](https://www.jianshu.com/p/fd65456eb22f)

# webpack 优化之 preload 和 prefetch

-   [参考一下这位博主的博文](https://www.jianshu.com/p/d2152789759d)

# 用字符串返回一个键盘图形

```javascript
;((_) =>
	[..."`1234567890-=~~QWERTYUIOP[]\\~ASDFGHJKL;'~~ZXCVBNM,./~"].map(
		(x) =>
			((o += `/${(b = '_'.repeat(
				(w =
					x < y
						? 2
						: ' 667699'[
								((x =
									['BS', 'TAB', 'CAPS', 'ENTER'][p++] ||
									'SHIFT'),
								p)
						  ])
			))}\\|`),
			(m += y + (x + '    ').slice(0, w) + y + y),
			(n += y + b + y + y),
			(l += ' __' + b))[73] &&
			(k.push(l, m, n, o), (l = ''), (m = n = o = y)),
		(m = n = o = y = '|'),
		(p = l = k = [])
	) &&
	k.join`
`)()
```

```javascript
____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ________
||` |||1 |||2 |||3 |||4 |||5 |||6 |||7 |||8 |||9 |||0 |||- |||= |||BS    ||
||__|||__|||__|||__|||__|||__|||__|||__|||__|||__|||__|||__|||__|||______||
|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/______\|
 ________ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____
||TAB   |||Q |||W |||E |||R |||T |||Y |||U |||I |||O |||P |||[ |||] |||\ ||
||______|||__|||__|||__|||__|||__|||__|||__|||__|||__|||__|||__|||__|||__||
|/______\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|
 _________ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ________
||CAPS   |||A |||S |||D |||F |||G |||H |||J |||K |||L |||; |||' |||ENTER ||
||_______|||__|||__|||__|||__|||__|||__|||__|||__|||__|||__|||__|||______||
|/_______\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/______\|
 ___________ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ___________
||SHIFT    |||Z |||X |||C |||V |||B |||N |||M |||, |||. |||/ |||SHIFT    ||
||_________|||__|||__|||__|||__|||__|||__|||__|||__|||__|||__|||_________||
|/_________\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/_________\|
```

# forEach 的经验

> 1.当数组中元素是值类型，forEach 绝对不会改变数组

```javascript
var arr = [1, 2, 3]
arr.forEach((a) => {
	a = a * 2
})
// => [1,2,3]
```

> 2.当是引用类型，则可以改变数组

```javascript
var arr = [
	{ name: '张三', age: 18 },
	{ name: '李四', age: 19 },
]
arr1.forEach((a) => {
	a.age = a.age + 1
})
//=> [{name:'张三',age:19},{name:'李四',age:20}]
```

> 3.forEach 不支持链式调用,有返回值的支持链式调用.

```javascript
let arr = [1,2,3,4]
arr.forEach(a=>{
    console.log(1)
}).sort((a,b=>{
    return a > b
}))
=>Uncaught SyntaxError: Identifier 'arr' has already been declared
    at <anonymous>:1:1
let arr = [1,2,3,4]
arr.filter(a=>{
    return a > 1
}).sort((a,b)=>{
    return a > b
})
```

> 4.后台返回的数据通过 forEach 处理时会赋值不成功，可以通过 JSON 先编码再解码解决

```javasctipt
 let b = res.data.data
 b = JSON.parse(JSON.stringify(b))
```

# sort 排序

> 1.比较值类型

```javascript
[5,2,3,4].sort((a,b)=>{return a - b})
=>比较值类型 a-b 从小到大 b-a从大到小
```

> 2.比较引用类型

```javascript
[{name:'张三',age:'10'},{name:'李四',age:'19'}].sort((a,b)=>{return a.age - b.age})
=>比较值类型 a-b 从小到大 b-a从大到小
```

# set 去重

> 1.new set() 得到的值是一个对象,可以使用 add()方法,add 相同的值添加不进去,但是添加的是相同的引用类型可以添加(它的缺点,不能去重元素是引用对象的数组)

```javascript
let tempArr = new Set([1,2,3,3,4,4,5])
tempArr.add(1)
tempArr.add(1)
tempArr.add({name:'张三'});
tempArr.add({name:'张三'});
console.log([...tempArr])
=>
0: 1
1: 2
2: 3
3: 4
4: 5
5: {name: "张三"}
6: {name: "张三"}
```

# Lodash 的 \_.uniqWith()去重

```javascript
// import _ from 'lodash';
var objects = [
	{ x: 1, y: 2 },
	{ x: 2, y: 1 },
	{ x: 1, y: 2 },
]
_.uniqWith(objects, _.isEqual)
//=> [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
```

# vue 面试题

-   [借鉴一下这位博主的博文](https://www.jianshu.com/p/863cc38691e8)

# webpack 面试题

-   [借鉴一下这位博主的博文](https://www.jianshu.com/p/bb1e76edc71e)

# 微信小程序面试题

-   [借鉴一下这位博主的博文](https://www.jianshu.com/p/99dd7125d476)

# javaScript 闭包

```javascript
//菜鸟教程标准代码
var fun = (function() {
    var a = 1;
    return function() {
        console.log(a)
        return a *= 3
    }
})();
fun();
fun();
先解释一下闭包:闭包就是指有权访问另一个函数作用域中的变量的函数.
在上面代码中fun = 一个自执行函数,这个函数运行后返回了一个匿名函数,所以我们可以看到
fun = function() {
    console.log(a)
    return a *= 3
}
你也可以通过console.log(fun)也能得到fun等于这个函数.
当你在后面一直执行 fun(); 时其实就是在执行
console.log(a)
return a *= 3
所以你会看到打印出来的值就是:
=>
 1
 3
所以在这里我们的 fun函数 就是一个闭包,里面的
function() {
    console.log(a)
    return a *= 3
}
就等价于 fun() 这里理解成他们一样就行了(只是一个是匿名函数一个给它名了个名字),
他们都可以访问另一个函数
function() {
    var a = 1;
    return function() {
        console.log(a)
        return a *= 3
    }
}
作用域中的变量 a.
```

## 闭包注意事项

-   我们自己测试闭包时可能会这样写

```javascript
function func() {
        let a = 1,
        function closure() {
        console.log(a)
        a *= 2;
    }
    return closure;
}
func()
func()
func()
你会发现什么都没打印,因为我们现在的func运行后 =
function closure() {
        console.log(a)
        a *= 2;
    }
你可以 let fun = func();
在运行 fun(); fun();就好了
```

-   如果你把 closure 写在外面,像这样

```javascript
function func() {
        let a = 1
}
//上面说closure是闭包
function closure() {
    console.log(a)
    a *= 2;
}
但是你在这里运行 closure();肯定报错 a未定义,很明显在这里拿不到a的值,因为它在函数func作用域里面你肯定拿不到,
为什么在函数func里面 return closure; 之后就可以访问了呢(这就是闭包的神奇之处){看别人的解释就是说:正常函数执行完之后变量会被销毁,但是在func函数执行之后因为它返回了一个函数,这个函数里面要用到 func中的变量(这里就是a变量),所以a还未来的及销毁,所以我们在后面就可以用到这个变量了}
```

-   闭包虽然可以用到上层函数中的变量,但是也仅限于在返回函数中定义的逻辑(就是说你在其他地方写 a = 100,肯定不起作用的),实在要问为什么那只能说这就是闭包,闭包就这样.

## 闭包理解

-   [借鉴一下这位博主的博文](https://juejin.im/post/5ce376c751882533207bad67#heading-0)

## push 和 concat 的比较

-   [借鉴一下这位博主的博文](https://juejin.im/post/5cd67fb9f265da037129bb64)

## 动画

-   [借鉴一下这位博主的博文](http://magickeyboard.io/)

## 从 URL 输入到页面展现背后发生的事

-   [借鉴一下这位博主的博文](https://juejin.im/post/5ca217a051882543f252dc1e)

# 搭建一个简单的 vue 框架教程

-   [借鉴一下这位博主的博文](https://segmentfault.com/a/1190000009846314)

# vue 源码解析

-   [借鉴一下这位博主的博文](https://www.cnblogs.com/tiedaweishao/p/8933153.html)

# 代码神注释

-   [借鉴一下这位博主的博文](https://mp.weixin.qq.com/s/jlYUzsyUb76RExsoFz4S2w)

# Vue.js 从 Virtual DOM 映射到真实 DOM 的过程

-   [借鉴一下这位博主的博文](https://juejin.im/post/5b86f6cc5188256fd44c0ce9)

# Hbuilder 打包 vue 生成原生 App

## Hbuilder 直接打包原有的 webApp

```javascript
=>
1:将原有的webApp转换成移动App
2:点击发行云打包,直接打包成安卓和ios的ipa和apk文件
2:打包时注意配置一下应用的图标,用过的sdk和模块权限配置
```

## Hbuilder 根据发布的 webApp 的网站 url 地址用 wap2app 来打包(这种打包方式只需要你发布的网站地址就可以打包)

```javascript
=>
1:文件->新建->wap2app输入名称和项目url就行
2:[其他配置参考](http://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/1244)
```

# vue 生命周期

```javascript
=>
1:new Vue(),创建vue对象,执行beforeCreated,这个时候，数据还没有挂载呢，只是一个空壳，无法访问到数据和真实的dom，一般不做操作.
2:挂载数据，绑定事件等等,自己声明的数据和事件,这里可以修改变量的值通过调用created函数来修改.
3:找实例或者组件对应的模板，编译模板为虚拟dom放入到render函数中准备渲染.可以执行beforeMount钩子函数(创建好虚拟dom,可以修改数据).
4:开始render，渲染出真实dom，然后执行mounted钩子函数(组件已经出现在页面中，数据、真实dom都已经处理好了,事件都已经挂载好了，可以在这里操作真实dom等事情).
5:当组件或实例的数据更改之后，会立即执行beforeUpdate(vue的虚拟dom机制会重新构建虚拟dom与上一次的虚拟dom树利用diff算法进行对比之后重新渲染，一般不做什么事儿).
6:当更新完成后，执行updated，数据已经更改完成，dom也重新render完成，可以操作更新后的虚拟dom.
7:当经过某种途径调用$destroy方法后，立即执行beforeDestroy，一般在这里做一些善后工作，例如清除计时器、清除非指令绑定的事件等等.
8:组件的数据绑定、监听...去掉后只剩下dom空壳，这个时候，执行destroyed，在这里做善后工作也可以.
```

# 2019 前端面试题

-   [借鉴一下这位博主的博文](https://blog.csdn.net/weixin_43624724/article/details/86519903)
-   [借鉴一下这位博主的博文](https://juejin.im/post/5d0644976fb9a07ed064b0ca)
-   [借鉴一下这位博主的博文](https://juejin.im/post/5cddf289f265da038f77696c#heading-44)
-   [借鉴一下这位博主的博文 es678910](https://juejin.im/post/5ca2e1935188254416288eb2#heading-43)
-   url 从输入到渲染完成经历了哪些过程

```javascript
=>
输入网址；发送到DNS服务器，并获取域名对应的web服务器对应的ip地址；与web服务器建立TCP连接；浏览器向web服务器发送http请求；web服务器响应请求，并返回指定url的数据；浏览器下载web服务器返回的数据及解析html源文件；生成DOM树，解析css和js，渲染页面，直至显示完成；
```

-   [借鉴一下这位博主的博文(前端面试题汇总)](https://github.com/jirengu/frontend-interview/issues)
-   [借鉴一下这位博主的博文(前端面试题汇总)](https://zhuanlan.zhihu.com/p/45057871)
-   [借鉴一下这位博主的博文(跨域)](https://zhuanlan.zhihu.com/p/60019674)
-   [借鉴一下这位博主的博文(h5+网络及网络状态获取)](http://www.hcoder.net/tutorials/info_98.html)
-   [借鉴一下这位博主的博文(git 生成 ssh)](https://www.cnblogs.com/chenguiya/p/9497722.html)
-   [借鉴一下这位博主的博文(雪碧图生成动图)](https://segmentfault.com/a/1190000009789225)

# 有意思的网站

-   [借鉴一下这位博主的博文](https://www.zhihu.com/question/26380791/answer/545777803)
-   [webOne](http://weavesilk.com/)

# hbuilder+h5

-   [借鉴一下这位博主的博文(个推解决方法)](https://ask.dcloud.net.cn/article/36180)

# vue 源码

-   [借鉴一下这位博主的博文(vue 源码解析)](https://juejin.im/post/5c371fd76fb9a049e23236ad)
-   解决移动端苹果手机点击 input 会向上移动的问题和点击其他地方不会失去焦点

```javascript
document.getElementById('pwd').addEventListener('focus', function () {
	document.body.scrollTop = 0
})

document.body.addEventListener(
	'touchmove',
	function (e) {
		document.documentElement.scrollTop = 0
		e.preventDefault()
	},
	{
		passive: false,
	}
) //passive 参数不能省略，用来兼容ios和android
document.querySelector('body').addEventListener('touchend', function (e) {
	if (e.target.className != 'input') {
		document.getElementById('pwd').blur()
	}
})
```

# vue 脚手架 3.0 和 2.0 按需加载 elementui 组件

```javascript
=>
1:npm install babel-plugin-component -D
2:babel.config.js 或者 .babelrc中添加如下代码（vue-cli3.0 默认创建babel.config.js，.babelrc属于vue-cli2.0默认创建在3.0中没有）
3.vue-cli 3.0配置
{
  "presets": [["@babel/preset-env", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
npm install @babel/preset-env -D

4.vue-cli 2.0配置
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

# vscode 插件

> **1.KoroFileHeader 函数注释 (setting.json 复制如下代码)**

```javascript
// 文件头部注释
    "fileheader.customMade": {
        "Descripttion":"",
        "version":"",
        "Author":"sueRimn",
        "Date":"Do not edit",
        "LastEditors":"sueRimn",
        "LastEditTime":"Do not Edit"
    },
    //函数注释
    "fileheader.cursorMode": {
        "name":"",
        "test":"test font",
        "msg":"",
        "param":"",
        "return":""
    }
```

# 记录一次 vue 预加载 prerender-spa-plugin 插件的使用

> **1.vue-cli3.0 配置**

```javascript
1. cnpm install prerender-spa-plugin --save (npm安装可能会报错，推荐使用cnpm)
2. vue.config.js加入以下代码
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');
module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV !== 'production') return;
        return {
            plugins: [
                new PrerenderSPAPlugin({
                    // 生成文件的路径，也可以与webpakc打包的一致。
                    // 下面这句话非常重要！！！
                    // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
                    staticDir: path.join(__dirname,'dist'),
                    // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
                    routes: ['/', '/product','/about'],
                    // 这个很重要，如果没有配置这段，也不会进行预编译
                    renderer: new Renderer({
                        inject: {
                            foo: 'bar'
                        },
                        headless: false,
                        // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
                        renderAfterDocumentEvent: 'render-event'
                    })
                }),
            ],
        };
    }
}
3.main.js添加
new Vue({
  router,
  store,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
4.router.js 中设置mode:"history"
5.npm run build 打包dist目录下会新增 product about对应的文件件，里面有生成好的对应路由的html文件，'/'路由下面的会在index.html中
```

> **2.vue-cli2.0 配置**

```javascript
1. cnpm install prerender-spa-plugin --save (npm安装可能会报错，推荐使用cnpm)
2.webpack.prod.conf.js增加部分代码
const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')   //引用插件
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const webpackConfig = merge(baseWebpackConfig, {
    plugins: [
        // vue-cli生成的配置中就已有这个了，不要动
        new HtmlWebpackPlugin({
            filename: config.build.index,
            template: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunksSortMode: 'dependency'
        }),
        // 配置PrerenderSPAPlugin
        new PrerenderSPAPlugin({
            // 生成文件的路径，也可以与webpakc打包的一致。
            staticDir: path.join(__dirname, '../dist'),

            // 对应自己的路由文件，比如index有参数，就需要写成 /index/param1。
            routes: ['/', '/product','/about','/contact','/join','/jzjh'],

            // 这个很重要，如果没有配置这段，也不会进行预编译
            renderer: new Renderer({
                inject: {
                  foo: 'bar'
                },
                headless: false,
                // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
                renderAfterDocumentEvent: 'render-event'
            })
        })
    ]
})
3.在main.js中增加
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
})
4.router.js 中设置mode: "history"
5.npm run build 打包dist目录下会新增 product about对应的文件件，里面有生成好的对应路由的html文件，'/'路由下面的会在index.html中
```

> 特别提醒

> 1.vue-cli2.0 和 3.0 的设置大致一致，但有一个很不同
> 在 3.0 中，设置 staticDir: path.join(**dirname,'dist'),
> 在 2.0 中，设置 staticDir: path.join(**dirname,'../dist'),
> 如果你把 3.0 的 staticDir 设置为 path.join(**dirname,'../dist')或> 者把 2.0 的 staticDir 设置为 path.join(**dirname,'dist')，运行 > npm run build 都会报错，这要特别注意！！！

> 2.不管 2.0 还是 3.0 都需要设置 history 模式

> 3.[node 启动本地服务教程]('https://www.cnblogs.com/nolaaaaa/p/9126385.html') 可以本地起一个服务测试一下(安装好后在 dist 目录下 shift + 右键在此处打开命令行 启动服务找到对应的 html 浏览)

> [参考作者文件]('https://www.jianshu.com/p/6a4c0b281e7f')

# 数组对象合并,并且根据自定义字段排序

```javascript
let roles = [
	{ roleName: '本人', value: '' },
	{ roleName: '配偶', value: '' },
	{ roleName: '父母', value: '' },
	{ roleName: '子女', value: '' }
]
let roles1 = [
	{ roleName: '配偶', value: 'peiou' },
	{ roleName: '本人', value: 'benren' },
	{ roleName: '子女', value: 'zinv' },
	{ roleName: '父母', value: 'fumu' }
]
roles = roles.map((item, index) => {
	return { ...item, ...roles1[index] }
})
console.log(roles)
>>
(4) [{…}, {…}, {…}, {…}]
0: {roleName: "配偶", value: "peiou"}
1: {roleName: "本人", value: "benren"}
2: {roleName: "子女", value: "zinv"}
3: {roleName: "父母", value: "fumu"}
length: 4
roles.sort((a, b) => {
//根据order数组的顺序排序
let order = ['本人', '配偶', '父母', '子女']
return order.indexOf(a.roleName) - order.indexOf(b.roleName)
})
console.log(roles)
>>
(4) [{…}, {…}, {…}, {…}]
0: {roleName: "本人", value: "benren"}
1: {roleName: "配偶", value: "peiou"}
2: {roleName: "父母", value: "fumu"}
3: {roleName: "子女", value: "zinv"}
length: 4

//存在一点问题，修改一下
 roles = roles.map(a => {
     roles1.forEach(b => {
         if (a.roleName == b.roleName) {
             a = b
            }
     })
     return a
})
```

# vue 过渡实现渐变出现输入框

```javascript
> html
    <button @click="closeLoading">切换</button>
    <transition name="slider">
        <div v-if="loading">
            <input type="text">
        </div>
    </transition>
>js
export default {
    name: 'home',
    data() {
        return {
            loading: false
        }
    },
    methods: {
        closeLoading: function() {
            this.loading = !this.loading
        }
    },
}
>css
.slider-enter-active {
    transition: all 2s ease;
}
.slider-leave-active {
    transition: all 2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slider-enter,
.slider-leave-to {
    transform: translateY(50px);
    opacity: 0;
}
.slider-leave,
.slider-enter-to {
    transform: rotateY(-50px);
    opacity: 1;
}
```

# vue 自定义 ajax 请求后的 loading 框

> 1.组件（components）下面新建 loading.vue 写好自己的弹窗效果

> 2.loading.vue 同级下面新建 loading.js

```javascript
import load from './loading.vue'
import Vue from 'vue'

let LoadingConstructor = Vue.extend(load)
let instance = new LoadingConstructor({
	el: document.createElement('div'),
})
instance.show = false
let loading = {
	show(options = {}) {
		instance.show = true
		console.log(options)
		if (options) {
			document.getElementsByTagName('body')[0].appendChild(instance.$el)
			instance.text = options.text
		}
	},
	hide() {
		instance.show = false
	},
}
export default {
	install() {
		if (!Vue.$loading) {
			Vue.$loading = loading
		}
		Vue.mixin({
			created() {
				this.$loading = Vue.$loading
			},
		})
	},
}
```

> 3.main.js 下面

```javascript
import loading from './components/shop/loading'
Vue.use(loading)
```

> 4.然后就可以在 axios 或者页面中直接使用了

```javascript
Vue.$loading.show()
Vue.$loading.hide()
```

# 页面平滑滚动

```javascript
 html, body { scroll-behavior:smooth; }

```

# input 框改变 placeholder 字体大小和颜色

```javascript
    input::-webkit-input-placeholder {
        font-size: 0.32rem;
        font-weight: 300;
        color: rgba(227, 184, 122, 1);
    }
```

# 浏览器返回逻辑处理

```javascript
   destroyed() {
        window.removeEventListener('popstate', this.goBack, false)
    },
    mounted() {
        if (window.history && window.history.pushState) {
            history.pushState(null, null, document.URL)
            window.addEventListener('popstate', this.goBack, false)
        }
    },
     methods: {
        goBack() {
            let backUrl = ''
            let environment = process.env.VUE_APP_RUN_ENV//这是我这边定义的环境判断变量，你们可以根据自己的环境变量判断
            if (environment == 'production') {
                backUrl = 'https://www.zhihu.com/'
            } else {
                backUrl = 'https://www.zhihu.com/'
            }
            window.location.href = backUrl
        }
     }
```

# git stash

保存当前工作进度，会把暂存区和工作区的改动保存起来。执行完这个命令后，在运行`git status`命令，就会发现当前是一个干净的工作区，没有任何改动。使用`git stash save 'message...'`可以添加一些注释

> git stash list

显示保存进度的列表。也就意味着，`git stash`命令可以多次执行。

> git stash pop [–index][stash_id]

-   `git stash pop`  恢复最新的进度到工作区。git 默认会把工作区和暂存区的改动都恢复到工作区。
-   `git stash pop --index`  恢复最新的进度到工作区和暂存区。（尝试将原来暂存区的改动还恢复到暂存区）
-   `git stash pop stash@{1}`恢复指定的进度到工作区。stash_id 是通过`git stash list`命令得到的  
    通过`git stash pop`命令恢复进度后，会删除当前进度。

> git stash apply [–index][stash_id]

除了不删除恢复的进度之外，其余和`git stash pop`  命令一样。

> git stash drop [stash_id]

删除一个存储的进度。如果不指定 stash_id，则默认删除最新的存储进度。

> git stash clear

删除所有存储的进度。

# git 删除本地和远程分支

1. git branch 查看本地所有分支

2. git branch --delete 分支名 或者 git branch -d 分支名 删除本地分支

3. git branch -D 分支名 强制删除本地分支

4. git branch -a 查看远程本地所有分支

5. git push origin --delete 分支名 删除远程分支

6. git push origin -D 分支名 强制删除远程分支

# 时间戳

> JS 获取当日凌晨的时间戳

```javascript
new Date(new Date().toLocaleDateString()).getTime()

new Date(new Date().setHours(0, 0, 0, 0)).getTime()

new Date().setHours(0, 0, 0, 0)
```
