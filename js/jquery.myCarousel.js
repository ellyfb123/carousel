(function($){
    $.fn.myCarousel = function(imgs,comment){
            var timer;
            var currentItem = 0;
             $(".carousel").css({"width":"400px","margin":"auto","position":"relative"})
                           .append("<img class='image' style='height:400px' src='resource/loading.jpg'>\
                            <div class='comment' style='position:absolute; top:350px; \
                        font-size:18px; background-color:green; opacity:0.7;'></div> \
                <div class='page-bottom' style='margin-left:36px'></div>");     
            for(var i = 0; i < imgs.length; i++)
            {
               $(".page-bottom").append("<a class='skipPage' style='position:relative; \
                border:1px solid #998855;width:65px;height:18px;display:inline-block;margin-right:4px;' index='"+i+"'>\
                <div style='display:inline-block;'></div><div class='bar' style='width:0px;background-color:red;\
                position:absolute;height:18px;display:inline-block;'></div></a>");
            }
            $(".skipPage").hover(function(){
                var currentIndex = $(this).attr("index");                
                $(".image").attr("src", imgs[currentIndex]);                
                clearInterval(timer);
            },function(){                
                timer=setInterval(function(){ MyTimer();}, 3000); 
            });

            timer = setInterval(function(){MyTimer();}, 3000);   
            function MyTimer(){   
                   
                if (currentItem === imgs.length) {
                    currentItem = 0;
                }

                $(".image").attr("src",imgs[currentItem])  
                           .fadeOut(3000,function(){$(".image").show();}); 
                $("[index='"+currentItem+"'] .bar").animate({width:"65px"},3000,function(){
                    $(".bar").width(0);
                });
                $(".comment").text(comment[currentItem])   
                             .fadeOut(3000,function(){$(".comment").show();}); 
                currentItem ++;          
            };
    }
}(jQuery));