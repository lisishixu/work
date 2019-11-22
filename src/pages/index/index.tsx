import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Swiper, SwiperItem, Image, Navigator, Progress, ScrollView, Button} from '@tarojs/components'
import './index.scss'
import IconFont from "../../components/iconfont";
import {AtGrid, AtSearchBar, AtCountdown, AtButton, AtDivider} from 'taro-ui'
import {LocationModel} from "../../models/LocationModel";
import {SwiperModel} from "../../models/SwiperModel";
import {ClassifyModel} from "../../models/ClassifyModel";
import {ClassifyData, GoodsData, SwiperData} from "../../data";
import {GoodsModel} from "../../models/GoodsModel";
import {SeckillGoodsModel} from "../../models/SeckillGoodsModel";
import GoodsListCard from "../../components/goods-list--card/goods-list--card";

export interface Props {

}

export interface State {
  value: string,//搜索词
  location: LocationModel,//定位
  swipers: SwiperModel[],//轮播
  classify: ClassifyModel[],//首页分类
  adBanner: string,//首页宣传广告
  goodsList: SeckillGoodsModel[],//首页秒杀商品
  current: number,//秒杀选项卡
  // 秒杀选项卡
  seckillTabs: {
    time: string
    status: string
  }[]
  recommendList: GoodsModel[],//首页推荐商品
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
      current: 2,
      seckillTabs: [
        {
          time: '8:00',
          status: '已开抢'
        },
        {
          time: '10:00',
          status: '已开抢'
        },
        {
          time: '12:00',
          status: '抢购中'
        },
        {
          time: '14:00',
          status: '即将开始'
        },
        {
          time: '16:00',
          status: '即将开始'
        }
      ],
      recommendList: GoodsData,
      goodsList: GoodsData
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.setState({
      swipers: SwiperData,
      classify: ClassifyData
    });
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

  handleClick(value) {
    this.setState({
      current: value
    })
  };

  render() {
    const {goodsList} = this.state;


    return (
      <View className='index'>

        {/* 位置，搜索 */}
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

        {/* 轮播*/}
        <View className="container">
          <Swiper className='swiper' autoplay>
            {this.state.swipers.map((it, index) => {
              return <SwiperItem key={'swiper' + index}>
                <Image className={"swiper__img"} src={it.imgurl}/>
              </SwiperItem>
            })}
          </Swiper>
        </View>

        <AtGrid className="bg-color--white"
                columnNum={5} hasBorder={false}
                onClick={this.onClassify}
                data={this.state.classify}/>

        <Navigator url={'/pages/member/index'} className="banner">
          <Image src={this.state.adBanner} className="banner__img"/>
        </Navigator>

        <View className='at-row container recommend-box'>
          <Navigator url={`/pages/goods/good`} className='at-col'>
            <Image src={'../../statics/imgs/banner1.png'}
                   className={"recommend_img"}/>
          </Navigator>
          <Navigator url={`/pages/goods/new`} className='at-col'>
            <Image src={'../../statics/imgs/banner2.png'}
                   className={"recommend_img"}/>
          </Navigator>
        </View>

        {/* 秒杀抢购 */}
        <View className="bg-color--white margin-bottom--20" style={{paddingTop: '10px'}}>
          <View className={'count-down bg-color--F12737 kill-time'}>
            <View className={'inline--block margin-right--10'}>
              <IconFont name='huo' size={32} color='#fff'/>
            </View>
            <Text className={'c--fff f__size--30 margin-right--10'}>秒杀抢购</Text>
            <Text className={'c--fff f__size--22'}>先到先得，赶紧抢货</Text>
            <View className={'fr'}>
              <Text className={'c--fff f__size--22 margin-right--10'}>距离结束</Text>
              <AtCountdown
                format={{hours: ':', minutes: ':', seconds: ''}}
                isCard
                minutes={1}
                seconds={10}
              />
            </View>
          </View>

          {/* 秒杀抢购选项卡 */}
          <ScrollView scrollX className="tabs tabs-scroll" enable-flex>
            {this.state.seckillTabs.map((it, index) => {
              return <Button key={it.time}
                             className={`tabs__item ${this.state.current === index ? 'current' : ''}`}
                             onClick={() => this.setState({current: index})}>
                <Text className="time">{it.time}</Text>
                <Text className="status">{it.status}</Text>
              </Button>
            })}
          </ScrollView>

          <View className="container" style={{fontSize: '18px', textAlign: 'center'}}>
            <View className={"text--left"}>
              {goodsList.map((it, index) => {
                return <View key={'img' + index}
                             style={{border: '1px solid #F5F5F5', marginTop: '20px', borderRadius: '2px'}}>
                  <Image src={it.product_img} className={"recommend_img"}/>
                  <View style={{padding: '0px 10px'}}>
                    <View className={'f__size--28 c--010 margin-top--20'}>
                      <Text>{it.product_name}</Text>
                      <View className={'margin-top--20'}>
                        <Text className={'c--eb3 f__size--30 margin-right--20'}>￥{it.product_original}</Text>
                        <Text className={'c--808 f__size--24'}>￥{it.product_price}</Text>
                      </View>
                    </View>
                    <View className={'flex'} style={{padding: '10px 0'}}>
                      <Progress percent={it.product_jindu}
                                style={{width: '30%'}}
                                borderRadius={20}
                                activeColor={'#F12737'}/>
                      <Text className={'f__size--22 c--808 margin-left--20'}>已抢{it.product_jindu}%</Text>
                      <Navigator url={`/pages/goods/detail?id=${it.product_id}`} style={'margin-left:auto'}>
                        <AtButton type='primary'
                                  size={'small'}
                                  circle={true}
                                  className={'rush--buy'}>马上抢购</AtButton>
                      </Navigator>
                    </View>
                  </View>
                </View>
              })}
            </View>
          </View>

        </View>

        <View className={'container margin-bottom--10'}>
          <AtDivider content='为你推荐' fontColor='#F12737' lineColor='#F12737'/>
        </View>
        <GoodsListCard data={this.state.recommendList}/>

      </View>
    )
  }
}
