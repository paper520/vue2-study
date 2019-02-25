/**
 * 和event事件处理相关的操作或方法
 * =============================
 */

export default {

  /**
   * 绑定DOM事件
   * @param {dom} el 
   * @param {string} eventType 
   * @param {function} callback 
   */
  "bind": function (el, eventType, callback) {
    if (window.attachEvent)
      el.attachEvent('on' + eventType, callback);
    else
      el.addEventListener(eventType, callback, false);
    return this;
  }

};