const devBaseUrl='http://localhost/'
const prodBaseUrl='https://testapi.easywish.cn/'
export const baseUrl=process.env.NODE_ENV==='development'?devBaseUrl:prodBaseUrl
export function http(parmerObj){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:`${baseUrl}${parmerObj.url}`,
			data:parmerObj.data,
			method:parmerObj.method||"POST",
			header:{
				'Content-Type': 'application/json;charset=UTF-8',
				device: 'qwedfsdffqweqw',
				clientID: 3,
				'access-token': '52a27c91-531b-40ea-86d7-b74ec23139dc'
			},
			timeout:600000,
			dataType:parmerObj.parmerObj||"json",
			success:(res)=>{
				resolve(res.data)
			},
			fail:(err)=>{
				resolve(err)
			},
			complete:()=>{
				resolve()
			}
		})
	})
}
export default{
	http,
	baseUrl
}