//商店
var Shop = (function(_super){
    function Shop(){
        Shop.super(this);
        this.init();
    }
    Laya.class(Shop,"Shop",_super);
    var _proto = Shop.prototype;
    _proto.init = function(){
        this.setStyle();
        this.closeBtn.on(Laya.Event.CLICK,this,this.closeThis);
        this.seedsBox.getChildByName("seedListItem_0").getChildByName("buyBtn").on(Laya.Event.CLICK,this,this.buySeeds,[50]);
        this.seedsBox.getChildByName("seedListItem_1").getChildByName("buyBtn").on(Laya.Event.CLICK,this,this.buySeeds,[150]);
        this.seedsBox.getChildByName("seedListItem_2").getChildByName("buyBtn").on(Laya.Event.CLICK,this,this.buySeeds,[250]);
    }
    //位置设置-垂直居中
    _proto.setStyle = function(){
        this.stageWidth = Laya.stage.width;
        this.stageHeight = Laya.stage.height;
        this.anchorY = 0.5;
        this.anchorX = 0.5;
        this.scaleX = 0;
        this.scaleY = 0;
        this.left = (this.stageWidth-this.width)/2;
        this.top = (this.stageHeight-this.height)/2;
        new BtnFeed(this.closeBtn);
        new BtnFeed(this.seedsBox.getChildByName("seedListItem_0").getChildByName("buyBtn"));
        new BtnFeed(this.seedsBox.getChildByName("seedListItem_1").getChildByName("buyBtn"));
        new BtnFeed(this.seedsBox.getChildByName("seedListItem_2").getChildByName("buyBtn"));
    }
    //关闭自己
    _proto.closeThis = function(){
        Laya.Tween.to(this,{scaleY:0,scaleX:0},300,Laya.Ease.backIn,null);
        LayaSample.farm.alertLayer.visible = false;
    }
    //购买钻石
    _proto.buySeeds = function(num){
        var jewel = Service.assets().jewel;//钻石数量
        if(jewel<num){
            this.addChild(LayaSample.littleTip);
            LayaSample.littleTip.showThis("钻石数量不足");
        }else{
            this.addChild(LayaSample.littleTip);
            LayaSample.littleTip.showThis("购买成功");
        }
    }
    return Shop;
})(ui.ShopUI)