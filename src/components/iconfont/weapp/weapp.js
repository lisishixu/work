Component({
  properties: {
    // lingdang | more | iconset0254 | dianzan | 3 | houtui | sousuo | xiazai19 | zhijiao-triangle | jiaochacross80 | toubaoxuzhi | dingdan | shangcheng | shu | shu1 | shoucang1 | qizhi | shouye | close_icon | selected | set | dianpu | unselected | tubiaoshangshengqushi | douzi | gwc | xingxing | dizhi | baobeifuli | px_daoxu | tubiaozhizuomoban | youjiantou | kechengbushi | xiaoxi | paixu | lipin | dianpushouye | shengxu | shijian | qiehuan | jiahao | jifenduihuan | bianji | dianpu_fenlei | kuaidiche-X | wode | laba | dizhi1 | shanchu-copy-copy | shiwuzhongxin_tushuguan | weixinzhifu | hongbao | changyongicon- | jiangxu | gouwuche | bianji1 | shoucang
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
