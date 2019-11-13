import Taro, {Component, Config} from '@tarojs/taro'
import {View, Picker, Text} from '@tarojs/components'
import './clientrecord.scss'
import IconFont from "../../components/iconfont";
import {AtAvatar} from "taro-ui";

export interface Props {

}

export interface State {
  selector: string[]
  selectorChecked: string
  avatar: string
}

export default class Clientrecord extends Component<Props, State> {

  config: Config = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      selector: ['近一个月', '上一个月', '上两个月', '上三个月'],
      selectorChecked: '近一个月',
      avatar: '../../statics/imgs/banner1.png'
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
  }

  render() {
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
          <View className={'content-box'}>
            <View className={'td'}>
              <View>
                <AtAvatar circle size={"small"} image={this.state.avatar}/>
                <Text className={'f__size--24 c--010'}>小小丫头</Text>
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
            <View className={'c--010 f__size--24 td'}>查看更多</View>
          </View>
          <View className={'content-box'}>
            <View className={'td'}>
              <View>
                <AtAvatar circle size={"small"} image={this.state.avatar}/>
                <Text className={'f__size--24 c--010'}>小小丫头</Text>
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
            <View className={'c--010 f__size--24 td'}>查看更多</View>
          </View>
          <View className={'content-box'}>
            <View className={'td'}>
              <View>
                <AtAvatar circle size={"small"} image={this.state.avatar}/>
                <Text className={'f__size--24 c--010'}>小小丫头</Text>
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
            <View className={'c--010 f__size--24 td'}>查看更多</View>
          </View>
        </View>
      </View>
    )
  }
}
