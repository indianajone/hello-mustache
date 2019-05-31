<template>
  <div id="app" class="container">
    <bubble msg="hello!"></bubble>
    <mustache></mustache>
    <contact-me email="say@hellomustache.com"></contact-me>
  </div>
</template>

<style lang="scss">
  @import "./assets/styles/variables";
  
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

