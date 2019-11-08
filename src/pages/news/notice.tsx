import Taro, {Component, Config} from '@tarojs/taro'
import {View,Text} from '@tarojs/components'
import './notice.scss'

export interface Props {

}

export interface State {

}

export default class Notice extends Component<Props, State> {

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
            <View className='notice'>
                <View className={'notice-box'}>
                  <View className={'notice-box_title'}>
                    <View className={'box-title__round'}></View>
                    <Text className={'c--010 f__size--30'}>订单消息</Text>
                    <Text className={'box-title__right c--666 f__size--26'}>2019-05-10  12 : 03 </Text>
                  </View>
                  <View className={'box-content'}>
                    <Text className={'c--010 f__size--30'}>待提货！</Text>
                    <Text className={'c--666 f__size--26'}>你的订单已成功支付，请到相应的提货点提取货品，详细地址可查看订单详情</Text>
                  </View>
                </View>

            </View>
        )
    }
}
