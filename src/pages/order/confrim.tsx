import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Image, Button, Label} from '@tarojs/components'
import './confrim.scss'
import {AtCalendar, AtInput, AtInputNumber} from "taro-ui";
import {GoodsModel} from "../../models/GoodsModel";
import {GoodsData, UserData} from "../../data";
import {UserModel} from "../../models/UserModel";
import IconFont from "../../components/iconfont";
import {setDATA} from "../../utils/helper";

export interface Props {

}

export interface State {
  goods: GoodsModel
  selectedTime: string | number
  userList: UserModel[]
  selectedUser: UserModel
  payMode: string
  showMask: string | boolean,//false表示不显示遮罩层，explain是购买须知、user是编辑信息、date是日历
}

export default class OrderConfrim extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: "确认订单"
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      goods: GoodsData[0],
      selectedTime: '',
      userList: [
        UserData, UserData, UserData
      ],
      selectedUser: {
        name: '',
        headimg: '',
        phone: ''
      },
      payMode: 'wehcat',
      showMask: false
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
    const selectedUser = UserData;
    this.setState({selectedUser})
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  // 选择用户
  onUserName = (value) => {
    console.log(value);
  };

  // 点击日历
  onDay = (date) => {
    console.log('选择的日期', date);
    //  格式化时间
    //  判断时间是否已经约满
    //  操作选中
  };

  // 编辑用户信息输入框
  handleChange = (type, value) => {
    const selectedUser = this.state.selectedUser;
    selectedUser[type] = value;
    console.log(selectedUser);
    this.setState({selectedUser});
  };

  // 提交订单
  onConfrim = () => {
    // 往下个页面传值
    setDATA('payResult', 'success');
    setDATA('payPrice', '169.00');
    Taro.switchTab({
      url: '/pages/cart/index'
    })
  };

  render() {
    return (
      <View className='confrim'>

        <View className="box">
          <View className={"goods"}>
            <Image src={this.state.goods.product_img} className={"goods__cover"}/>
            <View className="goods__content">
              <Text className="block name ellipsis-2">{this.state.goods.product_name}</Text>
              <Text className="block sku ellipsis-2">{this.state.goods.product_original}</Text>
              <Text className="block price">￥{this.state.goods.product_price}</Text>
              <AtInputNumber
                className={"input-number"}
                min={1}
                step={1}
                value={1}
                type={"number"}
                onChange={() => {
                  // this.onChangeNum(index, event)
                }}
              />
            </View>
          </View>
          <View className="date">
            <View className="block-title">选择取货日期</View>
            <View className="select j__content--spbe">
              <Button className="select__btn active">今天 10-18</Button>
              <Button className="select__btn">今天 10-18</Button>
              <Button className="select__btn">今天 10-18</Button>
              <Button className="select__btn" onClick={() => this.setState({showMask: 'date'})}>更多> </Button>
            </View>
            <View className="explain">
              <Text className="explain__text">随买随用 | 无需换票 | 有条件退</Text>
              <Button className="explain__btn" onClick={() => this.setState({showMask: 'explain'})}> 购买须知> </Button>
            </View>
          </View>
        </View>

        <View className="box user">
          <View className="block-title">用户信息</View>
          <View className="select">
            {this.state.userList.map((it, index) => {
              return <Button
                className={`btn select__btn ${this.state.selectedUser ? (this.state.selectedUser.name === it.name && 'active') : (index === 0 && 'active')}`}
                key={it.name + index}
                onClick={this.onUserName}>{it.name}</Button>
            })}
            <Button className="btn select__btn" onClick={() => this.setState({showMask: 'user'})}>新增></Button>
          </View>
          <View className="user-selected">
            <View>
              <Text className="block">姓名：{this.state.selectedUser.name || '---'}</Text>
              <Text className="block margin-top--10">手机号：{this.state.selectedUser.phone || '---'}</Text>
            </View>
            <Button className="btn c--eb3 btn-edit" onClick={() => this.setState({showMask: 'user'})}>编辑</Button>
          </View>
        </View>

        <View className="box mode">
          <View className="block-title">选择支付方式</View>
          <View className="mode__item">
            <View className="">
              <View className="inline--block margin-right--20">
                <IconFont name={"weixin"} size={30}/>
              </View>
              <Text>微信支付</Text>
            </View>
            <Label className={`checkbox checked`}
                   onClick={() => {
                     // this.onCheck(index)
                   }}>
              <IconFont name={"duihao"} size={28}/>
            </Label>
          </View>
        </View>

        <View style={{height: '80px', opacity: 0}}>
        </View>
        <View className="footer">
          <Text className="f__size--30 c--666">共1件，合计：</Text>
          <Text className="c--eb3">￥169.00</Text>
          <Button className="btn-confrim" onClick={this.onConfrim}>提交订单</Button>
        </View>

        {this.state.showMask &&
        <View className="mask">
          {/*购买须知*/}
          {this.state.showMask === 'explain' &&
          <View className="mask-box">
              <View className="header">
                  <Text className="header__title">购买须知</Text>
              </View>
              <View className="line clearfix">
                  <Text className="tag">随买随用</Text>
                  <Text className="content">19:30点前可订今日，预定后立即可到店自取</Text>
              </View>
              <View className="line clearfix">
                  <Text className="tag">无需换票</Text>
                  <Text className="content">无需任何消费，持【商家券码】直接到店自取</Text>
              </View>
              <View className="line clearfix">
                  <Text className="tag">有条件退</Text>
                  <Text className="content">未消费可随时申请退款，退款不收手续费。过期未消费系统自动发起退款申请。</Text>
              </View>
              <View className="instructions">
                  <View className="block-title">使用说明</View>
                  <View className="line clearfix">
                      <Text className="left">取货时间</Text>
                      <Text className="content">09:00-20:00</Text>
                  </View>
                  <View className="line clearfix">
                      <Text className="left">取货地址</Text>
                      <Text className="content">河南省郑州市金水区金水东路雅宝东方国际</Text>
                  </View>
              </View>
              <Button className="btn btn-main" onClick={() => this.setState({showMask: false})}>关闭</Button>
          </View>}
          {/*用户信息编辑*/}
          {this.state.showMask === 'user' &&
          <View className="mask-box">
              <View className="header">
                  <Text className="header__title">编辑用户信息</Text>
                  <Button className="btn btn-close" onClick={() => this.setState({showMask: false})}>
                      <IconFont name={"guanbi"} size={38} color={'#888'}/>
                  </Button>
              </View>
              <AtInput
                  name='name'
                  title='姓名'
                  placeholder='请输入姓名'
                  value={this.state.selectedUser.name}
                  onChange={this.handleChange.bind(this, 'name')}
              />
              <AtInput
                  name='phone'
                  title='手机号'
                  type='tel'
                  placeholder='请输入手机号'
                  value={this.state.selectedUser.phone}
                  onChange={this.handleChange.bind(this, 'phone')}
              />
              <Button className="btn btn-main" onClick={() => this.setState({showMask: false})}>完成</Button>
          </View>}
          {/*选择日期*/}
          {this.state.showMask === 'date' &&
          <View className="mask-box">
              <View className="header">
                  <Text className="header__title">选择取货日期</Text>
                  <Button className="btn btn-close" onClick={() => this.setState({showMask: false})}>
                      <IconFont name={"guanbi"} size={38} color={'#888'}/>
                  </Button>
              </View>
              <AtCalendar
                  currentDate={Date.now()}
                  minDate="2019/11/16" maxDate="2019/12/1"
                  onDayClick={this.onDay.bind(this)}/>
          </View>}
        </View>}

      </View>
    )
  }
}
