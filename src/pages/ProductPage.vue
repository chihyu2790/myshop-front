<template>
  <q-page id="productPage">
    <section class="container">
      <div class="q-pa-0">
        <q-carousel animated v-model="slide" arrows navigation infinite>
          <q-carousel-slide :name="1" img-src="https://i.imgur.com/5eEHvYI.png" />
          <q-carousel-slide :name="2" img-src="https://i.imgur.com/Bu3DY18.png" />
          <q-carousel-slide :name="3" img-src="https://i.imgur.com/onIrrST.jpg" />
          <!-- <q-carousel-slide :name="4" img-src="https://i.imgur.com/jLrO7h0.jpg" /> -->
          <q-carousel-slide :name="4" class="column no-wrap">
            <div class="row fit justify-start items-center no-wrap">
              <q-card class=" col-6 full-height row items-center justify-center q-pa-sm" flat bordered>
                <div>
                  <div class="text-h5 text-weight-bold">夏季新品推薦，讓您的穿搭更有層次</div>
                  <div class="text-body1 ">工作與日常都皆可自由搭配</div>
                </div>
              </q-card>
              <q-img class="img-unset col-6 full-height " src="https://i.imgur.com/U950qCi.jpg" />
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </section>
    <section class="container">
      <div class="column q-my-xl items-center justify-center">

        <div class="q-mx-md text-h2 text-weight-medium q-mb-lg">百搭服飾</div>
        <div class="q-mx-md text-h5 text-weight-regular q-mb-sm">舒適材質、貼心機能、精心設計</div>
        <div class="q-mx-md text-h5 text-weight-regular">給你精心設計的穿搭體驗</div>
      </div>
      <div class="row">
        <div class="col q-mt-md q-mb-sm">
          <q-card bordered flat class="row  items-center q-pa-lg">
            <div class="q-mx-md text-h6">所有商品</div>
            <!-- <div class="q-mx-md text-h6">長褲</div>
            <div class="q-mx-md text-h6">牛仔褲</div>
            <div class="q-mx-md text-h6">長裙</div> -->
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
