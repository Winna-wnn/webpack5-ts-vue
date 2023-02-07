import { createApp } from "vue";

import App from "./App.vue";
import Antd from "ant-design-vue";

import "ant-design-vue/dist/antd.less";
import "./assets/fonts/iconfont.css";

createApp(App).use(Antd).mount("#app");
