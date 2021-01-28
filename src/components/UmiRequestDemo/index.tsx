import { useRequest } from '@umijs/hooks'
import axios from 'axios'

function getData() {
  return axios.get('http://localhost:3000/api')
}
interface userData {
  data: {
    name: string
    age: string
  }[]
}
function Request() {
  const { data, error, loading } = useRequest<userData>(getData)
  console.log(data)
  return (
    <div className='App'>
      {loading ? <div>loading</div> : ''}
      {error ? (
        <div>服务端请求失败</div>
      ) : (
        <div>UserName：{data?.data[0].age}</div>
      )}
    </div>
  )
}

export default Request
