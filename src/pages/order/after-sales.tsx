import Taro, {Component, Config} from '@tarojs/taro'
import {View} from '@tarojs/components'
import './after-sales.scss'
import OrderItem from "./components/order-item";

export interface Props {

}

export interface State {

}

export default class AfterSales extends Component<Props, State> {

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
      <View className='after-sales'>
        <OrderItem header={'shop'} showTotal={false}/>
        <OrderItem header={'shop'} showTotal={false}/>
      </View>
    )
  }
}
