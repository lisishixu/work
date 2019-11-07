import Taro, {Component, Config} from '@tarojs/taro'
import {View,Image,Text} from '@tarojs/components'
import './index.scss'

export interface Props {

}

export interface State {

}

export default class index extends Component<Props, State> {

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
              <View className={'at-box'}>
                <View className={'at-box--left'}>
                  <Image src={'../../statics/imgs/banner.png'} className={'img'}></Image>
                </View>
                <View className={'at-box--right'}>
                  <View className={'f__size--28 c--010'}> 辣椒包精选组 1包装*200G  来自大山 纯手工 绿色无添加</View>
                  <View className={'rigt--font'}>
                    <Text className={'f__size--28 c--eb3 margin-right--10'}>￥38.6</Text><Text className={'f__size--22 c--808 text--line-through '}>￥38.6</Text><Text className={'f__size--26 c--999 fr'}>1254人查看</Text>
                  </View>
                </View>
              </View>
            </View>
        )
    }
}
