import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Button, Block} from '@tarojs/components'
import './note-comment.scss'
import {AtActionSheet, AtActionSheetItem, AtAvatar} from "taro-ui";
import IconFont from "../iconfont";

export interface Props {
  data: any
}

export interface State {
  isOpened: boolean
}

export default class NoteComment extends Component<Props, State> {

  config: Config = {};

  static defaultProps = {};

  static options = {
    addGlobalClass: true
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
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

  onLike = () => {
    Taro.showToast({
      title: '触发喜欢'
    });
  };

  onReply = () => {
    Taro.showToast({
      title: '触发回复'
    });
  };

  onReport = () => {
    Taro.showToast({
      title: '触发举报'
    });
  };


  render() {
    return (
      <Block>
        <View className='note-comment'>
          <View className="header">
            <View className={"header__left"}>
              <AtAvatar circle size={"small"}/>
              <Text className="username">是又优雅</Text>
              <Text className="post-time">12:37</Text>
            </View>
            <Button className="btn" onClick={this.onLike}>
              <IconFont name={"xihuan"} size={30} color={true ? '#F12737' : '#888'}/>
              <Text className="like-number" style={{color: true ? '#F12737' : '#888'}}>542</Text>
            </Button>
          </View>
          <View className="content" onClick={() => this.setState({isOpened: true})}>
            聚划算杀机发送卡和科三聚划算杀机发送卡和科三聚划算杀机发送卡和科三聚划算杀机发送卡和科三聚划算杀机发送卡和科三聚划算杀机
          </View>
        </View>
        <AtActionSheet isOpened={this.state.isOpened} cancelText='取消' onClose={() => this.setState({isOpened: false})}>
          <AtActionSheetItem onClick={this.onReply}>
            回复
          </AtActionSheetItem>
          <AtActionSheetItem  onClick={this.onReport}>
            举报
          </AtActionSheetItem>
        </AtActionSheet>
      </Block>
    )
  }
}
