Component({
  props: {
    // icon | weixin | iconfonterweima | weizhi | fanhui | 13 | iconfontjikediancanicon20 | yaoqinghaoyou | tuijian | dailizizhizizhiqiyezizhi | shanchu | weixin-copy | tupian | xiangji | mingpian1 | haoyou | xuanze1 | kuaisukaidian | fenxiang-1 | QQ | yaoqing | pengyouquan | morentouxiang | xingji | guanbi | upload | ziyuan1 | xiala | xiaoxi | web-icon- | tubiao- | xuanze-duoxuan-tianchong | yonghu_shouyi | duihao | kefu | shuangsechangyongtubiao- | jiludanzilishijilu | jilu | jiantou_xiangyouliangci_o | guanyu1 | shangjia | shezhi | ren | xihuan | ziyuan | kehu | tianjiazhaopian | saoyisao | sousuo | tongzhi | huo | weixinzhifu | zhifubao | shoucang | haoyou1 | dingding | wallet | qiehuan
    name: null,
    // string | string[]
    color: '',
    size: 18,
  },
  data: {
    quot: '"',
    svgSize: 18,
    isStr: true,
  },
  didMount() {
    const size = this.props.size;
    const color = this.props.color;

    this.setData({
      isStr: typeof color === 'string',
    });

    if (size !== this.data.svgSize) {
      this.setData({
        svgSize: size / 750 * my.getSystemInfoSync().windowWidth,
      });
    }
  },
  disUpdate(prevProps) {
    const size = this.props.size;
    const color = this.props.color;

    if (color !== prevProps.color) {
      this.setData({
        isStr: typeof color === 'string',
      });
    }

    if (size !== prevProps.size) {
      this.setData({
        svgSize: size / 750 * my.getSystemInfoSync().windowWidth,
      });
    }
  },
});
