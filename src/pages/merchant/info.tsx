import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import './info.scss'
import {AtList, AtListItem} from "taro-ui";
import {post} from "../../utils/request";
import api from "../../constants/api";
import {MerchantModel} from "../../models/MerchantModel";

export interface Props {

}

export interface State extends MerchantModel {

}

export default class MerchantInfo extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: '商家信息'
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    this.getDetail()
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  // 获取商家详情
  getDetail = () => {
    post(api.sellersDetail, {}, res => {
      if (res.code == 200) {

      } else {
        Taro.showToast({
          icon: 'none',
          title: res.msg || '网络繁忙，请稍后再试'
        })
      }
    })
  };

  render() {
    return (
      <View className='info'>

        <Image src={''} className="cover"/>

        <View
          className="container bg-color--f2f2f2 margin-top--30 margin-bottom--30 f__size--30 c--666 flex a__items--center j__content--spbe">
          <Text>店铺名称</Text>
          <Text>重庆牛哄哄火锅店</Text>
        </View>

        <AtList>
          <AtListItem title='店铺地址' extraText='河南省郑州市金水区花园路135号'/>
          <AtListItem title='店主姓名' extraText='刘一鸣'/>
          <AtListItem title='联系方式' extraText='15555555555'/>
          <AtListItem title='身份证信息' extraText='' arrow='right'/>
          <AtListItem title='营业执照' extraText='' arrow='right'/>
        </AtList>

        <AtList>
          <AtListItem title='店铺编号' extraText='100233315233'/>
          <AtListItem title='入驻时间' extraText='2019/10/12 10:10:58'/>
        </AtList>

      </View>
    )
  }
}
