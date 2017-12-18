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
			$(document).on("touchstart",function (ev) {
				var ev=ev||window.event
				var target=ev.target||target.srcElement
				if (target.className=="back") {
					history.back()
				};
				if (target.className=="select") {
					$(".show").css("display","block")
				}
				if (target.className!="select"||target.className=="go"||target.className=="here") {
					$(".show").css("display","none")
				};
				if (target.className=="go") {
					window.open()
				};
				if (target.className=="here") {
					window.open()
				};
				if (target.nodeName=="IMG"&&target.parentNode.className=="center") {
					window.open("./mytx.html","_self")
				};
				if (target.className=="shoucang") {
					window.open("./myshoucang.html","_self")
				};
				if (target.className=="xiangce") {
					window.open("./wodexiangce.html","_self")
				};
				if (target.className=="jilu") {
					window.open("./myjilu.html","_self")
				};
				if (target.className=="gonglue") {
					window.open("./tixianGL.html","_self")
				};
				if (target.id=="nav1") {
					$("#my").delay(800).fadeToggle(500)
					$("#share").delay(400).fadeToggle(500)
					$("#knowledge").delay(200).fadeToggle(500)
					$("#order").delay(600).fadeToggle(500)
				}
				if (target.id=="my") {
					window.open("./wode.html","_self" )
				};
				if (target.id=="share") {
					window.open("./fabuwenzhang.html","_self" )
				};
				if (target.id=="knowledge") {
					
				};
				if (target.id=="order") {
					window.open("./gongdan.html","_self" )
				};
			})
		})