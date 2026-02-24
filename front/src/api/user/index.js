import api from '@/plugins/axiosinterceptor'

const signup = async (req) => {
  let data = {}

  await api
    .post('/user/signup', req)
    .then((res) => {
      data = res.data
    })
    .catch((error) => {
      data = error.data
    })
  return data
}

export default { signup }