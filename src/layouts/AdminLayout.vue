<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white text-black">
      <q-toolbar>
          <q-avatar >
            <img src="https://source.boringavatars.com/beam/200/chi82790" alt="">
          </q-avatar>
          <q-tabs shrink>
            <q-route-tab exact  to='/' label="TOP" />
            <q-route-tab exact to='/admin/product' label="SHOP" />
            <q-route-tab exact to='/store' label="STORE" />
            <q-route-tab exact to='/about' label="ABOUT" />
            <q-route-tab exact  to='/styling' label="STYLING" />
          </q-tabs>

          <q-space />
          <q-input borderless v-model="text" input-class="text-right" class="q-ml-md">
            <template v-slot:append>
              <q-icon color="black" name="search" class="cursor-pointer" @click="text = ''"/>
            </template>
          </q-input>
          <div>
            <q-btn flat round color="black" icon="fa-regular fa-user" to='/admin/user'  size="sm"/>
            <q-btn flat round color="black" icon="fa-regular fa-heart" to='/like' size="sm"/>
            <q-btn flat round color="black" icon="fa-solid fa-cart-shopping" to='/cart' size="sm"/>
          </div>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 600px">
        <q-card-section>
          <div class="text-h6">Your address</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input v-model="address" color="black" @keyup.enter="prompt = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-black">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add address" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog> -->
  </q-layout>
</template>

<script setup>
/*eslint-disable */
import {  ref } from 'vue'
import { reactive } from 'vue'
const openflag = ref(false)

</script>
