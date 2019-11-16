import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Image, Button} from '@tarojs/components'
import './subordinate-item.scss'
import IconFont from "../iconfont";

export interface Props {
  isShop?: boolean
}

export interface State {

}

export default class SubordinateItem extends Component<Props, State> {

  config: Config = {};

  static defaultProps = {
    isShop: false
  };

  static options = {
    addGlobalClass: true
  };

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

  // 拨打电话
  onCall = () => {
    Taro.makePhoneCall({
      phoneNumber: '15111111111'
    })
  };

  // 前往商家详情
  goShopDetail = () => {
    if (!this.props.isShop) return;
    Taro.navigateTo({
      url: `/pages/merchant/info?merchantID=`
    })
  };


  render() {
    return (
      <View className='subordinate-item'>

        <View className="header">
          <Text>编号：000121635435454</Text>
          <Text>2019/10/12 12:48:56</Text>
        </View>
        <View className="flex a__items--center j__content--spbe margin-top--20 margin-bottom--20">
          <Image src={''} className="cover"/>
          <View className="content" onClick={this.goShopDetail}>
            <Text className="block f__size--30">噜啦啦的美妆店</Text>
            <Text className="block f__size--28 c--333">店主：噜啦啦</Text>
            <Text className="block f__size--26 c--666 ellipsis">郑州市金水区金水东路雅宝东方国际2号楼</Text>
          </View>
          <Button className="btn btn-call" onClick={this.onCall}>
            <IconFont name={"contact"} size={50} color={'#EB3939'}/>
          </Button>
        </View>

      </View>
    )
  }
}
