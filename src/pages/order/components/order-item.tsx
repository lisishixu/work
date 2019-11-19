import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Navigator, Image, Button} from '@tarojs/components'
import './order-item.scss'
import IconFont from "../../../components/iconfont";

export interface Props {
  header?: string,//header效果，shop显示店铺、id显示订单号
  showTotal?: boolean,//是否显示订单总金额、总数量
}

export interface State {

}

export default class OrderItem extends Component<Props, State> {

  config: Config = {};

  static defaultProps = {
    header: 'id',
    showTotal: true,
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

  render() {
    // let btns = ``;
    // let state = ``;
    // switch (0) {
    //   case '0':
    //   case 0:
    //     state = `待付款`;
    //     btns = ``;
    //     break;
    //   case '1' :
    //   case  1:
    //     state = `待发货`;
    //     btns = ` `;
    //     break;
    //   case '2' :
    //   case  2:
    //     state = `待收货`;
    //     btns = ``;
    //     break;
    //   case '3' :
    //   case 3:
    //     state = `待评价`;
    //     btns = ``;
    //     break;
    //   case '4':
    //   case 4:
    //     state = `已完成`;
    //     btns = ``;
    //     break;
    // }

    return (
      <View className='order-item'>
        {this.props.header === 'shop' ?
          <View className="header flex a__items--center j__content--spbe">
            <View className="flex a__items--center">
              <View className="inline--block margin-right--10">
                <IconFont name={"shangjia"} color={'#666'} size={30}/>
              </View>
              <Text className="c--666 f__size--28 order__id">巴啦啦小魔仙零食屋</Text>
            </View>
            <Text className="c--eb3 f__size--28">待付款</Text>
          </View> :
          <View className="header flex a__items--center j__content--spbe">
            <View>
              <Text className="mark ">买</Text>
              <Text className="c--666 f__size--28 order__id">订单号：201545748782745875457</Text>
            </View>
            <Text className="c--eb3 f__size--28">待付款</Text>
          </View>}

        <Navigator url={`/pages/order/detail?orderID=`} className="goods flex a__items--center">
          <Image src="http://yanxuan.nosdn.127.net/425c5a909f5806d55c151457a5baa0af.png" className="goods__cover"/>
          <View className="content">
            <View className="flex a__items--center j__content--spbe">
              <Text className="c--333 f__size--30 ellipsis-2">SunRype 莓水果条 14克</Text>
              <Text className="c--333">￥26.8</Text>
            </View>
            <View className="flex a__items--center j__content--spbe margin-top--20">
              <Text className="c--666 f__size--26">规格：14g</Text>
              <Text className="c--666 f__size--26">x 1</Text>
            </View>
          </View>
        </Navigator>
        {this.props.showTotal &&
        <View className="order__total c--666 f__size--28 margin-left--auto">
            <Text className="margin-right--20">共2件商品</Text>
            <Text className="">
                实付：<Text className="c--010 f__size--30">￥39.4</Text>
            </Text>
        </View>}
        <View className="order__btn-wrap ">
          <Button className="btn btn-secondary">取消</Button>
          <Button className="btn btn-highlight">去付款</Button>
        </View>
      </View>
    )
  }
}
