/*
 * jquery.html_helper.js
 * -------------------------------
 * Description:		An HTML best-practices helper, for on-the-fly highlighting of common HTML mistakes.
 * Author:			Shaun O'Connell - shaun@tactile.co.za
 * More info: 		http://tactile.co.za
 */
$(document).ready(function(){
	log = function(obj){
		if (window.console) {
			window.console.log(obj);
		}
	};

	// Debug info
	if ($("html.debug") && !$.browser.msie){
		var doc_type = "Unknown";
		var doc_type_description = "<!DOCTYPE ";
		if (window.document.doctype.name){
			doc_type_description = doc_type_description + window.document.doctype.name;
		}
		if (window.document.doctype.publicId){
			doc_type_description = doc_type_description + ' "' + window.document.doctype.publicId + '"';
		}
		if (window.document.doctype.systemId){
			doc_type_description = doc_type_description + ' "' + window.document.doctype.systemId + '"';
			if (window.document.doctype.systemId == "-//W3C//DTD HTML 4.01//EN"){
				doc_type = "HTML4";
			}
		}
		doc_type_description = doc_type_description + '>';
		
		if (doc_type_description == "<!DOCTYPE html>"){
			doc_type = "HTML5";
		}
		log("Document type is: " + doc_type + ". (" + doc_type_description + ")");
	}


	var helper_debug_level = 'warning'; /* valid: error|warning */

	var path_to_tooltips = "js/jquery.html_helper/css/tooltips.css"
	var link = "<link rel='stylesheet' type='text/css' href='"+ path_to_tooltips + "' />";
	$("head").append(link);

	var tests = [
		{
			"selector": "*[style]",
			"test_type": "warning",
			"description": "Try to avoid using the 'style' attribute a.k.a. 'inline style' - CSS should be your source of styling."
		},{
			"selector": "a[href=\"#\"]",
			"test_type": "warning",
			"description": "This anchor (&lt;a&gt;) has an 'href' attribute with a '#' as a value. Ideally, you should use a valid ID-ref URI as the 'href' value."
		},{
			"selector": "a[target]",
			"test_type": "warning",
			"max_doctype_version": 4,
			"description": "This anchor (&lt;a&gt;) has a 'target' attribute. Rather avoid opening new windows or targetting open windows.  If you really have to, you should use JS to add such functionality to new window links."
		},{
			"selector": "img[alt=\"\"]",
			"test_type": "warning",
			"description": "This image (&lt;img&gt;) is missing an 'alt' attribute value.  Specify an 'alt' attribute so that non-sighted users can understand what this image is trying to convey.  If this image is purely decorational, then consider applying this image via CSS."
		},{
			"selector": "img[height=\"\"], img:not([height])",
			"test_type": "warning",
			"description": "This image (&lt;img&gt;) is missing a 'height' attribute or attribute value.  Declaring a 'height' value will ensure content doesn't shift around while the image is loading."
		},{
			"selector": "img[width=\"\"], img:not([width])",
			"test_type": "warning",
			"description": "This image is missing a 'width' attribute or attribute value.  Declaring a 'width' value will ensure content doesn't shift around while the image is loading."
		},{
			"selector": "label[for=\"\"], label:not([for])",
			"test_type": "warning",
			"description": "You've used a label (&lt;label&gt;) here without specifying a 'for' attribute or attribute value.  Ideally, a label's 'for' attribute should be associated with a form field's ID."
		},{
			"selector": "b, big, center, hr, i, font, small, strike, u",
			"test_type": "warning",
			"description": "This element is considered a presentational element. Use the semantically preferred element and CSS to style rather than relying on the HTML to define the style here."
		}/*,{
			"selector": "blink, marquee",
			"test_type": "warning",
			"description": "1999 called.  They want their &lt;blink&gt; and &lt;marquee&gt; elements back."
		}*/,{
			"selector": "[align], *:not(img)[height], [valign], *:not(img)[width]",
			"test_type": "warning",
			"description": "This element contains a presentational attribute such as 'align' or 'width'.  These should be replaced with an appropriate CSS style rather."
		},{
			"selector": "input[type=\"button\"]",
			"test_type": "warning",
			"description": "This input type=button is dysfunctional without the use of JavaScript.  Consider using a submit button and handle the form data correctly."
		},{
			"selector": "input:not([type])",
			"test_type": "warning",
			"description": "This input element does not have a type attribute defined.  You should use the type attribute so that you can style it via CSS"
		},{
			"selector": "input[type=\"image\"][src]",
			"test_type": "warning",
			"description": "Image input types are costly to maintain, incur additional HTTP hits and need JS to function properly"
		},{
			"selector": "*[src=\"\"]",
			"test_type": "error",
			"description": "If you use a 'src' attribute, then it must contain a URL value."
		},{
			"selector": "*[title=\"\"]",
			"test_type": "error",
			"description": "If you use a 'title' attribute, then it must contain a value."
		},{
			"selector": "a[href=\"\"]",
			"test_type": "error",
			"description": "If you use a 'href' attribute, then it must contain a URL value."
		},{
			"selector": "abbr[title=\"\"], abbr:not([title])",
			"test_type": "error",
			"description": "Abbreviations (&lt;abbr&gt;) should always contain a 'title'."
		},{
			"selector": "acronym[title=\"\"], acronym:not([title])",
			"test_type": "error",
			"max_doctype_version": 4,
			"description": "Acronyms (&lt;acronym&gt;) should always contain a 'title'."
		},{
			"selector": "img:not([alt])",
			"test_type": "error",
			"description": "This image (&lt;img&gt;) is missing an 'alt' attribute or attribute value.  Specify an 'alt' attribute so that non-sighted users can understand what this image is trying to convey."
		},{
			"selector": "img:not([src])",
			"test_type": "error",
			"description": "This image (&lt;img&gt;) is missing a 'src' attribute.  Without a src attribute this image will not render appropriately."
		},{
			"selector": "form[action=\"\"], form:not([action])",
			"test_type": "error",
			"description": "This form (&lt;form&gt;) is missing an 'action' attribute or attribute value. Specify a valid URL as the 'action' attribute value so that the &t;form&gt; posts as normal."
		},{
			"selector": "form:not([enctype=\"fomr/multipart-data\"]) input[type=\"file\"]",
			"test_type": "error",
			"description": "This form does not have the necessary enctype attribute for input type=\"file\""
		},{
			"selector": "input[type=\"image\"]:not([src])",
			"test_type": "error",
			"description": "This input type=image is missing its required src attribute"
		},{
			"selector": "input[type=\"\"]",
			"test_type": "warning",
			"description": "This input has a type attribute, but no attribute value"
		}
	]

	var html_warnings = [];
	var html_warnings_index = 0;
	var html_warnings_log = 0;
	var html_errors = [];
	var html_errors_index = 0;
	var html_errors_log = 0;
	for(i=0; i < tests.length; i++){
		if (helper_debug_level == 'warning'){
			if (tests[i].test_type=="warning"){
				html_warnings[html_warnings_index] = tests[i];
				html_warnings_index++;
			}
		}
		if (tests[i].test_type=="error"){
			html_errors[html_errors_index] = tests[i];
			html_errors_index++;
		}
	}
	if (helper_debug_level == 'warning'){
		log("Warning test-cases loaded: " + html_warnings.length);
		for(i=0; i < html_warnings.length; i++){
			$(html_warnings[i].selector)
				.addClass("helper warning")
				.before("<span class='tooltip_hint warning'>?</span>")
				.after("<span class='tooltip warning'>"+html_warnings[i].description+"</span>");
			html_warnings_log++;
		}
		log("Warnings found on this page: " + html_warnings_log);
	}
	log("Error test-cases loaded: " + html_errors.length);
	for(i=0; i < html_errors.length; i++){
		$(html_errors[i].selector)
			.addClass("helper error")
			.before("<span class='tooltip_hint error'>!</span>")
			.after("<span class='tooltip error'>"+html_errors[i].description+"</span>");
		html_errors_log++;
	}
	log("Errors found on this page:" + html_warnings_log);
});