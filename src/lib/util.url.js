const isProduction = process.env.NODE_ENV === "production";

export default {
  /**
   * @description 获取URL参数分隔符
   * @param {String} url 网页地址
   * @returns {String} separator 分隔符，返回值[? | &]。
   */
  getUrlSeparator(url) {
    return url.lastIndexOf("?") > -1 ? "&" : "?";
  },

  /**
   * @description 构建 URL 地址
   * @param {String} url 原始网页地址
   * @param {Object} queryParams URL参数对象 {key1:value2,key2:value2}
   * @returns {String} URL 网页地址 eg: http://xxx.com?key1=value1&key2=value2
   */
  buildUrl(url, queryParams = {}) {
    var keys = Object.keys(queryParams);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      let separator = "&";
      if (i == 0) {
        separator = this.getUrlSeparator(url);
      }
      url += `${separator}${key}=${queryParams[key]}`;
    }
    return url;
  },
  /**
   * 获取一个包含协议、主机、虚拟目录（如果有的话）的 URL 前缀
   * @returns [http|https]://[host]/[virtualPath]/
   */
  getUrlPrefix() {
    const publicPath = isProduction ? process.env.VUE_APP_PUBLIC_PATH : "/";
    return `${window.location.protocol}//${
      window.location.host
    }${this.tryAddSlash(publicPath)}`;
  },
  /**
   * 尝试为字符串填充 符号 "/"
   * @param {String}} input 要填充的字符串
   * @returns "xxx/"
   */
  tryAddSlash(input) {
    if (!input) return "/";
    if (input.lastIndexOf("/") === input.length - 1) {
      return input;
    }
    return input + "/";
  }
};
