import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Button, Navigator, Input, Image} from '@tarojs/components'
import './index.scss'
import {AtTabs, AtAvatar, AtTabsPane, AtFloatLayout} from "taro-ui";
import IconFont from "../../components/iconfont";
import StateTip from "../../components/state-tip/state-tip";
import NoteList from "../../components/note-list/note-list";
import GoodsList from "../../components/goods-list/goods-list";
import {GoodsData} from "../../data";
import NoteComment from "../../components/note-comment/note-comment";

export interface Props {

}

export interface State {
  userId: string,//存在就是别人的
  current: number,
  goodsList: any[],//精选好货
  noteList: any[],//笔记
  videoList: any[],//视频
  isOpend: boolean,
  comments: any[],
  isShowFocus: boolean,//是否显示关注提示框
}

export default class UserHomePage extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: "用户的昵称啊"
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      current: 0,
      goodsList: GoodsData,
      noteList: [0, 1, 2, 3, 4, 5, 6],
      videoList: [0, 1, 2, 3, 4],
      isOpend: false,
      comments: [0, 1, 2, 3, 4, 5, 6],
      isShowFocus: true,
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


  handleClick(value) {
    this.setState({
      current: value
    })
  };

  onNoteItemButton = (type, index, item) => {
    switch (type) {
      case "like":
        Taro.showToast({
          title: '触发喜欢'
        });
        break;
      case "share":
        Taro.showToast({
          title: '触发分享' + index
        });
        console.log(item);
        break;
      case "comment":
        this.setState({isOpend: true});
        break;
    }
  };

  onConfrimComment = (event) => {
    console.log(event);
    console.log('输入的内容是：', event.detail.value);
  };

  onLike = () => {

  };

  onPost = () => {

  };

  render() {
    return (
      <View className='index'>

        <View className="container header flex a__items--center j__content--spbe">
          <AtAvatar circle size={"large"}/>
          <View className="" style={{width: '100%'}}>
            <View className="data flex a__items--center text--center">
              <View className="data__item ">
                <Text className="text">151</Text>
                <Text className="text c--666 f__size--28">关注</Text>
              </View>
              <View className="data__item ">
                <Text className="text">151</Text>
                <Text className="text c--666 f__size--28">粉丝</Text>
              </View>
              <View className="data__item">
                <Text className="text">151</Text>
                <Text className="text c--666 f__size--28">获赞与收藏</Text>
              </View>
            </View>
            {this.state.userId ?
              <View className="btns">
                <Button className="btn btn-radius ">
                  <View className="inline--block margin-right--20">
                    <IconFont name={"tianjiazhaopian"} color={'white'}/>
                  </View>
                  <Text>关注</Text>
                </Button>
                <Button className="btn btn-block">
                  <View className="inline--block">
                    <IconFont name={"fenxiang-1"} color={'white'}/>
                  </View>
                </Button>
              </View> :
              <View className="btns">
                <Button className="btn btn-radius margin-right--20">
                  <View className="inline--block margin-right--20">
                    <IconFont name={"fenxiang-1"} color={'white'}/>
                  </View>
                  <Text>分享</Text>
                </Button>
                <Button className="btn btn-radius margin-left--20">
                  <Text>编辑资料</Text>
                </Button>
              </View>}
          </View>
        </View>


        <AtTabs
          current={this.state.current}
          tabList={[
            {title: this.state.userId ? 'Ta的精选好货' : '我的精选好货'},
            {title: '笔记·861'},
            {title: '视频·4'},
          ]}
          onClick={this.handleClick.bind(this)}>

          {/*精选好货*/}
          <AtTabsPane current={this.state.current} index={0}>
            {this.state.goodsList.length > 0 ?
              <GoodsList data={this.state.goodsList}
                         isShowShare/> :
              <StateTip imgUrl={'/statics/imgs/empty2.png'} size={"large"} customStyle={{marginTop: '10vh'}}>
                <View className="text--center f__size--30 c--666 margin-top--20">
                  <Text className="block margin-bottom--10">暂时没有推荐哦，</Text>
                  <Text className="block margin-bottom--10">快去选择你要推荐的好货</Text>
                </View>
                <Navigator className="to-choose" url={'/pages/goods/good'}>去选好货</Navigator>
              </StateTip>}
          </AtTabsPane>

          {/*笔记*/}
          <AtTabsPane current={this.state.current} index={1}>
            {this.state.noteList.length > 0 ?
              <NoteList data={this.state.noteList}
                        onClick={(type, index, item) => this.onNoteItemButton(type, index, item)}/> :
              <StateTip imgUrl={'/statics/imgs/empty2.png'}
                        size={"large"}
                        customStyle={{marginTop: '10vh'}}
                        title={'这位小主比较懒，什么还没有耶~'}>
              </StateTip>}
            {!this.state.userId && <View className={"fixed-btn"}>
                <Button onClick={this.onPost} className="btn btn-post">
                    <IconFont name={"bianji"} color={'white'} size={34}/>
                </Button>
            </View>}
          </AtTabsPane>

          {/*视频*/}
          <AtTabsPane current={this.state.current} index={2}>
            {this.state.videoList.length > 0 ?
              <View className="container  recommend">
                {/*  和详情页的推荐ui很相似，后续可以考虑拆分 */}
                {[0, 1, 2, 3, 4].map((it, index) => {
                  return <Navigator url={'/pages/note/detail?id=1'} className="recommend__item"
                                    key={'recommend' + it + index}>
                    <Image className={"recommend__cover"} src={`/statics/imgs/swiper-1.png`}/>
                    <Text className="recommend__name">好吃胡煎饼果子，绝对的人间美食，周末打卡哦~</Text>
                    <View className="footer flex a__items--center j__content--spbe">
                      <View className="user flex a__items--center">
                        <AtAvatar circle customStyle={{width: '22px', height: '22px'}}/>
                        <Text className="margin-left--20 c--666 f__size--28">滋滋滋滋</Text>
                      </View>
                      <Button className="btn" onClick={this.onLike}>
                        <View className="inline--block"><IconFont name={"xihuan"} size={30} color={'#666'}/></View>
                        <Text className="margin-left--10 f__size--28 ">4551</Text>
                      </Button>
                    </View>
                    <View className="mark-video"><IconFont name={"shipin"} color={'white'} size={30}/></View>
                  </Navigator>
                })}
              </View> :
              <StateTip imgUrl={'/statics/imgs/empty2.png'}
                        size={"large"}
                        customStyle={{marginTop: '10vh'}}
                        title={'这位小主比较懒，什么还没有耶~'}>
              </StateTip>}
            {!this.state.userId && <View className={"fixed-btn"}>
                <Button onClick={this.onPost} className="btn btn-post">
                    <IconFont name={"bianji"} color={'white'} size={34}/>
                </Button>
            </View>}
          </AtTabsPane>
        </AtTabs>

        <AtFloatLayout isOpened={this.state.isOpend}
                       className={"comment-list"}
                       title={`共${this.state.comments.length || 0}条评论`}
                       scrollY
                       onClose={() => this.setState({isOpend: false})}>
          {this.state.comments.map((it, index) => {
            return <NoteComment data={it} key={'comment' + index}/>
          })}
          <View style={{height: '80px', opacity: 0}}>
          </View>
          <Input className={`waiting-input `}
                 placeholder="添加评论……"
                 confirmType={"send"}
                 adjustPosition
                 onConfirm={this.onConfrimComment}
          />
        </AtFloatLayout>

        {this.state.userId && this.state.isShowFocus &&
        <View className="layer" onClick={() => this.setState({isShowFocus: false})}>
            <View className="focus" onClick={(e) => e.stopPropagation()}>
                <View className="avatar">
                    <AtAvatar circle size={"large"}/>
                </View>
                <Text className="username">是悠悠啊</Text>
                <View className="data flex a__items--center text--center margin-top--20">
                    <View className="data__item ">
                        <Text className="text">151</Text>
                        <Text className="text c--666 f__size--28">关注</Text>
                    </View>
                    <View className="data__item ">
                        <Text className="text">151</Text>
                        <Text className="text c--666 f__size--28">粉丝</Text>
                    </View>
                    <View className="data__item">
                        <Text className="text">151</Text>
                        <Text className="text c--666 f__size--28">获赞与收藏</Text>
                    </View>
                </View>
                <Button className="btn btn-radius" style={{margin: '20px auto'}}>
                    <View className="inline--block margin-right--20">
                        <IconFont name={"tianjiazhaopian"} color={'white'}/>
                    </View>
                    <Text>关注</Text>
                </Button>
            </View>
        </View>}

      </View>
    )
  }
}
