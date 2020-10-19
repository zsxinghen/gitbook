### Set

* 类似于数组，成员唯一且无序
* [value, value]，键值与键名是一致的（或者说只有键值，没有键名）
* set加入值得时候，不会发生类型转换，所以 5 和 "5" 是两个不同的值
#### 与Array和Set的区别
对比项 | Array | Set
|:-  | :- | :-|
元素序列 | 有序 | 无序
元素可重复性 | 元素可重复 | 元素不可重复

#### 常用方法示例
|方法 | 介绍 |
|:-  | :- | -:|
set.add(value) | 添加元素到集合内
set.has(value) | 检查集合内是否含有某元素
set.keys() | 返回一个包含集合中所有键的迭代器
set.values() | 返回一个包含集合中所有值的迭代器
set.entries() | 返回一个包含Set对象中所有元素
set.size | 元素数量
set.delete(value) | 删除元素的指定元素
set.clear() | 清空集合内元素

```
let s1 = new Set()
s1.add(5)            // Set{5}
s1.add('5')          // Set{5, '5'}

let s2 = new Set()
let a = NaN
s2.add(a)            // Set{NaN}
let b = NaN
s2.add(b)            // Set{NaN}

```
* Set遍历
```
let set = new Set([1, 2, 3])

console.log(set.keys())             // SetIterator {1, 2, 3}

console.log(set.values())           // SetIterator {1, 2, 3}

console.log(set.entries())          // SerIterator {1, 2, 3}

for (let item of set.keys()) {
    console.log(item)               // 1    2   3
}

for (let item of set.entries()) {
    console.log(item)               // [1, 1]   [2, 2]  [3, 3]
}

set.forEach((value, key) => {
    console.log(`${key}:${val}`)    // 1:1   2:2  3:3    
})
for(let i of set) {                 // 1    2   3
    console.log(i)                  
}
```

### WeakSet
* 只能存储对象引用类型，不能存放值， 否则会抛出TypeError。
* 不能包含无引用的对象，否则会被自动清除出集合（垃圾回收机制）。
* 不可枚举(无法遍历)，也就是说无法获取大小，也无法获取其中包含的元素。
* 用于DOM树中删除的DOM元素

#### 常用方法示例

|方法 | 介绍 |
|:-  | :- | -:|
weakSet.add(value) | 添加元素到集合内
weakSet.delete(value) | 删除元素的指定元素
weakSet.has(value) | 检查集合内是否含有某元素

```
const weakset=new WeakSet();
let foo={bar:1};
weakset.add(foo);
weakset.has(foo); // true
weakSet.delete(value)
weakset.delete(foo) // true
foo=null;
weakset.has(foo); // false
weakset.delete(foo) // false

weakset.size; // undefined 
weakset.clear(); // Uncaught TypeError: weakset.clear is not a function
```

### 参考
* [Set、Map、WeakSet和WeakMap的区别](https://www.jianshu.com/p/4efa7675834c)

* [【ES6基础】Set 与 WeakSet](https://mp.weixin.qq.com/s?__biz=MjM5MjU2NDk0Nw==&mid=2247484091&idx=1&sn=0cc25a65f9d4fed51f0f08198aecd375&chksm=a6a5110791d29811ab64302631a5df038c42843cfaefd5157155b6a3f0028b6c828c245c4a2a&scene=21#wechat_redirect)