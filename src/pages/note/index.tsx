import Taro, {Component, Config} from '@tarojs/taro'
import {View, Button, Text, Input, Navigator, ScrollView} from '@tarojs/components'
import './index.scss'
import {AtAvatar, AtFloatLayout, AtSearchBar} from "taro-ui";
import {thisVoid} from "../../utils/helper";
import NoteList from "../../components/note-list/note-list";
import NoteComment from '../../components/note-comment/note-comment';
import IconFont from "../../components/iconfont";
import {post} from "../../utils/request";
import api from "../../constants/api";

export interface Props {

}

export interface State {
  pageNum: number,
  pageSize: number
  currentTab: number,//0 推荐，1关注
  isOpend: boolean,
  comments: any[],
  noteList: any[] | null
}

export default class Index extends Component<Props, State> {

  config: Config = {
    // navigationStyle: "custom" 支付宝端暂不支持
    navigationBarTitleText: ""
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      pageNum: 1,
      pageSize: 20,
      currentTab: 0,
      isOpend: false,
      comments: [0, 1, 2, 3, 4, 5, 6],
      noteList: null
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.getList()
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

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

  onTab = (currentTab) => {
    this.setState({currentTab})
  };

  // 你可能感兴趣的提示信息
  onShowInterestedTip = () => {
    Taro.showModal({
      title: '提示',
      content: `这里会推荐和你兴趣类似的用户`,
      showCancel: false,
    })
  };

  // 你可能感兴趣的切换数据
  onToggleInterested = () => {
    Taro.showToast({
      icon: 'none',
      title: `触发换一换`
    })
  };

  // 你可能感兴趣的关注用户
  onFocus = () => {
    Taro.showToast({
      icon: 'none',
      title: `触发关注`
    });
  };

  // 获取数据
  getList = () => {
    const {pageNum, pageSize} = this.state;
    post(api.getUserEndorse, {
      pageNum, pageSize
    }, res => {
      if (res.code == 200) {
        this.setState({
          noteList: res.data.list || []
        })
      } else {
        this.setState({
          noteList: []
        });
        Taro.showToast({
          icon: 'none',
          title: res.msg || '网络繁忙，请稍后再试'
        })
      }
    })
  };

  render() {
    return (
      <View className='index'>
        <View className="container page-header">
          <Navigator url={"/pages/user/homepage"}>
            <AtAvatar circle size={"small"} image={''}/>
          </Navigator>
          <View className="tabs">
            <Button className={`btn ${this.state.currentTab === 0 ? 'current' : ''}`}
                    onClick={() => this.onTab(0)}>推荐</Button>
            <Button className={`btn ${this.state.currentTab === 1 ? 'current' : ''}`}
                    onClick={() => this.onTab(1)}>关注</Button>
          </View>
        </View>

        <AtSearchBar value={''} placeholder={'搜索笔记、商品和用户'} onChange={thisVoid}/>

        {this.state.noteList &&
        <NoteList data={this.state.noteList} isShowConcern={true}
                  onClick={(type, index, item) => this.onNoteItemButton(type, index, item)}/>
        }

        <View className="container interested">
          <View className="flex a__items--center j__content--spbe">
            <View className="c--666 flex a__items--center" onClick={this.onShowInterestedTip}>
              <Text className="f__size--30">你可能感兴趣</Text>
              <View className="inline--block margin-left--20">
                <IconFont name={"guanyu1"} size={28} color={'#666'}/>
              </View>
            </View>
            <Button className="btn btn-toggle" onClick={this.onToggleInterested}>
              <Text className="c--666">换一换</Text>
              <View className="inline--block margin-left--10">
                <IconFont name={"shuaxin"} color={'#666'}/>
              </View>
            </Button>
          </View>
          <ScrollView className="interested-users" scrollX enable-flex>
            {[0, 1, 2, 3, 4, 5].map((it, index) => {
              return <View className="interested-users__item" key={'user' + it + index}>
                <Navigator url={`/pages/user/homepage?userID=`}>
                  <AtAvatar circle className="avatar"/>
                  <Text className="f__size--26">巴拉巴拉小魔仙0</Text>
                </Navigator>
                <Button className="btn btn-focus" onClick={this.onFocus}>关注</Button>
              </View>
            })}
          </ScrollView>
        </View>

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
      </View>
    )
  }
}
