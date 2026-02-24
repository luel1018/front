<script setup>
import api from '@/api/user'
import { reactive } from 'vue'

const userInput = reactive({
  email: '',
  name: '',
  password: '',
})

const submitForm = async () => {
  const data = await api.signup(userInput)
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <p>이메일 <input name="email" v-model="userInput.email" /></p>
    <p>이름 <input name="name" v-model="userInput.name" /></p>
    <p>비밀번호 <input type="password" name="password" v-model="userInput.password" /></p>

    <button>회원 가입</button>
  </form>
</template>

<style scoped></style>