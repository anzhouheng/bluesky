function rem() {
			var html=document.getElementsByTagName('html')[0];
			var Ww=document.documentElement.clientWidth;
			var scale=Ww/750;
			html.style.fontSize=scale*100+"px";
		}
		rem()
		window.onresize=function(){
			rem()
		}
		$(function () {
			$(".top p").eq(0).on("touchstart",function(){
				$(this).addClass("select").siblings().removeClass("select");
				$(".foot").css("display","block")
				$(".publish").css("display","none")
			})
			$(".top p").eq(1).on("touchstart",function(){
				$(this).addClass("select").siblings().removeClass("select");
				$(".foot").css("display","none")
				$(".publish").css("display","block")

			})
			$(document).on("touchstart",function (ev) {
				var ev=ev||window.event
				var target=ev.target||target.srcElement
				if (target.id=="nav1") {
					$("#my").delay(800).fadeToggle(500)
					$("#share").delay(400).fadeToggle(500)
					$("#knowledge").delay(200).fadeToggle(500)
					$("#order").delay(600).fadeToggle(500)
				}
				if (target.id=="my") {
					window.open("../jsp/wode.html","_self" )
				};
				if (target.id=="share") {
					window.open("../jsp/fabuwenzhang.html","_self" )
				};
				if (target.id=="knowledge") {
					
				};
				if (target.id=="order") {
					window.open("./jsp/gongdan.html","_self" )
				};
				if (target.className=="jieshao"&&target.parentNode.className=="foot1") {
					window.open("./jsp/gongdanjieshao.html","_self" )
				}
				if (target.id=="tijiao") {
					$(".publish li").eq(7).css("display","block")
				}
				if (target.className=="chenggong") {
					$(".publish li").eq(7).css("display","none")
				}
				if (target.className=="back") {
					history.back()
				}
				if (target.className=="select"&&target.parentNode.className=="head") {
					$('.foot li').bind('touchstart',function(e){
					    startX = e.originalEvent.changedTouches[0].pageX,
					    startY = e.originalEvent.changedTouches[0].pageY;
					});
					$('.foot li').bind('touchmove',function(e){
					    //获取滑动屏幕时的X,Y

					    endX = e.originalEvent.changedTouches[0].pageX,
					    endY = e.originalEvent.changedTouches[0].pageY;
					    //获取滑动距离
					    distanceX = endX-startX;
					    distanceY = endY-startY;
					    //判断滑动方向 
					    if(Math.abs(distanceX)>Math.abs(distanceY) && distanceX<0){
					    	console.log("左")
					        $(this).find(".shanchu").css("display","block")
							$(this).css({
								"transition":"all 0.5s linear",
								"margin-left":-0.4+"rem"
							})
					    }
					    if(Math.abs(distanceX)>Math.abs(distanceY) && distanceX>0){
					    	console.log("右")
					        $(this).find(".shanchu").css("display","none")
								$(this).css({
								"transition":"all 0.5s linear",
								"margin-left":0+"rem"
							})
					    }

					});

　　
					// $(".foot li").on("touchmove",function () {
					// 	$(this).find(".shanchu").css("display","block")
					// 	$(this).animate({
					// 		"margin-left":"-0.4rem"
					// 	},1000)
					// })
				}
				if (target.className=="shanchu") {
					console.log($(target).parent().parent())
					$(target).parent().parent().remove()
				}
				if (target.className=="back") {
					history.back()
				}
			})
		})