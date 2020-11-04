<template>
  <v-card
    color="grey lighten-4"
  >
    <v-toolbar  
      src="https://api.ri-co.cn/whisper/getpics/390d8fd0-VaranasiCandles_EN-AU12230572751_1920x1080.jpg">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>深蓝电商平台</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn>首页</v-btn>
      <v-btn>分类</v-btn>
      <v-btn>购物车</v-btn>
      <v-btn @click="loginWin=true">登录</v-btn>

      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            dark
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>标题</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-toolbar>

    <v-dialog v-model="loginWin">
      <v-row>
        <v-col cols=10 ofset=1>
          <v-card>
            <v-card-title>
              登录
            </v-card-title>
            <v-card-text>
              <v-text-field label="用户名" v-model="userName"></v-text-field>
              <v-text-field label="密码" v-model="passwd" type="password"></v-text-field>
            </v-card-text>
            <v-card-action>
              <v-btn large>登录</v-btn>
              <v-btn large @click="loginWin=false">取消</v-btn>
            </v-card-action>
          </v-card>
        </v-col>
      </v-row>
      
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  data(){
    return{
      loginWin:false,
      userName:"",
      passwd:"",
    }
  }
}
</script>

<style>

</style>