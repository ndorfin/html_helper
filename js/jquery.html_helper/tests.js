/* Warnings */
var html_warnings = [
	{
		"selector": "*[style]",
		"description": "Try to avoid using the 'style' attribute a.k.a. 'inline style' - CSS should be your source of styling."
	},{
		"selector": "a[href=\"#\"]",
		"description": "This anchor (&lt;a&gt;) has an 'href' attribute with a '#' as a value. Ideally, you should use a valid ID-ref URI as the 'href' value."
	},{
		"selector": "a[target]",
		"description": "This anchor (&lt;a&gt;) has a 'target' attribute. Rather avoid opening new windows or targetting open windows.  If you really have to, you should use JS to add such functionality to new window links."
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
		"selector": "label[for=\"\"], label:not([for])",
		"description": "You've used a label (&lt;label&gt;) here without specifying a 'for' attribute or attribute value.  Ideally, a label's 'for' attribute should be associated with a form field's ID."
	},{
		"selector": "b, big, center, hr, i, font, small, strike, u",
		"description": "This element is considered a presentational element. Use the semantically preferred element and CSS to style rather than relying on the HTML to define the style here."
	}/*,{
		"selector": "blink, marquee",
		"description": "1999 called.  They want their &lt;blink&gt; and &lt;marquee&gt; elements back."
	}*/,{
		"selector": "[align], *:not(img)[height], [valign], *:not(img)[width]",
		"description": "This element contains a presentational attribute such as 'align' or 'width'.  These should be replaced with an appropriate CSS style rather."
	},{
		"selector": "input[type=\"button\"]",
		"description": "This input type=button is dysfunctional without the use of JavaScript.  Consider using a submit button and handle the form data correctly."
	},{
		"selector": "input:not([type])",
		"description": "This input element does not have a type attribute defined.  You should use the type attribute so that you can style it via CSS"
	},{
		"selector": "input[type=\"image\"][src]",
		"description": "Image input types are costly to maintain, incur additional HTTP hits and need JS to function properly"
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
		"selector": "abbr[title=\"\"], abbr:not([title])",
		"description": "Abbreviations (&lt;abbr&gt;) should always contain a 'title'."
	},{
		"selector": "acronym[title=\"\"], acronym:not([title])",
		"description": "Acronyms (&lt;acronym&gt;) should always contain a 'title'."
	},{
		"selector": "img:not([alt])",
		"description": "This image (&lt;img&gt;) is missing an 'alt' attribute or attribute value.  Specify an 'alt' attribute so that non-sighted users can understand what this image is trying to convey."
	},{
		"selector": "img:not([src])",
		"description": "This image (&lt;img&gt;) is missing a 'src' attribute.  Without a src attribute this image will not render appropriately."
	},{
		"selector": "form[action=\"\"], form:not([action])",
		"description": "This form (&lt;form&gt;) is missing an 'action' attribute or attribute value. Specify a valid URL as the 'action' attribute value so that the &t;form&gt; posts as normal."
	},{
		"selector": "input[type=\"image\"]:not([src])",
		"description": "This input type=image is missing its required src attribute"
	},{
		"selector": "form:not([enctype=\"fomr/multipart-data\"]) input[type=\"file\"]",
		"type": "error",
		"description": "This form does not have the necessary enctype attribute for input type=\"file\""
	}
]

