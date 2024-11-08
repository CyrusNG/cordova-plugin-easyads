var exec = require('cordova/exec');

var EasyAds = {

  /**
   * TODO
   * @return {void}
   */
  onMessage: function (message) {
    console.log('EasyAds Message: ' + message);
  },

  /**
   * TODO
   * @return {void}
   */
  onError: function (error) {
    console.log('EasyAds Error: ' + error);
  },


  /**
   * TODO
   * @param  {string} param TODO
   * @return {void}
   */
  funcX: async function (param) {
    this._bindNative('onMessage', this.onMessage);
    return await this._callNative('funcX', [param]);
  },

  /**
   * TODO
   * @param  {boolean} param TODO
   * @return {object} TODO
   */
  funcY: async function (param) {
   return await this._callNative('funcY', [param]);
  },

  /**
   * 桥接native函数
   * @param  {string} name native中的函数名
   * @param  {*[]} args native中的函数参数
   * @return {string|object} 成功：返回空字符 "" | 错误：抛出错误 { reason, message }
   */
  _callNative: function (name, args) {
    return new Promise((resolve, reject) => exec(data => resolve(data), err => reject(err), 'EasyAds', name, args));
  },

    /**
   * 桥接native事件
   * @param  {string} name native中的函数名
   * @param  {function} handler 处理事件的函数 
   * @return {void}
   */
  _bindNative: function (name, handler) {
    exec(handler, this.onError, 'EasyAds', name, []);
  },

};
module.exports = EasyAds;
