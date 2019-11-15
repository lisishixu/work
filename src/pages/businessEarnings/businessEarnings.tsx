import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import './businessEarnings.scss'
import {AtTabs, AtTabsPane} from "taro-ui";

export interface Props {

}

export interface State {
  current:number,
}

export default class BusinessEarnings extends Component<Props, State> {

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
      const tabList = [{ title: '12200.00' }, { title: '12200.00' }]
        return (
            <View className='businessEarnings'>
              <View className={'shop-title'}> </View>
              <View className={'cover'}></View>
              <View className={'total-money'}>
                <View className={'c--333'} style={'font-size:40px'}>15500</View>
                <View className={'f__size--30 c--333'}>业绩总额（元）</View>
              </View>
              <View className={'tabs'}>
                <View className={'flex performance'}>
                  <View className={'view f__size--26 c--010'}>邀请用户业绩</View>
                  <View className={'view f__size--26 c--010'}>邀请商家业绩</View>
                </View>
                  <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
                    <AtTabsPane current={this.state.current} index={0} >
                      <View className={'content-box'}>
                        <View className={'title'}>
                          <View><Text className={'f__size--26 c--010'}>ID：225631441222</Text><Text className={'fr c--010 f__size--26'} >2019/10/12 10:10:26</Text></View>
                        </View>
                        <View className={'center-box'} style={'align-items: center;'}>
                          <Image src={'../../statics/imgs/banner1.png'} className={'img'} style={'border-radius:50%;width:100px'}/>
                          <View className={'flex'} style={'align-items: center;width:100%'}>
                          <View>
                            <View className={'f__size--30 c--010'}>用户姓名</View>
                            <View className={'f__size--26 c--010'}>15038596998</View>
                          </View>
                            <View className={'c--eb3'} style={'font-size:18px;flex:1;text-align:right'}>+500</View>
                          </View>
                        </View>
                      </View>
                    </AtTabsPane>
                    <AtTabsPane current={this.state.current} index={1}>
                      <View className={'content-box'}>
                        <View className={'title'}>
                          <View><Text className={'f__size--26 c--010'}>2019/10/12 10:10:12</Text><Text className={'fr c--eb3'} style={'font-size:18px'}>+500</Text></View>
                        </View>
                        <View className={'center-box'}>
                          <Image src={'../../statics/imgs/banner1.png'} className={'img'}/>
                          <View>
                            <View className={'f__size--30 c--010'}>噜啦啦的美妆店</View>
                            <View className={'f__size--26 c--010'} style={'margin:8px 0'}>店主：噜啦啦</View>
                            <View className={'f__size--24 c--666'}>郑州市金水区金水东路雅宝东方国际2号楼</View>
                          </View>
                        </View>
                      </View>
                    </AtTabsPane>
                  </AtTabs>
              </View>
            </View>
        )
    }
}
