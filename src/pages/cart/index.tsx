import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Image, Button, Navigator, Block} from '@tarojs/components'
import './index.scss'
import {GoodsData} from "../../data";
import {GoodsModel} from "../../models/GoodsModel";
import IconFont from "../../components/iconfont";
import {AtDivider, AtInputNumber} from "taro-ui";
import GoodsListCard from "../../components/goods-list--card/goods-list--card";
import StateTip from "../../components/state-tip/state-tip";
import {getDATA, setDATA} from "../../utils/helper";

export interface Props {

}

export interface State {
  type: string,//当前类型。支付结果result，其余是购物车有商品、没商品
  isEdit: boolean,//是否在编辑状态
  cartList: GoodsModel[],
  goodsList: GoodsModel[],
  checkedNumber: number,//已经选中的商品数量
  isAllChecked: boolean,//是否全选
  totalNumber: number,//商品总数量
  totalPrice: number,//商品总金额
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
      type: 'cart',
      isEdit: false,
      // cartList: [],
      cartList: GoodsData,
      goodsList: GoodsData,
      isAllChecked: false,
      totalNumber: 0,
      totalPrice: 0,
      checkedNumber: 0
    }
  }

  componentWillMount() {

  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
    // 每次显示的时候判断显示内容，payResult约定的值可能是 success、error
    const result = getDATA('payResult') || 'cart';
    this.setState({type: result});
    setDATA('payResult', null);
    Taro.setNavigationBarTitle({
      title: result === 'cart' ? '购物车' : '支付结果'
    }).then();
  }

  componentDidHide() {
  }

  // 选择、不选某一项
  onCheck = (index) => {
    console.log('目前选中的项目:', index);
    const {cartList} = this.state;
    let {isAllChecked, checkedNumber} = this.state;
    cartList[index]['checked'] = !cartList[index]['checked'];
    if (cartList[index]['checked']) {
      checkedNumber++
    } else {
      checkedNumber--
    }
    isAllChecked = checkedNumber === cartList.length;

    this.setState({cartList, isAllChecked, checkedNumber}, () => {
      this.computeTotalPrice();
      this.forceUpdate();//强制触发数据更新
    });
  };

  // 全选、全不选
  onCheckAll = () => {
    let {cartList, isAllChecked} = this.state;
    isAllChecked = !isAllChecked;
    cartList.forEach(it => {
      it['checked'] = isAllChecked;
    });
    this.setState({isAllChecked, cartList, checkedNumber: cartList.length}, () => {
      this.computeTotalPrice()
    })
  };

  // 计算费用和数量
  computeTotalPrice = () => {
    const {cartList} = this.state;
    let totalPrice = 0;
    let totalNumber = 0;
    cartList.forEach(it => {
      if (it['checked']) {
        totalNumber += it['num'] * 1 || 1;
        totalPrice += (it['num'] * 1 || 1) * it.product_price;
      }
    });
    this.setState({totalPrice, totalNumber})
  };

  // 进入、退出编辑
  onEdit = () => {
    this.setState(prevState => ({
      isEdit: !prevState.isEdit
    }))
  };

  // 修改购物车数量
  onChangeNum = (index, num) => {
    console.log(index, num);
    const {cartList} = this.state;
    cartList[index]['num'] = num;
    this.setState({cartList}, () => {
      this.computeTotalPrice()
    });
  };

  // 结算
  onSubmit = () => {
    const {totalNumber, totalPrice} = this.state;
    if (!totalNumber) {
      Taro.showToast({
        icon: 'none',
        title: `请先选择商品`
      });
      return;
    }
    Taro.showToast({
      icon: 'none',
      title: `总费用是${totalPrice}`
    });
    this.setState({cartList: []})
  };

  // 删除已选中的
  onDelChecked = (index) => {
    Taro.showModal({
      title: '询问',
      content: '真的要删除商品吗？'
    }).then(res => {
      if (res.confirm) {
        let newArr;
        const {cartList} = this.state;
        let {checkedNumber} = this.state;

        if (index >= 0) {
          // 删除单个，直接修改原数组
          const it = cartList[index];
          if (it['checked']) {
            checkedNumber--;
          }
          cartList.splice(index, 1);
        } else {
          // 批量删除，赋值到newArr
          newArr = cartList.filter(item => !item['checked']);
          checkedNumber = 0;
        }

        this.setState({cartList: newArr || cartList, checkedNumber}, () => {
          this.computeTotalPrice()
        })
      }
    });

  };

  render() {
    const {type} = this.state;
    // 订单处理结果，根据UI显示是在这个页面，也可以跳转到/pages/order/result
    if (type === 'success' || type === 'error') {
      return (
        <View className="result">
          {type === 'success' ?
            <StateTip imgUrl={'/statics/imgs/success2.png'}>
              <Text className="text f__weight--bold">订单支付成功</Text>
              <Text className="text">￥{getDATA('payPrice')}</Text>
              <Text className="text desc">仓库正在为您备货中</Text>
              <View className=" btns">
                <Navigator url={"/pages/order/detail?orderID="}
                           openType={"redirect"}
                           className={"back-order"}>查看订单</Navigator>
                <Navigator url={"/pages/index/index"}
                           openType={"switchTab"}
                           className={"back-index"}>返回首页</Navigator>
              </View>
            </StateTip> :
            <StateTip imgUrl={'/statics/imgs/error.png'}>
              <Text className="text f__weight--bold">订单支付失败</Text>
              <View className="btns">
                <Navigator style={{borderRadius: '2px'}}
                           openType={"navigateBack"}
                           className={"back-index"}>重新支付</Navigator>
              </View>
            </StateTip>}
          <View style={{width: '200px', margin: '0 auto '}}>
            <AtDivider content='继续剁手' fontSize={30} fontColor='#EB3939' lineColor='#EB3939'/>
          </View>
          <GoodsListCard data={this.state.goodsList}/>
        </View>
      )
    }

    // 购物车数量为空0
    if (!this.state.cartList || this.state.cartList.length < 1) {
      return (
        <View>
          <StateTip size={"small"} imgUrl={'../../statics/imgs/tabbar/shop_no.png'} title={'购物车空空如也'}>
            <Navigator url={"/pages/goods/good"} className={"btn-go-shop"}>逛逛今日特卖</Navigator>
          </StateTip>
          <View style={{width: '200px', margin: '0 auto '}}>
            <AtDivider content='猜你喜欢' fontSize={30} fontColor='#EB3939' lineColor='#EB3939'/>
          </View>
          <GoodsListCard data={this.state.goodsList}/>
        </View>
      )
    }

    return (
      <View className='index'>
        <View className="container bg-color--f2f2f2 flex a__items--center j__content--spbe">
          <Text className="f__size--28">
            共
            <Text className="c--eb3 margin-left--10 margin-right--10">{this.state.totalNumber || 0}</Text>
            件商品
          </Text>
          <Button className={"btn btn-edit"} onClick={this.onEdit}>
            {this.state.isEdit ? '完成' : '编辑'}
          </Button>
        </View>
        <View className="cart-list">
          {this.state.cartList.map((it, index) => {
            return <View className={"cart__item goods"} key={'cart' + index}>
              <View className={`checkbox ${it['checked'] ? 'checked' : ''}`}
                    onClick={() => {
                      this.onCheck(index)
                    }}>
                {it['checked'] && <IconFont name={"duihao"} size={28}/>}
              </View>
              <Image src={it.product_img} className={"goods__cover"}/>
              <View className="cart__content">
                <Text className="block name ellipsis-2">{it.product_name}</Text>
                <Text className="block sku ellipsis-2">{it.product_original}</Text>
                <Text className="block price">￥{it.product_price}</Text>

                {this.state.isEdit ?
                  <Block>
                    <AtInputNumber
                      className={"input-number"}
                      min={1}
                      // max={10}
                      step={1}
                      value={it['num'] || 1}
                      type={"number"}
                      onChange={(event) => {
                        this.onChangeNum(index, event)
                      }}
                    />
                    <Button className={"btn-del"}
                            onClick={() => {
                              this.onDelChecked(index)
                            }}>
                      <IconFont name={"shanchu"} size={30}/>
                    </Button>
                  </Block> : <Text className="input-number">x {it['num'] || 1}</Text>}
              </View>
            </View>
          })}
        </View>

        <View className="container footer">
          <View className="flex__1 flex a__items--center" onClick={this.onCheckAll}>
            {this.state.isAllChecked ?
              <View className={`checkbox inline checked`}>
                <IconFont name={"duihao"} size={28}/>
              </View>
              : <View className={`checkbox inline `}>
              </View>
            }
            <Text className="c--666">全选</Text>
          </View>
          <View>

            {!this.state.isEdit &&
            <Block>
                <Text className="c--333">总计</Text>
                <Text className="c--eb3">￥{this.state.totalPrice}</Text>
            </Block>}

          </View>

          {this.state.isEdit ?
            <Button className="btn" onClick={this.onDelChecked}>删除</Button> :
            <Button className="btn" onClick={this.onSubmit}>结算</Button>}

        </View>
      </View>
    )
  }
}
