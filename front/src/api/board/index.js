import api from '@/plugins/axiosinterceptor'

const reg = async (req) => {
  let data = {}

  await api
    .post('/board/reg', req)
    .then((res) => {
      data = res.data
    })
    .catch((error) => {
      data = error.data
    })
  return data
}

export default { reg }
