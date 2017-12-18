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
		
		$("#ip1").value="发表此刻的心情......";

		$(function(){
			$("#jia").click(function(){
				$("#ip3").click();
			});
			$("#hui").click(function(){
				history.back();
			})
			$("#fasong").click(function(){
				if ($("#ip1").val()==""||$("#ip1").val()=="发表此刻的心情......") {
					alert("内容不能为空！");
				};
			})
			$("#ip1").focus(function(){
				if ($("#ip1").val()=="发表此刻的心情......"){
					$("#ip1").val("");
				}
			})
			$("#ip1").blur(function(){
				if ($("#ip1").val()==""){
					$("#ip1").val("发表此刻的心情......");
				}
			})
		});