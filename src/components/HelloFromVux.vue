<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1>Vux</h1>
    </div>
    <!-- 下边是vux的UI组件 -->
    <group title="cell">
      <cell title="VUX" value="liusu" is-link></cell>
    </group>
    <p>{{msg}}</p>
    <loading v-model="isLoading"></loading>
    <!--  native可以让根组件监听原生的事件 -->
    <x-button type="primary" @click.native="clickMe">显示/隐藏</x-button>
    <router-link to="/form">form的Demo链接</router-link>
  </div>
</template>

<script>
// 引入vux的组件group和cell
import { Alert, Group, Cell, Loading,XButton } from 'vux'

export default {
  components: {
    Alert,
    Group,
    Cell,
    Loading,
    XButton
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      isLoading: false
    }
  },
  methods: {
    clickMe() {
      this.isLoading = !this.isLoading;
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
