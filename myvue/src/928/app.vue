<template>
  <div>
    <button @click="setFlag">点击</button>
    <div>
      <Tan :class="flag?'active':''"/>
    </div>
  </div>
</template>

<script>
import Tan from "./tan";
export default {
  data() {
    return {
      flag: false
    };
  },
  methods: {
    setFlag() {
      this.flag = !this.flag;
    }
  },
  components: {
    Tan
  }
};
</script>

<style scoped>
.box {
  position: relative;
  width: 100%;
  height: 100%;
}
.active {
  display: none;
}
</style>