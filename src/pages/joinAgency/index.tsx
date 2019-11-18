import Taro, {Component, Config} from '@tarojs/taro'
import {View,Text} from '@tarojs/components'
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
              <View className={'userItem'}>
                <View className={'top'}>
                  <Text className={'f__size--30 c--333'} style={'font-weight:600'}>姓名</Text><Text className={'c--eb3 f__size--30'}>*</Text>
                </View>
                <input type="text" placeholder={'请输入您的姓名'} className={'input'}/>
              </View>
              <View className={'userItem'}>
                <View className={'top'}>
                  <Text className={'f__size--30 c--333'} style={'font-weight:600'}>手机号</Text><Text className={'c--eb3 f__size--30'}>*</Text>
                </View>
                <input type="number" placeholder={'请输入您的手机号'} className={'input'}/>
              </View>
              <View className={'userItem'}>
                <View className={'top'}>
                  <Text className={'f__size--30 c--333'} style={'font-weight:600'}>验证码</Text><Text className={'c--eb3 f__size--30'}>*</Text>
                </View>
                <input type="number" placeholder={'请输入验证码'} className={'input'}/>
                <View className={'acquire'}>
                  获取
                </View>
              </View>
              <View className={'userItem'}>
                <View className={'top'}>
                  <Text className={'f__size--30 c--333'} style={'font-weight:600'}>手机号</Text><Text className={'c--eb3 f__size--30'}>*</Text>
                </View>
                <input type="number" placeholder={'请输入您的手机号'} className={'input'}/>
              </View>
            </View>
        )
    }
}
