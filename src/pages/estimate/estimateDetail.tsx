import Taro, {Component, Config} from '@tarojs/taro'
import {Image, Text, View} from '@tarojs/components'
import './estimateDetail.scss'

export interface Props {

}

export interface State {

}

export default class EstimateDetail extends Component<Props, State> {

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
            <View className='estimateDetail'>
              <View className={'goestimate-box'}>
                <Image src={'../../statics/imgs/banner1.png'} className={'img'}/>
                <View style={'width:100%'}>
                  <View className={'margin-bottom--10'}>
                    <Text className={'c--010 f__size--28'}>蓝莓蓝莓蓝莓蓝莓蓝莓蓝莓</Text>
                    <Text className={'f__size--24 c--010 fr'}>￥29.80</Text>
                  </View>
                  <View>
                    <Text className={'c--666 f__size--28'}>800g*份</Text>
                    <Text className={'c--666 f__size--24 fr'}>x1</Text>
                  </View>
                </View>
              </View>
              <View className={'detai-content'}>
                <Image src={'../../statics/imgs/banner1.png'} className={'img fl'}/>
                <View className={'inline--block'} style={'width:80%'}>
                  <View className={'f__size--26 c--010'}>是悠悠啊</View>
                  <View className={'f__size--22 c--666'}> 10-23 11:30 </View>
                  <View className={'f__size--24 c--010'} style={'margin-top:30px;line-height:1.5'}>我的评价我的评价我的评价我的评价我的评价我我的评价我的评价我的评价我的评价我的评价我的评价我我的评价我的评价我的评价我的评价我的评价我的评价我</View>
                </View>
              </View>
            </View>
        )
    }
}
