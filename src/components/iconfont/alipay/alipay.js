Component({
  props: {
    // lingdang | more | iconset0254 | dianzan | 3 | houtui | sousuo | xiazai19 | zhijiao-triangle | jiaochacross80 | toubaoxuzhi | dingdan | shangcheng | shu | shu1 | shoucang1 | qizhi | shouye | close_icon | selected | set | dianpu | unselected | tubiaoshangshengqushi | douzi | gwc | xingxing | dizhi | baobeifuli | px_daoxu | tubiaozhizuomoban | youjiantou | kechengbushi | xiaoxi | paixu | lipin | dianpushouye | shengxu | shijian | qiehuan | jiahao | jifenduihuan | bianji | dianpu_fenlei | kuaidiche-X | wode | laba | dizhi1 | shanchu-copy-copy | shiwuzhongxin_tushuguan | weixinzhifu | hongbao | changyongicon- | jiangxu | gouwuche | bianji1 | shoucang
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
