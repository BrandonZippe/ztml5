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


$('.cms_tab_content').hide();
$('.cms_tab_content').first().show();
$('.cms_tabset_btn').first().addClass('cms_selected_tab');

$('.cms_tabset_btn').click(function (event) {
    event.preventDefault();
    $('.cms_tabset_btn').removeClass('cms_selected_tab');
    $(this).addClass('cms_selected_tab');

    var selectedTAbIndex = $('.cms_tabset .cms_selected_tab').index();
    $('.cms_tab_content').hide();
    $('.cms_tab_content').eq(selectedTAbIndex).show();
});
