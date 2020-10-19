### Map

* Map的键和值可以是任何数据类型
* 键值对按照插入顺序排列
* 可以遍历
#### 常用方法示例

|操作方法  |  内容描述| 
|:-  | :- | -:|
map.set(key,value) |  添加键值对到映射中
map.get(key) | 获取映射中某一个键的对应值
map.entries() | 返回一个以二元数组（键值对）作为元素的数组
map.has(key) | 检查映射中是否包含某一键值对
map.keys() | 返回一个当前映射中所有键作为元素的可迭代对象
map.values() |返回一个当前映射中所有值作为元素的可迭代对象
map.size | 映射中键值对的数量
map.delete(key) |将某一键值对移除映射
map.clear() |清空映射中所有键值对

```
let user = new Map()
user.set('name', '某某某') // Map(1) {"name" => "某某某"}
user.set('year', 18) // Map(2) {"name" => "某某某", "year" => 18}
user.get('name') // '某某某'
user.has('name') // true
user.size // 2
user.delete('name');// true
user.clear(); 
```
* Map遍历
```
user.entries() // MapIterator {"name" => "某某某", "year" => 18}
user.keys() // MapIterator {"name", "year"}
user.values() // MapIterator {"某某某", 18}

for(const [key,value] of map){
    console.log(`${key}:${value}`);
}
map.forEach((value,key,map)=> console.log(`${key}:${value}`))
```
* Map转数组

```
let user = new Map()
user.set('name', '某某某')
user.set('year', 18)
Array.from(user.keys()) // ["name", "year"]
Array.from([...user.keys()]) // // ["name", "year"]
```
* 数组转Map
```
const array = [['name', '某某某'], ['year', 18]]
const user = new Map(array)
// Map(2) {"name" => "某某某", "year" => 18}

```
* Map转对象
```
 const mapToObj = (map)=> {
    let obj = Object.create(null)
    for (let [key,value]  of map) {
    obj[key] = value
    }
    return obj
 }
mapToObj(new Map().set('name', '某某某').set('year', 18)) // {name: "某某某", year: 18}
```

* 对象转Map
```
 const objToMap = (obj)=> {
    let map = new Map()
    for (let key of Object.keys(obj)) {
        map.set(key, obj[key])
    }
    return map
 }
objToMap({name: "某某某", year: 18}) // Map(2) {"name" => "某某某", "year" => 18}

```
* Map 转 JSON
```
const mapToJson = (map) => {
    return JSON.stringify([...map])
}
mapToJson(new Map().set('name', '某某某').set('year', 18)) // "[["name","某某某"],["year",18]]"
```
* JSON转Map
```
const jsonToMap = (jsonStr) => {
    return objToMap(JSON.parse(jsonStr))
}
jsonToMap("[["name","某某某"],["year",18]]")
```

### WeakMap
* 键名是弱引用对象，而值可以是任意
* 不能遍历，方法有get、set、has、delete
* 键名所指向的对象可以被垃圾回收
[@_@]: 楼层与点云关系可以用 WeakMap， 点云顺序用map
#### 常用方法示例

|操作方法  |  内容描述| 
|:-  | :- | -:|
weakMap.set(key,value) |  添加键值对到映射中
weakMap.get(key) | 返回key关联对象（没有则则返回 undefined）
weakMap.has(key) | 判断是否有 key 关联对象
weakMap.delete(key) | 移除 key 的关联对象

### 参考
* [Set、Map、WeakSet和WeakMap的区别](https://www.jianshu.com/p/4efa7675834c)
* [ES6基础】Map与WeakMap](https://blog.csdn.net/Ed7zgeE9X/article/details/89879406)

