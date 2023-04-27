import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../components/Layout.vue'),
        children: [
            {
                path: '/',
                name: 'Home',
                component: () => import('../views/Home.vue')
            },
            {
                path: '/product/:id',
                name: 'ProductDetails',
                component: () => import('../views/ProductDetails.vue')

            },
            {
                path: '/search-by-name/:name?',
                name: 'SearchedProducts',
                component: () => import('../views/SearchedProducts.vue')
            },
            {
                path: '/search-by-category/:category?',
                name: 'ProductCategory',
                component: () => import('../views/ProductCategory.vue')
            },
            {
                path: '/cart',
                name: 'Cart',
                component: () => import('../views/Cart.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

export default router