<template>
  <div class="chatbox">
    <div v-for="dialog in dialogs" class="dialog" :class="dialog.isRobot ? 'robot-dialog' : 'user-dialog'">
      <img :src="dialog.isRobot ? '/static/robot.jpg' : '/static/user.jpg'">
      <span v-text="dialog.words"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ChatBox',
    data () {
      return {
        dialogs: [{
          isRobot: true,
          words: 'Hi~模式识别课程的问题都可以试着问问我哦'
        }, {
          isRobot: false,
          words: '模式识别课程真不错！'
        }]
      }
    }
  }
</script>

<style scoped>
  .chatbox {
    background-color: #ececec;
    text-align: left;
    padding: 1em;
    width: 100%;
    min-height: 360px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .dialog {
    position: relative;
  }

  .dialog::after {
    content: " .";
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
  }

  .dialog img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    /*position: absolute;*/
    /*top: 0;*/
  }

  .dialog span {
    font-size: 14px;
    padding: .6em 1em;
    margin-top: 20px;
    border: 1px solid #D3D3D3;
    background-color: #ffffff;
    border-radius: 4px;
  }

  .robot-dialog {

  }

  .robot-dialog img {
    /*left: 0;*/
  }

  .robot-dialog span {
    margin-left: 10px;
  }

  .user-dialog {
    float: right;
  }

  .user-dialog img {
    /*right: 0;*/
    float: right;
  }

  .user-dialog span {
    color: #ffffff;
    margin-right: 14px;
    background-color: #42b983;
  }
</style>
