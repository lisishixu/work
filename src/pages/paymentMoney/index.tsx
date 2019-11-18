import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Label} from '@tarojs/components'
import './index.scss'
import IconFont from "../../components/iconfont";

export interface Props {

}

export interface State {
  dataNum:any[]
  current:number
  number:number
}

export default class Index extends Component<Props, State> {

  config: Config = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      dataNum:[{
        nums:[198,1980,19800],
      }],
      current:0,
      number:0
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
  adressNavClick = (dex) =>{
    this.setState({number:dex})
  }
  render() {
    return (
      <View className='index'>
        <View className={'payment'}>
          <Text className={'c--333 f__size--30'} style={'font-weight:600;'}>缴纳金额</Text>
          {this.state.dataNum.map((it,index)=>{
    return    <View className={'view'} key={index}>
                {it.nums.map((num,dex)=>{
                  return <Text className={`text ${this.state.number===dex?"addClsss":""}`} onClick={()=>{this.adressNavClick(dex)}}>{num}</Text>
                })}
              </View>
          })}
        </View>
        <View className={'vip--center'}>
          <Text className={'f__size--30 c--333'} style={'font-weight:600'}>选择支付方式</Text>

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
        <View className={'footer-nav'}>
          <Text className={'text f__size--28 c--333'}>缴纳金额</Text>
          <Text className={'num c--eb3'}>￥ 198</Text>
          <View className={'view'}>确认</View>
        </View>
      </View>
    )
  }
}
