import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text,Label} from '@tarojs/components'
import './payVip.scss'
import IconFont from "../../components/iconfont";

export interface Props {

}

export interface State {

}

export default class PayVip extends Component<Props, State> {

    config: Config = {};

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
            <View className='payVip'>
              <View className={'vip-title'}>
                <IconFont name={'yaoqing'} size={50}/>
                <Text className={'f__size--28 c--010 text'}>李某某</Text>
                <Text className={'f__size--28 c--010'}>17803877466</Text>
              </View>
              <View className={'vip--center'}>
                <Text className={'f__size--30'}>选择支付方式</Text>
                <View className={'pay--way'}>
                  <IconFont name={'weixinzhifu'} size={50}/>
                  <Text>微信支付</Text>
                  <View className={'view'}>
                    <Label className={'vip--label'}>
                      <IconFont name={'duihao'} size={30}/>
                    </Label>
                  </View>
                </View>
              </View>
            </View>
        )
    }
}
