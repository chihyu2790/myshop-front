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
          title: 'No name. | home',
          login: false,
          admin: false
        }
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('pages/LoginPage.vue'),
        meta: {
          title: 'No name. | login',
          login: false,
          admin: false
        }
      },
      {
        path: 'adminlogin',
        name: 'adminlogin',
        component: () => import('pages/AdminLogin.vue'),
        meta: {
          title: 'No name. | adminlogin',
          login: false,
          admin: false
        }
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('pages/AboutPage.vue'),
        meta: {
          title: 'No name. | about',
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
          title: 'No name. | styling',
          login: false,
          admin: false
        }
      },
      {
        path: 'styling/:id',
        name: 'styling-detail',
        component: () => import('pages/StylingDetail.vue'),
        meta: {
          title: 'No name. | styling-detail',
          login: false,
          admin: false
        }
      },
      {
        path: 'clerk/:id',
        name: 'clerk-detail',
        component: () => import('pages/clerkDetail.vue'),
        meta: {
          title: 'No name. | clerk-detail',
          login: false,
          admin: false
        }
      },
      {
        path: 'store',
        name: 'store',
        component: () => import('pages/StorePage.vue'),
        meta: {
          title: 'No name. | store',
          login: false,
          admin: false
        }
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('pages/CartPage.vue'),
        meta: {
          title: 'No name. | cart',
          login: false,
          admin: false
        }
      },
      {
        path: 'like',
        name: 'like',
        component: () => import('pages/LikePage.vue'),
        meta: {
          title: 'No name. | like',
          login: false,
          admin: false
        }
      },
      {
        path: 'problem',
        name: 'problem',
        component: () => import('pages/ProblemPage.vue'),
        meta: {
          title: 'No name. | problem',
          login: false,
          admin: false
        }
      },
      {
        path: 'product',
        name: 'product',
        component: () => import('pages/ProductPage.vue'),
        meta: {
          title: 'No name. | product',
          login: false,
          admin: false
        }
      },
      {
        path: 'product/:id',
        name: 'product-detail',
        component: () => import('pages/ProductDetail.vue'),
        meta: {
          title: 'No name. | product-detail',
          login: false,
          admin: false
        }
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('pages/UserPage.vue'),
        meta: {
          title: 'No name. | user',
          login: false,
          admin: false
        }
      },
      {
        path: 'banner',
        name: 'banner',
        component: () => import('pages/BannerPage.vue'),
        meta: {
          title: 'No name. | banner',
          login: false,
          admin: false
        }
      },
      {
        path: 'place',
        name: 'place',
        component: () => import('pages/PlacePage.vue'),
        meta: {
          title: 'No name. | place',
          login: false,
          admin: false
        }
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('pages/OrderPage.vue'),
        meta: {
          title: 'No name. | order',
          login: false,
          admin: false
        }
      },
      {
        path: 'order/:id',
        name: 'order-detail',
        component: () => import('pages/OrderDetail.vue'),
        meta: {
          title: 'No name. | order-detail',
          login: false,
          admin: false
        }
      },
      {
        path: 'test',
        name: 'test',
        component: () => import('pages/TestPage.vue'),
        meta: {
          title: 'No name. | test',
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
          title: 'No name. | admin-home',
          login: true,
          admin: true
        }
      },
      {
        path: 'product',
        name: 'admin-product',
        component: () => import('pages/admin/ProductAdmin.vue'),
        meta: {
          title: 'No name. | admin-product',
          login: true,
          admin: true
        }
      },
      {
        path: 'user',
        name: 'admin-user',
        component: () => import('pages/admin/UserAdmin.vue'),
        meta: {
          title: 'No name. | admin-user',
          login: true,
          admin: true
        }
      },
      {
        path: 'order',
        name: 'admin-order',
        component: () => import('pages/admin/OrderAdmin.vue'),
        meta: {
          title: 'No name. | admin-order',
          login: true,
          admin: true
        }
      },
      {
        path: 'store',
        name: 'admin-store',
        component: () => import('pages/admin/StoreAdmin.vue'),
        meta: {
          title: 'No name. | admin-store',
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
          title: 'No name. | staff-home',
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
          title: 'No name. | staff-styling',
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
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: '404',
        component: () => import('pages/ErrorNotFound.vue'),
        meta: {
          title: 'No name. | 404',
          login: false,
          admin: false
        }
      }]
  }
]

export default routes
