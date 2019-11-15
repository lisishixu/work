import Taro, {Component, Config} from '@tarojs/taro'
import {Image, Text, View} from '@tarojs/components'
import './tgEarnings.scss'
import {AtTabs, AtTabsPane} from "taro-ui";

export interface Props {

}

export interface State {
  current:number
}

export default class TgEarnings extends Component<Props, State> {

    config: Config = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
          current:0
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
      const tabList = [{ title: '推广收益' }, { title: '店铺收益' }];
        return (
            <View className='tgEarnings'>
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
                        推广收益
                      </View>
                      <View>
                        <View style={'padding:10px 0 0'}>
                          <Text className={'f__size--26 c--010'}>ID：225631441222</Text>
                          <Text className={'fr f__size--26 c--010'}>2019/10/12 10:10:26</Text>
                        </View>
                        <View className={'body-body'}>
                          <Image src={'../../../statics/imgs/banner1.png'} className={'img'} style={'width:35%;border-radius:50%'}/>
                          <View style={'width:100%;align-items:center'} className={'flex'}>
                            <View className={'f__size--30 c-010'}>
                              用户姓名
                            </View>
                            <View className={'c--eb3'} style={'margin:10px 0;flex:1;text-align:right;font-size:18px'}>+500</View>
                          </View>
                        </View>
                      </View>
                      <View>
                        <View style={'padding:10px 0 0'}>
                          <Text className={'f__size--26 c--010'}>ID：225631441222</Text>
                          <Text className={'fr f__size--26 c--010'}>2019/10/12 10:10:26</Text>
                        </View>
                        <View className={'body-body'}>
                          <Image src={'../../../statics/imgs/banner1.png'} className={'img'} style={'width:35%;border-radius:50%'}/>
                          <View style={'width:100%;align-items:center'} className={'flex'}>
                            <View className={'f__size--30 c-010'}>
                              用户姓名
                            </View>
                            <View className={'c--eb3'} style={'margin:10px 0;flex:1;text-align:right;font-size:18px'}>+500</View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </AtTabsPane>
                <AtTabsPane current={this.state.current} index={1}>
                  <View className={'this-month'}>
                    <View className={'c--eb3'} style={'font-weight:blod;font-size:40px'}>1500</View>
                    <View className={'f__size--28 c--333'}>本月交易额（元）</View>
                  </View>
                  <View className={'title-box'}>
                    <View className={'body-nothx'}>
                      <View className={'body-heard'}>
                        店铺收益
                      </View>
                      <View className={'body-body'}>
                        <Image src={'../../../statics/imgs/banner1.png'} className={'img'} style={'width:35%'}/>
                        <View style={'width:100%'}>
                          <View>
                            <Text className={'f__size--26 c--333'}>海绵蛋糕,松脆饼,那些形状像厚厚的数字的绵蛋糕饼干分层</Text>
                          </View>
                          <View className={'c--666 f__size--24'} style={'margin:10px 0'}>颜色：彩色，800g</View>
                        </View>
                      </View>
                      <View className={'body-footer'}>
                        <Text className={'f__size--26 c--010'}>订单编号：12256544522323</Text>
                        <Text className={'f__size--30 c--eb3 fr'}>+500</Text>
                      </View>
                    </View>
                  </View>
                </AtTabsPane>
              </AtTabs>
            </View>
        )
    }
}
