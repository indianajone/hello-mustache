<template>
  <div :class="$style.mustache">
    <i></i>
  </div>
</template>

<style lang="scss" module>
@import "../assets/styles/variables";

.mustache {
  color: $black;
  width: $size;
  height: $size;
  position: relative;
  margin-bottom: 1em;

  &::before,
  &::after {
    content: "";
    color: currentColor;
    background-color: currentColor;
    border-radius: 100%;
    position: absolute;
    top: 0;
    width: $size;
    height: $size;
  }

  &::before {
    left: -40%;
  }

  &::after {
    right: -40%;
  }

  > i {
    display: block;
    color: currentColor;
    position: absolute;
    width: 100%;
    height: 100%;

    &::before,
    &::after {
      content: "";
      position: absolute;
      bottom: -20%;
      width: 100%;
      height: 200%;
      border: 0 solid transparent;
      border-bottom: $size solid currentColor;
    }

    &::before {
      border-radius: 0 0 0 100%;
      right: 130%;    
      transform-origin: right center;
      transform: rotate(-50deg);
    }

    &::after {
      border-radius: 0 0 100% 0;
      left: 130%;
      transform-origin: left center;
      transform: rotate(50deg);
    }
  }
}
</style>
