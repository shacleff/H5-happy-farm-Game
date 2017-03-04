//签到
var SignIn = (function(){
    function SignIn(signIn,isCheck,signInAlert,signInAward){
        this.signIn = signIn;//签到日历
        this.isCheck = isCheck;//是否签到
        this.signInAlert = signInAlert;//签到弹出框
        this.signInAward = signInAward;//签到奖励
        this.init();
        this.signIn.on(Laya.Event.CLICK,this,this.checkIn);
    }
    var _proto = SignIn.prototype;
    _proto.init = function(){
        this.signIn.visible = this.isCheck?false:true;
    }
    _proto.checkIn = function(){
        this.signIn.visible = false;
        this.award = Service.signIn().award;
        this.signInAward.text = "获得"+this.award;
        Laya.Tween.to(this.signInAlert,{visible:true,alpha:1,scaleX:1,scaleY:1},300,Laya.Ease.backOut,Laya.Handler.create(this,this.callBackHd));
    }
    _proto.callBackHd = function(){
        Laya.timer.once(400,this,this.hideAni);
    }
    _proto.hideAni = function(){
        Laya.Tween.to(this.signInAlert,{alpha:0,scaleX:0,scaleY:0,visible:false},300,Laya.Ease.backOut,null);
    }
    return SignIn;
})()