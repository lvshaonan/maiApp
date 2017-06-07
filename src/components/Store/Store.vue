<template>
	<transition name="fade" ref="store" >
		<div class="store-view" v-show="showFlag">
			<header>
				<div class="back-btn" @click="hide">
					返回
				</div>
			</header>
			<div class="banner">
				<img :src="storeData.banner">
			</div>
		</div>
	</transition>
</template>
<script>
	export default {
		data() {
			return {
				showFlag: false,
				banner: ''
			}
		},
		methods: {
			show() {
				this.showFlag = true;
			},
			hide() {
				this.showFlag = false;
			}
		},
		props: ['storeData']
	}
</script>
<style lang="scss" scoped>
	.fade-leave-active, .fade-enter-active{   
	    transition: all 0.1s ease;
	}
	.fade-leave-active {
	    transform: translateX(100%);
	}
	.fade-enter-active{
		transform: translateX(0);
	}
	.fade-enter{
		transform: translateX(100%);
	}
	.store-view{
		position: fixed;
		top: 0;
		width: 100%;
		bottom: 0;
		z-index: 1000;
		background-color: #fff;
		header{
			font-size: 10px;
			display: flex;
			height: 38px;
			background: #ccc;
			line-height: 38px;
			text-align: center;
			.back-btn{
				width: 44px;
			}
		}
		.banner{
			img{
				width: 100%;
			}
		}
	}
</style>