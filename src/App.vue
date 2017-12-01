<template>
  <div id="app">
    <Board/>
  </div>
</template>

<script>
  import Board from './components/Board'

  export default {
    name: 'app',
    components: {
      Board
    }
  }
</script>

<style>
  html {
    background-color: #D3D3D3;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin: 40px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  h1, h2, h3, h4, h5 {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
