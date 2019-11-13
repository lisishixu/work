import Taro, {Component, Config} from '@tarojs/taro'
import {View, Input, Button, Navigator} from '@tarojs/components'
import './verification.scss'
import IconFont from "../../components/iconfont";

export interface Props {

}

export interface State {
  value: string
}

export default class MerchantVerification extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: "手动输码",
    navigationBarTextStyle: "white",
    navigationBarBackgroundColor: "#F12737"
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: ""
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

  onKeyCode = (number) => {
    const value = this.state.value + number;
    this.setState({value})
  };

  onConfrim = () => {
    Taro.showToast({
      icon: 'none',
      title: `请先输入取货券码`
    });
    Taro.showToast({
      icon: 'none',
      title: `等待对接~`
    });
  };

  render() {
    return (
      <View className='verification'>
        <View className="box">
          <Input disabled
                 className="input"
                 value={this.state.value}
                 cursor={this.state.value.length}
                 placeholder={"请输入取货券码"}/>
        </View>

        <Navigator url={'/pages/merchant/scan'} openType={"redirect"} className="toggle">
          <IconFont name={"xiajiantou"} size={40} color={'#F12737'}/>
        </Navigator>

        <View className="keycode">
          <Button className="btn-num" onClick={() => this.onKeyCode(1)}>1</Button>
          <Button className="btn-num" onClick={() => this.onKeyCode(2)}>2</Button>
          <Button className="btn-num" onClick={() => this.onKeyCode(3)}>3</Button>
          <Button className="btn-num" onClick={() => this.onKeyCode(4)}>4</Button>
          <Button className="btn-num" onClick={() => this.onKeyCode(5)}>5</Button>
          <Button className="btn-num" onClick={() => this.onKeyCode(6)}>6</Button>
          <Button className="btn-num" onClick={() => this.onKeyCode(7)}>7</Button>
          <Button className="btn-num" onClick={() => this.onKeyCode(8)}>8</Button>
          <Button className="btn-num" onClick={() => this.onKeyCode(9)}>9</Button>
          <Button className="btn-num" onClick={() => this.onKeyCode(0)}>0</Button>
          <Button className="btn-confrim" onClick={this.onConfrim}>验证</Button>
        </View>
      </View>
    )
  }
}
