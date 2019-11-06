import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Image, Button, Label} from '@tarojs/components'
import './index.scss'
import {GoodsData} from "../../data";
import {GoodsModel} from "../../models/GoodsModel";
import IconFont from "../../components/iconfont";
import {AtInputNumber} from "taro-ui";

export interface Props {

}

export interface State {
  isEdit: boolean,//是否在编辑状态
  cartList: GoodsModel[]
}

export default class Index extends Component<Props, State> {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      cartList: GoodsData
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

  // 选择、不选某一项
  onCheck = (index) => {
    console.log('目前选中的项目:', index);
    const {cartList} = this.state;
    cartList[index]['checked'] = !cartList[index]['checked'];
    this.setState({cartList});
  };

  // 全选、全不选
  onCheckAll = () => {

  };

  // 计算费用
  computeTotalPrice = () => {

  };

  // 进入、退出编辑
  onEdit = () => {
    this.setState({isEdit: !this.state.isEdit})
  };

  // 修改购物车数量
  onChangeNum = (index, num) => {
    console.log(index, num);
    const {cartList} = this.state;
    cartList[index]['num'] = num;
    this.setState({cartList});
  };

  // 结算
  onSubmit = () => {

  };

  render() {
    return (
      <View className='index'>
        <View className="container bg-color--f2f2f2 flex a__items--center j__content--spbe">
          <Text className="f__size--28">
            共
            <Text className="c--eb3">{this.state.cartList.length || 0}</Text>
            件商品
          </Text>
          <Button className={"btn btn-edit"} onClick={this.onEdit}>
            {this.state.isEdit ? '完成' : '编辑'}
          </Button>
        </View>
        <View className="cart-list">
          {this.state.cartList.map((it, index) => {
            return <View className={"cart__item goods"} key={'cart' + index}>
              <Label className={`checkbox ${it['checked'] ? 'checked' : ''}`}
                     onClick={() => {
                       this.onCheck(index)
                     }}>
                <IconFont name={"duihao"} size={28}/>
              </Label>
              <Image src={it.product_img} className={"goods__cover"}/>
              <View className="cart__content">
                <Text className="block name">{it.product_name}</Text>
                <Text className="block name">{it.product_original}</Text>
                <Text className="block">{it.product_original}</Text>
                <AtInputNumber
                  className={"input-number"}
                  min={1}
                  // max={10}
                  step={1}
                  value={it['num'] || 1}
                  type={"number"}
                  onChange={(event)=>{
                    this.onChangeNum(index, event)
                  }}
                />
              </View>
            </View>
          })}
        </View>

        <View className="footer">

        </View>

      </View>
    )
  }
}
