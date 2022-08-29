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
          <!-- <div class="text-subtitle1 q-my-lg">活動管理</div> -->
          <div class="text-subtitle1 q-my-lg cursor-pointer" @click="logout">登出</div>
        </div>
        <div class="col-10">
          <div class="flex items-center text-center q-mb-lg">
            <div class="text-h4 text-weight-medium" v-if='!form.dialog'>商品管理</div>
            <div class="text-h4 text-weight-medium" v-if='form.dialog && form._id == ""'>新增商品</div>
            <div class="text-h4 text-weight-medium" v-if='form.dialog && form._id != ""'>編輯商品</div>
            <q-space />
            <q-btn v-if='!form.dialog' class="q-px-xl" outline color="black" label="新增商品" @click="openDialog('', -1)" />
          </div>
          <div class="text-body1 q-mb-md">管理商品頁面</div>

          <!-- :filter="filter" -->
          <q-table :grid="$q.screen.xs" flat bordered :rows="rows" :columns="columns" row-key="name"
            v-if='!form.dialog'>
            <!-- <template v-slot:top-right>
              <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template> -->

            <template #body-cell-image="image">
              <q-td>
                <q-avatar square size="100px">
                  <img :src="image.row.image[0]" alt="" class="q-mb-xl">
                </q-avatar>
              </q-td>
            </template>
            <template #body-cell-edit="edit">
              <q-td :edit="edit">
                <div class="column">
                  <q-btn class="q-mb-sm" @click='openDialog(edit.row._id, edit.rowIndex)' outline>修改</q-btn>
                  <q-btn @click='takeDown(edit.row._id, edit.rowIndex)' outline>下架</q-btn>
                </div>
              </q-td>
            </template>
          </q-table>
          <q-card flat bordered v-else v-model="form.dialog">
            <q-form @submit.prevent='submitForm' class="q-pa-md">
              <div style="max-width: 400px">
                <div class="text-subtitle1 text-weight-medium">名稱:{{ form.name }}</div>
                <q-input v-model="form.name" :rules='[rules.required]' color="black" />
                <div class="text-subtitle1 text-weight-medium">價格:{{ form.price }}</div>
                <q-input v-model.number='form.price' min='0' type='number' :rules='[rules.required, rules.price]'
                  color="black" />
                <!-- <div class="text-subtitle1 text-weight-medium">分類:{{form.category}}</div>
              <q-select  outlined v-model="form.category" :options="categories" label="Standard" :rules='[rules.required]' /> -->
                <div class="text-subtitle1 text-weight-medium q-mb-sm">類別:{{ form.classify }}</div>
                <q-input color="black" v-model="chips" :rules='[rules.required]' />
                <q-chip v-for='(chip, ipx) in form.classify' :key='ipx'>{{ chip }}</q-chip>
                <div class="text-subtitle1 text-weight-medium q-mb-lg">上架:{{ form.sell }}</div>
                <q-checkbox v-model="form.sell" color="black" class="q-mb-md" />
                <div class="text-subtitle1 text-weight-medium q-mb-lg">商品圖片{{ form.image }}</div>
                <q-file v-model='form.image' multiple :rules='[rules.size]' accept='image/*' filled bottom-slots
                  counter>
                  <template v-slot:prepend>
                    <q-icon name="cloud_upload" @click.stop.prevent />
                  </template>
                  <template v-slot:append>
                    <q-icon name="close" @click.stop.prevent="model = null" class="cursor-pointer" />
                  </template>

                  <template v-slot:hint>
                  </template>
                </q-file>
                <div class="text-subtitle1 text-weight-medium q-mb-lg">商品描述{{ form.description }}</div>
                <q-input class="q-mb-lg" v-model='form.description' type="textarea" filled color="black" />
              </div>
              <div class="text-subtitle1 text-weight-medium q-mb-md">商品顏色{{ form.color }}</div>
              <div class=" row">
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1 text-body2" label="black"
                  val="black" color="black" />
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1" val="white" label="white"
                  color="white" />
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1" val="grey" label="grey"
                  color="grey" />
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1" val="grey-1"
                  label="grey-1" color="grey-1" />
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1" val="grey-8"
                  label="grey-8" color="grey-8" />
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1" val="grey-14"
                  label="grey-14" color="grey-14" />
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1 text-caption
" label="yellow-10" val="yellow-10" color="yellow-10" />
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1" label="orange-3"
                  val="orange-3" color="orange-3" />
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1" label="orange-6"
                  val="orange-6" color="orange-6" />
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1" label="orange-11"
                  val="orange-11" color="orange-11" />
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1" label="deep-orange-4"
                  val="deep-orange-4" color="deep-orange-4" />
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1" label="brown-1"
                  val="brown-1" color="brown-1" />
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1" label="brown-2"
                  val="brown-2" color="brown-2" />
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1" label="brown-9"
                  val="brown-9" color="brown-9" />
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1" label="brown-12"
                  val="brown-12" color="brown-12" />
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1" label="brown" val="brown"
                  color="brown" />
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1" label="blue-grey-3"
                  val="blue-grey-3" color="blue-grey-3" />
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1" label="blue-grey-7"
                  val="blue-grey-7" color="blue-grey-7" />
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1" label="blue-2"
                  val="blue-2" color="blue-2" />
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1" label="blue-9"
                  val="blue-9" color="blue-9" />
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1" label="blue-11"
                  val="blue-11" color="blue-11" />
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1" label="blue-12"
                  val="blue-12" color="blue-12" />
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1" label="indigo-10"
                  val="indigo-10" color="indigo-10" />
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1" label="deep-purple-2"
                  val="deep-purple-2" color="deep-purple-2" />
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1" label="pink-7"
                  val="pink-7" color="pink-7" />
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1" label="pink-10"
                  val="pink-10" color="pink-10" />
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1" label="red-10"
                  val="red-10" color="red-10" />
                <q-checkbox v-model="form.color" checked-icon="fa-solid fa-circle-dot" keep-color dense
                  unchecked-icon="fa-solid fa-circle" size="md" class="q-mr-sm q-mb-sm col-1" label="light-green-8"
                  val="light-green-8" color="light-green-8" />
              </div>
              <!-- <q-checkbox v-model="form.color" class="text-weight-medium" val="black" color="black" label="black" />
              <q-checkbox v-model="form.color" class="text-weight-medium" val="white" color="white" label="white" />
              <q-checkbox v-model="form.color" class="text-weight-medium" val="grey" color="grey" label="grey" />
              <q-checkbox v-model="form.color" class="text-weight-medium" val="grey-1" color="grey-1" label="grey-1" />
              <q-checkbox v-model="form.color" class="text-weight-medium" val="grey-8" color="grey-8" label="grey-8" />
              <q-checkbox v-model="form.color" class="text-weight-medium" val="grey-14" color="grey-14"
                label="grey-14" />
              <q-checkbox v-model="form.color" class="text-weight-medium" val="yellow-10" color="yellow-10"
                label="yellow-10" />
              <q-checkbox v-model="form.color" class="text-weight-medium" val="orange-3" color="orange-3"
                label="orange-3" />
              <q-checkbox v-model="form.color" class="text-weight-medium" val="orange-6" color="orange-6"
                label="orange-6" />
              <q-checkbox v-model="form.color" class="text-weight-medium" val="orange-11" color="orange-11"
                label="orange-11" />
              <q-checkbox v-model="form.color" class="text-weight-medium" val="brown-1" color="brown-1"
                label="brown-1" />
              <q-checkbox v-model="form.color" class="text-weight-medium" val="brown-2" color="brown-2"
                label="brown-2" />
              <q-checkbox v-model="form.color" class="text-weight-medium" val="brown-12" color="brown-12"
                label="brown-12" />
              <q-checkbox v-model="form.color" class="text-weight-medium" val="brown" color="brown" label="brown" />
              <q-checkbox v-model="form.color" class="text-weight-medium" val="blue-grey-3" color="blue-grey-3"
                label="blue-grey-3" />
              <q-checkbox v-model="form.color" class="text-weight-medium" val="blue-grey-7" color="blue-grey-7"
                label="blue-grey-7" />
              <q-checkbox v-model="form.color" class="text-weight-medium" val="blue-2" color="blue-2" label="blue-2" />
              <q-checkbox v-model="form.color" class="text-weight-medium" val="blue-9" color="blue-9" label="blue-9" />
              <q-checkbox v-model="form.color" class="text-weight-medium" val="blue-11" color="blue-11"
                label="blue-11" />
              <q-checkbox v-model="form.color" class="text-weight-medium" val="blue-12" color="blue-12"
                label="blue-12" />
              <q-checkbox v-model="form.color" class="text-weight-medium" val="indigo-10" color="indigo-10"
                label="indigo-10" />
              <q-checkbox v-model="form.color" class="text-weight-medium" val="deep-purple-2" color="deep-purple-2"
                label="deep-purple-2" />
              <q-checkbox v-model="form.color" class="text-weight-medium " val="pink-7" color="pink-7" label="pink-7" />
              <q-checkbox v-model="form.color" class="text-weight-medium " val="pink-10" color="pink-10"
                label="pink-10" />
              <q-checkbox v-model="form.color" class="text-weight-medium " val="red-10" color="red-10" label="red-10" /> -->
              <div class="text-subtitle1 text-weight-medium q-my-md">商品尺寸{{ form.size }}</div>
              <q-checkbox color="black" v-model="form.size" class="text-weight-medium" val="XXS" label="XXS" />
              <q-checkbox color="black" v-model="form.size" class="text-weight-medium" val="XS" label="XS" />
              <q-checkbox color="black" v-model="form.size" class="text-weight-medium" val="S" label="S" />
              <q-checkbox color="black" v-model="form.size" class="text-weight-medium" val="M" label="M" />
              <q-checkbox color="black" v-model="form.size" class="text-weight-medium" val="L" label="L" />
              <q-checkbox color="black" v-model="form.size" class="text-weight-medium" val="XL" label="XL" />
              <q-checkbox color="black" v-model="form.size" class="text-weight-medium" val="XXL" label="XXL" />
              <div class="q-my-xxl">
                <q-btn outline class="q-py-sm q-px-xxl text-subtitle2 q-mr-md" color="black" label="取消"
                  @click='form.dialog = false' :disabled='form.submitting' />
                <q-btn unelevated class="q-py-sm q-px-xxl text-subtitle2" type='submit' color="black text-white"
                  label="確定" />
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
import { apiAuth } from '../../boot/axios.js'
import Swal from 'sweetalert2'
import { useQuasar } from 'quasar'

