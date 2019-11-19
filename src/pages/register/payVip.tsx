import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Label} from '@tarojs/components'
import './payVip.scss'
import IconFont from "../../components/iconfont";

export interface Props {

}

export interface State {
  current:number
  flag:boolean
}

export default class PayVip extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: "成为会员",
    navigationBarTextStyle: "white",
    navigationBarBackgroundColor: '#F12737'
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      current:0,
      flag:false
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
  changeCurrent = (current) =>{
    this.setState({current})
}
  changFlag = () =>{
    this.setState({flag:!this.state.flag})

  }

  render() {
    return (
      <View className='payVip'>
        <View className={'vip-title'}>
          <IconFont name={'yaoqing'} size={50}/>
          <Text className={'f__size--28 c--010 text'}>李某某</Text>
          <Text className={'f__size--28 c--010'}>17803877466</Text>
        </View>
        <View className={'vip--center'}>
          <Text className={'f__size--30 c--333'}>选择支付方式</Text>

          <View className={`pay--way ${this.state.current===0?"current":""}`} onClick={()=> this.changeCurrent(0)}>
            <IconFont name={'weixinzhifu'} size={50}/>
            <Text className={'margin-left--30'}>微信支付</Text>
            <View className={'view'}>
              <Label className={'vip--label'}>
                <IconFont name={'duihao'} size={30}/>
              </Label>
            </View>
          </View>
          <View className={`pay--way ${this.state.current===1?"current":""}`} onClick={()=>this.changeCurrent(1) }>
            <IconFont name={'zhifubao'} size={50}/>
            <Text className={'margin-left--30'}>支付宝支付</Text>
            <View className={'view'}>
              <Label className={`vip--label`}>
                <IconFont name={'duihao'} size={30}/>
              </Label>
            </View>
          </View>
          <View className={`pay--way ${this.state.current===2?"current":""}`} onClick={()=>this.changeCurrent(2)}>
            <IconFont name={'yinhang-yinlian-'} size={50}/>
            <Text className={'margin-left--30'}>银行卡支付</Text>
            <View className={'view'}>
              <Label className={'vip--label'}>
                <IconFont name={'duihao'} size={30}/>
              </Label>
            </View>
          </View>
        </View>

        <View className={'vip--footer'}>
          <View className={'view'}>立即支付  ¥198  </View>
         <View className={'user--know'}>
           <Label className={`vip--label ${this.state.flag?"flag":""}`} onClick={()=>this.changFlag()}>
             <IconFont name={'duihao'} size={35}/>
           </Label>
           <Text className={'f__size--22 c--999'}>注册代表您已同意《用户须知》和《隐私协议》内容。</Text>
         </View>
        </View>
      </View>
    )
  }
}
