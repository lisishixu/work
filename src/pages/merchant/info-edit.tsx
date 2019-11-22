import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Button, Image, Navigator, Picker} from '@tarojs/components'
import './info-edit.scss'
import {AtInput, AtList, AtListItem} from "taro-ui";
import {MerchantModel} from "../../models/MerchantModel";
import IconFont from "../../components/iconfont";
import api from "../../constants/api";
import {post} from "../../utils/request";
import {getDATA} from "../../utils/helper";
export interface Props {

}

export interface State extends MerchantModel {
}

export default class MerchantInfoEdit extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: '商家上传信息'
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      id: '41354153413',//店铺编号
      address: '',//店铺地址
      name: '',//店主姓名
      phone: '',
      idcard: '',//身份证
      businessLicense: '',//营业执照
      time: '2019/10/12 10:10:58',//入驻时间
      selector: [''],
      selectorChecked: '',
      addressId:[''],
      addressIdChecked:'',
      checkedCity:'',
      AddressIdCity:'',
      Cityselector:[''],
      CityaddressId:[''],
      countySelector:[''],
      countyAddressId:[''],
      countychecked:'',
      countycheckedAddress:'',
      userTel:'',
      userCode:'',
      userId:'',
      userName:'',
      zheng:'',
      fan:'',
    }
  }


  componentWillMount() {
    this.searchArea()
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
    if(getDATA('userInfo')){
      const userInfo = getDATA('userInfo')
      this.setState({
        userId:userInfo.userId,
        userName:userInfo.userName,
        zheng:userInfo.zheng,
        fan:userInfo.fan
      })
      console.log(this.state.userId)
    }
  }

  componentDidHide() {
  }

  // 上传门头图
  onUpload = () => {
    Taro.chooseImage({
      count: 1,
    }).then(res => {
      const tempFilePaths = res.tempFilePaths;
      this.setState({cover: tempFilePaths[0]})
    })
  };

  // 文本框输入
  handleChange = (name = '', value) => {
    // @ts-ignore
    this.setState({
      [name]: value
    });
    // 2019-11-14摘自taro-ui官网：在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  };
  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value],
      addressIdChecked:this.state.addressId[e.detail.value]
    },()=>{
      this.searchAreaCity()
      this.countysearcgArea()
    })
  }
  onChangeCity = e => {
    this.setState({
      checkedCity: this.state.Cityselector[e.detail.value],
      AddressIdCity:this.state.CityaddressId[e.detail.value]
    },()=>{
      this.countysearcgArea()
    })
  }
  onChangecounty = e => {
    this.setState({
      countychecked: this.state.countySelector[e.detail.value],
      countycheckedAddress:this.state.countyAddressId[e.detail.value]
    })
  }
  searchArea (){
    post(api.searchArea,{},res=>{
      let arr = [];
      let addressId = [];
      for (let i = 0 ; i < res.data.length ; i++){
        // @ts-ignore
        arr.push(res.data[i].addressName)
        // @ts-ignore
        addressId.push(res.data[i].addressId)
      }

      this.setState({addressId:addressId})
      this.setState({selector:arr})
    })
  }
  searchAreaCity (){
    post(api.searchArea,{addressId:this.state.addressIdChecked},res=>{
      let arrCity = [];
      let addressIdCity = [];
      for (let i = 0 ; i < res.data.length ; i++){
        // @ts-ignore
        arrCity.push(res.data[i].addressName)
        // @ts-ignore
        addressIdCity.push(res.data[i].addressId)
      }
      this.setState({CityaddressId:addressIdCity})
      this.setState({Cityselector:arrCity})
    })
  }
  countysearcgArea (){
    post(api.searchArea,{addressId:this.state.AddressIdCity},res=>{
      let arrCounty = [];
      let addressIdarrCount = [];
      for (let i = 0 ; i < res.data.length ; i++){
        // @ts-ignore
        arrCounty.push(res.data[i].addressName)
        // @ts-ignore
        addressIdarrCount.push(res.data[i].addressId)
      }
      this.setState({countyAddressId:addressIdarrCount})
      this.setState({countySelector:arrCounty})

    })
  }
  // 确定上传
  onConfrim = () => {
    post(api.applySeller,{
      sellerInviter:'1',
      sellerInviterType:'1',
      userId:'1',
      sellerImg:this.state.cover,
      sellerShopName:this.state.address,
      //此处商家姓名是从别的页面穿过来，暂时为空
      sellerName:'',
      sellerTel:this.state.userTel,
      telCode:this.state.userCode,

    },res=>{
      console.log(res)
    })
  };

  render() {
    return (
      <View className='info-edit'>
        {this.state.cover ?
          <Image src={this.state.cover} className="cover"/> :
          <View className="cover">
            <IconFont name={"tupian"} size={200} color={'#e4e4e4'}/>
          </View>}

        <View className="upload">
          <Button className="btn-upload" onClick={this.onUpload}>
            <View className="inline--block margin-right--10">
              <IconFont name={"shangjia"} size={28}/>
            </View>
            <Text>上传门头图</Text>
          </Button>
          <Text className="f__size--24 c--666">支持的文件扩展名：jpg、png</Text>
        </View>

        <AtList>
          <AtInput
            name=''
            title='店铺名称'
            type='text'
            placeholder='请输入您的店铺名称'
            value={this.state.address}
            onChange={value => {
              this.handleChange('title', value)
            }}
          />
          <AtInput
            name=''
            title='店铺地址'
            type='text'
            placeholder='请输入您的店铺地址'
            value={this.state.address}
            onChange={value => {
              this.handleChange('title', value)
            }}
          />
          <AtInput
            name=''
            title='手机号'
            type='tel'
            placeholder='请输入手机号'
            value={this.state.userTel}
            onChange={value => {
              this.handleChange('title', value)
            }}
          >
            <Button className="btn btn-getcode">获取验证码</Button>
          </AtInput>
          <AtInput
            name=''
            title='验证码'
            type='number'
            placeholder='请输入验证码'
            value={this.state.userCode}
            onChange={value => {
              this.handleChange('title', value)
            }}
          />
          <Navigator url={`/pages/bind/userId?isShoping=1`}>
          <AtListItem title='身份证信息' extraText='' arrow='right'/>
          </Navigator>
          <AtListItem title='营业执照' extraText='' arrow='right'/>
          <AtListItem title='选择地址' extraText='' hasBorder={false}/>
          <View className={'flex'}>
            <Picker mode='selector' range={this.state.selector} onChange={this.onChange} value={0}>
              <View className='picker'>
                选择省：{this.state.selectorChecked}
              </View>
            </Picker>
            <Picker mode='selector' range={this.state.Cityselector} onChange={this.onChangeCity} value={0}>
              <View className='picker'>
                选择市：{this.state.checkedCity}
              </View>
            </Picker>
            <Picker mode='selector' range={this.state.countySelector} onChange={this.onChangecounty} value={0}>
              <View className='picker'>
                县(区)：{this.state.countychecked}
              </View>
            </Picker>
          </View>
        </AtList>
        <Button className="btn btn-confrim" onClick={this.onConfrim}>上传</Button>
      </View>
    )
  }
}
