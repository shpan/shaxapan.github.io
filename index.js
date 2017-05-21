// protected mode voor wordpress
$.noConflict();
jQuery(document).ready(function($) {
	$('ul#nav li a').click(function() {
	    var page = $(this).attr('href');
        $('#content').load('http://www.applestore.uz/' + page + '.html');
	return false;
	alert(page);
	})
})
