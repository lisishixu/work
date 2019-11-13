import Taro, {Component, Config} from '@tarojs/taro'
import {View} from '@tarojs/components'
import './changePassword.scss'
import {AtInput} from "taro-ui";
import FixedButton from "../../components/fixed-button/fixed-button";

export interface Props {

}

export interface State {
  oldPassword:string
  newPassword:string
}

export default class ChangePassword extends Component<Props, State> {

    config: Config = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
          oldPassword:'',
          newPassword:''
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
    odlChange (oldPassword) {
    this.setState({
      oldPassword
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return oldPassword
   }
   newChange (newPassword) {
     this.setState({
       newPassword
     })
     // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
     return newPassword
   }
    render() {
        return (
            <View className='changePassword'>
              <View className={'content-box'}>
                <View className={'f__size--30 c--333'}>请设置新密码</View>
                <AtInput
                  name='value'
                  type='password'
                  placeholder='请输入当前登录密码'
                  value={this.state.oldPassword}
                  onChange={this.odlChange.bind(this)}
                />
                <AtInput
                  name='value1'
                  type='password'
                  maxLength={20}
                  placeholder='确认新密码           '
                  value={this.state.newPassword}
                  onChange={this.newChange.bind(this)}
                />
                <View className={'f__size--20 c--999 view'}>必须是6-20个英文字母、数字或者符号（除空格），且字母、数字和标点  符号至少包含两种</View>
              </View>
              <FixedButton text={'确定'} bottom={'20vh'}/>
            </View>
        )
    }
}
