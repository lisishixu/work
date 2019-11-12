import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import './index.scss'

export interface Props {

}

export interface State {

}

export default class OrderIndex extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: '我的订单'
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


      </View>
    )
  }
}
