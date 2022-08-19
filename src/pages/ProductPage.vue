<template>
  <q-page id="productPage">
    <section class="container">
      <div class="q-pa-0 q-mt-xxl">
        <q-carousel animated v-model="slide" arrows navigation infinite>
          <q-carousel-slide :name="1" img-src="https://i.imgur.com/Xkp5ekZ.jpg" />
          <q-carousel-slide :name="2" img-src="https://i.imgur.com/IOJCYl3.jpg" />
          <q-carousel-slide :name="3" img-src="https://i.imgur.com/gcgnMO3.jpg" />
          <q-carousel-slide :name="4" img-src="https://i.imgur.com/jLrO7h0.jpg" />
          <q-carousel-slide :name="5" class="column no-wrap">
            <div class="row fit justify-start items-center no-wrap">
              <q-card class=" col-6 full-height row items-center justify-center" flat bordered>
                <div>
                  <div class="text-h5 text-weight-bold">夏季新品推薦，讓您的穿搭更有層次</div>
                  <div class="text-body1 ">工作與日常都皆可自由搭配</div>
                </div>
              </q-card>
              <q-img class=" col-6 full-height" src="https://i.imgur.com/U950qCi.jpg" />
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </section>
    <section class="container">
      <div class="row">
        <div class="col q-mt-xl q-mb-sm">
          <q-card bordered flat class="row justify-center items-center q-pa-lg">
            <div class="q-mx-md text-h6">上衣</div>
            <div class="q-mx-md text-h6">長褲</div>
            <div class="q-mx-md text-h6">牛仔褲</div>
            <div class="q-mx-md text-h6">長裙</div>
          </q-card>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="row">
        <div class="col-6 col-sm-4 col-2-4 " v-for='product in products' :key='product._id'>
          <ProductCard :product='product' />
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
/*eslint-disable */
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import { api } from '../boot/axios.js'
import ProductCard from '../components/ProductCard.vue'

const slide = ref(1)

const products = reactive([])

const init = async () => {
  try {
    const { data } = await api.get('/products')
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
