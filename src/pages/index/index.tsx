import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Swiper, SwiperItem, Image} from '@tarojs/components'
import './index.scss'
import IconFont from "../../components/iconfont";
import {AtGrid, AtSearchBar} from 'taro-ui'
import {LocationModel} from "../../models/LocationModel";
import {SwiperModel} from "../../models/SwiperModel";
import {ClassifyModel} from "../../models/ClassifyModel";

export interface Props {

}

export interface State {
  value: string,
  location: LocationModel
  swipers: SwiperModel[]
  classify: ClassifyModel[]
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
        city: ''
      },
      swipers: [
        {
          imgurl: '/static/imgs/swiper-1.png'
        },
        {
          imgurl: '/static/imgs/swiper-1.png'
        }
      ],
      classify: [
        {
          imgurl: '/static/imgs/swiper-1.png',
          name: '家居百货'
        },
        {
          imgurl: '/static/imgs/swiper-1.png',
          name: '家居百货'
        },
        {
          imgurl: '/static/imgs/swiper-1.png',
          name: '家居百货'
        },
        {
          imgurl: '/static/imgs/swiper-1.png',
          name: '家居百货'
        },
        {
          imgurl: '/static/imgs/swiper-1.png',
          name: '家居百货'
        }
      ]
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

  onChange() {

  }

  onClassify = (item, index) => {
    console.log(item);
    Taro.showToast({
      title: `点击的是${index}`
    })
  };


  render() {
    return (
      <View className='index'>
        <View className="at-row  at-row__align--center">
          <View className="at-col at-col-1 at-col--auto location">
            <View className="location__icon inline--block">
              <IconFont name='bianji1' size={32} color='#888'/>
            </View>
            <Text className={"location__text"}>{this.state.location.city || '定位中'}</Text>
          </View>
          <View className="at-col  search">
            <AtSearchBar
              value={this.state.value}
              placeholder={"搜索商品"}
              onChange={this.onChange.bind(this)}
            />
          </View>
        </View>


        <Swiper
          className='swiper'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay>
          {this.state.swipers.map((it, index) => {
            return <SwiperItem key={'swiper' + index}>
              <View className=''>
                <Image className={"swiper__img"} src={it.imgurl}/>
              </View>
            </SwiperItem>
          })}
        </Swiper>

        <AtGrid columnNum={5} hasBorder={false}
                onClick={this.onClassify}
                data={
                  [
                    {
                      image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                      value: '找折扣'
                    },
                    {
                      image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                      value: '领会员'
                    },
                    {
                      image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                      value: '新品首发'
                    },
                    {
                      image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
                      value: '领京豆'
                    },
                    {
                      image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                      value: '手机馆'
                    },
                    {
                      image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                      value: '手机馆'
                    },
                    {
                      image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                      value: '手机馆'
                    },
                    {
                      image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                      value: '手机馆'
                    },
                    {
                      image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                      value: '手机馆'
                    },
                    {
                      image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                      value: '全部分类'
                    }
                  ]
                }/>



      </View>
    )
  }
}
