<template>
  <q-page>
    <!-- tabs -->
    <!-- tabs -->
    <!-- tabs -->
    <div class="row lt-lg justify-center border-black bg-grey-2 q-py-xs">
      <q-tabs indicator-color="red" shrink>
        <q-route-tab exact name='/user' to='/user' label="個人資料" />
        <q-route-tab exact name='/order' to='/order' label="訂單查詢" />
      </q-tabs>
    </div>
    <!-- tabs -->
    <!-- tabs -->
    <!-- tabs -->
    <section class="container">
      <div class="row q-mt-none q-mt-lg-xl">
        <div class="col-2 gt-md">
          <div class="text-h6">我的帳戶</div>
          <router-link :to="'/user'">
            <div class="text-subtitle1 q-my-lg">個人資料</div>
          </router-link>
          <router-link :to="'/order'">
            <div class="text-subtitle1 q-my-lg">訂單查詢</div>
          </router-link>
        </div>
        <div class="col-12 col-lg-10">
          <div class="flex items-center text-center q-mb-lg q-mt-lg q-mt-lg-none">
            <div class="text-h4 text-weight-medium">訂單詳細</div>
            <q-space />
          </div>
          <div class="text-body1 q-mb-md">訂單詳細頁面</div>
          <q-card flat bordered class="q-pa-md q-mb-xxxl">

            <div class="text-h5 q-mb-md">訂單訊息</div>
            <div class="text-body2 text-weight-regular q-mb-xs">成立時間:{{ new Date(order.date).toLocaleDateString() }}
            </div>
            <div class="text-body2 text-weight-regular">訂單編號:{{ order._id }}</div>

            <q-separator class="q-my-md" />

            <div class="text-h5 q-mb-md">商品資訊</div>

            <q-card class="my-card" v-for="product in order.products" :key="product._id">
              <div class="row">
                <q-img class="col-2" :src='product.product.image[0]' />
                <div class="col-7 column q-ml-xs q-ml-lg-md">
                  <div class="text-h6">{{ product.product.name }}</div>
                  <q-space />
                  <div class="text-subtitle1 text-weight-medium">商品顏色:{{ product.color }}</div>
                  <div class="text-subtitle1 text-weight-medium">商品數量:{{ product.quantity }}</div>
                  <div class="text-subtitle1 text-weight-medium">商品尺寸:{{ product.size }}</div>
                </div>
                <div class="col column items-end">
                  <q-space />
                  <div class="text-subtitle1 text-weight-medium">NT$:{{ product.product.price * product.quantity }}
                  </div>
                </div>
              </div>
              <q-separator class="q-my-md" />
            </q-card>
            <div class="text-h5 q-mb-xl">配送訊息</div>
            <div class="text-body2 text-weight-regular q-mb-xs">取貨人名字:{{ order.getname }}</div>
            <div class="text-body2 text-weight-regular q-mb-xs">取貨人電話:{{ order.getphone }}</div>
            <div class="text-body2 text-weight-regular q-mb-xs">取貨人地址:{{ order.getaddress }}</div>
            <div class="text-body2 text-weight-regular q-mb-xs">取貨人信箱:{{ order.getemail }}</div>
            <q-separator class="q-my-md" />
            <q-card class="row reverse my-card q-mt-sm q-mt-lg-xl q-mb-xl">
              <div class="col-12 col-lg-2 q-mt-lg-xl">
                <div class="row justify-between">
                  <div class="text-subtitle1 text-weight-medium">商品金額</div>
                  <div class="text-subtitle1 text-weight-regular">{{ totalPrice }}</div>
                </div>
                <div class="row justify-between">
                  <div class="text-subtitle1 text-weight-medium">運費</div>
                  <div class="text-subtitle1 text-weight-regular">80</div>
                </div>
                <div class="row justify-between">
                  <div class="text-subtitle1 text-weight-medium">總金額</div>
                  <div class="text-subtitle1 text-weight-regular">{{ addPrice }}</div>
                </div>
              </div>
            </q-card>
          </q-card>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { apiAuth } from '../boot/axios.js'
import Swal from 'sweetalert2'
import { useUserStore } from '../stores/example-store'

const route = useRoute()
const router = useRouter()
const user = useUserStore()

const order = reactive({
  _id: '',
  date: '',
  getaddress: '',
  getemail: '',
  getname: '',
  getphone: '',
  getway: 0,
  products: []
})

const totalPrice = computed(() => {
  const total = order.products.reduce((a, b) => {
    return a + b.product.price * b.quantity
  }, 0)
  return total
})

const addPrice = computed(() => {
  const total = order.products.reduce((a, b) => {
    return a + b.product.price * b.quantity
  }, 0)
  if (total === 0) {
    return 0
  } else if (total >= 1500) {
    return total
  } else {
    return total + 80
  }
})

const init = async () => {
  try {
    const { data } = await apiAuth.get('/orders/' + route.params.id)
    // console.log(data.result)
    order._id = data.result._id
    order.date = data.result.date
    order.getaddress = data.result.getaddress
    order.getemail = data.result.getemail
    order.getname = data.result.getname
    order.getphone = data.result.getphone
    order.getway = data.result.getway
    order.products = data.result.products
    // console.log(data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得商品資料失敗'
    })
    router.go(-1)
  }
}
init()

</script>
