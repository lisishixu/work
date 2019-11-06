import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import './index.scss'
import {AtAvatar, AtDivider} from "taro-ui";
import {UserModel} from "../../models/UserModel";
import {GoodsData, UserData} from "../../data";
import {GoodsModel} from "../../models/GoodsModel";
import GoodsList from "../../components/goods-list/goods-list";
import FixedButton from "../../components/fixed-button/fixed-button";
import MemberRights from "../../components/member-rights/member-rights";
import TipTitle from "../../components/tip-title/tip-title";

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

        <TipTitle value={'店主可享以下权限'}/>

        <MemberRights isColor={true}/>

        <View style={{width: '266px', margin: '0 auto '}}>
          <AtDivider content='请选择任一礼包，购买注册' fontSize={30} fontColor='#666' lineColor='#ccc'/>
        </View>

        <GoodsList data={this.state.goods}/>

        <FixedButton text={'立即注册开通五联创客店主'} onClick={this.onOpen}/>

      </View>
    )
  }
}
