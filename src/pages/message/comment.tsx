import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image,Text} from '@tarojs/components'
import './comment.scss'

export interface Props {

}

export interface State {
  flag:boolean
  isDel:boolean
}

export default class Comment extends Component<Props, State> {

    config: Config = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
          flag:false,
          isDel:true
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
            <View className='comment'>
                <View className={'comment-box'}>
                  <Image src={'../../statics/imgs/banner1.png'} style={{width:'50px',height:'50px',borderRadius:'10px',marginRight:'10px'}}/>
                  <View>
                    <View className={'f__size--24 c--010 margin-bottom--10'}>liu点小胡须</View>
                    <View className={'f__size--22 c--333 margin-bottom--10'}>此评论已删除</View>
                    <View className={'f__size--20 c--666'}>评论了你的作品  2-13</View>
                  </View>
                  <View style={'flex:1;text-align:right'}>
                    {this.state.flag?<Image src={'../../statics/imgs/banner1.png'} style={{width:'70px',height:'70px'}}/>
                    :<Text style={'width:50px;display:inline-block'} className={'f__size--22 c--333'}>难得的是坦诚相待坚守本...</Text>
                    }
                  </View>
                </View>
              <View className={'comment-box'}>
                <Image src={'../../statics/imgs/banner1.png'} style={{width:'50px',height:'50px',borderRadius:'10px',marginRight:'10px'}}/>
                <View>
                  <View className={'f__size--24 c--010 margin-bottom--10'}>liu点小胡须</View>
                  {this.state.isDel? <View className={'f__size--22 c--333 margin-bottom--10'} style={'background:#999;width:70px'}>此评论已删除</View>
                   :<View className={'f__size--22 c--333 margin-bottom--10'}>很喜欢你的作品，已经关注你了，求回粉啊~</View>
                  }

                  <View className={'f__size--20 c--666'}>评论了你的作品  2-13</View>
                </View>
                <View style={'flex:1;text-align:right'}>
                  {this.state.flag?<Image src={'../../statics/imgs/banner1.png'} style={{width:'70px',height:'70px'}}/>
                    :<Text style={'width:50px;display:inline-block'} className={'f__size--22 c--333'}>难得的是坦诚相待坚守本...</Text>
                  }
                </View>
              </View>
            </View>
        )
    }
}
