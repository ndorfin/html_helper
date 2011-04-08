/*! 
 * jquery.html_helper.js
 * -------------------------------
 * Description:	An HTML best-practices helper, for on-the-fly debugging of common HTML mistakes.
 * Author: 		Shaun O'Connell - shaun@tactile.co.za
 * More info: 	http://tactile.co.za
 * Requires: 	jQuery 1.3.2+
 */
$(document).ready(function(){
	var helper_debug_level = 'warning'; /* valid: error|warning */

	var path_to_tooltips = "js/jquery.html_helper/css/tooltips.css"
	var link = "<link rel='stylesheet' type='text/css' href='"+ path_to_tooltips + "' />";
	$("head").append(link);

	/* Warnings */
	var html_warnings = [
		{
			"selector": "*[style]",
			"description": "Try to avoid using the 'style' attribute a.k.a. 'inline style' - CSS should be your source of styling."
		},{
			"selector": "a[href=\"#\"]",
			"description": "This anchor (&lt;a&gt;) has an 'href' attribute with a '#' as a value. Ideally, you should use a valid ID-ref URI as the 'href' value."
		},{
			"selector": "img[alt=\"\"]",
			"description": "This image (&lt;img&gt;) is missing an 'alt' attribute value.  Specify an 'alt' attribute so that non-sighted users can understand what this image is trying to convey.  If this image is purely decorational, then consider applying this image via CSS."
		},{
			"selector": "img[height=\"\"], img:not([height])",
			"description": "This image (&lt;img&gt;) is missing a 'height' attribute or attribute value.  Declaring a 'height' value will ensure content doesn't shift around while the image is loading."
		},{
			"selector": "img[width=\"\"], img:not([width])",
			"description": "This image is missing a 'width' attribute or attribute value.  Declaring a 'width' value will ensure content doesn't shift around while the image is loading."
		},{
			"selector": "label:not([for]), label[for=\"\"]",
			"description": "You've used a label (&lt;label&gt;) here without specifying a 'for' attribute or attribute value.  Ideally, a label's 'for' attribute should be associated with a form field's ID."
		}
	]

	/* Errors */
	var html_errors = [
		{
			"selector": "*[src=\"\"]",
			"description": "If you use a 'src' attribute, then it must contain a URL value."
		},{
			"selector": "*[title=\"\"]",
			"description": "If you use a 'title' attribute, then it must contain a value."
		},{
			"selector": "a[href=\"\"]",
			"description": "If you use a 'href' attribute, then it must contain a URL value."
		},{
			"selector": "abbr:not([title]), abbr[title=\"\"]",
			"description": "Abbreviations (&lt;abbr&gt;) should always contain a 'title'."
		},{
			"selector": "acronym:not([title]), acronym[title=\"\"]",
			"description": "Acronyms (&lt;acronym&gt;) should always contain a 'title'."
		},{
			"selector": "img:not([alt])",
			"description": "This image (&lt;img&gt;) is missing an 'alt' attribute or attribute value.  Specify an 'alt' attribute so that non-sighted users can understand what this image is trying to convey."
		}
	]

	if (helper_debug_level == 'warning'){
		for(i=0; i < html_warnings.length; i++){
			//window.console.log(html_warnings[i].selector);
			$(html_warnings[i].selector).addClass("helper warning");
			$(html_warnings[i].selector).before("<span class='tooltip_hint warning'>?</span>");
			$(html_warnings[i].selector).after("<span class='tooltip warning'>"+html_warnings[i].description+"</span>");
		}
	}
	for(i=0; i < html_errors.length; i++){
		//window.console.log(html_errors[i].selector);
		$(html_errors[i].selector).addClass("helper error");
		$(html_errors[i].selector).before("<span class='tooltip_hint error'>!</span>");
		$(html_errors[i].selector).after("<span class='tooltip error'>"+html_errors[i].description+"</span>");
	}
});