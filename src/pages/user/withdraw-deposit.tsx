import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Input, Label} from '@tarojs/components'
import './withdraw-deposit.scss'
import IconFont from "../../components/iconfont";
import FixedButton from "../../components/fixed-button/fixed-button";

export interface Props {

}

export interface State {
  // checked: string,//当前选中的支付方式
  isShowSelectCard: boolean,//是否选择银行卡操作
}

export default class WithdrawDeposit extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: '提现'
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      isShowSelectCard: false
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

  // 确定操作
  onConfrim = () => {
    Taro.showToast({
      icon: 'success',
      title: '触发提现'
    })
  };

  // 去添加银行卡
  goAddBankCard = () => {
    Taro.navigateTo({
      url: ``
    })
  };

  render() {
    return (
      <View className='withdraw-deposit'>

        <View className="container">
          <Text className="money">可提现金额：5000元</Text>
          <View className="money-input">
            <Text className="margin-right--10">￥</Text>
            <Input placeholder="请输入提现金额"/>
          </View>
        </View>

        <Text className="small-title ">选择提现方式</Text>

        <View className="container">
          <Label className="label">
            <IconFont name={"weixinzhifu"} size={40}/>
            <Text className="label__name">微信支付</Text>
            <View className="label__check">
              <IconFont name={"duihao"} size={24}/>
            </View>
          </Label>
          <Label className="label">
            <IconFont name={"zhifubao"} size={40}/>
            <Text className="label__name">支付宝支付</Text>
            <View className="label__check checked">
              <IconFont name={"duihao"} size={24}/>
            </View>
          </Label>
          <Input className="label-input" placeholder="请输入提现账号"/>
        </View>

        <View className="container margin-top--20">
          <Label className="label" onClick={() => this.setState({isShowSelectCard: true})}>
            <IconFont name={"yinhang-yinlian-"} size={40}/>
            <Text className="label__name">平安银行储蓄卡(7398)</Text>
            <View className="label__check">
              <IconFont name={"duihao"} size={24}/>
            </View>
          </Label>
        </View>


        {this.state.isShowSelectCard &&
        <View className="mask" onClick={() => this.setState({isShowSelectCard: false})}>
            <View className="mask-box" onClick={event => event.stopPropagation()}>
                <View className="mask__title">
                    <Text className="h1">选择到账银行卡</Text>
                    <Text className="block f__size--22 c--666">请留意各银行到账时间</Text>
                </View>
                <View className="container">
                    <Label className="label">
                        <IconFont name={"yinhang-yinlian-"} size={40}/>
                        <View className="label__name">
                            <Text className="c--333 margin-bottom--10">平安银行储蓄卡(7398)</Text>
                            <Text className="block f__size--22 c--666">2小时内到账</Text>
                        </View>
                        <View className="label__check checked">
                            <IconFont name={"duihao"} size={24}/>
                        </View>
                    </Label>
                    <Label className="label margin-left--30" onClick={this.goAddBankCard}>
                        <Text className="label__name">使用新卡提现</Text>
                        <View className="label__check">
                            <IconFont name={"duihao"} size={24}/>
                        </View>
                    </Label>
                </View>
            </View>
        </View>}

        <FixedButton text={'确定'} onClick={this.onConfrim}/>
      </View>
    )
  }
}
