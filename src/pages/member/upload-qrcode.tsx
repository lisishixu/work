import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Button, Image} from '@tarojs/components'
import './upload-qrcode.scss'
import IconFont from "../../components/iconfont";

export interface Props {

}

export interface State {
  qrcodeUrl: string
}

export default class UploadQrcode extends Component<Props, State> {

  config: Config = {
    navigationBarTitleText: '会员名片'
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      qrcodeUrl: ''
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

  // 选择图片
  onChooseImg = () => {
    Taro.chooseImage({
      count: 1
    }).then(res => {
      const qrcodeUrl = res.tempFilePaths[0];
      this.setState({qrcodeUrl});
    })
  };

  // 确定上传
  onConfrim = () => {
    if (!this.state.qrcodeUrl) {
      Taro.showToast({
        icon: 'none',
        title: '请先上传二维码',
      });
      return;
    }
  };

  render() {
    return (
      <View className='upload-qrcode'>

        {this.state.qrcodeUrl ?
          <Button className="btn qrcode" onClick={this.onChooseImg}>
            <Image className={"qrcode__img"} src={this.state.qrcodeUrl}/>
          </Button> :
          <Button className="btn qrcode" onClick={this.onChooseImg}>
            <View className="iconfont">
              <IconFont name={"jiahao"} color={'#888'} size={80}/>
            </View>
            <Text className="f__size--24 c--666">上传二维码名片，添加微信好友</Text>
          </Button>}

        <Button className={"btn btn-confrim"} onClick={this.onConfrim}>上传二维码</Button>

      </View>
    )
  }
}
