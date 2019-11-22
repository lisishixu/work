import Taro, {Component, Config} from '@tarojs/taro'
import {View, Button} from '@tarojs/components'
import './login.scss'
import {wxLogin} from "../../utils/helper";

export interface Props {

}

export interface State {

}

export default class WechatLogin extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: "授权登陆"
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


  onGetUserInfo = () => {
    // const previousPage = getDATA('previousPage');
    // if (previousPage.type === 'switch') {
    //
    // }
    wxLogin();
    Taro.switchTab({
      url: '/pages/index/index'
    })
  };

  render() {
    return (
      <View className='login'>


        <Button openType={"getUserInfo"} onGetUserInfo={this.onGetUserInfo}>立即授权</Button>

      </View>
    )
  }
}
