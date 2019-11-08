import Taro, {Component, Config} from '@tarojs/taro'
// import './index.scss'
import {GoodsData} from "../../data";
import {GoodsModel} from "../../models/GoodsModel";
import ShaAndCollection from "../../components/shareAndCollection/shaAndCollection";
export interface Props {

}
export interface State {
  isEdit: boolean,//是否在编辑状态
  sharelist: GoodsModel[]
  isAllChecked: boolean,//是否全选
}
export default class Index extends Component<Props, State> {
  config: Config = {};
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      sharelist: GoodsData,
      isAllChecked: false
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
  render() {
    return <ShaAndCollection nullTitle={'暂无收藏'} isBtn={'取消收藏'}  isfont={true} isalert={'你確定取消收藏嗎?'} data={this.state.sharelist}/>
  }
}
