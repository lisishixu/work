import Taro, {Component, Config} from '@tarojs/taro'
import {View} from '@tarojs/components'
import './index.scss'
import {AtTabs, AtTabsPane} from "taro-ui";
import OrderItem from "./components/order-item";

export interface Props {

}

export interface State {
  currentTab: number
}

export default class OrderIndex extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: '我的订单'
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0
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

  handleClick = (index) => {
    if (index === 4) {
      Taro.navigateTo({
        url: '/pages/estimate/estimate'
      });
      return;
    }
    this.setState({currentTab: index})
  };


  render() {


    return (
      <View className='index'>


        <AtTabs
          customStyle={{borderTop:'4px solid #f2f2f2'}}
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

              {[0, 1, 2, 3].map(() => {
                return <OrderItem/>
              })}

            </AtTabsPane>
          })}

        </AtTabs>
      </View>
    )
  }
}
