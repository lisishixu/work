import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Navigator, Button, Image} from '@tarojs/components'
import './index.scss'
import {AtAvatar, AtRate} from "taro-ui";
import IconFont from "../../components/iconfont";

export interface Props {

}

export interface State {

}

export default class Index extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: '商家后台'
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    return (
      <View className='index'>

        <View className="top">
          <Navigator url={'/pages/index/index'} openType={"switchTab"} className="btn-switch">
            <View className="line margin-right--10">
              <IconFont name={"qiehuan"} size={30} color={'white'}/>
            </View>
            <Text>切换至商城</Text>
          </Navigator>
          <Image className="img" src={'/statics/imgs/merchant-index.png'}/>
        </View>

        <View className="user">
          <View className="user__avatar">
            <AtAvatar circle size={"large"}/>
          </View>
          <Text className="user__name">是悠悠啊</Text>
          <AtRate className="user__rate margin-top--20" size={14} value={4} max={4}/>
          <Text className="user__id">ID:1857435487453487</Text>
          <View className="action">
            <Navigator className="action__item">
              <IconFont name={"shangjia"} size={40} color={'#888'}/>
              <Text className="margin-left--20">上传商品</Text>
            </Navigator>
            <Navigator className="action__item">
              <IconFont name={"huangguan"} size={40} color={'#888'}/>
              <Text className="margin-left--20">发布活动</Text>
            </Navigator>
          </View>
        </View>

        <View className="fn-nav">
          <Navigator className="fn-nav__item"
                     style={{backgroundColor: '#FDDADA'}}
                     url={'/pages/merchant/scan'}>
            <View className="inline--block">
              <IconFont name={"saoyisao"} size={70} color={'#F12737'}/>
            </View>
            <Text className="text" style={{color: '#F12737'}}>扫一扫</Text>
          </Navigator>
          <Navigator className="fn-nav__item"
                     style={{backgroundColor: '#FAEDCB'}}>
            <View className="inline--block">
              <IconFont name={"jilu"} size={70} color={'#FBA948'}/>
            </View>
            <Text className="text" style={{color: '#FBA948'}}>核销记录</Text>
          </Navigator>
          <Navigator className="fn-nav__item"
                     style={{backgroundColor: '#CBE2FA'}}>
            <View className="inline--block">
              <IconFont name={"icon"} size={70} color={'#4AA6ED'}/>
            </View>
            <Text className="text" style={{color: '#4AA6ED'}}>客户记录</Text>
          </Navigator>
        </View>

        <View className="data">
          <View className="data__item">
            <Text className="number">500.00</Text>
            <Text className="f__size--24 c--666">今日实收金额（元）</Text>
          </View>
          <View className="data__item">
            <Text className="number">500.00</Text>
            <Text className="f__size--24 c--666">今日实收金额（元）</Text>
          </View>
          <View className="data__item">
            <Text className="number">500.00</Text>
            <Text className="f__size--24 c--666">今日实收金额（元）</Text>
          </View>
          <View className="data__item">
            <Text className="number">500.00</Text>
            <Text className="f__size--24 c--666">今日实收金额（元）</Text>
          </View>
        </View>

        <Button className="btn">退出登录</Button>

      </View>
    )
  }
}
