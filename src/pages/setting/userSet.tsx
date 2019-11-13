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
            <AtListItem title='昵称' extraText='包大人' arrow='right'/>
            <AtListItem title='会员ID' extraText='11122222222' arrow='right'/>
            <AtListItem title='性别' extraText='女' arrow='right'/>
            <AtListItem title='生日' extraText='未填写' arrow='right'/>
            <AtListItem title='电话号码' extraText='去绑定' arrow='right'/>
          </AtList>
          <AtList>
            <AtListItem title='所在地区' extraText='金水区' arrow='right'/>
            <AtListItem title='我的邀请人' extraText='kris吴'/>
            <AtListItem title='性别' extraText='女'/>
            <AtListItem title='生日' extraText='未填写' />
            <AtListItem title='电话号码' extraText='去绑定'/>
          </AtList>
        </View>
      </View>
    )
  }
}
