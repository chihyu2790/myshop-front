<template>
  <q-page id="productType" class="q-mb-xxxl">
    <section class="container">
      <div class="q-pa-0">
        <q-carousel animated v-model="slide" swipeable arrows navigation infinite>
          <q-carousel-slide :name="1" img-src="https://i.imgur.com/5eEHvYI.png" />
          <q-carousel-slide :name="2" img-src="https://i.imgur.com/Bu3DY18.png" />
          <q-carousel-slide :name="3" img-src="https://i.imgur.com/onIrrST.jpg" />
          <!-- <q-carousel-slide :name="4" img-src="https://i.imgur.com/jLrO7h0.jpg" /> -->
          <q-carousel-slide id="product-slide-4" :name="4" class="column no-wrap">
            <div class="row fit justify-start items-center no-wrap">
              <q-card class="gt-xs col-6 full-height row items-center justify-center  q-pa-sm-md q-pa-lg-sm" flat
                bordered>
                <div>
                  <div class="text-h5 text-weight-bold">夏季新品推薦，讓您的穿搭更有層次</div>
                  <div class="text-body1 ">工作與日常都皆可自由搭配</div>
                </div>
              </q-card>
              <!-- <q-img class="col-12 img-unset col-sm-6 full-height " src="https://i.imgur.com/swt5GQc.jpg" /> -->
              <q-img src="https://i.imgur.com/swt5GQc.jpg" class="col-12 img-unset col-sm-6 full-height ">
                <div
                  class="row absolute-full justify-center text-center content-center lt-sm transparent-background text-shadow">
                  <div class="col-12 text-h4 q-mb-none q-mb-lg-sm text-weight-bold">夏季新品推薦</div>
                  <div class="col-8">
                    <q-separator class=" q-my-xs bg-white" />
                  </div>
                  <div class="col-12 text-body2 ">讓您的穿搭更有層次</div>
                </div>
              </q-img>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
      <div class="column q-my-xl items-center justify-center text-center">

        <div class="q-mx-md text-h2 text-weight-medium q-mb-lg">百搭服飾</div>
        <div class="q-mx-md text-h5 text-weight-regular q-mb-sm">舒適材質、貼心機能、精心設計</div>
        <div class="q-mx-md text-h5 text-weight-regular">給你精心設計的穿搭體驗</div>
      </div>
      <div class="row">
        <div class="col q-mt-md q-mb-lg">
          <div class="q-mx-md text-h4 text-weight-medium">{{  title  }}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-6 col-sm-4 col-2-4 " v-for='product in products' :key='product._id'>
          <ProductCard :product='product' />
        </div>
      </div>
    </section>
  </q-page>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { api } from '../boot/axios.js'
import ProductCard from '../components/ProductCard.vue'

const route = useRoute()
const router = useRouter()

const slide = ref(1)

const products = reactive([])

const title = ref('')
const form = reactive({
  classify: ''
})

const init = async () => {
  try {
    form.classify = route.params.id
    console.log(form.classify)
    const { data } = await api.post('/products/genre/', form)
    title.value = route.params.id
    products.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '女裝分類抓取錯誤'
    })
  }
}
init()
</script>
