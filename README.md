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
* VUE实现双向数据绑定的原理主要是 Object.defineProperty() 方法重新定义了对象获取属性值(get)和设置属性值(set)的操作来实现的.
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



