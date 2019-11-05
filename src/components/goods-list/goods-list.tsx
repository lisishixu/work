import Taro, {Component, Config} from '@tarojs/taro'
import {View, Navigator, Text, Image} from '@tarojs/components'
import './goods-list.scss'
import {GoodsModel} from "../../models/GoodsModel";

export interface Props {
  data: GoodsModel[]
  isShowOldPrice?: boolean
  isShowBrokerage?: boolean
}

export interface State {

}

export default class GoodsList extends Component<Props, State> {

  config: Config = {};

  static defaultProps = {
    isShowBrokerage: false,
    isShowOldPrice: true
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

  render() {
    return (
      <View className='goods-list'>
        {this.props.data && this.props.data.map((it, index) => {
          return <Navigator url={`/pages/goods/detail?id=${it.product_id}`}
                            className='goods-item'
                            key={'g' + index}>
            <View>
              <Image src={it.product_img} className={"goods__cover"}/>
              <View style={'padding:5px'}>
                <View style={{height: '40px'}}>
                  <Text className={'goods__name'}>{it.product_name}</Text>
                </View>
                <View>
                  <Text className={"goods__price"}>￥{it.product_price}</Text>
                  {this.props.isShowOldPrice && <Text className={"goods__price--old"}>￥{it.product_original}</Text>}
                  {this.props.isShowBrokerage && <Text className={'goods__brokerage'}>赚{it.product_original}元</Text>}
                </View>
              </View>
            </View>
          </Navigator>
        })}
      </View>
    )
  }
}
