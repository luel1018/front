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

const list = async () => {
  let data = {}

  await api
    .get('/board/list')
    .then((res) => {
      data = res.data
    })
    .catch((error) => {
      data = error.data
    })
  return data
}

const read = async (boardIdx) => {
  let data = {}

  await api
    .get(`/board/read/${boardIdx}`)
    .then((res) => {
      data = res.data
    })
    .catch((error) => {
      data = error.data
    })
  return data
}

const update = async (boardIdx, req) => {
  let data = {}
  console.log(boardIdx, req)
  await api
    .put(`/board/update/${boardIdx}`, req)
    .then((res) => {
      data = res.data
    })
    .catch((error) => {
      data = error.data
    })
  return data
}

const boardDelete = async (boardIdx) => {
  let data = {}
  await api
    .delete(`/board/delete/${boardIdx}`)
    .then((res) => {
      data = res.data
    })
    .catch((error) => {
      data = error.data
    })
  return data
}

export default { reg, list, read, update, boardDelete }