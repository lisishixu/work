import Taro, {Component, Config} from '@tarojs/taro'
import {View} from '@tarojs/components'
import './index.scss'
import {AtRadio} from "taro-ui";
import FixedButton from "../../components/fixed-button/fixed-button";

export interface Props {

}

export interface State {
  value:string
}

export default class Index extends Component<Props, State> {

    config: Config = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
          value: ''
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
            <View className='index'>
            <View className={'title f__size--26 c--666'}>*退款原因</View>
              <AtRadio
                options={[
                  { label: '使用红包重新下单', value: 'option1' },
                  { label: '太忙了，没时间', value: 'option2' },
                  { label: '距离远，不想做', value: 'option3' },
                  { label: '订单已过期', value: 'option4' },
                  { label: '商品排错/拍多', value: 'option5' },
                  { label: '反馈其他原因', value: 'option6' },
                ]}
                value={this.state.value}
                onClick={this.handleChange.bind(this)}
              />
              <View className={'f__size--22 c--999'} style={'padding:30px 20px'}>
                退款说明：退款申请提交后，支付的款项将原路返回；使用红包的订单，申请退款后尾款红包将不予退还；
              </View>
              <FixedButton text={'申请退款'} bottom={'10vh'}/>
            </View>
        )
    }
}
