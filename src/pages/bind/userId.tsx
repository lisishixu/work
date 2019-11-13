import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import './userId.scss'
import {AtInput} from "taro-ui";
import FixedButton from "../../components/fixed-button/fixed-button";

export interface Props {

}

export interface State {
  userName: string
  userID: string
}

export default class UserId extends Component<Props, State> {

  config: Config = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userID: ''
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

  nameChange(userName) {
    this.setState({userName})
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return userName
  }

  idChange(userID) {
    this.setState({userID})
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return userID
  }

  render() {
    return (
      <View className='userId'>
        <View className={'title-box'}>
          <View className={'view'}>
            <Text className={'c--eb3'}>*</Text><Text className={'f__size--28'}>真实姓名</Text>
            <AtInput
              name='value2'
              type='text'
              placeholder='请输入您的真实姓名，认证后不可更改'
              value={this.state.userName}
              onChange={this.nameChange.bind(this)}
              className={'input'}
            />
          </View>
          <View className={'view'}>
            <Text className={'c--eb3'}>*</Text><Text className={'f__size--28'}>身份证号</Text>
            <AtInput
              name='value2'
              type='number'
              placeholder='请输入您的真实姓名对应的身份证号'
              value={this.state.userID}
              onChange={this.idChange.bind(this)}
              className={'input'}
            />
          </View>
        </View>
        <View className={'unload-center'}>
          <Text>请拍摄并上传你的身份证照片</Text>
          <View className={'flex'}>
            <View style={'margin-right:40px'}>
              <Image src={'../../statics/imgs/fan.png'} className={'img'}/>
            </View>
            <View>
              <Image src={'../../statics/imgs/zheng.png'} className={'img'}/>
            </View>
          </View>
        </View>
        <Text className={'c--010 f__size--30'}>拍摄身份证要求：</Text>
        <View>
          <Text className={'f__size--25 c--666'}>大陆公民持有的本人有效二代身份证：</Text>
          <View className={'f__size--25 c--666'}>拍摄时确保身份证<Text className={'c--eb3 f__size--27'}>边框完整，字体清晰，亮度均匀</Text></View>
        </View>
        <FixedButton text={'提交'} bottom={'5vh'}/>
      </View>
    )
  }
}
