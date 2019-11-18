import Taro, {Component, Config} from '@tarojs/taro'
import {View} from '@tarojs/components'
import './addBankCard.scss'
import {AtInput} from "taro-ui";

export interface Props {

}

export interface State {
  name:string
  userId:string
  bankCard:string
}

export default class AddBankCard extends Component<Props, State> {

    config: Config = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
          name:'',
          userId:'',
          bankCard:''
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
  changename (name) {
    this.setState({
      name
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return name
  }
  changeUserId (userId) {
    this.setState({
      userId
    })
    // 在小程序中，如果想改变 value 的值，需要 `ret1urn value` 从而改变输入框的当前值
    return userId
  }
  changebankCard (bankCard) {
    this.setState({
      bankCard
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return bankCard
  }
    render() {
        return (
            <View className='addBankCard'>
              <View className={'card-title'}>
                请填写银行卡信息
              </View>
              <AtInput
                name='value1'
                title='真是姓名'
                type='text'
                placeholder='请输入真实性命'
                value={this.state.name}
                onChange={this.changename.bind(this)}
              />
              <AtInput
                name='value2'
                title='身份证号'
                type='text'
                placeholder='请输入身份证号'
                value={this.state.userId}
                onChange={this.changeUserId.bind(this)}
              />
              <AtInput
                name='value3'
                title='银行账号'
                type='text'
                placeholder='请输入银行账号'
                value={this.state.bankCard}
                onChange={this.changebankCard(this)}
              />
            </View>
        )
    }
}
