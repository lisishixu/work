import Taro, {Component, Config} from '@tarojs/taro'
import {View, Navigator, Image} from '@tarojs/components'
import './index.scss'
import {AtGrid} from "taro-ui";
import {checkIdentity} from "../../utils/helper";
import CenterHeader from "./components/header";
import OrderNav from "../../components/order-nav/order-nav";
import {post} from "../../utils/request";
import api from "../../constants/api";

export interface Props {

}

export interface State {
  bannerImg: string
  bannerLink: string
  grid: [],
  identity: string,
  userHeadImg: string,
  userName: string,
  level: number,
  orderState: {
    orderState0: number
    orderState1: number
    orderState2: number
    orderState3: number
    orderState4: number
    orderState5: number
    orderState6: number
  }
}

export default class Index extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: "个人中心",
    navigationBarTextStyle: "white",
    navigationBarBackgroundColor: '#F12737'
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      bannerImg: '',
      bannerLink: '',
      grid: [],
      level: 0,
      identity: 'user',
      userHeadImg: '',
      userName: '',
      orderState: {
        orderState0: 1,
        orderState1: 0,
        orderState2: 0,
        orderState3: 0,
        orderState4: 0,
        orderState5: 0,
        orderState6: 0
      }
    }
  }

  componentWillMount() {
    const initData = {
      //用戶
      user: {
        identity: 'user',
        bannerImg: '/statics/imgs/center/user-banner.png',
        bannerLink: '/pages/invitation/agent',
        grid: [
          {
            image: '/statics/imgs/center/icon-kskd.png',
            value: '一键开店',
            url: '/pages/setUpShop/index'
          }, {
            image: '/statics/imgs/center/icon-dlzz.png',
            value: '申请代理',
            url: '/pages/joinAgency/index'
          }, {
            image: '/statics/imgs/center/icon-hy.png',
            value: '邀请好友',
            url: '/pages/friendRegistration/index'
          }, {
            image: '/statics/imgs/center/icon-sy.png',
            value: '我的收益',
            url: '/pages/myEarnings/myEarnings'
          }, {
            image: '/statics/imgs/center/icon-fx.png',
            value: '我的分享',
            url: '/pages/myShare/index'
          }, {
            image: '/statics/imgs/center/icon-sc.png',
            value: '我的收藏',
            url: '/pages/myCollection/index'
          }, {
            image: '/statics/imgs/center/icon-xx.png',
            value: '消息中心',
            url: '/pages/message/index'
          }, {
            image: '/statics/imgs/center/icon-kf.png',
            value: '联系客服',
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-sz.png',
            value: '系统设置',
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-gy.png',
            value: '关于我们',
            url: '/pages/about/index'
          },
        ]
      },
      //代理
      agent: {
        identity: 'agent',
        bannerImg: '/statics/imgs/center/agent-banner.png',
        bannerLink: '/pages/invitation/agent',
        grid: [
          {
            image: '/statics/imgs/center/icon-dlzz.png',
            value: '邀请代理',
            url: '/pages/invitation/agent'
          }, {
            image: '/statics/imgs/center/icon-hy.png',
            value: '邀请用户',
            url: '/pages/friendRegistration/index'
          }, {
            image: '/statics/imgs/center/icon-sy.png',
            value: '我的代理',
            url: '/pages/myAgent/index'
          }, {
            image: '/statics/imgs/center/icon-fx.png',
            value: '我的商家',
            url: '/pages/myMerchant/index'
          }, {
            image: '/statics/imgs/center/icon-sc.png',
            value: '我的收益',
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-xx.png',
            value: '我的业绩',
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-kf.png',
            value: '我的账户',
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-sz.png',
            value: '我的收藏',
            url: '/pages/myCollection/index'
          }, {
            image: '/statics/imgs/center/icon-xx.png',
            value: '消息中心',
            url: '/pages/message/index'
          }, {
            image: '/statics/imgs/center/icon-kf.png',
            value: '联系客服',
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-sz.png',
            value: '系统设置',
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-gy.png',
            value: '关于我们',
            url: '/pages/about/index'
          },
        ]
      },
      //商家
      merchant: {
        identity: 'merchant',
        bannerImg: '/statics/imgs/center/merchant-banner.png',
        bannerLink: '/pages/invitation/agent',
        grid: [
          {
            image: '/statics/imgs/center/icon-yqsj.png',
            value: '邀请商家',
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-hy2.png',
            value: '邀请会员',
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-mp.png',
            value: '我的名片',
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-sy.png',
            value: '我的收益',
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-qb.png',
            value: '我的业绩',
            url: '/pages/myMerchant/index'
          }, {
            image: '/statics/imgs/center/icon-tx2.png',
            value: '我的账户',
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-sc2.png',
            value: '我的收藏',
            url: '/pages/myCollection/index'
          }, {
            image: '/statics/imgs/center/icon-tj.png',
            value: '我的推荐',
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-xx.png',
            value: '消息中心',
            url: '/pages/message/index'
          }, {
            image: '/statics/imgs/center/icon-sz.png',
            value: '系统设置',
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-gy2.png',
            value: '关于我们',
            url: '/pages/about/index'
          },
        ]
      }
    };
    switch (checkIdentity()) {
      case "user":
        break;
      // @ts-ignore
      case 'shop':
        break;
    }
    // @ts-ignore
    this.setState(initData.agent);
    this.getUserInfo()
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  // 根据点击状态切换身份
  onSwitch = (identity) => {
    this.setState({identity}, () => {
      // todo 身份切换完成，重新获取数据
    });
  };

  onGrid = (item) => {
    if (!item) return;
    Taro.navigateTo({
      url: item.url
    })
  };

  getUserInfo = () => {
    post(api.sellersZone, {}, res => {
      if (res.code == 200) {
        this.setState({
          orderState: res.data.orderState,
          userHeadImg: res.data.userHeadImg,
          userName: res.data.userName,
          level: res.data.level,
        })
      }
    })
  };

  render() {
    return (
      <View className='index'>

        <CenterHeader
          {...this.state}
          identity={this.state.identity}
          onSwitch={value => {
            this.onSwitch(value)
          }}/>

        <OrderNav data={this.state.orderState}/>

        <Navigator url={this.state.bannerLink}>
          <Image className={"banner"} src={this.state.bannerImg} mode={"widthFix"}/>
        </Navigator>

        <View className="continaer grid-nav">
          <AtGrid className="bg-color--white"
                  columnNum={3} hasBorder={false}
                  onClick={this.onGrid}
                  data={this.state.grid}/>
        </View>

      </View>
    )
  }
}
