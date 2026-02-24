<script setup>
import api from '@/api/board'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'

const route = useRoute()
const boardIdx = route.params.boardIdx
const board = ref({
  idx: 0,
  title: '',
  contents: '',
})

const getBoard = async () => {
  const data = await api.read(boardIdx)
  console.log(data)
  board.value = data
}

const deleteBoard = async () => {
  await api.boardDelete(boardIdx)
}
onMounted(() => {
  getBoard()
})
</script>

<template>
  <p>
    <span>{{ board.idx }}</span>
  </p>
  <p>
    <span>{{ board.title }}</span>
  </p>
  <p>
    <span>{{ board.contents }}</span>
  </p>

  <button @click="deleteBoard">삭제하기</button>
</template>

<style scoped></style>