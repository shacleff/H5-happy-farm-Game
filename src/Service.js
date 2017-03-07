//数据操作模块
var Service = (function(ser){
    ser = ser||function(){};
    var pro = ser.prototype;
    //得到材料数据
    pro.material = function(){
        return Datas.material;
    }
    //用户信息
    pro.userInfo = function(){
        return Datas.userInfo;
    }
    //签到
    pro.signIn = function(){
        return Datas.signIn;
    }
    //得到农场列表
    pro.farmList = function(){
        return Datas.farmList();
    }
    //得到用户资产
    pro.assets = function(){
        return Datas.assets;
    }
    return new ser;
})(Service)

var goUrl = function(url){
    window.open(url);
}