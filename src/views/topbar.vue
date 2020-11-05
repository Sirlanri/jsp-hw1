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
          <v-list-item link @click="addItemWin=true">
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
          <v-btn large color="primary">登录</v-btn>
          <v-btn large @click="loginWin = false" outlined>取消</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="addItemWin" max-width="700">
      

      <v-card>
        
        <v-col cols="10" offset="1">
        <v-card-title> 添加商品 </v-card-title>

          <v-card-text>
            <v-text-field
              label="名称" v-model="addName"
            ></v-text-field>
            <v-textarea outlined
              label="介绍" v-model="addDetail"
            ></v-textarea>
            <v-text-field
              label="价格" type="number" v-model="addPrice"
            ></v-text-field>
            <v-text-field
              label="图片链接" v-model="addPic" 
            ></v-text-field>
            <v-select
              :items="tagsList"
              v-model="addTag"
              label="商品类型"
            ></v-select>
          </v-card-text>
          
          <v-card-actions>
            <v-btn large @click="addItem" color="primary">添加</v-btn>
            <v-btn large @click="addItemWin = false" outlined>取消</v-btn>
          </v-card-actions>
          </v-col>
     
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
      <v-list-item link @click="cTag('全部商品')">
        <v-list-item-avatar>
          <v-icon>mdi-all-inclusive</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          全部商品
        </v-list-item-content>
      </v-list-item>
      <v-list-item link @click="cTag('手机数码')">
        <v-list-item-avatar>
          <v-icon>mdi-cellphone-iphone</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          手机数码
        </v-list-item-content>
      </v-list-item>
      <v-list-item link @click="cTag('家用电器')">
        <v-list-item-avatar>
          <v-icon>mdi-hammer-wrench</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          家用电器
        </v-list-item-content>
      </v-list-item>
      <v-list-item link @click="cTag('汽车用品')">
        <v-list-item-avatar>
          <v-icon>mdi-car</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          汽车用品
        </v-list-item-content>
      </v-list-item>
      <v-list-item link  @click="cTag('服饰鞋帽')">
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
      addItemWin:false,
      loginWin: false,
      leftDrawer:true,
      userName: "",
      passwd: "",
      backksrc:
        "https://api.ri-co.cn/whisper/getpics/390d8fd0-VaranasiCandles_EN-AU12230572751_1920x1080.jpg",
      
      tagsList:["手机数码","家用电器","汽车用品","服饰鞋帽"],
      addName:"",
      addPrice:0,
      addPic:"",
      addDetail:"",
      addTag:"手机数码"
    };
  },

  methods:{
    addItem(){
      let newItem={}
      newItem.name=this.addName
      newItem.price=this.addPrice
      newItem.detail=this.addDetail
      newItem.picsrc=this.addPic
      newItem.tag=this.addTag
      this.$store.commit('addItem',newItem)
      //清空当前的数据
      this.addName=""
      this.addPrice=0
      this.addPic=""
      this.addDetail=""
      this.addItemWin=false
    },
    cTag(tag){
      this.$store.commit('cTag',tag)
    }

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