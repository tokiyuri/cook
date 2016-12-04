var $topBtn = $(".goTopBtn");

$(window).load(function(){

	$(function(){
		$topBtn.hide();
		$(window).scroll(function(){
			if($(window).scrollTop() > 400){
				$topBtn.slideDown(200);
			}else {
				$topBtn.slideUp(200);
			}
		});
	});
	$topBtn.on('click',function(){
			$('html,body').animate({scrollTop: 0}, 500);
		return false;
	});
});


/**
 * Created by hatabori on 2016/11/21.
 */
