import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Image, Button} from '@tarojs/components'
import './qrcode.scss'
import {AtAvatar} from "taro-ui";

export interface Props {

}

export interface State {

}

export default class MerchantQrcode extends Component<Props, State> {

  config: Config = {};

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
      <View className='qrcode'>

        <View className="card">
          <View className="header">
            <AtAvatar circle size={"large"} className="margin-right--30"/>
            <View className="">
              <Text className="block">爱瞌睡的噜啦啦</Text>
              <Text className="block c--666 f__size--28 margin-top--10">小丫丫美妆店店主</Text>
            </View>
          </View>
          <View className="qrcode-box">
            <Image src={''} className={"qrcode__img"}/>
          </View>
        </View>

        <View className="btns">
          <Button className="btn btn-share">分享我的名片</Button>
        </View>

      </View>
    )
  }
}
