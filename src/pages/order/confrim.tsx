import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import './confrim.scss'
import {AtInputNumber} from "taro-ui";
import {GoodsModel} from "../../models/GoodsModel";
import {GoodsData} from "../../data";

export interface Props {

}

export interface State {
  goods: GoodsModel
}

export default class OrderConfrim extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: "确认订单"
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      goods: GoodsData[0]
    }
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
      <View className='confrim'>

        <View className={"cart__item goods"}>
          <Image src={this.state.goods.product_img} className={"goods__cover"}/>
          <View className="cart__content">
            <Text className="block name ellipsis-2">{this.state.goods.product_name}</Text>
            <Text className="block sku ellipsis-2">{this.state.goods.product_original}</Text>
            <Text className="block price">￥{this.state.goods.product_price}</Text>
            <AtInputNumber
              className={"input-number"}
              min={1}
              step={1}
              value={1}
              type={"number"}
              onChange={() => {
                // this.onChangeNum(index, event)
              }}
            />
          </View>
        </View>


      </View>
    )
  }
}
