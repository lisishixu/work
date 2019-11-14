Component({
  props: {
    // huangguan | icon | weixin | iconfonterweima | weizhi | fanhui | suo | 13 | iconfontjikediancanicon20 | yaoqinghaoyou | tuijian | dailizizhizizhiqiyezizhi | shanchu | weixin-copy | tupian | xiangji | mingpian1 | haoyou | xuanze1 | kuaisukaidian | fenxiang-1 | QQ | yaoqing | xiajiantou | pengyouquan | morentouxiang | xingji | guanbi | upload | ziyuan1 | xiala | xiaoxi | web-icon- | tubiao- | yinhang-yinlian- | xuanze-duoxuan-tianchong | liebiao | shuaxin | yonghu_shouyi | duihao | kefu | jiahao | shuangsechangyongtubiao- | jiludanzilishijilu | jilu | jiantou_xiangyouliangci_o | guanyu1 | shangjia | shezhi | ren | bianji | xihuan | sanjiaoxing | ziyuan | kehu | tianjiazhaopian | saoyisao | shangpinguanli | sousuo | shaixuan | tongzhi | shipin | huo | weixinzhifu | zhifubao | shoucang | haoyou1 | guanli | shangpinpaixu | dingding | wallet | qiehuan
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
