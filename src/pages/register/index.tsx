import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Navigator, Image} from '@tarojs/components'
import './index.scss'
import {AtInput} from "taro-ui";
import FixedButton from "../../components/fixed-button/fixed-button";
import {API_BASE} from "../../constants/api";
import SendSMSBtn from "../../components/send-sms/send-sms";

export interface Props {

}

export interface State {
  value: string
  phone_no:any
  icode:string
  code_ts:string
  show_btn:boolean
  toast:boolean
  count:number
  auth_code:string
  changeCode: string
  codeImg: string
}

export default class Index extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: "注册",
    navigationBarTextStyle: "white",
    navigationBarBackgroundColor: '#F12737'
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      phone_no: '',
      icode: '',
      code_ts: '获取验证码',
      show_btn: true,
      toast: false,
      count: 60,
      auth_code:'',
      changeCode: '',
      codeImg:  `${API_BASE}/genericClass/checkCode?t=${new Date().getTime()}`
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
  onAgainCode = () => {
    this.setState({codeImg: `${API_BASE}/genericClass/checkCode?t=${new Date().getTime()}`})
  };
  changeCode(changeCode) {
    this.setState({
      changeCode
    });
    return changeCode
  }
  handleChange(value) {
    this.setState({
      value
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }
  handleChange1(phone_no){
    this.setState({
      phone_no
    })
    return phone_no
  }
  auth_code(auth_code){
    this.setState({
      auth_code
    })
    return auth_code
  }


  render() {
    return (
      <View className='index container'>
        <View className='text'>填写注册信息</View>
        <AtInput
          clear
          name='value4'
          type='text'
          maxLength='4'
          border={false}
          placeholder='请输入验证码'
          value={this.state.changeCode}
          onChange={this.changeCode.bind(this)}
        >
          <Image src={this.state.codeImg} onClick={this.onAgainCode}/>
        </AtInput>
        <AtInput
          clear
          name='value'
          type='text'
          placeholder='请输入真实姓名'
          border={false}
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        />
        <AtInput
          clear
          name='value1'
          type='phone'
          border={false}
          placeholder='请输入手机号'
          value={this.state.phone_no}
          onChange={this.handleChange1.bind(this)}
        >
          <View className='phone_box_right'>
            <SendSMSBtn type={'register'} userPhone={this.state.phone_no} imgCode={this.state.codeImg}/>
          </View>
        </AtInput>
        <AtInput
          clear
          name='value1'
          type='phone'
          border={false}
          maxLength={6}
          placeholder='请输入验证码'
          value={this.state.auth_code}
          onChange={this.auth_code.bind(this)}
        >
          <Text>收不到验证码?</Text>
        </AtInput>
        <Navigator url={'/pages/register/payVip'}>
          <FixedButton text={'下一步'} bottom={'10vh'}/>
        </Navigator>
      </View>
    )
  }
}
