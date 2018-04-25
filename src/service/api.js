import axios from 'axios'
import qs from 'qs'
import apiSetting from './api-setting'
import apiConfig from '@/config/api.config'

//请求时的拦截器
axios.interceptors.request.use((config) => {
	return config
}, (error) => {
	return Promise.reject(error)
})

// 请求完成后的拦截器
axios.interceptors.response.use((res) => {
	if (!res) {
		return Promise.reject(res)
	}
	return res
}, (error) => {
	return Promise.reject(error.response)
})

// 请求出错状态
function errorState(response) {
	//  ..隐藏loading
	// console.log(response)
	// console.log('失败，统一判断后端返回的错误码')
	// 如果http状态码正常，则直接返回数据
	if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
		return response // 如果不需要除了data之外的数据，可以直接 return response.data
	} else {
		console.log('网络异常')
	}
}

// 请求成功状态
function successState(res) {
	//  ..隐藏loading
	// console.log(res)
	// console.log('成功，统一判断后端返回的错误码')
	//统一判断后端返回的错误码
	// if (res.data.errCode == '000002') {
	//   console.log(res.data.errDesc || '网络异常')
	// } else if (res.data.errCode != '000002' && res.data.errCode != '000000') {
	//   console.log(res.data.errDesc || '网络异常')
	// }
}

// 定义api请求方法
const api = (opts, data) => {
	let httpOpts = {
		method: opts.method,
		url: opts.url,
		baseURL: apiConfig.baseURL,
		timeout: apiConfig.timeout
	}
	if (opts.method === 'post') {
		httpOpts.data = qs.stringify(data || {})
	} else {
		httpOpts.params = data || ''
	}
	let promise = new Promise(function (resolve, reject) {
		axios(httpOpts).then((res) => {
			successState(res)
			resolve(res)
		}).catch((response) => {
			errorState(response)
			reject(response)
		})
	})

	return promise
}

// 生成所有接口调用方法，挂载在apiMethods对象上，组件调用只需传参
let apiMethods = {}
console.log(Object.keys(apiSetting))
Object.keys(apiSetting).forEach(apiMethod => {
	apiMethods[apiMethod] = (data) => {
		return api(apiSetting[apiMethod], data)
	}
})
export default apiMethods
