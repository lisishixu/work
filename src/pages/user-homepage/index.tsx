import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import './index.scss'
import {AtTabs, AtAvatar, AtTabsPane} from "taro-ui";

export interface Props {

}

export interface State {
  userId: string,//存在就是别人的
  current: number
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
      current: 0
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


  render() {
    return (
      <View className='index'>

        <View className="container header flex">
          <AtAvatar circle/>
          <View className="">
            <View>
              <Text className="">151</Text>
              <Text className="">关注</Text>
            </View>
            <View className="btns">

            </View>
          </View>
        </View>


        <AtTabs
          current={this.state.current}
          tabList={[
            {title: 'Ta的精选好货'},
            {title: '笔记·861'},
            {title: '视频·4'},
          ]}
          onClick={this.handleClick.bind(this)}>
          {[0, 1, 2].map(num => {
            return <AtTabsPane current={this.state.current} index={num} key={'tab' + num}>
              <View style={{fontSize: '18px', textAlign: 'center'}}>
                1
              </View>
            </AtTabsPane>
          })}

        </AtTabs>


      </View>
    )
  }
}
