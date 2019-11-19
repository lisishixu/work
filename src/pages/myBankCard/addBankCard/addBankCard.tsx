import Taro, {Component, Config} from '@tarojs/taro'
import {View} from '@tarojs/components'
import './addBankCard.scss'
import {AtInput} from "taro-ui";

export interface Props {

}

export interface State {
  name: string
  userId: string
  bankCard: string
}

export default class AddBankCard extends Component<Props, State> {

  config: Config = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      userId: '',
      bankCard: ''
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

  changeName(name) {
    this.setState({
      name
    })
    return name
  }

  changeUserId(userId) {
    this.setState({
      userId
    })
    return userId
  }

  changeBankCard(bankCard) {
    this.setState({
      bankCard
    })
    return bankCard
  }


  render() {
    return (
      <View className='addBankCard'>
        <View className={'card-title'}>
          请填写银行卡信息
        </View>

        <AtInput
          name='value'
          title='姓名'
          type='text'
          placeholder='请输入你的姓名'
          value={this.state.name}
          onChange={this.changeName.bind(this)}
        />
        <AtInput
          name='value1'
          title='身份证号'
          type='text'
          placeholder='请输入你的身份证号'
          value={this.state.userId}
          onChange={this.changeUserId.bind(this)}
        />
        <AtInput
          name='value2'
          title='银行卡号'
          type='text'
          placeholder='请输入你的银行卡号'
          value={this.state.userId}
          onChange={this.changeBankCard.bind(this)}
        />
      </View>
    )
  }
}
