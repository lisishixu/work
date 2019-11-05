import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import './buy-guide.scss'
import IconFont from "../iconfont";

export interface Props {

}

export interface State {

}

export default class BuyGuide extends Component<Props, State> {

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
      <View className='guide buy-guide'>

        <View className="guide-title">
          <Text>五联创客购物指南</Text>
          <View className="iconfont">
            <IconFont name={'xiala'} color={'#F12737'} size={26}/>
          </View>
        </View>
        <View>
          <Text className="guide__block">1.消费者下单</Text>
          <Text className="guide__content">每天下单时间：00:00 - 23:00</Text>

          <Text className="guide__block">2.货物自提</Text>
          <Text className="guide__content">消费者根据自己下单相对应的门店，凭自提码提货.提货时间根据门店的营业时间</Text>

          <Text className="guide__block">3.100%售后</Text>
          <Text className="guide__content">消费者遇到任何问题，可以直接与下单的门店沟通自取</Text>
        </View>

      </View>
    )
  }
}
