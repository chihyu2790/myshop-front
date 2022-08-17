<template>
    <q-page>
        <section class="container">
          <div class="row q-mt-xl">
            <div class="col-2" >
              <div class="text-h6">後台管理</div>
              <router-link :to="'/admin/user'"><div class="text-subtitle1 q-my-lg">使用者管理</div></router-link>
              <router-link :to="'/admin/product'"><div class="text-subtitle1 q-my-lg">商品管理</div></router-link>
              <router-link :to="'/admin/store'"><div class="text-subtitle1 q-my-lg">店鋪管理</div></router-link>
              <router-link :to="'/admin/order'"><div class="text-subtitle1 q-my-lg">訂單管理</div></router-link>
              <div class="text-subtitle1 q-my-lg">活動管理</div>
              <div class="text-subtitle1 q-my-lg">登出</div>
            </div>
            <div class="col-10">
              <div class="flex items-center text-center q-mb-lg">
                  <div class="text-h4 text-weight-medium" v-if='!dialog'>訂單管理</div>
                  <div class="text-h4 text-weight-medium" v-if='dialog'>修改訂單</div>
                  <q-space />
                </div>
              <div class="text-body1 q-mb-md" >管理訂單頁面</div>
              <q-table
              v-if='!dialog'
              :grid="$q.screen.xs"
              flat
              bordered
              :rows="orders"
              :columns="columns"
              row-key="name"
              :filter="filter"
              >
              <template #body-cell-date="date">
                <q-td :date="date">
                <!-- {{date.row.date}} -->
                  {{new Date(date.row.date).toLocaleDateString()}}
                </q-td>
              </template>
              <template #body-cell-userid="userid">
                <q-td :userid="userid">
                  {{userid.row.user._id}}
                </q-td>
              </template>
                <template #body-cell-totalPrice="totalPrice">
                  <q-td :date="totalPrice">
                    <span v-if="totalPrice.row.totalPrice<1500" >NT$ {{totalPrice.row.totalPrice+80}}</span>
                    <span v-else>NT$ {{totalPrice.row.totalPrice}}</span>
                  </q-td>
                </template>
                <template #body-cell-edit="edit">
                  <q-td :edit="edit">
                    <div class="column">
                      <q-btn class="q-mb-sm q-px-lg" outline @click="openDialog(edit.row._id,edit.rowIndex)" >修改</q-btn>
                      <q-btn outline @click="deletee(edit.row._id)">刪除</q-btn>
                    </div>
                  </q-td>
                </template>
              </q-table>

              <q-card flat bordered v-else >
                <q-form @submit.prevent='submitForm' class="q-pa-md">
                  <div class="text-h5">訂單詳細</div>
                  <q-separator class="q-my-md"/>
                  <div class="text-h6 ">配送訊息</div>
                  <q-separator class="q-my-md" />
                  <div style="max-width: 400px" class="q-mb-xl" >
                    <div class="text-subtitle1 text-weight-medium">取貨人名字:</div>
                    <q-input v-model="form.getname" :rules='[rules.required]' color="black" />
                    <div class="text-subtitle1 text-weight-medium">取貨人電話:</div>
                    <q-input v-model="form.getphone" :rules='[rules.required]' color="black" />
                    <div class="text-subtitle1 text-weight-medium">取貨人地址:</div>
                    <q-input v-model="form.getaddress" :rules='[rules.required]' color="black" />
                    <div class="text-subtitle1 text-weight-medium">取貨人信箱:</div>
                    <q-input v-model="form.getemail" :rules='[rules.required]' color="black" />
                  </div>
                  <div class="text-h6">商品資訊</div>
                  <q-separator class="q-my-md" />
                  <q-card flat v-for="product in form.products" :key="product._id">
                    <div class="row">
                      <q-img
                        class="col-2"
                        :src='product.product.image[0]'
                        />
                      <div class="col-8 q-ml-md">
                        <div class="row items-center text-subtitle2 text-weight-medium">
                          商品顏色:
                          <q-avatar :color="product.color" size="xs" class="q-ml-xs" :key="idx"/>
                        </div>
                        <q-radio class="q-my-md" color="black" v-for="(color,idx) in product.product.color" v-model="product.color" :val="color" :label="color" :key="idx"/>
                        <div class="text-subtitle2 text-weight-medium">商品尺寸: {{ product.size }}</div>
                        <q-radio class="q-my-md" color="black" v-for="(size,idx) in product.product.size" v-model="product.size" :val="size" :label="size" :key="idx"/>
                        <div class="text-subtitle2 text-weight-medium">數量:</div>
                        <div style="max-width: 400px" >
                          <q-input v-model="product.quantity" :rules='[rules.required]' color="black" />
                        </div>
                      </div>
                      <q-space/>
                      <div class="col column reverse">
                        <div class="row reverse">
                          <div class="text-subtitle2 text-weight-medium q-mr-md">NT$:{{ product.product.price*product.quantity }}</div>
                        </div>
                      </div>
                    </div>
                    <q-separator  class="q-my-md"/>
                  </q-card>
                  <div class="q-my-xxl">
                    <q-btn outline class="q-py-sm q-px-xxl text-subtitle2 q-mr-md" color="black" label="取消"  @click='dialog = false' :disabled='form.submitting' />
                    <q-btn unelevated class="q-py-sm q-px-xxl text-subtitle2" type='submit' color="black text-white" label="確定" />
                  </div>
                </q-form>
              </q-card>
            </div>
          </div>

            <!-- <div v-if='!dialog' class="row">
                <div class="col-3 q-pa-md" v-for='(order,idx) in orders' :key='idx'>
                    <q-card >
                        <div class="text-subtitle2">ID:{{ order._id }}</div>
                        <div class="text-subtitle2">時間:{{ new Date(order.date).toLocaleDateString() }}</div>
                        <div class="text-subtitle2">使用者:{{ order.user.account }}</div>
                        <q-btn label="刪除" @click="deletee(order._id)" color="black"/>
                        <q-btn label="修改" @click="openDialog(order._id, idx)" color="black"/>
                    </q-card>

                </div>
            </div> -->
        </section>
    </q-page>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { apiAuth } from '../../boot/axios'
import Swal from 'sweetalert2'

const orders = reactive([])

const columns = [
  { name: 'date', align: 'left', label: '訂單日期', field: 'date' },
  { name: '_id', align: 'left', label: '訂單編號', field: '_id' },
  { name: 'userid', align: 'left', label: '訂購人編號', field: 'userid' },
  { name: 'totalPrice', align: 'left', label: '總價錢', field: 'totalPrice' },
  { name: 'edit', label: '', align: 'left', field: 'edit' }
]

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
  console.log(orders[idx])
  form._id = orders[idx]._id
  // form.name = orders[idx].user
  // form.date = orders[idx].date
  form.getname = orders[idx].getname
  form.getaddress = orders[idx].getaddress
  form.getemail = orders[idx].getemail
  form.getphone = orders[idx].getphone
  form.products.splice(0, form.products.length)
  // 淺層複製問題
  form.products.push(...JSON.parse(JSON.stringify(orders[idx].products)))
  // form.products.push(...orders[idx].products)
  // form.products = orders[idx].products
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
    console.log(orders)
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
