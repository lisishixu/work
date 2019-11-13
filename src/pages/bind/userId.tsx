import Taro, {Component, Config} from '@tarojs/taro'
import {View,Text} from '@tarojs/components'
import './userId.scss'
import {AtInput} from "taro-ui";

export interface Props {

}

export interface State {
  userName:string
}

export default class UserId extends Component<Props, State> {

    config: Config = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
          userName:''
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
  handleChange (userName) {
    this.setState({ userName })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return userName
  }
    render() {
        return (
            <View className='userId'>
              <View>
                <View>
                  <Text>*</Text><Text>真实姓名</Text>
                  <AtInput
                    name='value2'
                    type='number'
                    placeholder='请输入数字'
                    value={this.state.userName}
                    onChange={this.handleChange.bind(this)}
                  />
                </View>
              </View>
            </View>
        )
    }
}
