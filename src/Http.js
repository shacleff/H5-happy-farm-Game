//http

var Http = (function(http){
    http = http ||{};
    var HttpRequest = Laya.HttpRequest;
    var Event = Laya.Event;
    http.hr = new HttpRequest();
    // params——url-发生的数据-请求完成回调
    http.connect = function(Url,Json,callBack){
        
        http.hr.once(Event.PROGRESS, this, function(){
            console.log("请求进度改变");
        });
        
		http.hr.once(Event.COMPLETE, this, function(e){
		    callBack(Http.hr.data);
		});
		
		http.hr.once(Event.ERROR, this, function(e){
		    console.error(e+"请求失败");
		});
		
		http.hr.send(Url, Json,'post','text');
    }
    return http;
})(Http)
//调用方式 
// Http.connect('http://xkxz.zhonghao.huo.inner.layabox.com/api/getData', 'name=myname&psword=xxx',function(data){
//     console.log(data);
// })