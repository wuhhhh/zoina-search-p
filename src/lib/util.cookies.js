import Cookies from "js-cookie";
import settings from "@/settings.js";
const keyPrefix = settings.company || "zapsoft";
const cookies = {};

/**
 * @description 存储 cookie 值
 * @param {String} name cookie name
 * @param {String} value cookie value
 * @param {Object} setting cookie setting
 */
cookies.set = function(name = "default", value = "", cookieSetting = {}) {
  let currentCookieSetting = {
    expires: 1
  };
  Object.assign(currentCookieSetting, cookieSetting);
  Cookies.set(`${keyPrefix}-${name}`, value, currentCookieSetting);
};

/**
 * @description 拿到 cookie 值
 * @param {String} name cookie name
 * @param {Boolean} parse true => JSON.parse
 */
cookies.get = function(name = "default", parse = false) {
  var data = Cookies.get(`${keyPrefix}-${name}`);
  try {
    if (parse && data) {
      return JSON.parse(data);
    } else {
      return data;
    }
  } catch (error) {
    console.warn(error.message);
    return data;
  }
};

/**
 * @description 拿到 cookie 全部的值
 */
cookies.getAll = function() {
  return Cookies.get();
};

/**
 * @description 删除 cookie
 * @param {String} name cookie name
 */
cookies.remove = function(name = "default") {
  return Cookies.remove(`${keyPrefix}-${name}`);
};

export default cookies;
