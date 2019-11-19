import Taro, {Component, Config} from '@tarojs/taro'
import {View, Navigator, Text, Image, Button} from '@tarojs/components'
import './goods-list--card.scss'
import {GoodsModel} from "../../models/GoodsModel";
import IconFont from "../iconfont";

export interface Props {
  data: GoodsModel[]
  isShowOldPrice?: boolean
  isShowBrokerage?: boolean
  isShowShare?: boolean
}

export interface State {

}

export default class GoodsListCard extends Component<Props, State> {

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
      <View className='goods-list--card'>
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
                <View className="flex a__items--center j__content--spbe">
                  <View className="flex__1">
                    <Text className={"goods__price"}>￥{it.product_price}</Text>
                    {this.props.isShowOldPrice && <Text className={"goods__price--old"}>￥{it.product_original}</Text>}
                    {this.props.isShowBrokerage && <Text className={'goods__brokerage'}>赚{it.product_original}元</Text>}
                  </View>
                  {this.props.isShowShare &&
                  <Button className="btn" onClick={this.onShare.bind(it)}>
                      <IconFont name={"fenxiang-1"} color={'#F12737'} size={30}/>
                  </Button>}
                </View>
              </View>
            </View>
          </Navigator>
        })}
      </View>
    )
  }
}
