import Taro, {Component, Config} from '@tarojs/taro'
import {View, Navigator, Image} from '@tarojs/components'
import './index.scss'
import {AtGrid} from "taro-ui";
import {checkIdentity} from "../../utils/helper";
import CenterHeader from "./components/header";
import OrderNav from "../../components/order-nav/order-nav";

export interface Props {

}

export interface State {
  bannerImg: string
  bannerLink: string
  grid: [],
  identity: string,
  orderLen: any
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
      identity: 'user',
      orderLen: {
        'waiting': 1,
        'pickup': 6,
        'success': 6,
        'evaluation': 6,
        'reimburse': 2,
      }
    }
  }

  componentWillMount() {
    const initData = {
      user: {
        identity: 'user',
        bannerImg: '/statics/imgs/center/user-banner.png',
        bannerLink: '/pages/invitation/agent',
        grid: [
          {
            image: '/statics/imgs/center/icon-kskd.png',
            value: '一键开店',
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-dlzz.png',
            value: '申请代理',
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-hy.png',
            value: '邀请好友',
            url: '/pages/friendRegistration/index'
          }, {
            image: '/statics/imgs/center/icon-sy.png',
            value: '我的收益',
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-fx.png',
            value: '我的分享',
            url: '/pages/myShare/index'
          }, {
            image: '/statics/imgs/center/icon-sc.png',
            value: '我的收藏',
            url: '/pages/news/index'
          }, {
            image: '/statics/imgs/center/icon-xx.png',
            value: '消息中心',
            url: '/'
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
            url: '/'
          },
        ]
      },
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
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-fx.png',
            value: '我的商家',
            url: '/'
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
            url: '/pages/news/index'
          }, {
            image: '/statics/imgs/center/icon-xx.png',
            value: '消息中心',
            url: '/'
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
            url: '/'
          },
        ]
      },
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
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-tx2.png',
            value: '我的账户',
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-sc2.png',
            value: '我的收藏',
            url: '/pages/news/index'
          }, {
            image: '/statics/imgs/center/icon-tj.png',
            value: '我的推荐',
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-xx.png',
            value: '消息中心',
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-sz.png',
            value: '系统设置',
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-gy2.png',
            value: '关于我们',
            url: '/'
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
    this.setState(initData.user)
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
    this.setState({identity},()=>{
       // todo 身份切换完成，重新获取数据
    });
  };

  onGrid = (item) => {
    if (!item) return;
    console.info('请在代码中补充需要访问的路径');
    Taro.navigateTo({
      url: item.url
    })
  };

  render() {
    return (
      <View className='index'>

        <CenterHeader identity={this.state.identity}
                      onSwitch={value => {
                        this.onSwitch(value)
                      }}/>

        <OrderNav data={this.state.orderLen}/>

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
