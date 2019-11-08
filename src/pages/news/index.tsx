import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import './index.scss'
import IconFont from "../../components/iconfont";
import {AtListItem} from "taro-ui";

export interface Props {

}

export interface State {
}

export default class Index extends Component<Props, State> {

  config: Config = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {}
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

  render() {
    return (
      <View className='news'>
        <View className={'news-box'}>
          <View>
            <View className={'news-item'} style={'background:#F9AA12'}>
              <IconFont name={'xiaoxi'} size={50} color={'#fff'}></IconFont>
              <View className={'item--num'}>2</View>
            </View>
            <Text className={'f__size--24 c--33'}>评论</Text>
          </View>
          <View>
            <View className={'news-item'} style={'background:#689BFF'}>
              <IconFont name={'haoyou1'} size={50} color={'#fff'}></IconFont>
              <View className={'item--num'}>3</View>
            </View>
            <Text className={'f__size--24 c--33'}>粉丝</Text>
          </View>
          <View>
            <View className={'news-item'} style={'background:#FF6060'}>
              <IconFont name={'xihuan'} size={50} color={'#fff'}></IconFont>
              <View className={'item--num'}>4</View>
            </View>
            <Text className={'f__size--24 c--33'}>赞</Text>
          </View>
          <View>
            <View className={'news-item'} style={'background:#00CCC0'}>
              <IconFont name={'xihuan'} size={50} color={'#fff'}></IconFont>
              <View className={'item--num'}>5</View>
            </View>
            <Text className={'f__size--24 c--33'}>通知</Text>
          </View>
        </View>
        <AtListItem
          title='标题文字'
          note='描述信息'
          extraText='09:21'
          thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
        />
      </View>
    )
  }
}
