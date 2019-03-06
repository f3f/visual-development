<template>
  <!-- 每个part组件传入part属性进行页面布局 写明页面位置 方便修改及调整 -->
  <div>
    <grid-layout
      :layout.sync="layout"
      :col-num="10"
      :row-height="100"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="item in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        @resized="resizedEvent"
      >
       
       <div :is='item.type' />
      </grid-item>
    </grid-layout>

 <!-- <pictorialBar />barDoubleChart
        <plusMinusLineChart />
        <plusLineChart /> -->
    <div>
      <!-- 操作部分 -->
      <part
        :part="{style:{top:'-60px',left:'600px',background:'none',width:'420px',height:'60px',zIndex:99999,paddingLeft:'5px'}}"
      >
        <button @click="addPart()">添加模块</button>
        <!-- <button @click="changeLayout(2)">布局二</button>
        <button @click="changeLayout(3)">布局三</button>-->
      </part>
    </div>
  </div>
</template>
<script>
import VueGridLayout from "vue-grid-layout";
import transverseSingleBar from '@/components/charts/transverseSingleBar'
import LineChart from '@/components/charts/LineChart'
import barDoubleChart from '@/components/charts/barDoubleChart'
import pictorialBar from '@/components/charts/pictorialBar'
import pie from '@/components/charts/pie'

import plusMinusLineChart from '@/components/charts/plusMinusLineChart'
import plusLineChart from '@/components/charts/plusLineChart'
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      layout: [{ x: 0, y: 0, w: 2, h: 2, i: 0 ,type:'pictorialBar'},
      { x: 0, y: 0, w: 2, h: 2, i: 1 ,type:'pie'}]
    };
  },
  methods: {
    // 布局一
    addPart() {
      this.layout.push({ x: 0, y: 0, w: 2, h: 2, i: this.layout.length });
    },
    resizedEvent(i){
      let type=['pictorialBar','pie'][i]
      this.$parts = this.$getComponent(type)[0];
      setTimeout(()=>{
       this.$parts.resize();
       },100)
       console.log('resize...')
    }
  },
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
   
    LineChart,
    barDoubleChart,
    pictorialBar,
    transverseSingleBar,
    plusMinusLineChart,
    plusLineChart,
    pie
  
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      // 获取组件
      console.log('mounted..')
     this.$parts = this.$getComponent("pictorialBar");
      this.$parts[0].initChart();
      let chart1=this.$parts[0]
      setTimeout(()=>{chart1.resize()},300)

      this.$parts = this.$getComponent("pie");
      this.$parts[0].initChart();
      let chart2=this.$parts[0]
      setTimeout(()=>{chart2.resize()},300)

      
    });
  }
};
</script>
<style>
.vue-grid-item{
  border:1px solid rgb(102, 201, 214);
  background:rgba(12, 120, 124, 0.335);
}

</style>
 <style lang="scss" scoped>
p {
  text-align: center;
}

.test-trans {
  transition: all 0.5s ease-in;
}
button {
  background: none;
  outline: none;
  border: 0 none;
  color: #fff;
  height: 60px;
  width: 80px;
  line-height: 60px;
  border-left: 1px solid #333;
  border-right: 1px solid #333;
    left: 0;
    right: 0;
    margin: auto;
}
button:hover {
  background: rgba(255, 255, 255, 0.1);
}

</style>

