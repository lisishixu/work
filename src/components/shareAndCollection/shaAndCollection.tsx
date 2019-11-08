import Taro, {Component, Config} from '@tarojs/taro'
import {View, Label, Image, Text, Block} from '@tarojs/components'
import IconFont from "../../components/iconfont";
import './shareAndCollection.scss'
import {GoodsModel} from "../../models/GoodsModel";
import StateTip from "../../components/state-tip/state-tip";
export interface Props {
    nullTitle:string
    isBtn:string
    isfont:boolean
    isalert:string
    data:GoodsModel[]
}
export interface State {
  isEdit: boolean,//是否在编辑状态
  sharelist: GoodsModel[]
  isAllChecked: boolean,//是否全选
}
export default class ShaAndCollection extends Component<Props, State> {
  config: Config = {};
  static defaultProps = {
    data:[]
  };
  static options = {
    addGlobalClass: true
  };
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      sharelist: this.props.data,
      isAllChecked: false
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

  onEdit = () => {
    this.setState({isEdit: !this.state.isEdit})
  }
  onCheck = (index) => {
    const {sharelist,} = this.state;
    sharelist[index]['checked'] = !sharelist[index]['checked'];
    this.setState({sharelist})
  };
  onCheckAll = () => {
    let {sharelist, isAllChecked} = this.state;
    isAllChecked = !isAllChecked;
    sharelist.forEach(it => {
      it['checked'] = isAllChecked;
    });
    this.setState({isAllChecked, sharelist})
  };
  onDelChecked = () => {
    Taro.showModal({
      title: '询问',
      content:this.props.isalert
    }).then(res => {
      if (res.confirm) {
        let {sharelist} = this.state;
        let newArr;
        newArr = sharelist.filter(item => !item['checked']);
        this.setState({sharelist:newArr})
      }
    });

  };
  render() {
    //暂无数据暂时无页面
    if (!this.state.sharelist || this.state.sharelist.length < 1) {
      return (
        <View>
          <StateTip size={"small"} imgUrl={'../../statics/imgs/tabbar/shop_no.png'} title={this.props.nullTitle}>
          </StateTip>
        </View>
      )
    }
    return (
      <View className={'index'}>
        <View style={{backgroundColor: '#F8F8F8', padding: '6px 20px'}}>
          <Text className={'f__size--26 c--010'}>共<Text className={'c--eb3'}>{this.state.sharelist.length}</Text>件商品</Text><Text
          className={'fr f__size--26 c--eb3'} onClick={this.onEdit}>{this.state.isEdit ? '完成' : '编辑'}</Text>
        </View>
        {this.state.sharelist.map((it, index) => {
          return <View className={'share-box'} key={'share' + index}>
            {this.state.isEdit &&
            <Block>
                <Label className={`share--label ${it['checked']?'checked':""}`}
                       onClick={() => {
                         this.onCheck(index)
                       }}>
                    <IconFont name={'duihao'} size={30}/>
                </Label>
            </Block>}
            <Image src={it.product_img} className={'share--img'}/>
            <View className={'sha-box--right'}>
              <View className={'f__size--28 c--010'}>{it.product_name}</View>
              <View className={'right-btm'}>
                <Text className={'f__size--28 c--eb3 margin-right--10'}>￥{it.product_price}</Text>
                <Text className={'f__size--22 c--808 text--line-through '}>￥{it.product_original}</Text>
                {this.props.isfont ? <View className={'lookSimilar fr'}>查看相似</View>
                : <Text className={'f__size--26 c--999 fr'}>1254人查看</Text>
                }
              </View>
            </View>
          </View>
        })}
        {this.state.isEdit&&
        <Block>
            <View className={'share-footer'}>
                <View onClick={this.onCheckAll}>
                  {this.state.isAllChecked?
                    <Label className={'all--checked checked'}>
                      <IconFont name={'duihao'} size={30}/>
                    </Label>
                    :<Label className={'all--checked'}></Label>
                  }
                </View>
                <Text>全选</Text>
                <View className={'footer--del'} onClick={this.onDelChecked}>{this.props.isBtn}</View>
            </View>
        </Block>
        }
      </View>
    )
  }
}
