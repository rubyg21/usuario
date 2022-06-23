const API   = 'https://crudcrud.com/api/ad1a8bb52cd9425a87816451a51c0d11'
const RAND_SIZE = 1000000000

// const Home          = { template: '<div>Bienvenidos a la tienda</div>' }

const UsuariosState  = UsuariosComp

const routes = [
  { path: '/', component: UsuariosState },
  // { path: '/usuarios', component: UsuariosState }
]

const router = new VueRouter({
  routes: routes
})

const app = new Vue({
  router,
  data: {
    mensaje: "Bienvenidos"
  }
}).$mount('#app')

// const routes = [
//   { path: '/', component: Home },
//   { path: '/usuarios', component: UsuariosState }
// ]
