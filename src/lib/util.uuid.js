const uuidv1 = require("uuid/v1");

export default {
  /**
   * @description 生成一个标准的UUID
   */
  new() {
    return uuidv1();
  }
};
