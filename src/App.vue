<template>
<div class="container">
  <bubble msg="hello!"></bubble>
  <mustache />
  <contact-me email="say@hellomustache.com" />
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Bubble from './components/Bubble.vue';
import ContactMe from './components/ContactMe.vue';
import Mustache from './components/Mustache.vue';

export default {
  name: 'App',
  components: {
    Bubble,
    ContactMe,
    Mustache,
  }
};
</script>

<style lang="scss">
@import "./assets/scss/variables";

html {
  box-sizing: border-box;
  font-family: 'Oxygen', sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  background-color: $white;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
</style>
