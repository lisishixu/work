export const URL_BASE = 'http://192.168.1.174:8081';
export const API_BASE = 'http://192.168.1.174:8081';

/**
 * 2019/11/20 约定：
 * 接口名称统一使用小驼峰命名，前缀get/post
 * get表示获取数据（列表、详情等），post表示更新数据（编辑、新增等）
 * 如果后端接收方式和get、post命名约定不符，可以写在名称后面备注。
 */


//  代言列表，post接收
const getUserEndorse = `${API_BASE}/miniProgram/user/userEndorse`;
const getuserFollow = `${API_BASE}/miniProgram/user/userFollow`;
const uploadImg = `${API_BASE}/miniProgram/sellers/uploadImg`;
const toTel = `${API_BASE}/genericClass/toTel`;
const checkCode = `${API_BASE}/genericClass/checkCode`;

export default {
  getUserEndorse,
  getuserFollow,
  uploadImg,
  toTel,
  checkCode,
}
