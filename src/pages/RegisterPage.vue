<template>
  <q-page>
    <section class="container">
      <div class="row q-mt-xl justify-center">
        <div class="col-12 col-lg-6">
          <q-card class="q-px-none q-px-lg-lg q-pb-lg" style="height: 650px" flat>
            <div class="text-h4 text-weight-bold q-mb-xl">會員註冊</div>
            <q-form @submit="register" class="q-gutter-md">
              <div class="text-body1">電子郵件信箱 <span class="bg-red text-white">*必填*</span></div>
              <q-input color="black" square filled type="email" v-model="form.email" placeholder="電子郵件信箱" lazy-rules
                :rules="rules.email" />
              <div class="text-body1">帳號 <span class="bg-red text-white">*必填*</span></div>
              <q-input color="black" square filled type="text" v-model="form.account" placeholder="使用者帳號" lazy-rules
                :rules="rules.account" />
              <div class="text-body1">密碼 <span class="bg-red text-white">*必填*</span></div>
              <q-input color="black" square filled type="password" v-model="form.password" placeholder="請輸入密碼"
                lazy-rules :rules="rules.password" />
              <div>
                <q-btn unelevated label="會員註冊" class="width-hundred q-py-md text-h6" type="submit" color="red" />
              </div>
            </q-form>
          </q-card>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { isEmail } from 'validator'
import { api } from '../boot/axios'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const router = useRouter()

const form = reactive({
  email: '',
  account: '',
  password: ''
})

const dense = ref(false)

const rules = reactive({
  email: [
    v => !!v || '信箱必填',
    v => isEmail(v) || '信箱格式錯誤'
  ],
  account: [
    v => !!v || '帳號必填',
    v => (v.length >= 4 && v.length <= 20) || '帳號長度為 4 到 20 個字',
    v => /^[a-zA-Z0-9]+$/.test(v) || '帳號只能由英數字組成'
  ],
  password: [
    v => !!v || '密碼必填',
    v => (v.length >= 4 && v.length <= 20) || '密碼長度為 4 到 20 個字',
    v => /^[a-zA-Z0-9]+$/.test(v) || '密碼只能由英數字組成'
  ]
})

const register = async () => {
  try {
    // console.log(router)
    await api.post('/users', form)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '註冊成功'
    })
    router.push('/login')
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
    })
  }
}
</script>
