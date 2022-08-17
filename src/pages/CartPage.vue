<template>
<q-page>
  <section class="container">
    <div class="row">
      <div class="col-12">
        <q-img src="https://i.imgur.com/hFiccGF.jpg" class="pointer object-top" :ratio="7/1">
        </q-img>
        <div class="text-h5 text-weight-medium q-my-md">購物車</div>
        <q-separator class="q-my-sm" />
      </div>
      <div class="col-8 q-pr-md">
        <div class="text-h5 text-weight-medium">商品資訊</div>
        <q-card flat class="q-my-md" v-for='(item, idx) in cart' :key='item._id'>
          <div class="row">
            <div class="col-3">
              <q-img
              :src='item.product.image[0]'
              />
            </div>
            <div class="col-7 column q-ml-md">
              <div class="text-h6">{{ item.product.name }}</div>
              <q-space/>
              <div class="text-subtitle1 text-weight-medium">商品尺寸:{{ item.size }}</div>
              <div class="text-subtitle1 text-weight-medium">商品顏色:{{ item.color }}</div>
              <div class="text-subtitle1 text-weight-medium">數量:{{ item.quantity }}</div>
            </div>
            <div class="col column items-end">
              <div>
                <q-icon name="fa-solid fa-x" size="sm" class="pointer" @click="deleteCart(idx)"></q-icon>
              </div>
              <q-space/>
              <div class="text-subtitle1 text-weight-medium">NT$:{{item.product.price*item.quantity }}</div>
            </div>
          </div>
          <!-- <q-avatar size="24px" square :color=item.color  /> -->
          <!-- <q-btn color="black" label="刪除" @click="deleteCart(idx)" /> -->
          <q-separator  class="q-my-md" />
        </q-card>
      </div>
      <div class="col-4">
        <q-card flat square class="column bg-grey-2 q-pa-md q-mb-md q-mt-sm">
          <div class="row justify-between">
            <div class="text-subtitle1 text-weight-medium">總金額</div>
            <div class="text-subtitle1 text-weight-regular">{{addPrice}}</div>
          </div>
          <q-separator  class="q-my-md" />
          <div class="row justify-between">
            <div class="text-subtitle1 text-weight-medium">商品金額</div>
            <div class="text-subtitle1 text-weight-regular">{{totalPrice}}</div>
          </div>
          <div class="row justify-between">
            <div class="text-subtitle1 text-weight-medium">運費</div>
            <div class="text-subtitle1 text-weight-regular">80</div>
          </div>
          <q-separator  class="q-my-md"  />
          <div class="row justify-between">
            <div class="text-subtitle1 text-weight-medium">總金額</div>
            <div class="text-subtitle1 text-weight-regular">{{addPrice}}</div>
          </div>
        </q-card>
        <q-btn outline color="black" class="full-width q-py-sm text-subtitle1 text-weight-medium" label="商品結帳" to='/place' />
      </div>
    </div>
  </section>
</q-page>
</template>

<script setup>
import { reactive, computed } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../boot/axios'
import { useUserStore } from '../stores/example-store'

const user = useUserStore()

const cart = reactive([])

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

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.splice(0, cart.length)
    cart.push(...data.result)
    console.log(cart)
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
