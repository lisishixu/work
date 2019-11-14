import Taro, {Component, Config} from '@tarojs/taro'
import {Image, Navigator, View} from '@tarojs/components'
import './index.scss'
import {AtGrid, AtSearchBar, AtTabs, AtTabsPane} from "taro-ui";
import {ClassifyModel} from "../../models/ClassifyModel";
import {ClassifyData} from "../../data";
import {toAtTabs} from '../../utils/toAtFormat';
import {thisVoid} from "../../utils/helper";

export interface Props {

}

export interface secondClassifyModel extends ClassifyModel {
  list: ClassifyModel[]
}

export interface State {
  current: number,
  classify: any[],
  secondClassify: secondClassifyModel[]
}

export default class ClassifyIndex extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: '全部分类'
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      classify: [],
      secondClassify: []
    }
  }

  componentWillMount() {
    const index = Number(this.$router.params.id);//判断是我的还是Ta的
    this.setState({current: index})
  }

  componentDidMount() {
    this.setState({
      classify: toAtTabs(ClassifyData) || [],
      secondClassify: [
        {
          image: '/statics/imgs/swiper-1.png',
          value: '这是标题',
          list: ClassifyData
        },
        {
          image: '/statics/imgs/swiper-1.png',
          value: '这是标题',
          list: ClassifyData
        },
        {
          image: '/statics/imgs/swiper-1.png',
          value: '这是标题',
          list: ClassifyData
        }, {
          image: '/statics/imgs/swiper-1.png',
          value: '这是标题',
          list: ClassifyData
        }, {
          image: '/statics/imgs/swiper-1.png',
          value: '这是标题',
          list: ClassifyData
        }, {
          image: '/statics/imgs/swiper-1.png',
          value: '这是标题',
          list: ClassifyData
        }, {
          image: '/statics/imgs/swiper-1.png',
          value: '这是标题',
          list: ClassifyData
        }, {
          image: '/statics/imgs/swiper-1.png',
          value: '这是标题',
          list: ClassifyData
        }, {
          image: '/statics/imgs/swiper-1.png',
          value: '这是标题',
          list: ClassifyData
        }, {
          image: '/statics/imgs/swiper-1.png',
          value: '这是标题',
          list: ClassifyData
        },
      ]
    })
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  handleClick = (index) => {
    this.setState({current: index})
  };

  onClassify = (item, index) => {
    console.log(item);
    Taro.navigateTo({
      url: `/pages/goods/list?classifyID=${index}`
    })
  };

  render() {
    return (
      <View className='index'>

        <Navigator url={'/pages/search/index'} className="at-col  search">
          <AtSearchBar
            disabled
            onChange={thisVoid}
            value={''}
            placeholder={"搜索商品"}
          />
        </Navigator>

        <AtTabs
          current={this.state.current}
          scroll
          height='90vh'
          tabDirection='vertical'
          tabList={this.state.classify}
          onClick={this.handleClick.bind(this)}>

          {this.state.secondClassify.map((item, index) => {
            return <AtTabsPane tabDirection='vertical'
                               current={this.state.current}
                               index={index}>
              <View>
                <View className="banner">
                  <Image src={item.image} className={'banner__img'}></Image>
                </View>
                <View className="wrap">
                  <AtGrid className="bg-color--white"
                          columnNum={3} hasBorder={false}
                          onClick={this.onClassify}
                          data={item.list}/>
                </View>
              </View>
            </AtTabsPane>
          })}

        </AtTabs>

      </View>
    )
  }
}
