import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import './index.scss'
import {AtIcon, AtImagePicker, AtTextarea} from "taro-ui";
import IconFont from "../../components/iconfont";
import FixedButton from "../../components/fixed-button/fixed-button";
import {getDATA, setDATA} from "../../utils/helper";

export interface Props {

}

export interface State {
  value: string
  files: any[]
}

export default class Index extends Component<Props, State> {

  config: Config = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      files: []
    }
  }

  componentWillMount() {
    const isBack = this.$router.params.back;
    if (isBack) this.setState(getDATA('post'));
    setDATA('post',null);
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    setDATA('post', this.state);
    if (this.state.value!=""||this.state.files.length>0){
      Taro.showModal({
        title: '确认放弃？',
        content: '点击取消可以返回到当前页面',
      }).then(res => {
        if (res.confirm) {

        }else{
          Taro.navigateTo({
            url: '/pages/publish/index?back=1'
          })
        }
      })
    }
  }

  componentDidShow() {
  }

  componentDidHide() {

  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  onChange(files) {
    this.setState({
      files
    })
  }

  onFail(mes) {
    console.log(mes)
  }

  onImageClick(index, file) {
    console.log(index, file)
  }

  render() {
    return (
      <View className='index'>
        <AtTextarea
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          maxLength={200}
          placeholder='分享你的心得~'
        />
        <View className={'fr'}><Text className={'f__size--28 c--999 margin-right--30'}>200字</Text><Text
          className={'f__size--28 c--eb3 margin-right--20'}>#话题</Text></View>
        <AtImagePicker
          length={4}
          files={this.state.files}
          onChange={this.onChange.bind(this)}
          onFail={this.onFail.bind(this)}
          onImageClick={this.onImageClick.bind(this)}
          count={2}
          showAddBtn={this.state.files.length < 9}
        />
        <View className={'publish-footer'}>
          <IconFont name={'shangpinguanli'} size={40} color={'#666'}/>
          <Text className={'f__size--30 c--666 margin-left--20'}>添加关联商品</Text>
          <View className={'inline--block view'}>
            <AtIcon value='chevron-right' size='20' color='#dcdcdc'></AtIcon>
          </View>
        </View>
        <View className={'publish-footer'}>
          <IconFont name={'suo'} size={40} color={'#666'}/>
          <Text className={'f__size--30 c--666 margin-left--20'}>动态权限</Text>
          <View className={'inline--block view'}>
            <AtIcon value='chevron-right' size='20' color='#dcdcdc'></AtIcon>
          </View>
        </View>
        <FixedButton text={'立即发布'} bottom={'1vh'}/>
      </View>
    )
  }
}
