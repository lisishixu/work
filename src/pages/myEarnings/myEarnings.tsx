import Taro, {Component, Config} from '@tarojs/taro'
import {Image, Text, View,} from '@tarojs/components'
import './myEarnings.scss'
import {AtTabs, AtTabsPane} from "taro-ui";

export interface Props {

}

export interface State {
  current:number
}

export default class myEarnings extends Component<Props, State> {

    config: Config = {
      navigationBarTitleText: "我的收益",
      navigationBarTextStyle: "white",
      navigationBarBackgroundColor: '#F12737'
    };

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
          current: 0,
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
  handleClick (value) {
    this.setState({
      current: value
    })
  }
    render() {
      const tabList = [{ title: '本月交易额' }, { title: '累计收益' }];
        return (
            <View className='myEarnings'>
              <View className={'hx-title'}>
              </View>
              <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
                <AtTabsPane current={this.state.current} index={0} >
                  <View className={'this-month'}>
                    <View className={'c--eb3'} style={'font-weight:blod;font-size:40px'}>1500</View>
                    <View className={'f__size--28 c--333'}>本月交易额（元）</View>
                  </View>
                  <View className={'title-box'}>
                    <View className={'body-nothx'}>
                      <View className={'body-heard'}>
                        <Image src={'../../statics/imgs/banner1.png'} className={'img'}/><Text className={'f__size--26 c--010'}>小小丫头</Text><Text className={'f__size--26 fr c--010'}>订单编号：12256544522323</Text>
                      </View>
                      <View className={'body-body'}>
                        <Image src={'../../statics/imgs/banner1.png'} className={'img'} style={'width:35%'}/>
                        <View style={'width:100%'}>
                          <View>
                            <Text className={'f__size--26 c--333'}>海绵蛋糕,松脆饼,那些形状像厚厚的数字的绵蛋糕饼干分层</Text>
                          </View>
                          <View className={'c--666 f__size--24'} style={'margin:10px 0'}>颜色：彩色，800g</View>
                        </View>
                      </View>
                      <View className={'body-footer'}>
                        <Text className={'f__size--26 c--010'}>2019/10/12 10:10:12</Text>
                        <Text className={'f__size--30 c--eb3 fr'}>+500</Text>
                      </View>
                    </View>
                    <View className={'body-nothx'}>
                      <View className={'body-heard'}>
                        <Image src={'../../statics/imgs/banner1.png'} className={'img'}/><Text className={'f__size--26 c--010'}>小小丫头</Text><Text className={'f__size--26 fr c--010'}>订单编号：12256544522323</Text>
                      </View>
                      <View className={'body-body'}>
                        <Image src={'../../statics/imgs/banner1.png'} className={'img'} style={'width:35%'}/>
                        <View style={'width:100%'}>
                          <View>
                            <Text className={'f__size--26 c--333'}>海绵蛋糕,松脆饼,那些形状像厚厚的数字的绵蛋糕饼干分层</Text>
                          </View>
                          <View className={'c--666 f__size--24'} style={'margin:10px 0'}>颜色：彩色，800g</View>
                        </View>
                      </View>
                      <View className={'body-footer'}>
                        <Text className={'f__size--26 c--010'}>2019/10/12 10:10:12</Text>
                        <Text className={'f__size--30 c--eb3 fr'}>+500</Text>
                      </View>
                    </View>
                  </View>
                </AtTabsPane>
                <AtTabsPane current={this.state.current} index={1}>
                  <View className={'this-month'}>
                    <View className={'c--eb3'} style={'font-weight:blod;font-size:40px'}>1500</View>
                    <View className={'f__size--28 c--333'}>本月交易额（元）</View>
                  </View>
                  <View className={'earnings-detail'}>
                    <View className={'detail-title'}>收益明细</View>
                    <View className={'detail-body'}>
                      <View className={'view'}><Text className={'f__size--28 c--666'}>今日明细：</Text><Text className={'c--eb3 f__size--28'}>0元</Text></View>
                      <View className={'view'}><Text className={'f__size--28 c--666'}>本周收益：</Text><Text className={'f__size--28 c--666'}>0元</Text></View>
                      <View className={'view'}><Text className={'f__size--28 c--666'}>本月收益：</Text><Text className={'f__size--28 c--666'}>0元</Text></View>
                      <View className={'view'}><Text className={'f__size--28 c--666'}>上月收益：</Text><Text className={'f__size--28 c--666'}>0元</Text></View>
                    </View>
                  </View>
                </AtTabsPane>
              </AtTabs>
            </View>
        )
    }
}
