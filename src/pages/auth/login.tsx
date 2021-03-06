import Taro, {Component, Config} from '@tarojs/taro'
import {View, Button} from '@tarojs/components'
import './login.scss'
import {getDATA, wxLogin} from "../../utils/helper";

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
    wxLogin();
    Taro.showLoading({
      title: '登陆中',
      mask: true
    });
    const Timer = setInterval(() => {
      if (Taro.getStorageSync('token')) {
        clearInterval(Timer);
        Taro.hideLoading();
        const previousPage = getDATA('previousPage');
        const options = previousPage.options ? decodeURIComponent(previousPage.options) : '';
        Taro.reLaunch({
          url: `/${previousPage.route}${options}`
        })
      }
    }, 1000)
  };

  render() {
    return (
      <View className='login'>


        <Button openType={"getUserInfo"} onGetUserInfo={this.onGetUserInfo}>立即授权</Button>

      </View>
    )
  }
}
