import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import './index.scss'

export interface Props {

}

export interface State {

}

export default class Cart extends Component<Props, State> {

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
            <View className='index contai container bg-color--f2f2f2'>
             <View className={'flex j__content--spbe'}>
               <Text>共<Text className={'c--eb3'}>2</Text>件商品</Text>
               <View className={'c---eb3'}>编辑</View>
             </View>
              <View>

              </View>
            </View>
        )
    }
}
