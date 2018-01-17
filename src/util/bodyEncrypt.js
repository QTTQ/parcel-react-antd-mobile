import CryptoJS from 'crypto-js';

export default function bodyEncrypt(postDic) {

  var d = new Date();
  var md5String = '';
  postDic["timestamp"] = (d.getTime() - d.getTime() % 1000) / 1000;
  var postDicKey = Object.keys(postDic).sort();
  for (var key in postDicKey) {
    if (typeof postDic[postDicKey[key]] == 'object') {
      item = JSON.stringify(postDic[postDicKey[key]]);
    } else {
      item = postDic[postDicKey[key]];
    }
    md5String += postDicKey[key];
    md5String += item;
  }

  md5String += 'ddz2017yundianapp';

  var sign = CryptoJS.MD5(md5String);

  postDic["sign"] = sign + '';

  var postData = '';
  var i = 0;
  for (var key in postDic) {
    let item = '';
    if (typeof postDic[key] == 'object') {
      item = JSON.stringify(postDic[key]);
    } else {
      item = postDic[key];
    }
    if (i === 0) {
      postData = postData + key + '=' + item;
    } else {
      postData = postData + '&' + key + '=' + item;
    }
    i++;
  }

  return postData;

}
