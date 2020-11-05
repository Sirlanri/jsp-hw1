<template>
  <v-row class="overy">
    
		<v-col lg="2" class="d-none d-lg-flex"></v-col>
		<v-col
			lg="3"
			md="5"
			sm="6"
			cols="12"
			offset-sm="0"
			offset-md="1"
			offset-lg="0"
		>
			<div class="flex-column" v-for="(card, index) in cards1" :key="index">
				<card
					:name="card.name"
          :detail="card.detail"
          :picsrc="card.picsrc"
          :price="card.price"
				></card>
			</div>
		</v-col>

    <v-col
			lg="3"
			md="5"
			sm="6"
			cols="12"
			offset-sm="0"
			offset-md="1"
			offset-lg="0"
		>
			<div class="flex-column" v-for="(card, index) in cards2" :key="index">
				<card
					:name="card.name"
          :detail="card.detail"
          :picsrc="card.picsrc"
          :price="card.price"
				></card>
			</div>
		</v-col>

    <v-col
			lg="3"
			md="5"
			sm="6"
			cols="12"
			offset-sm="0"
			offset-md="1"
			offset-lg="0"
		>
			<div class="flex-column" v-for="(card, index) in cards3" :key="index">
				<card
					:name="card.name"
          :detail="card.detail"
          :picsrc="card.picsrc"
          :price="card.price"
				></card>
			</div>
		</v-col>

		
	</v-row>
</template>

<script>
import card from "@/components/itemCard.vue"
export default {
  components:{
    card
  },
  props:{
    
  },
  data() {
		return {
      cardsData:[
        {name:"荣耀Play4T",price:1288,detail:"全网通6GB+128GB大内存 幻夜黑 4000mAh大电池 4800万AI摄影 6.39英寸魅眼屏",picsrc:"https://img10.360buyimg.com/n1/s450x450_jfs/t1/116226/28/463/178123/5e8c4a42E1a74e70b/f203745e20ed06ec.jpg",tag:1},
        {name:"小米10青春版",price:2199,detail:"双模5G 骁龙765G 50倍潜望式变焦四摄 8GB+128GB 白桃乌龙 游戏手机",picsrc:"https://img11.360buyimg.com/cms/jfs/t1/93100/2/12107/87972/5e44f0daE62e6d845/086cb7e77a8fce5c.jpg",tag:1},
        {name:"小米10至尊纪念版",price:5599,detail:"双模5G 骁龙865 120HZ高刷新率 120倍长焦镜头 120W快充 8GB+256GB 陶瓷黑 游戏手机",picsrc:"https://img11.360buyimg.com/cms/jfs/t1/91053/11/12219/89474/5e44efa1E74760ec3/5c420e086c42397f.jpg",tag:1},
        {name:"iPhone 11",price:4799,detail:"黑色 移动联通电信4G手机 双卡双待",picsrc:"https://img14.360buyimg.com/cms/jfs/t1/107720/35/12444/176730/5e975bd6E1bd6f2e9/1dfea37d05e337ee.png",tag:1},
        
      ],
			cards1: [],
			cards2: [],
			cards3: [],
			screenWidth: window.innerWidth,
			postCount: 20,
      loadFlag: false,
		};
	},
	methods: {
		//将数据均匀地分到3列
		shunt3() {
			this.cards1 = [];
			this.cards2 = [];
			this.cards3 = [];
			if (this.cardsData == undefined) {
				return;
			}
			var len = this.cardsData.length;
			for (let index = 0; index < len / 3; index++) {
				this.cards1.push(this.cardsData[index * 3]);
				if (index * 3 + 1 < len) {
					this.cards2.push(this.cardsData[index * 3 + 1]);
					if (index * 3 + 2 < len) {
						this.cards3.push(this.cardsData[index * 3 + 2]);
					} else {
						break;
					}
				} else {
					break;
				}
			}
		},
		//将数据均匀地分到2列
		shunt2() {
			this.cards1 = [];
			this.cards2 = [];
			this.cards3 = [];
			var count2 = 0;
			this.cardsData.forEach((element) => {
				if (count2 % 2 == 0) {
					this.cards1.push(element);
					count2++;
				} else {
					this.cards2.push(element);
					count2++;
				}
			});
			//this.$store.commit("closeDrawer");
		},
		//只分到一列
		shunt1() {
			this.cards2 = [];
			this.cards3 = [];
			this.cards1 = this.cardsData;
			//this.$store.commit("closeDrawer");
		},
  },
  
	mounted() {
		const that = this;
		window.onresize = () => {
			return (() => {
				window.screenWidth = document.body.clientWidth;
				that.screenWidth = window.screenWidth;
			})();
    };
    this.shunt3()
	},

	watch: {
		cardsData: function () {
			if (this.screenWidth >= 1264) {
				this.shunt3();
				return;
			}
			if (this.screenWidth <= 600) {
				this.shunt1();
				return;
			} else {
				this.shunt2();
			}
		},
		screenWidth: function () {
			if (this.screenWidth >= 1264) {
				this.shunt3();
				return;
			}
			if (this.screenWidth <= 600) {
				this.shunt1();
				return;
			} else {
				this.shunt2();
			}
		},

		
	
}
}
</script>

<style>
.overy {
	overflow-y: hidden;
  padding-left: 2rem;
  margin-top: 3.5rem;
}
</style>