<template>
  <AppNav></AppNav>
  <br>
  <br>
  <router-view/>
</template>

<script>
import AppNav from './components/AppNav.vue';

export default {
  components: {
    AppNav
  }
}
</script>

<style>

:root {
    --font-main: Play, sans-serif;
    --font-mono: "Roboto Mono", monospace;
    --bold: 700;
    --color-dark: #2D3943;
    --color-light: #f0f0f0;
    --color-main: #2b87d3;
    --color-danger: #F62451;
    --color-success: #1fd78d;
    --color-warn: #EB7B59;
    --color-loading: #A4A4A4;
    --color-dark-mode: #161c21;
    --color-dark-text: #47535D;
    --color-dark-mark: #40505c;
    --color-dark-hover: #47535D;
    --color-light-fade: #A4A4A4;
}

#app {
  font-family: var(--font-main);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  color: var(--color-light);
  background-color: var(--color-dark-mode);
}

</style>
