//用户信息dialog
var UserAlert = (function(_super){
    function UserAlert(){
        UserAlert.super(this);
        this.stageWidth = Laya.stage.width;
        this.stageHeight = Laya.stage.height;
        this.anchorY = 0.5;
        this.anchorX = 0.5;
        this.left = (this.stageWidth-this.width)/2;
        this.top = (this.stageHeight-this.height)/2;
        this.init();
    }
    Laya.class(UserAlert,"UserAlert",_super);
    var _proto = UserAlert.prototype;
    _proto.init = function(){
        new BtnFeed(this.dialogClose);
        this.dialogClose.on(Laya.Event.CLICK,this,this.closeUserAlert);
        this.setUserInfo(Service.userInfo());
    }
    //关闭弹出层
    _proto.closeUserAlert = function(){
        Laya.Tween.to(this,{scaleY:0,scaleX:0},300,Laya.Ease.backIn,null);
        LayaSample.farm.alertLayer.visible = false;
    }
    //用户信息设置
    _proto.setUserInfo = function(userInfo){
        this.userInfo.getChildByName("userPic").skin = userInfo.userImg;
        this.userInfo.getChildByName("userNickName").text = userInfo.nickName;
        this.userInfo.getChildByName("userNickNameT").text = userInfo.nickName;
        this.userInfo.getChildByName("houseLevel").text = "Lv."+userInfo.houseLevel;
        this.userInfo.getChildByName("userTreasure").text = userInfo.treasure;
        this.userInfo.getChildByName("userId").text = userInfo.userId;
    }
    return UserAlert;
})(ui.UserAlertUI);
//小提示
var LittleTip = (function(_super){
    function LittleTip(){
        LittleTip.super(this);
        this.init();
    }
    Laya.class(LittleTip,"LittleTip",_super);
    var _proto = LittleTip.prototype;
    _proto.init = function(){
        this.zOrder = 9999999;
        this.stageWidth = Laya.stage.width;
        this.stageHeight = Laya.stage.height;
        this.anchorY = 0.5;
        this.anchorX = 0.5;
        this.left = (this.stageWidth-this.width)/2;
        this.top = (this.stageHeight-this.height)/2.5;
        this.scaleY = 0;
        this.alpha = 0;
    }
    _proto.showThis = function(msg){
        this.con.text = msg;
        Laya.Tween.to(this,{scaleY:1,alpha:1},500,Laya.Ease.backOut,Laya.Handler.create(this,this.hideThis));
    }
    _proto.hideThis = function(){
        Laya.timer.once(800,this,this.hideHandler);
    }
    _proto.hideHandler = function(){
        Laya.Tween.to(this,{scaleY:0,alpha:0},500,Laya.Ease.backOut,null);
    }
    return LittleTip;
})(ui.LittleTipUI)
//充值弹窗
var Recharge = (function(_super){
    var alertLayer;//充值弹窗界面遮罩层的引用
    var that;//当前界面的引用
    function Recharge(){
        Recharge.super(this);
        that = this;
        alertLayer = this.alertLayer;
        this.init();
    }
    Laya.class(Recharge,"Recharge",_super);
    var _proto = Recharge.prototype;
    _proto.init = function(){
        this.setStyle();
        new BtnFeed(this.rechargeBtn);
        new BtnFeed(this.closeBtn);
        this.getAccoutBalance();//得到账户余额
        this.closeBtn.on(Laya.Event.CLICK,this,this.hideThis);
        this.rechargeBtn.on(Laya.Event.CLICK,this,this.goUrl,["https://www.baidu.com"]);//充值跳转
        this.littleJewel.on(Laya.Event.CLICK,this,this.addJewelTip,[2000]);//充值两千钻
        this.normalJewel.on(Laya.Event.CLICK,this,this.addJewelTip,[20000]);//充值两万钻
        this.bigJewel.on(Laya.Event.CLICK,this,this.addJewelTip,[200000]);//充值20w钻
    }
    _proto.setStyle = function(){
        this.stageWidth = Laya.stage.width;
        this.stageHeight = Laya.stage.height;
        this.anchorY = 0.5;
        this.anchorX = 0.5;
        this.left = (this.stageWidth-this.width)/2;
        this.top = (this.stageHeight-this.height)/2;
        this.scaleY = 0;
        this.scaleX = 0;
    }
    //显示自己
    _proto.showThis = function(){
        LayaSample.farm.alertLayer.visible = true;
        Laya.Tween.to(this,{scaleY:1,scaleX:1},300,Laya.Ease.backIn);
    }
    //隐藏自己
    _proto.hideThis = function(){
         Laya.Tween.to(this,{scaleY:0,scaleX:0},300,Laya.Ease.backIn);
         if(this.recTip){
            this.recTip.closeThis();//关闭提示框
         }
         LayaSample.farm.alertLayer.visible = false;
    }
    //得到账户余额
    _proto.getAccoutBalance = function(){
        var balance = Service.assets().accountBalance;
        this.accountBalance.text = balance;
    }
    //充值跳转
    _proto.goUrl = function(url){
        window.open(url);
    }
    //充值钻石提示框
    _proto.addJewelTip = function(num){
        this.recTip = new TipDialog("确定充值"+num+"钻石吗？","钻石只能在游戏内使用",this.addJewelFn,this.showLayer);
        this.alertLayer.visible = true;//显示遮罩层
        LayaSample.farm.addChild(this.recTip);
        this.recTip.showThis();
    }
    //充值钻石方法
    _proto.addJewelFn = function(){
        var assets = Service.assets();
        alertLayer.visible = false;//显示遮罩层
        LayaSample.farm.addChild(LayaSample.littleTip);
        LayaSample.littleTip.showThis("钻石数量不足");
        LayaSample.farm.alertLayer.visible = true;
    }
    //点击充值提示按钮不关闭大的遮罩层
    _proto.showLayer = function(){
        LayaSample.farm.alertLayer.visible = true;
    }
    return Recharge;
})(ui.RechargeUI)