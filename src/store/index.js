import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    car: [], //购物车
    itemDatas: [{
      "name": "GK100机械键盘",
      "price": "126",
      "detail": "惠普（HP）GK100机械键盘 游戏有线背光电竞键盘鼠标套装 笔记本台式电脑外设办公键鼠耳机三件套 GK100金属灰(白光)青轴",
      "picsrc": "https://img13.360buyimg.com/n1/jfs/t1/125647/32/16991/158115/5fa0aeb5E31cd8fb1/d380b593aaad678b.jpg",
      "tag": "手机数码"
    }, {
      "name": "中长款西装裙",
      "price": "759",
      "detail": "EACHWAY艺之卉通勤连衣裙女长袖2020秋季新款镂空蕾丝拼接中长款西装裙 03蓝色 M",
      "picsrc": "https://img13.360buyimg.com/n1/s350x449_jfs/t1/130745/20/14618/159807/5fa3d606E581b9acb/0183786e3da59d81.jpg!cc_350x449.jpg",
      "tag": "服饰鞋帽"
    }, {
      "name": "西装外套",
      "price": "639",
      "detail": "EACHWAY艺之卉西装外套女秋冬2020新款长袖时尚通勤收腰纯色中长款小西服 45茶绿 M",
      "picsrc": "https://img11.360buyimg.com/n1/s350x449_jfs/t1/126755/18/17562/145909/5fa3d608E51a03f6e/45b2ad294c54564c.jpg!cc_350x449.jpg",
      "tag": "服饰鞋帽"
    }, {
      "name": "长袖连衣裙",
      "price": "2180",
      "detail": "预售】limeflare 2020秋季新款轻奢名媛法式小香风长袖连衣裙女显瘦减龄 灰粉色 165/84A/L",
      "picsrc": "https://img14.360buyimg.com/n1/s350x449_jfs/t1/120787/28/14690/122622/5f841d9aEf8d42acc/75c6286ae6737c88.jpg!cc_350x449.jpg",
      "tag": "服饰鞋帽"
    }, {
      "name": "超级柴机油",
      "price": "439",
      "detail": "美孚（Mobil）美孚黑霸王超级柴机油 15W-40 CI-4级 18L 汽车用品\n",
      "picsrc": "https://img11.360buyimg.com/n1/jfs/t16729/261/652825029/263298/40e4bda2/5a9fa90cN5360288e.jpg",
      "tag": "汽车用品"
    }, {
      "name": "全合成机油",
      "price": "209",
      "detail": "美孚（Mobil）美孚速霸2000 全合成机油 5W-40 SN PLUS级 4L 汽车用品",
      "picsrc": "https://img13.360buyimg.com/n1/jfs/t1/125391/38/2681/83361/5ec786feEcc7e3d28/57b5fcfb213677c1.jpg",
      "tag": "汽车用品"
    }, {
      "name": "米其林轮胎",
      "price": "449",
      "detail": "米其林轮胎Michelin汽车轮胎 205/55R16 91V 韧悦 ENERGY XM2 适配Golf/朗逸/新迈腾",
      "picsrc": "https://img13.360buyimg.com/n1/jfs/t17797/299/1127975150/219527/b1ae460a/5abc3c63N5d1e1a58.jpg",
      "tag": "汽车用品"
    }, {
      "name": "LED强光手电筒",
      "price": "39",
      "detail": "魔铁MOTIE LED强光手电筒 远射充电式变焦家用小型应急照明灯 户外便携露营骑行灯 S26标配版本（1电1充） 变焦款\n",
      "picsrc": "https://img13.360buyimg.com/n1/jfs/t23116/292/460634901/107444/c0a56da4/5b30a4fcN55876881.jpg",
      "tag": "家用电器"
    }, {
      "name": "喷墨打印一体机",
      "price": "379",
      "detail": "惠普（HP）DeskJet 2622 无线家用喷墨打印一体机 (学生作业/手机/彩色打印，扫描，复印，两年保修)",
      "picsrc": "https://img10.360buyimg.com/n1/s450x450_jfs/t11809/222/2563987517/156692/6c7702f3/5a1d3f7aN90e50c31.jpg",
      "tag": "家用电器"
    }, {
      "name": "荣耀Play4T",
      "price": "1288",
      "detail": "全网通6GB+128GB大内存 幻夜黑 4000mAh大电池 4800万AI摄影 6.39英寸魅眼屏",
      "picsrc": "https://img10.360buyimg.com/n1/s450x450_jfs/t1/116226/28/463/178123/5e8c4a42E1a74e70b/f203745e20ed06ec.jpg",
      "tag": "手机数码"
    }, {
      "name": "小米10青春版",
      "price": "2199",
      "detail": "双模5G 骁龙765G 50倍潜望式变焦四摄 8GB+128GB 白桃乌龙 游戏手机",
      "picsrc": "https://img11.360buyimg.com/cms/jfs/t1/93100/2/12107/87972/5e44f0daE62e6d845/086cb7e77a8fce5c.jpg",
      "tag": "手机数码"
    }, {
      "name": "小米10至尊纪念版",
      "price": "5599",
      "detail": "双模5G 骁龙865 120HZ高刷新率 120倍长焦镜头 120W快充 8GB+256GB 陶瓷黑 游戏手机",
      "picsrc": "https://img11.360buyimg.com/cms/jfs/t1/91053/11/12219/89474/5e44efa1E74760ec3/5c420e086c42397f.jpg",
      "tag": "手机数码"
    }, {
      "name": "iPhone 11",
      "price": "4799",
      "detail": "黑色 移动联通电信4G手机 双卡双待",
      "picsrc": "https://img13.360buyimg.com/cms/jfs/t1/149787/29/10581/146149/5f8642d5E2c87dff7/f7c7611a01d11ccd.png",
      "tag": "手机数码"
    }],
    currentTag:"全部商品",
  },
  mutations: {
    //添加新商品，传入整个商品的信息对象
    addItem(state, item) {
      state.itemDatas.unshift(item)
    },

    cTag(state,tag){
      state.currentTag=tag
    }
  },
  actions: {},
  modules: {}
})