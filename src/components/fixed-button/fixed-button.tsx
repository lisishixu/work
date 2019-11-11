import Taro, {Component, Config} from '@tarojs/taro'
import {Block, Button, View} from '@tarojs/components'
import './fixed-button.scss'

export interface Props {
  text: string
  onClick?: Function
  paddingTop?: string
  bottom?: string
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
    let currentStyle = '';
    const {paddingTop, bottom} = this.props;
    if (paddingTop) currentStyle += `paddingTop: ${paddingTop}`;
    if (bottom) currentStyle += `bottom: ${bottom}`;
    return (
      <Block>
        <View className="fixed-height" style={currentStyle}>
          <Button className={"fixed-button"} onClick={this.onFixedButton}>{this.props.text}</Button>
        </View>
      </Block>
    )
  }
}
