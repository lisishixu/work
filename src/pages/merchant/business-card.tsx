import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import './business-card.scss'
import {AtAvatar} from "taro-ui";
import IconFont from "../../components/iconfont";

export interface Props {

}

export interface State {

}

export default class BusinessCard extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: '我的名片'
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
      <View className='business-card'>

        <View className="card">
          <View className="header">
            <AtAvatar circle size={"large"} className="margin-right--30"/>
            <View className="">
              <Text className="block">爱瞌睡的噜啦啦</Text>
              <Text className="block c--666 f__size--28 margin-top--10">小丫丫美妆店店主</Text>
            </View>
          </View>
          <View className="content">
            <View className="line">
              <IconFont name={"contact"} size={30} color={'#EB3939'}/>
              <Text className="text">1503333333</Text>
            </View>
            <View className="line">
              <IconFont name={"weixin"} size={30} color={'#EB3939'}/>
              <Text className="text">yayameizhuang110</Text>
            </View>
            <View className="line">
              <IconFont name={"weizhi"} size={30} color={'#EB3939'}/>
              <Text className="text">河南省郑州市金水区金水东路雅宝东方国际</Text>
            </View>
          </View>
        </View>

      </View>
    )
  }
}
