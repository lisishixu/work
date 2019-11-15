import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import './hxRecord.scss'
import {AtTabs, AtTabsPane} from "taro-ui";

export interface Props {

}

export interface State {
  current:number
}

export default class HxRecord extends Component<Props, State> {

    config: Config = {};

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
      const tabList = [{ title: '待核销' }, { title: '已核销' }];
        return (
            <View className='hxRecord'>
              <View className={'hx-title'}>
              </View>
                <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
                  <AtTabsPane current={this.state.current} index={0} >
                    <View className={'title-box'}>
                      <View className={'body-nothx'}>
                        <View className={'body-heard'}>
                          <Text className={'f__size--26 c--010'}>订单编号：12256544522323</Text><Text className={'f__size--26 fr c--eb3'}>待核销</Text>
                        </View>
                        <View className={'body-body'}>
                          <Image src={'../../statics/imgs/banner1.png'} className={'img'} style={'width:35%'}/>
                          <View style={'width:100%'}>
                            <View>
                              <Text className={'f__size--26 c--333'}>海绵蛋糕,松脆饼  500g</Text>
                              <Text className={'f__size--30 c--eb3 fr'}>￥233</Text>
                            </View>
                            <View className={'c--666 f__size--24'} style={'margin:10px 0'}>取货人：张小飞</View>
                            <View>
                              <Text className={'c--666 f__size--24'}>手机号：15039988559</Text>
                              <Text className={'fr c--666 f__size--24'}>X1</Text>
                            </View>
                          </View>
                        </View>
                        <View className={'body-footer'}>
                          <Text className={'f__size--26 c--010'}>取货时间</Text>
                          <Text className={'f__size--26 c--010 fr'}>2019/10/12 10:10:10</Text>
                        </View>
                      </View>
                      <View className={'body-nothx'}>
                        <View className={'body-heard'}>
                          <Text className={'f__size--26 c--010'}>订单编号：12256544522323</Text><Text className={'f__size--26 fr c--eb3'}>待核销</Text>
                        </View>
                        <View className={'body-body'}>
                          <Image src={'../../statics/imgs/banner1.png'} className={'img'} style={'width:35%'}/>
                          <View style={'width:100%'}>
                            <View>
                              <Text className={'f__size--26 c--333'}>海绵蛋糕,松脆饼  500g</Text>
                              <Text className={'f__size--30 c--eb3 fr'}>￥233</Text>
                            </View>
                            <View className={'c--666 f__size--24'} style={'margin:10px 0'}>取货人：张小飞</View>
                            <View>
                              <Text className={'c--666 f__size--24'}>手机号：15039988559</Text>
                              <Text className={'fr c--666 f__size--24'}>X1</Text>
                            </View>
                          </View>
                        </View>
                        <View className={'body-footer'}>
                          <Text className={'f__size--26 c--010'}>取货时间</Text>
                          <Text className={'f__size--26 c--010 fr'}>2019/10/12 10:10:10</Text>
                        </View>
                      </View>
                    </View>
                  </AtTabsPane>
                  <AtTabsPane current={this.state.current} index={1}>
                    <View className={'title-box'}>
                      <View className={'body-nothx'}>
                        <View className={'body-heard'}>
                          <Text className={'f__size--26 c--010'}>订单编号：12256544522323</Text><Text className={'f__size--26 fr'} style={'color:#3AD362'}>已核销</Text>
                        </View>
                        <View className={'body-body'}>
                          <Image src={'../../statics/imgs/banner1.png'} className={'img'} style={'width:35%'}/>
                          <View style={'width:100%'}>
                            <View>
                              <Text className={'f__size--26 c--333'}>海绵蛋糕,松脆饼  500g</Text>
                              <Text className={'f__size--30 c--eb3 fr'}>￥233</Text>
                            </View>
                            <View className={'c--666 f__size--24'} style={'margin:10px 0'}>取货人：张小飞</View>
                            <View>
                              <Text className={'c--666 f__size--24'}>手机号：15039988559</Text>
                              <Text className={'fr c--666 f__size--24'}>X1</Text>
                            </View>
                          </View>
                        </View>
                        <View className={'body-footer'}>
                          <Text className={'f__size--26 c--010'}>取货时间</Text>
                          <Text className={'f__size--26 c--010 fr'}>2019/10/12 10:10:10</Text>
                        </View>
                      </View>
                      <View className={'body-nothx'}>
                        <View className={'body-heard'}>
                          <Text className={'f__size--26 c--010'}>订单编号：12256544522323</Text><Text className={'f__size--26 fr'} style={'color:#3AD362'}>已核销</Text>
                        </View>
                        <View className={'body-body'}>
                          <Image src={'../../statics/imgs/banner1.png'} className={'img'} style={'width:35%'}/>
                          <View style={'width:100%'}>
                            <View>
                              <Text className={'f__size--26 c--333'}>海绵蛋糕,松脆饼  500g</Text>
                              <Text className={'f__size--30 c--eb3 fr'}>￥233</Text>
                            </View>
                            <View className={'c--666 f__size--24'} style={'margin:10px 0'}>取货人：张小飞</View>
                            <View>
                              <Text className={'c--666 f__size--24'}>手机号：15039988559</Text>
                              <Text className={'fr c--666 f__size--24'}>X1</Text>
                            </View>
                          </View>
                        </View>
                        <View className={'body-footer'}>
                          <Text className={'f__size--26 c--010'}>取货时间</Text>
                          <Text className={'f__size--26 c--010 fr'}>2019/10/12 10:10:10</Text>
                        </View>
                      </View>
                    </View>
                  </AtTabsPane>
                </AtTabs>
            </View>
        )
    }
}
