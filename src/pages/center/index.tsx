import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Button, Navigator, Image} from '@tarojs/components'
import './index.scss'
import {AtAvatar, AtGrid} from "taro-ui";
import {checkIdentity} from "../../utils/helper";
import IconFont from '../../components/iconfont';

export interface Props {

}

export interface State {
  bannerImg: string
  bannerLink: string
  grid: []
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
      grid: []
    }
  }

  componentWillMount() {
    const initData = {
      user: {
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
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-sy.png',
            value: '我的收益',
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-fx.png',
            value: '我的分享',
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-sc.png',
            value: '我的收藏',
            url: '/'
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
        bannerImg: '/statics/imgs/center/agent-banner.png',
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
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-sy.png',
            value: '我的收益',
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-fx.png',
            value: '我的分享',
            url: '/'
          }, {
            image: '/statics/imgs/center/icon-sc.png',
            value: '我的收藏',
            url: '/'
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
            url: '/'
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

  onGrid = (item) => {
    if (!item) return;
    Taro.navigateTo({
      url: item.url
    })
  };

  render() {
    return (
      <View className='index'>
        <View className="header">
          <View className="flex a__items--center">
            <AtAvatar circle size={"large"}/>
            <View className="user">
              <Text className="user__name">包子君</Text>
              <Text className="user__id">ID:12345674878674</Text>
            </View>
            <Button className="btn btn-switch">
              <View className="line margin-right--10">
                <IconFont name={"qiehuan"} size={30} color={'white'}/>
              </View>
              <Text>切换至商户</Text>
            </Button>
          </View>
        </View>
        <View className="order-nav">
          <View className="order-nav__header">
            <Text>我的订单</Text>
            <Button className="btn btn-all">
              <Text className={"text"}>全部</Text>
              <View className="line margin-left--10">
                <IconFont name={"jiantou_xiangyouliangci_o"} size={30} color={'#ccc'}/>
              </View>
            </Button>
          </View>
          <View className="flex order-nav__main">
            <Navigator className="link">
              <Text className="status">待付款</Text>
              <Text className="number">1</Text>
            </Navigator>
            <Navigator className="link">
              <Text className="status">待取货</Text>
              <Text className="number">6</Text>
            </Navigator>
            <Navigator className="link">
              <Text className="status">已完成</Text>
              <Text className="number">6</Text>
            </Navigator>
            <Navigator className="link">
              <Text className="status">评价</Text>
              <Text className="number">6</Text>
            </Navigator>
            <Navigator className="link">
              <Text className="status">退款/售后</Text>
              <Text className="number">2</Text>
            </Navigator>
          </View>
        </View>
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
