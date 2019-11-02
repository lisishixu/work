import Taro, {Component, Config} from '@tarojs/taro'
import {View} from '@tarojs/components'
import './index.scss'
import {AtSearchBar, AtTag} from "taro-ui";

export interface Props {

}

export interface State {
  value: string
  hotSearch: string[]
}

export default class SearchIndex extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: "搜索"
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      hotSearch: ['雅漾喷雾', '雅漾喷雾', '雅漾喷雾', '雅漾喷雾',]
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


  // 输入框内容变化
  searchOnChange = (value) => {
    this.setState({value})
  };

  // 搜索
  onSearch = () => {
    Taro.showToast({
      icon: 'none',
      title: `要搜索的词是${this.state.value}`
    })
  };

  // 点击搜索候选词
  onHotSearch = (tag) => {
    this.setState({value: tag.name}, () => {
      this.onSearch()
    })
  };

  render() {
    return (
      <View className='index'>

        <View className="container bg-color--f2f2f2">
          <AtSearchBar
            value={this.state.value}
            placeholder={"搜索商品"}
            showActionButton
            onChange={this.searchOnChange.bind(this)}
            onConfirm={this.onSearch}
            onActionClick={this.onSearch}
          />
        </View>

        <View className="container">
          <View className="sm-title">推荐搜索</View>
          <View>
            {this.state.hotSearch.map((item, index) => {
              return <View className="tag">
                <AtTag key={'s' + index}
                       name={item}
                       type='primary'
                       active={index < 2}
                       onClick={this.onHotSearch.bind(this)}
                       circle>
                  {item}
                </AtTag>
              </View>
            })}
          </View>
        </View>


      </View>
    )
  }
}
