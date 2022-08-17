<template>
    <q-page>
        <section class="container">
            <div class="row q-mt-xl">
                <div class="col-2" >
                    <router-link :to="'/about'"><div class="text-subtitle1 q-my-lg">關於我們</div></router-link>
                    <router-link :to="'/'"><div class="text-subtitle1 q-my-lg">常見問題</div></router-link>
                    <router-link :to="'/store'"><div class="text-subtitle1 q-my-lg">店鋪一覽</div></router-link>
                </div>
                <div class="col-10">
                    <div class="flex items-center text-center q-mb-lg">
                        <div class="text-h4 text-weight-medium" >店鋪一覽</div>
                    </div>
                    <q-card flat bordered class="q-pa-md q-mb-lg" v-for="store in stores" :key="store._id" >
                        <div class="text-subtitle1 text-weight-bold q-mb-lg">{{store.name}}</div>
                        <div class="text-subtitle1 text-weight-medium">{{store.phone}}</div>
                        <div class="text-subtitle1 text-weight-medium">店鋪位址: {{store.address}}</div>
                        <div class="text-subtitle1 text-weight-medium">營業時間: {{store.time}}</div>
                        <div class="text-subtitle1 text-weight-medium">販售系列: {{store.sells}}</div>
                    </q-card>
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
