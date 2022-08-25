<template>
  <q-page class="q-mb-xxxl">
    <div class="row lt-lg justify-center border-black bg-grey-2 q-py-xs">
      <q-tabs indicator-color="red" shrink>
        <q-route-tab exact name='/about' to='/about' label="關於我們" />
        <q-route-tab exact name='/problem' to='/problem' label="常見問題" />
        <q-route-tab exact name='/store' to='/store' label="店鋪一覽" />
      </q-tabs>
    </div>
    <section class="container">
      <div class="row q-mt-none q-mt-lg-xl ">
        <div class="col-12 gt-md col-lg-2">
          <router-link :to="'/about'">
            <div class="text-subtitle1 q-my-lg q-pr-md">關於我們</div>
          </router-link>
          <router-link :to="'/problem'">
            <div class="text-subtitle1 q-my-lg q-pr-md">常見問題</div>
          </router-link>
          <router-link :to="'/store'">
            <div class="text-subtitle1 q-my-lg q-pr-md">店鋪一覽</div>
          </router-link>
        </div>
        <div class="col-12 col-lg-10">
          <div class="flex items-center text-center q-mb-xl q-mb-lg-lg q-mt-lg q-mt-lg-none">
            <div class="text-h4 text-weight-medium">店鋪一覽</div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-6 q-pa-sm" v-for="store in stores" :key="store._id">
              <q-card flat bordered class=" q-pa-md full-height">
                <div class="text-subtitle1 text-weight-bold q-mb-lg">{{ store.name }}</div>
                <div class="text-subtitle1 text-weight-medium">{{ store.phone }}</div>
                <div class="text-subtitle1 text-weight-medium">店鋪位址: {{ store.address }}</div>
                <div class="text-subtitle1 text-weight-medium">營業時間: {{ store.time }}</div>
                <div class="text-subtitle1 text-weight-medium">販售系列: {{ store.sells }}</div>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { api } from '../boot/axios'

const stores = reactive([])

const init = async () => {
  try {
    const { data } = await api.get('/stores')
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
