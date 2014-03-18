	$('.navContent').hide();
	
	$('.navTab').click(function (event) {
		event.preventDefault();
		$('.navTab').removeClass('displayed');
		$(this).addClass('displayed');
		$('.navTab').hide();
		
		var selectedTabIndex = $('.navSet .displayed').index();
		$('.navContent').hide();
		$('.navContent').eq(selectedTabIndex).show();
	});
	
	$('.closeMod').click(function () {
		$('.navContent').hide();
		$('.navTab').show();
	});
