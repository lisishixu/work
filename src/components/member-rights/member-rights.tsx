import Taro, {Component, Config} from '@tarojs/taro'
import './member-rights.scss'
import {AtGrid} from "taro-ui";

export interface Props {
  isColor?: boolean,//是否要带颜色的
}

export interface State {
  data: any[]
}

// 会员权益
export default class MemberRights extends Component<Props, State> {

  config: Config = {

  };

  static defaultProps = {
    isColor: true
  };

  static options = {
    addGlobalClass: true
  }

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    const {isColor} = this.props;
    const data = [
      {
        image: `/statics/imgs/icon-gwsq${isColor ? "" : 2}.png`,
        value: '购物省钱'
      },
      {
        image: `/statics/imgs/icon-fxzq${isColor ? "" : 2}.png`,
        value: '分享赚钱'
      },
      {
        image: `/statics/imgs/icon-cyjh${isColor ? "" : 2}.png`,
        value: '创业机会'
      },
      {
        image: `/statics/imgs/icon-czhl${isColor ? "" : 2}.png`,
        value: '超值好礼'
      },
      {
        image: `/statics/imgs/icon-spyhj${isColor ? "" : 2}.png`,
        value: '商品优惠价'
      },
      {
        image: `/statics/imgs/icon-fwzx${isColor ? "" : 2}.png`,
        value: '服务专享'
      },
      {
        image: `/statics/imgs/icon-fwfy${isColor ? "" : 2}.png`,
        value: '服务返佣'
      },
      {
        image: `/statics/imgs/icon-tgjlj${isColor ? "" : 2}.png`,
        value: '推广奖励金'
      }
    ];
    this.setState({data});
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
      <AtGrid columnNum={4} hasBorder={false} data={this.state.data} className={"red"}/>
    )
  }
}
