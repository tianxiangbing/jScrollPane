/*
 * @Author: 田想兵
 * @Date: 2021-04-12 13:47:27
 * @LastEditTime: 2021-04-13 19:04:35
 * @github: https://github.com/tianxiangbing/jScrollPane
 * @Contact: 55342775@qq.com
 */
$(function()
{
	// Copy the pages javascript sourcecode to the display block on the page for easy viewing...
	var sourcecodeDisplay = $('#sourcecode-display');
	if (sourcecodeDisplay.length) {
		sourcecodeDisplay.empty().append(
			$('<code />').append(
				$('<pre />').html(
					$('#sourcecode').html().replace(/\n\t\t\t/gm, '\n').replace('>', '&gt;').replace('<', '&lt;')
				)
			)
		);
		$('#css-display').empty().append(
			$('<code />').append(
				$('<pre />').html(
					$('#page-css').html().replace(/\n\t\t\t/gm, '\n')
				)
			)
		);
	}
});

// It seems some people copy this file and put it on their sites despite the message at the top
// So let's make sure they don't end up in my stats...
if (window.location.hostname == 'jscrollpane.kelvinluck.com') { 
	// Google analytics tracking code for demo site 
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-17828883-1']);
	_gaq.push(['_trackPageview']);
	
	(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
} else if(window.location.protocol == 'file:' || window.location.hostname == 'localhost') {
	// Allow local testing without annoying alerts
} else {
	alert('Do not include demo.js on your site!');
}
