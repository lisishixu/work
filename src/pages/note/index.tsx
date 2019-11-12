import Taro, {Component, Config} from '@tarojs/taro'
import {View, Button, Input, Navigator} from '@tarojs/components'
import './index.scss'
import {AtAvatar, AtFloatLayout, AtSearchBar} from "taro-ui";
import {thisVoid} from "../../utils/helper";
import NoteList from "../../components/note-list/note-list";
import NoteComment from '../../components/note-comment/note-comment';

export interface Props {

}

export interface State {
  currentTab: number,//0 推荐，1关注
  isOpend: boolean,
  comments: any[]
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
      currentTab: 0,
      isOpend: false,
      comments: [0, 1, 2, 3, 4, 5, 6]
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

  render() {
    return (
      <View className='index'>
        <View className="container page-header">
          <Navigator url={"/pages/user-homepage/index"}>
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

        <NoteList data={[0, 1, 2, 3, 4, 5, 6]} isShowConcern={true}
                  onClick={(type, index, item) => this.onNoteItemButton(type, index, item)}/>

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
