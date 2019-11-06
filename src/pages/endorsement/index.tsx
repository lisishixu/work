import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Button, ScrollView, Image} from '@tarojs/components'
import './index.scss'
import {AtAvatar, AtSearchBar} from "taro-ui";
import {thisVoid} from "../../utils/helper";
import IconFont from "../../components/iconfont";

export interface Props {

}

export interface State {

}

export default class Index extends Component<Props, State> {

  config: Config = {
    navigationStyle: "custom"
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
        <View className="container page-header">
          <AtAvatar circle size={"small"} image={''}/>
          <View className="tabs">
            <Button className={"btn current"}>推荐</Button>
            <Button className={"btn"}>关注</Button>
          </View>
        </View>

        <View style={{marginTop: '80px'}}>
        </View>

        <AtSearchBar value={''} placeholder={'搜索笔记、商品和用户'} onChange={thisVoid}/>

        <ScrollView className="dynamics">
          {[0, 1, 2, 3, 4].map(it => {
            return <View className="container dynamics__item">
              <View className="dynamics__header flex a__items--center j__content--spbe">
                <View className="user flex a__items--center">
                  <AtAvatar circle size={"small"} image={''}/>
                  <Text className="name margin-left--20">上上那</Text>
                </View>
                <Button className="btn btn-concern">
                  <View className="inline margin-right--10"><IconFont name={"tianjiazhaopian"} color={'white'}/></View>
                  <Text>关注</Text>
                </Button>
              </View>

              <View className="dynamics__content">
                <Text className="content__text">
                  法国巴黎——塞纳河畔左岸的咖啡，埃菲尔铁塔下的誓词，卢浮宫博物馆奇妙游熏陶你的文艺气息。
                </Text>
                <View className="dynamics__imgs dynamics__imgs--3">
                  <Image src={'/statics/imgs/swiper-1.png'} className={"img"}/>
                  <Image src={'/statics/imgs/swiper-1.png'} className={"img"}/>
                  <Image src={'/statics/imgs/swiper-1.png'} className={"img"}/>
                </View>
              </View>

              <View className="dynamics__card">
                <Image src={'/statics/imgs/swiper-1.png'} className={"img"}/>
                <View className="content">
                  <Text className="title">法国巴黎——塞纳河畔左岸的咖啡，埃菲尔铁塔下的誓词</Text>
                  <Text className="price">￥39.9</Text>
                </View>
              </View>

              <View className="footer">
                <Text className="time">今天 10:54</Text>
                <View className="action">
                  <Button className="btn">
                    <View className="inline"><IconFont name={"shanchu"} size={30}/></View>
                    <Text>4551</Text>
                  </Button>
                  <Button className="btn">
                    <View className="inline"><IconFont name={"shanchu"} size={30}/></View>
                    <Text>4551</Text>
                  </Button>
                  <Button className="btn">
                    <View className="inline"><IconFont name={"shanchu"} size={30}/></View>
                    <Text>4551</Text>
                  </Button>
                </View>
              </View>
            </View>
          })}
        </ScrollView>
      </View>
    )
  }
}
