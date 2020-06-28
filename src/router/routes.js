import Root from '@apps/root'

const routes = [
  {
    path: '/',
    // component: () => import('@apps/root/index.vue'),
    component: () => import('@/layouts/Main'),
    // meta: {
    //   breadcrumb: { label: 'Index', icon: 'widgets', app: 'root' }
    // },
    children: [
      {
        path: '',
        name: 'Home',
        component: Root
      }
    ]
  }
]

// Always leave this as last one
// if (process.env.MODE !== 'ssr') {
//   routes.push({
//     path: '*',
//     component: () => import('pages/Error404.vue')
//   })
// }

export default routes
