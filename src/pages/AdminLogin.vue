<template>
<q-page>
  <section class="container">
    <div class="row q-mt-xl">
      <div class="col">
        <q-card flat class="q-px-lg q-pb-lg">
          <div class="text-h4 text-weight-bold q-mb-xl">管理員登入</div>
          <q-form
            @submit="login"
            class="q-gutter-md"
          >
            <div class="text-body1" >管理員帳號</div>
            <q-input
              color="black"
              square
              filled
              type="text"
              v-model="form.account"
              placeholder="Admin account"
              lazy-rules
              :rules="rules.account"
            />
            <div class="text-body1" >管理員密碼</div>
            <q-input
              color="black"
              square
              filled
              type="password"
              v-model="form.password"
              placeholder="Admin password"
              lazy-rules
              :rules="rules.password"
            />
            <div>
              <q-btn outline label="管理員登入" class="width-hundred q-py-md text-h6" type="submit" color="black"/>
            </div>
          </q-form>
        </q-card>
      </div>
      <q-separator vertical />
      <div class="col">
        <q-card flat class="q-px-lg q-pb-lg" >
          <div class="text-h4 text-weight-bold q-mb-xl" >店員登入</div>
          <q-form
            @submit="staffLogin"
            class="q-gutter-md"
          >
            <div class="text-body1" >店員帳號</div>
            <q-input
              color="black"
              square
              filled
              type="text"
              v-model="form.account"
              placeholder="Staff Account"
              lazy-rules
              :rules="rules.account"
            />
            <div class="text-body1" >店員密碼</div>
            <q-input
              color="black"
              square
              filled
              type="password"
              v-model="form.password"
              placeholder="Staff Password"
              lazy-rules
              :rules="rules.password"
            />
            <div>
              <q-btn unelevated label="店員登入" class="width-hundred q-py-md text-h6" type="submit" color="black"/>
            </div>
          </q-form>
        </q-card>
      </div>
    </div>
  </section>
</q-page>
</template>

<script setup>
import { reactive } from 'vue'
import { useUserStore } from '../stores/example-store'

const user = useUserStore()

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
  form.role = 1
  console.log(form)
  user.login(form)
}

const staffLogin = () => {
  form.role = 2
  console.log(form)
  console.log('進店員登入')
  user.login(form)
}
</script>
