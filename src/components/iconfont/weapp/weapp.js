Component({
  properties: {
    // icon | weixin | iconfonterweima | weizhi | fanhui | 13 | iconfontjikediancanicon20 | yaoqinghaoyou | tuijian | dailizizhizizhiqiyezizhi | shanchu | weixin-copy | tupian | xiangji | mingpian1 | haoyou | xuanze1 | kuaisukaidian | fenxiang-1 | QQ | yaoqing | pengyouquan | morentouxiang | xingji | guanbi | upload | ziyuan1 | xiala | xiaoxi | web-icon- | tubiao- | xuanze-duoxuan-tianchong | yonghu_shouyi | duihao | kefu | shuangsechangyongtubiao- | jiludanzilishijilu | jilu | jiantou_xiangyouliangci_o | guanyu1 | shangjia | shezhi | ren | xihuan | ziyuan | kehu | tianjiazhaopian | saoyisao | sousuo | tongzhi | huo | weixinzhifu | zhifubao | shoucang | haoyou1 | dingding | wallet | qiehuan
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      observer: function(color) {
        this.setData({
          colors: this.fixColor(),
          isStr: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 18,
      observer: function(size) {
        this.setData({
          svgSize: size / 750 * wx.getSystemInfoSync().windowWidth,
        });
      },
    },
  },
  data: {
    colors: '',
    svgSize: 18 / 750 * wx.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true,
  },
  methods: {
    fixColor: function() {
      var color = this.data.color;
      var hex2rgb = this.hex2rgb;

      if (typeof color === 'string') {
        return color.indexOf('#') === 0 ? hex2rgb(color) : color;
      }

      return color.map(function (item) {
        return item.indexOf('#') === 0 ? hex2rgb(item) : item;
      });
    },
    hex2rgb: function(hex) {
      var rgb = [];

      hex = hex.substr(1);

      if (hex.length === 3) {
        hex = hex.replace(/(.)/g, '$1$1');
      }

      hex.replace(/../g, function(color) {
        rgb.push(parseInt(color, 0x10));
        return color;
      });

      return 'rgb(' + rgb.join(',') + ')';
    }
  }
});