var tests = [
	{
		"selector": "*[style]",
		"type": "warning",
		"description": "Try to avoid using the 'style' attribute a.k.a. 'inline style' - CSS should be your source of styling."
	},{
		"selector": "a[href=\"#\"]",
		"type": "warning",
		"description": "This anchor (&lt;a&gt;) has an 'href' attribute with a '#' as a value. Ideally, you should use a valid ID-ref URI as the 'href' value."
	},{
		"selector": "a[target]",
		"type": "warning",
		"max_doctype_version": 4,
		"description": "This anchor (&lt;a&gt;) has a 'target' attribute. Rather avoid opening new windows or targetting open windows.  If you really have to, you should use JS to add such functionality to new window links."
	},{
		"selector": "img[alt=\"\"]",
		"type": "warning",
		"description": "This image (&lt;img&gt;) is missing an 'alt' attribute value.  Specify an 'alt' attribute so that non-sighted users can understand what this image is trying to convey.  If this image is purely decorational, then consider applying this image via CSS."
	},{
		"selector": "img[height=\"\"], img:not([height])",
		"type": "warning",
		"description": "This image (&lt;img&gt;) is missing a 'height' attribute or attribute value.  Declaring a 'height' value will ensure content doesn't shift around while the image is loading."
	},{
		"selector": "img[width=\"\"], img:not([width])",
		"type": "warning",
		"description": "This image is missing a 'width' attribute or attribute value.  Declaring a 'width' value will ensure content doesn't shift around while the image is loading."
	},{
		"selector": "label[for=\"\"], label:not([for])",
		"type": "warning",
		"description": "You've used a label (&lt;label&gt;) here without specifying a 'for' attribute or attribute value.  Ideally, a label's 'for' attribute should be associated with a form field's ID."
	},{
		"selector": "b, big, center, hr, i, font, small, strike, u",
		"type": "warning",
		"description": "This element is considered a presentational element. Use the semantically preferred element and CSS to style rather than relying on the HTML to define the style here."
	}/*,{
		"selector": "blink, marquee",
		"type": "warning",
		"description": "1999 called.  They want their &lt;blink&gt; and &lt;marquee&gt; elements back."
	}*/,{
		"selector": "[align], *:not(img)[height], [valign], *:not(img)[width]",
		"type": "warning",
		"description": "This element contains a presentational attribute such as 'align' or 'width'.  These should be replaced with an appropriate CSS style rather."
	},{
		"selector": "input[type=\"button\"]",
		"type": "warning",
		"description": "This input type=button is dysfunctional without the use of JavaScript.  Consider using a submit button and handle the form data correctly."
	},{
		"selector": "input:not([type])",
		"type": "warning",
		"description": "This input element does not have a type attribute defined.  You should use the type attribute so that you can style it via CSS"
	},{
		"selector": "input[type=\"image\"][src]",
		"type": "warning",
		"description": "Image input types are costly to maintain, incur additional HTTP hits and need JS to function properly"
	},{
		"selector": "*[src=\"\"]",
		"type": "error",
		"description": "If you use a 'src' attribute, then it must contain a URL value."
	},{
		"selector": "*[title=\"\"]",
		"type": "error",
		"description": "If you use a 'title' attribute, then it must contain a value."
	},{
		"selector": "a[href=\"\"]",
		"type": "error",
		"description": "If you use a 'href' attribute, then it must contain a URL value."
	},{
		"selector": "abbr[title=\"\"], abbr:not([title])",
		"type": "error",
		"description": "Abbreviations (&lt;abbr&gt;) should always contain a 'title'."
	},{
		"selector": "acronym[title=\"\"], acronym:not([title])",
		"type": "error",
		"max_doctype_version": 4,
		"description": "Acronyms (&lt;acronym&gt;) should always contain a 'title'."
	},{
		"selector": "img:not([alt])",
		"type": "error",
		"description": "This image (&lt;img&gt;) is missing an 'alt' attribute or attribute value.  Specify an 'alt' attribute so that non-sighted users can understand what this image is trying to convey."
	},{
		"selector": "img:not([src])",
		"type": "error",
		"description": "This image (&lt;img&gt;) is missing a 'src' attribute.  Without a src attribute this image will not render appropriately."
	},{
		"selector": "form[action=\"\"], form:not([action])",
		"type": "error",
		"description": "This form (&lt;form&gt;) is missing an 'action' attribute or attribute value. Specify a valid URL as the 'action' attribute value so that the &t;form&gt; posts as normal."
	},{
		"selector": "form:not([enctype=\"fomr/multipart-data\"]) input[type=\"file\"]",
		"type": "error",
		"description": "This form does not have the necessary enctype attribute for input type=\"file\""
	},{
		"selector": "input[type=\"image\"]:not([src])",
		"type": "error",
		"description": "This input type=image is missing its required src attribute"
	}
]
