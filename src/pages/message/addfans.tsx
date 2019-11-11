import Taro, {Component, Config} from '@tarojs/taro'
import {View,Image,Text} from '@tarojs/components'
import './addfans.scss'

export interface Props {

}

export interface State {

}

export default class addFans extends Component<Props, State> {

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
            <View className='addfans'>
              <View className={'addfans-box'}>
                  <Image src={'../../statics/imgs/banner1.png'} style={{width:'50px',height:'50px',borderRadius:'50%'}} className={'margin-right--20'}></Image>
                  <View style={'height:50px'}>
                    <Text className={'f__size--30 c--010'}>球球思密达</Text><Text className={'margin-left--20 f__size--28 c--010'}>开始关注你们了</Text>
                    <View className={'f__size--22 c--666 margin-top--20'}>03-12</View>
                  </View>
                  <View className={'backFans'}><Text className={'text'}>回粉</Text></View>
              </View>
              <View className={'addfans-box'}>
                <Image src={'../../statics/imgs/banner1.png'} style={{width:'50px',height:'50px',borderRadius:'50%'}} className={'margin-right--20'}></Image>
                <View style={'height:50px'}>
                  <Text className={'f__size--30 c--010'}>球球思密达</Text><Text className={'margin-left--20 f__size--28 c--010'}>开始关注你们了</Text>
                  <View className={'f__size--22 c--666 margin-top--20'}>03-12</View>
                </View>
                <View className={'backFans'}><Text className={'text'}>回粉</Text></View>
              </View>
            </View>
        )
    }
}
