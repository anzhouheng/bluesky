		function rem(){
			var html=document.getElementsByTagName('html')[0];
			var ww=document.documentElement.clientWidth;
			var scale=ww/750;
			html.style.fontSize=scale*100+"px";
		}
		rem();
		window.onresize=function(){
			rem();
		}
		
		$("#ip1").onfocus=function(){
			if (true) {};
		}
		
		$(function(){
			$("#jia").click(function(){
				$("#ip3").click();
			});
			$("#hui").click(function(){
				history.back();
			})
			$("#fasong").click(function(){
				if ($("#ip1").val()==""||$("#ip2").val()=="") {
					alert("内容不能为空！");
				};
			})
		})