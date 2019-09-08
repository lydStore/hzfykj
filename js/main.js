$(function(){
	$(".slideBox").slide({
		mainCell:".banner-bd ul",
		autoPlay:true
	});
	$(".friendLink").slide({ 
		mainCell:".tempWrap ul",
		autoPlay:true,
		effect:"leftMarquee",
		interTime:50,
		vis:8 
	});
	$('.tempWrap').css('width','920px');
	   //img
	$('.pro-list img').click(function(){
	var src = $(this).attr('src');
	if(src){
	  $('.img_src').attr('src',src); 
	  $('.img_pop').show();
	 }
	});
	$('.close').click(function(){
		$('.img_pop').fadeOut()
	});
})

function expect(){
	alert('敬请期待！')
}