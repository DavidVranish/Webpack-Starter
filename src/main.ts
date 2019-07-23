import "core-js/stable";
import "regenerator-runtime/runtime";

import vue from 'vue';
import vuex from 'vuex';
import vue_router from 'vue-router';

import home from './components/home.vue';

vue.use(vuex);
vue.use(vue_router);

const routes = [
  	{ path: '/', component: home }
];

const router = new vue_router({
  	routes
})

const store = new vuex.Store({
  	state: {
    	count: 0
  	},
  	mutations: {
    	increment (state) {
      		state.count++
    	}
  	}
});

const app = new vue({
  	router,
  	store,
  	render(h) {
  		return h('router-view');
  	}
}).$mount('#__vue-app-wrapper');