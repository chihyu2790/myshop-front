<template>
<q-page>
    <section class="container">
        <div class="row">
            <div class="col">
                <q-btn outline label="新增店鋪" @click="creatStore()" color="black"/>
            </div>
        </div>
        {{form.name}}
        <q-input v-model="form.name"/>
        {{form.phone}}
        <q-input v-model="form.phone"/>
        {{form.address}}
        <q-input v-model="form.address"/>
        {{form.time}}
        <q-input v-model="form.time"/>
        {{form.sells}}
        <q-input v-model="form.sells"/>
    </section>
</q-page>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { apiAuth } from '../../boot/axios.js'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  name: '',
  phone: '',
  address: '',
  time: '',
  sells: ''
})

const creatStore = async () => {
  try {
    await apiAuth.post('/stores', form)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '新增成功'
    })
    router.push('/about')
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
    })
  }
}

</script>
