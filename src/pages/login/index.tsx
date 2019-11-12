import Taro, {Component, Config} from '@tarojs/taro'
import {Image, Label, Text, View} from '@tarojs/components'
import './index.scss'
import {AtInput} from "taro-ui";
import IconFont from "../../components/iconfont";
import FixedButton from "../../components/fixed-button/fixed-button";

export interface Props {

}

export interface State {
  value:string
  password:string
  flag:boolean
}

export default class Index extends Component<Props, State> {

    config: Config = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
          value:'',
          password:'',
          flag:false
        }
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
  changFlag = () =>{
    this.setState({flag:!this.state.flag})

  }
  handleChange (value) {
    this.setState({
      value
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }
  password(password){
      this.setState(({password}))
      return
  }
    render() {
        return (
            <View className='index'>
              <Image src={'../../statics/imgs/banner1.png'} className={'img'}></Image>
              <View style={{color:'#000',fontSize:'20px',marginLeft:'25px',marginBottom:'60px'}}>欢迎来到五联创客</View>
              <AtInput
                clear
                name='value1'
                type='text'
                placeholder='请输入商家账号'
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
              />
              <AtInput
                clear
                name='value2'
                type='password'
                placeholder='请输入密码'
                value={this.state.password}
                onChange={this.password.bind(this)}
              />
              <View className={'user--know'}>
                <Label className={`vip--label ${this.state.flag?"flag":""}`} onClick={()=>this.changFlag()}>
                  <IconFont name={'duihao'} size={35}/>
                </Label>
                <Text className={'f__size--22 c--999'}>注册代表您已同意《用户须知》和《隐私协议》内容。</Text>
              </View>
              <FixedButton text={'登录'} bottom={'10vh'}/>
            </View>
        )
    }
}
