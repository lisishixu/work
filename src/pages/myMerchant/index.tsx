import Taro, {Component, Config} from '@tarojs/taro'
import {ScrollView, View} from '@tarojs/components'
import './index.scss'
import {AtSearchBar} from "taro-ui";
import SubordinateItem from "../../components/subordinate-item/subordinate-item";

export interface Props {

}

export interface State {
  searchValue: string
}

export default class Index extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: '我的商家'
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
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

  // 搜索框内容修改
  onChangeInput = (searchValue) => {
    this.setState({searchValue})
  };


  render() {
    return (
      <View className='index'>

        <AtSearchBar
          value={this.state.searchValue}
          placeholder={'请输入商家名称'}
          showActionButton
          onChange={this.onChangeInput.bind(this)}/>

        <ScrollView>
          {[0, 1, 2, 3].map((it, index) => {
            return <SubordinateItem {...{it}} key={'subor' + index} isShop={true}/>
          })}
        </ScrollView>

      </View>
    )
  }
}
