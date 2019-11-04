import Taro, {Component, Config} from '@tarojs/taro'
import {Button, View, Text, ScrollView, Image, Navigator} from '@tarojs/components'
import './new.scss'
import {GoodsModel} from "../../models/GoodsModel";
import {GoodsData} from "../../data";

export interface Props {

}

export interface State {
  current: number,
  goodsList: GoodsModel[]
}

export default class GoodsNew extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: '新品首发',
    navigationBarTextStyle: 'white',
    navigationBarBackgroundColor: '#ed282b'
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
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
    const tabs = [
      {name: '精选', desc: '最近很火'},
      {name: '时尚', desc: '美妆穿搭'},
      {name: '手机', desc: '新机速递'},
      {name: '生活', desc: '居家好物'},
      {name: '潮玩', desc: '玩具大全'},
    ];
    return (
      <View className='new bg-color--f2f2f2'>

        <View className="tabs">
          {tabs.map((it, index) => {
            return <Button className={`btn ${this.state.current === index ? "current" : ""}`}
                           key={'tabs' + index}
                           onClick={() => {
                             this.setState({current: index})
                           }}>
              <Text className="name">{it.name}</Text>
              <Text className="">{it.desc}</Text>
            </Button>
          })}
        </View>

        <ScrollView className="tab-content">

          {this.state.goodsList.map((it, index) => {
            return <View className="goods" key={'goods' + index}>
              <Image className="goods__cover" src={it.product_img}>
              </Image>
              <View className="goods__content">
                <Text className="goods__title ellipsis">{it.product_name}</Text>
                <Text className="goods__desc ellipsis-2">{it.product_detail}</Text>
                <View className="goods__data  flex a__items--center j__content--spbe">
                  <View className="goods__price">
                    <Text className="now">{it.product_price}</Text>
                    <Text className="old text--line-through c--666 f__size--28">￥{it.product_price}</Text>
                  </View>
                  <Navigator url={`/pages/goods/detail?id=${it.product_id}`} className={"btn"}>立即抢购</Navigator>
                </View>
              </View>
            </View>
          })}

        </ScrollView>

      </View>
    )
  }
}