import { useUserStore } from '../../stores/example-store'
const user = useUserStore()
const { logout } = user

const dense = ref(false)
// const filter = ref('')
const $q = useQuasar()
const chips = ref('')

// const showNotif = () => {
//   $q.notify({
//     message: 'Jim pinged you.',
//     caption: '5 minutes ago',
//     color: 'black'
//   })
// }

const categories = reactive(['衣服', '包包'])
const products = reactive([])

const form = reactive({
  _id: '',
  name: '',
  price: 0,
  category: '',
  sell: false,
  image: [],
  color: [],
  size: [],
  classify: [],
  description: '',
  idx: -1,
  dialog: false,
  valid: false,
  submitting: false
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

form.classify = computed(() => {
  const classif = chips.value.split(/\s+/)
  return classif
})

const openDialog = (_id, idx) => {
  form._id = _id
  if (idx > -1) {
    form.name = rows[idx].name
    form.price = rows[idx].price
    // form.category = rows[idx].category
    form.sell = rows[idx].sell
    form.description = rows[idx].description
    // form.category = rows[idx].category
    form.size = rows[idx].size
    form.color = rows[idx].color
    // form.color = []
    // form.color.push(...JSON.parse(JSON.stringify(rows[idx].color)))
    // form.size = []
    // form.size.push(...JSON.parse(JSON.stringify(rows[idx].size)))
    chips.value = rows[idx].classify.toString().replace(/,/g, ' ')
    // form.category.push(...JSON.parse(JSON.stringify(rows[idx].category)))
  } else {
    form.name = ''
    form.price = 0
    form.category = ''
    form.sell = false
    form.description = ''
    form.image = []
    form.color = []
    form.size = []
    chips.value = ''
    // form.classify = []
  }
  form.idx = idx
  form.dialog = true
  form.valid = false
  form.submitting = false
  form.classify.splice(0, form.classify.length)
  console.log(form)
}

const takeDown = (_id, idx) => {
  form._id = _id
  form.name = rows[idx].name
  form.price = rows[idx].price
  form.sell = false
  form.description = rows[idx].description
  form.size = rows[idx].size
  form.color = rows[idx].color
  chips.value = rows[idx].classify.toString().replace(/,/g, ' ')
  form.idx = idx
  form.valid = false
  form.submitting = false
  form.classify.splice(0, form.classify.length)
  console.log(form)
  submitForm()
}

const submitForm = async () => {
  form.submitting = true

  const fd = new FormData()
  for (const key in form) {
    if (['_id', 'idx', 'dialog', 'valid', 'submitting'].includes(key)) continue
    // else if (key === 'image') fd.append(key, form[key][0])
    // fd比較特別他不能塞陣列，所以我們要把陣列內的內容用同key傳進去，後台node.js看到同key會知道是陣列。
    else if (key === 'image') {
      for (const image of form.image) {
        fd.append(key, image)
      }
    } else if (key === 'color') {
      for (const color of form.color) {
        fd.append(key, color)
      }
    } else if (key === 'size') {
      for (const size of form.size) {
        fd.append(key, size)
      }
    } else if (key === 'classify') {
      for (const classify of form.classify) {
        fd.append(key, classify)
      }
    } else fd.append(key, form[key])
  }
  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/products', fd)
      rows.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/products/' + form._id, fd)
      rows[form.idx] = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
    }
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

const columns = [
  { name: 'image', align: 'left', label: '', field: 'image' },
  { name: '_id', align: 'left', label: 'id', field: '_id' },
  {
    name: 'name',
    required: true,
    label: '商品名稱',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`
    // sortable: true
  },
  { name: 'edit', label: '商品操作', align: 'left' }
]
const rows = reactive([])

const init = async () => {
  try {
    const { data } = await apiAuth.get('/products/all')
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
init()

</script>
