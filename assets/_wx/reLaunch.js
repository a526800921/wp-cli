/**
 * @method: reLaunch - 关闭所有页面，打开到应用内的某个页面。
 * @param: {String} url - 跳转路径
 * @param: {Object} options - 其他选项
 * @return: Promise
 * @other: 在页面没跳转之前多次调用会报错
  */

export default store => {

  return (url, options = {}) => {
    if (store.palmRejection) {
      store.dispatch('updatePalmRejection', false)

      return new Promise((resolve, reject) => {
        wx.reLaunch({
          url,
          ...options,
          success: resolve,
          fail: reject,
        })
      })
    }
  }
}