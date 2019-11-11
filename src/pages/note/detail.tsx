import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import './detail.scss'

export interface Props {

}

export interface State {

}

export default class NoteDetail extends Component<Props, State> {

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
            <View className='detail'>


            </View>
        )
    }
}
