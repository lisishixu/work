import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Text} from '@tarojs/components'
import IconFont from "../../components/iconfont";
import './index.scss'
import { AtTabs, AtTabsPane} from "taro-ui";
import GoodsList from "../../components/goods-list/goods-list";
import {GoodsData} from "../../data";
import {GoodsModel} from "../../models/GoodsModel";
// import FixedButton from "../../components/fixed-button/fixed-button";
// import {thisVoid} from "../../utils/helper";

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
              <Image src={'../../statics/imgs/friend.png'} style={'width:100%'}></Image>
              <View className={'reward'}>
                <View className={'reward-box'}>
                  <View className={'reward--font'}>您可获得</View>
                  <Text style={{fontSize:'60px'}} className={'c--eb3'}>100</Text>
                  <View className={'f__size--26 c--eb3'}>奖励发放到余额</View>
                </View>
                <View className={'reward-box'}>
                  <View className={'reward--font'}>好友可得</View>
                  <Text style={{fontSize:'60px'}} className={'c--eb3'}>10</Text>
                  <View className={'f__size--26 c--eb3'}>
                    金币奖励+会员权益 +198礼包
                  </View>
                </View>
              </View>
              <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)} className={'tab--content'}>
                <AtTabsPane current={this.state.current} index={0} >
                  <View style='padding: 10px 0'>
                    <GoodsList data={this.state.recommendList} isShowOldPrice={false}/>
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
                    <View className='at-icon at-icon-arrow-right' style={'color:#F12737;font-size:32px;position:absolute;top:35%'}></View>
                    <View className={'frist--flex'}>
                      <View className={'view'}>
                        <IconFont name='yaoqinghaoyou' size={60} color='#fff'/>
                      </View>
                      <Text className={'f__size--25 c--eb3 margin-top--20'}>好友购买礼包注册</Text>
                    </View>
                  </View>
                  </View>
                </AtTabsPane>
              </AtTabs>
              {/*<FixedButton text={'邀请好友 立赚现金'} onClick={thisVoid}/>*/}
            </View>
        )
    }
}
