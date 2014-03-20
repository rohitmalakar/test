$('document').ready(function(){
	$('.tab_nav li a').click(function(){
		$parents = $(this).parents('.tab_nav');

		$parents.find('li a').removeClass('active');

		 //$('.tab_nav li a').removeClass('active');
		// $(this).parent().siblings().removeClass('active');
		$(this).addClass('active');

		var sel_tab =$(this).attr('ref');
		// console.log(sel_tab);
		$(this).parents('.tab_wrap').children('.tab_body_wrap').children('.'+ sel_tab + '_body').show().siblings().hide();
	});

	//for trip detail tab
	$('#trip_tab_nav li a').click(function(){
		var sel_tab = $(this).attr('ref');
		$parents = $(this).parents('#trip_tab_nav');
		$parents.find('li a').removeClass('active');
		$(this).addClass('active');
		var tab_content = $(this).parents('.tripdetail_page').find('#trip_tab_content');
		tab_content.find('.tab_body').hide();
		// $('#tab3_body').show();

		// tab_content.$('#' + sel_tab + "_body").show();
	});
});