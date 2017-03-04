//Land（土地）逻辑类
var Land = (function(){
    // params——土地-土地等级-是否有种子
    function Land(land,level,isHasSedd,){
        this.land = land;
        //土地等级-根据土地等级切换土地皮肤
        this.level = level;
        this.isHasSedd = isHasSedd;
        //执行加载土地
        this.loadLand();
        //土地添加点击事件——事件名称-执行域-执行方法;
        this.land.on(Laya.Event.CLICK,this,this.upgradeLand);
    }
    var _proto = Land.prototype;
    //加载土地
    _proto.loadLand = function(){
        this.setLandUI(this.level);
    }
    //设置土地皮肤接口
    _proto.setLandUI = function(level){
        switch(level)
        {
        case 1:
            this.land.skin = "ui/land-1.png";
        break;
        case 2:
            this.land.skin = "ui/land0.png";
        break;
        default:
            this.land.skin = "ui/land-1.png";
        }
    }
    //升级土地
    _proto.upgradeLand = function(){
        console.log(this.level);
        console.log("升级土地");
    }
    return Land;
})()