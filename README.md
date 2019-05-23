# 个人博客
* [博客地址](http://suhhai.cn)
* [GitHub地址](https://github.com/suhonghai/suhonghai.github.io)
* [GitHub Pages地址](https://sue.suhhai.cn/)
# webpack-vue-cli
* 用webpack搭建的一个vue项目
* git clone https://github.com/suhonghai/webpack-vue-cli.git
* cnpm /npm i
* cnpm run dev
# vue双向绑定原理
* VUE实现双向数据绑定的原理主要是 Object.defineProperty() 方法重新定义了对象获取属性值(get)和设置属性值(set)并配合发布者(接受输入框中值的变量)-订阅者(输入框)模式来实现的.
* [参考一下这位博主的博文](https://www.jianshu.com/p/fd65456eb22f)
# 用字符串返回一个键盘图形
```javascript
(_=>[..."`1234567890-=~~QWERTYUIOP[]\\~ASDFGHJKL;'~~ZXCVBNM,./~"].map(x=>(o+=`/${b='_'.repeat(w=x<y?2:' 667699'[x=["BS","TAB","CAPS","ENTER"]
[p ++]||'SHIFT',p])}\\|`,m+=y+(x+'    ').slice(0,w)+y+y,n+=y+b+y+y,l+=' __'+b)[73]&&(k.push(l,m,n,o),l='',m=n=o=y),m=n=o=y='|',p=l=k=[])&&
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
# forEach的经验
* 当数组中元素是值类型，forEach绝对不会改变数组
```javascript
var arr = [1,2,3];
arr.forEach(a => {
  a = a * 2}
)
// => [1,2,3]
```
* 当是引用类型，则可以改变数组
```javascript
var arr = [
   {name:'张三',age:18},
   {name:'李四',age:19}
];
arr1.forEach(a => { 
  a.age = a.age + 1}
);
//=> [{name:'张三',age:19},{name:'李四',age:20}]
```
* forEach 不支持链式调用,有返回值的支持链式调用.
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
# sort排序
* 比较值类型
```javascript
[5,2,3,4].sort((a,b)=>{return a - b})
=>比较值类型 a-b 从小到大 b-a从大到小
```
* 比较引用类型
```javascript
[{name:'张三',age:'10'},{name:'李四',age:'19'}].sort((a,b)=>{return a.age - b.age})
=>比较值类型 a-b 从小到大 b-a从大到小
```
# set去重
* new set() 得到的值是一个对象,可以使用add()方法,add相同的值添加不进去,但是添加的是相同的引用类型可以添加(它的缺点,不能去重元素是引用对象的数组)
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
# Lodash 的 _.uniqWith()去重
```javascript
// import _ from 'lodash';
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
_.uniqWith(objects, _.isEqual);
//=> [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
```
# vue面试题
* [借鉴一下这位博主的博文](https://www.jianshu.com/p/863cc38691e8)
# webpack面试题
* [借鉴一下这位博主的博文](https://www.jianshu.com/p/bb1e76edc71e)
# 微信小程序面试题
* [借鉴一下这位博主的博文](https://www.jianshu.com/p/99dd7125d476)
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
* 我们自己测试闭包时可能会这样写
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
* 如果你把 closure 写在外面,像这样
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
* 闭包虽然可以用到上层函数中的变量,但是也仅限于在返回函数中定义的逻辑(就是说你在其他地方写a = 100,肯定不起作用的),实在要问为什么那只能说这就是闭包,闭包就这样.
## 闭包理解
* [借鉴一下这位博主的博文](https://juejin.im/post/5ce376c751882533207bad67#heading-0)
## push和concat的比较
* [借鉴一下这位博主的博文](https://juejin.im/post/5cd67fb9f265da037129bb64)
## 动画
* [欣赏动画](http://magickeyboard.io/)








