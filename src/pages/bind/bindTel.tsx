import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image} from '@tarojs/components'
import './bindTel.scss'
import {AtInput} from "taro-ui";
import FixedButton from "../../components/fixed-button/fixed-button";
import {API_BASE} from "../../constants/api";
import SendSMSBtn from "../../components/send-sms/send-sms";

export interface Props {

}

export interface State {
  value: string
  userPhone: any
  icode: string
  type: string
  auth_code: string
  imgCode: string
  codeImg: string

}


export default class BindTel extends Component<Props, State> {

  config: Config = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      type: 'bindTel',
      value: '',
      userPhone: '',
      icode: '',
      auth_code: '',
      imgCode: '',
      codeImg: `${API_BASE}/genericClass/checkCode?t=${new Date().getTime()}`
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

  handleChange(phone_no) {
    this.setState({
      userPhone: phone_no
    });
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return phone_no
  }

  handleChange1(value) {
    this.setState({
      value
    });
    return value
  }

  changeCode(changeCode) {
    this.setState({
      imgCode: changeCode
    });
    return changeCode
  }


  // 再次获取验证码
  onAgainCode = () => {
    this.setState({codeImg: `${API_BASE}/genericClass/checkCode?t=${new Date().getTime()}`})
  };

  render() {
    return (
      <View className='bindTel'>
        <AtInput
          clear
          name='value4=2'
          title='验证码'
          type='text'
          maxLength='4'
          placeholder='验证码'
          value={this.state.imgCode}
          onChange={this.changeCode.bind(this)}
        >
          <Image src={this.state.codeImg} onClick={this.onAgainCode}/>
        </AtInput>
        <AtInput
          clear
          name='value'
          title='手机号'
          type='number'
          placeholder='请输入手机号'
          value={this.state.userPhone}
          onChange={this.handleChange.bind(this)}
        />
        <AtInput
          clear
          name='value1'
          type='phone'
          border={false}
          placeholder='验证码'
          value={this.state.value}
          onChange={this.handleChange1.bind(this)}
        >
          <View className='phone_box_right'>
            <SendSMSBtn
              type={'bindTel'}
              userPhone={this.state.userPhone}
              imgCode={this.state.imgCode}
            />
          </View>
        </AtInput>
        <FixedButton text={'确定'} bottom={'30vh'}/>
      </View>
    )
  }
}
