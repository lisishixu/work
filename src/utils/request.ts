import {dateFormat} from "./time";
import Taro from "@tarojs/taro";
import api from "../constants/api";

export const token = Taro.getStorageSync('token') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NzQ0MTE5NzYsInVzZXJJZCI6MX0.z4l_akdJaPj4dJpHo6CVMVE8DKPN1NUQ3AZ9q7jPHp8';

/**
 * 封装的统一请求方法
 * @param params
 * @param callbak
 * @param header
 */
function request(params, callbak, header = false) {
  let {
    url,
    data,
    method
  } = params;
  method = params.method || 'GET';
  let contentType = 'application/x-www-from-urlencoded';
  contentType = params.contentType || contentType;
  const option = {
    url: url,
    data,
    method,
    header: {
      'content-type': contentType,
      'token': token,
    },
    success(res) {
      return callbak(header ? res : res.data);
    },
    error(e) {
      logError('api', '请求接口出现问题', e);
      return callbak(header ? e : e.data);
    }
  };
  Taro.request(option);
}

/**
 * 封装的错误记录
 * @param name
 * @param action
 * @param info
 */
export const logError = (name, action, info) => {
  console.error(name, action, info);
  const errorLog = Taro.getStorageSync('errorLog') || [];
  const tempLog = {
    time: dateFormat(new Date().getTime()),
    name,
    action,
    info
  };
  errorLog.push(tempLog);
  Taro.setStorageSync('errorLog', errorLog);
};

/**
 * 封装的GET
 * @param url
 * @param data
 * @param callback
 * @param header
 */
export const getJSON = (url, data, callback, header = false) => {
  let option = {
    url,
    data,
    method: 'GET'
  };
  request(option, callback, header);
};


/**
 * 封装的POST方法
 * @param url
 * @param data
 * @param callback
 * @param header
 */
export const post = (url, data, callback, header = false) => {
  let option = {
    url,
    data,
    method: 'POST',
    contentType: 'application/json'
  };
  request(option, callback, header);
};


/**
 * 封装的上传接口
 * @param filePath
 * @param callback
 */
export const uploadFile = (filePath, callback) => {
  Taro.showLoading({
    title: '上传中',
    mask: true
  });
  console.log('filePath', filePath);
  Taro.uploadFile({
    url: api.uploadImg,
    filePath,
    name: 'headimgFile',
    header: {
      'Content-Type': 'multipart/from-data',
      'Cookie': token,
      'token': token,
    }
  }).then(
    (res) => {
      Taro.hideLoading();
      return callback(res.data)
    }
  ).catch(() => {
    Taro.hideLoading();
    Taro.showToast({
      icon: 'none',
      title: '上传出错'
    })
  })
};

/*
 * 合并多个ajax请求发出
 * @param arr
 * @param callback
 * 示例：
    const arr = [
      {
        url: url.apiLevelNum,
        data: {}
      },
      {
        url: url.apiAgencyReceiving,
        data: {}
      }
    ];
    allRequest(arr, (res) => {
      return console.log(res)
    })
*/
export const allRequest = (arr, callback) => {
  if (!arr) {
    console.error('allRequest 需要传递多个请求方法');
    return;
  }
  const PromiseArray = arr.map((it) => {
    return new Promise(resolve => {
      getJSON(it.url, it.data, res => {
        resolve(res);
      })
    })
  });
  return Promise.all(PromiseArray)
    .then((res) => {
      return callback(res);
    })
    .catch((error) => {
      console.error(error)
    });
};
