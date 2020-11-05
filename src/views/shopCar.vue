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
          incar=true
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
          incar=true
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
          incar=true
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
			cards1: [],
			cards2: [],
			cards3: [],
			//cardsData存储展示的数据，不是全部数据
			cardsData:[],
			screenWidth: window.innerWidth,
			postCount: 20,
      loadFlag: false,
		};
	},

	computed:{
		cards(){
			return this.$store.state.car
		},
		cTag(){
			return this.$store.state.currentTag
		}
	},

	methods: {
		//筛选功能2
		tagFilter2(){
			this.cardsData=[]
			if (this.cTag=="全部商品") {
				this.cardsData=this.cards
				return
			}
			for (let index = 0; index < this.cards.length; index++) {
				var element = this.cards[index];
				if (element.tag==this.cTag) {
					this.cardsData.push(element)
				}
			}
		},

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
		this.cardsData=this.$store.state.car
		this.shunt3()
	},

	watch: {
		//筛选功能
		cTag(){
			this.tagFilter2()
		},

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