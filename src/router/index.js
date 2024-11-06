import { createRouter, createWebHistory } from 'vue-router'
import CadastroConta from '../components/CadastroConta.vue'
import ListagemContas from '../components/ListagemContas.vue'
import DetalhamentoParcelas from '../components/DetalhamentoParcelas.vue'

const routes = [
  {
    path: '/',
    name: 'CadastroConta',
    component: CadastroConta,
    meta: { title: 'Cadastrar Contas' },
  },
  {
    path: '/listagem-contas',
    name: 'ListagemContas',
    component: ListagemContas,
    meta: { title: 'Listagem Contas' },
  },
  {
    path: '/detalhamento-parcelas/:index',
    name: 'DetalhamentoParcelas',
    component: DetalhamentoParcelas,
    meta: { title: 'Detalhamento Parcelas' },
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
