<script setup>
import api from '@/api/board'
import { reactive } from 'vue'

const boardInput = reactive({
  title: '',
  contents: '',
})

const submitForm = async () => {
  const data = await api.reg(boardInput)
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <p>
      <input name="title" v-model="boardInput.title" />
    </p>
    <p>
      <textarea name="contents" v-model="boardInput.contents" />
    </p>

    <button>게시글 작성</button>
  </form>
</template>

<style scoped></style>
