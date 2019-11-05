import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import './index.scss'
import {AtAvatar, AtDivider, AtGrid} from "taro-ui";
import {UserModel} from "../../models/UserModel";
import {GoodsData, UserData} from "../../data";
import {GoodsModel} from "../../models/GoodsModel";
import GoodsList from "../../components/goods-list/goods-list";
import FixedButton from "../../components/fixed-button/fixed-button";
import {thisVoid} from "../../utils/helper";

export interface Props {

}

export interface State {
  user: UserModel
  goods: GoodsModel[]
}

export default class Member extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: '注册五联创客'
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      user: UserData,
      goods: GoodsData
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

  onOpen = () => {
    Taro.navigateTo({
      url: `/pages/member/buy`
    })
  };

  render() {
    return (
      <View className='index'>

        <View className="flex a__items--center container user">
          <AtAvatar circle image={this.state.user.headimg}>
          </AtAvatar>
          <View className="margin-left--20 f__size--28">
            <View>
              <Text className="c--666 margin-right--10">Hi，我是</Text>
              <Text className="c--333 f__weight--bold">{this.state.user.name}</Text>
            </View>
            <View className="c--333">分享一个正品购物平台给你~</View>
          </View>
        </View>

        <View className="card">
          <View className="card-box">
            <Image src={'../../statics/imgs/card.png'} mode={"widthFix"} className={"card__img"}/>
            <Text className="card__price">198</Text>
          </View>
          <Image src={'../../statics/imgs/card--bg.png'} className="card__bg"/>
        </View>

        <View className="tip-title">
          <Text className={'tip-title__text'}>店主可享以下权限</Text>
          <Image src={'/statics/imgs/line.png'} className={'tip-title__line'}/>
        </View>

        <AtGrid columnNum={4} hasBorder={false} data={
          [
            {
              image: '/statics/imgs/icon-gwsq.png',
              value: '购物省钱'
            },
            {
              image: '/statics/imgs/icon-fxzq.png',
              value: '分享赚钱'
            },
            {
              image: '/statics/imgs/icon-cyjh.png',
              value: '创业机会'
            },
            {
              image: '/statics/imgs/icon-czhl.png',
              value: '超值好礼'
            },
            {
              image: '/statics/imgs/icon-spyhj.png',
              value: '商品优惠价'
            },
            {
              image: '/statics/imgs/icon-fwzx.png',
              value: '服务专享'
            },
            {
              image: '/statics/imgs/icon-fwfy.png',
              value: '服务返佣'
            },
            {
              image: '/statics/imgs/icon-tgjlj.png',
              value: '推广奖励金'
            }
          ]
        }/>

        <View style={{width: '266px', margin: '0 auto '}}>
          <AtDivider content='请选择任一礼包，购买注册' fontSize={30} fontColor='#666' lineColor='#ccc'/>
        </View>

        <GoodsList data={this.state.goods}/>

        <FixedButton text={'立即注册开通五联创客店主'} onClick={this.onOpen}/>

      </View>
    )
  }
}
