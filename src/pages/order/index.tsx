import Taro, {Component, Config} from '@tarojs/taro'
import {View} from '@tarojs/components'
import './index.scss'
import {AtTabs, AtTabsPane} from "taro-ui";
import OrderItem from "./components/order-item";
import {post} from "../../utils/request";
import api from "../../constants/api";
import {OrderModel} from "../../models/OrderModel";

export interface Props {

}

export interface State {
  currentTab: number,
  orderList: OrderModel[]
}

export default class OrderIndex extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: '我的订单'
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      orderList: []
    }
  }

  componentWillMount() {
    const type = this.$router.params.type;//判断是我的还是Ta的
    let currentTab = 0;
    switch (type) {
      case 'payment':
        currentTab = 1;
        break;
      case 'pickup':
        currentTab = 3;
        break;
      case 'completed':
        currentTab = 0;
        break;
      case 'evaluation':
        currentTab = 5;
        break;
      case 'after-sales':
        currentTab = 0;
        break;
    }
    this.setState({currentTab});
    this.getOrderList();
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  handleClick = (index) => {
    if (index === 4) {
      Taro.navigateTo({
        url: '/pages/estimate/estimate'
      });
      return;
    }
    this.setState({currentTab: index})
  };


  // 获取订单列表数据
  getOrderList = () => {
    post(api.sellersSearchOrder, {orderState: 0}, res => {
      if (res.code == 200) {
        this.setState({orderList: res.data.list || []})
      }
    })
  };

  render() {


    return (
      <View className='index'>


        <AtTabs
          customStyle={{borderTop: '4px solid #f2f2f2'}}
          current={this.state.currentTab}
          tabList={[
            {title: '全部',},
            {title: '待付款'},
            {title: '待发货'},
            {title: '待收货'},
            {title: '待评价'},
          ]}
          onClick={this.handleClick.bind(this)}>

          {[0, 1, 2, 3, 4, 5].map((num) => {
            return <AtTabsPane key={'goodslist' + num}
                               current={this.state.currentTab}
                               index={num}>

              {this.state.orderList.map((it) => {
                return <OrderItem {...it}/>
              })}

            </AtTabsPane>
          })}

        </AtTabs>
      </View>
    )
  }
}
