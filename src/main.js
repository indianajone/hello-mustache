import Vue from 'vue';
import * as Sentry from "@sentry/browser";
import { Vue as VueIntegration } from "@sentry/integrations";
import { Integrations } from "@sentry/tracing";
import App from './App.vue';
import Bubble from './components/Bubble.vue';
import ContactMe from './components/ContactMe.vue';
import Mustache from './components/Mustache.vue';

Sentry.init({
  dsn: 'https://b0ee8c598e8047a8ae1566ce81b7b40c@o471017.ingest.sentry.io/5502445',
  integrations: [
    new VueIntegration({
      Vue,
      tracing: true,
      tracingOptions: {
        trackComponents: true,
      },
    }),
    new Integrations.BrowserTracing(),
  ],

  tracesSampleRate: 1.0,
});

Vue.component('bubble', Bubble);
Vue.component('contact-me', ContactMe);
Vue.component('mustache', Mustache);

new Vue({
  render: h => h(App),
}).$mount('#app');
