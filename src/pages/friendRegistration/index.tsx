import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import IconFont from "../../components/iconfont";
import './index.scss'
import { AtTabs, AtTabsPane} from "taro-ui";
import GoodsListCard from "../../components/goods-list--card/goods-list--card";
import {GoodsData} from "../../data";
import {GoodsModel} from "../../models/GoodsModel";
import MemberRights from "../../components/member-rights/member-rights";
import FixedButton from "../../components/fixed-button/fixed-button";
import {thisVoid} from "../../utils/helper";
import TipTitle from "../../components/tip-title/tip-title";
import InvitationHeard from "../../components/invitation-heard/invitation-heard";

export interface Props {

}

export interface State {
  current:number,
  recommendList: GoodsModel[]//首页推荐商品
}

export default class friendRegistration extends Component<Props, State> {

    config: Config = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
          current: 0,
          recommendList: GoodsData
        }
    }
  handleClick (value) {
    this.setState({
      current: value
    })
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
      const tabList = [{ title: '全部礼包' }, { title: '邀请攻略' }]
        return (
            <View className='index'>
              <InvitationHeard myMoney={100} friendMoney={50} heardImg={'../../statics/imgs/friend.png'} myText={'奖励发放到余额'} friendText={'金币奖励+会员权益+198礼包'}/>
              <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)} className={'tab--content'}>
                <AtTabsPane current={this.state.current} index={0} >
                  <View style='padding: 10px 0'>
                    <GoodsListCard data={this.state.recommendList} isShowOldPrice={false}/>
                  </View>
                </AtTabsPane>
                <AtTabsPane current={this.state.current} index={1} >
                  <View className={'text--center'} style='padding: 10px 0'>
                    <View className={'c--010 f__size--30'} style={'font-weight:bold'}>如何邀请注册</View>
                    <View className={'friend--step'}>
                    <View className={'frist--flex'}>
                      <View className={'view'}>
                        <IconFont name='fenxiang-1' size={60} color='#fff'/>
                      </View>
                      <Text className={'f__size--25 c--eb3 margin-top--20'}>分享注册链接</Text>
                    </View>
                    <View className='at-icon at-icon-arrow-right' style={'color:#F12737;font-size:32px;position:absolute;top:15%'}></View>
                    <View className={'frist--flex'}>
                      <View className={'view'}>
                        <IconFont name='yaoqinghaoyou' size={60} color='#fff'/>
                      </View>
                      <Text className={'f__size--25 c--eb3 margin-top--20'}>好友购买礼包注册</Text>
                    </View>
                  </View>
                    <TipTitle value={'注册成功可享以下特权'}/>
                    <MemberRights isColor={false}></MemberRights>
                  </View>
                </AtTabsPane>
              </AtTabs>

              <FixedButton text={'邀请好友 立赚现金'} onClick={thisVoid} paddingTop={'150px'}/>
            </View>
        )
    }
}
