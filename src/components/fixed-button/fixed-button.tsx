import Taro, {Component, Config} from '@tarojs/taro'
import {Block, Button, View} from '@tarojs/components'
import './fixed-button.scss'

export interface Props {
  text: string
  onClick?: Function
}

export interface State {

}

export default class FixedButton extends Component<Props, State> {

  config: Config = {};

  static defaultProps = {
    onClick: null
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

  onFixedButton = () => {
    if (this.props.onClick) this.props.onClick()
  };

  render() {
    return (
      <Block>
        <View className="height" style={{height: '60px', opacity: 0}}>
        </View>
        <Button className={"fixed-button"} onClick={this.onFixedButton}>{this.props.text}</Button>
      </Block>
    )
  }
}
