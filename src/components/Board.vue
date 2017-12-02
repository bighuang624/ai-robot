<template>
  <div class="board">
    <header>
      <h2>模式识别课程智能机器人</h2>
      <h5>欢迎随时提问～</h5>
    </header>
    <div class="chatbox">
      <div v-for="dialog in dialogs" class="dialog" :class="dialog.isRobot ? 'robot-dialog' : 'user-dialog'">
        <!--<img :src="dialog.isRobot ? '/static/robot.jpg' : '/static/user.jpg'">-->
        <img :src="dialog.isRobot ? 'https://upload-images.jianshu.io/upload_images/2702529-1b2d9bdeab1c905c.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240' : 'https://upload-images.jianshu.io/upload_images/2702529-5b72e8dabd4e0922.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240'">
        <span v-text="dialog.words"></span>
      </div>
    </div>
    <footer>
      <textarea name="text-in" id="text-in" autocomplete="off" v-model="input" @focus="hideTips"
                @active="hideTips" @blur="showTips"
                :class="input === '请简要描述您的问题，如“模式识别是什么”' ? 'withTip' : ''"></textarea>
      <el-button class="train-button" @click="dialogFormVisible = true">训 练</el-button>
      <el-button type="primary" class="send-button" @click="askQuestion">发 送</el-button>
      <el-dialog title="来教机器人说话吧" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item>
            <el-input placeholder="问题" v-model="form.ask" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="textarea"
              :autosize="{ minRows: 3, maxRows: 6}"
              placeholder="答案"
              v-model="form.answer">
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="train">确 定</el-button>
        </div>
      </el-dialog>
    </footer>
  </div>
</template>

<script>
  import { ask } from '../api/index'

  export default {
    name: 'Board',
    data () {
      return {
        tips: '请简要描述您的问题，如“模式识别是什么”',
        input: '请简要描述您的问题，如“模式识别是什么”',
        dialogs: [{
          isRobot: true,
          words: 'Hi~模式识别课程的问题都可以试着问问我哦'
        }],
        dialogFormVisible: false,
        form: {
          ask: '',
          answer: ''
        }
      }
    },
    methods: {
      hideTips () {
        if (this.input === this.tips) {
          this.input = ''
        }
      },
      showTips () {
        if (this.input === '') {
          this.input = this.tips
        }
      },
      askQuestion () {
        if (this.input === '' || this.input === this.tips) {
          this.$message.warning('问题不能为空哦')
        } else {
          let askDialog = {}
          askDialog.isRobot = false
          askDialog.words = this.input
          this.dialogs.push(askDialog)
          ask(this.input).then((response) => {
            let answerDialog = {}
            answerDialog.isRobot = true
            answerDialog.words = response.answer
            this.dialogs.push(answerDialog)
          })
          this.input = this.tips
        }
      },
      train () {
        if (this.form.ask === '') {
          this.$message.warning('问题不能为空哦')
        } else if (this.form.answer === '') {
          this.$message.warning('答案不能为空哦')
        } else {
          this.dialogFormVisible = false
          this.$message.success('提交成功，谢谢参与')
          this.form.ask = ''
          this.form.answer = ''
        }
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
    background-color: #66b1ff;
  }

  footer {
    background-color: #ffffff;
    width: 100%;
    height: 140px;
    position: relative;
  }

  .chatbox {
    background-color: #ececec;
    text-align: left;
    padding: 0 1em;
    width: 100%;
    height: 420px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .dialog {
    position: relative;
    margin: 16px 0;
  }

  .dialog img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  .dialog span {
    font-size: 14px;
    padding: .6em 1em;
    display: inline-block;
    max-width: 600px;
    word-break: break-all;
    word-wrap: break-word;
    overflow: auto;
    white-space: normal;
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
    text-align: right;
  }

  .user-dialog img {
    float: right;
  }

  .user-dialog span {
    color: #ffffff;
    margin-right: 14px;
    background-color: #66b1ff;
    text-align: left;
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
    overflow: hidden;
    width: 100%;
    height: 70px;
    font-weight: normal;
  }

  #text-in.withTip {
    color: #b1b1b1;
  }

  footer button {
    font-size: 14px;
    padding: .5em 1em;
    border-radius: 8px;
    white-space: nowrap;
    line-height: 1;
    cursor: pointer;
  }

  .train-button {
    position: absolute;
    bottom: 1em;
    left: 1em;
  }

  .send-button {
    position: absolute;
    bottom: 1em;
    right: 1em;
  }
</style>
