<template>
  <q-page class="q-mb-xxxl">
    <section class="container">
      <div class="row">
        <div class="col">
          <q-form @submit="checkout">
            <q-card flat class="q-mt-sm q-mt-lg-xl ">
              <div class="text-h4 text-weight-medium">訂單資訊</div>

              <q-separator class="q-my-md" />

              <div class="text-h5">取貨方式</div>

              <q-separator class="q-my-md" />
              <div class="q-my-xl column">
                <q-radio v-model="form.getway" :val=0 label="7-11貨到府款" color="black" />
                <q-radio v-model="form.getway" :val=1 label="宅配到府" color="black" />
              </div>
              <div class="text-h5">取貨人資訊</div>
              <q-separator class="q-my-md" />
              <div style="max-width: 600px" class="q-my-xl">
                <div class="text-subtitle1 text-weight-medium">取貨人名字:</div>
                <q-input dense class="q-mb-lg" v-model="form.getname" :rules='[rules.required]' color="black" />
                <div class="text-subtitle1 text-weight-medium">取貨人電話:</div>
                <q-input dense class="q-mb-lg" v-model="form.getphone" :rules='[rules.required]' color="black" />
                <div class="text-subtitle1 text-weight-medium">取貨人地址:</div>
                <q-input dense class="q-mb-lg" v-model="form.getaddress" :rules='[rules.required]' color="black" />
                <div class="text-subtitle1 text-weight-medium">取貨人e-mail:</div>
                <q-input dense class="q-mb-lg" v-model="form.getemail" :rules='[rules.required]' color="black" />
              </div>
              <div class="text-h5">商品資訊</div>

              <q-separator class="q-my-md" />
              <q-card class="my-card" flat v-for='(item, idx) in cart' :key='item._id'>
                <div class="row">
                  <q-img class="col-2" :src='item.product.image[0]' />
                  <div class="col-7 column q-ml-xs q-ml-lg-md">
                    <div class="text-h6">{{ item.product.name }}</div>
                    <q-space />
                    <div class="text-subtitle1 text-weight-medium">商品尺寸:{{ item.size }}</div>
                    <div class="text-subtitle1 text-weight-medium">商品顏色:{{ item.color }}</div>
                    <div class="text-subtitle1 text-weight-medium">數量:{{ item.quantity }}</div>
                  </div>
                  <div class="col column items-end">
                    <q-icon name="fa-solid fa-x" size="sm" class="pointer" @click="deleteCart(idx)"></q-icon>
                    <q-space />
                    <div class="text-subtitle1 text-weight-medium">NT$:{{ item.product.price * item.quantity }}</div>
                  </div>
                </div>
                <q-separator class="q-my-md" />
              </q-card>
              <q-card class="row reverse my-card q-mt-sm q-mt-lg-xl">
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
              <q-separator class="q-my-md" />
              <div class="row reverse q-mt-xl">
                <div class="col-12 col-sm-6 col-lg-3">
                  <q-btn unelevated square color="red" class="q-py-sm full-width text-subtitle1 text-weight-medium"
                    label="商品結帳" type="submit" />
                </div>
              </div>
            </q-card>
          </q-form>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>

import { reactive, computed, ref } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../boot/axios'
import { useUserStore } from '../stores/example-store'

const user = useUserStore()

const cart = reactive([])

const form = reactive({
  getway: '',
  getname: '',
  getphone: '',
  getemail: '',
  getaddress: ''
})

const rules = reactive({
  required(v) {
    return !!v || '必填'
  },
  price(v) {
    return v > -1 || '必須大於等於 0'
  },
  size(v) {
    return !v || !v.length || (v[0]?.type?.includes('image') && v[0]?.size < 1024 * 1024) || '檔案格式不符'
  }
})

const totalPrice = computed(() => {
  const total = cart.reduce((a, b) => {
    return a + b.product.price * b.quantity
  }, 0)
  return total
  // return cart.reduce((a, b) => {
  //   return a + b.product.price * b.quantity
  // }, 0)
})

const addPrice = computed(() => {
  const total = cart.reduce((a, b) => {
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

const deleteCart = async (idx) => {
  const result = await user.deleteCart({ product: cart[idx].product._id, color: cart[idx].color, size: cart[idx].size })
  init()
}

const checkout = () => {
  // console.log(form)
  user.checkout(form)
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.splice(0, cart.length)
    cart.push(...data.result)
    // console.log(cart)
    // console.log(cart[1].product)
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
