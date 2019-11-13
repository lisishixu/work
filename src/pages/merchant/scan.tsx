import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Camera, Button, Navigator} from '@tarojs/components'
import './scan.scss'

export interface Props {

}

export interface State {

}

export default class Scan extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: "扫一扫",
    navigationBarTextStyle: "white",
    navigationBarBackgroundColor: '#1d1b19'
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

  onError = () => {
    Taro.showModal({
      title: '无法使用',
      content: '需要在微信6.7.3以上版本中授权才能使用扫码功能，如果无法使用可切换至手动输入核销码。'
    })
  };

  onScanCode = () => {

  };

  render() {
    return (
      <View className='scan'>

        {/* todo IDE 暂不支持camera组件，需在真机调试。体验appid无法真机操作，需要等待申请小程序后*/}
        <Camera className="camera" mode="scanCode" onError={this.onError} devicePosition={"back"}
                onScanCode={this.onScanCode}/>
        <Text className="tip">请将核销码置于框内，耐心等待</Text>

        <View className="page-bottom">
          <Button className="btn btn-validation">验证</Button>
          <Navigator className="f__size--30" style={{textDecoration: "underline"}}>手动输码</Navigator>
        </View>

      </View>
    )
  }
}
