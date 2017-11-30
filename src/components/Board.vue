<template>
  <div class="board">
    <header>
      <h2>模式识别课程智能机器人</h2>
      <h5>欢迎随时提问～</h5>
    </header>
    <ChatBox></ChatBox>
    <footer>
      <textarea name="text-in" id="text-in" autocomplete="off" v-model="input"></textarea>
      <button class="train-button">训练</button>
      <button class="send-button">发送</button>
    </footer>
  </div>
</template>

<script>
  import ChatBox from './ChatBox.vue'

  export default {
    name: 'Board',
    components: {
      ChatBox
    },
    data () {
      return {
        input: '请简要描述您的问题，如“模式识别是什么”'
      }
    }
  }
</script>

<style scoped>
  .board {
    background-color: #ffffff;
    margin: 0 auto;
    min-width: 720px;
    max-width: 1100px;
    border-radius: 4px;
    box-shadow:2px 2px 3px #aaaaaa;
  }

  header {
    height: 80px;
    width: 100%;
    padding: 10px;
    background-color: #42b983;
  }

  footer {
    background-color: #ffffff;
    width: 100%;
    height: 140px;
    position: relative;
  }

  #text-in {
    position: absolute;
    padding-left: 1em;
    padding-top: 1em;
    top: 0;
    left: 0;
    border: 0 none;
    resize: none;
    font-size: 14px;
    color: #2c3e50;
    line-height: 18px;
    word-break: break-all;
    /*word-wrap: break-word;*/
    overflow: hidden;
    width: 100%;
    height: 70px;
    font-weight: normal;
  }

  footer button {
    position: absolute;
    border: 1px solid #D3D3D3;
    font-size: 14px;
    padding: .5em 1em;
    border-radius: 8px;
    cursor: pointer;
  }

  .train-button {
    bottom: 1em;
    left: 1em;
  }

  .send-button {
    bottom: 1em;
    right: 1em;
    color: #ffffff;
    background-color: #42b983;
  }

  .send-button:hover {
    background-color: #48ca8f;
  }
</style>
