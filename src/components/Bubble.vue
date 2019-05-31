<template>
  <div :class="$style.bubble">{{msg}}</div>
</template>

<script>
export default {
  name: 'bubble',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" module>
  @import "../assets/styles/variables";
  
  .bubble {
    border: 0.125em solid $black;
    border-radius: 100%;
    position: relative;
    width: 15%;
    height: calc(#{$size} * 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: calc(100vw * 0.03);
    font-weight: bold;
    left: 2.25em;
    top: -0.5em;
    
    &::before {
      content: '';
      position: absolute;
      background-color: $white;
      border-bottom: solid 0.125em currentColor;
      border-right: solid 0.125em currentColor;
      width: 12%;
      height: 20%;
      transform: rotate(65deg);
      bottom: -3%;
      left: 14%;
    }
  }
</style>
