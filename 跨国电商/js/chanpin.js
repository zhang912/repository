
		$(function() {
			var imgw=$('._chanpin_change_main_imgs_1').eq(0).width()+40;
			$('._chanpin_change_main_imgs_wrap').scrollLeft(imgw);
			var x=0,timer1=null;
			function move() {
			$('._chanpin_change_main_imgs_wrap').stop(true,true).animate({scrollLeft:imgw*x},200)
			};
			function autogo() {
				timer1=setInterval(function() {
					x++;
				if (x>6) {
					x=0;
					$('._chanpin_change_main_imgs_wrap').scrollLeft(imgw);
				};
				move();
			},2000)	
			};
			autogo();
			$('._chanpin_change_main_left').click(function() {
				clearInterval(timer1);
				x--;
				if (x<0) {
					x=5;
					$('._chanpin_change_main_imgs_wrap').scrollLeft(imgw*($('._chanpin_change_main_imgs_1').length-1));
				};
				move();
				autogo();
			})

			$('._chanpin_change_main_right').click(function() {
				clearInterval(timer1);
				x++;
				if (x>6) {
					x=0;
					$('._chanpin_change_main_imgs_wrap').scrollLeft(imgw);
				};
				move();
				autogo();
			})
		})