console.log('js loaded');

$('ul li').on('click', function() {
	$('li').removeClass('active');
	$(this).addClass('active');
});