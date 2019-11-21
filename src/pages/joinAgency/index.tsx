import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import './index.scss'
import FixedButton from "../../components/fixed-button/fixed-button";
import {AtInput} from "taro-ui";
import SendSMSBtn from "../../components/send-sms/send-sms";
import {API_BASE} from "../../constants/api";
export interface Props {

}

export interface State {
  show_btn:boolean
  phone_no:any
  icode:string
  code_ts:string
  toast:boolean
  count:number
  auth_code:string
  name:string
  changeCode:string
  changeUserId:string
  changePassword:string
  changeAgainPassword:string
}

export default class Index extends Component<Props, State> {

    config: Config = {
      navigationBarTitleText: "成为代理",
      navigationBarTextStyle: "white",
      navigationBarBackgroundColor: '#F12737'
    };

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
          phone_no: '',
          icode: '',
          code_ts: '获取验证码',
          show_btn: true,
          toast: false,
          count: 60,
          auth_code:'',
          name:'',
          changeCode:'',
          changeUserId:'',
          changePassword:'',
          changeAgainPassword:'',
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

  changeTel= (phone_no) =>{
    this.setState({
      phone_no
    })
    return phone_no
  }

  changeName= (name) =>{
    this.setState({
      name
    })
    return name
  }
  changeCode= (changeCode) =>{
    this.setState({
      changeCode
    })
    return changeCode
  }
  changeUserId= (changeUserId) =>{
    this.setState({
      changeUserId
    })
    return changeUserId
  }
  changePassword= (changePassword) =>{
    this.setState({
      changePassword
    })
    return changePassword
  }
  changeAgainPassword= (changeAgainPassword) =>{
    this.setState({
      changeAgainPassword
    })
    return changeAgainPassword
  }

  onAgainCode = () => {
    this.setState({changeCode: `${API_BASE}/genericClass/checkCode?t=${new Date().getTime()}`})
  };
    render() {
        return (
            <View className='index'>
              <View className={'userItem'}>
                <View className={'top'}>
                  <Text className={'f__size--30 c--333'} style={'font-weight:600'}>姓名</Text><Text className={'c--eb3 f__size--30'}>*</Text>
                </View>
                <AtInput
                  clear
                  name='value'
                  type='text'
                  border={false}
                  placeholder='请输入您的姓名'
                  value={this.state.name}
                  onChange={this.changeName.bind(this)}
                >
                </AtInput>
              </View>
              <View className={'userItem'}>
                <View className={'top'}>
                  <Text className={'f__size--30 c--333'} style={'font-weight:600'}>手机号</Text><Text className={'c--eb3 f__size--30'}>*</Text>
                </View>
                <AtInput
                  clear
                  name='value1'
                  type='phone'
                  border={false}
                  placeholder='请输入手机号'
                  value={this.state.phone_no}
                  onChange={this.changeTel.bind(this)}
                >
                </AtInput>
              </View>
              <View className={'userItem'}>
                <View className={'top'}>
                  <Text className={'f__size--30 c--333'} style={'font-weight:600'}>验证码</Text><Text className={'c--eb3 f__size--30'}>*</Text>
                </View>
                <View className={'flex'} style={'align-items:center'}>
                  <AtInput
                    clear
                    name='value2'
                    type='phone'
                    border={false}
                    placeholder='请输入验证码'
                    value={this.state.changeCode}
                    onChange={this.changeCode.bind(this)}
                  >
                  </AtInput>
                  <View className='phone_box_right'>
                    <SendSMSBtn type={'apply'} userPhone={this.state.phone_no} imgCode={this.state.changeCode}/>
                  </View>
                </View>
              </View>
              <View className={'userItem'}>
                <View className={'top'}>
                  <Text className={'f__size--30 c--333'} style={'font-weight:600'}>身份证号</Text><Text className={'c--eb3 f__size--30'}>*</Text>
                </View>
                <AtInput
                  clear
                  name='value3'
                  type='phone'
                  border={false}
                  placeholder='请输入您的身份证号'
                  value={this.state.changeUserId}
                  onChange={this.changeUserId.bind(this)}
                >
                </AtInput>
              </View>
              <View className={'userItem margin-bottom--10'}>
                <View className={'top'}>
                  <Text className={'f__size--30 c--333'} style={'font-weight:600'}>证件期限</Text><Text className={'c--eb3 f__size--30'}>*</Text>
                </View>
                <input type="number" placeholder={'请输入您的身份证有效期'} placeholder-class={'place-text'}/>
              </View>
              <View className={'userItem'}>
                <View className={'top'}>
                  <Text className={'f__size--30 c--333'} style={'font-weight:600'}>登录密码</Text><Text className={'c--eb3 f__size--30'}>*</Text>
                </View>
                <AtInput
                  clear
                  name='value5'
                  type='password'
                  border={false}
                  placeholder='请输入您的登录密码（6-20位大小写字母或数字）'
                  value={this.state.changePassword}
                  onChange={this.changePassword.bind(this)}
                >
                </AtInput>
              </View>
              <View className={'userItem'}>
                <View className={'top'}>
                  <Text className={'f__size--30 c--333'} style={'font-weight:600'}>登录密码</Text><Text className={'c--eb3 f__size--30'}>*</Text>
                </View>
                <AtInput
                  clear
                  name='value5'
                  type='password'
                  border={false}
                  placeholder='请再次输入您的登录密码）'
                  value={this.state.changeAgainPassword}
                  onChange={this.changeAgainPassword.bind(this)}
                >
                </AtInput>
              </View>
              <FixedButton text={'下一步'} bottom={'3vh'}/>
            </View>
        )
    }
}
