import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import './list.scss'

export interface Props {

}

export interface State {

}

export default class GoodsList extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: "商品列表"
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
      <View className='list'>


      </View>
    )
  }
}
