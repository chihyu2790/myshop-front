<template>
  <q-layout view="lHh Lpr lff">
    <q-header  bordered class="bg-white text-black ">
      <q-toolbar class="q-py-md container q-px-none" >
          <q-btn
            class="lt-lg"
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"

          />
          <!-- @click="toggleLeftDrawer" -->
          <q-avatar class="gt-lg q-mr-md">
            <img src="https://source.boringavatars.com/beam/200/chih2790" alt="">
          </q-avatar>
          <q-tabs
          class="gt-lg"
          shrink
          indicator-color="red"
          >
            <q-route-tab exact name='/' to='/' label="TOP" />
            <q-route-tab exact name='/product' to='/product' label="SHOP" />
            <q-route-tab exact name='/store' to='/store' label="STORE" />
            <q-route-tab exact name='/about' to='/about' label="ABOUT" />
            <q-route-tab exact name='/styling' to='/styling' label="STYLING" />
          </q-tabs>

          <q-space />
          <!-- <q-input borderless v-model="text" input-class="text-right" class="q-ml-md">
            <template v-slot:append>
              <q-icon color="black" name="search" class="cursor-pointer" @click="text = ''"/>
            </template>
          </q-input> -->
          <div>
            <q-btn flat round color="black" icon="fa-regular fa-user" to='/login' size="sm"/>
            <!-- <q-btn flat round color="black" icon="fa-regular fa-heart" to='/like' size="sm"/> -->
            <q-btn flat round color="black" icon="fa-solid fa-cart-shopping" to='/cart' size="sm"/>
          </div>

        <!-- <div>Quasar v{{ $q.version }}</div> -->

      </q-toolbar>
    </q-header>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-grey-1 text-black gt-lg">
      <!-- <q-toolbar>
        <q-toolbar-title>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar> -->
      <section class="container">
        <div class="row q-my-xxl">
          <div class="col-3 ">
            <div class="text-h5 q-mb-lg">關於我們</div>

            <div class="text-body1 text-weight-light q-mb-xs">品牌故事</div>
            <div class="text-body1 text-weight-light q-mb-xs">店鋪資訊</div>
            <div class="text-body1 text-weight-light q-mb-xs">隱私權及網站使用條款</div>
          </div>
          <div class="col-3">
            <div class="text-h5 q-mb-lg">購物說明</div>
            <div class="text-body1 text-weight-light q-mb-xs">購物指南(購前聲明)</div>
            <div class="text-body1 text-weight-light q-mb-xs">付款方式</div>
            <div class="text-body1 text-weight-light q-mb-xs">售後服務說明</div>
            <div class="text-body1 text-weight-light q-mb-xs">運送方式</div>
          </div>
          <div class="col-3">
            <div class="text-h5 q-mb-lg">客服資訊</div>
            <div class="text-body1 text-weight-light q-mb-xs">常見問題</div>
            <div class="text-body1 text-weight-light q-mb-xs">聯絡我們</div>
            <div class="text-body1 text-weight-light q-mb-xs">防詐騙宣導</div>
            <div class="text-body1 text-weight-light q-mb-xs">會員權益</div>
          </div>
          <div class="col-3">
            <div class="q-mb-lg" >
              <q-icon class="q-mx-xs" name="fa-brands fa-instagram" size="md" />
              <q-icon class="q-mx-xs" name="fa-brands fa-twitter" size="md"/>
              <q-icon class="q-mx-xs" name="fa-brands fa-facebook" size="md"/>
            </div>
            <div class="text-body1 text-weight-light q-mb-xs">客服電話 : 02-1234-5678</div>
            <div class="text-body1 text-weight-light q-mb-xs">服務時間 : 週一至週五，09:30-18:00</div>
            <div class="text-body1 text-weight-light q-mb-xs">aaa1234567@gmail.com</div>
          </div>
        </div>
      </section>
    </q-footer>
  </q-layout>
</template>

<script setup>
/*eslint-disable */
import { defineComponent, ref ,reactive } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/example-store'

const user = useUserStore()
const { logout } = user
const { isLogin, isAdmin, cart } = storeToRefs(user)

const text = ref('')

const linksList = reactive([

  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
])
const leftDrawerOpen = ref(false)

const toggleLeftDrawer =() => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
// export default defineComponent({
//   name: 'MainLayout',

//   components: {

//     /*eslint-disable */
//     EssentialLink
//     /* eslint-enable */
//   },

//   setup () {
//     const leftDrawerOpen = ref(false)

//     return {
//       essentialLinks: linksList,
//       leftDrawerOpen,
//       toggleLeftDrawer () {
//         leftDrawerOpen.value = !leftDrawerOpen.value
//       }
//     }
//   }
// })
</script>
