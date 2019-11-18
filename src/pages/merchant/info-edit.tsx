import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Button, Image} from '@tarojs/components'
import './info-edit.scss'
import {AtInput, AtList, AtListItem} from "taro-ui";
import {MerchantModel} from "../../models/MerchantModel";
import IconFont from "../../components/iconfont";

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

  // 确定上传
  onConfrim = () => {

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
            title='商家姓名'
            type='text'
            placeholder='请输入您的姓名'
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
            value={this.state.address}
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
            value={this.state.address}
            onChange={value => {
              this.handleChange('title', value)
            }}
          />
          <AtListItem title='身份证信息' extraText='' arrow='right'/>
          <AtListItem title='营业执照' extraText='' arrow='right'/>
        </AtList>

        <Button className="btn btn-confrim" onClick={this.onConfrim}>上传</Button>

      </View>
    )
  }
}
