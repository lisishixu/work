import Taro, {Component, Config} from '@tarojs/taro'
import {Image, View, Text, Label} from '@tarojs/components'
import './goEstimate.scss'
import {AtImagePicker, AtRate, AtTextarea} from "taro-ui";
import IconFont from "../../components/iconfont";
import FixedButton from "../../components/fixed-button/fixed-button";

export interface Props {

}

export interface State {
  value: string
  files: any[]
  flag:boolean
  num:number
}

export default class GoEstimate extends Component<Props, State> {

  config: Config = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      files: [],
      flag:false,
      num:5
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
  onCheckAll(){
    this.setState({flag:!this.state.flag})
  }
  onChangeGrade (num) {
    this.setState({
      num
    })
  }
  render() {
    return (
      <View className={'goestimate'}>
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
        <AtTextarea
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          maxLength={200}
          placeholder='说说哪里好，鼓励一下我吧~'
          count={false}
        />
        <AtImagePicker
          files={this.state.files}
          onChange={this.onChange.bind(this)}
          showAddBtn={this.state.files.length < 3}
          length={3}
        />
        <View className={'is-anonymity'}>
          <View onClick={this.onCheckAll}>
          {this.state.flag?
            <Label className={'esChecked checked'}>
              <IconFont name={'duihao'} size={30}/>
            </Label>
            :<Label className={'esChecked'}>
              <IconFont name={'duihao'} size={30}/>
            </Label>
          }
          </View>
          <View className={'f__size--26 c--010'}>匿名</View>
          <View style={'flex:1;text-align:right'}><Text className={'f__size--24 c--666'}>你写的评价会以匿名的形式展现</Text></View>
          </View>
        <View className={'flex a__items--center'}>
          <Text className={'margin-left--30 c--333 f__size--28'}>综合评价</Text><AtRate max={5} value={this.state.num} margin={20} onChange={this.onChangeGrade.bind(this)} />
        </View>
      <FixedButton text={'发表评价'} bottom={'5vh'}/>
      </View>
    )
  }
}
