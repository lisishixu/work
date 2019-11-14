import Taro, {Component, Config} from '@tarojs/taro'
import {View} from '@tarojs/components'
import './post.scss'

export interface Props {

}

export interface State {
  type: string
}

export default class PostInfo extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: ""
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      type: 'goods',//goods上传商品，activity发布活动
    }
  }

  componentWillMount() {
    const type = this.$router.params.type || 'goods';//判断是我的还是Ta的
    this.setState({type});
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
      <View className='post'>


      </View>
    )
  }
}
