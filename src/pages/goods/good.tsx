import Taro, {Component, Config} from '@tarojs/taro'
import {Button, View, Text, ScrollView, Image} from '@tarojs/components'
import './good.scss'
import {GoodsModel} from "../../models/GoodsModel";
import {GoodsData} from "../../data";
import IconFont from "../../components/iconfont";

export interface Props {

}

export interface State {
  current: number,
  goodsList: GoodsModel[]
}

export default class GoodsGood extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: '甄选好货',
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
      {title: '推荐',},
      {title: '时尚馆',},
      {title: '美妆馆',},
      {title: '生活馆',},
      {title: '电器馆',},
      {title: '母婴馆',},
    ];
    return (
      <View className='good bg-color--f2f2f2'>

        <View className="tabs">
          {tabs.map((it, index) => {
            return <Button className={`btn ${this.state.current === index ? "current" : ""}`}
                           key={'tabs' + index}
                           onClick={() => {
                             this.setState({current: index})
                           }}>
              <Text className="name">{it.title}</Text>
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
                    {/*<Text className="now">{it.product_price}</Text>*/}
                    {/*<Text className="old text--line-through c--666 f__size--28">￥{it.product_price}</Text>*/}
                  </View>
                  <Button className={"btn"} onClick={() => {
                    const goodsList = this.state.goodsList;
                    goodsList[index]['islike'] = !goodsList[index]['islike'];
                    this.setState({goodsList});
                  }}>
                    <View className="inline--block margin-right--10">
                      <IconFont name={'xihuan'} color={it['islike'] ? 'red' : '#888'}></IconFont>
                    </View>
                    <Text>457人喜欢</Text>
                  </Button>
                </View>
              </View>
            </View>
          })}

        </ScrollView>

      </View>
    )
  }
}
