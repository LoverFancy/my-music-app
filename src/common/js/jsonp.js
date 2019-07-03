import originJsonp from 'jsonp'
// 封装jsonp 用于抓取线上数据
export default function jsonp(url, data, option) {
  // 如果url没有？则第一个就是？,否则第一个就是&
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  // 返回Pormise异步执行请求成功或者失败
  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}
// 将data拼接到url后面
export function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    // ncodeURIComponent() 函数可把字符串作为 URI 组件进行编码
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  // url.substring(1)删除第一个&
  return url ? url.substring(1) : ''
}
