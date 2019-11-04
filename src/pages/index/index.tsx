import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Swiper, SwiperItem, Image, Navigator} from '@tarojs/components'
import './index.scss'
import IconFont from "../../components/iconfont";
import {AtGrid, AtSearchBar,AtCountdown} from 'taro-ui'
import {LocationModel} from "../../models/LocationModel";
import {SwiperModel} from "../../models/SwiperModel";
import {ClassifyModel} from "../../models/ClassifyModel";
import {ClassifyData, SwiperData} from "../../data";
export interface Props {

}

export interface State {
  value: string,
  location: LocationModel
  swipers: SwiperModel[]
  classify: ClassifyModel[]
  adBanner: string
  imgData:any
}

export default class Index extends Component<Props, State> {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      location: {
        city: '郑州'
      },
      swipers: [],
      classify: [],
      adBanner: '../../statics/imgs/banner.png',
      imgData:[
        '../../statics/imgs/banner1.png',
        '../../statics/imgs/banner2.png',
      ]
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.setState({
      swipers: SwiperData,
      classify: ClassifyData
    })
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  onChange() {

  }

  onClassify = (item, index) => {
    console.log(item);
    Taro.navigateTo({
      url: `/pages/classify/index?id=${index || item}`
    })
  };


  render() {
    return (
      <View className='index'>

        <View className="at-row  at-row__align--center container">
          <View className="at-col at-col-1 at-col--auto location">
            <IconFont name='weizhi' size={32} color='#888'/>
            <Text className={"location__text"}>{this.state.location.city || '定位中'}</Text>
          </View>
          <Navigator url={'/pages/search/index'} className="at-col  search">
            <AtSearchBar
              disabled
              value={this.state.value}
              placeholder={"搜索商品"}
              onChange={this.onChange.bind(this)}
            />
          </Navigator>
        </View>

        <Swiper className='swiper container' autoplay>
          {this.state.swipers.map((it, index) => {
            return <SwiperItem key={'swiper' + index}>
              <View className=''>
                <Image className={"swiper__img"} src={it.imgurl}/>
              </View>
            </SwiperItem>
          })}
        </Swiper>

        <AtGrid className="bg-color--white"
                columnNum={5} hasBorder={false}
                onClick={this.onClassify}
                data={this.state.classify}/>

        <View className="banner">
          <Image src={this.state.adBanner} className="banner__img"></Image>
        </View>

        <View className='at-row container recommend-box'>
          {this.state.imgData.map((it, index) => {
            return    <View className='at-col' key={'img'+index}><Image src={it} className={"recommend_Img"}></Image></View>
          })}
        </View>
        <View className={'count-down '}>
          <IconFont name='huo' size={32} color='#fff'></IconFont>
          <Text className={''}>秒杀抢购</Text>
        </View>
        <AtCountdown
          isCard
          minutes={1}
          seconds={10}
        />
      </View>
    )
  }
}
