import Vue from 'vue';
import App from './App.vue';
import Bubble from './components/Bubble.vue';
import ContactMe from './components/ContactMe.vue';
import Mustache from './components/Mustache.vue';

Vue.component('bubble', Bubble);
Vue.component('contact-me', ContactMe);
Vue.component('mustache', Mustache);

new Vue({
  render: h => h(App),
}).$mount('#app');
