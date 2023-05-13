$(document).ready(function(){
    $('#themess').click(function(){
     $('.scBigBox').toggleClass('show-scBigBox');      
      });
    });
    $(".overlayclose").click(function(){
                      $(".scBigBox").removeClass("show-scBigBox");
                  });			
     var search_types={
          "types":[{name:"wd",action:"https://www.baidu.com/s"},
                   {name:"query",action:"https://www.sogou.com/web"},
                   {name:"q",action:"https://cn.bing.com/search"},
                   {name:"q",action:"https://www.google.com/search"},
                   {name:"text",action:"https://yandex.com/search/"},
                   {name:"wd",action:"https://xueshu.baidu.com/s"},
                   {name:"q",action:"https://s.taobao.com/search"},
                   {name:"keyword",action:"https://search.jd.com/Search"},
                   {name:"q",action:"https://list.tmall.com/search_product.htm"},
                   {name:"q",action:"https://www.zhihu.com/search"},
                   {name:"query",action:"https://weixin.sogou.com/weixin"},
                   {name:"q",action:"https://s.weibo.com/weibo"},
                   {name:"q",action:"https://huaban.com/search"},
                   {name:"searchKeyWord",action:"https://www.kugou.com/yy/html/search.html"},
                   {name:"keyword",action:"https://search.bilibili.com/all"}, 
                  ]};
    var themess_index;
    var bgssid;
    var zhui;
    $('.scSmallBox').click(function (){
      bgssid = $(this).attr('data-bgssid');
      themess_index = search_types.types[$(this).index()].action;
      zhui = search_types.types[$(this).index()].name,exp=null;
      exp = new Date();
      exp.setTime(exp.getTime() + 2592000*1000);
      document.cookie="seid="+bgssid+";path=/;expires="+exp.toGMTString();
      document.cookie="th_idx="+themess_index+";path=/;expires="+exp.toGMTString();
      document.cookie="hzs="+zhui+";path=/;expires="+exp.toGMTString();
      $(this).addClass('active').siblings().removeClass('active');
      $('#contentss').removeClass().addClass(bgssid+' sChoiceBtn');  //addClass(bgssid+' sChoiceBtn')
        $("#searchCheck").attr("action",search_types.types[$(this).index()].action);
        $("#search").attr("name", search_types.types[$(this).index()].name);
    });
    