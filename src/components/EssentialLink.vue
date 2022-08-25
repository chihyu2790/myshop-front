<template>
  <q-item clickable tag="a" exact active-class="my-menu-link" :to="link.link">
    <!-- <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section> -->

    <q-item-section>
      <q-item-label>{{ link.title }}</q-item-label>
      <!-- <q-item-label caption>{{ caption }}</q-item-label> -->
    </q-item-section>
  </q-item>
</template>

<script setup>

defineProps([
  'link'
])
// import { defineComponent } from 'vue'

// export default defineComponent({
//   name: 'EssentialLink',
//   props: {
//     title: {
//       type: String,
//       required: true
//     },

//     caption: {
//       type: String,
//       default: ''
//     },

//     link: {
//       type: String,
//       default: '#'
//     },

//     icon: {
//       type: String,
//       default: ''
//     }
//   }
// })
</script>
