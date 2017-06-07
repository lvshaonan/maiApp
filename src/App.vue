<template>
  <div id="app">
    <div class="releaseMark" v-show="releaseMarkShow" @click="releaseMarkHide">
      <i class="release"></i>
      <div class="classify">
        <div class="classify-item">
          <transition-group name="fadea">
            <i v-show="releaseMarkShow" :key="1"></i>
            <p v-show="releaseMarkShow" :key="2">资源单</p>
          </transition-group>
        </div>
        <div class="classify-item">
          <transition-group name="fadea">
            <i v-show="releaseMarkShow" :key="3"></i>
            <p v-show="releaseMarkShow" :key="4">采购单</p>
          </transition-group>
        </div>
        <div class="classify-item">
          <transition-group name="fadea">
            <i v-show="releaseMarkShow" :key="5"></i>
            <p v-show="releaseMarkShow" :key="6">动态</p>
          </transition-group>
        </div>
      </div>
    </div>
    <div class="tab-view">
        <router-view class=""></router-view>
    </div>
    <footer>
      <ul class="tab">
        <li>
          <router-link to="/home">首页</router-link>
        </li>
        <li>
          <router-link to="/social">圈子</router-link>
        </li>
        <li>
          发布
          <i class="release" @click="release"></i>
        </li>
        <li>
          <router-link to="/message">消息</router-link>
        </li>
        <li>
          <router-link to="/mine">我的</router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      releaseMarkShow: false,
      isShow: false
    }
  },
  // watch: {
  //   $route(to, from){
  //     if(to.path == '/category'){
  //       this.footerShow = false
  //     }else{
  //       this.footerShow = true
  //     }
  //   }
  // },
  methods: {
    release() {
      this.releaseMarkShow = true
    },
    releaseMarkHide() {
      this.releaseMarkShow = false
    }
  },
  components: {
    
  }
}
</script>

<style lang="scss" scoped>
  .fadea-leave-active, .fadea-enter-active{
    transition: all 0.1s ease;
  }   
  .fadea-leave-active{
    transform: translateY(260px);
  } 
  .fadea-enter-active{
    transform: translateY(0);
  }
  .fadea-enter{
    transform: translateY(100%);
  }
  #app{
    height: 100%;
    display: flex;
    flex-direction: column;
    .releaseMark{
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: 1000;
      background: rgba(204,204,204,0.6);
      /*opacity: 0.6*/
      .release{
        position: absolute;
        display: block;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: #f66;
        left: 50%;
        bottom: 28px;
        margin-left: -18px;
        z-index: 1001;
      }
      .classify{
        height: 300px;
        position: absolute;
        bottom: 50px;
        width: 100%;
        display: flex;
        .classify-item{
          flex: 1;
          height: 100%;
          text-align: center;
          i{
            display: inline-block;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background-color: #f00;
          }
          p{
            margin-top: 22px;
          }
        }
      }
    }
    .tab-view{
      flex: 1;
    }
    footer{
      height: 44px;
      border-top: 1px solid #ccc;
      box-sizing: border-box;
      position: relative;
      .tab{
        display: flex;
        height: 100%;
        li{
            flex: 1;
            text-align: center;
            line-height: 44px;
            position: relative;
            .router-link-active{
              color: #f00;
              font-weight: bold;
            }
            .release{
              position: absolute;
              display: block;
              width: 36px;
              height: 36px;
              border-radius: 50%;
              background-color: #A6E22E;
              left: 50%;
              top: -50%;
              margin-left: -18px;
            }
        }
      }
    }
  }
</style>
