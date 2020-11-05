<template>
  <div>

  
  <v-card color="grey lighten-4">
    <v-app-bar fixed>
      <v-app-bar-nav-icon @click="leftDrawer=!leftDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title>深蓝电商平台</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text large>首页</v-btn>
      <v-btn text large >分类</v-btn>
      <v-btn text large >购物车</v-btn>
      <v-btn text large @click="loginWin = true">登录</v-btn>

      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item link>
            <v-list-item-title>添加</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-dialog v-model="loginWin" max-width="700">
      <v-card>
        <v-card-title> 登录 </v-card-title>

        <v-card-text>
          <v-row>
            <v-col cols="10" ofset="1">
              <v-text-field label="用户名" v-model="userName"></v-text-field>
              <v-text-field
                label="密码"
                v-model="passwd"
                type="password"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn large>登录</v-btn>
          <v-btn large @click="loginWin = false">取消</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>

  <v-navigation-drawer v-model="leftDrawer" fixed style="top:64px">
    <v-list>
      <v-list-item>
        <v-list-item-title class="left-title">
          商品分类
        </v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-avatar>
          <v-icon>mdi-cellphone-iphone</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          手机数码
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-avatar>
          <v-icon>mdi-hammer-wrench</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          家用电器
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-avatar>
          <v-icon>mdi-car</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          汽车用品
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-avatar>
          <v-icon>mdi-shoe-formal</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          服饰鞋帽
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginWin: false,
      leftDrawer:true,
      userName: "",
      passwd: "",
      backksrc:
        "https://api.ri-co.cn/whisper/getpics/390d8fd0-VaranasiCandles_EN-AU12230572751_1920x1080.jpg",
    };
  },
};
</script>

<style>
.left-title{
  color: rgb(145, 145, 145);
  margin-left: 4rem;
  font-size: 1.2rem;
}
</style>