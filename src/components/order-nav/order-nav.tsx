import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Navigator} from '@tarojs/components'
import './order-nav.scss'
import IconFont from "../iconfont";

export interface Props {
  data: any
}

export interface State {

}

export default class OrderNav extends Component<Props, State> {

  config: Config = {};

  static defaultProps = {};

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

  render() {
    return (
      <View className="order-nav">
        <View className="order-nav__header">
          <Text>我的订单</Text>
          <Navigator url={`/pages/order/index`} className="btn btn-all">
            <Text className={"text"}>全部</Text>
            <View className="line margin-left--10">
              <IconFont name={"jiantou_xiangyouliangci_o"} size={30} color={'#ccc'}/>
            </View>
          </Navigator>
        </View>
        <View className="flex order-nav__main">
          <Navigator className="link" url={`/pages/order/index?type=payment`}>
            <Text className="status">待付款</Text>
            <Text className="number">{this.props.data.waiting || 0}</Text>
          </Navigator>
          <Navigator className="link" url={`/pages/order/index?type=pickup`}>
            <Text className="status">待取货</Text>
            <Text className="number">{this.props.data.pickup || 0}</Text>
          </Navigator>
          <Navigator className="link" url={`/pages/order/index?type=completed`}>
            <Text className="status">已完成</Text>
            <Text className="number">{this.props.data.success || 0}</Text>
          </Navigator>
          <Navigator className="link" url={`/pages/estimate/estimate`}>
            <Text className="status">评价</Text>
            <Text className="number">{this.props.data.evaluation || 0}</Text>
          </Navigator>
          <Navigator className="link" url={`/pages/order/index?type=after-sales`}>
            <Text className="status">退款/售后</Text>
            <Text className="number">{this.props.data.reimburse || 0}</Text>
          </Navigator>
        </View>
      </View>
    )
  }
}
