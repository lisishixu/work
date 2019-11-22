import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Button, Image, Navigator, Picker} from '@tarojs/components'
import './info-edit.scss'
import {AtInput, AtList, AtListItem} from "taro-ui";
import {MerchantModel} from "../../models/MerchantModel";
import IconFont from "../../components/iconfont";
import api from "../../constants/api";
import {post, uploadFile} from "../../utils/request";
import {getDATA} from "../../utils/helper";
import SendSMSBtn from "../../components/send-sms/send-sms";
export interface Props {

}

export interface State extends MerchantModel {
  cover:string
  addressDetail:string
  businessImg:string
  //
  selector:any[],
  selectorChecked:string,
  addressId:any[],
  addressIdChecked:string,
  checkedCity:string,
  AddressIdCity:string,
  countycheckedAddress:string,
  countychecked:string,
  Cityselector:any[],
  CityaddressId:any[],
  countySelector:any[],
  countyAddressId:any[],
  userTel:string,
  userCode:string,
  userId:string,
  userName:string,
  zheng:string,
  fan:string,
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
      selector: [''],//所有省的ID
      selectorChecked: '',//省所有的ID的数组
      addressId:[''],//选中的省名
      addressIdChecked:'',//选中的省ID
      checkedCity:'',//选中的市名
      AddressIdCity:'',//选中的市ID
      Cityselector:[''],//市的所有地名
      CityaddressId:[''],//市所有ID数组
      countySelector:[''],//选中的市名
      countyAddressId:[''],//选中的市ID
      countychecked:'',//选中的县名
      countycheckedAddress:'',//选中的县ID
      userTel:'',//用户手机号
      userCode:'',//无用
      userId:'',//用户身份证号
      userName:'',//用户姓名
      zheng:'',//身份证正面
      fan:'',//身份证反面
      cover:'',//门头图
      addressDetail:'',//详细地址
      businessImg:'',//营业执照图片
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
      console.log()
      this.setState({
        userId:userInfo.userID,
        userName:userInfo.userName,
        zheng:userInfo.zheng,
        fan:userInfo.fan
      })

    }
  }

  componentDidHide() {
  }

  // 上传门头图
  onUpload = () => {
    Taro.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    }).then(res => {
      const cover = res.tempFilePaths[0];
      uploadFile(cover, (res) => {
        const imgUrl = typeof res === 'string' ? JSON.parse(res).data.imgs : res.data.imgs;
        post(api.sellersSaveImg, {imgUrl}, res => {
          if (res.code == 200) {
            this.setState({cover})
          }
        })
      })
    })
  };

  //上传营业执照

  uploadImg = () =>{
    Taro.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    }).then(res => {
      const businessImg = res.tempFilePaths[0];
      uploadFile(businessImg, (res) => {
        const imgUrl = typeof res === 'string' ? JSON.parse(res).data.imgs : res.data.imgs;
        post(api.sellersSaveImg, {imgUrl}, res => {
          if (res.code == 200) {
            this.setState({businessImg})
          }
        })
      })
    })
  }

  // 文本框输入
  handleChange = (name = '', value) => {
    // @ts-ignore
    this.setState({
      [name]: value
    });
    // 2019-11-14摘自taro-ui官网：在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  };
  //获取选中的省的地名和ID
  onChange = e => {
    const value = e.detail.value
    this.setState(pre =>{
      return{
        selectorChecked: pre.selector[value],
        addressIdChecked:pre.addressId[value]
      }
    },()=>{
      this.searchAreaCity()
      this.countysearcgArea()
    })
  }
  //获取选中的市的地名和ID
  onChangeCity = e => {
    const value = e.detail.value
    this.setState(pre=>{
     return {
       checkedCity: pre.Cityselector[value],
       AddressIdCity:pre.CityaddressId[value]
     }
    },()=>{
      this.countysearcgArea()
    })
  }
  //获取选中的县的地名和ID
  onChangecounty = e => {
    const value = e.detail.value
    this.setState(pre =>{
     return{
       countychecked: pre.countySelector[value],
       countycheckedAddress:pre.countyAddressId[value]
     }
    })
  }
  //获取省的地名和ID
  searchArea (){
    post(api.searchArea,{},res=>{
      let arr:any[] = [];
      let addressId:any[] = [];
      for (let i = 0 ,len = res.data.leng; i < len; i++){
        // @ts-ignore
        arr.push(res.data[i].addressName)
        // @ts-ignore
        addressId.push(res.data[i].addressId)
      }

      this.setState({addressId:addressId,selector:arr})
    })
  }
  //获取市的地名和ID
  searchAreaCity (){
    post(api.searchArea,{addressId:this.state.addressIdChecked},res=>{
      let arrCity:any[] = [];
      let addressIdCity:any[] = [];
      for (let i = 0 ,len = res.data.length;i<len; i++){
        arrCity.push(res.data[i].addressName)
        addressIdCity.push(res.data[i].addressId)
      }
      this.setState({CityaddressId:addressIdCity,Cityselector:arrCity})
    })
  }
  //获取县区地名和Id
  countysearcgArea (){
    post(api.searchArea,{addressId:this.state.AddressIdCity},res=>{
      let arrCounty:any[] = [];
      let addressIdarrCount:any[] = [];
      for (let i = 0 , len=res.data.leng; i < len ; i++){
        // @ts-ignore
        arrCounty.push(res.data[i].addressName)
        // @ts-ignore
        addressIdarrCount.push(res.data[i].addressId)
      }
      this.setState({countyAddressId:addressIdarrCount,countySelector:arrCounty})
    })
  }
  // 确定上传
  onConfrim = () => {
    //定义this.state的参数
    const {address,cover,userTel,userCode,addressIdChecked,userName,selectorChecked,checkedCity,countychecked,AddressIdCity,addressDetail,businessImg,countycheckedAddress} = this.state
    const json = [{
      sellerInviter:'1',
      sellerInviterType:'1',
      userId:'1',
      sellerImg:cover,
      sellerShopName:address,
      sellerName:userName,
      sellerTel:userTel,
      telCode:userCode,
      addressIds: addressIdChecked+','+AddressIdCity+','+countycheckedAddress,
      addressNames:selectorChecked +','+checkedCity+','+countychecked,
      addressDetail:addressDetail,
      sellerLicense:businessImg
    }]
    post(api.applySeller,{
      json
    },res=>{
      console.log(res)
    })
  };
  render() {
    return (
      <View className='info-edit'>
        {this.state.cover ?
          <Image src={this.state.cover} className="cover" onClick={this.onUpload}/> :
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
            value={this.state.addressDetail}
            onChange={value => {
              this.handleChange('title', value)
            }}
          />
          <AtInput
            name='userTel'
            title='手机号'
            type='tel'
            placeholder='请输入手机号'
            value={this.state.userTel}
            onChange={value => {
              this.handleChange('userTel', value)
            }}
          >
            {/*imgCode=0 是因为此处不需要图片验证码*/}
            <SendSMSBtn type={'apply'} userPhone={this.state.userTel} imgCode={'0'}/>
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
          <AtListItem title='身份证信息' extraText='' arrow='right' />
          </Navigator>
          <AtListItem title='营业执照' extraText='' arrow='right' onClick={this.uploadImg}/>
          {this.state.businessImg&&
          <Image src={this.state.businessImg} className={'businessImg'}/>
          }
          <AtListItem title='选择地址：' extraText='' hasBorder={false}/>
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
