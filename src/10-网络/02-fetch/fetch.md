### XMLHttpRequest
1. 用法

```
var xhr = new XMLHttpRequest();
xhr.open(method, url); // method: GET
xhr.responseType = 'json'; // 
xhr.setRequestHeader( ..., ... );
xhr.onreadystatechange = function () { 
   if ( xhr.readyState == 4 && xhr.status == 200 ) {
      console.log( xhr.responseText );
　　} else {
      console.log( xhr.statusText );
　　}
 };
xhr.onload = function() {
  console.log(xhr.response);
};

xhr.onerror = function() {
  console.log("Oops, error");
};

xhr.send(optionalEncodedData);
```
2. 缺点
不符合关注分离（Separation of Concerns）的原则，配置和调用方式非常混乱，而且基于事件的异步模型写起来也没有现代的 Promise，generator/yield，async/await 友好

### Fetch
1. 用法
```
try {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
} catch(e) {
  console.log("Oops, error", e);
}
```
2. 优点
* 语法简洁，更加语义化
* 基于标准 Promise 实现，支持 async/await
* 同构方便，使用 isomorphic-fetch

3. 缺点
* Fetch 请求默认是不带 cookie 的，需要设置 fetch(url, {credentials: 'include'})
* 服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject


参考：
[传统 Ajax 已死，Fetch 永生](https://github.com/camsong/blog/issues/2)