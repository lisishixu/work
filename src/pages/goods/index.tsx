import Taro, {Component, Config} from '@tarojs/taro'
import {View, Navigator} from '@tarojs/components'
import './index.scss'
import {AtSearchBar} from "taro-ui";
import {thisVoid} from "../../utils/helper";
import {GoodsModel} from "../../models/GoodsModel";
import {GoodsData} from "../../data";

export interface Props {

}

export interface State {
  value: string
  goodsList: GoodsModel[]
}

export default class GoodsIndex extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: "商品列表"
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      goodsList: GoodsData
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
    return (
      <View className='index'>
        <Navigator url={'/pages/search/index'} className="at-col  search">
          <AtSearchBar
            disabled
            value={this.state.value}
            placeholder={"搜索商品"}
            onChange={thisVoid}
          />
        </Navigator>


      </View>
    )
  }
}
