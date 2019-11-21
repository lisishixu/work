import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image} from '@tarojs/components'
import './bindTel.scss'
import {AtButton, AtInput} from "taro-ui";
import FixedButton from "../../components/fixed-button/fixed-button";
import api, {API_BASE} from "../../constants/api";
import {post} from "../../utils/request";
import {checkPhone} from "../../utils/helper";

export interface Props {

}

export interface State {
  value: string
  phone_no: any
  icode: string
  code_ts: string
  toast: boolean
  count: number
  auth_code: string
  changeCode: string
  codeImg: string
}


export default class BindTel extends Component<Props, State> {

  config: Config = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      phone_no: '',
      icode: '',
      code_ts: '获取验证码',
      toast: false,
      count: 60,
      auth_code: '',
      changeCode: '',
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
      phone_no
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
      changeCode
    });
    return changeCode
  }

  // 获取短信验证码
  getSMSCode() {
    if (!checkPhone(this.state.phone_no)) {
      Taro.showToast({
        icon: 'none',
        title: '请输入正确的手机号'
      });
      setTimeout(() => {
        Taro.hideToast();
      }, 2000);
      return;
    }
    this.sendCodeTimer(this.state.count)

    post(api.toTel, {
      type: 'bindTel',
      userPhone: this.state.phone_no,
      imgCode: this.state.changeCode
    }, res => {
      if (res.code == 200) {
      } else {
        Taro.showToast({
          title: res.msg || '网络繁忙',
          icon: 'none'
        })
      }
    })
  }

  // 发送验证码倒计时
  sendCodeTimer = (number) => {
    if (number <= 0) {
      this.setState({
        count: 60,
        code_ts: '获取验证码'
      });
      return;
    }
    const count = number - 1;
    setTimeout(() => {
      this.setState({
        count,
        code_ts: count + 'S重发'
      }, () => {
        this.sendCodeTimer(count)
      })
    }, 1000)
  };

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
          value={this.state.changeCode}
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
          value={this.state.phone_no}
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
            {this.state.code_ts === '获取验证码' ?
              <AtButton size='small' type='secondary' circle={true}
                        onClick={this.getSMSCode.bind(this)}>获取验证码</AtButton> :
              <AtButton size='small' type='secondary' className='disbtn' disabled={true}
                        circle={true}> {this.state.code_ts}</AtButton>}
          </View>
        </AtInput>
        <FixedButton text={'确定'} bottom={'30vh'}/>
      </View>
    )
  }
}
