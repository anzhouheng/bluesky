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

		var nowDate=new Date();
		var year=nowDate.getFullYear();
		var month=nowDate.getMonth()+1;
		var day=nowDate.getDate();
		var hour=nowDate.getHours();
		var minu=nowDate.getMinutes();
		var sec=nowDate.getSeconds();
		var misec=nowDate.getMilliseconds();
		if (month<10) {
			month="0"+month;
		}
		if (day<10) {
			day="0"+day;
		}
		if (hour<10) {
			hour="0"+hour;
		}
		if (minu<10) {
			minu="0"+minu;
		}

		$(function(){
			$("#hui").on("touchstart",function(){
				history.back();
			});
			$(".date").html(`${year}.${month}.${day}<i>${hour}: ${minu}</i>`);
		})