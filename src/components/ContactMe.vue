<template>
  <a :class="$style['contact-me']" :href="linkToMail">{{address}}</a>
</template>

<script>
import {
  computed
} from 'vue';
export default {
  name: 'contact-me',
  props: {
    email: {
      type: String,
      required: true,
    },
  },
  setup({
    email
  }) {
    return {
      address: computed(() => email.replace('@', '[at]')),
      linkToMail: computed(() => `mailto:${email}`),
    };
  },
};
</script>

<style lang="scss" module>
.contact-me,
.contact-me:focus,
.contact-me:visited {
  color: #444;
  text-decoration: none;
}

.contact-me:hover {
  color: currentColor;
  text-decoration: underline;
}
</style>
