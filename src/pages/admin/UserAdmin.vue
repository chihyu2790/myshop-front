<template>
  <q-page>
    <section class="container">
      <div class="row q-mt-xl">
        <div class="col-2">
          <div class="text-h6">後台管理</div>
          <router-link :to="'/admin/user'">
            <div class="text-subtitle1 q-my-lg">使用者管理</div>
          </router-link>
          <router-link :to="'/admin/product'">
            <div class="text-subtitle1 q-my-lg">商品管理</div>
          </router-link>
          <router-link :to="'/admin/store'">
            <div class="text-subtitle1 q-my-lg">店鋪管理</div>
          </router-link>
          <router-link :to="'/admin/order'">
            <div class="text-subtitle1 q-my-lg">訂單管理</div>
          </router-link>
          <div class="text-subtitle1 q-my-lg">活動管理</div>
          <div class="text-subtitle1 q-my-lg">登出</div>
        </div>
        <div class="col-10">
          <div class="flex items-center text-center q-mb-lg">
            <div class="text-h4 text-weight-medium">使用者管理</div>
            <q-space />
          </div>
          <div class="text-body1 q-mb-md">管理使用者頁面</div>
          <q-table :grid="$q.screen.xs" flat bordered :rows="users" :columns="columns" row-key="name">
            <template #body-cell-edit="edit">
              <q-td :edit="edit">
                <div class="column">
                  <q-btn class="q-px-sm" @click='deletee(edit.row._id)' outline>刪除使用者</q-btn>
                </div>
              </q-td>
            </template>
          </q-table>
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

const columns = [
  { name: 'account', align: 'left', label: 'account', field: 'account' },
  { name: '_id', align: 'left', label: 'id', field: '_id' },
  { name: 'name', align: 'left', label: 'name', field: 'name' },
  { name: 'email', align: 'left', label: 'email', field: 'email' },
  { name: 'edit', label: '商品操作', align: 'left' }
]

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
