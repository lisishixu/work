import Taro, {Component, Config} from '@tarojs/taro'
import {Text, View} from '@tarojs/components'
import '../joinAgency/index.scss'
import FixedButton from "../../components/fixed-button/fixed-button";

export interface Props {

}

export interface State {

}

export default class Index extends Component<Props, State> {

    config: Config = {
      navigationBarTitleText: "我要开店",
      navigationBarTextStyle: "white",
      navigationBarBackgroundColor: '#F12737'
    };

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
              <View className='index'>
                <View className={'userItem'}>
                  <View className={'top'}>
                    <Text className={'f__size--30 c--333'} style={'font-weight:600'}>店铺名称</Text><Text className={'c--eb3 f__size--30'}>*</Text>
                  </View>
                  <input type="text" placeholder={'请输入店铺名称'} placeholder-class={'place-text'}/>
                </View>
                <View className={'userItem'}>
                  <View className={'top'}>
                    <Text className={'f__size--30 c--333'} style={'font-weight:600'}>姓名</Text><Text className={'c--eb3 f__size--30'}>*</Text>
                  </View>
                  <input type="text" placeholder={'请输入您的姓名'} placeholder-class={'place-text'}/>
                </View>
                <View className={'userItem'}>
                  <View className={'top'}>
                    <Text className={'f__size--30 c--333'} style={'font-weight:600'}>手机号</Text><Text className={'c--eb3 f__size--30'}>*</Text>
                  </View>
                  <input type="number" placeholder={'请输入您的手机号'} placeholder-class={'place-text'}/>
                </View>
                <View className={'userItem'}>
                  <View className={'top'}>
                    <Text className={'f__size--30 c--333'} style={'font-weight:600'}>验证码</Text><Text className={'c--eb3 f__size--30'}>*</Text>
                  </View>
                  <input type="number" placeholder={'请输入验证码'} placeholder-class={'place-text'}/>
                  <View className={'acquire'}>
                    获取
                  </View>
                </View>
                <View className={'userItem'}>
                  <View className={'top'}>
                    <Text className={'f__size--30 c--333'} style={'font-weight:600'}>身份证号</Text><Text className={'c--eb3 f__size--30'}>*</Text>
                  </View>
                  <input type="number" placeholder={'请输入您的身份证号'} placeholder-class={'place-text'}/>
                </View>
                <View className={'userItem margin-bottom--10'}>
                  <View className={'top'}>
                    <Text className={'f__size--30 c--333'} style={'font-weight:600'}>证件期限</Text><Text className={'c--eb3 f__size--30'}>*</Text>
                  </View>
                  <input type="number" placeholder={'请输入您的身份证有效期'} placeholder-class={'place-text'}/>
                </View>
                <View className={'userItem'}>
                  <View className={'top'}>
                    <Text className={'f__size--30 c--333'} style={'font-weight:600'}>登录密码</Text><Text className={'c--eb3 f__size--30'}>*</Text>
                  </View>
                  <input type="number" placeholder={'请输入您的登录密码（6-20位大小写字母或数字）'}placeholder-class={'place-text'}/>
                </View>
                <View className={'userItem'}>
                  <View className={'top'}>
                    <Text className={'f__size--30 c--333'} style={'font-weight:600'}>登录密码</Text><Text className={'c--eb3 f__size--30'}>*</Text>
                  </View>
                  <input type="number" placeholder={'请再次输入您的登录密码'} placeholder-class={'place-text'}/>
                </View>
                <FixedButton text={'下一步'} bottom={'3vh'}/>
            </View>
            </View>
        )
    }
}
