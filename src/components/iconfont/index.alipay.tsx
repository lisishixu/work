/* tslint:disable */
/* eslint-disable */

import Taro, { FunctionComponent } from '@tarojs/taro';

interface Props {
  name: 'huangguan' | 'icon' | 'weixin' | 'iconfonterweima' | 'weizhi' | 'fanhui' | 'suo' | '13' | 'iconfontjikediancanicon20' | 'yaoqinghaoyou' | 'tuijian' | 'dailizizhizizhiqiyezizhi' | 'shanchu' | 'weixin-copy' | 'tupian' | 'xiangji' | 'mingpian1' | 'haoyou' | 'xuanze1' | 'kuaisukaidian' | 'fenxiang-1' | 'QQ' | 'yaoqing' | 'pengyouquan' | 'morentouxiang' | 'xingji' | 'guanbi' | 'upload' | 'ziyuan1' | 'xiala' | 'xiaoxi' | 'web-icon-' | 'tubiao-' | 'yinhang-yinlian-' | 'xuanze-duoxuan-tianchong' | 'yonghu_shouyi' | 'duihao' | 'kefu' | 'jiahao' | 'shuangsechangyongtubiao-' | 'jiludanzilishijilu' | 'jilu' | 'jiantou_xiangyouliangci_o' | 'guanyu1' | 'shangjia' | 'shezhi' | 'ren' | 'bianji' | 'xihuan' | 'ziyuan' | 'kehu' | 'tianjiazhaopian' | 'saoyisao' | 'shangpinguanli' | 'sousuo' | 'tongzhi' | 'shipin' | 'huo' | 'weixinzhifu' | 'zhifubao' | 'shoucang' | 'haoyou1' | 'dingding' | 'wallet' | 'qiehuan';
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = (props) => {
  const { name, size, color } = props;

  // @ts-ignore
  return <iconfont name={name} size={parseFloat(Taro.pxTransform(size))} color={color} />;
};

IconFont.defaultProps = {
  size: 18,
};

IconFont.config = {
  usingComponents: {
    iconfont: './alipay/alipay',
  },
};

export default IconFont;
