import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Navigator, Button} from '@tarojs/components'
import './index.scss'
import {AtAvatar} from "taro-ui";
import IconFont from "../../components/iconfont";

export interface Props {

}

export interface State {

}

export default class Index extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: '商家后台'
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

        <View className="header">
          <div className="header-box">
            <View className="avatar">
              <AtAvatar circle size={"large"}/>
            </View>
            <Text className="username">是悠悠啊</Text>
          </div>
        </View>


      </View>
    )
  }
}
