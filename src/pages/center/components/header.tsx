import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Button, Image} from '@tarojs/components'
import './header.scss'
import {AtAvatar, AtRate} from "taro-ui";
import IconFont from "../../../components/iconfont";
import {thisVoid} from "../../../utils/helper";

export interface Props {
  // user: UserModel
  identity: string
  onSwitch: Function
}

export interface State {

}

export default class CenterHeader extends Component<Props, State> {

  config: Config = {};

  static defaultProps = {
    identity: 'user',
    onSwitch: thisVoid
  };

  static options = {
    addGlobalClass: true
  };

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

  // 点击切换身份按钮
  onSwitch = () => {
    switch (this.props.identity) {
      case 'user':
        this.toMerchant();
        break;
      case 'merchant':
        this.toMerchantAdmin();
        break;
    }
  };

  // 切换至商家
  toMerchant = () => {
    //执行回调切换身份
    this.props.onSwitch('merchant')
  };

  // 切换至后台
  toMerchantAdmin = () => {

  };

  render() {
    // if (!this.props.user) return;
    return (
      <View className="header">
        <View className="flex a__items--center">
          <AtAvatar circle size={"large"}/>
          <View className="user">
            <View className="user__name flex a__items--center">
              <Text>包子君</Text>
              {this.props.identity === 'agent' &&
              <Image className={"user__icon"} src={'/statics/imgs/center/icon-crown.png'}/>}
              {this.props.identity === 'merchant' &&
              <AtRate className="margin-left--10" max={4} size={14} value={4}/>}
            </View>
            <Text className="user__id">ID:12345674878674</Text>

          </View>
          {this.props.identity !== 'agent' &&
          <Button className="btn btn-switch" onClick={this.onSwitch}>
              <View className="line margin-right--10">
                  <IconFont name={"qiehuan"} size={30} color={'white'}/>
              </View>
              <Text>{this.props.identity === 'user' ? "切换至商家" : "切换至后台"}</Text>
          </Button>}
        </View>
      </View>
    )
  }
}
