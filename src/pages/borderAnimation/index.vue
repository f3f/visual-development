<template>
  <div>
    <bacPart
      :borderPositon="{left:'20px',top:'20px'}"
      :borderStyle="{
        cornerH: '10px',
        cornerW: '10px',
        cornerColor: 'rgba(4, 35, 41, 0.35)',
        borerColor: '#029dbb',
        contentBg: 'rgba(4, 35, 41, 0.35)',
        borerShadow: '0 0 4px rgba(2, 157, 187, 0.65)',
        cornerShadow: '0 0 4px -5px rgba(38, 218, 253, 0.65)'
      }"
      @bacMounted='drawPie(0)'
      @bacCreate='drawStart'
      :duration=".25"
    >
      <pie></pie>
    </bacPart>
    <bacPart
      :borderPositon="{left:'560px',top:'20px'}"
      @bacMounted='drawPie(1)'
      :duration=".35"
    >
      <pie></pie>
    </bacPart>
    <bacPart
      :borderPositon="{left:'1100px',top:'20px'}"
      @bacMounted='drawPie(2)'
      :duration=".55"
    >
      <pie></pie>
    </bacPart>
    <bacPart
      :borderPositon="{left:'20px',top:'330px'}"
      @bacMounted='drawPie(3)'
      :duration=".55"
    >
      <pie></pie>
    </bacPart>
    <bacPart
      :borderPositon="{left:'560px',top:'330px'}"
      @bacMounted='drawPie(4)'
      :duration=".55"
    >
      <pie></pie>
    </bacPart>
    <bacPart
      :borderPositon="{left:'1100px',top:'330px'}"
      @bacMounted='drawPie(5)'
      :duration=".55"
    >
      <pie></pie>
    </bacPart>
  </div>
</template>
<script>
import bacPart from '@/components/vueComp/bacPart'
import pie from '@/components/charts/pie'
import bar from '@/components/charts/bar'
import jianxi from '@/components/charts/jianxiMap'
import transverseSingleBar from '@/components/charts/transverseSingleBar'
import LineChart from '@/components/charts/LineChart'
import pictorialBar from '@/components/charts/pictorialBar'
export default {
  data() {
    return {}
  },
  mounted() {},
  appConfig: {
    animate: true
  },
  methods: {
    drawStart() {},
    drawPie(idx) {
      let pies = this.$getComponent('pie')
      pies[idx].initChart()
    }
  },
  components: {
    pie,
    bacPart
  }
}
</script>
 <style lang="scss" scoped>
.border {
  float: left;
  margin: 20px;
  width: 520px;
  height: 290px;
}
</style>

