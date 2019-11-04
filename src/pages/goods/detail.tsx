import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Text, Progress} from '@tarojs/components'
import './detail.scss'
import {GoodsModel} from "../../models/GoodsModel";
import {GoodsData} from "../../data";
import {AtCountdown, AtProgress} from "taro-ui";

export interface Props {

}

export interface State extends GoodsModel {

}

export default class GoodsDetail extends Component<Props, State> {

  config: Config = {
    navigationStyle: 'custom'
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = GoodsData[0] || {}
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
      <View className='detail'>
        <Image src={this.state.product_img} className={"goods__cover"}>
        </Image>
        <View className="container seckill">
          <View className="seckill-price">
            <View className="seckill-price__now">
              <Text className={""}>￥16.8</Text>
              <Text className={"tag"}>疯狂价</Text>
            </View>
            <View className="seckill-price__old">
              <Text>原价</Text>
              <Text className={"text--line-through"}>￥16.8</Text>
            </View>
          </View>
          <View className="seckill-time">
            <View>距结束
              <AtCountdown
                className={"countdown"}
                format={{ hours: ':', minutes: ':', seconds: '' }}
                seconds={999}
                // onTimeUp={this.onTimeUp.bind(this)}
              />
            </View>
            <Progress
              className={"progress"}
              active
              percent={50}
              strokeWidth={10}
              color={'#FFA800'}
              activeColor={'#ff7d0c'}
              borderRadius={8}
            >
              <Text className={"progress__text"}>三生三世</Text>
            </Progress>

          </View>
        </View>
      </View>
    )
  }
}
