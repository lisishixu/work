import Taro, {Component, Config} from '@tarojs/taro'
import {Text, View} from '@tarojs/components'
import './index.scss'
import './agent.scss'
import InvitationHeard from "../../components/invitation-heard/invitation-heard";
import IconFont from "../../components/iconfont";
import MemberRights from "../../components/member-rights/member-rights";
import TipTitle from "../../components/tip-title/tip-title";
import FixedButton from "../../components/fixed-button/fixed-button";

export interface Props {

}

export interface State {

}

export default class agent extends Component<Props, State> {

    config: Config = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {}
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
            <View className='agent invitation-box'>
              <InvitationHeard myMoney={500} friendMoney={50} heardImg={'../../statics/imgs/agent.png'} myText={'现金(可提现)'} friendText={'会员权益+198大礼包'}/>
              <View className={'agent-title'}>活动玩法
                <View className={'agent-title--bt'}></View>
              </View>
              <View className={'step--detail'}>
                <View className={'detail--num'}>
                  <View className={'view'}>
                    <IconFont name='fenxiang-1' size={60} color='#fff'/>
                  </View>
                  <Text className={'f__size--25 margin-top--30'} style={'color:#F12737'}>分享给好友</Text>
                </View>
                <View className={'detail--num'}>
                  <View className={'view'}>
                    <IconFont name='yaoqinghaoyou' size={60} color='#fff'/>
                  </View>
                  <Text className={'f__size--25 margin-top--30'} style={'color:#F12737'}>商家入驻</Text>
                </View>
                <View className={'detail--num'}>
                  <View className={'view'}>
                    <IconFont name='jiludanzilishijilu' size={60} color='#fff'/>
                  </View>
                  <Text className={'f__size--25 margin-top--30'} style={'color:#F12737'}>审核成功</Text>
                </View>
                <View className={'detail--num'}>
                  <View className={'view'}>
                    <IconFont name='yonghu_shouyi' size={60} color='#fff'/>
                  </View>
                  <Text className={'f__size--25 margin-top--30'} style={'color:#F12737'}>你得现金</Text>
                </View>
              </View>
              <TipTitle value={'注册成功可享以下特权'}/>
              <MemberRights isColor={false}></MemberRights>
              <FixedButton text={'邀请商家入驻 立赚现金'}/>
            </View>
        )
    }
}
