import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Navigator, RichText, Button, Image} from '@tarojs/components'
import './buy.scss'
import BuyGuide from "../../components/buy-guide/buy-guide";
import MemberRights from "../../components/member-rights/member-rights";
import {AtAvatar, AtDivider} from "taro-ui";
import {EvaluateModel} from "../../models/EvaluateModel";
import {EvaluateData, GoodsData} from "../../data";
import GoodsList from "../../components/goods-list/goods-list";
import {GoodsModel} from "../../models/GoodsModel";
import IconFont from "../../components/iconfont";

export interface Props {

}

export interface State {
  evaluate: EvaluateModel,
  recommendGoods: GoodsModel[]
}

export default class MemberBuy extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: '会员购买详情',
    navigationStyle: "custom"
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      // goods: GoodsData[0],
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
      <View className='buy'>

        <Image className={"cover"} mode={"widthFix"} src={'/statics/imgs/swiper-1.png'}/>


        <View className="bg-color--white text--center price">
          <Text className="c--666 f__size--30">礼包套餐价</Text>
          <Text className="c--eb3 f__weight--bold price__num ">￥198</Text>
        </View>

        <View className="container ">
          <Text className="block text--center margin-bottom--20">旺仔 复原乳牛奶 125ml*瓶/份旺仔 复原乳牛奶 125ml*瓶/份</Text>
          <Text className="f__size--28 c--eb3 margin-bottom--20"> 购买任意礼包套餐，就即可获得超值礼包和五联创客店铺，享受五联创客</Text>
        </View>

        <View className="bg-color--white">
          <View style={{width: '266px', margin: '0 auto '}}>
            <AtDivider content='会员权益' fontSize={30} fontColor='#666' lineColor='#ccc'/>
          </View>
          <MemberRights/>
        </View>

        <View className="container bg-color--white margin-top--20">
          <AtDivider content='  商品详情  ' fontColor='#333333' lineColor='#CCCCCC'/>
          <View className={'shop-detail'}>
            <View className={'box-before shop-box'}>
              <View className={"view"}>
                <Text className={'text'}>品牌：山盟</Text>
              </View>
              <View className={"view"}>
                <Text className={'text'}>规格：125ml*瓶</Text>
              </View>
              <View className={"view"}>
                <Text className={'text'}>保质期：15天</Text>
              </View>
            </View>
            <View className={'shop-box'}>
              <View className={"view"}>
                <Text className={'text'}>名称：旺仔复原乳</Text>
              </View>
              <View className={"view"}>
                <Text className={'text'}>产地：中国</Text>
              </View>
              <View className={"view"}>
                <Text className={'text'}>暂无</Text>
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


        <View className="container margin-top--20">
          <View className="small-title">
            <Text className="c--333 f__weight--bold">图文详情</Text>
          </View>
          <RichText nodes={'15454545'}>
          </RichText>
        </View>

        <BuyGuide/>

        <View className=" bg-color--white margin-top--20 recommend">
          <View className="container small-title">
            <Text className="c--333 f__weight--bold">商品推荐</Text>
            <Navigator className="c--eb3 f__size--30">查看更多</Navigator>
          </View>
          <GoodsList data={this.state.recommendGoods}/>
        </View>

        <View style={{height: '80px', opacity: 0}}>
        </View>
        <View className='goods-action flex a__items--center'>
          {/*<Navigator url={'/pages/index/index'} openType={"switchTab"}*/}
          {/*           className={"flex__1 btn"}>*/}
          {/*  <View className="icon">*/}
          {/*    <IconFont name={'ziyuan1'} color={'#888'} size={44}/>*/}
          {/*  </View>*/}
          {/*  <Text>首页</Text>*/}
          {/*</Navigator>*/}
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
          <Button className="flex__2 btn now-buy">立即购买成为店主</Button>
        </View>


      </View>
    )
  }
}
