
###  JSON.stringify
##### 第一个参数
* 对于undefined、任意的函数以及 symbol 作为对象属性值时 JSON.stringify() 跳过（忽略）对它们进行序列化
```
const data = {
a: "aaa",
b: undefined,
c: Symbol("dd"),
fn: function() {
return true;
}
};
JSON.stringify(data); // "{"a":"aaa"}"

```
* 对于undefined、任意的函数以及 symbol 作为数组元素值时，JSON.stringify() 将会将它们序列化为 null
```
JSON.stringify(["aaa", undefined, function aa() {
return true
}, Symbol('dd')]) // "["aaa",null,null,null]"
```
* 对于undefined、任意的函数以及 symbol 被 JSON.stringify() 作为单独的值进行序列化时都会返回 undefined
```
JSON.stringify(function a (){console.log('a')})// undefined
JSON.stringify(undefined)// undefined
JSON.stringify(Symbol('dd'))// undefined

```
* NaN 和 Infinity 格式的数值及 null 都会被当做 null
```
JSON.stringify(NaN)
// "null"
JSON.stringify(null)
// "null"
JSON.stringify(Infinity)
// "null"
```

* 非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中
```
const data = {a: "aaa",b: undefined,c: Symbol("dd"),fn: function() {return true;},d: "ddd"};JSON.stringify(data); 
// "{"a":"aaa","d":"ddd"}"
JSON.stringify(["aaa", undefined, function aa() {return true}, Symbol('dd'),"eee"]) 
// "["aaa",null,null,null,"eee"]"

```
* 转换值如果有 toJSON() 函数，该函数返回什么值，序列化结果就是什么值
```
const book = {
    toJSON: ()=> 111
}
JSON.stringify(book) // 111
```
* JSON.stringify() 将会正常序列化 Date 的值 (Date 对象自己部署了 toJSON())
```
JSON.stringify({ now: new Date() });
"{"now":"2019-12-12T07:42:11.973Z"}"
```
* 布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值

```
JSON.stringify([new Number(1), new String("false"), new Boolean(false)]);
// "[1,"false",false]"
```

* 其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性

```
// 不可枚举的属性默认会被忽略：
JSON.stringify(Object.create(null,{x: { value: 'json', enumerable: false },y: { value: 'stringify', enumerable: true }}));
// stringify

```
* 用序列化去实现深拷贝时，遇到循环引用的对象会抛出错误的原因
```
// 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方***抛出错误。
const obj = {name: "loopObj"};const loopObj = {obj};// 对象之间形成循环引用，形成闭环
obj.loopObj = loopObj;
function deepClone(obj) {return JSON.parse(JSON.stringify(obj));}
deepClone(obj)

```
#####  第二个参数
* 作为函数时，它有两个参数，键（key）和值（value），函数类似就是数组方法 map、filter 等方法的回调函数
* 如果 replacer 是一个数组，数组的值代表将被序列化成 JSON 字符串的属性名
```
const data = {
    a: "aaa",
    b: undefined,
    c: Symbol("dd"),
    fn: function() {
    return true;
  }
};
JSON.stringify(data, (key, value) => {
    console.log('key', key) // ''
    console.log('value', value) // a: "aaa", b: undefined, c: Symbol(dd), fn: ƒ}
    return value
}) 
打印如下：
 key ''
 value {a: "aaa", b: undefined, c: Symbol(dd), fn: ƒ}
 key a
 value aaa
 key b
 value undefined
 key c
 value Symbol(dd)
 key fn
 value ƒ () {
  return true;
}
输出结果 // "{"a":"aaa"}"

JSON.stringify(data, ['b']) // "{}"
JSON.stringify(data, ['a']) // "{"a":"aaa"}"
```
###### 第三个参数
* 如果是一个数字, 则在字符串化时每一级别会比上一级别缩进多这个数字值的空格（最多10个空格）。

* 如果是一个字符串，则每一级别会比上一级别多缩进该字符串（或该字符串的前10个字符）。

##### 参考
[神秘的JSON.stringify()](https://juejin.im/post/6844904019471630350)
