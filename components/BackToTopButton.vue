<template>
    <button
      v-if="showButton"
      @click="scrollToTop"
      class="btn btn-primary position-fixed rounded-circle shadow"
      style="bottom: 20px; right: 20px; width: 50px; height: 50px; font-size: 24px; display: flex; justify-content: center; align-items: center;"
      aria-label="Back to top"
    >
    <b-icon icon="arrow-up"></b-icon>
    </button>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const showButton = ref(false)
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  const handleScroll = () => {
    showButton.value = window.scrollY > 200
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  </script>
  