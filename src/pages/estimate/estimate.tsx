import Taro, {Component, Config} from '@tarojs/taro'
import {Image, Text, View} from '@tarojs/components'
import './estimate.scss'
import {AtTabs, AtTabsPane} from "taro-ui";

export interface Props {

}

export interface State {
  current: number
}

export default class Estimate extends Component<Props, State> {

  config: Config = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
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

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  render() {
    const tabList = [{title: '待评价'}, {title: '已评价'}]
    return (
      <View className='estimate'>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0}>
            <View>
              <View style='padding: 15px 0px 0;'>
                <Text className={'f__size--24 c--666 margin-left--30'}>订单编号：457888945612371</Text>
                <View className={'estimate-box'}>
                  <Image src={'../../statics/imgs/banner1.png'} className={'img'}/>
                  <View>
                    <Text className={'f__size--24 c--999 inline--block'} style={'width:70%'}>拉拉美食特供自热火锅套餐一人份
                      美味专属势不可挡</Text><Text className={'f__size--24 c--eb3 fr'}>￥29.80</Text>
                    <View>
                      <Text className={'f__size--24 c--666'}>数量：800g</Text><Text
                      className={'f__size--24 c--666 fr'}>x1</Text>
                    </View>
                    <View className={'view'}>评价</View>
                  </View>
                </View>
              </View>
              <View style='padding: 15px 0px 0;'>
                <Text className={'f__size--24 c--666 margin-left--30'}>订单编号：457888945612371</Text>
                <View className={'estimate-box'}>
                  <Image src={'../../statics/imgs/banner1.png'} className={'img'}/>
                  <View>
                    <Text className={'f__size--24 c--999 inline--block'} style={'width:70%'}>拉拉美食特供自热火锅套餐一人份
                      美味专属势不可挡</Text><Text className={'f__size--24 c--eb3 fr'}>￥29.80</Text>
                    <View>
                      <Text className={'f__size--24 c--666'}>数量：800g</Text><Text
                      className={'f__size--24 c--666 fr'}>x1</Text>
                    </View>
                    <View className={'view'}>评价</View>
                  </View>
                </View>
              </View>
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View>
              <View style='padding: 15px 0px 0;'>
                <Text className={'f__size--24 c--666 margin-left--30'}>订单编号：457888945612371</Text>
                <View className={'estimate-box'}>
                  <Image src={'../../statics/imgs/banner1.png'} className={'img'}/>
                  <View>
                    <Text className={'f__size--24 c--999 inline--block'} style={'width:70%'}>拉拉美食特供自热火锅套餐一人份
                      美味专属势不可挡</Text><Text className={'f__size--24 c--eb3 fr'}>￥29.80</Text>
                    <View>
                      <Text className={'f__size--24 c--666'}>数量：800g</Text><Text
                      className={'f__size--24 c--666 fr'}>x1</Text>
                    </View>
                    <View className={'views'}>查看</View>
                  </View>
                </View>
              </View>
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
