import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, ScrollView, Button, Image, Navigator} from '@tarojs/components'
import './note-list.scss'
import {AtAvatar} from "taro-ui";
import IconFont from "../iconfont";
import StateTip from "../state-tip/state-tip";

export interface Props {
  data: any[]
  scrollViewHeight: string
  isShowConcern?: boolean
  onClick: Function
}

export interface State {

}

// 笔记列表。代言、我的/他的主页需要使用
export default class NoteList extends Component<Props, State> {

  config: Config = {};

  static defaultProps = {
    data: [],
    scrollViewHeight: '100vh',
    isShowConcern: false,
    onClick: null
  };

  static options = {
    addGlobalClass: true
  };

  constructor(props) {
    super(props);
    this.state = {}
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

  onShowImgs = (index,event) => {
    Taro.previewImage({
      urls: [
        '/statics/imgs/swiper-1.png',
        '/statics/imgs/swiper-1.png',
        '/statics/imgs/swiper-1.png',
      ],
      current: index
    });
    event.stopPropagation();
  };

  onConcern = () => {
    Taro.showToast({
      icon: 'none',
      title: '触发关注··'
    })
  };

  render() {

    if (!this.props.data || this.props.data.length < 1) {
      return (
        <View>
          <StateTip imgUrl={'/statics/imgs/empty.png'} title={'暂无数据'}>
          </StateTip>
        </View>
      )
    }

    return (
      <ScrollView className="note-list">
        {this.props.data.map((it, index) => {
          return <View className="container note__item" key={'dy' + it}>
            <View className="note__header flex a__items--center j__content--spbe">
              <View className="user flex a__items--center">
                <AtAvatar circle size={"small"} image={''}/>
                <Text className="name margin-left--20">上上那</Text>
              </View>
              {this.props.isShowConcern &&
              <Button className="btn btn-concern" onClick={this.onConcern}>
                  <View className="inline margin-right--10"><IconFont name={"tianjiazhaopian"} color={'white'}/></View>
                  <Text>关注</Text>
              </Button>}
            </View>

            <Navigator url={'/pages/note/detail?id='} className="note__content" >
              <Text className="content__text">
                法国巴黎——塞纳河畔左岸的咖啡，埃菲尔铁塔下的誓词，卢浮宫博物馆奇妙游熏陶你的文艺气息。
              </Text>
              <View className="note__imgs note__imgs--3">
                <Image src={'/statics/imgs/swiper-1.png'} className={"img"} onClick={this.onShowImgs.bind(1)}/>
                <Image src={'/statics/imgs/swiper-1.png'} className={"img"}/>
                <Image src={'/statics/imgs/swiper-1.png'} className={"img"}/>
              </View>
            </Navigator>

            <Navigator url={'/pages/goods/detail?id=1'} className="note__card">
              <Image src={'/statics/imgs/swiper-1.png'} className={"img"}/>
              <View className="content">
                <Text className="title">法国巴黎——塞纳河畔左岸的咖啡，埃菲尔铁塔下的誓词</Text>
                <Text className="price">￥39.9</Text>
              </View>
            </Navigator>

            <View className="note__footer">
              <Text className="time">今天 10:54</Text>
              <View className="action">
                <Button className="btn" onClick={() => this.props.onClick('like', index, it)}>
                  <View className="inline margin-right--10"><IconFont name={"xihuan"} size={30} color={'#666'}/></View>
                  <Text>4551</Text>
                </Button>
                <Button className="btn" onClick={() => this.props.onClick('comment', index, it)}>
                  <View className="inline margin-right--10"><IconFont name={"xiaoxi"} size={30} color={'#666'}/></View>
                  <Text>4551</Text>
                </Button>
                <Button className="btn" onClick={() => this.props.onClick('share', index, it)}>
                  <View className="inline margin-right--10"><IconFont name={"13"} size={30} color={'#666'}/></View>
                  <Text>4551</Text>
                </Button>
              </View>
            </View>
          </View>
        })}
      </ScrollView>
    )
  }
}
