import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import './index.scss'

export interface Props {

}

export interface State {
  dataNum:any[]
  current:number
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
      current:0
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
  adressNavClick = (dex) =>{
    this.setState({current:dex})
  }
  render() {
    return (
      <View className='index'>
        <Text className={'c--333 f__size--30'}>缴纳金额</Text>
        <View className={'payment'}>
          {this.state.dataNum.map((it,index)=>{
    return    <View className={'view'} key={index}>
                {it.nums.map((num,dex)=>{
                  return <Text className={`text ${this.state.current===dex?"addClsss":""}`} onClick={()=>{this.adressNavClick(dex)}}>{num}</Text>
                })}
              </View>
          })}
        </View>

        <View >
          <Text>缴纳金额</Text>
          <Text>￥ 198</Text>
          <View>确认</View>
        </View>
      </View>
    )
  }
}
