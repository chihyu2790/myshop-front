<template>
  <q-page>
    <section class="container">
      <div class="row q-mt-xl">
        <div class="col-2">
          <div class="text-h6">店員管理</div>
          <router-link :to="'/staff'">
            <div class="text-subtitle1 q-my-lg">店員資料</div>
          </router-link>
          <router-link :to="'/staff/styling'">
            <div class="text-subtitle1 q-my-lg">穿搭管理</div>
          </router-link>
        </div>
        <div class="col-10">
          <div class="flex items-center text-center q-mb-lg">
            <div class="text-h4 text-weight-medium" v-if='openflag'>穿搭管理</div>
            <div class="text-h4 text-weight-medium" v-if='!openflag'>穿搭上傳</div>
            <q-space />
            <q-btn v-if='openflag' class="q-px-xl" outline color="black" label="新增穿搭" @click="openflag = false" />
          </div>
          <div class="text-body1 q-mb-md">店員穿搭管理頁面</div>
          <q-card v-if='!openflag' flat bordered class="q-pa-md">
            <!-- <div class="text-h5">穿搭詳細</div>
            <q-separator class="q-my-md" /> -->
            <div class="text-h5 text-weight-medium ">穿搭資料</div>
            <q-separator class="q-my-md" />

            <q-form @submit.prevent='submitForm'>
              <div style="max-width: 400px">
                <div class="text-subtitle1 text-weight-medium">穿搭名稱</div>
                <q-input v-model="editinfo.name" :rules='[rules.required]' color="black" />
                <div class="text-subtitle1 text-weight-medium q-mb-lg">穿搭主圖</div>
                <q-file v-model='editinfo.image' :rules='[rules.size]' accept='image/*' filled bottom-slots counter>
                  <template v-slot:prepend>
                    <q-icon name="cloud_upload" @click.stop.prevent />
                  </template>
                  <template v-slot:append>
                    <q-icon name="close" @click.stop.prevent="model = null" class="cursor-pointer" />
                  </template>
                  <template v-slot:hint>
                  </template>
                </q-file>
                <div class="text-subtitle1 text-weight-medium q-mb-lg">穿搭描述</div>
                <q-input v-model="editinfo.description" class="q-mb-xl" type="textarea" filled color="black" />
              </div>
              <div class="row items-center q-pr-md">
                <div class="text-h5">商品資料</div>
                <q-space />
                <q-icon name="fa-solid fa-plus" size="xs" class="pointer" @click='prompt = true' />
              </div>
              <q-separator class="q-my-md" />
              <div class="row q-mb-md" v-for=" (cart, idx) in cartItems" :key="idx">
                <q-img class="col-2 q-mr-sm" :src="cart.product.image[0]" style="height: 180px; max-width: 150px" />
                <div class="col-10 column">
                  <div class="text-subtitle1 text-weight-medium">商品名稱:</div>
                  <div class="text-subtitle1 text-weight-medium">{{ cart.product.name }}</div>
                  <q-space />
                  <div class="text-subtitle1 text-weight-medium">商品顏色:{{ cart.color }}</div>
                  <div class="text-subtitle1 text-weight-medium">商品尺寸:{{ cart.size }}</div>
                </div>
              </div>
              <q-separator />
              <div class="q-mt-xl">
                <q-btn outline class="q-py-sm q-px-xxl text-subtitle2 q-mr-md" color="black" label="取消"
                  @click="deleteCart()" />
                <q-btn type='submit' unelevated color="black" class="q-py-sm q-px-xxl text-subtitle2" label="確定" />
              </div>
            </q-form>
          </q-card>
          <q-card flat v-else>
            <q-separator class="q-mb-lg" />
            <div class="row">
              <div class="col-3 full-height q-pa-xs" v-for="(styling, idx) in stylingItems" :key="idx">
                <q-img class="col-12" :src="styling.image" :ratio="4 / 5">
                  <div class="row absolute-top text-subtitle1 transparent-background">
                    <q-space />
                    <q-icon name="fa-solid fa-x" class="pointer" @click="deleteStyling(styling._id)" />
                  </div>
                </q-img>
              </div>
            </div>
          </q-card>
          <q-dialog v-model="prompt" persistent @hide="cleanform()">
            <q-card style="min-width: 800px" class="q-pa-md">
              <q-form @submit.prevent='submitCart()'>
                <div class="text-h5">商品資訊</div>
                <q-separator class="q-my-md" />
                <div style="width: 250px">
                  <div class="text-subtitle1 text-weight-medium">商品名稱</div>
                  <q-input v-model="search" color="black">
                    <template v-slot:prepend>
                      <q-icon name="fa-solid fa-magnifying-glass" size="xs" />
                    </template>
                    <template v-slot:append>
                      <q-icon name="close" @click="search = ''" class="cursor-pointer" />
                    </template>
                  </q-input>
                </div>
                <div class="row q-mt-xl">
                  <div class=" col-3  q-pa-sm q-mb-md cursor-pointer" @click="search = item.name"
                    v-for="(item, idx) in filtereditems" :key="idx">
                    <q-card flat square class="column justify-between full-height">
                      <div class="q-mb-xs">{{ item.name }}</div>
                      <q-img :src="item.image[0]" :ratio="1" />
                    </q-card>
                  </div>
                </div>

                <div class="text-subtitle1 text-weight-medium q-my-lg">商品顏色</div>
                <div class="q-my-lg" v-if="filtereditems.length === 1">
                  <div v-for="item in filtereditems" :key="item.id">
                    <q-avatar v-for="(color, idx) in item.color" class="q-mr-xs" :color="color" size="24px"
                      :key="idx" />
                    <q-radio v-for="(color, idx) in item.color" v-model="colors" color="black"
                      class="text-weight-medium" :val="color" :label="color" :key="idx" />
                  </div>
                </div>
                <div class="text-subtitle1 text-weight-medium q-my-lg">商品尺寸</div>
                <div v-if="filtereditems.length === 1">
                  <div v-for="item in filtereditems" :key="item.id">
                    <q-radio v-for="(size, idx) in item.size" v-model="sizes" :val="size" color="black"
                      class="text-weight-medium" :label="size" :key="idx" />
                  </div>
                </div>
                <div class="q-mt-xl">
                  <q-btn outline class="q-py-sm q-px-xxl text-subtitle2 q-mr-md" color="black" label="取消"
                    v-close-popup />
                  <q-btn type='submit' unelevated class="q-py-sm q-px-xxl text-subtitle2" color="black text-white"
                    label="確定" v-close-popup />
                </div>
              </q-form>
            </q-card>
          </q-dialog>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>

