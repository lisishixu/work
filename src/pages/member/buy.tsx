import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import './buy.scss'

export interface Props {

}

export interface State {

}

export default class MemberBuy extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: '会员购买详情'
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
      <View className='buy'>
        <Text>1</Text>

      </View>
    )
  }
}