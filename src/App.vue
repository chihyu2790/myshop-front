<template>
  <router-view />
  <!-- <router-view :key="route.fullPath"></router-view> -->
</template>

<script setup>
// import { defineComponent } from 'vue'
import { useUserStore } from '../src/stores/example-store'

useUserStore().getUser()
// export default defineComponent({
//   name: 'App'
// })
</script>
