<template>
 <div>
  <x-header>乘机人信息2</x-header>
  <!-- 输入框的样式 -->
  <group>
   <x-input title="联系人：" v-model="username" placeholder="请输入联系人姓名" text-align="right"></x-input>
  </group>
  <!-- 单选框选择，对号选择 ；返回的是options的key值-->
  <group title="怎么称呼您：">
   <radio v-bind:options="[{key:0,value:'先生'},{key:1,value:'女士'}]" @on-change="chooseSex"></radio>
  </group>
  <!-- 选择日期的样式 v-model绑定的是显示的默认的时间-->
  <group>
   <datetime v-model="birthday" title="生日" :start-date="birthdaystart" :end-date="birthdayend"></datetime>
  </group>
  <!-- 日期选择的空间 -->
  <group>
   <calendar v-model="startdate" title="出发日期" :weeks-list="weekList"></calendar>
  </group>
  <!-- 数字选择样式，min和max是范围规定； 返回的是数字-->
  <group>
   <x-number title="乘机人数量" v-model="num" :min="0" :max="5" @on-change="chooseNum" width="100px"></x-number>
  </group>
  <!-- 选择按钮；是或否样式像是开关样式；返回true和false -->
  <group>
   <x-switch title="婚否" prevent-default v-model="marriage" @on-click="chooseMarriage"></x-switch>
  </group>


  <!-- 下边弹窗的样式；返回的是你绑定的数据的选择的值 -->
  <group>
   <actionsheet v-model="isShow" v-bind:menus="['经济舱','商务舱','尊享特等舱']" @on-click-menu="chooseCabin"></actionsheet>
  </group>
  <!-- 选择框的样式 ；is-link是一个 > 图标-->
  <group>
   <cell title="请选择舱位" v-model="cabin" v-on:click.native="showCabin" text-align="right" is-link></cell>
  </group>


  <!-- 多选的样式列表 -->
  <group>
   <checklist title="请选择餐食或饮料（可多选）" v-bind:options="[{key: 'food0', value: '牛肉饭'}, {key: 'food1', value: '酸奶'}, {key: 'food2', value: '果汁'}]" v-model="food" @on-change="chooseFood"></checklist>
  </group>



  <!-- 输入框的样式 -->
  <group>
   <x-textarea title="详细家庭住址" v-model="address"></x-textarea>
  </group>
  <!-- 提交按钮的样式 -->
  <group>
   <x-button type="primary" v-on:click.native="sub">提交</x-button>

  </group>
 </div>
</template>
<script>
import {XHeader, Group, Cell, XInput,XButton, Selector, Datetime, Calendar, XNumber, XTextarea, XSwitch, Actionsheet, Radio, Checklist} from 'vux'
export default {
  components: {
    XHeader,
    Group,
    Cell,
    XInput,
    Radio,
    XNumber,
    XSwitch,
    Actionsheet,
    Checklist,
    XTextarea,
    XButton,
    Datetime,
    Calendar
 },
 name: 'Myform',

 data () {
// 不得不说，js的日期转换真是个大bug~~
// 大家可以用moment插件解决，这里暂时不引入了
  let now = new Date();
  let cmonth = now.getMonth() + 1;
  let day = now.getDate();
  if (cmonth < 10) cmonth = '0' + cmonth;
  if (day < 10) day = '0' + day;
  var today = now.getFullYear() + '-' + cmonth + '-' + day;
  // 返回的各个参数
  return {
   username: '',
   sex: 0,
   num: 0,
   // 设置的是否结婚的默认值
   marriage: false,
   // 控制选座的弹窗
   isShow: false,
   // 控制显示
   showModal:true,
   // 座位
   cabin: '',
   food: [], // 因为是可以多选的，所以传空数组
   address: '',
   birthday: '1993-09-13',
   birthdaystart: '1800-01-01', // 或许神仙也会坐飞机
   birthdayend: today,
   startdate: today,
   weekList: ['周日', '周日', '周二', '周三', '周四', '周五', '周六']

  }
 },
 methods: {
  showFood() {
    this.foodShow = !this.foodShow;
  },
  // 选择性别
  chooseSex(value) {
   this.sex = value;
   console.log(this.sex);// radio的值—0 和 1
  },
  // 选乘机人数
  chooseNum(value) {
   this.num = value;
   console.log(this.num);
  },
  // 是否结婚
  chooseMarriage(newVal,oldVal) {
   this.marriage = newVal;
   console.log(this.marriage);
  },
  chooseCabin(key,item) {
    // 数组的索引和值
   console.log(key);
   console.log(item);
   this.cabin = item;
  },
  showCabin() {
   this.isShow = !this.isShow;
  },
  chooseFood(value) {
   console.log(value);
  },



  alert() {
    this.alert(1111);
  },




  sub() {
   let that = this;
   console.log('姓名:', this.username);
   console.log('性别:', this.sex);
   console.log('乘机人数量:', this.num);
   console.log('婚否:', this.marriage);
   console.log('舱位:', this.cabin);
   console.log('餐食:', this.food);
   console.log('地址:', this.address);
   console.log('生日:', this.birthday);
   console.log('出发日期:', this.startdate);
   if (!this.username) {
    // 提示姓名不可为空
    // 这里的alert在vux2中需要引入相应的组件，在main.js中全局引入比较好；
    this.$vux.alert.show({
     title: '温馨提示',
     content: '联系人姓名不可为空'
    });
    return false;
   } else if (!this.address) {
     this.$vux.toast.text('请填写家庭住址', 'middle');
     return false;

   } else {
// 确定提交信息？
    this.$vux.confirm.show({
     title: '温馨提示您',
     content: '确定提交所有信息？',
     onCancel () {
      console.log('cancel');
      return false;
     },
     onConfirm () {
      console.log('confirm');
      console.log(that.$http);
      that.$http.get('/static/check.json').then((res) => {
        console.log(res.data);
        if(res.data.status === 'ok') {
        that.$router.push({ path: '/' }) // 验证完成后跳转到首页
       }

     });
    }
  })

  }
 }
 }
 
}
</script>
<style>

</style>
