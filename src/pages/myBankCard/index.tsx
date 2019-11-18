import Taro, {Component, Config} from '@tarojs/taro'
import {View,Text} from '@tarojs/components'
import './index.scss'
import IconFont from "../../components/iconfont";
export interface Props {

}

export interface State {

}

export default class Index extends Component<Props, State> {

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
            <View className='index'>
              <View className={'view'}>
                <View className={'bankCardName'}>招X银行</View>
                <View className={'cardNum'}>6122 **** **** 7666</View>
              </View>
              <View className={'view'}>
                <View className={'bankCardName'}>招X银行</View>
                <View className={'cardNum'}>6122 **** **** 7666</View>
              </View>
              <View className={'view'}>
                <View className={'bankCardName'}>招X银行</View>
                <View className={'cardNum'}>6122 **** **** 7666</View>
              </View>
              <View className={'flex'}>
                <IconFont name={'jiahao'} size={40} color={'#666666'}/>
                <Text className={'f__size--30 c--010'}>添加银行卡</Text>
              </View>
            </View>
        )
    }
}
