import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Image, Navigator} from '@tarojs/components'
import './choiceness.scss'
import {AtTabs, AtTabsPane} from "taro-ui";
import {GoodsData} from "../../data";
import {GoodsModel} from "../../models/GoodsModel";

export interface Props {

}

export interface State {
  current: number,
  classify: any[],
  goodsList: GoodsModel[]
}

export default class GoodsChoiceness extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: '精选榜单'
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      classify: [],
      goodsList: []
    }
  }

  componentWillMount() {
    this.setState({
      goodsList: GoodsData || [],
    })
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }


  handleClick = (index) => {
    this.setState({current: index})
  };


  render() {
    const {goodsList} = this.state;
    return (
      <View className='choiceness bg-color--f2f2f2'>

        <AtTabs
          current={this.state.current}
          tabList={[
            {title: '热销',},
            {title: '时尚'},
            {title: '美妆'},
            {title: '家居'},
            {title: '母婴'},
            {title: '美食'}
          ]}
          onClick={this.handleClick.bind(this)}>

          {[0, 1, 2, 3, 4, 5].map((num) => {
            return <AtTabsPane key={'goodslist' + num}
                               current={this.state.current}
                               index={num}>
              {goodsList.map((it, index) => {
                return <View className="goods" key={'goods' + index}>
                  <Image className="goods__cover" src={it.product_img}>
                    <Text className={`goods__index goods__index--${index + 1}`}>{index + 1}</Text>
                  </Image>
                  <View className="goods__content">
                    <Text className="goods__title ellipsis">{it.product_name}</Text>
                    <Text className="goods__desc ellipsis-2">{it.product_detail}</Text>
                    <View className="goods__data  flex a__items--center j__content--spbe">
                      <View className="goods__price">
                        <Text className="now">{it.product_price}</Text>
                        <Text className="old text--line-through c--666 f__size--28">￥{it.product_price}</Text>
                      </View>
                      <Navigator url={`/pages/goods/detail?id=${it.product_id}`} className={"btn"}>立即购买</Navigator>
                    </View>
                  </View>
                </View>
              })}
            </AtTabsPane>
          })}

        </AtTabs>

      </View>
    )
  }
}
