<template>
  <div
    class="chart-wrapper"
    ref="chart"
  ></div>
</template>
<script>
import {state} from '../../assets/js/app'
export default {
  name: 'pie',
  props: {
    echartsData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      value1: 18,
      value2: 34
    }
  },
  watch: {
    echartsData: {
      handler: function(val, oldVal) {
        this.initChart()
      },
      deep: true //增加deep 观察对象的子对象变化
    },
    areaName: {
      handler: function(newV, oldV) {
        // 监听状态更新 进行视图的更新
          this.changeValue()
          this.initChart()
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      let me = this
      this.myChart = this.$echarts.init(this.$refs.chart)
      !this.appConfig.animate && this.initChart()
    })
  },
  methods: {
    initChart() {
      let me = this
      let option = {
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                formatter: '{b}\n\n占比：{d}%\n\n数量： {c}',
                textStyle: {
                  fontSize: '14'
                }
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontWeight: 'bold',
                  fontSize: '14'
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 10,
                length2: 20
              }
            },
            itemStyle: {
              normal: {
                borderWidth: 5,
                borderType: 'solid',
                shadowBlur: 20
              }
            },
            data: [
              {
                value: me.value1,
                name: '负面舆论',
                label: {
                  normal: {
                    textStyle: {
                      color: '#ff9300'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    lineStyle: {
                      color: '#ff9300'
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: new me.$echarts.graphic.LinearGradient(0, 0, 0, 0, [
                      {
                        offset: 0,
                        color: 'rgba(255,200,30, .1)'
                      },
                      {
                        offset: 1,
                        color: 'rgba(255,200,30, .5)'
                      }
                    ]),
                    borderColor: '#ff9300',
                    shadowColor: 'rgba(255,147,0, 0.9)',
                    shadowBlur: 30
                  }
                }
              },

              {
                value: me.value2,
                name: '正面舆论',
                label: {
                  normal: {
                    textStyle: {
                      color: '#00e6fc'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    lineStyle: {
                      color: '#00e6fc'
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: new me.$echarts.graphic.LinearGradient(0, 0, 0, 0, [
                      {
                        offset: 0,
                        color: 'rgba(0,230,252, .1)'
                      },
                      {
                        offset: 1,
                        color: 'rgba(220,0,252,1)'
                      }
                    ]),
                    borderColor: '#00e6fc',
                    shadowColor: 'rgba(0,230,252, .9)',
                    shadowBlur: 30
                  }
                }
              }
            ]
          }
        ]
      }
      this.myChart.setOption(option)
      window.onresize = this.myChart.resize
      // window.onresize = this.myChart.resize
    },
    changeValue() {
      this.value1 = (Math.random() * 50).toFixed(0)
      this.value2 = 100 - this.value1
    },
    resize(){
      this.myChart.resize();
    }
  },
  computed: {
    ...state.getState(['areaName'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
