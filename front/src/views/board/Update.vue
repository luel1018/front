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

const submitForm = async () => {
  console.log('update')
  const data = await api.update(boardIdx, board.value)
}

onMounted(() => {
  getBoard()
})
</script>

<template>
  <form @submit.prevent="submitForm">
    <p>
      <input name="title" v-model="board.title" />
    </p>
    <p>
      <textarea name="contents" v-model="board.contents" />
    </p>

    <button>게시글 수정</button>
  </form>
</template>

<style scoped></style>