import axios from 'axios'
import { Message } from 'element-ui'

// 创建 axios 实例
const service = axios.create({
  // baseURL: process.env.BASE_API,  // api的base_url
  baseURL: 'https://www.easy-mock.com/mock/5a1fb5a85bc39d4cf3b7a778/robot',
  timeout: 5000                   // 请求超时时间
})

// request 拦截器
service.interceptors.request.use(config => config, (error) => {
  console.log(error)
  return Promise.reject(error)
})

// response 拦截器
service.interceptors.response.use(response => response.data, (error) => {
  console.log(`err${error}`)
  Message({
    message: '请刷新或者重试：' + error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export default service
