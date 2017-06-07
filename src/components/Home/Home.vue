<template>
	<div class="home">
		<v-category ref="category"></v-category>
		<v-store ref="store" :store-data="storeDetail"></v-store>
		<header :class="{background: color}">
			<div class="category" @click="openCategory">
				类目
			</div>
			<div class="title-search">
				Mai沥青
			</div>
			<div class="notice">
				通知
			</div>
		</header>
		<div class="home-view">
			<div class="scrollBox" ref="scroll">
				<div>
					<div class="swipeView">
						<swipe class="" :auto="3000" :show-indicators="true">
							<swipe-item v-for="(item, index) in banner" :key="index">
								<img :src="item" class="swipe-img" @click="toStoreDetail(index)">
							</swipe-item>
					    </swipe>
					    <div class="search-box">
					        	
				        </div>
					</div>
					<nav>
						<ul>
							<li>现货市场</li>
							<li>资源单</li>
							<li>采购单</li>
							<li>物流</li>
						</ul>
					</nav>
					<div class="content-wrapper">
						<div class="goods-scroll" ref="goodsScroll">
							<ul ref="goodsContainer">
								<li ref="goodsItem" v-for="item in goodsItem">{{item}}</li>
							</ul>
						</div>
					</div>
					<div class="dynamic-wrapper">
						<div class="dynamic-item" v-for="(item, index) in items" @click="toDynamicDetail(index)">
							<div class="dynamic-title">
								<div class="portrait" @click.stop="toUser"></div>
								<div class="nickname">
									<p>啊啊啊啊{{item.title}}</p>
									<span>2017-03-24 10:10:10</span>
								</div>
							</div>
							<div class="dynamic-img" ref="dynamicImg" v-show="true">
								<ul ref="dynamicImgContainer">
									<li class="dynamicImgItem" v-for="img in item.images">
										<img :src="img" alt="">
									</li>
								</ul>
							</div>
							<div class="dynamic-txt">
								<p>包裹实例，而不是销毁它们。和相似 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。</p>
							</div>
						</div>
						<div class="touch-more" @click="toSocial">
							查看更多
						</div>
					</div>
			    </div>
		    </div>
		</div>
	</div>
