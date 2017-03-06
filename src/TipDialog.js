//提示弹出框
var TipDialog = (function(_super){
    function TipDialog(_tipTitle,_tipCon,callBack){
        TipDialog.super(this);
        this.stageWidth = Laya.stage.width;
        this.stageHeight = Laya.stage.height;
        this.anchorY = 0.5;
        this.anchorX = 0.5;
        this.scaleX = 0;
        this.scaleY = 0;
        this.left = (this.stageWidth-this.width)/2;
        this.top = (this.stageHeight-this.height)/2;
        this._tipTitle = _tipTitle;//标题
        this._tipCon = _tipCon;//内容
        this.callBack = callBack;//回调
        this.init();
    }
    Laya.class(TipDialog,"TipDialog",_super);
    var _proto = TipDialog.prototype;
    _proto.init = function(){
        new BtnFeed(this.confirmBtn);
        new BtnFeed(this.cancelBtn);
        this.tipTitle.text = this._tipTitle;//设置标题
        this.tipCon.text = this._tipCon;//设置内容
        this.confirmBtn.on(Laya.Event.CLICK,this,this.toUI);
        this.cancelBtn.on(Laya.Event.CLICK,this,this.closeThis);
    }
    //界面跳转
    _proto.toUI = function(){
        this.closeThis();
        this.callBack();
    }
    //关闭弹窗
    _proto.closeThis = function(){
        Laya.Tween.to(this,{scaleY:0,scaleX:0},300,Laya.Ease.backIn,null);
        LayaSample.farm.alertLayer.visible = false;
    }
    return TipDialog;
})(ui.TipDialogUI)