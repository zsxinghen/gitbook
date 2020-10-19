// 参考： https://blog.csdn.net/qq_17757973/article/details/54604625
// 兼容ios与android
export const gesture = (el = document) => {
  /**
   * @description 系统环境判断
   */
  const isAndroid = () => {
    const u = navigator.userAgent;
    return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  }
  if (!isAndroid()) return;
  var obj = {}; //定义一个对象
  // 存储触发状态和起始点信息
  let isTouch = false;
  let start = [];
  // 创建自定义事件
  const gestureStart = new CustomEvent('gestureStart');
  const gestureChange = new CustomEvent('gestureChange');
  const gestureEnd = new CustomEvent('gestureEnd');

  /**
   * @description 获取两点之间距离 　
   */
  const getDistance = (p1, p2) => {
    let x = p2.pageX - p1.pageX,
      y = p2.pageY - p1.pageY;
    return Math.sqrt((x * x) + (y * y));
  };
  /**
   * @description 获取夹角 　
   * deg= deg2-deg1 = arctan (x2-x1/y2-y1) - arctan (x4-x3/y4-y3) 
   */
  const getAngle = (p1, p2) => {
    let x = p1.pageX - p2.pageX,
      y = p1.pageY - p2.pageY;
    return Math.atan2(y, x) * 180 / Math.PI;
  };

  el.addEventListener("touchstart", function (e) {
    if (e.touches.length >= 2) { //判断是否有两个点在屏幕上
      isTouch = true;
      start = e.touches; //得到第一组两个点
      e.target.dispatchEvent(gestureStart);
      obj.gestureStart && obj.gestureStart.call(el); //执行gestureStart方法
    };
  }, false);

  el.addEventListener("touchmove", function (e) {
    e.preventDefault();
    if (e.touches.length >= 2 && isTouch) {
      let now = e.touches; //得到第二组两个点
      let scale = getDistance(now[0], now[1]) / getDistance(start[0], start[1]); //得到缩放比例
      let rotation = getAngle(now[0], now[1]) - getAngle(start[0], start[1]); //得到旋转角度差
      gestureChange.scale = scale.toFixed(2);
      gestureChange.rotation = rotation.toFixed(2);
      e.target.dispatchEvent(gestureChange);
      obj.gestureChange && obj.gestureChange.call(el, e); //执行gestureChange方法
    };
  }, false);

  el.addEventListener("touchend", function (e) {
    if (isTouch) {
      isTouch = false;
      e.target.dispatchEvent(gestureEnd);
      obj.gestureEnd && obj.gestureEnd.call(el); //执行gestureEnd方法
    };
  }, false);
  return obj
}

// 调用方法
// let gestureInstance = gesture(el)
// 方案1
// el.addEventListener('gesturechange', gestureChange, false);
// const gestureChange = (event) => {
//   let { rotation, scale } = event
//   console.log(rotation, scale)
// }
// 方案2
// gestureInstance.gestureChange = function (event) {
//     let { rotation, scale } = event
//     console.log(rotation, scale)
// };