import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Input, Button, Navigator, Image} from '@tarojs/components'
import './detail.scss'
import NoteComment from "../../components/note-comment/note-comment";
import {AtAvatar, AtDivider} from "taro-ui";
import IconFont from "../../components/iconfont";

export interface Props {

}

export interface State {
  comments: any[]
}

export default class NoteDetail extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: '笔记详情'
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      comments: [0, 1, 2]
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

  onConfrimComment = (event) => {
    console.log(event);
    console.log('输入的内容是：', event.detail.value);
  };

  onConcern = () => {
    Taro.showToast({
      icon: 'none',
      title: '触发关注··'
    })
  };

  onShowImgs = (index, event) => {
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

  onLike = () => {

  };

  onShare = () => {

  };


  render() {
    return (
      <View className='container detail'>

        <View className="header flex a__items--center j__content--spbe">
          <View className="user flex a__items--center">
            <AtAvatar circle size={"small"} image={''}/>
            <View className="margin-left--20">
              <Text className="name block">上上那</Text>
              <Text className="time block c--666 f__size--30">今天12:13</Text>
            </View>
          </View>

          <Button className="btn btn-concern" onClick={this.onConcern}>
            <View className="inline--block margin-right--10">
              <IconFont name={"tianjiazhaopian"} color={'#EB3939'}/>
            </View>
            <Text>关注</Text>
          </Button>
        </View>


        <View className="content">
          <View className="imgs ">
            <Image src={'/statics/imgs/swiper-1.png'} className={"img"} mode={"widthFix"}
                   onClick={this.onShowImgs.bind(1)}/>
          </View>
          <View className="action margin-top--10 margin-bottom--10">
            <Button className="btn margin-right--30" onClick={this.onLike}>
              <View className="inline margin-right--10"><IconFont name={"xihuan"} size={30} color={'#666'}/></View>
              <Text>4551</Text>
            </Button>
            <Button className="btn margin-right--30">
              <View className="inline margin-right--10"><IconFont name={"xiaoxi"} size={30} color={'#666'}/></View>
              <Text>4551</Text>
            </Button>
            <Button className="btn margin-right--30" onClick={this.onShare}>
              <View className="inline margin-right--10"><IconFont name={"13"} size={30} color={'#666'}/></View>
              <Text>4551</Text>
            </Button>
          </View>
          <Text className="content__text">
            法国巴黎——塞纳河畔左岸的咖啡，埃菲尔铁塔下的誓词，卢浮宫博物馆奇妙游熏陶你的文艺气息。
          </Text>
        </View>

        <Navigator url={'/pages/goods/detail?id'} className="c--eb3 margin-bottom--20">
          <View className="inline--block margin-right--10"><IconFont name={"shangjia"} color={'#EB3939'}
                                                                     size={28}/></View>
          <Text className="f__size--30">1460经典高帮情侣马丁靴</Text>
        </Navigator>

        <View className="c--666 f__size--30 margin-top--30">
          共{this.state.comments.length}条评论
        </View>

        <Input className={`waiting-input `}
               placeholder="添加评论……"
               confirmType={"send"}
               adjustPosition
               onConfirm={this.onConfrimComment}
        />

        {this.state.comments.map((it, index) => {
          return <NoteComment data={it} key={'comment' + index}/>
        })}

        <View style={{width: '200px', margin: '0 auto '}}>
          <AtDivider content='为你推荐' fontSize={30} fontColor='#EB3939' lineColor='#EB3939'/>
        </View>

        <View className=" recommend">
          {[0, 1, 2, 3, 4].map((it, index) => {
            return <View className="recommend__item" key={'recommend' + it + index}>
              <Image className={"recommend__cover"} src={`/statics/imgs/swiper-1.png`}/>
              <Text className="recommend__name">好吃胡煎饼果子，绝对的人间美食，周末打卡哦~</Text>
              <View className="footer flex a__items--center j__content--spbe">
                <View className="user flex a__items--center">
                  <AtAvatar circle customStyle={{width: '22px', height: '22px'}}/>
                  <Text className="margin-left--20 c--666 f__size--28">滋滋滋滋</Text>
                </View>
                <Button className="btn" onClick={this.onLike}>
                  <View className="inline "><IconFont name={"xihuan"} size={30} color={'#666'}/></View>
                  <Text className="margin-left--10 ">4551</Text>
                </Button>
              </View>
            </View>
          })}
        </View>

      </View>
    )
  }
}
