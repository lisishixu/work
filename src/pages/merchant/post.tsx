import Taro, {Component, Config} from '@tarojs/taro'
import {Image, View, Button, Text, Block} from '@tarojs/components'
import './post.scss'
import {AtInput} from "taro-ui";
import IconFont from "../../components/iconfont";
import FixedButton from "../../components/fixed-button/fixed-button";

export interface Props {

}

export interface State {
  type: string,//goods上传商品，activity发布活动
  title: string,//标题
  img: string,
  price: string | number,//促销价、活动价、现价
  oldPrice: string | number,//原价、划线价
  goodsInventory: string | number,//商品库存
  activityTime: string | number,//活动时间
  detail: string,//详情
}

export default class PostInfo extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: ""
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      type: 'goods',
      title: '',//标题
      img: '',
      price: '',//促销价、活动价、现价
      oldPrice: '',//原价、划线价
      goodsInventory: '',//商品库存
      activityTime: '',//活动时间
      detail: '',//详情
    }
  }

  componentWillMount() {
    const type = this.$router.params.type || 'goods';//判断是我的还是Ta的
    this.setState({type});
    Taro.setNavigationBarTitle({
      title: type === 'goods' ? '上传商品' : '发布活动'
    }).then()
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  // 上传封面图
  onUpload = () => {
    Taro.chooseImage({
      count: 1,
    }).then(res => {
      const tempFilePaths = res.tempFilePaths;
      this.setState({img: tempFilePaths[0]})
    })
  };

  //上传详情页图
  onUploadDetail = () => {
    Taro.chooseImage({
      count: 1,
    }).then(res => {
      const tempFilePaths = res.tempFilePaths;
      this.setState({detail: tempFilePaths[0]})
    })
  };

  // 文本框输入
  handleChange = (name = '', value) => {
    // @ts-ignore
    this.setState({
      [name]: value
    });
    // 2019-11-14摘自taro-ui官网：在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  };

  // 确认按钮
  onConfrim = () => {
    const {title, img, price, oldPrice, detail} = this.state;
    if (!title || !img || !price || !oldPrice || !detail) {
      Taro.showToast({
        icon: 'none',
        title: '请把信息填写完整'
      });
      return;
    }
    Taro.showToast({
      title: '触发操作'
    })
  };

  render() {
    return (
      <View className='post'>

        <Button className="upload-img" onClick={this.onUpload}>
          {this.state.img ?
            <Image src={this.state.img} className="img" mode={"widthFix"}/> :
            <Block>
              <View className="default-icon">
                <IconFont name={"tupian"} color={'white'} size={80}/>
              </View>
              <Text className="f__size--30 c--666">
                {this.state.type === 'goods' ? '添加商品图片' : '添加活动商品图片'}
              </Text>
            </Block>
          }
        </Button>

        <View className="container margin-top--20">
          <AtInput
            name='title'
            title='标题'
            placeholder='请填写商品标题'
            value={this.state.title}
            onChange={value => {
              this.handleChange('title', value)
            }}
          />
        </View>

        <View className="container margin-top--10">
          <AtInput
            name='price'
            title='促销价'
            type={"number"}
            placeholder={this.state.type === 'goods' ? '请填写商品促销价格' : '请填写商品活动价格'}
            value={this.state.price}
            onChange={value => {
              this.handleChange('price', value)
            }}
          >元</AtInput>
          <AtInput
            name='oldPrice'
            title='原价'
            type={"number"}
            placeholder='请填写商品原价'
            value={this.state.oldPrice}
            onChange={value => {
              this.handleChange('oldPrice', value)
            }}
          >元</AtInput>


          {this.state.type === 'goods' ?
            <AtInput
              name='goodsInventory'
              title='热卖'
              type={"number"}
              placeholder='请填写商品库存'
              value={this.state.goodsInventory}
              onChange={value => {
                this.handleChange('goodsInventory', value)
              }}
            >件</AtInput> :
            <AtInput
              name='goodsInventory'
              title='活动时间'
              // type={"number"}
              placeholder='请填写活动时间'
              value={this.state.activityTime}
              onChange={value => {
                this.handleChange('activityTime', value)
              }}/>}


        </View>


        <View className="container margin-top--10 " style={{paddingBottom: '10px'}}>
          <View className="small-title f__size--28">
            {this.state.type === 'goods' ? '商品详情' : '活动详情'}
          </View>
          <Button className="detail" onClick={this.onUploadDetail}>
            {this.state.detail ?
              <Image src={this.state.detail} className="img" mode={"widthFix"}/> :
              <Block>
                <View className="default-icon">
                  <IconFont name={"tupian"} color={'#ccc'} size={100}/>
                </View>
                <Text className="f__size--30 c--666">
                  {this.state.type === 'goods' ? '添加商品详情' : '添加活动详情'}
                </Text>
              </Block>
            }
          </Button>
        </View>

        <FixedButton text={this.state.type === 'goods' ? '上传商品' : '上传活动'} onClick={this.onConfrim}/>

      </View>
    )
  }
}
