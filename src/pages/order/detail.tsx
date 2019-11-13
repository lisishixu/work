import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Image, Button} from '@tarojs/components'
import './detail.scss'

export interface Props {

}

export interface State {

}

export default class OrderDetail extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: "订单详情"
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
    let statusText = '';
    let statusDesc = '';
    switch (1 + 1) {
      case 0:
        statusText = '待付款';
        statusDesc = '您的这个订单还没付款呢~';
        break;
      case 1:
        statusText = '待发货';
        statusDesc = ' 货物即将发出，不要着急哦';
        break;
      case 2:
        statusText = '待收货';
        statusDesc = '货物正在运输中，很快就到哦';
        break;
      case 3:
        statusText = '待评价';
        statusDesc = '感谢您的支持，祝您生活愉快';
        break;
      case 4:
        statusText = '已完成';
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
          <View className="goods">
            <Image src="http://yanxuan.nosdn.127.net/b58302c109da5f08a66002d50c288b70.png" className="goods__cover"/>
            <View className="goods__info">
              <Text className="goods__title ellipsis-2">海绵蛋糕,松脆饼,那些形状像厚厚的数字的绵蛋糕饼干分层</Text>
              <Text className="goods__desc">颜色：彩色，800g</Text>
              <View className="goods__data">
                <Text className="goods__price">￥169</Text>
                <Text className="goods__num f__size--28 c--888">x2</Text>
              </View>
            </View>
          </View>
          <View className="take-accountfor">
            <View className="line clearfix">
              <Text className="line__title">自取方法：</Text>
              <Text className="line__content">凭核销码联系商家直接领取</Text>
            </View>
            <View className="line clearfix">
              <Text className="line__title">自取地址：</Text>
              <Text className="line__content">河南省郑州市金水东路雅宝东方国际2号楼河南省郑州市金水东路雅宝东方国际2号楼</Text>
            </View>
            <View className="line clearfix">
              <Text className="line__title">购买数量：</Text>
              <Text className="line__content">2</Text>
            </View>
          </View>
          <View className="take-code f__size--28 line-through">
            <Text className="">自取方式：</Text>
            <Text className="c--eb3">凭以下券码直接自提，无需任何消费</Text>
            <View className="margin-top--40 text--center">
              <Text className="text f__size--26 c--666">自取码：2545752742857</Text>
              <Image className="qrcode" src={'http://yanxuan.nosdn.127.net/b58302c109da5f08a66002d50c288b70.png'}/>
            </View>
          </View>
        </View>

        <View className="info">
          <Text className="small-title">订单信息：</Text>
          <Text className="block f__size--28 c--808 margin-bottom--10">支付人： 田妞妞</Text>
          <Text className="block f__size--28 c--808 margin-bottom--10">支付方式：微信支付</Text>
          <Text className="block f__size--28 c--808 margin-bottom--10">订单编号：1542545245241254254</Text>
          <Text className="block f__size--28 c--808 margin-bottom--10">下单时间：2018-02-14 12:25:44</Text>
          <Text className="block f__size--28 c--808 margin-bottom--10">支付时间：2018-02-14 12:25:44</Text>
        </View>

        <View className="" style={{height: '60px', opacity: 0}}>
        </View>

        <View className="footer">
          <Button className="btn btn-secondary">联系商家</Button>
          <Button className="btn btn-highlight">去取货</Button>
        </View>

      </View>
    )
  }
}
