import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import './state-tip.scss'
import IconFont from "../iconfont";

export interface Props {
  size?: 'small' | 'large' | 'default'
  iconFont?: string,//优先级高
  imgUrl?: string
  title?: string
}

export interface State {

}

export default class StateTip extends Component<Props, State> {

  config: Config = {};

  static defaultProps = {};

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
      // @ts-ignore
      <View className={`state-tip state-tip--${this.props.size}`}>
        {this.props.iconFont && !this.props.imgUrl && <IconFont name={this.props.iconFont}/>}
        {this.props.imgUrl && <Image className={"state-tip__img"} mode={"widthFix"} src={this.props.imgUrl}/>}
        {this.props.title && <View className={`state-tip__text`}>{this.props.title}</View>}
        {this.props.children}
      </View>
    )
  }
}
