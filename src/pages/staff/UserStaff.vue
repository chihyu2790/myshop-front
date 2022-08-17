<template>
<q-page>
    <section class="container">
        <div class="row q-mt-xl">
            <div class="col-2" >
              <div class="text-h6">店員管理</div>
              <router-link :to="'/staff'"><div class="text-subtitle1 q-my-lg">店員資料</div></router-link>
              <router-link :to="'/staff/styling'"><div class="text-subtitle1 q-my-lg">穿搭管理</div></router-link>
            </div>
            <div class="col-10">
              <div class="flex items-center text-center q-mb-lg">
                <div class="text-h4 text-weight-medium" v-if='openflag' >店員資料</div>
                <div class="text-h4 text-weight-medium" v-if='!openflag' >修改資料</div>
                <q-space />
              </div>
              <div class="text-body1 q-mb-md" >GU店員資訊頁面</div>

              <!-- 以下是主要功能 -->

              <!-- 以下是主要功能 -->
              <q-card v-if="openflag" flat bordered class="q-pa-md">
                <div class="text-subtitle1 text-weight-bold">名字:</div>
                <div class="text-subtitle1 q-mb-md">{{userinfo.name}}</div>
                <div class="text-subtitle1 text-weight-bold">性別:</div>
                <div class="text-subtitle1 q-mb-md">{{userinfo.sex}}</div>
                <div class="text-subtitle1 text-weight-bold">身高:</div>
                <div class="text-subtitle1 q-mb-md">{{userinfo.height}}</div>
                <div class="text-subtitle1 q-mb-md text-weight-bold">大頭貼:</div>
                <q-img
                  :src="userinfo.avatar"
                  style="height: 140px; max-width: 150px"
                />
                <div class="text-subtitle1 q-mt-md text-weight-bold">店鋪位置:</div>
                <div class="text-subtitle1 q-mb-md">{{userinfo.stores.name}}</div>
                <div class="text-subtitle1 text-weight-bold">自我介紹:</div>
                <div class="text-subtitle1 q-mb-md">{{userinfo.description}}</div>
                <q-btn color="black" class="q-py-sm q-px-lg text-subtitle2 q-mt-xl" outline label="修改店員資料" @click='goEdit()' />
              </q-card>
              <q-card v-else flat bordered class="q-pa-md">
                <q-form @submit.prevent='editForm()'>
                  <div style="max-width: 400px">
                    <div class="text-subtitle1 text-weight-medium">名字:</div>
                    <q-input v-model="editinfo.name" :rules='[rules.required]' color="black" />
                    <div class="text-subtitle1 text-weight-medium">性別:</div>
                    <div class="q-my-md">
                      <q-radio class="text-weight-medium" v-model="editinfo.sex" val="1" label="男" color="black" />
                      <q-radio class="text-weight-medium" v-model="editinfo.sex" val="0" label="女" color="black" />
                    </div>
                    <div class="text-subtitle1 text-weight-medium">身高:</div>
                    <q-input v-model.number="editinfo.height" :rules='[rules.required]' color="black" />
                    <div class="text-subtitle1 text-weight-medium q-mb-lg">大頭貼:{{editinfo.avatar}}</div>
                    <q-file v-model='editinfo.avatar' :rules='[rules.size]' accept='image/*' filled bottom-slots counter>
                      <template v-slot:prepend>
                        <q-icon name="cloud_upload" @click.stop.prevent />
                      </template>
                      <template v-slot:append>
                        <q-icon name="close" @click.stop.prevent="model = null" class="cursor-pointer" />
                      </template>

                      <template v-slot:hint>
                      </template>
                    </q-file>
                    <div class="text-subtitle1 text-weight-medium q-mb-lg">自我介紹:</div>
                    <q-input v-model="editinfo.description" type="textarea" :rules='[rules.required]' filled color="black" />
                  </div>
                  <div class="text-subtitle1 text-weight-medium">店鋪位置:</div>
                    <div class="q-my-md">
                      <q-radio v-for="(store,idx) in stores" v-model="editinfo.stores" color="black" :val="store._id" :label="store.name" :key="idx"/>
                  </div>
                  <div class="q-my-xxl">
                    <q-btn outline class="q-py-sm q-px-xxl text-subtitle2 q-mr-md" color="black" label="取消" @click='openflag=true'/>
                    <q-btn type='submit' unelevated class="q-py-sm q-px-xxl text-subtitle2" color="black text-white" label="確定" />
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
import Swal from 'sweetalert2'
import { apiAuth } from '../../boot/axios'
import { useUserStore } from '../../stores/example-store'

const user = useUserStore()

const openflag = ref(true)

const stores = reactive([])

const userinfo = reactive({
  name: '',
  sex: 2,
  height: 165,
  avatar: '',
  stores: '',
  description: ''
})

const editinfo = reactive({
  name: '',
  sex: 2,
  height: 165,
  avatar: null,
  stores: '',
  description: ''
})

const rules = reactive({
  required (v) {
    return !!v || '必填'
  }
})

const goEdit = () => {
  openflag.value = false

  editinfo.name = userinfo.name
  editinfo.sex = userinfo.sex
  editinfo.height = userinfo.height
  // editinfo.avatar = userinfo.avatar
  editinfo.stores = userinfo.stores
  editinfo.description = userinfo.description
}

const editForm = async () => {
  console.log(editinfo)
  const fd = new FormData()

  for (const key in editinfo) {
    fd.append(key, editinfo[key])
  }

  try {
    const { data } = await apiAuth.patch('/staffs', fd)

    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '編輯成功'
    })
    init()
    openflag.value = true
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/staffs')
    // console.log(data.result)
    userinfo.name = data.result.name
    userinfo.sex = data.result.sex
    userinfo.height = data.result.height
    userinfo.avatar = data.result.avatar
    userinfo.stores = data.result.stores
    userinfo.description = data.result.description
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '伺服器錯誤'
    })
  }
}

const initStore = async () => {
  try {
    const { data } = await apiAuth.get('/stores')
    console.log(data.result)
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
initStore()
</script>
