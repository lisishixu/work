import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Navigator, Image, Button} from '@tarojs/components'
import './order-item.scss'
import IconFont from "../../../components/iconfont";
import {OrderModel} from "../../../models/OrderModel";

export interface Props extends OrderModel {
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
    orderdetails: []
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

  // 前往发布动态页面
  goPost = (productID, event) => {
    Taro.navigateTo({
      url: `/pages/publish/index?goodsID=${productID}`
    });
    event.stopPropagation();
  };

  // 取消订单
  onCancel = () => {

  };

  // 发起支付
  onPay = () => {

  };

  render() {
    // let btns = ``;
    let orderState = ``;
    switch (this.props.orderState) {
      // '订单状态(0:待付款1：待核销2：待评价 3：已完成 4退款中 5退款成功 6退款失败)'
      case 0:
        orderState = '待付款';
        break;
      case 1:
        orderState = '待核销';
        break;
      case 2:
        orderState = '待评价';
        break;
      case 3:
        orderState = '已完成';
        break;
      case 4:
        orderState = '退款中';
        break;
      case 5:
        orderState = '退款成功';
        break;
      case 6:
        orderState = '退款失败';
        break;
    }

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
            <Text className="c--eb3 f__size--28">{orderState}</Text>
          </View> :
          <View className="header flex a__items--center j__content--spbe">
            <View>
              <Text className="mark ">买</Text>
              <Text className="c--666 f__size--28 order__id">订单号：{this.props.orderNum}</Text>
            </View>
            <Text className="c--eb3 f__size--28">{orderState}</Text>
          </View>}


        {this.props.orderdetails && this.props.orderdetails.map(goods => {
          return <Navigator url={`/pages/order/detail?orderID=${this.props.orderId}`}
                            className="goods flex a__items--center"
                            key={goods.detailId}>
            <View className="cover-warp" onClick={this.goPost.bind(this, goods.productId)}>
              <Image src={goods.productListimg} className="goods__cover"/>
              <View className="btn-post">
                <IconFont name={'tianjiazhaopian'} color={'white'} size={22}/>
                <Text className="margin-left--10">发布素材</Text>
              </View>
            </View>
            <View className="content">
              <View className="flex a__items--center j__content--spbe">
                <Text className="c--333 f__size--30 ellipsis-2">{goods.productName}</Text>
                <Text className="c--333">￥{goods.money}</Text>
              </View>
              <View className="flex a__items--center j__content--spbe margin-top--20">
                <Text className="c--666 f__size--26">规格：{goods.sku}</Text>
                <Text className="c--666 f__size--26">x 1</Text>
              </View>
            </View>
          </Navigator>
        })}
        {this.props.showTotal &&
        <View className="order__total c--666 f__size--28 margin-left--auto">
            <Text className="margin-right--20">共{this.props.orderdetails.length || 1}件商品</Text>
            <Text className="">
                实付：<Text className="c--010 f__size--30">￥{this.props.orderTotalMoney}</Text>
            </Text>
        </View>}
        <View className="order__btn-wrap ">
          <Button className="btn btn-secondary" onClick={this.onCancel}>取消</Button>
          <Button className="btn btn-highlight" onClick={this.onPay}>去付款</Button>
        </View>
      </View>
    )
  }
}
