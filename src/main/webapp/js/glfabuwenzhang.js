function rem(){
			var html=document.getElementsByTagName('html')[0];
			var Ww=document.documentElement.clientWidth;
			var scale=Ww/750;
			html.style.fontSize=scale*100+"px";
		}
		rem();

		window.onresize=function(){
			rem();
		}

		/*获取cookie*/
		function setCookie(key,value,day){
			var date=new Date();
			date.setDate(date.getDate()+day);
			document.cookie=key+"="+value+";expires="+date;
		}
		function getCookie(key) {
          var arr=document.cookie.split("; ");
          for (var i = 0; i < arr.length; i++) {
            var newarr=arr[i].split('=');
            if (newarr[0]==key) {
              return newarr[1];
            }
          }
        }
    function removeCookie(key) {
          setCookie(key,"0",-1);
        }
  	/*点击跳转到Tab*/
    $(function(){	
    var newi=$("<i></i>");
    $(".con-left1").append(newi);
    $(".con-left1 i").attr("select","0");
    $(".con-left1").on("click","i",function(){
    	if ($(this).attr("select")=="0") {
    		$(this).css({
    		"background":"url(./img/fabu/hei.png)0 0 no-repeat",
			"background-size":"100% 100%",
    		})
    		$(this).attr("select","1");
    	}else{
    		$(this).css({
    		"background":"url(./img/fabu/bai.png)0 0 no-repeat",
			"background-size":"100% 100%",
    		})
    		$(this).attr("select","0");
    	};
    	
    });
    $("#shan").click(function(){
    	$(".con-left1 i[select=1]").parent().remove();
    });
    



     if (getCookie("tu2")==2) {
     		$(".conouter>div:eq(2)").css({"display":"block"}).siblings().css({"display":"none"});
     		$(".titouter span:eq(2)").addClass("select").siblings().removeClass("select")
     		removeCookie("tu2")
     };
     if (getCookie("tu5")==5) {
     		$(".conouter>div:eq(3)").css({"display":"block"}).siblings().css({"display":"none"});
     		$(".titouter span:eq(3)").addClass("select").siblings().removeClass("select")
     		removeCookie("tu5")
     };

     /*搜索。。。。。。。。。。*/
     $("#ipt").focus(function(){
     		$("#ipt").val("")
     })
     $("#ipt").blur(function(){
     		$("#ipt").val("搜索会员或关键字")
     })
		
		/*点击头像。。。。。*/
		$(".con-left1-foot img").click(function(){
			window.open("./dianjitouxiang.html","_self")
		})



			/*Tab       */
			$(".conouter>div:eq(0)").css({"display":"block"})
			$(".titouter span").click(function(){
				var i=$(this).index();
				$(this).addClass("select").siblings().removeClass("select");
				$(".conouter>div:eq("+i+")").css({"display":"block"}).siblings().css({"display":"none"})
			})


			/*点击散开*/
			var a=0
			$("#caidan").click(function(ev){
				var ev=ev||window.event;
				if(ev.stopPropagation){
					ev.stopPropagation()
				}else{
					ev.cancelBubble=true
				}
				if(a==0){
					$(".caidan img").css({
						"display":"block"
					})
					$("#caidan1").animate({
						"top":"-1.25rem",
						"left":"0"
					},300)
					$("#caidan2").animate({
						"top":"-1.05rem",
						"left":"0.84rem"
					},300)
					$("#caidan3").animate({
						"top":"-0.45rem",
						"left":"1.44rem"
					},300)
					$("#caidan4").animate({
						"top":"0.3rem",
						"left":"1.55rem"
					},300)
					a=1
				}else{
						$(".caidan img").animate({
						"top":"0.15rem",
						"left":"0.15rem"
					},300,function(){
						$(".caidan img").css({
						"display":"none"
							})
					})
					a=0
				}
			})
			/*合并*/
			window.onclick=function(ev){
				var ev=ev||window.event;
				// ev.preventDefault?ev.preventDefault():ev.returnValue=false;
				if(ev.stopPropagation){
					ev.stopPropagation()
				}else{
					ev.cancelBubble=true
				};
				$(".caidan img").animate({
					"top":"0.15rem",
					"left":"0.15rem"
				},300,function(){
					$(".caidan img").css({
					"display":"none"
						})
				})
				a=0
			}

			$("#caidan").on("touchstart",function(ev){
				var ev=ev||window.event;
				if(ev.stopPropagation){
					ev.stopPropagation()
				}else{
					ev.cancelBubble=true
				}
				// console.log($("body").scrollTop())
				console.log($("#caidan").offset().top)
				console.log(ev.originalEvent.targetTouches[0].clientY)

				var mouseLeft=ev.originalEvent.targetTouches[0].clientX-$("#caidan").offset().left;
				var	mouseTop=ev.originalEvent.targetTouches[0].clientY-$("#caidan").offset().top+$("body").scrollTop();
				// console.log(mouseLeft)
				// console.log(mouseTop)
				$("#caidan").on("touchmove",function(ev){
					ev.preventDefault?ev.preventDefault():ev.returnValue=false;
					$("#caidan").css({
						"left":ev.originalEvent.targetTouches[0].clientX-mouseLeft,
						"top":ev.originalEvent.targetTouches[0].clientY-mouseTop
					})
				})
			})
			$("#caidan").on("touchend",function(){
				$("#caidan").off("touchmove")
			})

		})