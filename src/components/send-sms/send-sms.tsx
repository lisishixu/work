import Taro, {useState} from '@tarojs/taro'
import {View,} from '@tarojs/components'
import './send-sms.scss'
import {AtButton} from "taro-ui";
import {checkPhone} from "../../utils/helper";
import {post} from "../../utils/request";
import api from "../../constants/api";


const SendSMSBtn = (props) => {
  const [countdown, setCountdown] = useState(60);
  const [isDisabled, setIsDisabled] = useState(false);

  // 對倒計時數字进行处理
  const startCountdown = () => {
    setCountdown(prevCountdown => {
      if (prevCountdown <= 1) {
        // setCountdown(60);
        setIsDisabled(false);
        return 60;
      } else {
        setTimeout(() => {
          startCountdown();
        }, 1100);
        return prevCountdown - 1;
      }
    });
  };

  // 点击获取验证码，进行判断
  const onSendCode = () => {
    if (!props.imgCode) {
      Taro.showToast({
        icon: 'none',
        title: '请先输入图形验证码',
        duration: 2000
      });
      return;
    }
    if (!checkPhone(props.userPhone)) {
      Taro.showToast({
        icon: 'none',
        title: '请输入正确的手机号',
        duration: 2000
      });
      return;
    }
    getSMSCode();
  };

  // 获取短信验证码
  const getSMSCode = () => {
    setIsDisabled(true);
    post(api.toTel, props, res => {
      setIsDisabled(false);
      if (res.code == 200) {
        startCountdown();//开始倒计时
      } else {
        Taro.showToast({
          title: res.msg || '网络繁忙',
          icon: 'none'
        })
      }
    })
  };

  return (
    <View className='send-sms'>
      <AtButton size='small'
                type='secondary'
                circle={true}
                className={countdown < 60 ? 'disbtn' : ''}
                disabled={isDisabled || countdown < 60}
                onClick={onSendCode}>
        {countdown >= 60 ? '获取验证码' : `${countdown}s`}
      </AtButton>
    </View>
  )
};

SendSMSBtn.options = {
  addGlobalClass: true
};

export default SendSMSBtn;

