﻿function fall() {
	var speed = 2000;
	for ( var i = 0; i < $('.pack > div > span').size()+1; i++ ) {
		var step = i+1;
		$('.pack .step'+step).delay(i*speed/5).animate({
			'opacity': '1',
			'filter': 'alpha(opacity=1)'
		}, speed/20);
		$('.pack .step'+step).animate({
			'top': '116px'
		}, speed*19/20);
		$('.pack .step'+step).delay(speed).animate({
			'opacity': '0',
			'filter': 'alpha(opacity=0)'
		}, speed/20);
		$('.pack .step'+step).delay(speed*21/20).animate({
			'top': '0'
		}, speed/20);
	}
	/*$('.pack img').delay(speed/4*5).animate({
		'top': '76px'
	}, speed/8);
	$('.pack img').animate({
		'top': '86px'
	}, speed/6, 'easeOutBounce');
	$('.pack img').animate({
		'top': '76px'
	}, speed/8);
	$('.pack img').animate({
		'top': '86px'
	}, speed/6, 'easeOutBounce');*/
	setTimeout(function(){
		fall()
	}, 10000);
}
function animate() {
	$('.conditions .icon1').css({
		'top': '-12px',
		'margin-left': -$(window).width()/2+'px'
	});
	$('.conditions .icon1').animate({
		'top': '38px',
		'margin-left': '-652px',
		'opacity': '1',
		'filter': 'alpha(opacity=100)'
	}, 2000);
	$('.conditions .icon2').css({
		'top': '248px',
		'margin-left': -$(window).width()/2+'px'
	});
	$('.conditions .icon2').animate({
		'top': '228px',
		'margin-left': '-646px',
		'opacity': '1',
		'filter': 'alpha(opacity=100)'
	}, 2000);
	$('.conditions .icon5').css({
		'top': '142px',
		'margin-right': -$(window).width()/2+'px'
	});
	$('.conditions .icon5').animate({
		'top': '242px',
		'margin-right': '-637px',
		'opacity': '1',
		'filter': 'alpha(opacity=100)'
	}, 2000);
	$('.conditions .icon6').css({
		'top': '338px',
		'margin-right': -$(window).width()/2+'px'
	});
	$('.conditions .icon6').animate({
		'top': '318px',
		'margin-right': '-639px',
		'opacity': '1',
		'filter': 'alpha(opacity=100)'
	}, 2000);
}
function clouds() {
	var d = 1000;
	var s = 2000;
	var e = 'easeInOutCubic';
	for ( var i = 1; i < $('.clouds img').size()+1; i++ ) {
		var left = (1000-$('.clouds img[data-num='+i+']').attr('width'))*Math.random()-500;
		var top = ($('.contest').offset().top-50)+ ($('.contest').outerHeight()-$('.clouds img[data-num='+i+']').attr('width')+100)*Math.random();
		$('.clouds img[data-num='+i+']').css({
			'margin-left': left+'px',
			'margin-top': top+'px'
		});
		var ml = $(window).width()/2;
		if ( ml < 500 ) {
			ml = 500;
		}
		var lc = eval($('.clouds img[data-num='+i+']').attr('width'))+$('.clouds img[data-num='+i+']').offset().left;
		var mt = $('.contest').offset().top+$('.contest').outerHeight()/2;
		var tc = eval($('.clouds img[data-num='+i+']').attr('height'))+$('.clouds img[data-num='+i+']').offset().top;
		if ( lc < ml ) {
			if ( tc > mt ) {
				$('.clouds img[data-num='+i+']').stop(true,true).delay(d).animate({
					'margin-left': -ml-$('.clouds img[data-num='+i+']').attr('width')+'px',
					'margin-top': top*tc/mt+'px'
				}, s, e);
			}
			else {
				$('.clouds img[data-num='+i+']').stop(true,true).delay(d).animate({
					'margin-left': -ml-$('.clouds img[data-num='+i+']').attr('width')+'px',
					'margin-top': top/tc/mt+'px'
				}, s, e);
			}
		}
		else {
			if ( tc > mt ) {
				$('.clouds img[data-num='+i+']').delay(d).animate({
					'margin-left': ml+$('.clouds img[data-num='+i+']').attr('width')+'px',
					'margin-top': top*tc/mt+'px'
				}, s, e);
			}
			else {
				$('.clouds img[data-num='+i+']').delay(d).animate({
					'margin-left': ml+$('.clouds img[data-num='+i+']').attr('width')+'px',
					'margin-top': top/tc/mt+'px'
				}, s, e);
			}
		}
	}
	$('body').delay(d+s).queue(function() { $(this).removeClass('fixed'); $(this).dequeue(); });
	$('.clouds').delay(d+s).queue(function() { $(this).hide(); $(this).dequeue(); });
}
function cursor() {
	$('.cursor').addClass('active');
	$('.cursor').fadeIn(500);
	$('.cursor').delay(1500).fadeOut(500);
	$('.cursor').delay(200).queue(function() { $(this).removeClass('active'); $(this).dequeue(); });
	setTimeout(function(){
		cursor();
	}, 5000+10000*Math.random());
}
$(window).load(function() {
	$('.loading').fadeOut(2000);
	//clouds();
	fall();
	$('body').mousemove(function(pos) {
		$('.cursor').css({
			'left': pos.pageX-50+'px',
			'top': pos.pageY+30+'px'
		});
	});
	setTimeout(function(){
		cursor();
	}, 5000);
});
function persposition() {
	if ( $(window).width() > 1480 ) {
		var margin = ($(window).width()-1480)/4;
		$('.pers1, .pers4').css({
			'left': margin+'px'
		});
		$('.pers2, .pers3').css({
			'right': margin+'px'
		});
	}
	else {
		$('.pers1, .pers4').css({
			'left': '0'
		});
		$('.pers2, .pers3').css({
			'right': '0'
		});
	}
}
$(window).resize(function() {
	persposition();
});
$(document).ready(function() {
	persposition();
	$('.pers1, .pers2, .pers3, .pers4').addClass('pause');
	$('.pers1, .pers2, .pers3, .pers4').hover(
		function() {
			$('.pers1, .pers2, .pers3, .pers4').addClass('pause');
		},
		function() {
			$('.pers1, .pers2, .pers3, .pers4').removeClass('pause');
		}
	);
	$('.conditions .information ul li').hover(
		function() {
			$(this).find('span img').animate({
				'width': '0',
				'height': '0'
			}, 500);
			$(this).find('span img').animate({
				'width': $(this).find('span img').attr('width')+'px',
				'height': $(this).find('span img').attr('height')+'px'
			}, 500);
		},
		function() {
			$(this).find('span img').stop(true,true).animate({
				'width': $(this).find('span img').attr('width')+'px',
				'height': $(this).find('span img').attr('height')+'px'
			}, 500);
		}
	);
	if ( $('input[type="radio"]').length > 0 ) {
		$('input[type="radio"]').uniform();
	}
	if ( $('.conditions').length > 0 ) {
		$(window).bind('scroll', function() {
			if ( $(window).scrollTop() > $('.conditions').offset().top-$(window).height()+$('.conditions').outerHeight() ) {
				animate();
				$('.conditions .icon3, .conditions .icon7').addClass('animate1');
				$('.conditions .icon4, .conditions .icon8').addClass('animate2');
			}
		});
	}
	$('input, textarea').each(function () {
		$(this).data('holder',$(this).attr('placeholder'));
		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});
		$(this).focusout(function(){
			$(this).attr('placeholder',$(this).data('holder'));
		});
	});
	$('html').bind('click', function() {
		$('.usermodal').stop(true,true).fadeOut(250);
	});
	$('.usermodal').click(function(e) {
		e.stopPropagation();
	});
	$('.usermodal, .modal').append('<span class="close"></span>');
	$('.usermodal .close').bind('click', function() {
		$(this).parent().stop(true,true).fadeOut(250);
		return false;
	});
	$('.header ul li a').bind('click', function() {
		$('.usermodal[data-modal='+$(this).attr('href')+']').stop(true,true).fadeIn(250).siblings('.usermodal').fadeOut(250);
		return false;
	});
	$('.modal').each(function() {
		$(this).css({
			'margin-left': -$(this).outerWidth()/2+'px',
			'margin-top': -$(this).outerHeight()/2+'px'
		});
	});
	var bh = 0;
	/*$('.video a').bind('click', function() {
		$('.modal[data-modal='+$(this).attr('href')+']').stop(true,true).fadeIn(250).siblings('.modal').fadeOut(250);
		$('.fade').stop(true,true).fadeIn(250);
		bh = $('body').scrollTop();
		$('body').css({'position': 'fixed', 'top': -bh+'px', 'overflow-y': 'scroll'});
		if ( !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) ) {
			document.getElementById($(this).attr('href')).contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
		}
		$('.modal .close').bind('click', function() {
			document.getElementById($(this).parent().attr('data-modal')).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
		});
		return false;
	});*/
	$('.modal .close').bind('click', function() {
		$(this).parent().stop(true,true).fadeOut(250);
		$('.fade').stop(true,true).fadeOut(250);
		$('body').css({'position': 'static', 'top': '0', 'overflow-y': 'auto'});
		$('body').scrollTop(bh);
		return false;
	});
	$('span.tip').hover(
		function() {
			$('body').append('<p class="tiptext">'+$(this).attr('data-tip')+'</p>');
			$('p.tiptext').css({
				'left': $(this).offset().left+'px',
				'top': $(this).offset().top+'px'
			});
		},
		function() {
			$('p.tiptext').remove();
		}
	);
	$('.photo a[href=select], .photo button').bind('click', function() {
		$(this).parents('.photo').find('input[type="file"]').click();
		return false;
	});
	$('.photo input[type=file]').change(function() {
		$('.photo p input').val($(this).val());
	});
	$('a.zoom').fancybox();
	//$('.contest.waiting').next('.conditions').addClass('locked');
});
$(window).load(function() {
	$('.pers1, .pers2, .pers3, .pers4').removeClass('pause');
	if ( $('a.pers1, a.pers2, a.pers3').length > 0 ) {
		var line = [
			$('.contest').offset().top+$('.contest').height(),
			$('.conditions').offset().top+$('.conditions').height(),
			$('.winners').offset().top+$('.winners').height()-3,
			$('.moreinfo').offset().top+$('.moreinfo').height(),
			$('.results').offset().top+$('.results').height()-3,
			$('.footer').offset().top+$('.footer').height()
		]
	}
	if ( $('.about').length > 0 ) {
		var line = [
			$('.about').offset().top+$('.about').outerHeight()-17
		]
	}
	var a = 0;
	function pers1() {
		$('.pers1').css({
			'left': Math.random()*($(window).width()-$('.pers1').outerWidth())+'px',
			'top': line[Math.floor(Math.random()*line.length)]+'px'
		});
		var am = 5;
		a++;
		if ( a > am ) {
			a = 1;
		}
		for ( var i = 1; i < am+1; i++ ) {
			$('.pers1').removeClass('quote'+i);
		}
		$('.pers1').addClass('quote'+a);
	}
	var b = 0;
	function pers2() {
		$('.pers2').css({
			'left': Math.random()*($(window).width()-$('.pers2').outerWidth())+'px',
			'top': line[Math.floor(Math.random()*line.length)]+'px'
		});
		var bm = 5;
		b++;
		if ( b > bm ) {
			b = 1;
		}
		for ( var i = 1; i < bm+1; i++ ) {
			$('.pers2').removeClass('quote'+i);
		}
		$('.pers2').addClass('quote'+b);
	}
	var c = 0;
	function pers3() {
		$('.pers3').css({
			'left': Math.random()*($(window).width()-$('.pers3').outerWidth())+'px',
			'top': Math.random()*($('.wrapper').height()-$('.pers3').outerHeight())+'px'
		});
		var cm = 3;
		c++;
		if ( c > cm ) {
			c = 1;
		}
		for ( var i = 1; i < cm+1; i++ ) {
			$('.pers3').removeClass('quote'+i);
		}
		$('.pers3').addClass('quote'+c);
	}
	pers1();
	pers2();
	pers3();
	$('.pers1').bind('animationiteration webkitAnimationIteration oanimationiteration MSAnimationIteration', function() {
		pers1();
	});	
	$('.pers2').bind('animationiteration webkitAnimationIteration oanimationiteration MSAnimationIteration', function() {
		pers2();
	});
	$('.pers3').bind('animationiteration webkitAnimationIteration oanimationiteration MSAnimationIteration', function() {
		pers3();
	});
});