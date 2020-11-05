<template>
  <v-card>
    <v-img :src="picsrc" height="auto"></v-img>
    <v-card-title>{{name}}</v-card-title>
    <v-card-text>
      {{detail}}
    </v-card-text>
    <v-card-actions>
      <p class="ri-price">￥ {{price}}</p>
      <v-spacer></v-spacer>
      <v-btn large>
        <v-icon>mdi-cart-outline</v-icon>加入
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
props:{
  name:String,
  detail:String,
  picsrc:String,
  price:String,
}
}
</script>

<style scoped>
.v-card{
  margin: 1rem ;
  padding: 1rem;
}
.ri-price{
  font-size: 1.2rem;
}
</style>