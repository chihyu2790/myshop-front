<template>
  <q-page class="q-mb-xxxl">
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
            <div class="text-h4 text-weight-medium">訂單查詢</div>
            <q-space />
          </div>
          <div class="text-body1 q-mb-md">訂單查詢頁面</div>
          <!-- <q-card v-for='(order) in orders' :key='order._id'>
                        <q-card-section>
                            <div class="text-h7">{{new Date(order.date).toLocaleDateString()}}</div>
                            <div class="text-h6">{{ order._id }}</div>
                            <div class="text-h7">NT${{ order.totalPrice }}</div>
                            <q-btn outline style="color: black;" :label=order._id :to="'/order/' + order._id" />
                        </q-card-section>
                </q-card> -->
          <!-- :grid="$q.screen.xs" -->
          <q-table flat bordered :grid="$q.screen.lt.lg" :rows="orders" :columns="columns" row-key="name"
            :pagination="pagination">
            <template #body-cell-date="date">
              <q-td :date="date">
                <!-- {{ date.row.date }} -->
                {{ new Date(date.row.date).toLocaleDateString() }}
              </q-td>
            </template>
            <template #body-cell-totalPrice="totalPrice">
              <q-td :date="totalPrice">
                <span v-if="totalPrice.row.totalPrice < 1500">NT$ {{ totalPrice.row.totalPrice + 80 }}</span>
                <span v-else>NT$ {{ totalPrice.row.totalPrice }}</span>
              </q-td>
            </template>
            <template #body-cell-edit="edit">
              <q-td :edit="edit">
                <div class="row">
                  <q-space></q-space>
                  <q-btn outline class="q-px-xl" color="black" label="詳細訂單資訊" :to="'/order/' + edit.row._id" />
                </div>
              </q-td>
            </template>
            <template v-slot:item="edit">
              <div class="col-12 col-sm-6 q-pa-sm">
                <q-card class="q-pa-md" bordered flat>
                  <div class="column">
                    <div class="text-subtitle1 text-weight-bold">訂單日期</div>
                    <div class="text-subtitle1 text-weight-regular">{{ new Date(edit.row.date).toLocaleDateString() }}
                    </div>
                    <div class="text-subtitle1 text-weight-bold">訂單編號</div>
                    <div class="text-subtitle1 text-weight-regular">{{ edit.row._id }}</div>
                    <div class="text-subtitle1 text-weight-bold">價錢</div>
                    <div class="text-subtitle1 text-weight-regular q-mb-lg">{{ edit.row.totalPrice }}</div>
                    <q-btn outline color="black" label="詳細訂單資訊" :to="'/order/' + edit.row._id" />
                  </div>
                </q-card>
              </div>
            </template>
          </q-table>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue'
import { apiAuth } from '../boot/axios'
import Swal from 'sweetalert2'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const pagination = reactive({
  item: [],
  page: 1,
  rowsPerPage: 0
})

const columns = [
  { name: 'date', align: 'left', label: '訂單日期', field: 'date' },
  { name: '_id', align: 'left', label: '訂單編號', field: '_id' },
  // {
  //   name: 'name',
  //   required: true,
  //   label: '商品名稱',
  //   align: 'left',
  //   field: row => row.name,
  //   format: val => `${val}`
  //   // sortable: true
  // },
  { name: 'totalPrice', align: 'left', label: '價錢', field: 'totalPrice' },
  { name: 'edit', label: '', align: 'left', field: 'edit' }
]

const orders = reactive([])

const init = async () => {
  try {
    const { data } = await apiAuth.get('/orders')
    orders.push(...data.result.map(order => {
      order.totalPrice = order.products.reduce((a, b) => {
        return a + b.product.price * b.quantity
      }, 0)
      return order
    }))
    // console.log(orders)
  } catch (error) {
    // console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '無法取得訂單'
    })
  }
}
init()
</script>
