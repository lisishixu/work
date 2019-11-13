import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import './detail.scss'

export interface Props {

}

export interface State {

}

export default class OrderDetail extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: "订单详情"
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
      <View className='detail'>


      </View>
    )
  }
}
