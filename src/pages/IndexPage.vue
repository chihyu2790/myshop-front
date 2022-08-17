<template>
  <q-page>
    <!-- -----------------------carousel----------------------- -->
    <section>
      <div class="q-pa-0">
        <q-carousel
          animated
          v-model="slide"
          arrows
          navigation
          infinite
        >
          <q-carousel-slide :name="1" img-src="https://i.imgur.com/Xkp5ekZ.jpg" />
          <q-carousel-slide :name="2" img-src="https://i.imgur.com/IOJCYl3.jpg" />
          <q-carousel-slide :name="3" img-src="https://i.imgur.com/gcgnMO3.jpg" />
          <q-carousel-slide :name="4" img-src="https://i.imgur.com/jLrO7h0.jpg" />
        </q-carousel>
      </div>
    </section>
    <!-- -----------------------popular----------------------- -->
    <section class="container q-my-xxxl">
      <div class="row">
        <div class="col-12 flex justify-center q-mb-xl">
          <div class="text-h4 text-weight-bold" >人氣商品 ． 好評登場</div>
        </div>
      </div>
      <div class="row">
        <div class="flex col-3 q-pa-md justify-center pointer q-mb-lg" v-for="product in products.slice(0,8)" :key="product._id" @click="toProduct(product._id)">
          <q-img :src="product.image[0]" :ratio="1/1" />
          <div class="text-body1 q-mt-lg" >{{product.name}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 flex justify-center q-my-xxl">
          <q-btn label="更多熱門商品" class="q-py-md q-px-xxxl" outline color="black" to="/product" />
        </div>
      </div>
      <q-separator />
    </section>
    <!-- -----------------------stylings----------------------- -->
    <section class="container q-my-xxl">
      <div class="row">
        <div class="col-12 flex justify-center ">
          <div class="text-h4 text-weight-bold" >STAFF STYLING</div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 flex justify-center q-mb-md q-pa-xl">
          <q-img src="https://i.imgur.com/1QeFiIc.jpg" class="pointer" :ratio="5/2" @click="toStylings()">
            <div class="row absolute-bottom text-center ">
              <div class="col-12 text-h6 q-mb-sm text-weight-light">時尚穿搭型錄 日本同步刊載</div>
              <div class="col-12 text-h3">Staff Styling 時尚顧問穿搭</div>
            </div>
          </q-img>
        </div>
      </div>
      <q-separator />
    </section>
    <!-- -----------------------notice----------------------- -->
    <section class="container q-my-xxl">
      <div class="row">
          <div class="col-12 flex justify-center ">
            <div class="text-h4 text-weight-bold q-mb-xl" >通知</div>
        </div>
      </div>

      <q-separator inset />

      <div class="row">
        <div class="col-6">
            <q-list>
            <q-item>
              <q-item-section>
                <q-item-label>【APP新會員折價券】首次下載GU APP並完成綁定網路會員綁定, 送$50折價券!</q-item-label>
              </q-item-section>

              <q-item-section side >
                <q-icon name="fa-solid fa-angle-right" />
              </q-item-section>
            </q-item>

            <q-separator inset />

            <q-item>
              <q-item-section>
                <q-item-label>【GU 網路商店】會員、訂單、退換貨相關問題</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-icon name="fa-solid fa-angle-right" />
              </q-item-section>
            </q-item>

            <q-separator inset />

            <q-item>
              <q-item-section>
                <q-item-label>【GU 網路商店】會員、訂單、退換貨相關問題</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-icon name="fa-solid fa-angle-right" />
              </q-item-section>
            </q-item>

            <q-separator inset />
          </q-list>
        </div>
        <div class="col-6">
            <q-list>
            <q-item>
              <q-item-section>
                <q-item-label>【APP新會員折價券】首次下載GU APP並完成綁定網路會員綁定, 送$50折價券!</q-item-label>
              </q-item-section>

              <q-item-section side >
                <q-icon name="fa-solid fa-angle-right" />
              </q-item-section>
            </q-item>

            <q-separator inset />

            <q-item>
              <q-item-section>
                <q-item-label>【GU 網路商店】會員、訂單、退換貨相關問題</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-icon name="fa-solid fa-angle-right" />
              </q-item-section>
            </q-item>

            <q-separator inset />
          </q-list>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Swal from 'sweetalert2'
import { api } from '../boot/axios.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const slide = ref(1)
const products = reactive([])

// *****************需要修改
const toStylings = () => {
  router.push('/styling')
}

const toProduct = (productId) => {
  router.push('/product/' + productId)
}

const init = async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '首頁抓取資料錯誤'
    })
  }
}

init()
</script>
