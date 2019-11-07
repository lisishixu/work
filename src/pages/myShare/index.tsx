import Taro, {Component, Config} from '@tarojs/taro'
import {View, Label, Image, Text, Block} from '@tarojs/components'
import IconFont from "../../components/iconfont";
import './index.scss'
import {GoodsData} from "../../data";
import {GoodsModel} from "../../models/GoodsModel";

export interface Props {

}

export interface State {
  isEdit: boolean,//是否在编辑状态
  sharelist: GoodsModel[]
  isAllChecked: boolean,//是否全选
}

export default class Index extends Component<Props, State> {

  config: Config = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      sharelist: GoodsData,
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
    console.log('目前选中的项目:', index);
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
    this.setState({isAllChecked, sharelist, })
  };
  onDelChecked = () => {
    Taro.showModal({
      title: '询问',
      content: '真的要删除商品吗？'
    }).then(res => {
      if (res.confirm) {
        let {sharelist} = this.state;
        const aa=sharelist;
        aa.forEach((it, index) => {
            console.log(it);
            if (it['checked']) {
              sharelist.splice(index, 1);
              console.log(index);
            }
          });
        this.setState({sharelist})
      }
    });

  };
  render() {
    return (
      <View className={'index'}>
        <View style={{backgroundColor: '#F8F8F8', padding: '6px 20px'}}>
          <Text className={'f__size--26 c--010'}>共<Text className={'c--eb3'}>3</Text>件商品</Text><Text
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
                <Text className={'f__size--26 c--999 fr'}>1254人查看</Text>
              </View>
            </View>
          </View>
        })}
        {this.state.isEdit&&
          <Block>
              <View className={'share-footer'}>
                  <View onClick={this.onCheckAll}>
                    {this.state.isAllChecked?
                      <Label className={'all--checked checked'}></Label>
                      :<Label className={'all--checked'}>
                        <IconFont name={'duihao'} size={30}/>
                      </Label>
                    }
                  </View>
                  <Text>全选</Text>
                  <View className={'footer--del'} onClick={this.onDelChecked}>删除</View>
              </View>
          </Block>
        }
        </View>
    )
  }
}
