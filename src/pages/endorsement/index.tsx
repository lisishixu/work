import Taro, {Component, Config} from '@tarojs/taro'
import {View, Button} from '@tarojs/components'
import './index.scss'
import {AtAvatar, AtSearchBar} from "taro-ui";
import {thisVoid} from "../../utils/helper";
import NoteList from "../../components/note-list/note-list";

export interface Props {

}

export interface State {

}

export default class Index extends Component<Props, State> {

  config: Config = {
    // navigationStyle: "custom" 支付宝端暂不支持
    navigationBarTitleText:""
  };

  static defaultProps = {};

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



  render() {
    return (
      <View className='index'>
        <View className="container page-header">
          <AtAvatar circle size={"small"} image={''}/>
          <View className="tabs">
            <Button className={"btn current"}>推荐</Button>
            <Button className={"btn"}>关注</Button>
          </View>
        </View>

        <AtSearchBar value={''} placeholder={'搜索笔记、商品和用户'} onChange={thisVoid}/>

        <NoteList data={[0,1,2,3,4,5,6]} isShowConcern={true}/>


      </View>
    )
  }
}
