import Taro, {Component, Config} from '@tarojs/taro'
import {View} from '@tarojs/components'
import './index.scss'
import {AtAvatar} from "taro-ui";

export interface Props {

}

export interface State {

}

export default class Index extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: '关于我们'
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
      <View className='about'>
        <AtAvatar circle text={'LOGO'} className={"logo"}/>
        <View className="text">
          阿里巴巴批发网批发网是全球企业间( B2B)电子商务的
          著名品牌，为天下网商提供海量商机信息和便捷安全的
          在线交易市场。从海量的商品中甄选热销新品、优质好
          商，为买家采购批发提供风向标。优质折扣货源，爆款
          清仓开抢，进货更省心，采购批发就上阿里巴巴！
        </View>
      </View>
    )
  }
}
