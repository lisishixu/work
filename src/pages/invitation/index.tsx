import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Text} from '@tarojs/components'
import './index.scss'
import IconFont from "../../components/iconfont";
import {AtButton, AtDivider} from "taro-ui";
import {GoodsData} from "../../data";
import {GoodsModel} from "../../models/GoodsModel";
import GoodsListCard from "../../components/goods-list--card/goods-list--card";
import FixedButton from "../../components/fixed-button/fixed-button";
import {thisVoid} from "../../utils/helper";


export interface Props {

}

export interface State {
  recommendList: GoodsModel[]//首页推荐商品
}

export default class Invitation extends Component<Props, State> {

  config: Config = {
    navigationStyle: "custom"
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      recommendList: GoodsData
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
      <View className='index invitation-box'>
        <Image src={'../../statics/imgs/invitation.png'} style={'width:100%'}/>
        <AtButton size='small' className={'btn--step'}>简单三步 立享佣金</AtButton>

        <View className={'step--detail'}>
          <View className={'detail--num'}>
            <View className={'view'}>
              <IconFont name='fenxiang-1' size={60} color='#fff'/>
            </View>
            <Text className={'f__size--25 margin-top--30'} style={'color:#9897FE'}>分享给好友</Text>
          </View>
          <View className={'detail--num'}>
            <View className={'view'}>
              <IconFont name='yaoqinghaoyou' size={60} color='#fff'/>
            </View>
            <Text className={'f__size--25 margin-top--30'} style={'color:#9897FE'}>好友注册</Text>
          </View>
          <View className={'detail--num'}>
            <View className={'view'}>
              <IconFont name='jiludanzilishijilu' size={60} color='#fff'/>
            </View>
            <Text className={'f__size--25 margin-top--30'} style={'color:#9897FE'}>下单成功</Text>
          </View>
          <View className={'detail--num'}>
            <View className={'view'}>
              <IconFont name='yonghu_shouyi' size={60} color='#fff'/>
            </View>
            <Text className={'f__size--25 margin-top--30'} style={'color:#9897FE'}>你得现金</Text>
          </View>
        </View>
        <AtDivider content='更多商品' fontColor='#F12737' lineColor='#F12737'/>
        <GoodsListCard data={this.state.recommendList} isShowBrokerage={true} isShowOldPrice={false}/>
        <FixedButton text={'邀请好友 立赚现金'} onClick={thisVoid}/>
      </View>
    )
  }
}
