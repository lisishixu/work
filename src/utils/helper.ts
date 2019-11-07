import {apiUserInfo, urlBase} from "../constants/api";
import {getJSON} from "./request";
import Taro from "@tarojs/taro";

/**
 * 检测资源的url是不是带http/https协议的，如果不匹配则补全配置的根域名
 * @param resUrl
 */
export const checkResUrl = (resUrl) => {
  if (!resUrl) return;
  if (resUrl.search('http') === -1) {
    return urlBase + resUrl;
  } else {
    return resUrl;
  }
};

//用户信息
export const UserInfo = (callback) => {
  getJSON(apiUserInfo, {}, res => {
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
    loginRes['wxUserInfo'] = Taro.getStorageSync('wxUserInfo');
    getJSON('apiWxLogin', loginRes, res => {
      if (res.data.code === 200 && res.header['Set-Cookie']) {
        const COOKIE = res.header['Set-Cookie'];
        Taro.setStorageSync('cookie', COOKIE);
        Taro.setStorageSync('userInfo', res.data.data);
      }
    }, true)
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
