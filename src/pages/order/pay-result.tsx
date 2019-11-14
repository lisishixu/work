import Taro, {Component, Config} from '@tarojs/taro'
import {View, Button, Text} from '@tarojs/components'
import './pay-result.scss'
import StateTip from "../../components/state-tip/state-tip";

export interface Props {

}

export interface State {

}

export default class PayResult extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: '付款成功'
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

  onBack = () => {
    Taro.navigateTo({
      url: `/pages/merchant/index`
    })
  };

  render() {
    return (
      <View className='pay-result'>
        <StateTip size={"large"} imgUrl={''}>
          <Text className="title">付款成功</Text>
          <Text className="desc">恭喜您，您已开店成功！</Text>
          <Button className="btn" onClick={this.onBack}>查看我的店铺</Button>
        </StateTip>
      </View>
    )
  }
}
