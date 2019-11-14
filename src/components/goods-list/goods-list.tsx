import Taro, {Component, Config} from '@tarojs/taro'
import {View, Navigator, Text, Image} from '@tarojs/components'
import './goods-list.scss'
import {GoodsModel} from "../../models/GoodsModel";

export interface Props {
  data: GoodsModel[]
  isShowOldPrice?: boolean
  isShowBrokerage?: boolean
  isShowShare?: boolean
}

export interface State {

}

export default class GoodsList extends Component<Props, State> {

  config: Config = {};

  static defaultProps = {
    isShowBrokerage: false,
    isShowOldPrice: true,
    isShowShare: false
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

  onShare = (item, event) => {
    console.log(item);
    Taro.showToast({
      icon: 'none',
      title: '触发分享'
    });
    event.stopPropagation();
  };

  render() {
    return (
      <View className='container goods-list'>
        {this.props.data && this.props.data.map((it, index) => {
          return <Navigator url={`/pages/goods/detail?id=${it.product_id}`}
                            className='goods-item'
                            key={'g' + index}>

            <Image src={it.product_img} className={"goods__cover"}/>
            <View className="goods__content">
              <Text className="goods__name ellipsis-2">{it.product_name}</Text>
              <Text className="goods__desc ellipsis-2">{it.product_name}描述描述描述描述描述描述描述</Text>
              <View className="goods__data">
                <Text className={"goods__price"}>￥{it.product_price}</Text>
                <Text className={"goods__sale"}>520人已付款</Text>
              </View>
            </View>
          </Navigator>
        })}
      </View>
    )
  }
}
