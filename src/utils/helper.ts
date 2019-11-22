import {getJSON, post} from "./request";
import Taro from "@tarojs/taro";
import api, {URL_BASE} from "../constants/api";

/**
 * 检测资源的url是不是带http/https协议的，如果不匹配则补全配置的根域名
 * @param resUrl
 */
export const checkResUrl = (resUrl) => {
  if (!resUrl) return;
  if (resUrl.search('http') === -1) {
    return URL_BASE + resUrl;
  } else {
    return resUrl;
  }
};

//用户信息
export const UserInfo = (callback) => {
  getJSON(URL_BASE, {}, res => {
    if (res.code === 200) {
      Taro.setStorageSync('userInfo', res.data);
      return callback(res.data);
    }
  })
};

/**
 * 检测是不是手机号
 * @param phoneStr
 */
export const checkPhone = (phoneStr) => {
  if (!phoneStr) return;
  return (/^1[345789]\d{9}$/.test(phoneStr));
};


const DATA = {};
export const setDATA = (key, value) => {
  DATA[key] = value;
};
export const getDATA = (key) => {
  return DATA[key];
};

export const wxLogin = () => {
  Taro.login().then(loginRes => {
    console.log('wxlogin获取到的参数：', loginRes);
    Taro.getUserInfo({
      withCredentials: true
    }).then(userRes => {
      console.log('getUserInfo获取到的参数：', userRes);
      userRes['jsCode'] = loginRes['code'];
      Taro.setStorageSync('wxUserInfo', userRes.userInfo);
      post(api.wechatLogin, userRes, res => {
        if (res.code == 200) {
          Taro.setStorageSync('token', res.msg || '');
        }
      })
    }).catch(() => {
      // 回调失败，通常是未授权
      console.log(Taro.getCurrentPages()[0]);
      setDATA('previousPage', {
        route: Taro.getCurrentPages()[0].route,
        options: Taro.getCurrentPages()[0].__displayReporter.showOptions.query,
      });
      Taro.redirectTo({
        url: '/pages/auth/login'
      })
    });
  });
};

// 根据Url判断打开方式
export const openUrl = (url) => {
  console.log(url);
  if (url.search('http') > -1) {
    Taro.navigateTo({
      url: `/pages/webview/index?link=${url}`
    })
  } else {
    Taro.navigateTo({
      url
    })
  }
};


// 没有任何效果的事件
export const thisVoid = () => {

};


// 检测用户权限是否符合
export const checkIdentity = (type: string | null = null) => {
  // 获取缓存的用户数据，或者调用后端接口

  // 数据判断
  if (type) return 'user' === type;
  // 如果没有传递类型，返回类型

  return 'user';
};


// 防抖截流函数
let debounceData = {};
export const debounceFn = (callback: Function, fnkey: string = 'default', countdown: number = 0) => {
  if (debounceData[fnkey]) return;
  if (countdown) {
    // 如果倒计时存在，倒计时结束直接设置锁的状态
    setTimeout(() => {
      debounceData[fnkey] = false;
    }, countdown);
  }
  return callback();
};
export const cancelDebounce = (fnkey: string = 'default') => {
  debounceData[fnkey] = false;
};


