jQuery.noConflict();
(function($) { 
  $(function() {
    // 使用 $ 作为 jQuery 别名的代码
    $('.xialist').bind('mouseover',function(e){
    	e.stopPropagation();
    	$(this).find('.xiala').show();
    })
    $('.xialist').bind('mouseout',function(e){
    	e.stopPropagation();
    	$(this).find('.xiala').hide();
    });
    var flag=false;
    $('.shuoming').bind('click',function(){
        console.log(flag);
        if(flag){
             $('.shuoming-content').hide();
             flag=false;
        }else{
           $('.shuoming-content').show();
           flag=true;
        }
    })
  });
})(jQuery);
// 其他用 $ 作为别名的库的代码