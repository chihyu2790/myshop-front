const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/IndexPage.vue'),
        meta: {
          title: 'home',
          login: false,
          admin: false
        }
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('pages/LoginPage.vue'),
        meta: {
          title: 'login',
          login: false,
          admin: false
        }
      },
      {
        path: 'adminlogin',
        name: 'adminlogin',
        component: () => import('pages/AdminLogin.vue'),
        meta: {
          title: 'adminlogin',
          login: false,
          admin: false
        }
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('pages/AboutPage.vue'),
        meta: {
          title: 'about',
          login: false,
          admin: false
        }
      },
      { path: 'register', component: () => import('pages/RegisterPage.vue') },
      {
        path: 'styling',
        name: 'styling',
        component: () => import('pages/StylingPage.vue'),
        meta: {
          title: 'styling',
          login: false,
          admin: false
        }
      },
      {
        path: 'styling/:id',
        name: 'styling-detail',
        component: () => import('pages/StylingDetail.vue'),
        meta: {
          title: 'styling-detail',
          login: false,
          admin: false
        }
      },
      {
        path: 'store',
        name: 'store',
        component: () => import('pages/StorePage.vue'),
        meta: {
          title: 'store',
          login: false,
          admin: false
        }
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('pages/CartPage.vue'),
        meta: {
          title: 'cart',
          login: false,
          admin: false
        }
      },
      {
        path: 'like',
        name: 'like',
        component: () => import('pages/LikePage.vue'),
        meta: {
          title: 'like',
          login: false,
          admin: false
        }
      },
      {
        path: 'problem',
        name: 'problem',
        component: () => import('pages/ProblemPage.vue'),
        meta: {
          title: 'problem',
          login: false,
          admin: false
        }
      },
      {
        path: 'product',
        name: 'product',
        component: () => import('pages/ProductPage.vue'),
        meta: {
          title: 'product',
          login: false,
          admin: false
        }
      },
      {
        path: 'product/:id',
        name: 'product-detail',
        component: () => import('pages/ProductDetail.vue'),
        meta: {
          title: 'product-detail',
          login: false,
          admin: false
        }
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('pages/UserPage.vue'),
        meta: {
          title: 'user',
          login: false,
          admin: false
        }
      },
      {
        path: 'banner',
        name: 'banner',
        component: () => import('pages/BannerPage.vue'),
        meta: {
          title: 'banner',
          login: false,
          admin: false
        }
      },
      {
        path: 'place',
        name: 'place',
        component: () => import('pages/PlacePage.vue'),
        meta: {
          title: 'place',
          login: false,
          admin: false
        }
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('pages/OrderPage.vue'),
        meta: {
          title: 'order',
          login: false,
          admin: false
        }
      },
      {
        path: 'order/:id',
        name: 'order-detail',
        component: () => import('pages/OrderDetail.vue'),
        meta: {
          title: 'order-detail',
          login: false,
          admin: false
        }
      },
      {
        path: 'test',
        name: 'test',
        component: () => import('pages/TestPage.vue'),
        meta: {
          title: 'test',
          login: false,
          admin: false
        }
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'admin-home',
        component: () => import('pages/IndexPage.vue'),
        meta: {
          title: 'admin-home',
          login: true,
          admin: true
        }
      },
      {
        path: 'product',
        name: 'admin-product',
        component: () => import('pages/admin/ProductAdmin.vue'),
        meta: {
          title: 'admin-product',
          login: true,
          admin: true
        }
      },
      {
        path: 'user',
        name: 'admin-user',
        component: () => import('pages/admin/UserAdmin.vue'),
        meta: {
          title: 'admin-user',
          login: true,
          admin: true
        }
      },
      {
        path: 'order',
        name: 'admin-order',
        component: () => import('pages/admin/OrderAdmin.vue'),
        meta: {
          title: 'admin-order',
          login: true,
          admin: true
        }
      },
      {
        path: 'store',
        name: 'admin-store',
        component: () => import('pages/admin/StoreAdmin.vue'),
        meta: {
          title: 'admin-store',
          login: true,
          admin: true
        }
      }

    ]
  },
  {
    path: '/staff',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'staff-home',
        component: () => import('pages/staff/UserStaff.vue'),
        meta: {
          title: 'staff-home',
          login: true,
          staff: true,
          admin: false
        }
      },
      {
        path: 'styling',
        name: 'staff-styling',
        component: () => import('pages/staff/StylingStaff.vue'),
        meta: {
          title: 'staff-styling',
          login: true,
          staff: true,
          admin: false
        }
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
