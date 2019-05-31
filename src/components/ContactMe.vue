<template>
  <a :class="$style['contact-me']" :href="linkToMail">{{email}}</a>
</template>

<script>
export default {
  name: 'contact-me',
  props: {
    email: {
      type: String,
      required: true,
    },
  },

  computed: {
    linkToMail() {
      return `mailto:${this.email}`;
    },
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

