import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import './sales-amount.scss'
import {AtAvatar} from "taro-ui";

export interface Props {

}

export interface State {

}

export default class MerchantSalesAmount extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: '今日销售金额'
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
      <View className='sales-amount'>
        {[0, 1, 2, 3, 4].map(it => {
          return <View className="sales-amount__item" key={'item' + it}>
            <Text className="time">2019/10/12 10:10:12</Text>
            <View className="data">
              <AtAvatar circle/>
              <View className="flex__1 margin-left--20">
                <Text className="block c--333">小小丫头爱吃鱼</Text>
                <Text className="block f__size--28 c--666 margin-top--10">15032543554</Text>
              </View>
              <Text className="c--eb3">支付：￥500</Text>
            </View>
          </View>
        })}
      </View>
    )
  }
}
