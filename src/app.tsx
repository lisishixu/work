import Taro, {Component, Config} from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/search/index',
      'pages/invitation/index',
      'pages/classify/index',
      'pages/goods/detail',
      'pages/goods/new',
      'pages/goods/good',
      'pages/goods/choiceness',
      'pages/cart/index',
      'pages/member/index',
      'pages/member/buy',
      'pages/friendRegistration/index',
      'pages/myRecommend/index',
      'pages/note/index',
      'pages/note/detail',
      'pages/invitation/agent',
      'pages/myShare/index',
      'pages/myCollection/index',
      'pages/center/index',
      'pages/message/index',
      'pages/message/notice',
      'pages/message/comment',
      'pages/message/addfans',
      'pages/register/index',
      'pages/register/payVip',
      'pages/user/homepage',
      'pages/login/index',
      'pages/publish/index',
      'pages/publish/power',
      'pages/estimate/estimate',
      'pages/user/fans',
      'pages/estimate/goEstimate',
      'pages/estimate/estimateDetail',
      'pages/about/index',
      'pages/order/index',
      'pages/setting/userSet',
      'pages/order/detail',
      'pages/merchant/scan',
      'pages/bind/bindTel',
      'pages/bind/changePassword',
      'pages/bind/userId',
      'pages/merchant/verification',
      'pages/userHistroy/userHistroy',
      'pages/merchant/index',
      'pages/goods/index',
      'pages/orderHistory/orderHistory',
      'pages/merchant/post',
      'pages/order/pay-result',
      'pages/hxRecord/hxRecord',
      'pages/myEarnings/myEarnings',
      'pages/order/confrim',
      'pages/businessEarnings/businessEarnings',
      'pages/myEarnings/tgEarnings/tgEarnings',
      'pages/myMerchant/index',
      'pages/myAgent/index',
      'pages/merchant/info',
      'pages/member/upload-qrcode',
      'pages/merchant/business-card',
      'pages/paymentMoney/index',
      'pages/merchant/qrcode',
      'pages/joinAgency/index',
      'pages/merchant/info-edit',
      'pages/myInviteCode/index',
      'pages/merchant/sales-amount',
      'pages/setUpShop/index',
      'pages/myBankCard/index',
      'pages/myBankCard/addBankCard/addBankCard',
      'pages/user/withdraw-deposit',
      'pages/order/after-sales',
      'pages/refund/index',

    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '五联创客',
      navigationBarTextStyle: 'black'
    }, tabBar: {
      color: '#7e7578',
      selectedColor: '#EB3939',
      backgroundColor: '#fff',
      borderStyle: 'black',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: 'statics/imgs/tabbar/home_no.png',
          selectedIconPath: 'statics/imgs/tabbar/home.png',
        }, {
          pagePath: 'pages/note/index',
          text: '代言',
          iconPath: 'statics/imgs/tabbar/community_no.png',
          selectedIconPath: 'statics/imgs/tabbar/community.png',
        },
        {
          pagePath: 'pages/goods/choiceness',
          text: '精选',
          iconPath: 'statics/imgs/tabbar/concentration_no.png',
          selectedIconPath: 'statics/imgs/tabbar/concentration.png',
        },
        {
          pagePath: 'pages/cart/index',
          text: '购物车',
          iconPath: 'statics/imgs/tabbar/shop_no.png',
          selectedIconPath: 'statics/imgs/tabbar/shop.png',
        },
        {
          pagePath: 'pages/center/index',
          text: '我的',
          iconPath: 'statics/imgs/tabbar/my_no.png',
          selectedIconPath: 'statics/imgs/tabbar/my.png',
        }
      ]
    },
  };

  componentDidMount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentDidCatchError() {
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Index/>
    )
  }
}

Taro.render(<App/>, document.getElementById('app'))
