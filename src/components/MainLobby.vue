<template>
  <div>
    <h1>DouDizhu</h1>
    <label for="userNameInput">Name:</label>
    <InputText id="userNameInput" type="text" v-model="username" />
    <Button @click="handleClick">Create Game</Button>
  </div>
</template>

<script setup lang="ts">
import router from '../router/index'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { useUsernameStore } from '@/stores/username'
import { storeToRefs } from 'pinia'

const usernameStore = useUsernameStore()
const { username } = storeToRefs(usernameStore)

function handleClick() {
  router.push({ name: 'game' })
}
</script>

<style></style>
