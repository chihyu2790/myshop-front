<template>
    <q-page>
        <section class="container">
            <div class="row q-mt-lg">
                <div class="col-6">
                    <q-img
                    :src="styling.image"
                    >
                    </q-img>
                </div>
                <div class="q-ml-xl q-mt-xs col">
                    <div class="row">
                        <q-avatar size="80px">
                            <img :src="userInfo.avatar">
                        </q-avatar>
                        <div class="q-ml-md column justify-center">
                            <div class="text-h6 text-weight-bold">{{userInfo.name}}</div>
                            <div class="text-h6 text-weight-regular">{{userInfo.stores.name}}</div>
                        </div>
                    </div>
                    <div class="row q-mt-xl">
                        <div class="text-h5 text-weight-bold q-mb-lg">穿搭單品</div>
                        <q-card flat class="col-12 q-mb-lg" v-for="(product,idx) in styling.products" :key="idx">
                            <div class="row q-mb-lg ">
                                <div class="col-4">
                                    <q-img :src="product.product.image[0]" @click="toProduct(product.product._id) "></q-img>
                                </div>
                                <div class="q-ml-md col">
                                    <div class="text-subtitle1 text-weight-medium">{{product.product.name}}</div>
                                    <div class="text-subtitle1 text-weight-medium">尺寸:{{product.size}}</div>
                                    <div class="text-subtitle1 text-weight-medium">顏色:{{product.color}}</div>
                                </div>
                            </div>
                            <q-separator />
                        </q-card>
                    </div>
                </div>
            </div>
            <div class="col-12"></div>
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

// 跳不了頁
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
    // console.log(styling)
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
