<template>
  <q-page>
    <section class="container">
      <div class="row q-mt-xl">
        <div class="col">
          <q-card class="q-px-lg q-pb-lg" flat>
            <div class="text-h4 text-weight-bold q-mb-xl" >會員登入</div>
            <q-form
              @submit="login"
              class="q-gutter-md"
            >
              <div class="text-body1" >會員帳號</div>
              <q-input
                color="black"
                square
                filled
                type="text"
                v-model="form.account"
                placeholder="會員帳號輸入"
                :rules="rules.account"

              />
              <div class="text-body1" >會員密碼</div>
              <q-input
                color="black"
                square
                filled
                type="password"
                v-model="form.password"
                placeholder="請輸入密碼"
                lazy-rules
                :rules="rules.password"

              />
              <div class="text-subtitle1 text-grey-6" >尚未加入會員/請先註冊會員</div>
              <div>
                <q-btn unelevated label="會員登入" class="width-hundred q-py-md text-h6" type="submit" color="red"/>
              </div>
            </q-form>
          </q-card>
        </div>
        <q-separator vertical />
        <div class="col">
          <q-card class="q-px-lg q-pb-lg" style="height: 500px" flat>
            <div class="text-h4 text-weight-bold q-mb-xl" >會員註冊</div>
            <div class="text-body1 q-mb-lg">所有的購買功能，包含訂購商品、商品評論等，皆須要登入會員，如沒有加入會員，請先註冊會員[免費]。</div>
            <div class="text-body1 q-mb-xl">點擊「會員註冊」後開始進行註冊。</div>
            <q-btn unelevated color="red" class="width-hundred q-py-md text-h6"  label="會員註冊" :to="'/register/'" />
          </q-card>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useUserStore } from '../stores/example-store'

const user = useUserStore()

const dense = ref(false)

const form = reactive({
  account: '',
  password: ''
})

const rules = reactive({
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

const login = () => {
  form.role = 0
  user.login(form)
  // console.log(form)
}
</script>
