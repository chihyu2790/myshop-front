<template>
  <q-page>
    <section class="container">
      <div class="row q-mt-lg q-mb-xxxxl">
        <div class="col-12 col-sm-6">
          <q-img :src="styling.image">
          </q-img>
        </div>
        <div class="q-ml-none q-ml-sm-md q-ml-lg-xl q-mt-xl q-mt-sm-xs col-12 col-sm">
          <div class="row">
            <q-avatar size="60px">
              <img :src="userInfo.avatar">
            </q-avatar>
            <div class="q-ml-md column justify-center">
              <div class="text-subtitle1 text-weight-bold">{{ userInfo.name }}</div>
              <div class=" row items-center text-center">
                <div class="text-subtitle1 ">{{ userInfo.stores.name }}</div>
                <q-icon class="q-ml-xs" name="fa-solid fa-angle-right" />
              </div>
            </div>
          </div>
          <div class="row q-mt-lg">
            <div class="col-12 column">
              <!-- <div class="text-subtitle1 text-weight-medium">{{ styling.name }}</div> -->
              <div class="text-body2 text-weight-regular q-mb-lg">{{ styling.description }}</div>
              <div class="text-body2 text-weight-regular">{{ new Date(styling.date).toLocaleDateString() }} 更新</div>
            </div>
            <div class="text-h5 text-weight-bold q-my-lg">穿搭單品</div>
            <q-card flat class="col-12 q-mb-lg" v-for="(product, idx) in styling.products" :key="idx">
              <div class="row q-mb-lg ">
                <div class="col-4">
                  <q-img class="pointer" :src="product.product.image[0]" @click="toProduct(product.product._id)">
                  </q-img>
                </div>
                <div class="q-ml-md col">
                  <div class="text-subtitle1 text-weight-bold q-mb-xs">{{ product.product.name }}</div>
                  <div class="text-body2 text-weight-thin q-mb-xs">尺寸:{{ product.size }}</div>
                  <div class="text-body2 text-weight-thin q-mb-xs">顏色:{{ product.color }}</div>
                </div>
              </div>
              <q-separator />
            </q-card>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { api } from '../boot/axios'
import Swal from 'sweetalert2'
import { useUserStore } from '../stores/example-store'
import { store } from 'quasar/wrappers'

const route = useRoute()
const router = useRouter()
const user = useUserStore()

const styling = reactive({
  _id: '',
  staff: '',
  image: '',
  nmae: '',
  description: '',
  date: '',
  products: []
})

const userInfo = reactive({
  _id: '',
  avatar: '',
  description: '',
  height: 0,
  name: '',
  stores: {
    name: ''
  }
})

const toProduct = (productId) => {
  router.push('/product/' + productId)
}

const init = async () => {
  try {
    const { data } = await api.get('/stylings/' + route.params.id)
    styling._id = data.result._id
    styling.staff = data.result.staff
    styling.image = data.result.image
    styling.products = data.result.products
    styling.name = data.result.name
    styling.description = data.result.description
    styling.date = data.result.date
    initStaff()
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得商品資料失敗'
    })
    router.go(-1)
  }
}

const initStaff = async () => {
  try {
    const { data } = await api.get('/staffs/info/' + styling.staff)
    // console.log(data.result)
    userInfo._id = data.result._id
    userInfo.avatar = data.result.avatar
    userInfo.description = data.result.description
    userInfo.height = data.result.height
    userInfo.name = data.result.name
    userInfo.stores = data.result.stores
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得店員資料失敗'
    })
    router.go(-1)
  }
}
init()

</script>