</template>
<script>
	import Category from '../Category/Category.vue'
	import Store from '../Store/Store.vue'
	import { Swipe, SwipeItem } from 'vue-swipe'
	import BScroll from 'better-scroll'
	export default {
		data() {
			return {
				color: false,
				items: [
					{
						title: 'aa',
						images: [
							"http://app.mailiqing.com/koto/img/58d0c1d1e4b01e6f9f34144e.img_750_750_1.img",
							"http://app.mailiqing.com/koto/img/58d0c1d1e4b01e6f9f34144e.img_750_750_1.img",
							"http://app.mailiqing.com/koto/img/58d0c1d1e4b01e6f9f34144e.img_750_750_1.img"
						]
					},
					{
						title: 'bb',
						images: [
							"http://app.mailiqing.com/koto/img/58d0c1d1e4b01e6f9f34144e.img_750_750_1.img",
							"http://app.mailiqing.com/koto/img/58d0c1d1e4b01e6f9f34144e.img_750_750_1.img",
							"http://app.mailiqing.com/koto/img/58d0c1d1e4b01e6f9f34144e.img_750_750_1.img",
							"http://app.mailiqing.com/koto/img/58d0c1d1e4b01e6f9f34144e.img_750_750_1.img",
							"http://app.mailiqing.com/koto/img/58d0c1d1e4b01e6f9f34144e.img_750_750_1.img",
							"http://app.mailiqing.com/koto/img/58d0c1d1e4b01e6f9f34144e.img_750_750_1.img",
							"http://app.mailiqing.com/koto/img/58d0c1d1e4b01e6f9f34144e.img_750_750_1.img",
							"http://app.mailiqing.com/koto/img/58d0c1d1e4b01e6f9f34144e.img_750_750_1.img",
							"http://app.mailiqing.com/koto/img/58d0c1d1e4b01e6f9f34144e.img_750_750_1.img"
						]
					},
					{
						title: 'cc',
						images: [
							"http://app.mailiqing.com/koto/img/58d0c1d1e4b01e6f9f34144e.img_750_750_1.img",
							"http://app.mailiqing.com/koto/img/58d0c1d1e4b01e6f9f34144e.img_750_750_1.img"
						]
					},
					{
						title: 'dd',
						images: [
							"http://app.mailiqing.com/koto/img/58d0c1d1e4b01e6f9f34144e.img_750_750_1.img",
							"http://app.mailiqing.com/koto/img/58d0c1d1e4b01e6f9f34144e.img_750_750_1.img",
							"http://app.mailiqing.com/koto/img/58d0c1d1e4b01e6f9f34144e.img_750_750_1.img"
						]
					},
					{
						title: 'ee',
						images: [
							"http://app.mailiqing.com/koto/img/58d0c1d1e4b01e6f9f34144e.img_750_750_1.img",
							"http://app.mailiqing.com/koto/img/58d0c1d1e4b01e6f9f34144e.img_750_750_1.img",
							"http://app.mailiqing.com/koto/img/58d0c1d1e4b01e6f9f34144e.img_750_750_1.img",
							"http://app.mailiqing.com/koto/img/58d0c1d1e4b01e6f9f34144e.img_750_750_1.img",
							"http://app.mailiqing.com/koto/img/58d0c1d1e4b01e6f9f34144e.img_750_750_1.img",
							"http://app.mailiqing.com/koto/img/58d0c1d1e4b01e6f9f34144e.img_750_750_1.img"
						]
					},
					{
						title: 'ff',
						images: [
							"http://app.mailiqing.com/koto/img/58d0c1d1e4b01e6f9f34144e.img_750_750_1.img",
							"http://app.mailiqing.com/koto/img/58d0c1d1e4b01e6f9f34144e.img_750_750_1.img",
							"http://app.mailiqing.com/koto/img/58d0c1d1e4b01e6f9f34144e.img_750_750_1.img",
							"http://app.mailiqing.com/koto/img/58d0c1d1e4b01e6f9f34144e.img_750_750_1.img"
						]
					}
				],
				goodsItem: ['aa','bb','cc','dd','ee','ff'],
				banner: [
					'http://weblv.applinzi.com/MaiApp/images/banner1.jpg',
					'http://weblv.applinzi.com/MaiApp/images/banner2.jpg',
					'http://weblv.applinzi.com/MaiApp/images/banner3.jpg'
				],
				storeData: [
					{
						banner: 'http://weblv.applinzi.com/MaiApp/images/banner1.jpg'
					},
					{
						banner: 'http://weblv.applinzi.com/MaiApp/images/banner2.jpg'
					},
					{
						banner: 'http://weblv.applinzi.com/MaiApp/images/banner3.jpg'
					}
				],
				storeDetail: ''
			}
		},
		methods: {
			openCategory() {
				this.$refs.category.show()
			},
			_initScroll() {
				this.myScroll = new BScroll(this.$refs.scroll, {
					probeType: 3,
					click: true
				});
				this.goodScroll = new BScroll(this.$refs.goodsScroll, {
					probeType: 3,
					scrollX: true,
					bounce: false
				});
				let that = this;
				this.$refs.dynamicImg.forEach((val, i, array) => {
					let tit = 'imgScroll'+ i;
					that.tit = new BScroll(that.$refs.dynamicImg[i], {
						probeType: 3,
						scrollX: true,
						bounce: false
					});
				});
				this.myScroll.on('scroll',(pos) => {
					if(pos.y < -90){
						this.color = true
					}else{
						this.color = false
					}
				});
			},
			toSocial() {
				this.$router.push({path:'/social'});
			},
			toStoreDetail(i) {
				this.$refs.store.show();
				this.storeDetail = this.storeData[i];
			},
			toDynamicDetail(i) {
				alert(i);
			},
			toUser() {
				
			}
		},
		components: {
			'v-category': Category,
			'swipe': Swipe,
    		'swipe-item': SwipeItem,
    		'v-store': Store
		},
		mounted() {
			this.$nextTick(() => {
	            let goodsContainerWidth = 0;
	            let offsetLeft = this.$refs.goodsItem[0].offsetLeft;
	            this.$refs.goodsItem.forEach((val, i, arr) => {
	            	goodsContainerWidth += val.clientWidth + offsetLeft*2;
	            });
	            this.$refs.goodsContainer.style.width = goodsContainerWidth + 'px';

	            let dynamicImgItemWidth = this.$refs.dynamicImgContainer[0].getElementsByClassName('dynamicImgItem')[0].clientWidth + 3;
	            this.$refs.dynamicImgContainer.forEach((val, i, arr) => {
	            	val.style.width = val.getElementsByClassName('dynamicImgItem').length * dynamicImgItemWidth + 'px';
	            });
	            this._initScroll();
            });
		}
	}
