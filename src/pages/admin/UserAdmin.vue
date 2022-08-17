<template>
  <q-page>
        <section class="container">
            <div class="row">
                <div class="col-3 q-pa-md" v-for='user in users' :key='user._id'>
                    <q-card>
                        <div class="text-h6">{{ user.account }}</div>
                        <div class="text-subtitle2">{{ user.email }}</div>
                        <q-card-section class="q-pt-none">
                            {{ user.role }}
                        </q-card-section>
                        <q-btn label="刪除" @click="deletee(user._id)" color="black"/>
                    </q-card>
                </div>
            </div>
        </section>
    </q-page>
</template>
<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../../boot/axios'

const users = reactive([])

const deletee = async (userid) => {
  try {
    await apiAuth.delete('/users/' + userid)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '刪除成功'
    })
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
    })
  }
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/all')
    users.push(...data.result)
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
