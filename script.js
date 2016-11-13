function navigator_relocate() {
	var window_top = $(window).scrollTop();
	var div_top = $('#nav-anchor').offset().top;
	if (window_top > div_top) {
		$('#navigator').addClass('stick');
		$('.content').addClass('pushed');
		$('#navigator-phantom').show();
	} else {
		$('#navigator').removeClass('stick');
		$('.content').removeClass('pushed');
		$('#nav-phantom').hide();
	}
}

$(function() {
	$(window).scroll(navigator_relocate);
	navigator_relocate();
});