$('document').ready(function(){
	$('.tab_nav li a').click(function(){
		$('.tab_nav li a').removeClass('active');
		$(this).addClass('active');
			//alert();
	});
});