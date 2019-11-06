import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import './tip-title.scss'

export interface Props {
  value: string
}

export interface State {

}

export default class TipTitle extends Component<Props, State> {

  config: Config = {};

  static defaultProps = {
    value: ''
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
      <View className="tip-title">
        <Text className={'tip-title__text'}>{this.props.value}</Text>
        <Image src={'/statics/imgs/line.png'} className={'tip-title__line'}/>
      </View>
    )
  }
}
