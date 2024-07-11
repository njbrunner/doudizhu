import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUsernameStore = defineStore('username', () => {
  const username = ref('')

  return { username }
})