</script>
<style lang="scss" scoped>
	@import "../../assets/styles/scss/vue-swipe.css";
	.home{
		height: 100%;
		position: relative;
		header{
			position: absolute;
			top: 0;
			left: 0;
			color: #fff;
			z-index: 100;
			font-size: 10px;
			display: flex;
			width: 100%;
			height: 38px;
			line-height: 38px;
			text-align: center;
			.category, .notice{
				width: 44px;
			}
			.title-search{
				flex: 1;
			}
		}
		.background{
			background-color: #E6DB74;
		}
		.home-view{
			background-color: #fff;
			height: 100%;
			overflow: hidden;
			position: relative;
			.scrollBox{
				position: absolute;
				top: 0;
				bottom: 0;
				width: 100%;
				.swipeView{
					height: 180px;
					position: relative;
					overflow: hidden;
					.swipe-img{
						width: 100%;
					}
					.mint-swipe-indicators{
						bottom: 30px;
					}
					.search-box{
						position: absolute;
						height: 30px;
						width: 100%;
						bottom: 0;
						background: rgba(102,102,102,0.6);
						z-index: 1001;
					}
				}
				nav ul{
					display: flex;
					height: 50px;
					li{
						flex: 1;
						height: 100%;
						text-align: center;
						line-height: 50px;
						font-size: 12px;
					}
				}
				.content-wrapper{
					background-color: #dfdfdf;
					.goods-scroll{
						height: 110px;
						ul{
							height: 100%;
							li{
								float: left;
								height: 100px;
								margin: 4px;
								width: 120px;
								border-radius: 4px;
								background-color: #fff;
							}
						}
					}
				}
				.dynamic-wrapper{
					background-color: #dfdfdf;
					.dynamic-item{
						box-shadow: 0 0 3px #666;
						font-size: 12px;
						margin:0 auto 8px;
						width: 350px;
						padding: 5px 8px;
						background-color: #fff;
						border-radius: 3px;
					}
					.dynamic-title{
						height: 36px;
						.portrait{
							display: inline-block;
							width: 36px;
							height: 36px;
							border-radius: 50%;
							background-color: #f66;
						}
						.nickname{
							display: inline-block;
							vertical-align: top;
							margin-left: 5px;
							p{
								margin: 3px 0 7px;
							}
						}
					}
					.dynamic-img{
						margin: 5px 0 8px;
						height: 86px;
						overflow: hidden;
						ul{
							height: 100%;
							li{
								float: left;
								width: 86px;
								height: 86px;
								margin-right: 3px;
								img{
									width: 100%;
								}
							}
						}
					}
					.dynamic-txt{
						line-height: 14px;
						p{
							max-height: 42px;
							overflow: hidden;
							text-overflow: ellipsis;
						}
					}
					.touch-more{
						height: 18px;
						line-height: 18px;
						padding-bottom: 8px;
						text-align: center;
					}
				}
			}
		}
	}						
																
</style>