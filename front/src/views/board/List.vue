<script setup>
import api from '@/api/board'
import { onMounted, reactive } from 'vue'

const boardList = reactive([])

const getBoardList = async () => {
  const res = await api.list()
  boardList.push(...res)
}
onMounted(() => {
  getBoardList()
})
</script>

<template>
  <p v-for="post in boardList">
    <span>{{ post.idx }}</span
    ><span>{{ post.title }}</span>
  </p>
</template>

<style scoped></style>