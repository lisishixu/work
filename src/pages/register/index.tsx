import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Navigator} from '@tarojs/components'
import './index.scss'
import {AtButton, AtInput} from "taro-ui";
import FixedButton from "../../components/fixed-button/fixed-button";

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
      auth_code:''
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
  getCode () {
    if(this.state.phone_no === '' || !(/^1[3456789]\d{9}$/.test(this.state.phone_no))){
      // 这里验证一下号码格式是否正确，为空或者不正常都提示一下，然后激活提示控件true，其他的框架提示控件同理
      Taro.showToast({
        icon: 'none',
        title: '请输入正确的手机号'
      });
      this.setState({
        toast: true
      })
      // 因为提示后一直为true的话输入内容好像也会激活setstate，所以提示后我会改成false
      setTimeout(() => {
        this.setState({
          toast: false
        })
      },1000)
    } else{
      let count = this.state.count
      // 这里写一个定时器就可以去更新灰色按钮的内容而且show_btn是false时会出现灰色按钮，当倒计时结束又变成可以触发的按钮
      const timer = setInterval(() => {
        this.setState({
          count: (count--),
          show_btn: false,
          code_ts: count +'S重发'
        }, () => {
          if (count === 0) {
            clearInterval(timer)
            this.setState({
              show_btn: true ,
              count: 60,
              code_ts: '获取验证码'
            })
          }
        })
      }, 1000)
    }
  }
  render() {
    return (
      <View className='index container'>
        <View className='text'>填写注册信息</View>
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
            {
              this.state.show_btn ?
                <AtButton size='small' type='secondary' circle = { true } onClick = { this.getCode.bind(this) }>获取验证码</AtButton>
                : <AtButton className='disbtn' disabled = { true } size='small' type='secondary' circle = { true }> { this.state.code_ts }</AtButton>
            }
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
