var Header = (function(){
    //params——头部-下拉菜单-头像-木材-石头-水泥板-钻石-日志-排行-充值-toggle按钮-下拉菜单状态-菜单隐藏是的y值-菜单显示状态下的y值
    function Header(header,toggleMenu,headerImg,nickName,woodValue,stoneValue,cementValue,jewelValue,log,rank,recharge,headerToggle,menuState,topMenu,noramalTop){
        this.header = header;//头部
        this.toggleMenu = toggleMenu;//下拉菜单
        this.headerImg = headerImg;//头像
        this.nickName = nickName;//用户昵称
        this.woodValue = woodValue;//木材
        this.stoneValue = stoneValue;//石头
        this.cementValue = cementValue;//水泥板
        this.jewelValue = jewelValue;//钻石
        this.log = log;//日志
        this.rank = rank;//排行
        this.recharge = recharge;//充值
        this.headerToggle = headerToggle;//toggle按钮
        this.menuState = menuState;//下拉菜单状态
        this.topMenu = topMenu;//6菜单隐藏是的y值
        this.noramalTop = noramalTop;//菜单显示状态下的y值
        //初始化
        this.onLoad();
    };
    var _proto = Header.prototype;
    _proto.onLoad = function(){
        this.headerToggle.on(Laya.Event.CLICK,this,this.menuToggle);
        this.loadHeaderDatas(Service.material(),Service.userInfo());
        this.headerImg.on(Laya.Event.CLICK,this,this.showUserInfoDia);
        this.rank.on(Laya.Event.CLICK,this,this.showRankList);
    };
    //显示用户信息弹出层】
    _proto.showUserInfoDia = function(){
        if(!LayaSample.userAlert){
            LayaSample.userAlert = new UserAlert();
        }
        LayaSample.farm.alertLayer.visible = true;
        Laya.Tween.to(LayaSample.userAlert,{scaleY:1,scaleX:1},300,Laya.Ease.backIn,null);
    }
    //显示排行榜列表
    _proto.showRankList = function(){
        LayaSample.farm.alertLayer.visible = true;
        Laya.Tween.to(LayaSample.rankList,{scaleY:1,scaleX:1},300,Laya.Ease.backIn,null);
    }
    //下拉菜单效果
    _proto.menuToggle = function(){
        if(this.menuState){
            this.headerToggle.skin = "ui/header_pulldown.png";
            Laya.Tween.to(this.toggleMenu,{y:this.topMenu},300,Laya.Ease.backOut,null);
        }else{  
            this.headerToggle.skin = "ui/header_pullup.png";
            Laya.Tween.to(this.toggleMenu,{y:this.noramalTop},300,Laya.Ease.backOut,null);
        }
        this.menuState = !this.menuState;
    };
    //头部数据显示
    _proto.loadHeaderDatas = function(material,userInfo){
        this.woodValue.text = material.wood.amount;
        this.stoneValue.text = material.stone.amount;
        this.cementValue.text = material.cement.amount;
        this.woodValue.text = material.jewel.amount;
        this.nickName.text = userInfo.nickName+"的家园";
        this.headerImg.skin = userInfo.userImg;
    } 
    return Header;
})()