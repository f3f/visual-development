<template>
  <div class="wrap">
    <part :part="{className:'demo-1' ,style:{top:'10px' }}"></part>
    <part :part="{className:'demo-1',style:{top:'206.7px'}}"></part>
    <part :part="{className:'demo-1',style:{bottom:'10px'}}"></part>
    <part :part="{className:'demo-2' ,style:{top:'10px',width:'580px',height:'383.4px' }}"></part>
    <part :part="{className:'demo-5',style:{top:'10px'}}"></part>
    <part :part="{className:'demo-5',style:{top:'206.7px'}}"></part>
    <part :part="{className:'demo-2',style:{bottom:'10px',width:'440px'}}"></part>
    <part :part="{className:'demo-3',style:{bottom:'10px',width:'440px',left:'870px'}}"></part>
    <part :part="{className:'demo-4' ,style:{top:'10px' }}"></part>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      // 获取组件
      this.$parts = this.$getComponent('part')
    })
  }
}
</script>
 <style lang="scss" scoped>
.wrap {
  width: 1600px;
  height: 600px;
  position: absolute;
  border: 1px solid #ffc107;
  top: 80px;
  left: 220px;
  .demo-1 {
    left: 10px;
    height: 186.7px;
    width: 400px;
  }
  .demo-2 {
    left: 420px;
    height: 186.7px;
    width: 400px;
  }
  .demo-3 {
    left: 830px;
    height: 186.7px;
    width: 400px;
  }
  .demo-4 {
    right: 10px;
    height: 580px;
    width: 270px;
  }
  .demo-5 {
    left: 1010px;
    width: 300px;
    height: 186.7px;
  }
}
</style>

