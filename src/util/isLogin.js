var DeviceInfo = require('react-native-device-info');
import bodyEncrypt from './bodyEncrypt';

export default function isLogin() {
  let body = bodyEncrypt({shop_id: userInfo.shop_id});
  return new Promise((resolve, reject) => {
    fetch('http://fuhua.n51888.com/fuHua/getDeviceId',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body,
    })
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      resolve(jsonData);
    })
    .catch((error) => {
      alert('服务器错误');
      console.warn(error);
      reject(error);
    });
  })
}
