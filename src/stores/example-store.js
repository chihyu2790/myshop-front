import { defineStore } from 'pinia'
import { api, apiAuth } from '../boot/axios'
import Swal from 'sweetalert2'
// import router from '../router/index.js'

// export const useCounterStore = defineStore('counter', {
//   state: () => ({
//     counter: 0
//   }),
//   getters: {
//     doubleCount: (state) => state.counter * 2
//   },
//   actions: {
//     increment () {
//       this.counter++
//     }
//   }
// })

export const useUserStore = defineStore({
  id: 'user',
  state () {
    return {
      token: '',
      account: '',
      role: 0,
      cart: 0
    }
  },
  getters: {
    isLogin () {
      return this.token.length !== 0
    },
    isAdmin () {
      return this.role === 1
    },
    isStaff () {
      return this.role === 2
    },
    avatar () {
      return 'https://source.boringavatars.com/beam/120/' + this.account
    }
  },
  actions: {
    async login (form) {
      try {
        const { data } = await api.post('/users/login', form)
        this.token = data.result.token
        this.account = data.result.account
        this.role = data.result.role
        this.cart = data.result.cart
        Swal.fire({
          icon: 'success',
          title: '成功',
          text: '登入成功'
        })
        if (this.role === 0) {
          this.router.push('/')
        }
        if (this.role === 1) {
          this.router.push('/admin/user')
        }
        if (this.role === 2) {
          this.router.push('/staff/')
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
        })
      }
    },
    async logout () {
      try {
        // await api.delete('/users/logout', {
        //   headers: {
        //     authorization: `Bearer ${this.token}`
        //   }
        // })
        await apiAuth.delete('/users/logout')
        this.router.push('/')
        Swal.fire({
          icon: 'success',
          title: '成功',
          text: '登出成功'
        })
      } catch (_) {
      }
      this.token = ''
      this.account = ''
      this.role = 0
      this.cart = 0
    },
    async addCart (data) {
      if (this.token.length === 0) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: '請先登入'
        })
        this.router.push('/login')
        return
      }
      if (data.quantity <= 0) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: '數量必須大於 0'
        })
        return
      }
      try {
        // console.log(data)
        const { data: resData } = await apiAuth.post('/users/cart', data)
        this.cart = resData.result
        Swal.fire({
          icon: 'success',
          title: '成功',
          text: '加入購物車成功'
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: '加入購物車失敗'
        })
      }
    },
    async deleteCart (data) {
      try {
        // console.log(data.product)
        await apiAuth.patch('/users/cartitems', data)
        return true
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: '刪除購物車商品失敗'
        })
        return false
      }
    },
    async updateCart (data) {
      try {
        await apiAuth.patch('/users/cart', data)
        return true
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: '更新購物車失敗'
        })
        return false
      }
    },
    async checkout (data) {
      try {
        await apiAuth.post('/orders', data)
        this.cart = 0
        Swal.fire({
          icon: 'success',
          title: '成功',
          text: '結帳成功'
        })
        this.router.push('/')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: '結帳失敗'
        })
      }
    },
    async getUser () {
      if (this.token.length === 0) return
      try {
        const { data } = await apiAuth.get('/users')
        this.account = data.result.account
        this.role = data.result.role
        this.cart = data.result.cart
      } catch (error) {
        this.logout()
      }
    }
  },
  persist: {
    key: 'vite-shop',
    paths: ['token']
  }
})
