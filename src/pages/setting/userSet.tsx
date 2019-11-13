import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import './userSet.scss'
import {AtList, AtListItem} from "taro-ui";

export interface Props {

}

export interface State {

}

export default class UserSet extends Component<Props, State> {

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
      <View className='userSet'>
        <View>
          <View>
            <Text>头像</Text>
            <Image src={'../../statics/imgs/banner1.png'}/>
          </View>
          <AtList>
            <AtListItem title='标题文字' />
            <AtListItem title='标题文字' arrow='right' />
            <AtListItem title='标题文字' extraText='详细信息'  arrow='right'/>
            <AtListItem title='禁用状态' disabled extraText='详细信息' />
          </AtList>
        </View>
      </View>
    )
  }
}
