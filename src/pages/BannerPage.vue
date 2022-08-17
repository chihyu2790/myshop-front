<template>
    <section class="container">
        <div class="row">
            <div class="col-3 q-pa-md" v-for='product in products' :key='product._id'>
                  <ProductCard :product='product'/>
            </div>
        </div>
    </section>
</template>
<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { api } from '../boot/axios.js'
import ProductCard from '../components/ProductCard.vue'

const form = reactive({
  color: 'red'
})

const products = reactive([])

const init = async () => {
  try {
    const { data } = await api.post('/products/genre', form)
    products.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '伺服器錯誤'
    })
  }
}
init()
</script>
