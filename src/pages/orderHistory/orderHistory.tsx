import Taro, {Component, Config} from '@tarojs/taro'
import {Image, Text, View} from '@tarojs/components'
import './orderHistory.scss'
import {AtCurtain, AtSearchBar} from "taro-ui";

export interface Props {

}

export interface State {
  value: string
  isOpened: boolean
  data: any[]
  current: number
}

export default class OrderHistory extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: "订单记录",
    navigationBarTextStyle: "white",
    navigationBarBackgroundColor: '#F12737'
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isOpened: false,
      data: [0, 1, 2, 3],
      current: 0
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

  onChange(value) {
    this.setState({
      value: value
    })
  }

  lookDetai = () => {
    this.setState({
      isOpened: true,
    })
  };

  onClose() {
    this.setState({
      isOpened: false
    })
  }

  render() {
    return (
      <View className='orderHistrory'>
        <View className={'orderHistrory-title'}>
          <AtSearchBar
            value={this.state.value}
            onChange={this.onChange.bind(this)}
          />
        </View>
        <View className={'order-content'}>
          <View className={'content-title'}>
            <View className={'f__size--24 c--010'}>姓名</View>
            <View className={'f__size--24 c--010'}>消费金额(元)</View>
            <View className={'f__size--24 c--010'}>状态</View>
            <View className={'f__size--24 c--010'}>下单时间</View>
            <View className={'f__size--24 c--010'}>更多</View>
          </View>
          <View className={'order-body'}>
            <View className={'f__size--24 c--010'}>小小丫头</View>
            <View className={'f__size--24 c--010'}>500</View>
            <View className={'f__size--24 c--010'}>已核销</View>
            <View className={'f__size--24 c--010'}>2019/10/10 10:10:20 </View>
            <View className={'f__size--24 c--eb3 '} onClick={() => this.lookDetai()}>查看</View>
          </View>
          <AtCurtain
            isOpened={this.state.isOpened}
            onClose={this.onClose.bind(this)}
            closeBtnPosition={'top-right'}
          >
            <View className={'order-footer'}>
              <View className={'f__size--30 c--010'}>订单记录详情</View>
              <View className={'footer--line'}>
                <Text className={'f__size--28 c--010'}>订单编号：12256544522323</Text><Text className={'f__size--28 fr'} style={'color:#3AD362'}>已核销</Text>
              </View>
              <View className={'footer--center'}>
                <Image src={'../../statics/imgs/banner1.png'} className={'img'}/>
                <View style={'height:75px'}>
                  <View className={'margin-bottom--20'}><Text className={'f__size--26 c--333'} style={'width:70%;display:inline-block;'}>海绵蛋糕,松脆饼海绵蛋糕,松脆饼 </Text><Text className={'f__size--26 c--eb3 fr'}>￥233</Text></View>
                  <View><Text className={'f__size--24 c--666'}>规格：500g</Text><Text className={'fr f__size--24 c--666'}>X1</Text></View>
                </View>
              </View>
              <View className={'last-box'}>
                <View className={'f__size--28 c--010'}>订单信息 </View>
                <View className={'f__size--26 c--010'}>支付人：王小丫</View>
                <View className={'f__size--26 c--010'}>支付方式：微信</View>
                <View className={'f__size--26 c--010'}>订单编号：154561154454</View>
                <View className={'f__size--26 c--010'}>创建时间：2019/10/1 10:00:00</View>
                <View className={'f__size--26 c--010'}>下单时间：2019/10/1 10:00:00</View>
                <View className={'f__size--26 c--010'}>取货时间：2019/10/1 10:00:00</View>
              </View>
            </View>
          </AtCurtain>
        </View>
      </View>
    )
  }
}
