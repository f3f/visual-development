<template>
  <div>
    <!-- 上左 -->
    <part
      :part="{id:'test1', className:'test', style: {  width: '520px',  height: '290px',left: '20px',top: '20px'}}"
      initType="LineChart"
    >
      <LineChart />
    </part>
    <!-- 上中 -->
    <part
      :part="{id:'test2',className:'test',style:{width: '520px',  height: '290px',left: '560px',top: '20px'}}"
      initType="transverseSingleBar"
    >
      <transverseSingleBar />
    </part>
    <!-- 上右 -->
    <part
      :part="{id:'test3', className:'test',style:{width: '520px',  height: '290px',left: '1100px',top: '20px'}}"
      initType="barDoubleChart"
    >
      <barDoubleChart />
    </part>
    <!-- 下左 -->
    <part
      :part="{ id:'test4',className:'test',style:{width: '520px',  height: '290px',left: '20px',top: '330px'}}"
      initType="pictorialBar"
    >
      <pictorialBar />
    </part>
    <!-- 下中 -->
    <part
      :part="{id:'test5', className:'test',style:{width: '520px',  height: '290px',left: '560px',top: '330px'}}"
      initType="plusMinusLineChart"
    >
      <plusMinusLineChart />
    </part>
    <!-- 下右 -->
    <part
      :part="{id:'test6', className:'test',style:{width: '520px',  height: '290px',left: '1100px',top: '330px'}}"
      initType="plusLineChart"
    >
      <plusLineChart />
    </part>
  </div>
</template>
<script>
// 动画demo
// 1、注册动画标识状态
// 2、更新动画标识状态
// 3、在需要进行动画的地方进行监听
import transverseSingleBar from '@/components/charts/transverseSingleBar'
import LineChart from '@/components/charts/LineChart'
import barDoubleChart from '@/components/charts/barDoubleChart'
import pictorialBar from '@/components/charts/pictorialBar'
import plusMinusLineChart from '@/components/charts/plusMinusLineChart'
import plusLineChart from '@/components/charts/plusLineChart'
import { state } from '@/assets/js/app'
// 动画库插件引入
import { TimelineMax, Back, TweenMax } from 'gsap'
export default {
  data() {
    return {
      tl: new TimelineMax()
    }
  },
  watch: {
    $route: {
      handler: function(to, from) {
        // console.log(to, from)
      },
      immediate: true
    }
  },
  appConfig: { animate: true, isMock:true }, //isMock修改无效
  created() {
    // 注册状态
    state.regist('initType')
  },
  mounted() {
    this.$nextTick(() => {
      this.appConfig.animate && this.animateIn()
    })
  },
  components: {
    LineChart,
    barDoubleChart,
    pictorialBar,
    transverseSingleBar,
    plusMinusLineChart,
    plusLineChart
  },
  beforeRouteLeave(to, from, next) {
    if (!this.appConfig.animate) {
      next()
    } else {
      this.animateOut()
      setTimeout(function() {
        next()
      }, 1800)
    }
  },
  methods: {
    animateIn() {
      let me = this
      this.tl.staggerFrom(
        ['#test1', '#test4', '#test2', '#test5', '#test3', '#test6'],
        0.8,
        {
          opacity: 0,
          handle: 1,
          cycle: {
            y: [-150, 150]
          },
          // ease: Back.easeOut,
          onComplete: me.complete,
          onCompleteParams: ['{self}']
        },
        0.15
      )
    },
    complete(v) {
      let initType = v.target[0].getAttribute('initType')
      // 更新状态
      state.updateState('initType', initType)
    },
    animateOut() {
      this.tl.reverse()
    }
  }
}
</script>
 <style lang="scss" scoped>
</style>

