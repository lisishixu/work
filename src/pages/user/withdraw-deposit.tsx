import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import './withdraw-deposit.scss'

export interface Props {

}

export interface State {

}

export default class WithdrawDeposit extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: '提现'
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
      <View className='withdraw-deposit'>

        <View className="container">
          <Text>可提现金额：5000元</Text>
          <View className="">

          </View>
        </View>


      </View>
    )
  }
}
