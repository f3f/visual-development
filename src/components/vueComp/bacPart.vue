<template>
  <div
    style="position: absolute"
    ref='part-border-wrap'
    :class="className"
    :id='bacId'
  >
    <div class="bac-sound-box">
      <div class="bac-border-base bac-border bac-border-t"></div>
      <div class="bac-border-base bac-border bac-border-r"></div>
      <div class="bac-border-base bac-border bac-border-b"></div>
      <div class="bac-border-base bac-border bac-border-l"></div>
      <div class="bac-corner-base bac-corner bac-corner-lt"></div>
      <div class="bac-corner-base bac-corner bac-corner-lb"></div>
      <div class="bac-corner-base bac-corner bac-corner-rt"></div>
      <div class="bac-corner-base bac-corner bac-corner-rb"></div>
      <div class="common-part  bac-content">
        <slot></slot>
      </div>
    </div>
  </div>

</template>
<script>
import { state } from '@/assets/js/app'
import Sounds from '@/assets/js/common/sound'
import tls from '@/assets/js/common/timeLine'
export default {
  data() {
    return {
      ease: Power3.easeOut,
      animateParams: {
        cornerH: '20px',
        cornerW: '20px',
        cornerColor: 'rgba(4, 35, 41, 0.35)',
        contentBg: 'rgba(4, 35, 41, 0.35)',
        borerColor: '#029dbb',
        borerShadow: '0 0 4px rgba(2, 157, 187, 0.65)',
        cornerShadow: '0 0 4px -2px rgba(38, 218, 253, 0.65)'
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    init() {
      let part = this.$refs.part
      let border = this.$refs['part-border-wrap']
      Object.assign(border.style, this.borderPositon ? this.borderPositon : {})
      Object.assign(this.animateParams, this.borderStyle)
      state.loadingPart()
      this.anima()
    },
    anima() {
      let me = this
      let dom = this.$refs['part-border-wrap']
      let borderT = dom.querySelector('.bac-border-t')
      let borderB = dom.querySelector('.bac-border-b')
      let borderL = dom.querySelector('.bac-border-l')
      let borderR = dom.querySelector('.bac-border-r')
      let cornerLT = dom.querySelector('.bac-corner-lt')
      let cornerLB = dom.querySelector('.bac-corner-lb')
      let cornerRT = dom.querySelector('.bac-corner-rt')
      let cornerRB = dom.querySelector('.bac-corner-rb')
      let content = dom.querySelector('.bac-content')
      TweenMax.set([borderT, borderB, borderL, borderR], {
        borderColor: me.animateParams.borerColor,
        boxShadow: me.animateParams.borerShadow
      })
      TweenMax.set([cornerLT, cornerLB, cornerRT, cornerRB], {
        borerColor: me.animateParams.cornerColor,
        boxShadow: me.animateParams.cornerShadow
      })
      TweenMax.set([content], {
        backgroundColor: me.animateParams.contentBg
      })
      let tl = new TimelineMax({ ease: me.ease })
      tl.staggerTo([borderT, borderB], me.duration || 0.25, {
        width: '100%',
        onStart: me.bacCreate,
        onStartParams: [me]
      })
        .to(
          [borderL, borderR],
          me.duration || 0.25,
          {
            height: '100%',
            ease: me.ease
          },
          0
        )
        .to(
          [cornerLT, cornerLB, cornerRT, cornerRB],
          me.duration || 0.25,
          {
            height: me.animateParams.cornerH,
            width: me.animateParams.cornerW,
            opacity: 1
          },
          0
        )
        .to(
          [content],
          me.duration || 0.25,
          {
            opacity: 1,
            onComplete: me.bacMounted,
            onCompleteParams: [me]
          },
          0
        )
      tl.addCallback(me.callback, (me.duration || 0.25) / 2)
      tls.add(tl, `-=${me.duration / 2}`)
    },
    callback() {
      Sounds.deploy()
    },
    bacCreate(me) {
      me.$emit('bacCreate')
    },
    bacMounted(me) {
      me.$emit('bacMounted')
    }
  },
  props: {
    part: {
      type: Object
    },
    borderPositon: {
      type: Object
    },
    duration: {
      type: Number
    },
    borderStyle: {
      type: Object
    },
    className: {
      type: String
    },
    bacId: {
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
.common-part {
  box-sizing: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>

