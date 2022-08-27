<template>
  <q-layout view="lHh Lpr lff">
    <q-header bordered class="bg-white text-black ">
      <q-toolbar class="q-py-md container q-px-none">
        <q-btn class="lt-lg" flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <!-- @click="toggleLeftDrawer" -->
        <q-avatar class="gt-md q-mr-md">
          <img src="https://i.imgur.com/pFm9HbG.png" alt="">
        </q-avatar>
        <q-tabs class="gt-md" shrink indicator-color="red">
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
          <q-btn v-if="isLogin" flat round no-icon-animation icon="fa-solid fa-user" size="sm" color="black">
            <q-menu class="no-shadow border-all-black" square anchor="bottom end" self="top right" auto-close
              :offset="[2, 4]">
              <q-list>
                <q-item color="black" clickable v-close-popup to="/login">
                  <q-item-section>
                    <q-item-label v-if="isAdmin">會員管理</q-item-label>
                    <q-item-label v-else>個人檔案</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="logout">
                  <q-item-section>
                    <q-item-label>登出</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn v-else flat round color="black" icon="fa-solid fa-user" to='/login' size="sm" />
          <!-- <q-btn flat round color="black" icon="fa-regular fa-heart" to='/like' size="sm"/> -->
          <q-btn v-if="!isAdmin && !isStaff" class="q-ml-sm" flat round color="black" icon="fa-solid fa-cart-shopping"
            to='/cart' size="sm" />
          <q-btn v-if="isAdmin" flat round class="q-ml-sm" color="black" icon="fa-solid fa-wrench" to='/admin/user'
            size="sm" />
        </div>

        <!-- <div>Quasar v{{ $q.version }}</div> -->

      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" overlay bordered class="bg-white" show-if-above>
      <q-btn class="q-py-md" flat icon="fa-solid fa-xmark" aria-label="Menu" color="dark" @click="toggleLeftDrawer" />
      <q-list>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" :link="link" />
      </q-list>
      <q-separator inset />
      <q-list class="q-mt-md">
        <q-item clickable v-ripple>
          <q-item-section class="text-body1 text-weight-regular" @click="logout">登出</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
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

    <!-- gt-md -->
    <q-footer bordered class="bg-grey-1 text-black ">
      <!-- <q-toolbar>
        <q-toolbar-title>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar> -->
      <section class="container">
        <div class="row q-my-xl q-my-sm-xxl">
          <div class="col-12 lt-sm">
            <!-- <q-separator class="q-my-sm " /> -->
            <q-icon class="q-mr-sm" name="fa-brands fa-instagram" size="md" color="grey-9
" />
            <q-icon class="q-mr-sm" name="fa-brands fa-twitter" size="md" color="grey-9
" />
            <q-icon class="q-mr-sm" name="fa-brands fa-facebook" size="md" color="grey-9
" />
            <q-separator class="q-my-md" />
          </div>
          <div class="col-12 col-sm-6 col-lg-3 q-mb-none q-mb-sm-md">
            <div class="text-h5 q-mb-lg gt-xs text-grey-9">關於我們</div>

            <div class="text-body1 text-weight-thin q-mb-sm">品牌故事</div>
            <div class="text-body1 text-weight-thin q-mb-sm">店鋪資訊</div>
            <div class="text-body1 text-weight-thin q-mb-sm">隱私權及網站使用條款</div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3 q-mb-none q-mb-sm-md">
            <div class="text-h5 q-mb-lg gt-xs text-grey-9">購物說明</div>
            <div class="text-body1 text-weight-thin q-mb-sm">購物指南(購前聲明)</div>
            <div class="text-body1 text-weight-thin q-mb-sm">付款方式</div>
            <div class="text-body1 text-weight-thin q-mb-sm">售後服務說明</div>
            <div class="text-body1 text-weight-thin q-mb-sm">運送方式</div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3 q-mb-none q-mb-sm-md">
            <div class="text-h5 q-mb-lg gt-xs text-grey-9">客服資訊</div>
            <div class="text-body1 text-weight-thin q-mb-sm">常見問題</div>
            <div class="text-body1 text-weight-thin q-mb-sm">聯絡我們</div>
            <div class="text-body1 text-weight-thin q-mb-sm">防詐騙宣導</div>
            <div class="text-body1 text-weight-thin q-mb-sm">會員權益</div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3 q-mb-none q-mb-sm-md">
            <div class="q-mb-lg gt-xs">
              <q-icon class="q-mr-sm" name="fa-brands fa-instagram" size="md" color="grey-9" />
              <q-icon class="q-mr-sm" name="fa-brands fa-twitter" size="md" color="grey-9" />
              <q-icon class="q-mr-sm" name="fa-brands fa-facebook" size="md" color="grey-9" />
            </div>
            <div class="text-body1 text-weight-thin q-mb-sm">客服電話 : 02-1234-5678</div>
            <div class="text-body1 text-weight-thin q-mb-sm">服務時間 : 週一至週五，09:30-18:00</div>
            <div class="text-body1 text-weight-thin q-mb-sm">aaa1234567@gmail.com</div>
          </div>
        </div>
      </section>
    </q-footer>
  </q-layout>
</template>

<script setup>
/*eslint-disable */
import { defineComponent, ref, reactive } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/example-store'

const user = useUserStore()
const { logout } = user
const { isLogin, isAdmin, cart, isStaff } = storeToRefs(user)
const leftDrawerOpen = ref(false)
const text = ref('')

const linksList = reactive([

  {
    title: 'TOP',
    // caption: 'quasar.dev',
    // icon: 'school',
    link: '/'
  },
  {
    title: 'SHOP',
    // caption: 'github.com/quasarframework',
    // icon: 'code',
    link: '/product'
  },
  {
    title: 'STORE',
    // caption: 'chat.quasar.dev',
    // icon: 'chat',
    link: '/store'
  },
  {
    title: 'ABOUT',
    // caption: 'forum.quasar.dev',
    // icon: 'record_voice_over',
    link: '/about'
  },
  {
    title: 'STYLING',
    // caption: '@quasarframework',
    // icon: 'rss_feed',
    link: '/styling'
  }
])
const essentialLinks = ref(linksList)

const toggleLeftDrawer = () => {
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
