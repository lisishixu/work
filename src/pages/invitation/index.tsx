import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Text, Navigator} from '@tarojs/components'
import './index.scss'
import IconFont from "../../components/iconfont";
import {AtButton, AtDivider} from "taro-ui";
import {GoodsData} from "../../data";
import {GoodsModel} from "../../models/GoodsModel";



export interface Props {

}

export interface State {
  recommendList: GoodsModel[]//首页推荐商品
}

export default class Invitation extends Component<Props, State> {

    config: Config = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
          recommendList: GoodsData
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

    render() {
        return (
            <View className='index invitation-box'>
               <Image src={'../../statics/imgs/invitation.png'} style={'width:100%'}></Image>
                <AtButton size='small' className={'btn--step'}>简单三步  立享佣金</AtButton>
                <View className={'step--detail'}>
                  <View className={'detail--num'}>
                    <View className={'view'}>
                      <IconFont name='fenxiang-1' size={60} color='#fff'/>
                    </View>
                    <Text className={'f__size--25 margin-top--30'} style={'color:#9897FE'}>分享给好友</Text>
                  </View>
                  <View className={'detail--num'}>
                    <View className={'view'}>
                      <IconFont name='yaoqinghaoyou' size={60} color='#fff'/>
                    </View>
                    <Text className={'f__size--25 margin-top--30'} style={'color:#9897FE'}>好友注册</Text>
                  </View>
                  <View className={'detail--num'}>
                    <View className={'view'}>
                      <IconFont name='jiludanzilishijilu' size={60} color='#fff'/>
                    </View>
                    <Text className={'f__size--25 margin-top--30'} style={'color:#9897FE'}>下单成功</Text>
                  </View>
                  <View className={'detail--num'}>
                    <View className={'view'}>
                      <IconFont name='yonghu_shouyi' size={60} color='#fff'/>
                    </View>
                    <Text className={'f__size--25 margin-top--30'} style={'color:#9897FE'}>你得现金</Text>
                  </View>
                </View>
              <AtDivider content='更多商品' fontColor='#F12737' lineColor='#F12737' />
              <View className='at-row at-row--wrap RecommendList container bg-color--f2f2f2'>
                {this.state.recommendList.map((it, index) => {
                  return <Navigator url={`/pages/goods/detail?id=${it.product_id}`} className='at-col at-col-6'>
                    <View key={'img' + index} style={{background: '#fff'}}>
                      <Image src={it.product_img} className={"RecommendList--img"}/>
                      <View style={'padding:5px'}>
                        <View className={'margin-top--10 '} style={'height:40px'}>
                          <Text className={'c--333 f__size--24'}>{it.product_name}</Text>
                        </View>
                        <View>
                          <Text className={'c--eb3 f__size--30 margin-right--20'}>￥{it.product_price}</Text><Text
                          className={'f__size--22 c--eb3'} style={{border:'1px solid #F12737',padding:'0 3px'}}>赚{it.product_original}元</Text>
                        </View>
                      </View>
                    </View>
                  </Navigator>
                })}
              </View>
            </View>
        )
    }
}
