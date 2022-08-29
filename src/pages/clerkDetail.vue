<template>
  <q-page class="q-mb-xxxl">
    <section class="container">
      <div class="q-mt-lg">
        <div class="text-h4 text-weight-bold">STYLING STAFF</div>
      </div>
      <div class="row q-mt-xl q-mb-lg-xl q-mb-md no-wrap">
        <q-avatar class="gt-xs" size="150px">
          <img :src="userInfo.avatar">
        </q-avatar>
        <q-avatar class="lt-sm" size="100px">
          <img :src="userInfo.avatar">
        </q-avatar>
        <div class="q-ml-md column ">
          <div class="text-subtitle1 text-weight-bold">
            {{ userInfo.name }}
            <span class="q-pl-lg text-caption text-weight-regular text-gray-5">| {{ userInfo.height }} cm</span>
          </div>
          <div class=" row items-center text-center q-mb-xs">
            <div class="text-body2  text-weight-medium cursor-pointer" @click="toStore()">{{ userInfo.stores.name
            }}
            </div>
            <q-icon class="q-ml-xs" name="fa-solid fa-angle-right" />
          </div>
          <div class="text-body1 text-grey-8 text-weight-thin over-3line">
            {{ userInfo.description }}
          </div>
        </div>
      </div>
      <q-separator class="q-mt-lg q-mb-md" />
      <div class="row">
        <div class="col-6 col-sm-4 col-lg-3 q-pa-sm pointer" v-for="(styling, idx) in stylings" :key="idx">
          <q-img class="col-12" :src="styling.image" :ratio="4 / 5" @click="toStyling(styling._id)">
          </q-img>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { api } from '../boot/axios'

const route = useRoute()
const router = useRouter()

const stylings = reactive([])

const toStyling = (stylingId) => {
  router.push('/styling/' + stylingId)
}

const toStore = () => {
  router.push('/store/')
}

const userInfo = reactive({
  _id: '',
  avatar: '',
  description: '',
  height: 0,
  name: '',
  stores: {
    name: ''
  }
})

const init = async () => {
  try {
    const { data } = await api.get('/staffs/info/' + route.params.id)
    // console.log(data.result)
    userInfo._id = data.result._id
    userInfo.avatar = data.result.avatar
    userInfo.description = data.result.description
    userInfo.height = data.result.height
    userInfo.name = data.result.name
    userInfo.stores = data.result.stores
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得店員資料失敗'
    })
    router.go(-1)
  }
}

const initStyling = async () => {
  try {
    const { data } = await api.get('/stylings/clerk/' + route.params.id)
    stylings.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得店員資料失敗'
    })
    router.go(-1)
  }
}

init()
initStyling()
</script>
