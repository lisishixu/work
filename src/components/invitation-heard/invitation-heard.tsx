import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import './invitation-heard.scss'

export interface Props {
  myMoney: number
  friendMoney: number
  heardImg: string
  myText: string
  friendText: string
}

export interface State {

}

export default class InvitationHeard extends Component<Props, State> {

  config: Config = {};

  static defaultProps = {};

  static options = {
    addGlobalClass: true
  };

  constructor(props) {
    super(props);
    this.state = {}
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

  render() {
    return (
      <View className='invitation-heard'>
        <Image src={this.props.heardImg} style={'width:100%'}/>
        <View className={'reward'}>
          <View className={'reward-box'}>
            <View className={'reward--font'}>您可获得</View>
            <Text style={{fontSize: '60px'}} className={'c--eb3'}>{this.props.myMoney}</Text>
            <View className={'f__size--26 c--eb3'}>{this.props.myText}</View>
          </View>
          <View className={'reward-box'}>
            <View className={'reward--font'}>好友可得</View>
            <Text style={{fontSize: '60px'}} className={'c--eb3'}>{this.props.friendMoney}</Text>
            <View className={'f__size--26 c--eb3'}>
              {this.props.friendText}
            </View>
          </View>
        </View>
      </View>
    )
  }
}
