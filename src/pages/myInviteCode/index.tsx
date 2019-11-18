import Taro, {Component, Config} from '@tarojs/taro'
import {Image, View} from '@tarojs/components'
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
              <Image src={'../../statics/imgs/BG.png'} className={'img'}/>
              <View className={'center'}>
                <View className={'title-img'}>
                  邀请码：2223685423
                </View>
                <View>
                <View className={'text--center'}><Image src={'../../statics/imgs/banner1.png'} className={'img'}></Image></View>
                  <View className={'view'}>去分享</View>
                </View>
                <Image src={'../../statics/imgs/bian.png'} className={'join-img'} style={'left:20px;'}></Image>
                <Image src={'../../statics/imgs/bian.png'} className={'join-img'} style={'right:20px;'}></Image>
              </View>
              <View>
               <IconFont name={'dian'}/>
              </View>
            </View>
        )
    }
}
