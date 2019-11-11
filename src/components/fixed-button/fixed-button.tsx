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
    onClick: null,
    bottom: '2vh'
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
        <View className="fixed-height" style={{paddingTop: this.props.paddingTop}}>
          <Button className={"fixed-button"}
                  style={{bottom: this.props.bottom}}
                  onClick={this.onFixedButton}>{this.props.text}</Button>
        </View>
      </Block>
    )
  }
}
