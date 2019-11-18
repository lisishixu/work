import Taro, {Component, Config} from '@tarojs/taro'
import {View} from '@tarojs/components'
import './index.scss'

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
              <View>
                <View>招X银行</View>
                <View>6122 **** **** 7666</View>
              </View>
              <View>
                <View>招X银行</View>
                <View>6122 **** **** 7666</View>
              </View>
              <View>
                <View>招X银行</View>
                <View>6122 **** **** 7666</View>
              </View>
            </View>
        )
    }
}
