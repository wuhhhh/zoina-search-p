import Vue from "vue";
import Router from "vue-router";

//import util from "@/lib/util";
//import settings from "@/settings";

// 路由数据
import routes from "./routes";

Vue.use(Router);

const router = new Router({
  base:process.env.BASE_URL,//服务器地址前缀
  mode:"history",

  routes
});
// 解决添加相同路由报错问题
//const routerPush=Router.prototype.push
// Router.prototype.push=function push(location){
//   return routerPush.call(this,location).catch(error=>error);
// }

/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach((to, from, next) => {
  // 进度条
  // NProgress.start();
  // let token = util.cookies.get(settings.constants.TOKEN, true);
  // if (to.name == "Login" && token && token !== "undefined") {
  //   next({ name: "Index" });
  // }
  // // 验证当前路由所有的匹配中是否需要有登录验证的
  // else if (to.matched.some(r => r.meta.requiresAuth)) {
  //   // 这里暂时将cookie里是否存有token作为验证是否登录的条件
  //   // 请根据自身业务需要修改
  //   // TODO: 后续集成验证token令牌时效性
  //   if (token && token !== "undefined") {
  //     next();
  //   } else {
  //     // 将当前预计打开的页面完整地址临时存储 登录后继续跳转
  //     // 这个 cookie(redirect) 会在登录后自动删除
  //     util.cookies.set("redirect", to.fullPath);
  //     // 没有登录的时候跳转到登录界面
  //     next({
  //       name: "Login"
  //     });
  //   }
  // } else {
    // 不需要身份校验 直接通过
    next();
  //}
});

// router.afterEach(to => {
//   // 进度条
//   // NProgress.done();
//   // 需要的信息
// });

export default router;
