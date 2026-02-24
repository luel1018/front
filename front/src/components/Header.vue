<script setup></script>

<template>
  <div>
    <RouterLink :to="{ name: 'boardList' }">목록</RouterLink>
    <RouterLink :to="{ name: 'boardReg' }">작성</RouterLink>
    <RouterLink :to="{ name: 'userSignup' }">회원가입</RouterLink>
  </div>
</template>

<style scoped>
a {
  margin-right: 1rem;
}
</style>