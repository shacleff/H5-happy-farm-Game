//模拟数据集合
    
var Datas = (function(datas){
    datas = datas||{};
    //土地信息
    datas.landInfo = [
            {   
                landId:1,//土地id
                ishasSeed:0,//是否有种子
                landLv:2,//土地等级
                seedType:0,//种子类型
                seedLevel:0,//种子等级
                
            },
            {
                landId:2,
                ishasSeed:0,
                landLv:1,
                seedType:0,
                seedLevel:0,
                
            },
            {
                landId:3,
                ishasSeed:0,
                landLv:1,
                seedType:0,
                seedLevel:0,
                
            },
            {
                landId:4,
                ishasSeed:0,
                landLv:1,
                seedType:0,
                seedLevel:0,
                
            },
            {
                landId:5,
                ishasSeed:0,
                landLv:1,
                seedType:0,
                seedLevel:0,
                
            },
            {
                landId:6,
                ishasSeed:0,
                landLv:1,
                seedType:0,
                seedLevel:0,
                
            },
            {
                landId:7,
                ishasSeed:0,
                landLv:1,
                seedType:0,
                seedLevel:0,
                
            },
            {
                landId:8,
                ishasSeed:0,
                landLv:1,
                seedType:0,
                seedLevel:0,
                
            },
            {
                landId:9,
                ishasSeed:0,
                landLv:1,
                seedType:0,
                seedLevel:0,
                
            },
            {
                landId:10,
                ishasSeed:0,
                landLv:1,
                seedType:0,
                seedLevel:0,
                
            },
            {
                landId:11,
                ishasSeed:0,
                landLv:1,
                seedType:0,
                seedLevel:0,
                
            },
            {
                landId:12,
                ishasSeed:0,
                landLv:1,
                seedType:0,
                seedLevel:0,
                
            }
        ];
        //种子信息
        datas.seedInfo = [
            {
                seedType:null,//种子类型
                seedLevel:null//种子等级
            },
            {
                seedType:null,
                seedLevel:null,
            },
            {
                seedType:null,
                seedLevel:null,
            },
            {
                seedType:null,
                seedLevel:null,
            },
            {
                seedType:null,
                seedLevel:null,
            },
            {
                seedType:null,
                seedLevel:null,
            },
            {
                seedType:null,
                seedLevel:null,
            },
            {
                seedType:null,
                seedLevel:null,
            },
            {
                seedType:null,
                seedLevel:null,
            },
            {
                seedType:null,
                seedLevel:null,
            },
            {
                seedType:null,
                seedLevel:null,
            },
            {
                seedType:null,
                seedLevel:null,
            }
        ];
        //神像数据
        datas.statueInfo = [
            {
                isActive:0,//是否激活
                experience:0.2,//经验值
            },
            {
                isActive:1,
                experience:1,
            },
            {
                isActive:0,
                experience:0.2,
            },
            {
                isActive:0,
                experience:0.8,
            }
        ]
        //头部材料数据
        datas.material = {
            wood:{
                amount:10
            },
            stone:{
                amount:100
            },
            cement:{
                amount:1000
            },
            jewel:{
                amount:10086
            }
        }
        //用户信息
        datas.userInfo = {
            userId:10086,//用户id
            nickName:"刘老大",//用户名
            isSingIn:false,//是否签到
            userImg:"ui/head2.png",//头像
            houseLevel:12,//房屋登等级
            treasure:2000,//财富值
        }
        //签到数据
        datas.signIn = {
            award:'大白菜'
        }
        // 排行榜农场列表
        datas.farmList = function(){
            var lists = [];
            for(var i = 0;i<50;i++){
                lists.push({
                    userName:"姓名"+i,
                    userLevel:i,
                    userJewel:i/(-0.01),
                    id:i
                })
            }
            return lists;
        }
        return datas;
})(Datas);