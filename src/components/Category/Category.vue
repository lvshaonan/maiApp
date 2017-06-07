<template>
	<transition name="fade" ref="category" >
		<div class="category-view" v-show="showFlag">
			<header>
				<div class="category" @click="hide">
					返回
				</div>
				<div class="title-search">
					类目
				</div>
				<div class="notice">
					。。。
				</div>
			</header>
			<h3>我是类目</h3>
		</div>
	</transition>
</template>
<script>
	export default {
		data() {
			return {
				showFlag: false
			}
		},
		methods: {
			show() {
				this.showFlag = true;
			},
			hide() {
				this.showFlag = false;
			}
		}
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
	.category-view{
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
			.category, .notice{
				width: 44px;
			}
			.title-search{
				flex: 1;
			}
		}
	}
</style>