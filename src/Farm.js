//Farm类继承ui界面的FarmUI;
var Farm = (function(_super){
    function Farm(){
        //反馈按钮列表
        this.feedBtn = [];
        //存放土地的数组
        this.lands = new Array;
        this.seeds = new Array;
        //土地数量
        this.landNum = 12;
        Farm.super(this);
        this.getFriendList();
        //土地、种子、神像数据 
        this.landInfo = Datas.landInfo;
        this.seedInfo = Datas.seedInfo;
        this.statueInfo = Datas.statueInfo;
        //好友列表
        //显示弹窗
        this.friendBtn.on(Laya.Event.CLICK,this,this.showFriendList);
        // 列表点击事件进入好友农场
        this.m_list.selectEnable = true;
        this.m_list.scrollBar.hide = true;//隐藏列表的滚动条。
        this.m_list.scrollBar.elasticBackTime = 200;//设置橡皮筋回弹时间。单位为毫秒。
        this.m_list.scrollBar.elasticDistance = 50;//设置橡皮筋极限距离。
        this.m_list.selectHandler = new laya.utils.Handler(this, this.onSelect);//设置 list 改变选择项执行的处理器。
        this.init();
    }
    //注册Farm类
    Laya.class(Farm,"Farm",_super);
    //定义变量接收Farm类原型
    var _proto = Farm.prototype;
    _proto.init = function(){
        //添加排行榜
        this.addChild(new RankList());
        this.onLoadHeader();//加载头部
        this.onLoadSeed();//加载种子 
        this.onLoadLand();//加载土地
        this.onLoadStatue();//加载神像
        this.getFeedBtn();
        new MyHome(this.myHome,this.famlilyMune,false,0,-100);//我的家园
        new MyOrchard(this.myOrchard,this.orchardMenu,false,-2,100);//我的果园
        new SignIn(this.signIn,Service.userInfo().isSingIn,this.signInAlert,this.signInAlert.getChildByName("signInAward"));//签到
        this.addUserInfo();
        this.addRankList();
    }
    //用户信息-点击头部图片弹出
    _proto.addUserInfo = function(){
        if(!LayaSample.userAlert){
            LayaSample.userAlert = new UserAlert();
        }
        this.addChild(LayaSample.userAlert);
    }
    //排行榜
    _proto.addRankList = function(){
        if(!LayaSample.rankList){
            LayaSample.rankList = new RankList();
        }
        this.addChild(LayaSample.rankList);
    }
    //初始化头部
    _proto.onLoadHeader = function(){
        new Header(this.header,this.header.getChildByName("toggleMenu"),this.header.getChildByName("headerImg"),this.header.getChildByName("nickName"),
        this.header.getChildByName("woodValue"),this.header.getChildByName("stoneValue"),this.header.getChildByName("cementValue"),
        this.header.getChildByName("jewelValue"),this.header.getChildByName("toggleMenu").getChildByName("log"),
        this.header.getChildByName("toggleMenu").getChildByName("rank"),this.header.getChildByName("toggleMenu").getChildByName("recharge"),
        this.header.getChildByName("headerToggle"),true,6,this.header.getChildByName("toggleMenu").y);
    }
    //初始化土地
    _proto.onLoadLand = function(){
        //循环数组
        for(var i = 0;i<this.landNum;i++){
            this.land = new Land(
                this.getChildByName("item"+i).getChildByName("land"),
                this.landInfo[i].landLv,
                this.landInfo[i].ishasSeed,
                false,
                this.getChildByName("item"+i).getChildByName("toolBox"),
                this.getChildByName("item"+i).getChildByName("toolBox").y,
                this.seeds[i]
            );
            this.lands.push(this.land);
        }
    }
    //初始化种子
    _proto.onLoadSeed = function(){
        // this.seeds = [];
        for(var i = 0;i<12;i++){
            var seedTemp = this.getChildByName("item"+i).getChildByName('seed'+i);
            this.seed = new Seed(seedTemp,this.seedInfo[i].seedType,this.seedInfo[i].seedLevel,1,1,1,1);
            this.seeds.push(this.seed);
        }
        this.seeds[0].type = 1;
        this.seeds[0].level = 1;
        this.seeds[0].loadSeed();
    }
    //初始化
    _proto.onLoadStatue = function(){
        this.statues = [];
        for(var i = 0;i<4;i++){
            this.statueItem = new Statue(this.statue.getChildByName("statue_"+(i+1)),this.statueInfo[i].isActive,this.statueInfo[i].experience,
            this.statueDespBox.getChildByName("status"+(i+1)+"Desp"),i);
            console.log(i)
            this.statues.push(this.statueItem);
        }
    }
    _proto.onSelect = function(index,array){
        console.log("当前选择的项目索引： index= ", index);
        console.log(this.data[index]);
        //检查是否有实例化的好友农场如果没有将实例化的好友农场赋给全局对象的friendsFarm属性
        if(!LayaSample.friendsFarm){
            LayaSample.friendsFarm = new FriendsFarm(this.data[index]);
        }
        //移除当前农场UI
        this.removeSelf();
        //添加好友农场到舞台
        Laya.stage.addChild(LayaSample.friendsFarm);
    }
    //得到好友列表
    _proto.getFriendList = function(){
        this.data = [];
        for(var m =0;m<20;m++){
            this.data.push({m_label:"No."+m,"id":m});
        }
        //参数创建
        this.alertBox = this.friendListBox;//弹出窗口
        this.alertTitle = this.alertBox.getChildByName("listTitle");//弹出窗口标题
        this.alertCloseBtn = this.alertBox.getChildByName("closeThis");//弹出窗口关闭按钮
        this.friendArrayList = this.data;//列表数据
        this.alertListBox = this.alertBox.getChildByName("itemList");//列表对象
        this.openDialog = this.friendBtn;//打开弹窗按钮
        this.alertBoxItem = new FriendList(this.alertBox,this.alertTitle,"我的好友",this.alertCloseBtn,this.friendArrayList,this.alertListBox,this.openDialog);
    }
    //按钮反馈
    _proto.getFeedBtn = function(){
        this.feedBtn = [
            this.myHome,//我的家园
            this.famlilyMune.getChildByName("shop"),//我的家园-商店
            this.famlilyMune.getChildByName("entrepot"),//仓库
            this.famlilyMune.getChildByName("exchange"),//兑换中心
            this.famlilyMune.getChildByName("decorate"),//装饰
            this.myOrchard,//我的果园吧
            this.orchardMenu.getChildByName("announce"),//公告
            this.orchardMenu.getChildByName("strategy"),//攻略
            this.orchardMenu.getChildByName("usercenter"),//用户中心
            this.orchardMenu.getChildByName("market"),//行情
            this.header.getChildByName("headerToggle"),//下拉菜单按钮
            this.header.getChildByName("toggleMenu").getChildByName("log"),//日志
            this.header.getChildByName("toggleMenu").getChildByName("rank"),//排名
            this.header.getChildByName("toggleMenu").getChildByName("recharge")//充值
        ]
        new FarmBtn(this.feedBtn);
    }
    return Farm;
})(ui.FarmUI)