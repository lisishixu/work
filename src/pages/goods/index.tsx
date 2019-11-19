import Taro, {Component, Config} from '@tarojs/taro'
import {View, Navigator, Button, Text} from '@tarojs/components'
import './index.scss'
import {AtSearchBar} from "taro-ui";
import {thisVoid} from "../../utils/helper";
import {GoodsModel} from "../../models/GoodsModel";
import {GoodsData} from "../../data";
import IconFont from "../../components/iconfont";
import GoodsListCard from '../../components/goods-list--card/goods-list--card';
import GoodsList from "../../components/goods-list/goods-list";

export interface Props {

}

export interface State {
  value: string
  currentKey: string
  currentSort: string
  showMode: string
  classifyID: string
  searchValue: string
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
      value: '',//搜索框默认值
      currentKey: 'zonghe',//zonghe、xiaoliang、jiage、shaixuan
      currentSort: 'asc',//asc、desc
      showMode: 'list',//card表示卡片式、list表示列表式
      classifyID: '',//当前分类id
      searchValue: '',//当前页面搜索字段
      goodsList: GoodsData,//商品列表
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


  // 点击切换排序
  onSort = (nextKey) => {
    if (nextKey === this.state.currentKey) {
      this.setState({currentSort: this.state.currentSort === 'asc' ? 'desc' : 'asc'})
    }
    this.setState({currentKey: nextKey})
  };

  // 点击切换布局方式
  onShowMode = (showMode) => {
    this.setState({showMode: showMode === 'card' ? 'list' : 'card'})
  };

  render() {
    const {currentKey, currentSort, showMode} = this.state;

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

        <View className={"sort"}>
          <Button className={`sort__item  ${currentKey === 'zonghe' ? 'active' : ''}`}
                  onClick={() => this.onSort('zonghe')}>
            <Text className="sort__text">综合</Text>
            <IconFont name={"xiajiantou"} size={20} color={currentKey === 'zonghe' ? '#EB3939' : '#888'}/>
          </Button>
          <Button className={`sort__item  ${currentKey === 'xiaoliang' ? 'active' : ''}`}
                  onClick={() => this.onSort('xiaoliang')}>
            <Text className="sort__text">销量</Text>
          </Button>
          <Button className={`sort__item  ${currentKey === 'jiage' ? 'active' : ''}`}
                  onClick={() => this.onSort('jiage')}>
            <Text className="sort__text">价格</Text>
            {process.env.TARO_ENV === 'alipay' ?
              <IconFont name={"shangpinpaixu"} size={36}
                        color={currentKey === 'jiage' ? '#EB3939' : '#888'}/> :
              <IconFont name={"shangpinpaixu"} size={36}
                        color={currentKey === 'jiage' ? (currentSort === 'asc' ? ['#EB3939', '#888'] : ['#888', '#EB3939']) : '#888'}/>}

          </Button>
          {/*<Button className={`sort__item  ${currentKey === 'shaixuan' ? 'active' : ''}`}*/}
          {/*        onClick={() => this.onSort('shaixuan')}>*/}
          {/*  <Text className="sort__text">筛选</Text>*/}
          {/*  <IconFont name={"shaixuan"} size={20} color={currentKey === 'shaixuan' ? '#EB3939' : '#888'}/>*/}
          {/*</Button>*/}
          <Button className={`sort__item  sort__item--right`} onClick={() => this.onShowMode(showMode)}>
            <IconFont name={showMode === 'card' ? 'liebiao' : 'guanli'} size={30} color={'#666'}/>
          </Button>
        </View>

        {this.state.showMode === 'card' && <GoodsListCard data={this.state.goodsList}/>}

        {this.state.showMode === 'list' && <GoodsList data={this.state.goodsList}/>}

      </View>
    )
  }
}
