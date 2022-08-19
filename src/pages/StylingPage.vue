<template>
  <q-page>
    <section class="container">
      <div class="q-mt-xxl">
        <div class="text-h4 text-weight-bold">STYLING BOOK</div>
      </div>
      <q-separator class="q-mt-lg q-mb-sm" />
      <div class="row">
        <div class="col-3 q-pa-xs pointer" v-for="(styling, idx) in stylingItems" :key="idx">
          <q-img class="col-12" :src="styling.image" :ratio="4 / 5" @click="toStyling(styling._id)">
          </q-img>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import { api } from '../boot/axios'
import { useUserStore } from '../stores/example-store'
import { useRouter } from 'vue-router'
const router = useRouter()

const toStyling = (stylingId) => {
  console.log(stylingId)
  router.push('/styling/' + stylingId)
}

const stylingItems = reactive([])
const init = async () => {
  try {
    const { data } = await api.get('/stylings/all')
    stylingItems.splice(0, stylingItems.length)
    stylingItems.push(...data.result)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

init()
</script>
