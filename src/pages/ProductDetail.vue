<template>
  <q-page id="productDetail">
    <section class="container">
      <div class="row q-mt-none q-mt-sm-lg">
        <div class="col-1 gt-lg">
          <div v-for="(image, idx) in product.image" :key="idx" class="q-mb-md">
            <q-img :src="image" :ratio="1 / 1" @click="changeSlide(idx)"></q-img>
          </div>
        </div>
        <div class="col-12 col-sm-8 col-lg-7 q-px-sm q-px-sm-xl">
          <q-carousel class="product-carousel" animated v-model="slide" arrows infinite>
            <q-carousel-slide :name="idx + 1" :img-src="image" v-for="(image, idx) in product.image" :key="idx" />
            <!-- <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
                <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
                <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" /> -->
          </q-carousel>
          <!-- <q-card flat>
                <img :src="product.image[0]" class="objectFit">
              </q-card> -->
        </div>
        <div class="col-12 col-sm-4 q-px-sm q-px-sm-none q-mt-lg q-mt-none">
          <q-card class="my-card " flat>

            <div class="text-h5 text-weight-bold q-mb-xl">{{ product.name }}</div>
            <div class="text-h4 text-weight-bold q-mb-md">NT${{ product.price }}</div>
            <div class="text-subtitle1 text-weight-regular text-red q-mb-md">消費滿1500免運費</div>
            <div class="text-subtitle1 text-weight-medium q-mb-lg">顏色:</div>
            <div class="q-mb-lg">
              <!-- <q-avatar v-for="(color, idx)  in product.color" class="q-mr-xs" :color="color" size="24px" :key="idx" /> -->
              <q-radio v-for="(color, idx) in product.color" checked-icon="fa-solid fa-circle-dot" keep-color size="xl"
                dense unchecked-icon="fa-solid fa-circle" v-model="colors" :color="color"
                class="text-weight-medium q-pr-md" :val="color" :key="idx" />
            </div>
            <div class="text-subtitle1 text-weight-medium q-mb-lg">尺寸:</div>
            <q-radio v-for="(size, idx) in product.size" checked-icon="fa-solid fa-square-full" keep-color dense
              unchecked-icon="fa-regular fa-square-full" v-model="sizes" :val="size" color="grey-9" size="lg"
              class="text-weight-medium q-pr-md q-mb-md" :label="size" :key="idx" />

            <q-separator class="q-my-md " />

            <div class="text-subtitle1 text-weight-medium q-mb-md">數量</div>

            <q-form @submit.prevent='submitCart()'>
              <div class=" btn-square row items-center justify-start q-mb-lg">
                <q-btn outline square color="grey-9" padding="xs" icon="fa-solid fa-minus" @click="minus()" />
                <q-btn outline square color="grey-9" padding="xs xl" :label="quantity" />
                <!-- <q-input square outlined min='0' type='number' color="black" v-model.number="quantity"
                    :rules='quantityRule' /> -->
                <q-btn outline square color="grey-9" padding="xs" icon="fa-solid fa-plus" @click="quantity++" />
              </div>

              <q-btn label="加入購物車" type='submit' color="red" unelevated class="width-hundred q-py-sm text-h6" />
            </q-form>

          </q-card>
        </div>
      </div>
      <q-separator class="row q-my-xxxl" />
      <div class="row">
        <div class="col-12 flex justify-center q-mb-md">
          <q-img src="https://i.imgur.com/hFiccGF.jpg" class="pointer object-top" :ratio="4 / 1" @click="toProduct()">
            <div class="row absolute-bottom text-center ">
              <div class="col-12 text-h6 q-mb-sm text-weight-light">職場百搭單品 日本同步刊載</div>
              <div class="col-12 text-h3">Freedom Styling 自由穿搭</div>
            </div>
          </q-img>
        </div>
        <div class="col-12">
          <q-card bordered flat class="row  items-center q-pa-lg q-my-xl">
            <div class="text-h6">關於商品</div>
          </q-card>
        </div>
        <div class="col-12 col-lg-7">
          <div class="text-body1">{{ product.description }}</div>
        </div>
        <div class="col-12">
          <q-card bordered flat class="row  items-center q-pa-lg q-my-xl">
            <div class="text-h6">商品尺寸</div>
          </q-card>
        </div>
        <div class="col-12 col-lg-6 q-mb-xl">
          <q-img src="https://i.imgur.com/Kc9CYsr.png"></q-img>
        </div>
      </div>
      <!-- <q-img src="https://i.imgur.com/hFiccGF.jpg"></q-img> -->
    </section>
  </q-page>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { api } from '../boot/axios'
import Swal from 'sweetalert2'
import { useUserStore } from '../stores/example-store'

const route = useRoute()
const router = useRouter()
const user = useUserStore()

const quantity = ref(0)
const colors = ref('')
const sizes = ref('')
const slide = ref(1)

const minus = () => {
  quantity.value--
  if (quantity.value < 0) {
    quantity.value = 0
  }
}

const quantityRule = reactive([
  v => v >= 1 || '數量錯誤'
])
const valid = ref(false)

const product = reactive({
  _id: '',
  name: '',
  price: 0,
  category: '',
  sell: false,
  image: [],
  color: [],
  size: [],
  description: ''
})

const changeSlide = (num) => {
  slide.value = num + 1
}

const toProduct = () => {
  router.push('/product/')
}

const submitCart = () => {
  user.addCart({ product: product._id, quantity: quantity.value, color: colors.value, size: sizes.value })
}

const init = async () => {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    product._id = data.result._id
    product.name = data.result.name
    product.price = data.result.price
    product.category = data.result.category
    product.sell = data.result.sell
    product.color = data.result.color
    product.size = data.result.size
    product.image = data.result.image
    product.description = data.result.description
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
