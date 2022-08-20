<template>
  <q-page>
    <section class="container">
      <div class="row q-mt-xl">
        <div class="col-2">
          <div class="text-h6">後台管理</div>
          <router-link :to="'/admin/user'">
            <div class="text-subtitle1 q-my-lg">使用者管理</div>
          </router-link>
          <router-link :to="'/admin/product'">
            <div class="text-subtitle1 q-my-lg">商品管理</div>
          </router-link>
          <router-link :to="'/admin/store'">
            <div class="text-subtitle1 q-my-lg">店鋪管理</div>
          </router-link>
          <router-link :to="'/admin/order'">
            <div class="text-subtitle1 q-my-lg">訂單管理</div>
          </router-link>
          <div class="text-subtitle1 q-my-lg">活動管理</div>
          <div class="text-subtitle1 q-my-lg">登出</div>
        </div>
        <div class="col-10">
          <div class="flex items-center text-center q-mb-lg">
            <div class="text-h4 text-weight-medium" v-if='!opendialog'>店鋪管理</div>
            <div class="text-h4 text-weight-medium" v-if='opendialog'>新增店鋪</div>
            <q-space />
            <q-btn v-if='!opendialog' class="q-px-xl" outline color="black" label="新增店鋪" @click="opendialog = true" />
          </div>
          <div class="text-body1 q-mb-md">管理店鋪頁面</div>

          <div v-if='!opendialog'>
            <!-- <q-card  flat bordered class="q-pa-md q-mb-lg" v-for="store in stores" :key="store._id" >
            <div class="text-subtitle1 text-weight-bold q-mb-lg">{{store.name}}</div>
            <div class="text-subtitle1 text-weight-medium">{{store.phone}}</div>
            <div class="text-subtitle1 text-weight-medium">店鋪位址: {{store.address}}</div>
            <div class="text-subtitle1 text-weight-medium">營業時間: {{store.time}}</div>
            <div class="text-subtitle1 text-weight-medium">販售系列: {{store.sells}}</div>
          </q-card> -->
            <q-table :grid="$q.screen.xs" flat bordered :rows="stores" :columns="columns" row-key="name"
              :filter="filter">
              <template #body-cell-edit="edit">
                <q-td :edit="edit">
                  <div class="column">
                    <q-btn class="q-mb-sm q-px-lg" outline @click="openform(edit.row._id, edit.rowIndex)">修改</q-btn>
                    <q-btn outline @click="deletee(edit.row._id)">刪除</q-btn>
                  </div>
                </q-td>
              </template>
            </q-table>
          </div>
          <q-card flat bordered v-else>
            <q-form @submit.prevent='creatStore()' class="q-pa-md">
              <div style="max-width: 400px">
                <div class="text-subtitle1 text-weight-medium">店鋪名稱:</div>
                <q-input v-model="form.name" :rules='[rules.required]' color="black" />
                <div class="text-subtitle1 text-weight-medium">店鋪電話:</div>
                <q-input v-model="form.phone" :rules='[rules.required]' color="black" />
                <div class="text-subtitle1 text-weight-medium">店鋪位址:</div>
                <q-input v-model="form.address" :rules='[rules.required]' color="black" />
                <div class="text-subtitle1 text-weight-medium">營業時間:</div>
                <q-input v-model="form.time" :rules='[rules.required]' color="black" />
                <div class="text-subtitle1 text-weight-medium">販售系列:</div>
                <q-input v-model="form.sells" :rules='[rules.required]' color="black" />
              </div>
              <div class="q-my-xxl">
                <q-btn outline class="q-py-sm q-px-xxl text-subtitle2 q-mr-md" color="black" label="取消"
                  @click='resetform' :disabled='form.submitting' />
                <q-btn unelevated class="q-py-sm q-px-xxl text-subtitle2" type='submit' color="black text-white"
                  label="確認" />
              </div>
            </q-form>
          </q-card>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { apiAuth, api } from '../../boot/axios.js'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

const opendialog = ref(false)

const router = useRouter()

const storeId = ref('')

const stores = reactive([])

const columns = [
  { name: 'name', align: 'left', label: '店鋪名稱', field: 'name' },
  { name: '_id', align: 'left', label: '店鋪編號', field: '_id' },
  { name: 'address', align: 'left', label: '店鋪位址', field: 'address' },
  { name: 'sells', align: 'left', label: '販售系列', field: 'sells' },
  { name: 'edit', label: '', align: 'left', field: 'edit' }
]

const form = reactive({
  name: '',
  phone: '',
  address: '',
  time: '',
  sells: ''
})

const resetform = () => {
  form.name = ''
  form.phone = ''
  form.address = ''
  form.time = ''
  form.sells = ''
  opendialog.value = false
  storeId.value = ''
}

const deletee = async (storeid) => {
  try {
    await apiAuth.delete('/stores/' + storeid)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '刪除成功'
    })
    init()
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
    })
  }
}

const openform = (_id, idx) => {
  storeId.value = _id
  console.log(storeId.value)
  opendialog.value = true

  form.name = stores[idx].name
  form.phone = stores[idx].phone
  form.address = stores[idx].address
  form.time = stores[idx].time
  form.sells = stores[idx].sells
}

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

const creatStore = async () => {
  opendialog.value = true
  try {
    if (storeId.value.length === 0) {
      await apiAuth.post('/stores', form)
      await Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      await apiAuth.patch('/stores/' + storeId.value, form)
      await Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
    }
    resetform()
    init()
    router.push('/admin/store')
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
    })
  }
}

const init = async () => {
  try {
    const { data } = await api.get('/stores')
    stores.splice(0, stores.length)
    stores.push(...data.result)
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
