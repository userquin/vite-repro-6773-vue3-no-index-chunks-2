import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";

createApp(App).use(createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/', component: defineAsyncComponent(() => import('./pages/Home.vue')),
  }, {
    path: '/view1', component: defineAsyncComponent(() => import('./pages/View1.vue')),
  }, {
    path: '/view2', component: defineAsyncComponent(() => import('./pages/View2.vue')),
  }, {
    path: '/view3', component: defineAsyncComponent(() => import('./pages/View3.vue')),
  }],
})).mount('#app')
