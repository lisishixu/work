export const URL_BASE = 'http://192.168.1.174:8081';
// export const API_BASE = 'http://192.168.1.192:8081';  //杨举
export const API_BASE = 'http://192.168.1.176:8088';  //通用
// export const API_BASE = 'http://192.168.1.197:8080'; //倩倩

/**
 * 2019/11/20 约定：
 * 接口名称统一使用小驼峰命名，前缀get/post
 * get表示获取数据（列表、详情等），post表示更新数据（编辑、新增等）
 * 如果后端接收方式和get、post命名约定不符，可以写在名称后面备注。
 */


export default {
  // 代言列表，list常规参数 √
  getUserEndorse: `${API_BASE}/miniProgram/user/userEndorse`,
  // 某个用户关注的用户列表，list常规参数
  getuserFollow: `${API_BASE}/miniProgram/user/userFollow`,
  // 笔记\代言内容的评论列表
  directComments: `${API_BASE}/miniProgram/user/directComments`,
  // 上传图片，可直接通过uploadFile方法使用√
  uploadImg: `${API_BASE}/genericClass/uploadImg`,
  // 图形验证码，直接在img中使用即可√
  checkCode: `${API_BASE}/genericClass/checkCode`,
  // 发送短信验证码，√
  // 参数：userPhone手机号、type类型（telLogin登录，register注册，findPassword忘记密码，bindTel绑定手机号，apply商家入驻）、imgCode图像验证码、sessionId域id
  toTel: `${API_BASE}/genericClass/toTel`,
  // 保存头像，参数：imgUrl 头像地址√
  sellersSaveImg: `${API_BASE}/miniProgram/sellers/saveImg`,
  // 商家详情
  sellersDetail: `${API_BASE}/miniProgram/sellers/sellersDetail`,
  // 获取省市区√
  searchArea: `${API_BASE}/genericClass/searchArea`,
  // 商家订单列表，参数：orderState 订单状态√
  // '订单状态(0:待付款1：待核销2：待评价 3：已完成 4退款中 5退款成功 6退款失败)'
  sellersSearchOrder: `${API_BASE}/miniProgram/sellers/searchOrder`,
  // 商家订单详情，参数：orderId 订单id√
  sellersOrderDetail: `${API_BASE}/miniProgram/sellers/orderDetail`,
  // 商家入驻 √
  // 参数：sellerInviter邀请人id，详见https://tower.im/teams/836065/documents/263/
  applySeller: `${API_BASE}/miniProgram/sellers/applySeller`,
  // 个人中心
  sellersZone: `${API_BASE}/miniProgram/sellers/zone`,
  // 微信登陆
  wechatLogin: `${API_BASE}/miniUserInfo/weChat/login`,
  // 首页数据集合（轮播、9个分类、秒杀选项卡）
  homeMain: `${API_BASE}/miniProgram/homePage/index`,
  //代言頁面的點贊
  userLikeShare:`${API_BASE}/miniProgram/user/userLikeShare`,
//  代言頁面评论条数
}
