import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import './info-edit.scss'

export interface Props {

}

export interface State {

}

export default class MerchantInfoEdit extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: '商家上传信息'
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
      <View className='info-edit'>


      </View>
    )
  }
}
