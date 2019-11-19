import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import './after-sales.scss'

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

      </View>
    )
  }
}
