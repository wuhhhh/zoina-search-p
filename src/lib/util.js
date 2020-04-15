import log from "./util.log.js";
import cookies from "./util.cookies.js";
import url from "./util.url.js";
import env from "./util.env";
import uuid from "./util.uuid";

let util = {
  cookies,
  log,
  url,
  env,
  uuid
};

/**
 * @description 更新标题
 * @param {String} title 标题
 */
util.title = function(titleText) {
  // const processTitle = process.env.VUE_APP_TITLE || "计划系统";
  const processTitle = process.env.VUE_APP_TITLE || "衡泽科技有限责任公司";
  window.document.title = `${processTitle}${
    titleText ? ` | ${titleText}` : ""
  }`;
};

/**
 * 验证手机号格式
 * @param {string} phoneNumber
 */
util.validatePhone = function(phoneNumber) {
  return /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(
    phoneNumber
  );
};


/**
 * @description 打开新页面
 * @param {String} url 地址
 */
util.open = function(url) {
  var a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("target", "_blank");
  a.setAttribute("id", "d2admin-link-temp");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(document.getElementById("d2admin-link-temp"));
};
export default util;
