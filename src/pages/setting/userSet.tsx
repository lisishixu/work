import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Navigator, Picker} from '@tarojs/components'
import './userSet.scss'
import {AtAvatar, AtIcon, AtList, AtListItem, AtRate} from "taro-ui";
import FixedButton from "../../components/fixed-button/fixed-button";
import IconFont from "../../components/iconfont";
import {uploadFile} from "../../utils/request";
// import api from "../../constants/api";

export interface Props {

}

export interface State {
  isVip: boolean
  vipLevel: number
  value: number
  notUser: boolean
  avatar: string
  selector:any[]
  selectorChecked:string
  dateSel:string
}

export default class UserSet extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: "设置",
    navigationBarTextStyle: "white",
    navigationBarBackgroundColor: '#F12737'
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      isVip: true,
      vipLevel: 4,
      value: 4,
      notUser: false,
      avatar: '../../statics/imgs/banner1.png',
      selector: ['男', '女'],
      selectorChecked: '男',
      dateSel: '1990-01-01'
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



  // 更改头像
  onChangeAvatar = () => {
    Taro.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    }).then(res => {
      //   返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      const avatar = res.tempFilePaths[0];
      uploadFile(avatar,(res)=>{
        console.log(res)

      })
      // post(api.uploadImg,{
      //   imgUrl:Taro.arrayBufferToBase64(avatar)
      // },res=>{
      //   console.log(res);
      // })
      //   此处可以发起ajax请求上传文件后再赋值
      // this.setState({avatar});
    })
  };
  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }
  render() {
    return (
      <View className='userSet'>
        <View>
          <View className={'setImg'}>
            <Text className={'text f__size--28 c--333'}>头像</Text>
            <View className={'text--right'}
                  style={'margin-left:auto'}
                  onClick={this.onChangeAvatar}
            >
              <AtAvatar circle image={this.state.avatar}/>
            </View>
          </View>
          <AtList>
            <AtListItem title='昵称' extraText='包大人' arrow='right'/>
            <AtListItem title='会员ID' extraText='11122222222' arrow='right'/>
            {this.state.isVip && <View className={'vipLevel setImg'}>
                <Text className={'text f__size--28 c--333'}>会员等级</Text>
              {this.state.vipLevel > 5 ?
                <View className={'view'}><IconFont name={'huangguan'} size={40} color={'#fff'}/></View>
                : <View style={'margin-left:auto'}><AtRate max={4} value={this.state.value}/> </View>
              }
            </View>}
             <View className={'vipLevel setImg'} style={'position:relative'}>
                <Text className={'text f__size--28 c--333'}>性别</Text>
              <View  style={'margin-left:83%'} className={'f__size--28 c--666'}>
                <Picker mode='selector' range={this.state.selector} onChange={this.onChange} value={0}>
                 <View> {this.state.selectorChecked}</View>
                </Picker>
              </View>
               <View className={'item-extra__icon'}>
                 <AtIcon value='chevron-right' size='17.5' color='#666'></AtIcon>
               </View>
             </View>
            <View className={'vipLevel setImg'} style={'position:relative'}>
              <Text className={'text f__size--28 c--333'}>生日</Text>
              <View  style={'margin-left:65%'} className={'f__size--28 c--666 picker'}>
                <Picker value={'0'} mode='date' onChange={this.onDateChange} start={'1970-01-01'} end={'2020-01-01'}>
                  <View>{this.state.dateSel}</View>
                </Picker>
              </View>
              <View className={'item-extra__icon'}>
                <AtIcon value='chevron-right' size='17.5' color='#666'></AtIcon>
              </View>
            </View>
            <Navigator url={'/pages/bind/bindTel'}>
              <AtListItem title='电话号码' extraText='去绑定' arrow='right'/>
            </Navigator>
          </AtList>
          <AtList>
            {this.state.notUser && <AtListItem title='微信二维码' extraText='上传微信二维码' arrow='right'/>}
            <AtListItem title='所在地区' extraText='金水区' arrow='right'/>
            <Navigator url={'/pages/bind/userId'}>
            <AtListItem title='我的实名认证' arrow='right'/>
            </Navigator>
            <AtListItem title='我的邀请人' extraText='kris吴'/>
          </AtList>
          <AtList>
            <AtListItem title='我的银行卡' arrow='right'/>
            <Navigator url={'/pages/bind/changePassword'}>
              <AtListItem title='修改密码' arrow='right'/>
            </Navigator>
          </AtList>
        </View>
        <FixedButton text={'退出当前账号'} bottom={'2vh'}/>
      </View>
    )
  }
}
