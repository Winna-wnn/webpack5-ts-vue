<template>
  <i class="iconfont icon-jisuanqi" />
  <i class="iconfont icon-kabao" />
  <i class="iconfont icon-duanxin" />
  <i class="iconfont icon-shangcheng" />
  <i class="iconfont icon-rili" />
  <i class="iconfont icon-shezhi" />
  <i class="iconfont icon-naozhong" />
  <i class="iconfont icon-naozhong" />
  <i class="iconfont icon-tianqi" />
  <i class="iconfont icon-ditu" />
  <i class="iconfont icon-zhaopian" />
  <i class="iconfont icon-xiangji" />
  <div class="background">
    <h1>{{ name }}</h1>
  </div>
  <a-button type="primary">按钮</a-button>
  <a-input placeholder="请输入。。。" />
  <a-layout>
    <a-layout-header class="layout-header">头部</a-layout-header>
    <a-layout style="height: 100vh">
      <a-layout-sider></a-layout-sider>
      <a-layout-content>内容</a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const name = "和光不同尘";
    return {
      name,
    };
  },
});
</script>
<style lang="less" scoped>
.background {
  background-image: url("./assets/images/test.jpg");
  background-size: contain;
  width: 500px;
  height: 500px;
  h1 {
    color: greenyellow;
    user-select: text;
  }
}
.iconfont {
  font-size: 40px;
}
.layou-header {
  color: @primary-color;
}
</style>
