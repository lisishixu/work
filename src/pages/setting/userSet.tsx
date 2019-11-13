import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import './userSet.scss'
import {AtList, AtListItem, AtRate} from "taro-ui";
import FixedButton from "../../components/fixed-button/fixed-button";
import IconFont from "../../components/iconfont";

export interface Props {

}

export interface State {
  isVip:boolean
  vipLevel:number
  value:number
}

export default class UserSet extends Component<Props, State> {

  config: Config = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      isVip:true,
      vipLevel:4,
      value:4
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
      <View className='userSet'>
        <View>
          <View className={'setImg'}>
            <Text className={'text f__size--28 c--333'}>头像</Text>
             <View className={'text--right'} style={'margin-left:auto'}><Image src={'../../statics/imgs/banner1.png'} className={'img'}/></View>
          </View>
          <AtList>
            <AtListItem title='昵称' extraText='包大人' arrow='right'/>
            <AtListItem title='会员ID' extraText='11122222222' arrow='right'/>
            {this.state.isVip&&<View className={'vipLevel setImg'}>
              <Text className={'text f__size--28 c--333'}>会员等级</Text>
              {this.state.vipLevel>5?
                <View className={'view'}><IconFont name={'huangguan'} size={40} color={'#fff'}/></View>
                :<AtRate max={10} value={this.state.value}/>
              }

            </View>}

            <AtListItem title='性别' extraText='女' arrow='right'/>
            <AtListItem title='生日' extraText='未填写' arrow='right'/>
            <AtListItem title='电话号码' extraText='去绑定' arrow='right'/>
          </AtList>
          <AtList>
            <AtListItem title='所在地区' extraText='金水区' arrow='right'/>
            <AtListItem title='我的实名认证' arrow='right' />
            <AtListItem title='我的邀请人' extraText='kris吴'/>
          </AtList>
          <AtList>
            <AtListItem title='我的银行卡' arrow='right'/>
            <AtListItem title='修改密码' arrow='right'/>
          </AtList>
        </View>
        <FixedButton text={'退出当前账号'} bottom={'2vh'}/>
      </View>
    )
  }
}
