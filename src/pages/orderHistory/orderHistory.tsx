import Taro, {Component, Config} from '@tarojs/taro'
import {View} from '@tarojs/components'
import './orderHistory.scss'
import {AtSearchBar} from "taro-ui";

export interface Props {

}

export interface State {
  value:string
}

export default class OrderHistory extends Component<Props, State> {

    config: Config = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
          value: ''
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
  onChange (value) {
    this.setState({
      value: value
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
                  <View className={'f__size--24 c--010'}>王小小</View>
                  <View className={'f__size--24 c--010'}>500</View>
                  <View className={'f__size--24 c--010'}>已核销</View>
                  <View className={'f__size--24 c--010'}>2019/10/10 10:10:20 </View>
                  <View className={'f__size--24 c--eb3 '}>查看</View>
                </View>
              </View>
            </View>
        )
    }
}