import { reactive, ref, computed } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../../boot/axios'
import { useUserStore } from '../../stores/example-store'

const quantity = ref(0)
const colors = ref('')
const sizes = ref('')
const search = ref('')
const cartItems = reactive([])
const stylingItems = reactive([])
const user = useUserStore()

const prompt = ref(false)

const rows = reactive([])

const editinfo = reactive({
  name: '',
  description: '',
  image: null
})

const openflag = ref(true)

const searchinfo = ref('')

const rules = reactive({
  required(v) {
    return !!v || '必填'
  }
})

const cleanform = () => {
  sizes.value = ''
  colors.value = ''
  search.value = ''
}

const submitCart = async () => {
  await user.addCart({ product: filtereditems.value[0]._id, quantity: 1, color: colors.value, size: sizes.value })
  initCart()
}

const deleteCart = async () => {
  editinfo.name = ''
  editinfo.description = ''
  editinfo.image = null
  openflag.value = true
  try {
    await apiAuth.patch('/staffs/delete')
    cartItems.splice(0, cartItems.length)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

const submitForm = async () => {
  const fd = new FormData()

  for (const key in editinfo) {
    fd.append(key, editinfo[key])
  }

  try {
    const { data } = await apiAuth.post('/stylings', fd)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '新增穿搭成功'
    })
    initStyling()
    openflag.value = true
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

const filtereditems = computed(() => {
  return rows.filter(item => {
    const inc = item.name.includes(search.value)
    return inc
  })
})

const deleteStyling = async (stylingid) => {
  try {
    await apiAuth.delete('/stylings/' + stylingid)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '刪除成功'
    })
    initStyling()
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
    const { data } = await apiAuth.get('/products')
    rows.push(...data.result)
  } catch (error) {
    // console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

const initCart = async () => {
  try {
    const { data } = await apiAuth.get('/staffs/cart')
    cartItems.splice(0, cartItems.length)
    cartItems.push(...data.result)
  } catch (error) {
    // console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

const initStyling = async () => {
  try {
    const { data } = await apiAuth.get('/stylings')
    stylingItems.splice(0, stylingItems.length)
    stylingItems.push(...data.result)
  } catch (error) {
    // console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

init()
initCart()
initStyling()
</script>
