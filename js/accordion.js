//$(function() {
//	$('.accordionTitle').on('click', function () {
//		$(this).next('ul').slideToggle('fast');
//	});
//});

var $accordionTitle =$('.accordionTitle');
var $accordionPanel =$('.accordionPanel');

//$(function(){
//	$accordionTitle.on('click',function(){
//		$this = $(this);
//		if($accordionPanel.hasClass('active')){
//			$this.next('ul').removeClass('active');
//		}else{
//			$this.next('ul').addClass('active');
//		}
//	});
//});


$(function(){
	$accordionPanel.on('click',function(){
		$this = $(this);
		if($accordionPanel.hasClass('active')){
			$this.next('ul').removeClass('active');
		}else{
			$this.next('ul').addClass('active');
		}
	});
});