export default {
  accessToken: '',
  iggId: 0,
  isLogin: false,
  deviceId: '',
  type: '',
  key: '',
  game: 'DEMO',
  linkageState: {},   // 各平台绑定信息

  set: function(key, val, writeLS){
    this[key] = val;
    if (writeLS){
      window.localStorage.setItem(key, val);
    }
  },

  // 获取/生成设备ID
  getDeviceId: function(){
    var deviceId = window.localStorage.getItem('device_id');
    if (!deviceId){
      // 生成设备ID
      deviceId = "DEMO-" + this._randomStr(16);
      window.localStorage.setItem('device_id', deviceId);
    }
    return deviceId;
  },

  // 通行证初始化
  init: function(){
    var ls = window.localStorage;
    this.deviceId = this.getDeviceId();
    if (ls.getItem('isLogin')){
      // 已经登录
      this.set('accessToken', ls.getItem('accessToken'), false);
      this.set('iggId', ls.getItem('iggId'), false);
      this.set('isLogin', true, false);
      this.set('type', ls.getItem('type'), false);
      this.set('key', ls.getItem('key'), false);
      this.set('game', ls.getItem('game'), false);
    }else{
      // 做设备登录
      this.guestLogin();
    }
  },

  // 做设备码登录
  guestLogin: function(){
    this.set('accessToken', 'xxx');
    this.set('iggId', 12345);
    this.isLogin = true;
  },

  // 生成随机字符串
  _randomStr: function(len){
    var i;
    len = len || 32;
    var $chars = 'abcdefhijkmnprstwxyz2345678';
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
  }
};