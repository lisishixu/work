import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Text, Progress, Button, Navigator, RichText, Block} from '@tarojs/components'
import './detail.scss'
import {GoodsModel} from "../../models/GoodsModel";
import {EvaluateData, GoodsData} from "../../data";
import {AtAvatar, AtCountdown, AtDivider} from "taro-ui";
import IconFont from "../../components/iconfont";
import {EvaluateModel} from '../../models/EvaluateModel';

export interface Props {

}
export interface State {
  isSeckill: boolean,//是不是秒杀抢购
  goods: GoodsModel,
  evaluate: EvaluateModel
  recommendGoods: GoodsModel[]
}

export default class GoodsDetail extends Component<Props, State> {

  config: Config = {
    navigationStyle: 'custom'
  };
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      isSeckill: true,
      goods: GoodsData[0],
      evaluate: EvaluateData[0],
      recommendGoods: GoodsData
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
      <View className='detail bg-color--f2f2f2'>
        <Image src={this.state.goods.product_img} className={"goods__cover"}
               onClick={() => {
                 this.setState({isSeckill: !this.state.isSeckill})
               }}>
        </Image>
        {this.state.isSeckill ?
          <Block>
            <View className="container seckill">

              <View className="seckill-price">
                <View className="seckill-price__now">
                  <Text className={"f__weight--blod"} style={{fontSize: '16px'}}>￥16.8</Text>
                  <Text className={"tag"}>疯狂价</Text>
                </View>
                <View className="seckill-price__old">
                  <Text>原价</Text>
                  <Text className={"text--line-through"}>￥16.8</Text>
                </View>
              </View>
              <View className="seckill-time">
                <View>距结束
                  <AtCountdown
                    className={"countdown"}
                    format={{hours: ':', minutes: ':', seconds: ''}}
                    seconds={999}
                    // onTimeUp={this.onTimeUp.bind(this)}
                  />
                </View>
                <Progress
                  className={"progress"}
                  active
                  percent={50}
                  strokeWidth={10}
                  color={'#ff7d0c'}
                  activeColor={'#ff7d0c'}
                  backgroundColor={'#f75b21'}
                  borderRadius={8}
                >
                  <Text className={"progress__text"}>已抢50%</Text>
                </Progress>
              </View>

            </View>
            <View className="container flex a__items--center j__content--spbe">
              <Text className="ellipsis-2 title">{this.state.goods.product_name}</Text>
              <Button className={"btn-collect"}>
                <IconFont name={'shoucang'} size={26}/>
                <Text className={"text"}>收藏</Text>
              </Button>
            </View>
          </Block> :
          <Block>
            <View className="container ">
              <View className="flex a__items--center j__content--spbe">
                <View className="price flex__1">
                  <View className="price__now">
                    <Text className={"f__weight--blod"} style={{fontSize: '16px'}}>￥16.8</Text>
                    <Text className={"tag"}>疯狂价</Text>
                  </View>
                  <View className="price__old">
                    <Text>原价</Text>
                    <Text className={"text--line-through"}>￥16.8</Text>
                  </View>
                </View>
                <Button className={"btn-collect"}>
                  <IconFont name={'shoucang'} size={26}/>
                  <Text className={"text"}>收藏</Text>
                </Button>
              </View>
              <Text className="ellipsis-2 title">{this.state.goods.product_name}</Text>
            </View>
          </Block>}
        <View className="container bg-color--white margin-top--20">
          <AtDivider content='  商品详情  ' fontColor='#333333' lineColor='#CCCCCC' />
          <View className={'shop-Detai'}>
              <View className={'box-before shop-box'}>
                <View>
                  <Text>品牌：山盟</Text>
                </View>
                <View>
                  <Text>规格：125ml*瓶</Text>
                </View>
                <View>
                  <Text>保质期：15天</Text>
                </View>
              </View>
            <View className={'shop-box'}>
              <View>
                <Text>名称：旺仔复原乳</Text>
              </View>
              <View>
                <Text>产地：中国</Text>
              </View>
              <View>
                <Text>暂无</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="margin-top--20 container evaluate">
          <View className="small-title">
            <View>
              <Text className="c--333 f__weight--bold margin-right--10">宝贝评价</Text>
              <Text className="c--666 f__size--28 ">(288)</Text>
            </View>
            <Navigator className="c--eb3 f__size--30">查看更多</Navigator>
          </View>
          <View className="evaluate__item">
            <View className="flex a__items--center evaluate__user">
              <AtAvatar className={"user__headimg"} circle
                        image={this.state.evaluate.user.headimg}>
              </AtAvatar>
              <Text className="c--666 user__name">{this.state.evaluate.user.name}</Text>
            </View>
            <View className="evaluate__content">
              {this.state.evaluate.content}
            </View>
          </View>
        </View>

        <View className="container margin-top--20 recommend">
          <View className="small-title">
            <Text className="c--333 f__weight--bold">商品推荐</Text>
            <Navigator className="c--eb3 f__size--30">查看更多</Navigator>
          </View>
          <View className="recommend-wrap">
            {this.state.recommendGoods.map((it, index) => {
              return <View className="recommend__item" key={'re' + index}>
                <Image className={'cover'} src={it.product_img}>
                </Image>
                <Text className="title">{it.product_name}</Text>
                <Text className="price">￥{it.product_price}</Text>
              </View>
            })}
          </View>
        </View>

        <View className="container margin-top--20">
          <View className="small-title">
            <Text className="c--333 f__weight--bold">图文详情</Text>
          </View>
          <RichText nodes={'15454545'}>
          </RichText>
        </View>


        <View className="container margin-top--20 guide">
          <View className="guide-title">
            <Text>五联创客购物指南</Text>
            <View className="iconfont">
              <IconFont name={'xiala'} color={'#F12737'} size={26}/>
            </View>
          </View>
          <View>
            <Text className="block margin-top--20 f__weight--bold f__size--30">1.消费者下单</Text>
            <Text className="c--666 f__size--28">每天下单时间：00:00 - 23:00</Text>

            <Text className="block margin-top--20 f__weight--bold f__size--30">2.货物自提</Text>
            <Text className="c--666 f__size--28">消费者根据自己下单相对应的门店，凭自提码提货.提货时间根据门店的营业时间</Text>
            <Text className="block margin-top--20 f__weight--bold f__size--30">3.100%售后</Text>
            <Text className="c--666 f__size--28">消费者遇到任何问题，可以直接与下单的门店沟通自取</Text>
          </View>
        </View>
        <View style={{height: '80px', opacity: 0}}>
        </View>
        <View className='goods-action flex a__items--center'>
          <Navigator url={'/pages/index/index'} openType={"switchTab"}
                     className={"flex__1 btn"}>
            <View className="icon">
              <IconFont name={'ziyuan1'} color={'#888'} size={44}/>
            </View>
            <Text>首页</Text>
          </Navigator>
          <Button className={"flex__1 btn"} openType={"contact"}>
            <View className="icon">
              <IconFont name={'kefu'} color={'#888'} size={44}/>
            </View>
            <Text>客服</Text>
          </Button>
          <Button className={"flex__1 btn"} openType={"share"}>
            <View className="icon">
              <IconFont name={'13'} color={'#888'} size={44}/>
            </View>
            <Text>分享</Text>
          </Button>
          <Button className="flex__2 btn add-cart">加入购物车</Button>
          <Button className="flex__2 btn now-buy">立即购买</Button>
        </View>
      </View>
    )
  }
}
