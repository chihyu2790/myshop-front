<template>
  <q-page>
    <section class="container">
      <div class="row">
        <div class="col">
          {{ form.color }}
          <q-checkbox v-model="form.color" val="black" color="black" />

          <q-checkbox v-model="form.color" val="red" color="red" />

          <q-checkbox v-model="form.color" val="grey" color="grey" />

          <!-- <input type="checkbox" id="black" value="black" v-model="form.color">
               <label for="black">black</label>
               <input type="checkbox" id="red" value="red" v-model="form.color">
               <label for="red">red</label>
               <input type="checkbox" id="grey" value="grey" v-model="form.color">
               <label for="grey">grey</label> -->
        </div>
        <div class="col">
          <q-btn label="Alert" color="black" @click="prompt = true" />
          <q-dialog v-model="prompt" persistent>
            <q-card style="min-width: 600px">
              <q-card-section>
                <div class="text-h6">Your address</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <q-input v-model="address" color="black" @keyup.enter="prompt = false" />
              </q-card-section>

              <q-card-actions align="right" class="text-black">
                <q-btn flat label="Cancel" @click="prompt = false" />
                <q-btn flat label="Add address" @click="prompt = false" />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>
        <div class="col">
          <q-input v-model="text" />
          <q-chip v-for='(chip, ipx) in chips' :key='ipx'>{{ chip }}</q-chip>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import Swal from 'sweetalert2'
import { api } from '../boot/axios.js'
const form = reactive({
  color: []
})

const products = reactive([])

const text = ref('')
const prompt = ref(false)

const chips = computed(() => {
  const chip = text.value.split(/\s+/)
  // console.log(chip)
  return chip
})

const formm = reactive({
  classify: '女裝'
})

const init = async () => {
  try {
    const { data } = await api.post('/products/genre/', formm)
    products.push(...data.result)
    console.log(products)
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
