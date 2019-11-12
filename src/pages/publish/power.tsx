import Taro, {Component, Config} from '@tarojs/taro'
import {View} from '@tarojs/components'
import './power.scss'
import {AtRadio} from "taro-ui";

export interface Props {

}

export interface State {
  value:string
}

export default class Power extends Component<Props, State> {

    config: Config = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
          value:'option1'
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
  handleChange (value) {
    this.setState({
      value
    })
  }
    render() {
        return (
            <View className='power'>
              <AtRadio
                options={[
                  { label: '公开', value: 'option1', desc: '所有人可见' },
                  { label: '好友可见', value: 'option2', desc:'互相关注好友可见'},
                  { label: '私密', value: 'option3', desc: '仅自己可见',}
                ]}
                value={this.state.value}
                onClick={this.handleChange.bind(this)}
              />
            </View>
        )
    }
}
