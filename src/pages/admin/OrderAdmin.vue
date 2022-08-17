<template>
    <q-page>
        <section class="container">
            <div v-if='!dialog' class="row">
                <div class="col-3 q-pa-md" v-for='(order,idx) in orders' :key='idx'>
                    <q-card >
                        <div class="text-subtitle2">ID:{{ order._id }}</div>
                        <div class="text-subtitle2">時間:{{ new Date(order.date).toLocaleDateString() }}</div>
                        <div class="text-subtitle2">使用者:{{ order.user.account }}</div>
                        <q-btn label="刪除" @click="deletee(order._id)" color="black"/>
                        <q-btn label="修改" @click="openDialog(order._id, idx)" color="black"/>
                    </q-card>

                </div>
            </div>
            <q-card flat v-else >
              <q-form @submit.prevent='submitForm' class="q-pa-md">
                <q-card-section>
                    <div class="text-h6">訂單詳細</div>
                </q-card-section>
                <q-separator  inset />
                <q-card-section>
                  <div class="text-h6">配送訊息</div>
                  <q-separator  />
                  <div class="text-subtitle2">取貨人名字{{form.getname}}</div>
                  <q-input v-model="form.getname" :rules='[rules.required]' color="black" />
                  <div class="text-subtitle2">取貨人電話{{form.getphone}}</div>
                  <q-input v-model="form.getphone" :rules='[rules.required]' color="black" />
                  <div class="text-subtitle2">取貨人地址{{form.getaddress}}</div>
                  <q-input v-model="form.getaddress" :rules='[rules.required]' color="black" />
                  <div class="text-subtitle2">取貨人信箱{{form.getemail}}</div>
                  <q-input v-model="form.getemail" :rules='[rules.required]' color="black" />
                </q-card-section>
                <q-card-section>
                  <div class="text-h6">商品訊息</div>
                </q-card-section>
                <q-separator  inset />
                <q-card flat class="my-card q-pa-sm" v-for="product in form.products" :key="product._id">
                  <q-card-section horizontal>
                      <q-img
                        class="col-2"
                        :src='product.product.image[0]'
                        />
                      <q-card-section>
                        <div class="text-subtitle2">{{product.product.color}}</div>
                        <div class="text-subtitle2">商品顏色:{{ product.color }}</div>
                        <q-avatar v-for="(color,idx) in product.product.color" :style="{background:color}" size="24px" :key="idx"/>
                        <q-radio v-for="(color,idx) in product.product.color" v-model="product.color" :val="color" :label="color" :key="idx"/>
                        <div class="text-subtitle2">商品尺寸:{{ product.size }}</div>
                        <q-radio v-for="(size,idx) in product.product.size" v-model="product.size" :val="size" :label="size" :key="idx"/>
                        <div class="text-subtitle2">商品數量:{{ product.quantity }}</div>
                        <q-input v-model="product.quantity" :rules='[rules.required]' color="black" />
                        <div class="text-subtitle2">商品價錢:{{ product.product.price }}</div>
                      </q-card-section>
                  </q-card-section>
                  <q-separator  class="q-mt-md"/>
                </q-card>
                <q-btn outline color="black" label="取消" @click='dialog = false' :disabled='form.submitting' />
                <q-btn type='submit' color="black text-white" label="確定" />
              </q-form>
            </q-card>
        </section>
    </q-page>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { apiAuth } from '../../boot/axios'
import Swal from 'sweetalert2'

const orders = reactive([])

const form = reactive({
  _id: '',
  date: '',
  getname: '',
  getaddress: '',
  getemail: '',
  getphone: '',
  products: []
  // idx: -1,
  // totalPrice: 0
  // dialog: false
})

const dialog = ref(false)

const openDialog = (_id, idx) => {
  form._id = orders[idx]._id
  // form.name = orders[idx].user
  // form.date = orders[idx].date
  form.getname = orders[idx].getname
  form.getaddress = orders[idx].getaddress
  form.getemail = orders[idx].getemail
  form.getphone = orders[idx].getphone
  form.products = orders[idx].products
  // form.totalPrice = orders[idx].totalPrice
  // form.idx = idx
  // form.dialog = true
  dialog.value = true
  // console.log(form)
}

const rules = reactive({
  required (v) {
    return !!v || '必填'
  },
  price (v) {
    return v > -1 || '必須大於等於 0'
  },
  size (v) {
    return !v || !v.length || (v[0]?.type?.includes('image') && v[0]?.size < 1024 * 1024) || '檔案格式不符'
  }
})

const deletee = async (orderid) => {
  try {
    await apiAuth.delete('/users/' + orderid)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '刪除成功'
    })
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
    })
  }
}

// const submitForm = async () => {
//   form.submitting = true

//   const fd = new FormData()
//   for (const key in form) {
//     if (['_id', 'idx', 'dialog', 'valid', 'submitting'].includes(key)) continue
//     // else if (key === 'image') fd.append(key, form[key][0])
//     // fd比較特別他不能塞陣列，所以我們要把陣列內的內容用同key傳進去，後台node.js看到同key會知道是陣列。
//     else if (key === 'products') {
//       for (const products of form.products) {
//         fd.append(key, products)
//       }
//     } else fd.append(key, form[key])
//   }
//   try {
//     const { data } = await apiAuth.patch('/orders/' + form._id, fd)
//     orders[form.idx] = data.result
//     Swal.fire({
//       icon: 'success',
//       title: '成功',
//       text: '編輯成功'
//     })

//     form.dialog = false
//   } catch (error) {
//     Swal.fire({
//       icon: 'success',
//       title: '失敗',
//       text: error.isAxiosError ? error.response.data.message : error.message
//     })
//   }
//   form.submitting = false
// }

const submitForm = async () => {
  try {
    console.log(form)
    const { data } = await apiAuth.patch('/orders/' + form._id, form)
    // orders[form.idx] = data.result
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '編輯成功'
    })

    form.dialog = false
  } catch (error) {
    Swal.fire({
      icon: 'success',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
  form.submitting = false
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/orders/all')
    orders.push(...data.result.map(order => {
      order.totalPrice = order.products.reduce((a, b) => {
        return a + b.product.price * b.quantity
      }, 0)
      return order
    }))
    // console.log(orders)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '無法取得訂單'
    })
  }
}
init()
</script>
