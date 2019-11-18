import Taro, {Component, Config} from '@tarojs/taro'
import {Image, View,Text} from '@tarojs/components'
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
              <View className={'footer'}>
                <View className={'flex'}>
                  <IconFont name={'dian'} size={60} color={'#F12735'}/>
                  <Text className={'text'}>活动说明</Text>
                  <View className={'rotate'}>
                    <IconFont name={'dian'} size={60} color={'#F12735'}/>
                  </View>
                </View>
                <View className={'last-footer'}>
                  <View className={'view'}>
                    <Text className={'f__size--24 c--333'}>1.保存或分享二维码</Text>
                    <View className={'f__size--22 c--666'}>把你的二维码保存下来或者直接分享给好友</View>
                  </View>
                  <View className={'view'}>
                    <Text className={'f__size--24 c--333'}>2.好友识别二维码完成注册并实名认证</Text>
                    <View className={'f__size--22 c--666'}>好友进行账户注册，同时输入您分享的邀请码</View>
                  </View>
                  <View className={'view'}>
                    <Text className={'f__size--24 c--333'}>3.好友成为您的代理并成功开店</Text>
                    <View className={'f__size--22 c--666'}>好友的收益你可以得到分润</View>
                  </View>
                </View>
              </View>
            </View>
        )
    }
}
