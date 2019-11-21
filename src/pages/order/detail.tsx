import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Image, Button} from '@tarojs/components'
import './detail.scss'
import {post} from "../../utils/request";
import api from "../../constants/api";
import {OrderModel} from "../../models/OrderModel";

export interface Props {

}

export interface State extends OrderModel {
  address: string
}

export default class OrderDetail extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: "订单详情"
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      address: "",
      agentId: "",
      endTime: "",
      groupBy: "",
      hide: "",
      insertTime: "",
      orderBalance: "",
      orderBy: "",
      orderId: "",
      orderNum: "",
      orderPayAmount: 0,
      orderPaystyle: "",
      orderState: 0,
      orderTotalMoney: 0,
      orderType: "",
      orderdetails: [],
      pageNum: 0,
      pageSize: 0,
      payTime: "",
      pickerName: "",
      pickerTel: "",
      pickingTime: "",
      sellerId: "",
      sendTime: "",
      startTime: "",
      userId: 0,
      writeOffCode: "",
    }
  }

  componentWillMount() {
    const orderId = this.$router.params.orderID;
    this.setState({orderId});
    this.getDetail(orderId);
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  // 获取订单详情
  getDetail = (orderId = this.state.orderId) => {
    post(api.sellersOrderDetail, {orderId}, res => {
      if (res.code == 200) {
        this.setState(res.data.orders || {});
        this.setState({address: res.data.address})
      }
    })
  };

  // 联系
  onConcact = () => {

  };

  // 取货
  onGet = () => {

  };

  render() {
    let statusText = '';
    let statusDesc = '';
    switch (this.state.orderState) {
      // '订单状态(0:待付款1：待核销2：待评价 3：已完成 4退款中 5退款成功 6退款失败)'
      case 0:
        statusText = '待付款';
        statusDesc = '您的这个订单还没付款呢~';
        break;
      case 1:
        statusText = '待核销';
        statusDesc = '待核销待核销待核销待核销';
        break;
      case 2:
        statusText = '待评价';
        statusDesc = '待评价待评价待评价待评价';
        break;
      case 3:
        statusText = '已完成';
        statusDesc = '感谢您的支持，祝您生活愉快';
        break;
      case 4:
        statusText = '退款中';
        statusDesc = '感谢您的支持，祝您生活愉快';
        break;
      case 5:
        statusText = '退款成功';
        statusDesc = '感谢您的支持，祝您生活愉快';
        break;
      case 6:
        statusText = '退款失败';
        statusDesc = '感谢您的支持，祝您生活愉快';
        break;
    }
    return (
      <View className='detail'>
        <View className="status">
          <Text className="status__text">
            {statusText}
          </Text>
          <Text className="status__desc">
            {statusDesc}
          </Text>
        </View>

        <View className="wrap">

          {this.state.orderdetails.map(goods => {
            return <View className="goods" key={goods.productId}>
              <Image src={goods.productListimg} className="goods__cover"/>
              <View className="goods__info">
                <Text className="goods__title ellipsis-2">{goods.productName}</Text>
                <Text className="goods__desc">{goods.sku}</Text>
                <View className="goods__data">
                  <Text className="goods__price">￥{goods.money}</Text>
                  <Text className="goods__num f__size--28 c--888">x{goods.detailNum}</Text>
                </View>
              </View>
            </View>
          })}
          <View className="take-accountfor">
            <View className="line clearfix">
              <Text className="line__title">自取方法：</Text>
              <Text className="line__content">凭核销码联系商家直接领取</Text>
            </View>
            <View className="line clearfix">
              <Text className="line__title">自取地址：</Text>
              <Text className="line__content">{this.state.address || '---'}</Text>
            </View>
            <View className="line clearfix">
              <Text className="line__title">购买数量：</Text>
              <Text className="line__content">{this.state.orderdetails.length || 0}</Text>
            </View>
          </View>
          <View className="take-code f__size--28 line-through">
            <Text className="">自取方式：</Text>
            <Text className="c--eb3">凭以下券码直接自提，无需任何消费</Text>
            <View className="margin-top--40 text--center">
              <Text className="text f__size--26 c--666">自取码：{this.state.writeOffCode}</Text>
              <Image className="qrcode" src={'http://yanxuan.nosdn.127.net/b58302c109da5f08a66002d50c288b70.png'}/>
            </View>
          </View>
        </View>

        <View className="info">
          <Text className="small-title">订单信息：</Text>
          <Text className="block f__size--28 c--808 margin-bottom--10">支付人： {this.state.pickerName}</Text>
          <Text className="block f__size--28 c--808 margin-bottom--10">
            支付方式：{this.state.orderPaystyle === 0 ? '支付宝' : '微信支付'}
          </Text>
          <Text className="block f__size--28 c--808 margin-bottom--10">订单编号：{this.state.orderNum}</Text>
          <Text className="block f__size--28 c--808 margin-bottom--10">下单时间：{this.state.insertTime}</Text>
          <Text className="block f__size--28 c--808 margin-bottom--10">支付时间：{this.state.payTime}</Text>
        </View>

        <View className="" style={{height: '60px', opacity: 0}}>
        </View>

        <View className="footer">
          <Button className="btn btn-secondary" onClick={this.onConcact}>联系商家</Button>
          <Button className="btn btn-highlight" onClick={this.onGet}>去取货</Button>
        </View>

      </View>
    )
  }
}
