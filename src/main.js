import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
// Element
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.prototype.$axios = axios

new Vue({
  router,
  mounted() {
  },
  render: h => h(App)
}).$mount("#app");

// /**
//  * @description 重新加载应用数据
//  */
// async function reload() {
//   const context = {
//     whiteList: whiteList.map(s => s.toLocaleLowerCase()),
//     routeName: this.$route.name,
//     token: util.auth.getAccessToken()
//   };
//   try {
//     // 用户登录后从数据库加载一系列的设置
//     context.data = await this.$store.dispatch("platform/account/load");
//     // 不在白名单内
//     if (!context.whiteList.includes(context.routeName)) {
//       // 针对双核浏览器在切换内核时会导致 lowdb 用户信息数据丢失，而做的处理(重新请求服务器)。
//       // 当检测到用户信息无效且 token 合法时重新发起服务器请求获取用户信息
//       const { data: { user }, token } = context;
//       if (!(user && user.userId) && token) {
//         await this.$store.dispatch("platform/account/loadFromRemote");
//       }
//     }
//   } catch (e) {
//     alert("系统初始失败 loadFromRemote error");
//     console.error("main mounted", e, context);
//   }
// }