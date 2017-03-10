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
    //日志列表
    pro.log = function(){
        return Datas.log;
    }
    //装扮列表
    pro.decorate = function(){
        return Datas.decorate;
    }
    //仓库果实列表
    pro.fruit = function(){
        return Datas.fruit;
    }
    return new ser;
})(Service)

var goUrl = function(url){
    window.open(url);
}