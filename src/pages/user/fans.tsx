import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Button, Block} from '@tarojs/components'
import './fans.scss'
import {AtAvatar} from "taro-ui";
import IconFont from '../../components/iconfont';
import {setDATA} from "../../utils/helper";
import {post} from "../../utils/request";
import api from "../../constants/api";

export interface Props {

}

export interface State {
  userID: string
  isFans: boolean
  dataList: any[]
  pageNum:number
  pageSize:number
}

export default class UserFans extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: ""
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      userID: '',
      isFans: true,
      dataList: [0, 1, 2, 3, 4, 5],
      pageNum: 1,
      pageSize: 20,
    }
  }

  componentWillMount() {
    const userID = this.$router.params.userID;//判断是我的还是Ta的
    const isFans = !!this.$router.params.isFans;//判断是粉丝还是关注
    if (isFans) {
      // 如果是粉丝页面的逻辑
      if (userID) {
        Taro.setNavigationBarTitle({title: 'Ta的粉丝'})
      } else {
        Taro.setNavigationBarTitle({title: '我的粉丝'})
      }
    } else {
      // 如果不是粉丝页面,那就是关注的逻辑
      if (userID) {
        Taro.setNavigationBarTitle({title: 'Ta的关注'})
      } else {
        Taro.setNavigationBarTitle({title: '我的关注'})
      }
    }
    this.setState({userID, isFans});
    this.getFansList()
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  onToHomePage = () => {
    // 此处跳转很容易造成页面栈不够用，采用back的方式
    // /pages/user/homepage?userID=${userID},1245454是测试期间的随机数字
    setDATA('fansBackUserID', this.state.userID + 1245454);
    setTimeout(() => {
      Taro.navigateBack({})
    }, 600)
  };

  onFocus = () => {
    Taro.showToast({
      title: '触发点击'
    })
  };

    getFansList = () =>{
      const{pageNum,pageSize} = this.state;
      post(api.getuserFollow,{
        pageNum,pageSize
      },res=>{
        if(res.code==200){
          console.log(res)
        }else{
          console.log(1)
        }
      })
    }
  render() {
    const {userID, isFans} = this.state;
    return (
      <View className='container fans'>
        {this.state.dataList.map((it, index) => {
          return <View className="fans__item" key={'fans' + it + index}>
            <View onClick={this.onToHomePage}>
              <AtAvatar circle/>
            </View>
            <View className="fans__info">
              <Text className="fans__name">球球思密达</Text>
              <Text className="block text f__size--28 margin-top--10 c--666">
                {userID && isFans ? <Block>只有好吃的美食才能治愈我，hahaha....</Block> : <Block>精品好货·58 | 粉丝·3.6w</Block>}
              </Text>
            </View>
            {/* todo 当前逻辑不严谨，对接api时可改成根据是否关注来显示 已关注 按钮 */}
            {/*Ta的粉丝、关注*/}
            {userID &&
            <Button className="btn flex a__items--center" onClick={this.onFocus}>
                <IconFont name={"jiahao"} color={'#EB3939'}/>
                <Text>关注</Text>
            </Button>}
            {/*我的粉丝*/}
            {!userID && isFans && <Button className={"btn"} onClick={this.onFocus}>回粉</Button>}
            {/*我的关注*/}
            {!userID && !isFans && <Button className={"btn btn-is-focus"} onClick={this.onFocus}>已关注</Button>}
          </View>
        })}
      </View>
    )
  }
}
