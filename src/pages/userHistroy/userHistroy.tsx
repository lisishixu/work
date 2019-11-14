import Taro, {Component, Config} from '@tarojs/taro'
import {View, Picker, Text} from '@tarojs/components'
import './userHistroy.scss'
import IconFont from "../../components/iconfont";
import {AtAvatar, AtCurtain} from "taro-ui";

export interface Props {

}

export interface State {
  selector: string[]
  selectorChecked: string
  avatar: string
  isOpened: boolean
  data: any[]
  current: number
}

export default class UserHistroy extends Component<Props, State> {

  config: Config = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      selector: ['近一个月', '上一个月', '上两个月', '上三个月'],
      selectorChecked: '近一个月',
      avatar: '../../statics/imgs/banner1.png',
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

  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  };

  onShowMore = (index) => {
    this.setState({
      isOpened: true, current: index
    })
  };

  onClose() {
    this.setState({
      isOpened: false
    })
  }

  render() {
    const {data, current} = this.state;
    return (
      <View className='clientrecord'>
        <View className={'clientrecord-title'}>
          <View className='page-section'>
            <View>
              <Picker mode='selector' value={0} range={this.state.selector} onChange={this.onChange}>
                <View className='picker'>
                  {this.state.selectorChecked}
                  <View className={'inline--block'}>
                    <IconFont name={'sanjiaoxing'} size={20} color={'#999999'}/>
                  </View>
                </View>
                <Text className={'fr f__size--26 c--333'}>累计用户：1200010</Text>
              </Picker>
            </View>
          </View>
        </View>
        <View>
          {data.map((it, index) => {
            return <View className={'content-box'}>
              <View className={'td'}>
                <View>
                  <AtAvatar circle size={"small"} image={this.state.avatar}/>
                  <Text className={'f__size--24 c--010'}>{it[index].name || '小小丫头'}</Text>
                </View>
              </View>
              <View className={'td'}>
                <View>
                  <Text className={'f__size--30 c--eb3'}>500.00</Text>
                  <View className={'f__size--24 c--010'}>累计消费（元）</View>
                </View>
              </View>
              <View className={'td'}>
                <View>
                  <Text className={'f__size--30 c--eb3'}>500.00</Text>
                  <View className={'f__size--24 c--010'}>累计消费（元）</View>
                </View>
              </View>
              <View className={'c--010 f__size--24 td'} onClick={() => this.onShowMore(index)}>查看更多</View>
            </View>
          })}
        </View>
        <AtCurtain
          isOpened={this.state.isOpened}
          onClose={this.onClose.bind(this)}
          closeBtnPosition={'top-right'}
        >
          <View className={'toast-footer'}>
            <View className={'f__size--30 c--010'}>用户详情</View>
            <View className={'view'}><Text className={'c--999 f__size--28'}>用户昵称</Text><Text
              className={'c--666 f__size--28'} style={'margin-left:30px'}>{data[current].name || '小小丫头'}</Text></View>
            <View className={'view'}><Text className={'c--999 f__size--28'}>用户手机号</Text><Text
              className={'c--666 f__size--28'} style={'margin-left:16px'}>17803877466</Text></View>
            <View className={'view'}><Text className={'c--999 f__size--28'}>推荐人</Text><Text
              className={'c--666 f__size--28'} style={'margin-left:45px'}>格雷福斯</Text></View>
            <View className={'view'}><Text className={'c--999 f__size--28'}>是否购买</Text><Text
              className={'c--666 f__size--28'} style={'margin-left:30px'}>是</Text></View>
            <View className={'view'}><Text className={'c--999 f__size--28'}>购买时间</Text><Text
              className={'c--666 f__size--28'} style={'margin-left:30px'}>2019/12/10 12:22:48</Text></View>
            <View className={'view'}><Text className={'c--999 f__size--28'}>累计消费</Text><Text
              className={'c--666 f__size--28'} style={'margin-left:30px'}>4545.00</Text></View>
            <View className={'view'}><Text className={'c--999 f__size--28'}>推荐人数</Text><Text
              className={'c--666 f__size--28'} style={'margin-left:30px'}>5</Text></View>
          </View>
        </AtCurtain>
      </View>
    )
  }
}
