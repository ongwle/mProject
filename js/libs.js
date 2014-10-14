/* Modernizr 2.6.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-input-inputtypes-shiv-file_api-forms_placeholder
 */
;window.Modernizr=function(a,b,c){function u(a){i.cssText=a}function v(a,b){return u(prefixes.join(a+";")+(b||""))}function w(a,b){return typeof a===b}function x(a,b){return!!~(""+a).indexOf(b)}function y(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:w(f,"function")?f.bind(d||b):f}return!1}function z(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)o[c[d]]=c[d]in j;return o.list&&(o.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),o}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,g,h,i=a.length;d<i;d++)j.setAttribute("type",g=a[d]),e=j.type!=="text",e&&(j.value=k,j.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(g)&&j.style.WebkitAppearance!==c?(f.appendChild(j),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(j,null).WebkitAppearance!=="textfield"&&j.offsetHeight!==0,f.removeChild(j)):/^(search|tel)$/.test(g)||(/^(url|email)$/.test(g)?e=j.checkValidity&&j.checkValidity()===!1:e=j.value!=k)),n[a[d]]=!!e;return n}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.3",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j=b.createElement("input"),k=":)",l={}.toString,m={},n={},o={},p=[],q=p.slice,r,s={}.hasOwnProperty,t;!w(s,"undefined")&&!w(s.call,"undefined")?t=function(a,b){return s.call(a,b)}:t=function(a,b){return b in a&&w(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=q.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(q.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(q.call(arguments)))};return e});for(var A in m)t(m,A)&&(r=A.toLowerCase(),e[r]=m[A](),p.push((e[r]?"":"no-")+r));return e.input||z(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)t(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},u(""),h=j=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e}(this,this.document),Modernizr.addTest("filereader",function(){return!!(window.File&&window.FileList&&window.FileReader)}),Modernizr.addTest("placeholder",function(){return"placeholder"in(Modernizr.input||document.createElement("input"))&&"placeholder"in(Modernizr.textarea||document.createElement("textarea"))});
/*	SWFObject v2.2 <http://code.google.com/p/swfobject/>
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/

/*
	Watermark plugin for jQuery v1.1.1
	June 1, 2009

	Copyright (c) 2009 Todd Northrop
	http://www.speednet.biz/

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version, subject to the following conditions:

	The above copyright notice and this permission notice shall be
	included in all copies or substantial portions of the Software.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.
------------------------------------------------------*/

(function ($) {

// Will speed up references to undefined, and allows munging its name.
var undefined;

// String constants for data names
var	dataFlag = "watermark",
	dataText = "watermarkText",
	dataMaxLen = "watermarkMaxLength",
	dataClass = "watermarkClass",
	dataFocus = "watermarkFocus",
	dataFormSubmit = "watermarkSubmit";

// Includes only elements with watermark defined
var dataSelector = ":data(" + dataFlag + ")";

// Extends jQuery with a custom selector - ":data(...)"
// :data(<name>)  Includes elements that have a specific name defined in the jQuery data collection. (Only the existence of the name is checked; the value is ignored.)
// :data(<name>=<value>)  Includes elements that have a specific jQuery data name defined, with a specific value associated with it.
// :data(<name>!=<value>)  Includes elements that have a specific jQuery data name defined, with a value that is not equal to the value specified.
// :data(<name>^=<value>)  Includes elements that have a specific jQuery data name defined, with a value that starts with the value specified.
// :data(<name>$=<value>)  Includes elements that have a specific jQuery data name defined, with a value that ends with the value specified.
// :data(<name>*=<value>)  Includes elements that have a specific jQuery data name defined, with a value that contains the value specified.
$.extend($.expr[":"], {
	"data": function (element, index, matches, set) {
		var data, parts = /^((?:[^=!^$*]|[!^$*](?!=))+)(?:([!^$*]?=)(.*))?$/.exec(matches[3]);
		if (parts) {
			data = $(element).data(parts[1]);

			if (data !== undefined) {

				if (parts[2]) {
					data = "" + data;

					switch (parts[2]) {
						case "=":
							return (data == parts[3]);
						case "!=":
							return (data != parts[3]);
						case "^=":
							return (data.slice(0, parts[3].length) == parts[3]);
						case "$=":
							return (data.slice(-parts[3].length) == parts[3]);
						case "*=":
							return (data.indexOf(parts[3]) !== -1);
					}
				}

				return true;
			}
		}

		return false;
	}
});

$.watermark = {

	// Default class name for all watermarks
	className: "watermark",

	// Hide one or more watermarks by specifying any selector type
	// i.e., DOM element, string selector, jQuery matched set, etc.
	hide: function (selector) {
		$(selector).filter(dataSelector).each(
			function () {
				$.watermark._hide($(this));
			}
		);
	},

	// Internal use only.
	_hide: function ($input, focus) {

		if ($input.val() == $input.data(dataText)) {
			$input.val("");

			if (focus) {
				$input.attr("autocomplete", "off");  // Avoid NS_ERROR_XPC_JS_THREW_STRING error in Firefox
				$input.select();  // Fix missing cursor in IE
			}

			if ($input.data(dataMaxLen)) {
				$input.attr("maxLength", $input.data(dataMaxLen));
				$input.removeData(dataMaxLen);
			}
		}

		$input.removeClass($input.data(dataClass));
	},

	// Display one or more watermarks by specifying any selector type
	// i.e., DOM element, string selector, jQuery matched set, etc.
	// If conditions are not right for displaying a watermark, ensures that watermark is not shown.
	show: function (selector) {
		$(selector).filter(dataSelector).each(
			function () {
				$.watermark._show($(this));
			}
		);
	},

	// Internal use only.
	_show: function ($input) {
		var val = $input.val(), text = $input.data(dataText);

		if (((val.length == 0) || (val == text)) && (!$input.data(dataFocus))) {
			var maxLen = $input.attr("maxLength");

            // Ensure maxLength big enough to hold watermark
            if ((maxLen > 0) && (text.length > maxLen)) {
                $input.data(dataMaxLen, maxLen);
                $input.attr("maxLength", text.length);
            }

			$input.val(text);
			$input.addClass($input.data(dataClass));
		}
		else {
			$.watermark._hide($input);
		}
	},

	// Hides all watermarks on the current page.
	hideAll: function () {
		$.watermark.hide(":text");
	},

	// Displays all watermarks on the current page.
	showAll: function () {
		$.watermark.show(":text");
	}
};

$.fn.watermark = function (text, className) {
	///	<summary>
	///		Set watermark text and class name on all input elements of type="text" within the matched set.
	///		If className is not included, the default is "watermark". Within the matched set, only input
	///		elements with type="text" are affected; all other elements are ignored.
	///	</summary>
	///	<returns type="jQuery">
	///		Returns the original jQuery matched set (not just the input elements).
	/// </returns>
	///	<param name="text" type="String">
	///		Text to display as a watermark when the input element has an empty value and does not have focus.
	///		The first time watermark() is called on an element, if this argument is empty (or not a String type),
	///		then the watermark will have the net effect of only changing the class name when the input element's
	///		value is empty and it does not have focus.
	///	</param>
	///	<param name="className" type="String" optional="true">
	///		Provides the ability to override the default class name of "watermark" with the supplied class name.
	///	</param>
	/// <remarks>
	///		The effect of changing the text and class name on an input element is called a watermark because
	///		typically light gray text is used to provide a hint as to what type of input is required. However,
	///		the appearance of the watermark can be something completely different: simply change the CSS style
	///		pertaining to the supplied class name.
	///
	///		The first time watermark() is called on an element, the watermark text and class name are initialized,
	///		and the focus, blur, and change events are hooked in order to control the display of the watermark.
	///
	///		Subsequently, watermark() can be called again on an element in order to change the watermark text
	///		and/or class name, and it can also be called without any arguments in order to refresh the display.
	///
	///		For example, after changing the value of the input element programmatically, watermark() should be
	///		called without any arguments to refresh the display, because the change event is only triggered by
	///		user actions, not by programmatic changes to an input element's value.
	/// </remarks>

	var hasText = (typeof(text) === "string"), hasClass = (typeof(className) === "string");

	return this.filter(":text").each(
		function () {
			var $input = $(this);

			// Watermark already initialized?
			if ($input.data(dataFlag)) {

				// If re-defining text or class, first remove existing watermark, then make changes
				if (hasText || hasClass) {
					$.watermark._hide($input);

					if (hasText) {
						$input.data(dataText, text);
					}

					if (hasClass) {
						$input.data(dataClass, className);
					}
				}
			}
			else {
				$input.data(dataText, hasText? text : "");
				$input.data(dataClass, hasClass? className : $.watermark.className);
				$input.data(dataFlag, 1); // Flag indicates watermark was initialized
				$input.focus(
					function () {
						$input.data(dataFocus, 1);
						$.watermark._hide($input, true);
					}
				).blur(
					function () {
						$input.data(dataFocus, 0);
						$.watermark._show($input);
					}
				);
			}

			$.watermark._show($input);
		}
	).end();
};

})(jQuery);


/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(window, document, $) {

  var isInputSupported = 'placeholder' in document.createElement('input');
  var isTextareaSupported = 'placeholder' in document.createElement('textarea');
  var prototype = $.fn;
  var valHooks = $.valHooks;
  var propHooks = $.propHooks;
  var hooks;
  var placeholder;

  if (isInputSupported && isTextareaSupported) {

    placeholder = prototype.placeholder = function() {
      return this;
    };

    placeholder.input = placeholder.textarea = true;

  } else {

    placeholder = prototype.placeholder = function() {
      var $this = this;
      $this
        .filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
        .not('.placeholder')
        .bind({
          'focus.placeholder': clearPlaceholder,
          'blur.placeholder': setPlaceholder
        })
        .data('placeholder-enabled', true)
        .trigger('blur.placeholder');
      return $this;
    };

    placeholder.input = isInputSupported;
    placeholder.textarea = isTextareaSupported;

    hooks = {
      'get': function(element) {
        var $element = $(element);

        var $passwordInput = $element.data('placeholder-password');
        if ($passwordInput) {
          return $passwordInput[0].value;
        }

        return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
      },
      'set': function(element, value) {
        var $element = $(element);

        var $passwordInput = $element.data('placeholder-password');
        if ($passwordInput) {
          return $passwordInput[0].value = value;
        }

        if (!$element.data('placeholder-enabled')) {
          return element.value = value;
        }
        if (value == '') {
          element.value = value;
          // Issue #56: Setting the placeholder causes problems if the element continues to have focus.
          if (element != safeActiveElement()) {
            // We can't use `triggerHandler` here because of dummy text/password inputs :(
            setPlaceholder.call(element);
          }
        } else if ($element.hasClass('placeholder')) {
          clearPlaceholder.call(element, true, value) || (element.value = value);
        } else {
          element.value = value;
        }
        // `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
        return $element;
      }
    };

    if (!isInputSupported) {
      valHooks.input = hooks;
      propHooks.value = hooks;
    }
    if (!isTextareaSupported) {
      valHooks.textarea = hooks;
      propHooks.value = hooks;
    }

    $(function() {
      // Look for forms
      $(document).delegate('form', 'submit.placeholder', function() {
        // Clear the placeholder values so they don't get submitted
        var $inputs = $('.placeholder', this).each(clearPlaceholder);
        setTimeout(function() {
          $inputs.each(setPlaceholder);
        }, 10);
      });
    });

    // Clear placeholder values upon page reload
    $(window).bind('beforeunload.placeholder', function() {
      $('.placeholder').each(function() {
        this.value = '';
      });
    });

  }

  function args(elem) {
    // Return an object of element attributes
    var newAttrs = {};
    var rinlinejQuery = /^jQuery\d+$/;
    $.each(elem.attributes, function(i, attr) {
      if (attr.specified && !rinlinejQuery.test(attr.name)) {
        newAttrs[attr.name] = attr.value;
      }
    });
    return newAttrs;
  }

  function clearPlaceholder(event, value) {
    var input = this;
    var $input = $(input);
    if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
      if ($input.data('placeholder-password')) {
        $input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
        // If `clearPlaceholder` was called from `$.valHooks.input.set`
        if (event === true) {
          return $input[0].value = value;
        }
        $input.focus();
      } else {
        input.value = '';
        $input.removeClass('placeholder');
        input == safeActiveElement() && input.select();
      }
    }
  }

  function setPlaceholder() {
    var $replacement;
    var input = this;
    var $input = $(input);
    var id = this.id;
    if (input.value == '') {
      if (input.type == 'password') {
        if (!$input.data('placeholder-textinput')) {
          try {
            $replacement = $input.clone().attr({ 'type': 'text' });
          } catch(e) {
            $replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
          }
          $replacement
            .removeAttr('name')
            .data({
              'placeholder-password': $input,
              'placeholder-id': id
            })
            .bind('focus.placeholder', clearPlaceholder);
          $input
            .data({
              'placeholder-textinput': $replacement,
              'placeholder-id': id
            })
            .before($replacement);
        }
        $input = $input.removeAttr('id').hide().prev().attr('id', id).show();
        // Note: `$input[0] != input` now!
      }
      $input.addClass('placeholder');
      $input[0].value = $input.attr('placeholder');
    } else {
      $input.removeClass('placeholder');
    }
  }

  function safeActiveElement() {
    // Avoid IE9 `document.activeElement` of death
    // https://github.com/mathiasbynens/jquery-placeholder/pull/99
    try {
      return document.activeElement;
    } catch (err) {}
  }

}(this, document, jQuery));

var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
/**
 * Mega pixel image rendering library for iOS6 Safari
 *
 * Fixes iOS6 Safari's image file rendering issue for large size image (over mega-pixel),
 * which causes unexpected subsampling when drawing it in canvas.
 * By using this library, you can safely render the image with proper stretching.
 *
 * Copyright (c) 2012 Shinichi Tomita <shinichi.tomita@gmail.com>
 * Released under the MIT license
 */
(function() {

  /**
   * Detect subsampling in loaded image.
   * In iOS, larger images than 2M pixels may be subsampled in rendering.
   */
  function detectSubsampling(img) {
    var iw = img.naturalWidth, ih = img.naturalHeight;
    if (iw * ih > 1024 * 1024) { // subsampling may happen over megapixel image
      var canvas = document.createElement('canvas');
      canvas.width = canvas.height = 1;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, -iw + 1, 0);
      // subsampled image becomes half smaller in rendering size.
      // check alpha channel value to confirm image is covering edge pixel or not.
      // if alpha value is 0 image is not covering, hence subsampled.
      return ctx.getImageData(0, 0, 1, 1).data[3] === 0;
    } else {
      return false;
    }
  }

  /**
   * Detecting vertical squash in loaded image.
   * Fixes a bug which squash image vertically while drawing into canvas for some images.
   */
  function detectVerticalSquash(img, iw, ih) {
    var canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = ih;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    var data = ctx.getImageData(0, 0, 1, ih).data;
    // search image edge pixel position in case it is squashed vertically.
    var sy = 0;
    var ey = ih;
    var py = ih;
    while (py > sy) {
      var alpha = data[(py - 1) * 4 + 3];
      if (alpha === 0) {
        ey = py;
      } else {
        sy = py;
      }
      py = (ey + sy) >> 1;
    }
    var ratio = (py / ih);
    return (ratio===0)?1:ratio;
  }

  /**
   * Rendering image element (with resizing) and get its data URL
   */
  function renderImageToDataURL(img, options, doSquash) {
    var canvas = document.createElement('canvas');
    renderImageToCanvas(img, canvas, options, doSquash);
    return canvas.toDataURL("image/jpeg", options.quality || 0.8);
  }

  /**
   * Rendering image element (with resizing) into the canvas element
   */
  function renderImageToCanvas(img, canvas, options, doSquash) {
    var iw = img.naturalWidth, ih = img.naturalHeight;
    var width = options.width, height = options.height;
    var ctx = canvas.getContext('2d');
    ctx.save();
    transformCoordinate(canvas, width, height, options.orientation);
    var subsampled = detectSubsampling(img);
    if (subsampled) {
      iw /= 2;
      ih /= 2;
    }
    var d = 1024; // size of tiling canvas
    var tmpCanvas = document.createElement('canvas');
    tmpCanvas.width = tmpCanvas.height = d;
    var tmpCtx = tmpCanvas.getContext('2d');
    var vertSquashRatio = doSquash ? detectVerticalSquash(img, iw, ih) : 1;
    var dw = Math.ceil(d * width / iw);
    var dh = Math.ceil(d * height / ih / vertSquashRatio);
    var sy = 0;
    var dy = 0;
    while (sy < ih) {
      var sx = 0;
      var dx = 0;
      while (sx < iw) {
        tmpCtx.clearRect(0, 0, d, d);
        tmpCtx.drawImage(img, -sx, -sy);
        ctx.drawImage(tmpCanvas, 0, 0, d, d, dx, dy, dw, dh);
        sx += d;
        dx += dw;
      }
      sy += d;
      dy += dh;
    }
    ctx.restore();
    tmpCanvas = tmpCtx = null;
  }

  /**
   * Transform canvas coordination according to specified frame size and orientation
   * Orientation value is from EXIF tag
   */
  function transformCoordinate(canvas, width, height, orientation) {
    switch (orientation) {
      case 5:
      case 6:
      case 7:
      case 8:
        canvas.width = height;
        canvas.height = width;
        break;
      default:
        canvas.width = width;
        canvas.height = height;
    }
    var ctx = canvas.getContext('2d');
    switch (orientation) {
      case 2:
        // horizontal flip
        ctx.translate(width, 0);
        ctx.scale(-1, 1);
        break;
      case 3:
        // 180 rotate left
        ctx.translate(width, height);
        ctx.rotate(Math.PI);
        break;
      case 4:
        // vertical flip
        ctx.translate(0, height);
        ctx.scale(1, -1);
        break;
      case 5:
        // vertical flip + 90 rotate right
        ctx.rotate(0.5 * Math.PI);
        ctx.scale(1, -1);
        break;
      case 6:
        // 90 rotate right
        ctx.rotate(0.5 * Math.PI);
        ctx.translate(0, -height);
        break;
      case 7:
        // horizontal flip + 90 rotate right
        ctx.rotate(0.5 * Math.PI);
        ctx.translate(width, -height);
        ctx.scale(-1, 1);
        break;
      case 8:
        // 90 rotate left
        ctx.rotate(-0.5 * Math.PI);
        ctx.translate(-width, 0);
        break;
      default:
        break;
    }
  }


  /**
   * MegaPixImage class
   */
  function MegaPixImage(srcImage) {
    if (window.Blob && srcImage instanceof Blob) {
      var img = new Image();
      var URL = window.URL && window.URL.createObjectURL ? window.URL :
                window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL :
                null;
      if (!URL) { throw Error("No createObjectURL function found to create blob url"); }
      img.src = URL.createObjectURL(srcImage);
      this.blob = srcImage;
      srcImage = img;
    }
    if (!srcImage.naturalWidth && !srcImage.naturalHeight) {
      var _this = this;
      srcImage.onload = function() {
        var listeners = _this.imageLoadListeners;
        if (listeners) {
          _this.imageLoadListeners = null;
          for (var i=0, len=listeners.length; i<len; i++) {
            listeners[i]();
          }
        }
      };
      this.imageLoadListeners = [];
    }
    this.srcImage = srcImage;
  }

  /**
   * Rendering megapix image into specified target element
   */
  MegaPixImage.prototype.render = function(target, options) {
    if (this.imageLoadListeners) {
      var _this = this;
      this.imageLoadListeners.push(function() { _this.render(target, options) });
      return;
    }
    options = options || {};
    var imgWidth = this.srcImage.naturalWidth, imgHeight = this.srcImage.naturalHeight,
        width = options.width, height = options.height,
        maxWidth = options.maxWidth, maxHeight = options.maxHeight,
        doSquash = !this.blob || this.blob.type === 'image/jpeg';
    if (width && !height) {
      height = (imgHeight * width / imgWidth) << 0;
    } else if (height && !width) {
      width = (imgWidth * height / imgHeight) << 0;
    } else {
      width = imgWidth;
      height = imgHeight;
    }
    if (maxWidth && width > maxWidth) {
      width = maxWidth;
      height = (imgHeight * width / imgWidth) << 0;
    }
    if (maxHeight && height > maxHeight) {
      height = maxHeight;
      width = (imgWidth * height / imgHeight) << 0;
    }
    var opt = { width : width, height : height };
    for (var k in options) opt[k] = options[k];

    var tagName = target.tagName.toLowerCase();
    if (tagName === 'img') {
      target.src = renderImageToDataURL(this.srcImage, opt, doSquash);
    } else if (tagName === 'canvas') {
      renderImageToCanvas(this.srcImage, target, opt, doSquash);
    }
    if (typeof this.onrender === 'function') {
      this.onrender(target);
    }
  };

  /**
   * Export class to global
   */
  if (typeof define === 'function' && define.amd) {
    define([], function() { return MegaPixImage; }); // for AMD loader
  } else {
    this.MegaPixImage = MegaPixImage;
  }

})();



/*
 * Binary Ajax 0.1.10
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * Licensed under the MPL License [http://www.nihilogic.dk/licenses/mpl-license.txt]
 */

var BinaryFile = function(strData, iDataOffset, iDataLength) {
	var data = strData;
	var dataOffset = iDataOffset || 0;
	var dataLength = 0;

	this.getRawData = function() {
		return data;
	}

	if (typeof strData == "string") {
		dataLength = iDataLength || data.length;

		this.getByteAt = function(iOffset) {
			return data.charCodeAt(iOffset + dataOffset) & 0xFF;
		}

		this.getBytesAt = function(iOffset, iLength) {
			var aBytes = [];

			for (var i = 0; i < iLength; i++) {
				aBytes[i] = data.charCodeAt((iOffset + i) + dataOffset) & 0xFF
			};

			return aBytes;
		}
	} else if (typeof strData == "unknown") {
		dataLength = iDataLength || IEBinary_getLength(data);

		this.getByteAt = function(iOffset) {
			return IEBinary_getByteAt(data, iOffset + dataOffset);
		}

		this.getBytesAt = function(iOffset, iLength) {
			return new VBArray(IEBinary_getBytesAt(data, iOffset + dataOffset, iLength)).toArray();
		}
	}

	this.getLength = function() {
		return dataLength;
	}

	this.getSByteAt = function(iOffset) {
		var iByte = this.getByteAt(iOffset);
		if (iByte > 127)
			return iByte - 256;
		else
			return iByte;
	}

	this.getShortAt = function(iOffset, bBigEndian) {
		var iShort = bBigEndian ?
			(this.getByteAt(iOffset) << 8) + this.getByteAt(iOffset + 1)
			: (this.getByteAt(iOffset + 1) << 8) + this.getByteAt(iOffset)
		if (iShort < 0) iShort += 65536;
		return iShort;
	}
	this.getSShortAt = function(iOffset, bBigEndian) {
		var iUShort = this.getShortAt(iOffset, bBigEndian);
		if (iUShort > 32767)
			return iUShort - 65536;
		else
			return iUShort;
	}
	this.getLongAt = function(iOffset, bBigEndian) {
		var iByte1 = this.getByteAt(iOffset),
			iByte2 = this.getByteAt(iOffset + 1),
			iByte3 = this.getByteAt(iOffset + 2),
			iByte4 = this.getByteAt(iOffset + 3);

		var iLong = bBigEndian ?
			(((((iByte1 << 8) + iByte2) << 8) + iByte3) << 8) + iByte4
			: (((((iByte4 << 8) + iByte3) << 8) + iByte2) << 8) + iByte1;
		if (iLong < 0) iLong += 4294967296;
		return iLong;
	}
	this.getSLongAt = function(iOffset, bBigEndian) {
		var iULong = this.getLongAt(iOffset, bBigEndian);
		if (iULong > 2147483647)
			return iULong - 4294967296;
		else
			return iULong;
	}

	this.getStringAt = function(iOffset, iLength) {
		var aStr = [];

		var aBytes = this.getBytesAt(iOffset, iLength);
		for (var j=0; j < iLength; j++) {
			aStr[j] = String.fromCharCode(aBytes[j]);
		}
		return aStr.join("");
	}

	this.getCharAt = function(iOffset) {
		return String.fromCharCode(this.getByteAt(iOffset));
	}
	this.toBase64 = function() {
		return window.btoa(data);
	}
	this.fromBase64 = function(strBase64) {
		data = window.atob(strBase64);
	}
}


var BinaryAjax = (function() {

	function createRequest() {
		var oHTTP = null;
		if (window.ActiveXObject) {
			oHTTP = new ActiveXObject("Microsoft.XMLHTTP");
		} else if (window.XMLHttpRequest) {
			oHTTP = new XMLHttpRequest();
		}
		return oHTTP;
	}

	function getHead(strURL, fncCallback, fncError) {
		var oHTTP = createRequest();
		if (oHTTP) {
			if (fncCallback) {
				if (typeof(oHTTP.onload) != "undefined") {
					oHTTP.onload = function() {
						if (oHTTP.status == "200") {
							fncCallback(this);
						} else {
							if (fncError) fncError();
						}
						oHTTP = null;
					};
				} else {
					oHTTP.onreadystatechange = function() {
						if (oHTTP.readyState == 4) {
							if (oHTTP.status == "200") {
								fncCallback(this);
							} else {
								if (fncError) fncError();
							}
							oHTTP = null;
						}
					};
				}
			}
			oHTTP.open("HEAD", strURL, true);
			oHTTP.send(null);
		} else {
			if (fncError) fncError();
		}
	}

	function sendRequest(strURL, fncCallback, fncError, aRange, bAcceptRanges, iFileSize) {
		var oHTTP = createRequest();
		if (oHTTP) {

			var iDataOffset = 0;
			if (aRange && !bAcceptRanges) {
				iDataOffset = aRange[0];
			}
			var iDataLen = 0;
			if (aRange) {
				iDataLen = aRange[1]-aRange[0]+1;
			}

			if (fncCallback) {
				if (typeof(oHTTP.onload) != "undefined") {
					oHTTP.onload = function() {
						if (oHTTP.status == "200" || oHTTP.status == "206" || oHTTP.status == "0") {
							oHTTP.binaryResponse = new BinaryFile(oHTTP.responseText, iDataOffset, iDataLen);
							oHTTP.fileSize = iFileSize || oHTTP.getResponseHeader("Content-Length");
							fncCallback(oHTTP);
						} else {
							if (fncError) fncError();
						}
						oHTTP = null;
					};
				} else {
					oHTTP.onreadystatechange = function() {
						if (oHTTP.readyState == 4) {
							if (oHTTP.status == "200" || oHTTP.status == "206" || oHTTP.status == "0") {
								// IE6 craps if we try to extend the XHR object
								var oRes = {
									status : oHTTP.status,
									// IE needs responseBody, Chrome/Safari needs responseText
									binaryResponse : new BinaryFile(
										typeof oHTTP.responseBody == "unknown" ? oHTTP.responseBody : oHTTP.responseText, iDataOffset, iDataLen
									),
									fileSize : iFileSize || oHTTP.getResponseHeader("Content-Length")
								};
								fncCallback(oRes);
							} else {
								if (fncError) fncError();
							}
							oHTTP = null;
						}
					};
				}
			}
			oHTTP.open("GET", strURL, true);

			if (oHTTP.overrideMimeType) oHTTP.overrideMimeType('text/plain; charset=x-user-defined');

			if (aRange && bAcceptRanges) {
				oHTTP.setRequestHeader("Range", "bytes=" + aRange[0] + "-" + aRange[1]);
			}

			oHTTP.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 1970 00:00:00 GMT");

			oHTTP.send(null);
		} else {
			if (fncError) fncError();
		}
	}

	return function(strURL, fncCallback, fncError, aRange) {

		if (aRange) {
			getHead(
				strURL,
				function(oHTTP) {
					var iLength = parseInt(oHTTP.getResponseHeader("Content-Length"),10);
					var strAcceptRanges = oHTTP.getResponseHeader("Accept-Ranges");

					var iStart, iEnd;
					iStart = aRange[0];
					if (aRange[0] < 0)
						iStart += iLength;
					iEnd = iStart + aRange[1] - 1;

					sendRequest(strURL, fncCallback, fncError, [iStart, iEnd], (strAcceptRanges == "bytes"), iLength);
				}
			);

		} else {
			sendRequest(strURL, fncCallback, fncError);
		}
	}

}());

/*
document.write(
	"<script type='text/vbscript'>\r\n"
	+ "Function IEBinary_getByteAt(strBinary, iOffset)\r\n"
	+ "	IEBinary_getByteAt = AscB(MidB(strBinary,iOffset+1,1))\r\n"
	+ "End Function\r\n"
	+ "Function IEBinary_getLength(strBinary)\r\n"
	+ "	IEBinary_getLength = LenB(strBinary)\r\n"
	+ "End Function\r\n"
	+ "</script>\r\n"
);
*/

document.write(
	"<script type='text/vbscript'>\r\n"
	+ "Function IEBinary_getByteAt(strBinary, iOffset)\r\n"
	+ "	IEBinary_getByteAt = AscB(MidB(strBinary, iOffset + 1, 1))\r\n"
	+ "End Function\r\n"
	+ "Function IEBinary_getBytesAt(strBinary, iOffset, iLength)\r\n"
	+ "  Dim aBytes()\r\n"
	+ "  ReDim aBytes(iLength - 1)\r\n"
	+ "  For i = 0 To iLength - 1\r\n"
	+ "   aBytes(i) = IEBinary_getByteAt(strBinary, iOffset + i)\r\n"
	+ "  Next\r\n"
	+ "  IEBinary_getBytesAt = aBytes\r\n"
	+ "End Function\r\n"
	+ "Function IEBinary_getLength(strBinary)\r\n"
	+ "	IEBinary_getLength = LenB(strBinary)\r\n"
	+ "End Function\r\n"
	+ "</script>\r\n"
);


/*
 * Javascript EXIF Reader 0.1.6
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * Licensed under the MPL License [http://www.nihilogic.dk/licenses/mpl-license.txt]
 */


var EXIF = (function() {

    var debug = false;

    var ExifTags = {

        // version tags
        0x9000 : "ExifVersion",			// EXIF version
        0xA000 : "FlashpixVersion",		// Flashpix format version

        // colorspace tags
        0xA001 : "ColorSpace",			// Color space information tag

        // image configuration
        0xA002 : "PixelXDimension",		// Valid width of meaningful image
        0xA003 : "PixelYDimension",		// Valid height of meaningful image
        0x9101 : "ComponentsConfiguration",	// Information about channels
        0x9102 : "CompressedBitsPerPixel",	// Compressed bits per pixel

        // user information
        0x927C : "MakerNote",			// Any desired information written by the manufacturer
        0x9286 : "UserComment",			// Comments by user

        // related file
        0xA004 : "RelatedSoundFile",		// Name of related sound file

        // date and time
        0x9003 : "DateTimeOriginal",		// Date and time when the original image was generated
        0x9004 : "DateTimeDigitized",		// Date and time when the image was stored digitally
        0x9290 : "SubsecTime",			// Fractions of seconds for DateTime
        0x9291 : "SubsecTimeOriginal",		// Fractions of seconds for DateTimeOriginal
        0x9292 : "SubsecTimeDigitized",		// Fractions of seconds for DateTimeDigitized

        // picture-taking conditions
        0x829A : "ExposureTime",		// Exposure time (in seconds)
        0x829D : "FNumber",			// F number
        0x8822 : "ExposureProgram",		// Exposure program
        0x8824 : "SpectralSensitivity",		// Spectral sensitivity
        0x8827 : "ISOSpeedRatings",		// ISO speed rating
        0x8828 : "OECF",			// Optoelectric conversion factor
        0x9201 : "ShutterSpeedValue",		// Shutter speed
        0x9202 : "ApertureValue",		// Lens aperture
        0x9203 : "BrightnessValue",		// Value of brightness
        0x9204 : "ExposureBias",		// Exposure bias
        0x9205 : "MaxApertureValue",		// Smallest F number of lens
        0x9206 : "SubjectDistance",		// Distance to subject in meters
        0x9207 : "MeteringMode", 		// Metering mode
        0x9208 : "LightSource",			// Kind of light source
        0x9209 : "Flash",			// Flash status
        0x9214 : "SubjectArea",			// Location and area of main subject
        0x920A : "FocalLength",			// Focal length of the lens in mm
        0xA20B : "FlashEnergy",			// Strobe energy in BCPS
        0xA20C : "SpatialFrequencyResponse",	//
        0xA20E : "FocalPlaneXResolution", 	// Number of pixels in width direction per FocalPlaneResolutionUnit
        0xA20F : "FocalPlaneYResolution", 	// Number of pixels in height direction per FocalPlaneResolutionUnit
        0xA210 : "FocalPlaneResolutionUnit", 	// Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution
        0xA214 : "SubjectLocation",		// Location of subject in image
        0xA215 : "ExposureIndex",		// Exposure index selected on camera
        0xA217 : "SensingMethod", 		// Image sensor type
        0xA300 : "FileSource", 			// Image source (3 == DSC)
        0xA301 : "SceneType", 			// Scene type (1 == directly photographed)
        0xA302 : "CFAPattern",			// Color filter array geometric pattern
        0xA401 : "CustomRendered",		// Special processing
        0xA402 : "ExposureMode",		// Exposure mode
        0xA403 : "WhiteBalance",		// 1 = auto white balance, 2 = manual
        0xA404 : "DigitalZoomRation",		// Digital zoom ratio
        0xA405 : "FocalLengthIn35mmFilm",	// Equivalent foacl length assuming 35mm film camera (in mm)
        0xA406 : "SceneCaptureType",		// Type of scene
        0xA407 : "GainControl",			// Degree of overall image gain adjustment
        0xA408 : "Contrast",			// Direction of contrast processing applied by camera
        0xA409 : "Saturation", 			// Direction of saturation processing applied by camera
        0xA40A : "Sharpness",			// Direction of sharpness processing applied by camera
        0xA40B : "DeviceSettingDescription",	//
        0xA40C : "SubjectDistanceRange",	// Distance to subject

        // other tags
        0xA005 : "InteroperabilityIFDPointer",
        0xA420 : "ImageUniqueID"		// Identifier assigned uniquely to each image
    };

    var TiffTags = {
        0x0100 : "ImageWidth",
        0x0101 : "ImageHeight",
        0x8769 : "ExifIFDPointer",
        0x8825 : "GPSInfoIFDPointer",
        0xA005 : "InteroperabilityIFDPointer",
        0x0102 : "BitsPerSample",
        0x0103 : "Compression",
        0x0106 : "PhotometricInterpretation",
        0x0112 : "Orientation",
        0x0115 : "SamplesPerPixel",
        0x011C : "PlanarConfiguration",
        0x0212 : "YCbCrSubSampling",
        0x0213 : "YCbCrPositioning",
        0x011A : "XResolution",
        0x011B : "YResolution",
        0x0128 : "ResolutionUnit",
        0x0111 : "StripOffsets",
        0x0116 : "RowsPerStrip",
        0x0117 : "StripByteCounts",
        0x0201 : "JPEGInterchangeFormat",
        0x0202 : "JPEGInterchangeFormatLength",
        0x012D : "TransferFunction",
        0x013E : "WhitePoint",
        0x013F : "PrimaryChromaticities",
        0x0211 : "YCbCrCoefficients",
        0x0214 : "ReferenceBlackWhite",
        0x0132 : "DateTime",
        0x010E : "ImageDescription",
        0x010F : "Make",
        0x0110 : "Model",
        0x0131 : "Software",
        0x013B : "Artist",
        0x8298 : "Copyright"
    };

    var GPSTags = {
        0x0000 : "GPSVersionID",
        0x0001 : "GPSLatitudeRef",
        0x0002 : "GPSLatitude",
        0x0003 : "GPSLongitudeRef",
        0x0004 : "GPSLongitude",
        0x0005 : "GPSAltitudeRef",
        0x0006 : "GPSAltitude",
        0x0007 : "GPSTimeStamp",
        0x0008 : "GPSSatellites",
        0x0009 : "GPSStatus",
        0x000A : "GPSMeasureMode",
        0x000B : "GPSDOP",
        0x000C : "GPSSpeedRef",
        0x000D : "GPSSpeed",
        0x000E : "GPSTrackRef",
        0x000F : "GPSTrack",
        0x0010 : "GPSImgDirectionRef",
        0x0011 : "GPSImgDirection",
        0x0012 : "GPSMapDatum",
        0x0013 : "GPSDestLatitudeRef",
        0x0014 : "GPSDestLatitude",
        0x0015 : "GPSDestLongitudeRef",
        0x0016 : "GPSDestLongitude",
        0x0017 : "GPSDestBearingRef",
        0x0018 : "GPSDestBearing",
        0x0019 : "GPSDestDistanceRef",
        0x001A : "GPSDestDistance",
        0x001B : "GPSProcessingMethod",
        0x001C : "GPSAreaInformation",
        0x001D : "GPSDateStamp",
        0x001E : "GPSDifferential"
    };

    var StringValues = {
        ExposureProgram : {
            0 : "Not defined",
            1 : "Manual",
            2 : "Normal program",
            3 : "Aperture priority",
            4 : "Shutter priority",
            5 : "Creative program",
            6 : "Action program",
            7 : "Portrait mode",
            8 : "Landscape mode"
        },
        MeteringMode : {
            0 : "Unknown",
            1 : "Average",
            2 : "CenterWeightedAverage",
            3 : "Spot",
            4 : "MultiSpot",
            5 : "Pattern",
            6 : "Partial",
            255 : "Other"
        },
        LightSource : {
            0 : "Unknown",
            1 : "Daylight",
            2 : "Fluorescent",
            3 : "Tungsten (incandescent light)",
            4 : "Flash",
            9 : "Fine weather",
            10 : "Cloudy weather",
            11 : "Shade",
            12 : "Daylight fluorescent (D 5700 - 7100K)",
            13 : "Day white fluorescent (N 4600 - 5400K)",
            14 : "Cool white fluorescent (W 3900 - 4500K)",
            15 : "White fluorescent (WW 3200 - 3700K)",
            17 : "Standard light A",
            18 : "Standard light B",
            19 : "Standard light C",
            20 : "D55",
            21 : "D65",
            22 : "D75",
            23 : "D50",
            24 : "ISO studio tungsten",
            255 : "Other"
        },
        Flash : {
            0x0000 : "Flash did not fire",
            0x0001 : "Flash fired",
            0x0005 : "Strobe return light not detected",
            0x0007 : "Strobe return light detected",
            0x0009 : "Flash fired, compulsory flash mode",
            0x000D : "Flash fired, compulsory flash mode, return light not detected",
            0x000F : "Flash fired, compulsory flash mode, return light detected",
            0x0010 : "Flash did not fire, compulsory flash mode",
            0x0018 : "Flash did not fire, auto mode",
            0x0019 : "Flash fired, auto mode",
            0x001D : "Flash fired, auto mode, return light not detected",
            0x001F : "Flash fired, auto mode, return light detected",
            0x0020 : "No flash function",
            0x0041 : "Flash fired, red-eye reduction mode",
            0x0045 : "Flash fired, red-eye reduction mode, return light not detected",
            0x0047 : "Flash fired, red-eye reduction mode, return light detected",
            0x0049 : "Flash fired, compulsory flash mode, red-eye reduction mode",
            0x004D : "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
            0x004F : "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
            0x0059 : "Flash fired, auto mode, red-eye reduction mode",
            0x005D : "Flash fired, auto mode, return light not detected, red-eye reduction mode",
            0x005F : "Flash fired, auto mode, return light detected, red-eye reduction mode"
        },
        SensingMethod : {
            1 : "Not defined",
            2 : "One-chip color area sensor",
            3 : "Two-chip color area sensor",
            4 : "Three-chip color area sensor",
            5 : "Color sequential area sensor",
            7 : "Trilinear sensor",
            8 : "Color sequential linear sensor"
        },
        SceneCaptureType : {
            0 : "Standard",
            1 : "Landscape",
            2 : "Portrait",
            3 : "Night scene"
        },
        SceneType : {
            1 : "Directly photographed"
        },
        CustomRendered : {
            0 : "Normal process",
            1 : "Custom process"
        },
        WhiteBalance : {
            0 : "Auto white balance",
            1 : "Manual white balance"
        },
        GainControl : {
            0 : "None",
            1 : "Low gain up",
            2 : "High gain up",
            3 : "Low gain down",
            4 : "High gain down"
        },
        Contrast : {
            0 : "Normal",
            1 : "Soft",
            2 : "Hard"
        },
        Saturation : {
            0 : "Normal",
            1 : "Low saturation",
            2 : "High saturation"
        },
        Sharpness : {
            0 : "Normal",
            1 : "Soft",
            2 : "Hard"
        },
        SubjectDistanceRange : {
            0 : "Unknown",
            1 : "Macro",
            2 : "Close view",
            3 : "Distant view"
        },
        FileSource : {
            3 : "DSC"
        },

        Components : {
            0 : "",
            1 : "Y",
            2 : "Cb",
            3 : "Cr",
            4 : "R",
            5 : "G",
            6 : "B"
        }
    };

    function addEvent(element, event, handler) {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + event, handler);
        }
    }

    function imageHasData(img) {
        return !!(img.exifdata);
    }

    function getImageData(img, callback) {
        function handleBinaryFile(binFile) {
            var data = findEXIFinJPEG(binFile);
            img.exifdata = data || {};
            if (callback) {
                callback.call(img)
            }
        }

        if (img instanceof Image) {
            BinaryAjax(img.src, function(http) {
                handleBinaryFile(http.binaryResponse);
            });
        } else if (window.FileReader && img instanceof window.File) {
            var fileReader = new FileReader();

            fileReader.onload = function(e) {
                handleBinaryFile(new BinaryFile(e.target.result));
            };
            try{
            	fileReader.readAsBinaryString(img);
            }catch(e){
            	fileReader.readAsArrayBuffer(img);
            }

        }
    }

    function findEXIFinJPEG(file) {
        if (file.getByteAt(0) != 0xFF || file.getByteAt(1) != 0xD8) {
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.getLength(),
            marker;

        while (offset < length) {
            if (file.getByteAt(offset) != 0xFF) {
                if (debug) console.log("Not a valid marker at offset " + offset + ", found: " + file.getByteAt(offset));
                return false; // not a valid marker, something is wrong
            }

            marker = file.getByteAt(offset+1);

            // we could implement handling for other markers here,
            // but we're only looking for 0xFFE1 for EXIF data

            if (marker == 22400) {
                if (debug) console.log("Found 0xFFE1 marker");

                return readEXIFData(file, offset + 4, file.getShortAt(offset+2, true)-2);

                // offset += 2 + file.getShortAt(offset+2, true);

            } else if (marker == 225) {
                // 0xE1 = Application-specific 1 (for EXIF)
                if (debug) console.log("Found 0xFFE1 marker");

                return readEXIFData(file, offset + 4, file.getShortAt(offset+2, true)-2);

            } else {
                offset += 2 + file.getShortAt(offset+2, true);
            }

        }

    }


    function readTags(file, tiffStart, dirStart, strings, bigEnd) {
        var entries = file.getShortAt(dirStart, bigEnd),
            tags = {},
            entryOffset, tag,
            i;

        for (i=0;i<entries;i++) {
            entryOffset = dirStart + i*12 + 2;
            tag = strings[file.getShortAt(entryOffset, bigEnd)];
            if (!tag && debug) console.log("Unknown tag: " + file.getShortAt(entryOffset, bigEnd));
            tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
        }
        return tags;
    }


    function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {
        var type = file.getShortAt(entryOffset+2, bigEnd),
            numValues = file.getLongAt(entryOffset+4, bigEnd),
            valueOffset = file.getLongAt(entryOffset+8, bigEnd) + tiffStart,
            offset,
            vals, val, n,
            numerator, denominator;

        switch (type) {
            case 1: // byte, 8-bit unsigned int
            case 7: // undefined, 8-bit byte, value depending on field
                if (numValues == 1) {
                    return file.getByteAt(entryOffset + 8, bigEnd);
                } else {
                    offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getByteAt(offset + n);
                    }
                    return vals;
                }

            case 2: // ascii, 8-bit byte
                offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                return file.getStringAt(offset, numValues-1);

            case 3: // short, 16 bit int
                if (numValues == 1) {
                    return file.getShortAt(entryOffset + 8, bigEnd);
                } else {
                    offset = numValues > 2 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getShortAt(offset + 2*n, bigEnd);
                    }
                    return vals;
                }

            case 4: // long, 32 bit int
                if (numValues == 1) {
                    return file.getLongAt(entryOffset + 8, bigEnd);
                } else {
                    vals = [];
                    for (var n=0;n<numValues;n++) {
                        vals[n] = file.getLongAt(valueOffset + 4*n, bigEnd);
                    }
                    return vals;
                }

            case 5:	// rational = two long values, first is numerator, second is denominator
                if (numValues == 1) {
                    numerator = file.getLongAt(valueOffset, bigEnd);
                    denominator = file.getLongAt(valueOffset+4, bigEnd);
                    val = new Number(numerator / denominator);
                    val.numerator = numerator;
                    val.denominator = denominator;
                    return val;
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        numerator = file.getLongAt(valueOffset + 8*n, bigEnd);
                        denominator = file.getLongAt(valueOffset+4 + 8*n, bigEnd);
                        vals[n] = new Number(numerator / denominator);
                        vals[n].numerator = numerator;
                        vals[n].denominator = denominator;
                    }
                    return vals;
                }

            case 9: // slong, 32 bit signed int
                if (numValues == 1) {
                    return file.getSLongAt(entryOffset + 8, bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getSLongAt(valueOffset + 4*n, bigEnd);
                    }
                    return vals;
                }

            case 10: // signed rational, two slongs, first is numerator, second is denominator
                if (numValues == 1) {
                    return file.getSLongAt(valueOffset, bigEnd) / file.getSLongAt(valueOffset+4, bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getSLongAt(valueOffset + 8*n, bigEnd) / file.getSLongAt(valueOffset+4 + 8*n, bigEnd);
                    }
                    return vals;
                }
        }
    }


    function readEXIFData(file, start) {
        if (file.getStringAt(start, 4) != "Exif") {
            if (debug) console.log("Not valid EXIF data! " + file.getStringAt(start, 4));
            return false;
        }

        var bigEnd,
            tags, tag,
            exifData, gpsData,
            tiffOffset = start + 6;

        // test for TIFF validity and endianness
        if (file.getShortAt(tiffOffset) == 0x4949) {
            bigEnd = false;
        } else if (file.getShortAt(tiffOffset) == 0x4D4D) {
            bigEnd = true;
        } else {
            if (debug) console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
            return false;
        }

        if (file.getShortAt(tiffOffset+2, bigEnd) != 0x002A) {
            if (debug) console.log("Not valid TIFF data! (no 0x002A)");
            return false;
        }

        if (file.getLongAt(tiffOffset+4, bigEnd) != 0x00000008) {
            if (debug) console.log("Not valid TIFF data! (First offset not 8)", file.getShortAt(tiffOffset+4, bigEnd));
            return false;
        }

        tags = readTags(file, tiffOffset, tiffOffset+8, TiffTags, bigEnd);

        if (tags.ExifIFDPointer) {
            exifData = readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, ExifTags, bigEnd);
            for (tag in exifData) {
                switch (tag) {
                    case "LightSource" :
                    case "Flash" :
                    case "MeteringMode" :
                    case "ExposureProgram" :
                    case "SensingMethod" :
                    case "SceneCaptureType" :
                    case "SceneType" :
                    case "CustomRendered" :
                    case "WhiteBalance" :
                    case "GainControl" :
                    case "Contrast" :
                    case "Saturation" :
                    case "Sharpness" :
                    case "SubjectDistanceRange" :
                    case "FileSource" :
                        exifData[tag] = StringValues[tag][exifData[tag]];
                        break;

                    case "ExifVersion" :
                    case "FlashpixVersion" :
                        exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
                        break;

                    case "ComponentsConfiguration" :
                        exifData[tag] =
                            StringValues.Components[exifData[tag][0]]
                            + StringValues.Components[exifData[tag][1]]
                            + StringValues.Components[exifData[tag][2]]
                            + StringValues.Components[exifData[tag][3]];
                        break;
                }
                tags[tag] = exifData[tag];
            }
        }

        if (tags.GPSInfoIFDPointer) {
            gpsData = readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, GPSTags, bigEnd);
            for (tag in gpsData) {
                switch (tag) {
                    case "GPSVersionID" :
                        gpsData[tag] = gpsData[tag][0]
                            + "." + gpsData[tag][1]
                            + "." + gpsData[tag][2]
                            + "." + gpsData[tag][3];
                        break;
                }
                tags[tag] = gpsData[tag];
            }
        }

        return tags;
    }


    function getData(img, callback) {
        if (img instanceof Image && !img.complete) return false;
        if (!imageHasData(img)) {
            getImageData(img, callback);
        } else {
            if (callback) {
                callback.call(img);
            }
        }
        return true;
    }

    function getTag(img, tag) {
        if (!imageHasData(img)) return;
        return img.exifdata[tag];
    }

    function getAllTags(img) {
        if (!imageHasData(img)) return {};
        var a,
            data = img.exifdata,
            tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    }

    function pretty(img) {
        if (!imageHasData(img)) return "";
        var a,
            data = img.exifdata,
            strPretty = "";
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                if (typeof data[a] == "object") {
                    if (data[a] instanceof Number) {
                        strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n";
                    } else {
                        strPretty += a + " : [" + data[a].length + " values]\r\n";
                    }
                } else {
                    strPretty += a + " : " + data[a] + "\r\n";
                }
            }
        }
        return strPretty;
    }

    function readFromBinaryFile(file) {
        return findEXIFinJPEG(file);
    }


    return {
        readFromBinaryFile : readFromBinaryFile,
        pretty : pretty,
        getTag : getTag,
        getAllTags : getAllTags,
        getData : getData,

        Tags : ExifTags,
        TiffTags : TiffTags,
        GPSTags : GPSTags,
        StringValues : StringValues
    };

})();

/*
	Fabric js
*/
/* build: `node build.js modules=ALL exclude=gestures` *//*! Fabric.js Copyright 2008-2013, Printio (Juriy Zaytsev, Maxim Chernyak) */var exports=exports||{},fabric=fabric||{version:"1.3.0"};exports.fabric=fabric,typeof document!="undefined"&&typeof window!="undefined"?(fabric.document=document,fabric.window=window):(fabric.document=require("jsdom").jsdom("<!DOCTYPE html><html><head></head><body></body></html>"),fabric.window=fabric.document.createWindow()),fabric.isTouchSupported="ontouchstart"in fabric.document.documentElement,fabric.isLikelyNode=typeof Buffer!="undefined"&&typeof window=="undefined";var Cufon=function(){function r(e){var t=this.face=e.face;this.glyphs=e.glyphs,this.w=e.w,this.baseSize=parseInt(t["units-per-em"],10),this.family=t["font-family"].toLowerCase(),this.weight=t["font-weight"],this.style=t["font-style"]||"normal",this.viewBox=function(){var e=t.bbox.split(/\s+/),n={minX:parseInt(e[0],10),minY:parseInt(e[1],10),maxX:parseInt(e[2],10),maxY:parseInt(e[3],10)};return n.width=n.maxX-n.minX,n.height=n.maxY-n.minY,n.toString=function(){return[this.minX,this.minY,this.width,this.height].join(" ")},n}(),this.ascent=-parseInt(t.ascent,10),this.descent=-parseInt(t.descent,10),this.height=-this.ascent+this.descent}function i(){var e={},t={oblique:"italic",italic:"oblique"};this.add=function(t){(e[t.style]||(e[t.style]={}))[t.weight]=t},this.get=function(n,r){var i=e[n]||e[t[n]]||e.normal||e.italic||e.oblique;if(!i)return null;r={normal:400,bold:700}[r]||parseInt(r,10);if(i[r])return i[r];var s={1:1,99:0}[r%100],o=[],u,a;s===undefined&&(s=r>400),r==500&&(r=400);for(var f in i){f=parseInt(f,10);if(!u||f<u)u=f;if(!a||f>a)a=f;o.push(f)}return r<u&&(r=u),r>a&&(r=a),o.sort(function(e,t){return(s?e>r&&t>r?e<t:e>t:e<r&&t<r?e>t:e<t)?-1:1}),i[o[0]]}}function s(){function t(e,t){return e.contains?e.contains(t):e.compareDocumentPosition(t)&16}function n(e){var n=e.relatedTarget;if(!n||t(this,n))return;i(this)}function r(e){i(this)}function i(t){setTimeout(function(){e.replace(t,g.get(t).options,!0)},10)}this.attach=function(e){e.onmouseenter===undefined?(a(e,"mouseover",n),a(e,"mouseout",n)):(a(e,"mouseenter",r),a(e,"mouseleave",r))}}function o(){function n(e){return e.cufid||(e.cufid=++t)}var e={},t=0;this.get=function(t){var r=n(t);return e[r]||(e[r]={})}}function u(e){var t={},r={};this.get=function(n){return t[n]!=undefined?t[n]:e[n]},this.getSize=function(e,t){return r[e]||(r[e]=new n.Size(this.get(e),t))},this.extend=function(e){for(var n in e)t[n]=e[n];return this}}function a(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,function(){return n.call(e,fabric.window.event)})}function f(e,t){var n=g.get(e);return n.options?e:(t.hover&&t.hoverables[e.nodeName.toLowerCase()]&&y.attach(e),n.options=t,e)}function l(e){var t={};return function(n){return t.hasOwnProperty(n)||(t[n]=e.apply(null,arguments)),t[n]}}function c(e,t){t||(t=n.getStyle(e));var r=n.quotedList(t.get("fontFamily").toLowerCase()),i;for(var s=0,o=r.length;s<o;++s){i=r[s];if(E[i])return E[i].get(t.get("fontStyle"),t.get("fontWeight"))}return null}function h(e){return fabric.document.getElementsByTagName(e)}function p(){var e={},t;for(var n=0,r=arguments.length;n<r;++n)for(t in arguments[n])e[t]=arguments[n][t];return e}function d(e,t,r,i,s,o){var u=i.separate;if(u=="none")return w[i.engine].apply(null,arguments);var a=fabric.document.createDocumentFragment(),f,l=t.split(x[u]),c=u=="words";c&&m&&(/^\s/.test(t)&&l.unshift(""),/\s$/.test(t)&&l.push(""));for(var h=0,p=l.length;h<p;++h)f=w[i.engine](e,c?n.textAlign(l[h],r,h,p):l[h],r,i,s,o,h<p-1),f&&a.appendChild(f);return a}function v(e,t){var r,i,s,o;for(var u=f(e,t).firstChild;u;u=s){s=u.nextSibling,o=!1;if(u.nodeType==1){if(!u.firstChild)continue;if(!/cufon/.test(u.className)){arguments.callee(u,t);continue}o=!0}i||(i=n.getStyle(e).extend(t)),r||(r=c(e,i));if(!r)continue;if(o){w[t.engine](r,null,i,t,u,e);continue}var a=u.data;typeof G_vmlCanvasManager!="undefined"&&(a=a.replace(/\r/g,"\n"));if(a==="")continue;var l=d(r,a,i,t,u,e);l?u.parentNode.replaceChild(l,u):u.parentNode.removeChild(u)}}var e=function(){return e.replace.apply(null,arguments)},t=e.DOM={ready:function(){var e=!1,t={loaded:1,complete:1},n=[],r=function(){if(e)return;e=!0;for(var t;t=n.shift();t());};return fabric.document.addEventListener&&(fabric.document.addEventListener("DOMContentLoaded",r,!1),fabric.window.addEventListener("pageshow",r,!1)),!fabric.window.opera&&fabric.document.readyState&&function(){t[fabric.document.readyState]?r():setTimeout(arguments.callee,10)}(),fabric.document.readyState&&fabric.document.createStyleSheet&&function(){try{fabric.document.body.doScroll("left"),r()}catch(e){setTimeout(arguments.callee,1)}}(),a(fabric.window,"load",r),function(t){arguments.length?e?t():n.push(t):r()}}()},n=e.CSS={Size:function(e,t){this.value=parseFloat(e),this.unit=String(e).match(/[a-z%]*$/)[0]||"px",this.convert=function(e){return e/t*this.value},this.convertFrom=function(e){return e/this.value*t},this.toString=function(){return this.value+this.unit}},getStyle:function(e){return new u(e.style)},quotedList:l(function(e){var t=[],n=/\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,r;while(r=n.exec(e))t.push(r[3]||r[1]);return t}),ready:function(){var e=!1,n=[],r=function(){e=!0;for(var t;t=n.shift();t());},i=Object.prototype.propertyIsEnumerable?h("style"):{length:0},s=h("link");return t.ready(function(){var e=0,t;for(var n=0,o=s.length;t=s[n],n<o;++n)!t.disabled&&t.rel.toLowerCase()=="stylesheet"&&++e;fabric.document.styleSheets.length>=i.length+e?r():setTimeout(arguments.callee,10)}),function(t){e?t():n.push(t)}}(),supports:function(e,t){var n=fabric.document.createElement("span").style;return n[e]===undefined?!1:(n[e]=t,n[e]===t)},textAlign:function(e,t,n,r){return t.get("textAlign")=="right"?n>0&&(e=" "+e):n<r-1&&(e+=" "),e},textDecoration:function(e,t){t||(t=this.getStyle(e));var n={underline:null,overline:null,"line-through":null};for(var r=e;r.parentNode&&r.parentNode.nodeType==1;){var i=!0;for(var s in n){if(n[s])continue;t.get("textDecoration").indexOf(s)!=-1&&(n[s]=t.get("color")),i=!1}if(i)break;t=this.getStyle(r=r.parentNode)}return n},textShadow:l(function(e){if(e=="none")return null;var t=[],n={},r,i=0,s=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;while(r=s.exec(e))r[0]==","?(t.push(n),n={},i=0):r[1]?n.color=r[1]:n[["offX","offY","blur"][i++]]=r[2];return t.push(n),t}),color:l(function(e){var t={};return t.color=e.replace(/^rgba\((.*?),\s*([\d.]+)\)/,function(e,n,r){return t.opacity=parseFloat(r),"rgb("+n+")"}),t}),textTransform:function(e,t){return e[{uppercase:"toUpperCase",lowercase:"toLowerCase"}[t.get("textTransform")]||"toString"]()}},m=" ".split(/\s+/).length==0,g=new o,y=new s,b=[],w={},E={},S={engine:null,hover:!1,hoverables:{a:!0},printable:!0,selector:fabric.window.Sizzle||fabric.window.jQuery&&function(e){return jQuery(e)}||fabric.window.dojo&&dojo.query||fabric.window.$$&&function(e){return $$(e)}||fabric.window.$&&function(e){return $(e)}||fabric.document.querySelectorAll&&function(e){return fabric.document.querySelectorAll(e)}||h,separate:"words",textShadow:"none"},x={words:/\s+/,characters:""};return e.now=function(){return t.ready(),e},e.refresh=function(){var t=b.splice(0,b.length);for(var n=0,r=t.length;n<r;++n)e.replace.apply(null,t[n]);return e},e.registerEngine=function(t,n){return n?(w[t]=n,e.set("engine",t)):e},e.registerFont=function(t){var n=new r(t),s=n.family;return E[s]||(E[s]=new i),E[s].add(n),e.set("fontFamily",'"'+s+'"')},e.replace=function(t,r,i){r=p(S,r);if(!r.engine)return e;typeof r.textShadow=="string"&&r.textShadow&&(r.textShadow=n.textShadow(r.textShadow)),i||b.push(arguments);if(t.nodeType||typeof t=="string")t=[t];return n.ready(function(){for(var n=0,i=t.length;n<i;++n){var s=t[n];typeof s=="string"?e.replace(r.selector(s),r,!0):v(s,r)}}),e},e.replaceElement=function(e,t){return t=p(S,t),typeof t.textShadow=="string"&&t.textShadow&&(t.textShadow=n.textShadow(t.textShadow)),v(e,t)},e.engines=w,e.fonts=E,e.getOptions=function(){return p(S)},e.set=function(t,n){return S[t]=n,e},e}();Cufon.registerEngine("canvas",function(){function s(e,t){var n=0,r=0,i=[],s=/([mrvxe])([^a-z]*)/g,o;e:for(var u=0;o=s.exec(e);++u){var a=o[2].split(",");switch(o[1]){case"v":i[u]={m:"bezierCurveTo",a:[n+~~a[0],r+~~a[1],n+~~a[2],r+~~a[3],n+=~~a[4],r+=~~a[5]]};break;case"r":i[u]={m:"lineTo",a:[n+=~~a[0],r+=~~a[1]]};break;case"m":i[u]={m:"moveTo",a:[n=~~a[0],r=~~a[1]]};break;case"x":i[u]={m:"closePath",a:[]};break;case"e":break e}t[i[u].m].apply(t,i[u].a)}return i}function o(e,t){for(var n=0,r=e.length;n<r;++n){var i=e[n];t[i.m].apply(t,i.a)}}var e=Cufon.CSS.supports("display","inline-block"),t=!e&&(fabric.document.compatMode=="BackCompat"||/frameset|transitional/i.test(fabric.document.doctype.publicId)),n=fabric.document.createElement("style");n.type="text/css";var r=fabric.document.createTextNode(".cufon-canvas{text-indent:0}@media screen,projection{.cufon-canvas{display:inline;display:inline-block;position:relative;vertical-align:middle"+(t?"":";font-size:1px;line-height:1px")+"}.cufon-canvas .cufon-alt{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden}"+(e?".cufon-canvas canvas{position:relative}":".cufon-canvas canvas{position:absolute}")+"}"+"@media print{"+".cufon-canvas{padding:0 !important}"+".cufon-canvas canvas{display:none}"+".cufon-canvas .cufon-alt{display:inline}"+"}");try{n.appendChild(r)}catch(i){n.setAttribute("type","text/css"),n.styleSheet.cssText=r.data}return fabric.document.getElementsByTagName("head")[0].appendChild(n),function(t,n,r,i,u,a){function $(e,t){W.strokeStyle=t,W.beginPath(),W.moveTo(0,e),W.lineTo(N,e),W.stroke()}function Q(){W.save();var e=0,n=0,r=[{left:0}];i.backgroundColor&&(W.save(),W.fillStyle=i.backgroundColor,W.translate(0,t.ascent),W.fillRect(0,0,N+10,(-t.ascent+t.descent)*L),W.restore()),i.textAlign==="right"?(W.translate(M[n],0),r[0].left=M[n]*X):i.textAlign==="center"&&(W.translate(M[n]/2,0),r[0].left=M[n]/2*X);for(var s=0,o=T.length;s<o;++s){if(T[s]==="\n"){n++;var u=-t.ascent-t.ascent/5*i.lineHeight,a=r[r.length-1],f={left:0};a.width=e*X,a.height=(-t.ascent+t.descent)*X,i.textAlign==="right"?(W.translate(-N,u),W.translate(M[n],0),f.left=M[n]*X):i.textAlign==="center"?(W.translate(-e-M[n-1]/2,u),W.translate(M[n]/2,0),f.left=M[n]/2*X):W.translate(-e,u),r.push(f),e=0;continue}var l=t.glyphs[T[s]]||t.missingGlyph;if(!l)continue;var c=Number(l.w||t.w)+h;i.textBackgroundColor&&(W.save(),W.fillStyle=i.textBackgroundColor,W.translate(0,t.ascent),W.fillRect(0,0,c+10,-t.ascent+t.descent),W.restore()),W.translate(c,0),e+=c,s==o-1&&(r[r.length-1].width=e*X,r[r.length-1].height=(-t.ascent+t.descent)*X)}W.restore(),Cufon.textOptions.boundaries=r}function G(e){W.fillStyle=e||Cufon.textOptions.color||r.get("color");var n=0,u=0;i.textAlign==="right"?W.translate(M[u],0):i.textAlign==="center"&&W.translate(M[u]/2,0);for(var a=0,f=T.length;a<f;++a){if(T[a]==="\n"){u++;var l=-t.ascent-t.ascent/5*i.lineHeight;i.textAlign==="right"?(W.translate(-N,l),W.translate(M[u],0)):i.textAlign==="center"?(W.translate(-n-M[u-1]/2,l),W.translate(M[u]/2,0)):W.translate(-n,l),n=0;continue}var c=t.glyphs[T[a]]||t.missingGlyph;if(!c)continue;var p=Number(c.w||t.w)+h;J&&(W.save(),W.strokeStyle=W.fillStyle,W.lineWidth+=W.lineWidth,W.beginPath(),J.underline&&(W.moveTo(0,-t.face["underline-position"]+.5),W.lineTo(p,-t.face["underline-position"]+.5)),J.overline&&(W.moveTo(0,t.ascent+.5),W.lineTo(p,t.ascent+.5)),J["line-through"]&&(W.moveTo(0,-t.descent+.5),W.lineTo(p,-t.descent+.5)),W.stroke(),W.restore()),K&&(W.save(),W.transform(1,0,-0.25,1,0,0)),W.beginPath(),c.d&&(c.code?o(c.code,W):c.code=s("m"+c.d,W)),W.fill(),i.strokeStyle&&(W.closePath(),W.save(),W.lineWidth=i.strokeWidth,W.strokeStyle=i.strokeStyle,W.stroke(),W.restore()),K&&W.restore(),W.translate(p,0),n+=p}}var f=n===null,l=t.viewBox,c=r.getSize("fontSize",t.baseSize),h=r.get("letterSpacing");h=h=="normal"?0:c.convertFrom(parseInt(h,10));var p=0,d=0,v=0,m=0,g=i.textShadow,y=[];Cufon.textOptions.shadowOffsets=[],Cufon.textOptions.shadows=null;if(g){Cufon.textOptions.shadows=g;for(var b=0,w=g.length;b<w;++b){var E=g[b],S=c.convertFrom(parseFloat(E.offX)),x=c.convertFrom(parseFloat(E.offY));y[b]=[S,x]}}var T=Cufon.CSS.textTransform(f?u.alt:n,r).split(""),N=0,C=null,k=0,L=1,A=[];for(var b=0,w=T.length;b<w;++b){if(T[b]==="\n"){L++,N>k&&(k=N),A.push(N),N=0;continue}var O=t.glyphs[T[b]]||t.missingGlyph;if(!O)continue;N+=C=Number(O.w||t.w)+h}A.push(N),N=Math.max(k,N);var M=[];for(var b=A.length;b--;)M[b]=N-A[b];if(C===null)return null;d+=l.width-C,m+=l.minX;var _,D;if(f)_=u,D=u.firstChild;else{_=fabric.document.createElement("span"),_.className="cufon cufon-canvas",_.alt=n,D=fabric.document.createElement("canvas"),_.appendChild(D);if(i.printable){var P=fabric.document.createElement("span");P.className="cufon-alt",P.appendChild(fabric.document.createTextNode(n)),_.appendChild(P)}}var H=_.style,B=D.style||{},j=c.convert(l.height-p+v),F=Math.ceil(j),I=F/j;D.width=Math.ceil(c.convert(N+d-m)*I),D.height=F,p+=l.minY,B.top=Math.round(c.convert(p-t.ascent))+"px",B.left=Math.round(c.convert(m))+"px";var q=Math.ceil(c.convert(N*I)),R=q+"px",U=c.convert(t.height),z=(i.lineHeight-1)*c.convert(-t.ascent/5)*(L-1);Cufon.textOptions.width=q,Cufon.textOptions.height=U*L+z,Cufon.textOptions.lines=L,Cufon.textOptions.totalLineHeight=z,e?(H.width=R,H.height=U+"px"):(H.paddingLeft=R,H.paddingBottom=U-1+"px");var W=Cufon.textOptions.context||D.getContext("2d"),X=F/l.height;Cufon.textOptions.fontAscent=t.ascent*X,Cufon.textOptions.boundaries=null;for(var V=Cufon.textOptions.shadowOffsets,b=y.length;b--;)V[b]=[y[b][0]*X,y[b][1]*X];W.save(),W.scale(X,X),W.translate(-m-1/X*D.width/2+(Cufon.fonts[t.family].offsetLeft||0),-p-Cufon.textOptions.height/X/2+(Cufon.fonts[t.family].offsetTop||0)),W.lineWidth=t.face["underline-thickness"],W.save();var J=Cufon.getTextDecoration(i),K=i.fontStyle==="italic";W.save(),Q();if(g)for(var b=0,w=g.length;b<w;++b){var E=g[b];W.save(),W.translate.apply(W,y[b]),G(E.color),W.restore()}return G(),W.restore(),W.restore(),W.restore(),_}}()),Cufon.registerEngine("vml",function(){function n(e,t){return r(e,/(?:em|ex|%)$/i.test(t)?"1em":t)}function r(e,t){if(/px$/i.test(t))return parseFloat(t);var n=e.style.left,r=e.runtimeStyle.left;e.runtimeStyle.left=e.currentStyle.left,e.style.left=t;var i=e.style.pixelLeft;return e.style.left=n,e.runtimeStyle.left=r,i}if(!fabric.document.namespaces)return;var e=fabric.document.createElement("canvas");if(e&&e.getContext&&e.getContext.apply)return;fabric.document.namespaces.cvml==null&&fabric.document.namespaces.add("cvml","urn:schemas-microsoft-com:vml");var t=fabric.document.createElement("cvml:shape");t.style.behavior="url(#default#VML)";if(!t.coordsize)return;return t=null,fabric.document.write('<style type="text/css">.cufon-vml-canvas{text-indent:0}@media screen{cvml\\:shape,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute}.cufon-vml-canvas{position:absolute;text-align:left}.cufon-vml{display:inline-block;position:relative;vertical-align:middle}.cufon-vml .cufon-alt{position:absolute;left:-10000in;font-size:1px}a .cufon-vml{cursor:pointer}}@media print{.cufon-vml *{display:none}.cufon-vml .cufon-alt{display:inline}}</style>'),function(e,t,i,s,o,u,a){var f=t===null;f&&(t=o.alt);var l=e.viewBox,c=i.computedFontSize||(i.computedFontSize=new Cufon.CSS.Size(n(u,i.get("fontSize"))+"px",e.baseSize)),h=i.computedLSpacing;h==undefined&&(h=i.get("letterSpacing"),i.computedLSpacing=h=h=="normal"?0:~~c.convertFrom(r(u,h)));var p,d;if(f)p=o,d=o.firstChild;else{p=fabric.document.createElement("span"),p.className="cufon cufon-vml",p.alt=t,d=fabric.document.createElement("span"),d.className="cufon-vml-canvas",p.appendChild(d);if(s.printable){var v=fabric.document.createElement("span");v.className="cufon-alt",v.appendChild(fabric.document.createTextNode(t)),p.appendChild(v)}a||p.appendChild(fabric.document.createElement("cvml:shape"))}var m=p.style,g=d.style,y=c.convert(l.height),b=Math.ceil(y),w=b/y,E=l.minX,S=l.minY;g.height=b,g.top=Math.round(c.convert(S-e.ascent)),g.left=Math.round(c.convert(E)),m.height=c.convert(e.height)+"px";var x=Cufon.getTextDecoration(s),T=i.get("color"),N=Cufon.CSS.textTransform(t,i).split(""),C=0,k=0,L=null,A,O,M=s.textShadow;for(var _=0,D=0,P=N.length;_<P;++_)A=e.glyphs[N[_]]||e.missingGlyph,A&&(C+=L=~~(A.w||e.w)+h);if(L===null)return null;var H=-E+C+(l.width-L),B=c.convert(H*w),j=Math.round(B),F=H+","+l.height,I,q="r"+F+"nsnf";for(_=0;_<P;++_){A=e.glyphs[N[_]]||e.missingGlyph;if(!A)continue;f?(O=d.childNodes[D],O.firstChild&&O.removeChild(O.firstChild)):(O=fabric.document.createElement("cvml:shape"),d.appendChild(O)),O.stroked="f",O.coordsize=F,O.coordorigin=I=E-k+","+S,O.path=(A.d?"m"+A.d+"xe":"")+"m"+I+q,O.fillcolor=T;var R=O.style;R.width=j,R.height=b;if(M){var U=M[0],z=M[1],W=Cufon.CSS.color(U.color),X,V=fabric.document.createElement("cvml:shadow");V.on="t",V.color=W.color,V.offset=U.offX+","+U.offY,z&&(X=Cufon.CSS.color(z.color),V.type="double",V.color2=X.color,V.offset2=z.offX+","+z.offY),V.opacity=W.opacity||X&&X.opacity||1,O.appendChild(V)}k+=~~(A.w||e.w)+h,++D}return m.width=Math.max(Math.ceil(c.convert(C*w)),0),p}}()),Cufon.getTextDecoration=function(e){return{underline:e.textDecoration==="underline",overline:e.textDecoration==="overline","line-through":e.textDecoration==="line-through"}},typeof exports!="undefined"&&(exports.Cufon=Cufon);var JSON;JSON||(JSON={}),function(){"use strict";function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(t,e,a));switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent,u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o,i}if(rep&&typeof rep=="object"){s=rep.length;for(n=0;n<s;n+=1)typeof rep[n]=="string"&&(r=rep[n],i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i))}else for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o,i}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(e,t,n){var r;gap="",indent="";if(typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);rep=t;if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",{"":e});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object")for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),fabric.log=function(){},fabric.warn=function(){},typeof console!="undefined"&&(typeof console.log!="undefined"&&console.log.apply&&(fabric.log=function(){return console.log.apply(console,arguments)}),typeof console.warn!="undefined"&&console.warn.apply&&(fabric.warn=function(){return console.warn.apply(console,arguments)})),function(){function e(e,t){if(!this.__eventListeners[e])return;t?fabric.util.removeFromArray(this.__eventListeners[e],t):this.__eventListeners[e].length=0}function t(e,t){this.__eventListeners||(this.__eventListeners={});if(arguments.length===1)for(var n in e)this.on(n,e[n]);else this.__eventListeners[e]||(this.__eventListeners[e]=[]),this.__eventListeners[e].push(t);return this}function n(t,n){if(!this.__eventListeners)return;if(arguments.length===1&&typeof arguments[0]=="object")for(var r in t)e.call(this,r,t[r]);else e.call(this,t,n);return this}function r(e,t){if(!this.__eventListeners)return;var n=this.__eventListeners[e];if(!n)return;for(var r=0,i=n.length;r<i;r++)n[r].call(this,t||{});return this}fabric.Observable={observe:t,stopObserving:n,fire:r,on:t,off:n,trigger:r}}(),fabric.Collection={add:function(){this._objects.push.apply(this._objects,arguments);for(var e=arguments.length;e--;)this._onObjectAdded(arguments[e]);return this.renderOnAddRemove&&this.renderAll(),this},insertAt:function(e,t,n){var r=this.getObjects();return n?r[t]=e:r.splice(t,0,e),this._onObjectAdded(e),this.renderOnAddRemove&&this.renderAll(),this},remove:function(e){var t=this.getObjects(),n=t.indexOf(e);return n!==-1&&(t.splice(n,1),this._onObjectRemoved(e)),this.renderOnAddRemove&&this.renderAll(),e},forEachObject:function(e,t){var n=this.getObjects(),r=n.length;while(r--)e.call(t,n[r],r,n);return this},item:function(e){return this.getObjects()[e]},isEmpty:function(){return this.getObjects().length===0},size:function(){return this.getObjects().length},contains:function(e){return this.getObjects().indexOf(e)>-1},complexity:function(){return this.getObjects().reduce(function(e,t){return e+=t.complexity?t.complexity():0,e},0)},toGrayscale:function(){return this.forEachObject(function(e){e.toGrayscale()})}},function(){function n(e,t){var n=e.indexOf(t);return n!==-1&&e.splice(n,1),e}function r(e,t){return Math.floor(Math.random()*(t-e+1))+e}function s(e){return e*i}function o(e){return e/i}function u(e,t,n){var r=Math.sin(n),i=Math.cos(n);e.subtractEquals(t);var s=e.x*i-e.y*r,o=e.x*r+e.y*i;return(new fabric.Point(s,o)).addEquals(t)}function a(e,t){return parseFloat(Number(e).toFixed(t))}function f(){return!1}function l(e,t){return c(t)[fabric.util.string.camelize(fabric.util.string.capitalize(e))]}function c(e){if(!e)return fabric;var t=e.split("."),n=t.length,r=fabric.window;for(var i=0;i<n;++i)r=r[t[i]];return r}function h(e,t,n){if(e){var r=fabric.util.createImage();r.onload=function(){t&&t.call(n,r),r=r.onload=null},r.src=e}else t&&t.call(n,e)}function p(e,t,n,r){function i(){++o===u&&t&&t(s)}var s=[],o=0,u=e.length;e.forEach(function(e,t){if(!e.type)return;var o=fabric.util.getKlass(e.type,n);o.async?o.fromObject(e,function(n,o){o||(s[t]=n,r&&r(e,s[t])),i()}):(s[t]=o.fromObject(e),r&&r(e,s[t]),i())})}function d(e,t,n){var r;return e.length>1?r=new fabric.PathGroup(e,t):r=e[0],typeof n!="undefined"&&r.setSourcePath(n),r}function v(e,t,n){if(n&&Object.prototype.toString.call(n)==="[object Array]")for(var r=0,i=n.length;r<i;r++)n[r]in e&&(t[n[r]]=e[n[r]])}function m(n,r,i,s,o,u){var a=s-r,f=o-i,l=e(a*a+f*f),c=t(f,a),h=u.length,p=0,d=!0;n.save(),n.translate(r,i),n.moveTo(0,0),n.rotate(c),r=0;while(l>r)r+=u[p++%h],r>l&&(r=l),n[d?"lineTo":"moveTo"](r,0),d=!d;n.restore()}function g(e){return e||(e=fabric.document.createElement("canvas")),!e.getContext&&typeof G_vmlCanvasManager!="undefined"&&G_vmlCanvasManager.initElement(e),e}function y(){return fabric.isLikelyNode?new(require("canvas").Image):fabric.document.createElement("img")}function b(e){var t=e.prototype;for(var n=t.stateProperties.length;n--;){var r=t.stateProperties[n],i=r.charAt(0).toUpperCase()+r.slice(1),s="set"+i,o="get"+i;t[o]||(t[o]=function(e){return new Function('return this.get("'+e+'")')}(r)),t[s]||(t[s]=function(e){return new Function("value",'return this.set("'+e+'", value)')}(r))}}function w(e,t){t.save(),t.beginPath(),e.clipTo(t),t.clip()}function E(e,t){var n=[[e[0],e[2],e[4]],[e[1],e[3],e[5]],[0,0,1]],r=[[t[0],t[2],t[4]],[t[1],t[3],t[5]],[0,0,1]],i=[];for(var s=0;s<3;s++){i[s]=[];for(var o=0;o<3;o++){var u=0;for(var a=0;a<3;a++)u+=n[s][a]*r[a][o];i[s][o]=u}}return[i[0][0],i[1][0],i[0][1],i[1][1],i[0][2],i[1][2]]}function S(e){return(String(e).match(/function[^{]*\{([\s\S]*)\}/)||{})[1]}function x(e,t,n,r){var i=r[0],s=r[1],o=r[2],u=r[3],a=r[4],f=r[5],l=r[6],c=L(f,l,i,s,u,a,o,t,n);for(var h=0;h<c.length;h++){var p=A.apply(this,c[h]);e.bezierCurveTo.apply(e,p)}}function L(e,t,n,r,i,s,o,u,a){k=C.call(arguments);if(T[k])return T[k];var f=o*(Math.PI/180),l=Math.sin(f),c=Math.cos(f);n=Math.abs(n),r=Math.abs(r);var h=c*(u-e)*.5+l*(a-t)*.5,p=c*(a-t)*.5-l*(u-e)*.5,d=h*h/(n*n)+p*p/(r*r);d>1&&(d=Math.sqrt(d),n*=d,r*=d);var v=c/n,m=l/n,g=-l/r,y=c/r,b=v*u+m*a,w=g*u+y*a,E=v*e+m*t,S=g*e+y*t,x=(E-b)*(E-b)+(S-w)*(S-w),N=1/x-.25;N<0&&(N=0);var L=Math.sqrt(N);s===i&&(L=-L);var A=.5*(b+E)-L*(S-w),O=.5*(w+S)+L*(E-b),M=Math.atan2(w-O,b-A),_=Math.atan2(S-O,E-A),D=_-M;D<0&&s===1?D+=2*Math.PI:D>0&&s===0&&(D-=2*Math.PI);var P=Math.ceil(Math.abs(D/(Math.PI*.5+.001))),H=[];for(var B=0;B<P;B++){var j=M+B*D/P,F=M+(B+1)*D/P;H[B]=[A,O,j,F,n,r,l,c]}return T[k]=H,H}function A(e,t,n,r,i,s,o,u){k=C.call(arguments);if(N[k])return N[k];var a=u*i,f=-o*s,l=o*i,c=u*s,h=.5*(r-n),p=8/3*Math.sin(h*.5)*Math.sin(h*.5)/Math.sin(h),d=e+Math.cos(n)-p*Math.sin(n),v=t+Math.sin(n)+p*Math.cos(n),m=e+Math.cos(r),g=t+Math.sin(r),y=m+p*Math.sin(r),b=g-p*Math.cos(r);return N[k]=[a*d+f*v,l*d+c*v,a*y+f*b,l*y+c*b,a*m+f*g,l*m+c*g],N[k]}var e=Math.sqrt,t=Math.atan2;fabric.util={};var i=Math.PI/180,T={},N={},C=Array.prototype.join,k;fabric.util.removeFromArray=n,fabric.util.degreesToRadians=s,fabric.util.radiansToDegrees=o,fabric.util.rotatePoint=u,fabric.util.toFixed=a,fabric.util.getRandomInt=r,fabric.util.falseFunction=f,fabric.util.getKlass=l,fabric.util.resolveNamespace=c,fabric.util.loadImage=h,fabric.util.enlivenObjects=p,fabric.util.groupSVGElements=d,fabric.util.populateWithProperties=v,fabric.util.drawDashedLine=m,fabric.util.createCanvasElement=g,fabric.util.createImage=y,fabric.util.createAccessors=b,fabric.util.clipContext=w,fabric.util.multiplyTransformMatrices=E,fabric.util.getFunctionBody=S,fabric.util.drawArc=x}(),function(){function t(t,n){var r=e.call(arguments,2),i=[];for(var s=0,o=t.length;s<o;s++)i[s]=r.length?t[s][n].apply(t[s],r):t[s][n].call(t[s]);return i}function n(e,t){if(!e||e.length===0)return undefined;var n=e.length-1,r=t?e[n][t]:e[n];if(t)while(n--)e[n][t]>=r&&(r=e[n][t]);else while(n--)e[n]>=r&&(r=e[n]);return r}function r(e,t){if(!e||e.length===0)return undefined;var n=e.length-1,r=t?e[n][t]:e[n];if(t)while(n--)e[n][t]<r&&(r=e[n][t]);else while(n--)e[n]<r&&(r=e[n]);return r}var e=Array.prototype.slice;Array.prototype.indexOf||(Array.prototype.indexOf=function(e){if(this===void 0||this===null)throw new TypeError;var t=Object(this),n=t.length>>>0;if(n===0)return-1;var r=0;arguments.length>0&&(r=Number(arguments[1]),r!==r?r=0:r!==0&&r!==Number.POSITIVE_INFINITY&&r!==Number.NEGATIVE_INFINITY&&(r=(r>0||-1)*Math.floor(Math.abs(r))));if(r>=n)return-1;var i=r>=0?r:Math.max(n-Math.abs(r),0);for(;i<n;i++)if(i in t&&t[i]===e)return i;return-1}),Array.prototype.forEach||(Array.prototype.forEach=function(e,t){for(var n=0,r=this.length>>>0;n<r;n++)n in this&&e.call(t,this[n],n,this)}),Array.prototype.map||(Array.prototype.map=function(e,t){var n=[];for(var r=0,i=this.length>>>0;r<i;r++)r in this&&(n[r]=e.call(t,this[r],r,this));return n}),Array.prototype.every||(Array.prototype.every=function(e,t){for(var n=0,r=this.length>>>0;n<r;n++)if(n in this&&!e.call(t,this[n],n,this))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(e,t){for(var n=0,r=this.length>>>0;n<r;n++)if(n in this&&e.call(t,this[n],n,this))return!0;return!1}),Array.prototype.filter||(Array.prototype.filter=function(e,t){var n=[],r;for(var i=0,s=this.length>>>0;i<s;i++)i in this&&(r=this[i],e.call(t,r,i,this)&&n.push(r));return n}),Array.prototype.reduce||(Array.prototype.reduce=function(e){var t=this.length>>>0,n=0,r;if(arguments.length>1)r=arguments[1];else do{if(n in this){r=this[n++];break}if(++n>=t)throw new TypeError}while(!0);for(;n<t;n++)n in this&&(r=e.call(null,r,this[n],n,this));return r}),fabric.util.array={invoke:t,min:r,max:n}}(),function(){function e(e,t){for(var n in t)e[n]=t[n];return e}function t(t){return e({},t)}fabric.util.object={extend:e,clone:t}}(),function(){function e(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})}function t(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function n(e){return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\xA0]+/,"").replace(/[\s\xA0]+$/,"")}),fabric.util.string={camelize:e,capitalize:t,escapeXml:n}}(),function(){var e=Array.prototype.slice,t=Function.prototype.apply,n=function(){};Function.prototype.bind||(Function.prototype.bind=function(r){var i=this,s=e.call(arguments,1),o;return s.length?o=function(){return t.call(i,this instanceof n?this:r,s.concat(e.call(arguments)))}:o=function(){return t.call(i,this instanceof n?this:r,arguments)},n.prototype=this.prototype,o.prototype=new n,o})}(),function(){function i(){}function s(t){var n=this.constructor.superclass.prototype[t];return arguments.length>1?n.apply(this,e.call(arguments,1)):n.call(this)}function o(){function u(){this.initialize.apply(this,arguments)}var n=null,o=e.call(arguments,0);typeof o[0]=="function"&&(n=o.shift()),u.superclass=n,u.subclasses=[],n&&(i.prototype=n.prototype,u.prototype=new i,n.subclasses.push(u));for(var a=0,f=o.length;a<f;a++)r(u,o[a],n);return u.prototype.initialize||(u.prototype.initialize=t),u.prototype.constructor=u,u.prototype.callSuper=s,u}var e=Array.prototype.slice,t=function(){},n=function(){for(var e in{toString:1})if(e==="toString")return!1;return!0}(),r=function(e,t,r){for(var i in t)i in e.prototype&&typeof e.prototype[i]=="function"&&(t[i]+"").indexOf("callSuper")>-1?e.prototype[i]=function(e){return function(){var n=this.constructor.superclass;this.constructor.superclass=r;var i=t[e].apply(this,arguments);this.constructor.superclass=n;if(e!=="initialize")return i}}(i):e.prototype[i]=t[i],n&&(t.toString!==Object.prototype.toString&&(e.prototype.toString=t.toString),t.valueOf!==Object.prototype.valueOf&&(e.prototype.valueOf=t.valueOf))};fabric.util.createClass=o}(),function(){function e(e){var t=Array.prototype.slice.call(arguments,1),n,r,i=t.length;for(r=0;r<i;r++){n=typeof e[t[r]];if(!/^(?:function|object|unknown)$/.test(n))return!1}return!0}function i(e,t){return{handler:t,wrappedHandler:s(e,t)}}function s(e,t){return function(r){t.call(n(e),r||fabric.window.event)}}function o(e,t){return function(n){if(l[e]&&l[e][t]){var r=l[e][t];for(var i=0,s=r.length;i<s;i++)r[i].call(this,n||fabric.window.event)}}}function p(e,t){e||(e=fabric.window.event);var n=e.target||(typeof e.srcElement!="unknown"?e.srcElement:null),r=fabric.document.body||{scrollLeft:0,scrollTop:0},i=fabric.document.documentElement,s=n,o=0,u=0,a;while(n&&n.parentNode&&!a)n=n.parentNode,n!==fabric.document&&fabric.util.getElementStyle(n,"position")==="fixed"&&(a=n),n!==fabric.document&&s!==t&&fabric.util.getElementStyle(n,"position")==="absolute"?(o=0,u=0):n===fabric.document?(o=r.scrollLeft||i.scrollLeft||0,u=r.scrollTop||i.scrollTop||0):(o+=n.scrollLeft||0,u+=n.scrollTop||0);return{x:d(e)+o,y:v(e)+u}}var t=function(){var e=0;return function(t){return t.__uniqueID||(t.__uniqueID="uniqueID__"+e++)}}(),n,r;(function(){var e={};n=function(t){return e[t]},r=function(t,n){e[t]=n}})();var u=e(fabric.document.documentElement,"addEventListener","removeEventListener")&&e(fabric.window,"addEventListener","removeEventListener"),a=e(fabric.document.documentElement,"attachEvent","detachEvent")&&e(fabric.window,"attachEvent","detachEvent"),f={
},l={},c,h;u?(c=function(e,t,n){e.addEventListener(t,n,!1)},h=function(e,t,n){e.removeEventListener(t,n,!1)}):a?(c=function(e,n,s){var o=t(e);r(o,e),f[o]||(f[o]={}),f[o][n]||(f[o][n]=[]);var u=i(o,s);f[o][n].push(u),e.attachEvent("on"+n,u.wrappedHandler)},h=function(e,n,r){var i=t(e),s;if(f[i]&&f[i][n])for(var o=0,u=f[i][n].length;o<u;o++)s=f[i][n][o],s&&s.handler===r&&(e.detachEvent("on"+n,s.wrappedHandler),f[i][n][o]=null)}):(c=function(e,n,r){var i=t(e);l[i]||(l[i]={});if(!l[i][n]){l[i][n]=[];var s=e["on"+n];s&&l[i][n].push(s),e["on"+n]=o(i,n)}l[i][n].push(r)},h=function(e,n,r){var i=t(e);if(l[i]&&l[i][n]){var s=l[i][n];for(var o=0,u=s.length;o<u;o++)s[o]===r&&s.splice(o,1)}}),fabric.util.addListener=c,fabric.util.removeListener=h;var d=function(e){return typeof e.clientX!="unknown"?e.clientX:0},v=function(e){return typeof e.clientY!="unknown"?e.clientY:0};fabric.isTouchSupported&&(d=function(e){return e.type!=="touchend"?e.touches&&e.touches[0]?e.touches[0].pageX-(e.touches[0].pageX-e.touches[0].clientX)||e.clientX:e.clientX:e.changedTouches&&e.changedTouches[0]?e.changedTouches[0].pageX-(e.changedTouches[0].pageX-e.changedTouches[0].clientX)||e.clientX:e.clientX},v=function(e){return e.type!=="touchend"?e.touches&&e.touches[0]?e.touches[0].pageY-(e.touches[0].pageY-e.touches[0].clientY)||e.clientY:e.clientY:e.changedTouches&&e.changedTouches[0]?e.changedTouches[0].pageY-(e.changedTouches[0].pageY-e.changedTouches[0].clientY)||e.clientY:e.clientY}),fabric.util.getPointer=p,fabric.util.object.extend(fabric.util,fabric.Observable)}(),function(){function e(e,t){var n=e.style;if(!n)return e;if(typeof t=="string")return e.style.cssText+=";"+t,t.indexOf("opacity")>-1?s(e,t.match(/opacity:\s*(\d?\.?\d*)/)[1]):e;for(var r in t)if(r==="opacity")s(e,t[r]);else{var i=r==="float"||r==="cssFloat"?typeof n.styleFloat=="undefined"?"cssFloat":"styleFloat":r;n[i]=t[r]}return e}var t=fabric.document.createElement("div"),n=typeof t.style.opacity=="string",r=typeof t.style.filter=="string",i=/alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/,s=function(e){return e};n?s=function(e,t){return e.style.opacity=t,e}:r&&(s=function(e,t){var n=e.style;return e.currentStyle&&!e.currentStyle.hasLayout&&(n.zoom=1),i.test(n.filter)?(t=t>=.9999?"":"alpha(opacity="+t*100+")",n.filter=n.filter.replace(i,t)):n.filter+=" alpha(opacity="+t*100+")",e}),fabric.util.setStyle=e}(),function(){function t(e){return typeof e=="string"?fabric.document.getElementById(e):e}function s(e,t){var n=fabric.document.createElement(e);for(var r in t)r==="class"?n.className=t[r]:r==="for"?n.htmlFor=t[r]:n.setAttribute(r,t[r]);return n}function o(e,t){(" "+e.className+" ").indexOf(" "+t+" ")===-1&&(e.className+=(e.className?" ":"")+t)}function u(e,t,n){return typeof t=="string"&&(t=s(t,n)),e.parentNode&&e.parentNode.replaceChild(t,e),t.appendChild(e),t}function a(e){var t,n,r={left:0,top:0},i=e&&e.ownerDocument,s={left:0,top:0},o={borderLeftWidth:"left",borderTopWidth:"top",paddingLeft:"left",paddingTop:"top"};if(!i)return{left:0,top:0};for(var u in o)s[o[u]]+=parseInt(f(e,u),10)||0;return t=i.documentElement,typeof e.getBoundingClientRect!="undefined"&&(r=e.getBoundingClientRect()),i!=null&&i===i.window?n=i:n=i.nodeType===9&&(i.defaultView||i.parentWindow),{left:r.left+(n.pageXOffset||t.scrollLeft)-(t.clientLeft||0)+s.left,top:r.top+(n.pageYOffset||t.scrollTop)-(t.clientTop||0)+s.top}}function f(e,t){e.style||(e.style={});if(fabric.document.defaultView&&fabric.document.defaultView.getComputedStyle)return fabric.document.defaultView.getComputedStyle(e,null)[t];var n=e.style[t];return!n&&e.currentStyle&&(n=e.currentStyle[t]),n}var e=Array.prototype.slice,n=function(t){return e.call(t,0)},r;try{r=n(fabric.document.childNodes)instanceof Array}catch(i){}r||(n=function(e){var t=new Array(e.length),n=e.length;while(n--)t[n]=e[n];return t}),function(){function n(e){return typeof e.onselectstart!="undefined"&&(e.onselectstart=fabric.util.falseFunction),t?e.style[t]="none":typeof e.unselectable=="string"&&(e.unselectable="on"),e}function r(e){return typeof e.onselectstart!="undefined"&&(e.onselectstart=null),t?e.style[t]="":typeof e.unselectable=="string"&&(e.unselectable=""),e}var e=fabric.document.documentElement.style,t="userSelect"in e?"userSelect":"MozUserSelect"in e?"MozUserSelect":"WebkitUserSelect"in e?"WebkitUserSelect":"KhtmlUserSelect"in e?"KhtmlUserSelect":"";fabric.util.makeElementUnselectable=n,fabric.util.makeElementSelectable=r}(),function(){function e(e,t){var n=fabric.document.getElementsByTagName("head")[0],r=fabric.document.createElement("script"),i=!0;r.onload=r.onreadystatechange=function(e){if(i){if(typeof this.readyState=="string"&&this.readyState!=="loaded"&&this.readyState!=="complete")return;i=!1,t(e||fabric.window.event),r=r.onload=r.onreadystatechange=null}},r.src=e,n.appendChild(r)}fabric.util.getScript=e}(),fabric.util.getById=t,fabric.util.toArray=n,fabric.util.makeElement=s,fabric.util.addClass=o,fabric.util.wrapElement=u,fabric.util.getElementOffset=a,fabric.util.getElementStyle=f}(),function(){function e(e,t){return e+(/\?/.test(e)?"&":"?")+t}function n(){}function r(r,i){i||(i={});var s=i.method?i.method.toUpperCase():"GET",o=i.onComplete||function(){},u=t(),a;return u.onreadystatechange=function(){u.readyState===4&&(o(u),u.onreadystatechange=n)},s==="GET"&&(a=null,typeof i.parameters=="string"&&(r=e(r,i.parameters))),u.open(s,r,!0),(s==="POST"||s==="PUT")&&u.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),u.send(a),u}var t=function(){var e=[function(){return new ActiveXObject("Microsoft.XMLHTTP")},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml2.XMLHTTP.3.0")},function(){return new XMLHttpRequest}];for(var t=e.length;t--;)try{var n=e[t]();if(n)return e[t]}catch(r){}}();fabric.util.request=r}(),function(){function e(e){e||(e={});var t=+(new Date),r=e.duration||500,i=t+r,s,o=e.onChange||function(){},u=e.abort||function(){return!1},a=e.easing||function(e,t,n,r){return-n*Math.cos(e/r*(Math.PI/2))+n+t},f="startValue"in e?e.startValue:0,l="endValue"in e?e.endValue:100,c=e.byValue||l-f;e.onStart&&e.onStart(),function h(){s=+(new Date);var l=s>i?r:s-t;if(u()){e.onComplete&&e.onComplete();return}o(a(l,f,c,r));if(s>i){e.onComplete&&e.onComplete();return}n(h)}()}var t=fabric.window.requestAnimationFrame||fabric.window.webkitRequestAnimationFrame||fabric.window.mozRequestAnimationFrame||fabric.window.oRequestAnimationFrame||fabric.window.msRequestAnimationFrame||function(e){fabric.window.setTimeout(e,1e3/60)},n=function(){return t.apply(fabric.window,arguments)};fabric.util.animate=e,fabric.util.requestAnimFrame=n}(),function(){function e(e,t,n,r){return n*(e/=r)*e+t}function t(e,t,n,r){return-n*(e/=r)*(e-2)+t}function n(e,t,n,r){return e/=r/2,e<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}function r(e,t,n,r){return n*(e/=r)*e*e+t}function i(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function s(e,t,n,r){return e/=r/2,e<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}function o(e,t,n,r){return n*(e/=r)*e*e*e+t}function u(e,t,n,r){return-n*((e=e/r-1)*e*e*e-1)+t}function a(e,t,n,r){return e/=r/2,e<1?n/2*e*e*e*e+t:-n/2*((e-=2)*e*e*e-2)+t}function f(e,t,n,r){return n*(e/=r)*e*e*e*e+t}function l(e,t,n,r){return n*((e=e/r-1)*e*e*e*e+1)+t}function c(e,t,n,r){return e/=r/2,e<1?n/2*e*e*e*e*e+t:n/2*((e-=2)*e*e*e*e+2)+t}function h(e,t,n,r){return-n*Math.cos(e/r*(Math.PI/2))+n+t}function p(e,t,n,r){return n*Math.sin(e/r*(Math.PI/2))+t}function d(e,t,n,r){return-n/2*(Math.cos(Math.PI*e/r)-1)+t}function v(e,t,n,r){return e===0?t:n*Math.pow(2,10*(e/r-1))+t}function m(e,t,n,r){return e===r?t+n:n*(-Math.pow(2,-10*e/r)+1)+t}function g(e,t,n,r){return e===0?t:e===r?t+n:(e/=r/2,e<1?n/2*Math.pow(2,10*(e-1))+t:n/2*(-Math.pow(2,-10*--e)+2)+t)}function y(e,t,n,r){return-n*(Math.sqrt(1-(e/=r)*e)-1)+t}function b(e,t,n,r){return n*Math.sqrt(1-(e=e/r-1)*e)+t}function w(e,t,n,r){return e/=r/2,e<1?-n/2*(Math.sqrt(1-e*e)-1)+t:n/2*(Math.sqrt(1-(e-=2)*e)+1)+t}function E(e,t,n,r){var i=1.70158,s=0,o=n;return e===0?t:(e/=r,e===1?t+n:(s||(s=r*.3),o<Math.abs(n)?(o=n,i=s/4):i=s/(2*Math.PI)*Math.asin(n/o),-(o*Math.pow(2,10*(e-=1))*Math.sin((e*r-i)*2*Math.PI/s))+t))}function S(e,t,n,r){var i=1.70158,s=0,o=n;return e===0?t:(e/=r,e===1?t+n:(s||(s=r*.3),o<Math.abs(n)?(o=n,i=s/4):i=s/(2*Math.PI)*Math.asin(n/o),o*Math.pow(2,-10*e)*Math.sin((e*r-i)*2*Math.PI/s)+n+t))}function x(e,t,n,r){var i=1.70158,s=0,o=n;return e===0?t:(e/=r/2,e===2?t+n:(s||(s=r*.3*1.5),o<Math.abs(n)?(o=n,i=s/4):i=s/(2*Math.PI)*Math.asin(n/o),e<1?-0.5*o*Math.pow(2,10*(e-=1))*Math.sin((e*r-i)*2*Math.PI/s)+t:o*Math.pow(2,-10*(e-=1))*Math.sin((e*r-i)*2*Math.PI/s)*.5+n+t))}function T(e,t,n,r,i){return i===undefined&&(i=1.70158),n*(e/=r)*e*((i+1)*e-i)+t}function N(e,t,n,r,i){return i===undefined&&(i=1.70158),n*((e=e/r-1)*e*((i+1)*e+i)+1)+t}function C(e,t,n,r,i){return i===undefined&&(i=1.70158),e/=r/2,e<1?n/2*e*e*(((i*=1.525)+1)*e-i)+t:n/2*((e-=2)*e*(((i*=1.525)+1)*e+i)+2)+t}function k(e,t,n,r){return n-L(r-e,0,n,r)+t}function L(e,t,n,r){return(e/=r)<1/2.75?n*7.5625*e*e+t:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+t:n*(7.5625*(e-=2.625/2.75)*e+.984375)+t}function A(e,t,n,r){return e<r/2?k(e*2,0,n,r)*.5+t:L(e*2-r,0,n,r)*.5+n*.5+t}fabric.util.ease={easeInQuad:e,easeOutQuad:t,easeInOutQuad:n,easeInCubic:r,easeOutCubic:i,easeInOutCubic:s,easeInQuart:o,easeOutQuart:u,easeInOutQuart:a,easeInQuint:f,easeOutQuint:l,easeInOutQuint:c,easeInSine:h,easeOutSine:p,easeInOutSine:d,easeInExpo:v,easeOutExpo:m,easeInOutExpo:g,easeInCirc:y,easeOutCirc:b,easeInOutCirc:w,easeInElastic:E,easeOutElastic:S,easeInOutElastic:x,easeInBack:T,easeOutBack:N,easeInOutBack:C,easeInBounce:k,easeOutBounce:L,easeInOutBounce:A}}(),function(e){"use strict";function f(e){return e in u?u[e]:e}function l(e,n,r){var i;e!=="fill"&&e!=="stroke"||n!=="none"?e==="fillRule"?n=n==="evenodd"?"destination-over":n:e==="strokeDashArray"?n=n.replace(/,/g," ").split(/\s+/):e==="transformMatrix"&&(r&&r.transformMatrix?n=o(r.transformMatrix,t.parseTransformAttribute(n)):n=t.parseTransformAttribute(n)):n="",i=Object.prototype.toString.call(n)==="[object Array]";var s=i?n.map(parseFloat):parseFloat(n);return!i&&isNaN(s)?n:s}function c(e){for(var n in a){if(!e[n]||typeof e[a[n]]=="undefined")continue;if(e[n].indexOf("url(")===0)continue;var r=new t.Color(e[n]);e[n]=r.setAlpha(s(r.getAlpha()*e[a[n]],2)).toRgba(),delete e[a[n]]}return e}function h(e,r){if(!e)return;var i,s={};e.parentNode&&/^g$/i.test(e.parentNode.nodeName)&&(s=t.parseAttributes(e.parentNode,r));var o=r.reduce(function(t,n){return i=e.getAttribute(n),i&&(n=f(n),i=l(n,i,s),t[n]=i),t},{});return o=n(o,n(b(e),t.parseStyleAttribute(e))),c(n(s,o))}function p(e){if(!e)return null;e=e.trim();var t=e.indexOf(",")>-1;e=e.split(/\s+/);var n=[],r,i;if(t){r=0,i=e.length;for(;r<i;r++){var s=e[r].split(",");n.push({x:parseFloat(s[0]),y:parseFloat(s[1])})}}else{r=0,i=e.length;for(;r<i;r+=2)n.push({x:parseFloat(e[r]),y:parseFloat(e[r+1])})}return n.length%2!==0,n}function d(e,t){var n=e.match(/(normal|italic)?\s*(normal|small-caps)?\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\s*(\d+)px(?:\/(normal|[\d\.]+))?\s+(.*)/);if(!n)return;var r=n[1],i=n[3],s=n[4],o=n[5],u=n[6];r&&(t.fontStyle=r),i&&(t.fontSize=isNaN(parseFloat(i))?i:parseFloat(i)),s&&(t.fontSize=parseFloat(s)),u&&(t.fontFamily=u),o&&(t.lineHeight=o==="normal"?1:o)}function v(e){var t={},n=e.getAttribute("style"),r,i;if(!n)return t;if(typeof n=="string")n.replace(/;$/,"").split(";").forEach(function(e){var n=e.split(":");r=f(n[0].trim().toLowerCase()),i=l(r,n[1].trim()),r==="font"?d(i,t):t[r]=i});else for(var s in n){if(typeof n[s]=="undefined")continue;r=f(s.toLowerCase()),i=l(r,n[s]),r==="font"?d(i,t):t[r]=i}return t}function m(e){for(var n=e.length;n--;){var r=e[n].get("fill");if(/^url\(/.test(r)){var i=r.slice(5,r.length-1);t.gradientDefs[i]&&e[n].set("fill",t.Gradient.fromElement(t.gradientDefs[i],e[n]))}}}function g(e,n,i,s){function a(){--u===0&&(o=o.filter(function(e){return e!=null}),m(o),n(o))}var o=new Array(e.length),u=e.length;for(var f=0,l,c=e.length;f<c;f++){l=e[f];var h=t[r(l.tagName)];if(h&&h.fromElement)try{if(h.async)h.fromElement(l,function(e,t){return function(n){s&&s(t,n),o.splice(e,0,n),a()}}(f,l),i);else{var p=h.fromElement(l,i);s&&s(l,p),o.splice(f,0,p),a()}}catch(d){t.log(d)}else a()}}function y(e){var t=e.getElementsByTagName("style"),n={},r;for(var i=0,s=t.length;i<s;i++){var o=t[0].textContent;o=o.replace(/\/\*[\s\S]*?\*\//g,""),r=o.match(/[^{]*\{[\s\S]*?\}/g),r=r.map(function(e){return e.trim()}),r.forEach(function(e){var t=e.match(/([\s\S]*?)\s*\{([^}]*)\}/);e=t[1];var r=t[2].trim(),i=r.replace(/;$/,"").split(/\s*;\s*/);n[e]||(n[e]={});for(var s=0,o=i.length;s<o;s++){var u=i[s].split(/\s*:\s*/),a=u[0],f=u[1];n[e][a]=f}})}return n}function b(e){var n=e.nodeName,r=e.getAttribute("class"),i=e.getAttribute("id"),s={};for(var o in t.cssRules){var u=r&&(new RegExp("^\\."+r)).test(o)||i&&(new RegExp("^#"+i)).test(o)||(new RegExp("^"+n)).test(o);if(u)for(var a in t.cssRules[o])s[a]=t.cssRules[o][a]}return s}function E(e,n,r){function i(i){var s=i.responseXML;!s.documentElement&&t.window.ActiveXObject&&i.responseText&&(s=new ActiveXObject("Microsoft.XMLDOM"),s.async="false",s.loadXML(i.responseText.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i,"")));if(!s.documentElement)return;t.parseSVGDocument(s.documentElement,function(r,i){w.set(e,{objects:t.util.array.invoke(r,"toObject"),options:i}),n(r,i)},r)}e=e.replace(/^\n\s*/,"").trim(),w.has(e,function(r){r?w.get(e,function(e){var t=S(e);n(t.objects,t.options)}):new t.util.request(e,{method:"get",onComplete:i})})}function S(e){var n=e.objects,i=e.options;return n=n.map(function(e){return t[r(e.type)].fromObject(e)}),{objects:n,options:i}}function x(e,n,r){e=e.trim();var i;if(typeof DOMParser!="undefined"){var s=new DOMParser;s&&s.parseFromString&&(i=s.parseFromString(e,"text/xml"))}else t.window.ActiveXObject&&(i=new ActiveXObject("Microsoft.XMLDOM"),i.async="false",i.loadXML(e.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i,"")));t.parseSVGDocument(i.documentElement,function(e,t){n(e,t)},r)}function T(e){var t="";for(var n=0,r=e.length;n<r;n++){if(e[n].type!=="text"||!e[n].path)continue;t+=["@font-face {","font-family: ",e[n].fontFamily,"; ","src: url('",e[n].path,"')","}"].join("")}return t&&(t=['<style type="text/css">',"<![CDATA[",t,"]]>","</style>"].join("")),t}function N(e){var t="";return e.backgroundColor&&e.backgroundColor.source&&(t=['<pattern x="0" y="0" id="backgroundColorPattern" ','width="',e.backgroundColor.source.width,'" height="',e.backgroundColor.source.height,'" patternUnits="userSpaceOnUse">','<image x="0" y="0" ','width="',e.backgroundColor.source.width,'" height="',e.backgroundColor.source.height,'" xlink:href="',e.backgroundColor.source.src,'"></image></pattern>'].join("")),t}function C(e){var t=e.getElementsByTagName("linearGradient"),n=e.getElementsByTagName("radialGradient"),r,i,s={};i=t.length;for(;i--;)r=t[i],s[r.getAttribute("id")]=r;i=n.length;for(;i--;)r=n[i],s[r.getAttribute("id")]=r;return s}var t=e.fabric||(e.fabric={}),n=t.util.object.extend,r=t.util.string.capitalize,i=t.util.object.clone,s=t.util.toFixed,o=t.util.multiplyTransformMatrices;t.SHARED_ATTRIBUTES=["transform","fill","fill-opacity","fill-rule","opacity","stroke","stroke-dasharray","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width"];var u={"fill-opacity":"fillOpacity","fill-rule":"fillRule","font-family":"fontFamily","font-size":"fontSize","font-style":"fontStyle","font-weight":"fontWeight",cx:"left",x:"left",r:"radius","stroke-dasharray":"strokeDashArray","stroke-linecap":"strokeLineCap","stroke-linejoin":"strokeLineJoin","stroke-miterlimit":"strokeMiterLimit","stroke-opacity":"strokeOpacity","stroke-width":"strokeWidth","text-decoration":"textDecoration",cy:"top",y:"top",transform:"transformMatrix"},a={stroke:"strokeOpacity",fill:"fillOpacity"};t.parseTransformAttribute=function(){function e(e,t){var n=t[0];e[0]=Math.cos(n),e[1]=Math.sin(n),e[2]=-Math.sin(n),e[3]=Math.cos(n)}function n(e,t){var n=t[0],r=t.length===2?t[1]:t[0];e[0]=n,e[3]=r}function r(e,t){e[2]=t[0]}function i(e,t){e[1]=t[0]}function s(e,t){e[4]=t[0],t.length===2&&(e[5]=t[1])}var o=[1,0,0,1,0,0],u="(?:[-+]?\\d+(?:\\.\\d+)?(?:e[-+]?\\d+)?)",a="(?:\\s+,?\\s*|,\\s*)",f="(?:(skewX)\\s*\\(\\s*("+u+")\\s*\\))",l="(?:(skewY)\\s*\\(\\s*("+u+")\\s*\\))",c="(?:(rotate)\\s*\\(\\s*("+u+")(?:"+a+"("+u+")"+a+"("+u+"))?\\s*\\))",h="(?:(scale)\\s*\\(\\s*("+u+")(?:"+a+"("+u+"))?\\s*\\))",p="(?:(translate)\\s*\\(\\s*("+u+")(?:"+a+"("+u+"))?\\s*\\))",d="(?:(matrix)\\s*\\(\\s*("+u+")"+a+"("+u+")"+a+"("+u+")"+a+"("+u+")"+a+"("+u+")"+a+"("+u+")"+"\\s*\\))",v="(?:"+d+"|"+p+"|"+h+"|"+c+"|"+f+"|"+l+")",m="(?:"+v+"(?:"+a+v+")*"+")",g="^\\s*(?:"+m+"?)\\s*$",y=new RegExp(g),b=new RegExp(v,"g");return function(u){var a=o.concat(),f=[];if(!u||u&&!y.test(u))return a;u.replace(b,function(t){var u=(new RegExp(v)).exec(t).filter(function(e){return e!==""&&e!=null}),l=u[1],c=u.slice(2).map(parseFloat);switch(l){case"translate":s(a,c);break;case"rotate":e(a,c);break;case"scale":n(a,c);break;case"skewX":r(a,c);break;case"skewY":i(a,c);break;case"matrix":a=c}f.push(a.concat()),a=o.concat()});var l=f[0];while(f.length>1)f.shift(),l=t.util.multiplyTransformMatrices(l,f[0]);return l}}(),t.parseSVGDocument=function(){function s(e,t){while(e&&(e=e.parentNode))if(t.test(e.nodeName))return!0;return!1}var e=/^(path|circle|polygon|polyline|ellipse|rect|line|image|text)$/,n="(?:[-+]?\\d+(?:\\.\\d+)?(?:e[-+]?\\d+)?)",r=new RegExp("^\\s*("+n+"+)\\s*,?"+"\\s*("+n+"+)\\s*,?"+"\\s*("+n+"+)\\s*,?"+"\\s*("+n+"+)\\s*"+"$");return function(n,o,u){if(!n)return;var a=new Date,f=t.util.toArray(n.getElementsByTagName("*"));if(f.length===0){f=n.selectNodes("//*[name(.)!='svg']");var l=[];for(var c=0,h=f.length;c<h;c++)l[c]=f[c];f=l}var p=f.filter(function(t){return e.test(t.tagName)&&!s(t,/^(?:pattern|defs)$/)});if(!p||p&&!p.length)return;var d=n.getAttribute("viewBox"),v=n.getAttribute("width"),m=n.getAttribute("height"),g=null,b=null,w,E;d&&(d=d.match(r))&&(w=parseInt(d[1],10),E=parseInt(d[2],10),g=parseInt(d[3],10),b=parseInt(d[4],10)),g=v?parseFloat(v):g,b=m?parseFloat(m):b;var S={width:g,height:b};t.gradientDefs=t.getGradientDefs(n),t.cssRules=y(n),t.parseElements(p,function(e){t.documentParsingTime=new Date-a,o&&o(e,S)},i(S),u)}}();var w={has:function(e,t){t(!1)},get:function(){},set:function(){}};n(t,{parseAttributes:h,parseElements:g,parseStyleAttribute:v,parsePointsAttribute:p,getCSSRules:y,loadSVGFromURL:E,loadSVGFromString:x,createSVGFontFacesMarkup:T,createSVGRefElementsMarkup:N,getGradientDefs:C})}(typeof exports!="undefined"?exports:this),function(e){"use strict";function n(e,t){this.x=e,this.y=t}var t=e.fabric||(e.fabric={});if(t.Point){t.warn("fabric.Point is already defined");return}t.Point=n,n.prototype={constructor:n,add:function(e){return new n(this.x+e.x,this.y+e.y)},addEquals:function(e){return this.x+=e.x,this.y+=e.y,this},scalarAdd:function(e){return new n(this.x+e,this.y+e)},scalarAddEquals:function(e){return this.x+=e,this.y+=e,this},subtract:function(e){return new n(this.x-e.x,this.y-e.y)},subtractEquals:function(e){return this.x-=e.x,this.y-=e.y,this},scalarSubtract:function(e){return new n(this.x-e,this.y-e)},scalarSubtractEquals:function(e){return this.x-=e,this.y-=e,this},multiply:function(e){return new n(this.x*e,this.y*e)},multiplyEquals:function(e){return this.x*=e,this.y*=e,this},divide:function(e){return new n(this.x/e,this.y/e)},divideEquals:function(e){return this.x/=e,this.y/=e,this},eq:function(e){return this.x===e.x&&this.y===e.y},lt:function(e){return this.x<e.x&&this.y<e.y},lte:function(e){return this.x<=e.x&&this.y<=e.y},gt:function(e){return this.x>e.x&&this.y>e.y},gte:function(e){return this.x>=e.x&&this.y>=e.y},lerp:function(e,t){return new n(this.x+(e.x-this.x)*t,this.y+(e.y-this.y)*t)},distanceFrom:function(e){var t=this.x-e.x,n=this.y-e.y;return Math.sqrt(t*t+n*n)},midPointFrom:function(e){return new n(this.x+(e.x-this.x)/2,this.y+(e.y-this.y)/2)},min:function(e){return new n(Math.min(this.x,e.x),Math.min(this.y,e.y))},max:function(e){return new n(Math.max(this.x,e.x),Math.max(this.y,e.y))},toString:function(){return this.x+","+this.y},setXY:function(e,t){this.x=e,this.y=t},setFromPoint:function(e){this.x=e.x,this.y=e.y},swap:function(e){var t=this.x,n=this.y;this.x=e.x,this.y=e.y,e.x=t,e.y=n}}}(typeof exports!="undefined"?exports:this),function(e){"use strict";function n(e){this.status=e,this.points=[]}var t=e.fabric||(e.fabric={});if(t.Intersection){t.warn("fabric.Intersection is already defined");return}t.Intersection=n,t.Intersection.prototype={appendPoint:function(e){this.points.push(e)},appendPoints:function(e){this.points=this.points.concat(e)}},t.Intersection.intersectLineLine=function(e,r,i,s){var o,u=(s.x-i.x)*(e.y-i.y)-(s.y-i.y)*(e.x-i.x),a=(r.x-e.x)*(e.y-i.y)-(r.y-e.y)*(e.x-i.x),f=(s.y-i.y)*(r.x-e.x)-(s.x-i.x)*(r.y-e.y);if(f!==0){var l=u/f,c=a/f;0<=l&&l<=1&&0<=c&&c<=1?(o=new n("Intersection"),o.points.push(new t.Point(e.x+l*(r.x-e.x),e.y+l*(r.y-e.y)))):o=new n}else u===0||a===0?o=new n("Coincident"):o=new n("Parallel");return o},t.Intersection.intersectLinePolygon=function(e,t,r){var i=new n,s=r.length;for(var o=0;o<s;o++){var u=r[o],a=r[(o+1)%s],f=n.intersectLineLine(e,t,u,a);i.appendPoints(f.points)}return i.points.length>0&&(i.status="Intersection"),i},t.Intersection.intersectPolygonPolygon=function(e,t){var r=new n,i=e.length;for(var s=0;s<i;s++){var o=e[s],u=e[(s+1)%i],a=n.intersectLinePolygon(o,u,t);r.appendPoints(a.points)}return r.points.length>0&&(r.status="Intersection"),r},t.Intersection.intersectPolygonRectangle=function(e,r,i){var s=r.min(i),o=r.max(i),u=new t.Point(o.x,s.y),a=new t.Point(s.x,o.y),f=n.intersectLinePolygon(s,u,e),l=n.intersectLinePolygon(u,o,e),c=n.intersectLinePolygon(o,a,e),h=n.intersectLinePolygon(a,s,e),p=new n;return p.appendPoints(f.points),p.appendPoints(l.points),p.appendPoints(c.points),p.appendPoints(h.points),p.points.length>0&&(p.status="Intersection"),p}}(typeof exports!="undefined"?exports:this),function(e){"use strict";function n(e){e?this._tryParsingColor(e):this.setSource([0,0,0,1])}function r(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}var t=e.fabric||(e.fabric={});if(t.Color){t.warn("fabric.Color is already defined.");return}t.Color=n,t.Color.prototype={_tryParsingColor:function(e){var t;e in n.colorNameMap&&(e=n.colorNameMap[e]),t=n.sourceFromHex(e),t||(t=n.sourceFromRgb(e)),t||(t=n.sourceFromHsl(e)),t&&this.setSource(t)},_rgbToHsl:function(e,n,r){e/=255,n/=255,r/=255;var i,s,o,u=t.util.array.max([e,n,r]),a=t.util.array.min([e,n,r]);o=(u+a)/2;if(u===a)i=s=0;else{var f=u-a;s=o>.5?f/(2-u-a):f/(u+a);switch(u){case e:i=(n-r)/f+(n<r?6:0);break;case n:i=(r-e)/f+2;break;case r:i=(e-n)/f+4}i/=6}return[Math.round(i*360),Math.round(s*100),Math.round(o*100)]},getSource:function(){return this._source},setSource:function(e){this._source=e},toRgb:function(){var e=this.getSource();return"rgb("+e[0]+","+e[1]+","+e[2]+")"},toRgba:function(){var e=this.getSource();return"rgba("+e[0]+","+e[1]+","+e[2]+","+e[3]+")"},toHsl:function(){var e=this.getSource(),t=this._rgbToHsl(e[0],e[1],e[2]);return"hsl("+t[0]+","+t[1]+"%,"+t[2]+"%)"},toHsla:function(){var e=this.getSource(),t=this._rgbToHsl(e[0],e[1],e[2]);return"hsla("+t[0]+","+t[1]+"%,"+t[2]+"%,"+e[3]+")"},toHex:function(){var e=this.getSource(),t=e[0].toString(16);t=t.length===1?"0"+t:t;var n=e[1].toString(16);n=n.length===1?"0"+n:n;var r=e[2].toString(16);return r=r.length===1?"0"+r:r,t.toUpperCase()+n.toUpperCase()+r.toUpperCase()},getAlpha:function(){return this.getSource()[3]},setAlpha:function(e){var t=this.getSource();return t[3]=e,this.setSource(t),this},toGrayscale:function(){var e=this.getSource(),t=parseInt((e[0]*.3+e[1]*.59+e[2]*.11).toFixed(0),10),n=e[3];return this.setSource([t,t,t,n]),this},toBlackWhite:function(e){var t=this.getSource(),n=(t[0]*.3+t[1]*.59+t[2]*.11).toFixed(0),r=t[3];return e=e||127,n=Number(n)<Number(e)?0:255,this.setSource([n,n,n,r]),this},overlayWith:function(e){e instanceof n||(e=new n(e));var t=[],r=this.getAlpha(),i=.5,s=this.getSource(),o=e.getSource();for(var u=0;u<3;u++)t.push(Math.round(s[u]*(1-i)+o[u]*i));return t[3]=r,this.setSource(t),this}},t.Color.reRGBa=/^rgba?\(\s*(\d{1,3}\%?)\s*,\s*(\d{1,3}\%?)\s*,\s*(\d{1,3}\%?)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/,t.Color.reHSLa=/^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/,t.Color.reHex=/^#?([0-9a-f]{6}|[0-9a-f]{3})$/i,t.Color.colorNameMap={aqua:"#00FFFF",black:"#000000",blue:"#0000FF",fuchsia:"#FF00FF",gray:"#808080",green:"#008000",lime:"#00FF00",maroon:"#800000",navy:"#000080",olive:"#808000",orange:"#FFA500",purple:"#800080",red:"#FF0000",silver:"#C0C0C0",teal:"#008080",white:"#FFFFFF",yellow:"#FFFF00"},t.Color.fromRgb=function(e){return n.fromSource(n.sourceFromRgb(e))},t.Color.sourceFromRgb=function(e){var t=e.match(n.reRGBa);if(t){var r=parseInt(t[1],10)/(/%$/.test(t[1])?100:1)*(/%$/.test(t[1])?255:1),i=parseInt(t[2],10)/(/%$/.test(t[2])?100:1)*(/%$/.test(t[2])?255:1),s=parseInt(t[3],10)/(/%$/.test(t[3])?100:1)*(/%$/.test(t[3])?255:1);return[parseInt(r,10),parseInt(i,10),parseInt(s,10),t[4]?parseFloat(t[4]):1]}},t.Color.fromRgba=n.fromRgb,t.Color.fromHsl=function(e){return n.fromSource(n.sourceFromHsl(e))},t.Color.sourceFromHsl=function(e){var t=e.match(n.reHSLa);if(!t)return;var i=(parseFloat(t[1])%360+360)%360/360,s=parseFloat(t[2])/(/%$/.test(t[2])?100:1),o=parseFloat(t[3])/(/%$/.test(t[3])?100:1),u,a,f;if(s===0)u=a=f=o;else{var l=o<=.5?o*(s+1):o+s-o*s,c=o*2-l;u=r(c,l,i+1/3),a=r(c,l,i),f=r(c,l,i-1/3)}return[Math.round(u*255),Math.round(a*255),Math.round(f*255),t[4]?parseFloat(t[4]):1]},t.Color.fromHsla=n.fromHsl,t.Color.fromHex=function(e){return n.fromSource(n.sourceFromHex(e))},t.Color.sourceFromHex=function(e){if(e.match(n.reHex)){var t=e.slice(e.indexOf("#")+1),r=t.length===3,i=r?t.charAt(0)+t.charAt(0):t.substring(0,2),s=r?t.charAt(1)+t.charAt(1):t.substring(2,4),o=r?t.charAt(2)+t.charAt(2):t.substring(4,6);return[parseInt(i,16),parseInt(s,16),parseInt(o,16),1]}},t.Color.fromSource=function(e){var t=new n;return t.setSource(e),t}}(typeof exports!="undefined"?exports:this),function(){function e(e){var t=e.getAttribute("style"),n=e.getAttribute("offset"),r,i;n=parseFloat(n)/(/%$/.test(n)?100:1);if(t){var s=t.split(/\s*;\s*/);s[s.length-1]===""&&s.pop();for(var o=s.length;o--;){var u=s[o].split(/\s*:\s*/),a=u[0].trim(),f=u[1].trim();a==="stop-color"?r=f:a==="stop-opacity"&&(i=f)}}return r||(r=e.getAttribute("stop-color")||"rgb(0,0,0)"),i||(i=e.getAttribute("stop-opacity")),r=(new fabric.Color(r)).toRgb(),{offset:n,color:r,opacity:isNaN(parseFloat(i))?1:parseFloat(i)}}function t(e,t){for(var n in t){if(typeof t[n]=="string"&&/^\d+%$/.test(t[n])){var r=parseFloat(t[n],10);if(n==="x1"||n==="x2"||n==="r2")t[n]=fabric.util.toFixed(e.width*r/100,2);else if(n==="y1"||n==="y2")t[n]=fabric.util.toFixed(e.height*r/100,2)}if(n==="x1"||n==="x2")t[n]-=fabric.util.toFixed(e.width/2,2);else if(n==="y1"||n==="y2")t[n]-=fabric.util.toFixed(e.height/2,2)}}function n(e,t){for(var n in t){if(n==="x1"||n==="x2")t[n]+=fabric.util.toFixed(e.width/2,2);else if(n==="y1"||n==="y2")t[n]+=fabric.util.toFixed(e.height/2,2);if(n==="x1"||n==="x2"||n==="r2")t[n]=fabric.util.toFixed(t[n]/e.width*100,2)+"%";else if(n==="y1"||n==="y2")t[n]=fabric.util.toFixed(t[n]/e.height*100,2)+"%"}}fabric.Gradient=fabric.util.createClass({initialize:function(e){e||(e={});var t={};this.id=fabric.Object.__uid++,this.type=e.type||"linear",t={x1:e.coords.x1||0,y1:e.coords.y1||0,x2:e.coords.x2||0,y2:e.coords.y2||0},this.type==="radial"&&(t.r1=e.coords.r1||0,t.r2=e.coords.r2||0),this.coords=t,this.gradientUnits=e.gradientUnits||"objectBoundingBox",this.colorStops=e.colorStops.slice()},addColorStop:function(e){for(var t in e){var n=new fabric.Color(e[t]);this.colorStops.push({offset:t,color:n.toRgb(),opacity:n.getAlpha()})}return this},toObject:function(){return{type:this.type,coords:this.coords,gradientUnits:this.gradientUnits,colorStops:this.colorStops}},toSVG:function(e,t){var r=fabric.util.object.clone(this.coords),i;this.colorStops.sort(function(e,t){return e.offset-t.offset}),t&&this.gradientUnits==="userSpaceOnUse"?(r.x1+=e.width/2,r.y1+=e.height/2,r.x2+=e.width/2,r.y2+=e.height/2):this.gradientUnits==="objectBoundingBox"&&n(e,r),this.type==="linear"?i=["<linearGradient ",'id="SVGID_',this.id,'" gradientUnits="',this.gradientUnits,'" x1="',r.x1,'" y1="',r.y1,'" x2="',r.x2,'" y2="',r.y2,'">']:this.type==="radial"&&(i=["<radialGradient ",'id="SVGID_',this.id,'" gradientUnits="',this.gradientUnits,'" cx="',r.x2,'" cy="',r.y2,'" r="',r.r2,'" fx="',r.x1,'" fy="',r.y1,'">']);for(var s=0;s<this.colorStops.length;s++)i.push("<stop ",'offset="',this.colorStops[s].offset*100+"%",'" style="stop-color:',this.colorStops[s].color,this.colorStops[s].opacity?";stop-opacity: "+this.colorStops[s].opacity:";",'"/>');return i.push(this.type==="linear"?"</linearGradient>":"</radialGradient>"),i.join("")},toLive:function(e){var t;if(!this.type)return;this.type==="linear"?t=e.createLinearGradient(this.coords.x1,this.coords.y1,this.coords.x2,this.coords.y2):this.type==="radial"&&(t=e.createRadialGradient(this.coords.x1,this.coords.y1,this.coords.r1,this.coords.x2,this.coords.y2,this.coords.r2));for(var n=0,r=this.colorStops.length;n<r;n++){var i=this.colorStops[n].color,s=this.colorStops[n].opacity,o=this.colorStops[n].offset;typeof s!="undefined"&&(i=(new fabric.Color(i)).setAlpha(s).toRgba()),t.addColorStop(parseFloat(o),i)}return t}}),fabric.util.object.extend(fabric.Gradient,{fromElement:function(n,r){var i=n.getElementsByTagName("stop"),s=n.nodeName==="linearGradient"?"linear":"radial",o=n.getAttribute("gradientUnits")||"objectBoundingBox",u=[],a={};s==="linear"?a={x1:n.getAttribute("x1")||0,y1:n.getAttribute("y1")||0,x2:n.getAttribute("x2")||"100%",y2:n.getAttribute("y2")||0}:s==="radial"&&(a={x1:n.getAttribute("fx")||n.getAttribute("cx")||"50%",y1:n.getAttribute("fy")||n.getAttribute("cy")||"50%",r1:0,x2:n.getAttribute("cx")||"50%",y2:n.getAttribute("cy")||"50%",r2:n.getAttribute("r")||"50%"});for(var f=i.length;f--;)u.push(e(i[f]));return t(r,a),new fabric.Gradient({type:s,coords:a,gradientUnits:o,colorStops:u})},forObject:function(e,n){return n||(n={}),t(e,n),new fabric.Gradient(n)}})}(),fabric.Pattern=fabric.util.createClass({repeat:"repeat",offsetX:0,offsetY:0,initialize:function(e){e||(e={}),this.id=fabric.Object.__uid++;if(e.source)if(typeof e.source=="string")if(typeof fabric.util.getFunctionBody(e.source)!="undefined")this.source=new Function(fabric.util.getFunctionBody(e.source));else{var t=this;this.source=fabric.util.createImage(),fabric.util.loadImage(e.source,function(e){t.source=e})}else this.source=e.source;e.repeat&&(this.repeat=e.repeat),e.offsetX&&(this.offsetX=e.offsetX),e.offsetY&&(this.offsetY=e.offsetY)},toObject:function(){var e;return typeof this.source=="function"?e=String(this.source):typeof this.source.src=="string"&&(e=this.source.src),{source:e,repeat:this.repeat,offsetX:this.offsetX,offsetY:this.offsetY}},toSVG:function(e){var t=typeof this.source=="function"?this.source():this.source,n=t.width/e.getWidth(),r=t.height/e.getHeight(),i="";return t.src?i=t.src:t.toDataURL&&(i=t.toDataURL()),'<pattern id="SVGID_'+this.id+'" x="'+this.offsetX+'" y="'+this.offsetY+'" width="'+n+'" height="'+r+'">'+'<image x="0" y="0"'+' width="'+t.width+'" height="'+t.height+'" xlink:href="'+i+'"></image>'+"</pattern>"},toLive:function(e){var t=typeof this.source=="function"?this.source():this.source;return e.createPattern(t,this.repeat)}}),function(e){"use strict";var t=e.fabric||(e.fabric={});if(t.Shadow){t.warn("fabric.Shadow is already defined.");return}t.Shadow=t.util.createClass({color:"rgb(0,0,0)",blur:0,offsetX:0,offsetY:0,affectStroke:!1,initialize:function(e){typeof e=="string"&&(e=this._parseShadow(e));for(var n in e)this[n]=e[n];this.id=t.Object.__uid++},_parseShadow:function(e){var n=e.trim(),r=t.Shadow.reOffsetsAndBlur.exec(n)||[],i=n.replace(t.Shadow.reOffsetsAndBlur,"")||"rgb(0,0,0)";return{color:i.trim(),offsetX:parseInt(r[1],10)||0,offsetY:parseInt(r[2],10)||0,blur:parseInt(r[3],10)||0}},toString:function(){return[this.offsetX,this.offsetY,this.blur,this.color].join("px ")},toSVG:function(e){var t="SourceAlpha";return e&&(e.fill===this.color||e.stroke===this.color)&&(t="SourceGraphic"),'<filter id="SVGID_'+this.id+'" y="-40%" height="180%">'+'<feGaussianBlur in="'+t+'" stdDeviation="'+(this.blur?this.blur/3:0)+'"></feGaussianBlur>'+'<feOffset dx="'+this.offsetX+'" dy="'+this.offsetY+'"></feOffset>'+"<feMerge>"+"<feMergeNode></feMergeNode>"+'<feMergeNode in="SourceGraphic"></feMergeNode>'+"</feMerge>"+"</filter>"
},toObject:function(){return{color:this.color,blur:this.blur,offsetX:this.offsetX,offsetY:this.offsetY}}}),t.Shadow.reOffsetsAndBlur=/(?:\s|^)(-?\d+(?:px)?(?:\s?|$))?(-?\d+(?:px)?(?:\s?|$))?(\d+(?:px)?)?(?:\s?|$)(?:$|\s)/}(typeof exports!="undefined"?exports:this),function(){"use strict";if(fabric.StaticCanvas){fabric.warn("fabric.StaticCanvas is already defined.");return}var e=fabric.util.object.extend,t=fabric.util.getElementOffset,n=fabric.util.removeFromArray,r=fabric.util.removeListener,i=new Error("Could not initialize `canvas` element");fabric.StaticCanvas=fabric.util.createClass({initialize:function(e,t){t||(t={}),this._initStatic(e,t),fabric.StaticCanvas.activeInstance=this},backgroundColor:"",backgroundImage:"",backgroundImageOpacity:1,backgroundImageStretch:!0,overlayImage:"",overlayImageLeft:0,overlayImageTop:0,includeDefaultValues:!0,stateful:!0,renderOnAddRemove:!0,clipTo:null,controlsAboveOverlay:!1,allowTouchScrolling:!1,onBeforeScaleRotate:function(){},_initStatic:function(e,t){this._objects=[],this._createLowerCanvas(e),this._initOptions(t),t.overlayImage&&this.setOverlayImage(t.overlayImage,this.renderAll.bind(this)),t.backgroundImage&&this.setBackgroundImage(t.backgroundImage,this.renderAll.bind(this)),t.backgroundColor&&this.setBackgroundColor(t.backgroundColor,this.renderAll.bind(this)),this.calcOffset()},calcOffset:function(){return this._offset=t(this.lowerCanvasEl),this},setOverlayImage:function(e,t,n){return fabric.util.loadImage(e,function(e){this.overlayImage=e,n&&"overlayImageLeft"in n&&(this.overlayImageLeft=n.overlayImageLeft),n&&"overlayImageTop"in n&&(this.overlayImageTop=n.overlayImageTop),t&&t()},this),this},setBackgroundImage:function(e,t,n){return fabric.util.loadImage(e,function(e){this.backgroundImage=e,n&&"backgroundImageOpacity"in n&&(this.backgroundImageOpacity=n.backgroundImageOpacity),n&&"backgroundImageStretch"in n&&(this.backgroundImageStretch=n.backgroundImageStretch),t&&t()},this),this},setBackgroundColor:function(e,t){if(e.source){var n=this;fabric.util.loadImage(e.source,function(r){n.backgroundColor=new fabric.Pattern({source:r,repeat:e.repeat}),t&&t()})}else this.backgroundColor=e,t&&t();return this},_createCanvasElement:function(){var e=fabric.document.createElement("canvas");e.style||(e.style={});if(!e)throw i;return this._initCanvasElement(e),e},_initCanvasElement:function(e){fabric.util.createCanvasElement(e);if(typeof e.getContext=="undefined")throw i},_initOptions:function(e){for(var t in e)this[t]=e[t];this.width=parseInt(this.lowerCanvasEl.width,10)||0,this.height=parseInt(this.lowerCanvasEl.height,10)||0;if(!this.lowerCanvasEl.style)return;this.lowerCanvasEl.style.width=this.width+"px",this.lowerCanvasEl.style.height=this.height+"px"},_createLowerCanvas:function(e){this.lowerCanvasEl=fabric.util.getById(e)||this._createCanvasElement(),this._initCanvasElement(this.lowerCanvasEl),fabric.util.addClass(this.lowerCanvasEl,"lower-canvas"),this.interactive&&this._applyCanvasStyle(this.lowerCanvasEl),this.contextContainer=this.lowerCanvasEl.getContext("2d")},getWidth:function(){return this.width},getHeight:function(){return this.height},setWidth:function(e){return this._setDimension("width",e)},setHeight:function(e){return this._setDimension("height",e)},setDimensions:function(e){for(var t in e)this._setDimension(t,e[t]);return this},_setDimension:function(e,t){return this.lowerCanvasEl[e]=t,this.lowerCanvasEl.style[e]=t+"px",this.upperCanvasEl&&(this.upperCanvasEl[e]=t,this.upperCanvasEl.style[e]=t+"px"),this.cacheCanvasEl&&(this.cacheCanvasEl[e]=t),this.wrapperEl&&(this.wrapperEl.style[e]=t+"px"),this[e]=t,this.calcOffset(),this.renderAll(),this},getElement:function(){return this.lowerCanvasEl},getActiveObject:function(){return null},getActiveGroup:function(){return null},_draw:function(e,t){if(!t)return;if(this.controlsAboveOverlay){var n=t.hasBorders,r=t.hasControls;t.hasBorders=t.hasControls=!1,t.render(e),t.hasBorders=n,t.hasControls=r}else t.render(e)},_onObjectAdded:function(e){this.stateful&&e.setupState(),e.setCoords(),e.canvas=this,this.fire("object:added",{target:e}),e.fire("added")},_onObjectRemoved:function(e){this.fire("object:removed",{target:e}),e.fire("removed")},getObjects:function(){return this._objects},clearContext:function(e){return e.clearRect(0,0,this.width,this.height),this},getContext:function(){return this.contextContainer},clear:function(){return this._objects.length=0,this.discardActiveGroup&&this.discardActiveGroup(),this.discardActiveObject&&this.discardActiveObject(),this.clearContext(this.contextContainer),this.contextTop&&this.clearContext(this.contextTop),this.fire("canvas:cleared"),this.renderAll(),this},renderAll:function(e){var t=this[e===!0&&this.interactive?"contextTop":"contextContainer"];this.contextTop&&this.selection&&!this._groupSelector&&this.clearContext(this.contextTop),e||this.clearContext(t),this.fire("before:render"),this.clipTo&&fabric.util.clipContext(this,t),this.backgroundColor&&(t.fillStyle=this.backgroundColor.toLive?this.backgroundColor.toLive(t):this.backgroundColor,t.fillRect(this.backgroundColor.offsetX||0,this.backgroundColor.offsetY||0,this.width,this.height)),typeof this.backgroundImage=="object"&&this._drawBackroundImage(t);var n=this.getActiveGroup();for(var r=0,i=this._objects.length;r<i;++r)(!n||n&&this._objects[r]&&!n.contains(this._objects[r]))&&this._draw(t,this._objects[r]);if(n){var s=[];this.forEachObject(function(e){n.contains(e)&&s.push(e)}),n._set("objects",s),this._draw(t,n)}return this.clipTo&&t.restore(),this.overlayImage&&t.drawImage(this.overlayImage,this.overlayImageLeft,this.overlayImageTop),this.controlsAboveOverlay&&this.interactive&&this.drawControls(t),this.fire("after:render"),this},_drawBackroundImage:function(e){e.save(),e.globalAlpha=this.backgroundImageOpacity,this.backgroundImageStretch?e.drawImage(this.backgroundImage,0,0,this.width,this.height):e.drawImage(this.backgroundImage,0,0),e.restore()},renderTop:function(){var e=this.contextTop||this.contextContainer;this.clearContext(e),this.selection&&this._groupSelector&&this._drawSelection();var t=this.getActiveGroup();return t&&t.render(e),this.overlayImage&&e.drawImage(this.overlayImage,this.overlayImageLeft,this.overlayImageTop),this.fire("after:render"),this},getCenter:function(){return{top:this.getHeight()/2,left:this.getWidth()/2}},centerObjectH:function(e){return e.set("left",this.getCenter().left),this.renderAll(),this},centerObjectV:function(e){return e.set("top",this.getCenter().top),this.renderAll(),this},centerObject:function(e){return this.centerObjectH(e).centerObjectV(e)},toDatalessJSON:function(e){return this.toDatalessObject(e)},toObject:function(e){return this._toObjectMethod("toObject",e)},toDatalessObject:function(e){return this._toObjectMethod("toDatalessObject",e)},_toObjectMethod:function(e,t){var n=this.getActiveGroup();n&&this.discardActiveGroup();var r={objects:this.getObjects().map(function(n){var r;this.includeDefaultValues||(r=n.includeDefaultValues,n.includeDefaultValues=!1);var i=n[e](t);return this.includeDefaultValues||(n.includeDefaultValues=r),i},this),background:this.backgroundColor&&this.backgroundColor.toObject?this.backgroundColor.toObject():this.backgroundColor};return this.backgroundImage&&(r.backgroundImage=this.backgroundImage.src,r.backgroundImageOpacity=this.backgroundImageOpacity,r.backgroundImageStretch=this.backgroundImageStretch),this.overlayImage&&(r.overlayImage=this.overlayImage.src,r.overlayImageLeft=this.overlayImageLeft,r.overlayImageTop=this.overlayImageTop),fabric.util.populateWithProperties(this,r,t),n&&(this.setActiveGroup(new fabric.Group(n.getObjects())),n.forEachObject(function(e){e.set("active",!0)})),r},toSVG:function(e){e||(e={});var t=[];e.suppressPreamble||t.push('<?xml version="1.0" encoding="',e.encoding||"UTF-8",'" standalone="no" ?>','<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ','"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n'),t.push("<svg ",'xmlns="http://www.w3.org/2000/svg" ','xmlns:xlink="http://www.w3.org/1999/xlink" ','version="1.1" ','width="',e.viewBox?e.viewBox.width:this.width,'" ','height="',e.viewBox?e.viewBox.height:this.height,'" ',this.backgroundColor&&!this.backgroundColor.source?'style="background-color: '+this.backgroundColor+'" ':null,e.viewBox?'viewBox="'+e.viewBox.x+" "+e.viewBox.y+" "+e.viewBox.width+" "+e.viewBox.height+'" ':null,'xml:space="preserve">',"<desc>Created with Fabric.js ",fabric.version,"</desc>","<defs>",fabric.createSVGFontFacesMarkup(this.getObjects()),fabric.createSVGRefElementsMarkup(this),"</defs>"),this.backgroundColor&&this.backgroundColor.source&&t.push('<rect x="0" y="0" ','width="',this.backgroundColor.repeat==="repeat-y"||this.backgroundColor.repeat==="no-repeat"?this.backgroundColor.source.width:this.width,'" height="',this.backgroundColor.repeat==="repeat-x"||this.backgroundColor.repeat==="no-repeat"?this.backgroundColor.source.height:this.height,'" fill="url(#backgroundColorPattern)"',"></rect>"),this.backgroundImage&&t.push('<image x="0" y="0" ','width="',this.backgroundImageStretch?this.width:this.backgroundImage.width,'" height="',this.backgroundImageStretch?this.height:this.backgroundImage.height,'" preserveAspectRatio="',this.backgroundImageStretch?"none":"defer",'" xlink:href="',this.backgroundImage.src,'" style="opacity:',this.backgroundImageOpacity,'"></image>'),this.overlayImage&&t.push('<image x="',this.overlayImageLeft,'" y="',this.overlayImageTop,'" width="',this.overlayImage.width,'" height="',this.overlayImage.height,'" xlink:href="',this.overlayImage.src,'"></image>');var n=this.getActiveGroup();n&&this.discardActiveGroup();for(var r=0,i=this.getObjects(),s=i.length;r<s;r++)t.push(i[r].toSVG());return n&&(this.setActiveGroup(new fabric.Group(n.getObjects())),n.forEachObject(function(e){e.set("active",!0)})),t.push("</svg>"),t.join("")},remove:function(e){return this.getActiveObject()===e&&(this.fire("before:selection:cleared",{target:e}),this.discardActiveObject(),this.fire("selection:cleared")),fabric.Collection.remove.call(this,e)},sendToBack:function(e){return n(this._objects,e),this._objects.unshift(e),this.renderAll&&this.renderAll()},bringToFront:function(e){return n(this._objects,e),this._objects.push(e),this.renderAll&&this.renderAll()},sendBackwards:function(e,t){var r=this._objects.indexOf(e);if(r!==0){var i;if(t){i=r;for(var s=r-1;s>=0;--s){var o=e.intersectsWithObject(this._objects[s])||e.isContainedWithinObject(this._objects[s])||this._objects[s].isContainedWithinObject(e);if(o){i=s;break}}}else i=r-1;n(this._objects,e),this._objects.splice(i,0,e),this.renderAll&&this.renderAll()}return this},bringForward:function(e,t){var r=this._objects.indexOf(e);if(r!==this._objects.length-1){var i;if(t){i=r;for(var s=r+1;s<this._objects.length;++s){var o=e.intersectsWithObject(this._objects[s])||e.isContainedWithinObject(this._objects[s])||this._objects[s].isContainedWithinObject(e);if(o){i=s;break}}}else i=r+1;n(this._objects,e),this._objects.splice(i,0,e),this.renderAll&&this.renderAll()}return this},moveTo:function(e,t){return n(this._objects,e),this._objects.splice(t,0,e),this.renderAll&&this.renderAll()},dispose:function(){return this.clear(),this.interactive?(fabric.isTouchSupported?(r(this.upperCanvasEl,"touchstart",this._onMouseDown),r(this.upperCanvasEl,"touchmove",this._onMouseMove),typeof Event!="undefined"&&"remove"in Event&&Event.remove(this.upperCanvasEl,"gesture",this._onGesture)):(r(this.upperCanvasEl,"mousedown",this._onMouseDown),r(this.upperCanvasEl,"mousemove",this._onMouseMove),r(fabric.window,"resize",this._onResize)),this):this},toString:function(){return"#<fabric.Canvas ("+this.complexity()+"): "+"{ objects: "+this.getObjects().length+" }>"}}),e(fabric.StaticCanvas.prototype,fabric.Observable),e(fabric.StaticCanvas.prototype,fabric.Collection),e(fabric.StaticCanvas.prototype,fabric.DataURLExporter),e(fabric.StaticCanvas,{EMPTY_JSON:'{"objects": [], "background": "white"}',toGrayscale:function(e){var t=e.getContext("2d"),n=t.getImageData(0,0,e.width,e.height),r=n.data,i=n.width,s=n.height,o,u,a,f;for(a=0;a<i;a++)for(f=0;f<s;f++)o=a*4*s+f*4,u=(r[o]+r[o+1]+r[o+2])/3,r[o]=u,r[o+1]=u,r[o+2]=u;t.putImageData(n,0,0)},supports:function(e){var t=fabric.util.createCanvasElement();if(!t||!t.getContext)return null;var n=t.getContext("2d");if(!n)return null;switch(e){case"getImageData":return typeof n.getImageData!="undefined";case"setLineDash":return typeof n.setLineDash!="undefined";case"toDataURL":return typeof t.toDataURL!="undefined";case"toDataURLWithQuality":try{return t.toDataURL("image/jpeg",0),!0}catch(r){}return!1;default:return null}}}),fabric.StaticCanvas.prototype.toJSON=fabric.StaticCanvas.prototype.toObject}(),fabric.BaseBrush=fabric.util.createClass({color:"rgb(0, 0, 0)",width:1,shadow:null,strokeLineCap:"round",strokeLineJoin:"round",setShadow:function(e){return this.shadow=new fabric.Shadow(e),this},_setBrushStyles:function(){var e=this.canvas.contextTop;e.strokeStyle=this.color,e.lineWidth=this.width,e.lineCap=this.strokeLineCap,e.lineJoin=this.strokeLineJoin},_setShadow:function(){if(!this.shadow)return;var e=this.canvas.contextTop;e.shadowColor=this.shadow.color,e.shadowBlur=this.shadow.blur,e.shadowOffsetX=this.shadow.offsetX,e.shadowOffsetY=this.shadow.offsetY},_resetShadow:function(){var e=this.canvas.contextTop;e.shadowColor="",e.shadowBlur=e.shadowOffsetX=e.shadowOffsetY=0}}),function(){var e=fabric.util.array.min,t=fabric.util.array.max;fabric.PencilBrush=fabric.util.createClass(fabric.BaseBrush,{initialize:function(e){this.canvas=e,this._points=[]},onMouseDown:function(e){this._prepareForDrawing(e),this._captureDrawingPath(e),this._render()},onMouseMove:function(e){this._captureDrawingPath(e),this.canvas.clearContext(this.canvas.contextTop),this._render()},onMouseUp:function(){this._finalizeAndAddPath()},_prepareForDrawing:function(e){var t=new fabric.Point(e.x,e.y);this._reset(),this._addPoint(t),this.canvas.contextTop.moveTo(t.x,t.y)},_addPoint:function(e){this._points.push(e)},_reset:function(){this._points.length=0,this._setBrushStyles(),this._setShadow()},_captureDrawingPath:function(e){var t=new fabric.Point(e.x,e.y);this._addPoint(t)},_render:function(){var e=this.canvas.contextTop;e.beginPath();var t=this._points[0],n=this._points[1];this._points.length===2&&t.x===n.x&&t.y===n.y&&(t.x-=.5,n.x+=.5),e.moveTo(t.x,t.y);for(var r=1,i=this._points.length;r<i;r++){var s=t.midPointFrom(n);e.quadraticCurveTo(t.x,t.y,s.x,s.y),t=this._points[r],n=this._points[r+1]}e.lineTo(t.x,t.y),e.stroke()},_getSVGPathData:function(){return this.box=this.getPathBoundingBox(this._points),this.convertPointsToSVGPath(this._points,this.box.minx,this.box.maxx,this.box.miny,this.box.maxy)},getPathBoundingBox:function(n){var r=[],i=[],s=n[0],o=n[1],u=s;for(var a=1,f=n.length;a<f;a++){var l=s.midPointFrom(o);r.push(u.x),r.push(l.x),i.push(u.y),i.push(l.y),s=n[a],o=n[a+1],u=l}return r.push(s.x),i.push(s.y),{minx:e(r),miny:e(i),maxx:t(r),maxy:t(i)}},convertPointsToSVGPath:function(e,t,n,r){var i=[],s=new fabric.Point(e[0].x-t,e[0].y-r),o=new fabric.Point(e[1].x-t,e[1].y-r);i.push("M ",e[0].x-t," ",e[0].y-r," ");for(var u=1,a=e.length;u<a;u++){var f=s.midPointFrom(o);i.push("Q ",s.x," ",s.y," ",f.x," ",f.y," "),s=new fabric.Point(e[u].x-t,e[u].y-r),u+1<e.length&&(o=new fabric.Point(e[u+1].x-t,e[u+1].y-r))}return i.push("L ",s.x," ",s.y," "),i},createPath:function(e){var t=new fabric.Path(e);return t.fill=null,t.stroke=this.color,t.strokeWidth=this.width,t.strokeLineCap=this.strokeLineCap,t.strokeLineJoin=this.strokeLineJoin,this.shadow&&(this.shadow.affectStroke=!0,t.setShadow(this.shadow)),t},_finalizeAndAddPath:function(){var e=this.canvas.contextTop;e.closePath();var t=this._getSVGPathData().join("");if(t==="M 0 0 Q 0 0 0 0 L 0 0"){this.canvas.renderAll();return}var n=this.box.minx+(this.box.maxx-this.box.minx)/2,r=this.box.miny+(this.box.maxy-this.box.miny)/2;this.canvas.contextTop.arc(n,r,3,0,Math.PI*2,!1);var i=this.createPath(t);i.set({left:n,top:r}),this.canvas.add(i),i.setCoords(),this.canvas.clearContext(this.canvas.contextTop),this._resetShadow(),this.canvas.renderAll(),this.canvas.fire("path:created",{path:i})}})}(),fabric.CircleBrush=fabric.util.createClass(fabric.BaseBrush,{width:10,initialize:function(e){this.canvas=e,this.points=[]},drawDot:function(e){var t=this.addPoint(e),n=this.canvas.contextTop;n.fillStyle=t.fill,n.beginPath(),n.arc(t.x,t.y,t.radius,0,Math.PI*2,!1),n.closePath(),n.fill()},onMouseDown:function(e){this.points.length=0,this.canvas.clearContext(this.canvas.contextTop),this._setShadow(),this.drawDot(e)},onMouseMove:function(e){this.drawDot(e)},onMouseUp:function(){var e=this.canvas.renderOnAddRemove;this.canvas.renderOnAddRemove=!1;var t=[];for(var n=0,r=this.points.length;n<r;n++){var i=this.points[n],s=new fabric.Circle({radius:i.radius,left:i.x,top:i.y,fill:i.fill});this.shadow&&s.setShadow(this.shadow),t.push(s)}var o=new fabric.Group(t);this.canvas.add(o),this.canvas.fire("path:created",{path:o}),this.canvas.clearContext(this.canvas.contextTop),this._resetShadow(),this.canvas.renderOnAddRemove=e,this.canvas.renderAll()},addPoint:function(e){var t=new fabric.Point(e.x,e.y),n=fabric.util.getRandomInt(Math.max(0,this.width-20),this.width+20)/2,r=(new fabric.Color(this.color)).setAlpha(fabric.util.getRandomInt(0,100)/100).toRgba();return t.radius=n,t.fill=r,this.points.push(t),t}}),fabric.SprayBrush=fabric.util.createClass(fabric.BaseBrush,{width:10,density:20,dotWidth:1,dotWidthVariance:1,randomOpacity:!1,initialize:function(e){this.canvas=e,this.sprayChunks=[]},onMouseDown:function(e){this.sprayChunks.length=0,this.canvas.clearContext(this.canvas.contextTop),this._setShadow(),this.addSprayChunk(e),this.render()},onMouseMove:function(e){this.addSprayChunk(e),this.render()},onMouseUp:function(){var e=this.canvas.renderOnAddRemove;this.canvas.renderOnAddRemove=!1;var t=[];for(var n=0,r=this.sprayChunks.length;n<r;n++){var i=this.sprayChunks[n];for(var s=0,o=i.length;s<o;s++){var u=new fabric.Rect({width:i[s].width,height:i[s].width,left:i[s].x+1,top:i[s].y+1,fill:this.color});this.shadow&&u.setShadow(this.shadow),t.push(u)}}var a=new fabric.Group(t);this.canvas.add(a),this.canvas.fire("path:created",{path:a}),this.canvas.clearContext(this.canvas.contextTop),this._resetShadow(),this.canvas.renderOnAddRemove=e,this.canvas.renderAll()},render:function(){var e=this.canvas.contextTop;e.fillStyle=this.color,e.save();for(var t=0,n=this.sprayChunkPoints.length;t<n;t++){var r=this.sprayChunkPoints[t];typeof r.opacity!="undefined"&&(e.globalAlpha=r.opacity),e.fillRect(r.x,r.y,r.width,r.width)}e.restore()},addSprayChunk:function(e){this.sprayChunkPoints=[];var t,n,r,i=this.width/2;for(var s=0;s<this.density;s++){t=fabric.util.getRandomInt(e.x-i,e.x+i),n=fabric.util.getRandomInt(e.y-i,e.y+i),this.dotWidthVariance?r=fabric.util.getRandomInt(Math.max(1,this.dotWidth-this.dotWidthVariance),this.dotWidth+this.dotWidthVariance):r=this.dotWidth;var o={x:t,y:n,width:r};this.randomOpacity&&(o.opacity=fabric.util.getRandomInt(0,100)/100),this.sprayChunkPoints.push(o)}this.sprayChunks.push(this.sprayChunkPoints)}}),fabric.PatternBrush=fabric.util.createClass(fabric.PencilBrush,{getPatternSrc:function(){var e=20,t=5,n=fabric.document.createElement("canvas"),r=n.getContext("2d");return n.width=n.height=e+t,r.fillStyle=this.color,r.beginPath(),r.arc(e/2,e/2,e/2,0,Math.PI*2,!1),r.closePath(),r.fill(),n},getPatternSrcFunction:function(){return String(this.getPatternSrc).replace("this.color",'"'+this.color+'"')},getPattern:function(){return this.canvas.contextTop.createPattern(this.source||this.getPatternSrc(),"repeat")},_setBrushStyles:function(){this.callSuper("_setBrushStyles"),this.canvas.contextTop.strokeStyle=this.getPattern()},createPath:function(e){var t=this.callSuper("createPath",e);return t.stroke=new fabric.Pattern({source:this.source||this.getPatternSrcFunction()}),t}}),function(){var e=fabric.util.getPointer,t=fabric.util.degreesToRadians,n=fabric.util.radiansToDegrees,r=Math.atan2,i=Math.abs,s=Math.min,o=Math.max,u=.5;fabric.Canvas=fabric.util.createClass(fabric.StaticCanvas,{initialize:function(e,t){t||(t={}),this._initStatic(e,t),this._initInteractive(),this._createCacheCanvas(),fabric.Canvas.activeInstance=this},uniScaleTransform:!1,centerTransform:!1,interactive:!0,selection:!0,selectionColor:"rgba(100, 100, 255, 0.3)",selectionDashArray:[],selectionBorderColor:"rgba(255, 255, 255, 0.3)",selectionLineWidth:1,hoverCursor:"move",moveCursor:"move",defaultCursor:"default",freeDrawingCursor:"crosshair",rotationCursor:"crosshair",containerClass:"canvas-container",perPixelTargetFind:!1,targetFindTolerance:0,skipTargetFind:!1,_initInteractive:function(){this._currentTransform=null,this._groupSelector=null,this._initWrapperElement(),this._createUpperCanvas(),this._initEvents(),this.freeDrawingBrush=fabric.PencilBrush&&new fabric.PencilBrush(this),this.calcOffset()},_resetCurrentTransform:function(e){var t=this._currentTransform;t.target.set("scaleX",t.original.scaleX),t.target.set("scaleY",t.original.scaleY),t.target.set("left",t.original.left),t.target.set("top",t.original.top),e.altKey||this.centerTransform||t.target.centerTransform?(t.originX!=="center"&&(t.originX==="right"?t.mouseXSign=-1:t.mouseXSign=1),t.originY!=="center"&&(t.originY==="bottom"?t.mouseYSign=-1:t.mouseYSign=1),t.originX="center",t.originY="center"):(t.originX=t.original.originX,t.originY=t.original.originY)},containsPoint:function(e,t){var n=this.getPointer(e),r=this._normalizePointer(t,n);return t.containsPoint(r)||t._findTargetCorner(e,this._offset)},_normalizePointer:function(e,t){var n=this.getActiveGroup(),r=t.x,i=t.y,s=n&&e.type!=="group"&&n.contains(e);return s&&(r-=n.left,i-=n.top),{x:r,y:i}},isTargetTransparent:function(e,t,n){var r=this.contextCache,i=e.hasBorders,s=e.transparentCorners;e.hasBorders=e.transparentCorners=!1,this._draw(r,e),e.hasBorders=i,e.transparentCorners=s,this.targetFindTolerance>0&&(t>this.targetFindTolerance?t-=this.targetFindTolerance:t=0,n>this.targetFindTolerance?n-=this.targetFindTolerance:n=0);var o=!0,u=r.getImageData(t,n,this.targetFindTolerance*2||1,this.targetFindTolerance*2||1);for(var a=3,f=u.data.length;a<f;a+=4){var l=u.data[a];o=l<=0;if(o===!1)break}return u=null,this.clearContext(r),o},_shouldClearSelection:function(e,t){var n=this.getActiveGroup();return!t||t&&n&&!n.contains(t)&&n!==t&&!e.shiftKey||t&&!t.selectable},_setupCurrentTransform:function(n,r){if(!r)return;var i="drag",s,o=e(n,r.canvas.upperCanvasEl);s=r._findTargetCorner(n,this._offset),s&&(i=s==="ml"||s==="mr"?"scaleX":s==="mt"||s==="mb"?"scaleY":s==="mtr"?"rotate":"scale");var u=r.originX,a=r.originY;if(s==="ml"||s==="tl"||s==="bl")u="right";else if(s==="mr"||s==="tr"||s==="br")u="left";if(s==="tl"||s==="mt"||s==="tr")a="bottom";else if(s==="bl"||s==="mb"||s==="br")a="top";this._currentTransform={target:r,action:i,scaleX:r.scaleX,scaleY:r.scaleY,offsetX:o.x-r.left,offsetY:o.y-r.top,originX:u,originY:a,ex:o.x,ey:o.y,left:r.left,top:r.top,theta:t(r.angle),width:r.width*r.scaleX,mouseXSign:1,mouseYSign:1},this._currentTransform.original={left:r.left,top:r.top,scaleX:r.scaleX,scaleY:r.scaleY,originX:u,originY:a},this._resetCurrentTransform(n)},_shouldHandleGroupLogic:function(e,t){var n=this.getActiveObject();return e.shiftKey&&(this.getActiveGroup()||n&&n!==t)&&this.selection},_handleGroupLogic:function(e,t){if(t===this.getActiveGroup()){t=this.findTarget(e,!0);if(!t||t.isType("group"))return}var n=this.getActiveGroup();if(n)n.contains(t)?(n.removeWithUpdate(t),this._resetObjectTransform(n),t.set("active",!1),n.size()===1&&this.discardActiveGroup()):(n.addWithUpdate(t),this._resetObjectTransform(n)),this.fire("selection:created",{target:n,e:e}),n.set("active",!0);else{if(this._activeObject&&t!==this._activeObject){var r=this.getObjects(),i=r.indexOf(this._activeObject)<r.indexOf(t),s=new fabric.Group(i?[t,this._activeObject]:[this._activeObject,t]);this.setActiveGroup(s),this._activeObject=null,n=this.getActiveGroup(),this.fire("selection:created",{target:n,e:e})}t.set("active",!0)}n&&n.saveCoords()},_translateObject:function(e,t){var n=this._currentTransform.target;n.get("lockMovementX")||n.set("left",e-this._currentTransform.offsetX),n.get("lockMovementY")||n.set("top",t-this._currentTransform.offsetY)},_scaleObject:function(e,t,n){var r=this._currentTransform,s=this._offset,o=r.target,u=o.get("lockScalingX"),a=o.get("lockScalingY");if(u&&a)return;var f=o.translateToOriginPoint(o.getCenterPoint(),r.originX,r.originY),l=o.toLocalPoint(new fabric.Point(e-s.left,t-s.top),r.originX,r.originY);r.originX==="right"?l.x*=-1:r.originX==="center"&&(l.x*=r.mouseXSign*2,l.x<0&&(r.mouseXSign=-r.mouseXSign)),r.originY==="bottom"?l.y*=-1:r.originY==="center"&&(l.y*=r.mouseYSign*2,l.y<0&&(r.mouseYSign=-r.mouseYSign)),i(l.x)>o.padding?l.x<0?l.x+=o.padding:l.x-=o.padding:l.x=0,i(l.y)>o.padding?l.y<0?l.y+=o.padding:l.y-=o.padding:l.y=0;var c=o.scaleX,h=o.scaleY;if(n==="equally"&&!u&&!a){var p=l.y+l.x,d=(o.height+o.strokeWidth)*r.original.scaleY+(o.width+o.strokeWidth)*r.original.scaleX;c=r.original.scaleX*p/d,h=r.original.scaleY*p/d,o.set("scaleX",c),o.set("scaleY",h)}else n?n==="x"&&!o.get("lockUniScaling")?(c=l.x/(o.width+o.strokeWidth),u||o.set("scaleX",c)):n==="y"&&!o.get("lockUniScaling")&&(h=l.y/(o.height+o.strokeWidth),a||o.set("scaleY",h)):(c=l.x/(o.width+o.strokeWidth),h=l.y/(o.height+o.strokeWidth),u||o.set("scaleX",c),a||o.set("scaleY",h));c<0&&(r.originX==="left"?r.originX="right":r.originX==="right"&&(r.originX="left")),h<0&&(r.originY==="top"?r.originY="bottom":r.originY==="bottom"&&(r.originY="top")),o.setPositionByOrigin(f,r.originX,r.originY)},_rotateObject:function(e,t){var i=this._currentTransform,s=this._offset;if(i.target.get("lockRotation"))return;var o=r(i.ey-i.top-s.top,i.ex-i.left-s.left),u=r(t-i.top-s.top,e-i.left-s.left),a=n(u-o+i.theta);a<0&&(a=360+a),i.target.angle=a},_setCursor:function(e){this.upperCanvasEl.style.cursor=e},_resetObjectTransform:function(e){e.scaleX=1,e.scaleY=1,e.setAngle(0)},_drawSelection:function(){var e=this.contextTop,t=this._groupSelector,n=t.left,r=t.top,s=i(n),o=i(r);e.fillStyle=this.selectionColor,e.fillRect(t.ex-(n>0?0:-n),t.ey-(r>0?0:-r),s,o),e.lineWidth=this.selectionLineWidth,e.strokeStyle=this.selectionBorderColor;if(this.selectionDashArray.length>1){var a=t.ex+u-(n>0?0:s),f=t.ey+u-(r>0?0:o);e.beginPath(),fabric.util.drawDashedLine(e,a,f,a+s,f,this.selectionDashArray),fabric.util.drawDashedLine(e,a,f+o-1,a+s,f+o-1,this.selectionDashArray),fabric.util.drawDashedLine(e,a,f,a,f+o,this.selectionDashArray),fabric.util.drawDashedLine(e,a+s-1,f,a+s-1,f+o,this.selectionDashArray),e.closePath(),e.stroke()}else e.strokeRect(t.ex+u-(n>0?0:s),t.ey+u-(r>0?0:o),s,o)},_findSelectedObjects:function(e){var t=[],n=this._groupSelector.ex,r=this._groupSelector.ey,i=n+this._groupSelector.left,u=r+this._groupSelector.top,a,f=new fabric.Point(s(n,i),s(r,u)),l=new fabric.Point(o(n,i),o(r,u)),c=n===i&&r===u;for(var h=this._objects.length;h--;){a=this._objects[h];if(!a)continue;if(a.intersectsWithRect(f,l)||a.isContainedWithinRect(f,l)||a.containsPoint(f)||a.containsPoint(l))if(this.selection&&a.selectable){a.set("active",!0),t.push(a);if(c)break}}t.length===1?this.setActiveObject(t[0],e):t.length>1&&(t=new fabric.Group(t.reverse()),this.setActiveGroup(t),t.saveCoords(),this.fire("selection:created",{target:t}),this.renderAll())},findTarget:function(e,t){if(this.skipTargetFind)return;var n,r=this.getPointer(e);if(this.controlsAboveOverlay&&this.lastRenderedObjectWithControlsAboveOverlay&&this.lastRenderedObjectWithControlsAboveOverlay.visible&&this.containsPoint(e,this.lastRenderedObjectWithControlsAboveOverlay)&&this.lastRenderedObjectWithControlsAboveOverlay._findTargetCorner(e,this._offset))return n=this.lastRenderedObjectWithControlsAboveOverlay,n;var i=this.getActiveGroup();if(i&&!t&&this.containsPoint(e,i))return n=i,n;var s=[];for(var o=this._objects.length;o--;)if(this._objects[o]&&this._objects[o].visible&&this._objects[o].selectable&&this.containsPoint(e,this._objects[o])){if(!this.perPixelTargetFind&&!this._objects[o].perPixelTargetFind){n=this._objects[o],this.relatedTarget=n;break}s[s.length]=this._objects[o]}for(var u=0,a=s.length;u<a;u++){r=this.getPointer(e);var f=this.isTargetTransparent(s[u],r.x,r.y);if(!f){n=s[u],this.relatedTarget=n;break}}return n},getPointer:function(t){var n=e(t,this.upperCanvasEl);return{x:n.x-this._offset.left,y:n.y-this._offset.top}},_createUpperCanvas:function(){var e=this.lowerCanvasEl.className.replace(/\s*lower-canvas\s*/,"");this.upperCanvasEl=this._createCanvasElement(),fabric.util.addClass(this.upperCanvasEl,"upper-canvas "+e),this.wrapperEl.appendChild(this.upperCanvasEl),this._copyCanvasStyle(this.lowerCanvasEl,this.upperCanvasEl),this._applyCanvasStyle(this.upperCanvasEl),this.contextTop=this.upperCanvasEl.getContext("2d")},_createCacheCanvas:function(){this.cacheCanvasEl=this._createCanvasElement(),this.cacheCanvasEl.setAttribute("width",this.width),this.cacheCanvasEl.setAttribute("height",this.height),this.contextCache=this.cacheCanvasEl.getContext("2d")},_initWrapperElement:function(){this.wrapperEl=fabric.util.wrapElement(this.lowerCanvasEl,"div",{"class":this.containerClass}),fabric.util.setStyle(this.wrapperEl,{width:this.getWidth()+"px",height:this.getHeight()+"px",position:"relative"}),fabric.util.makeElementUnselectable(this.wrapperEl)},_applyCanvasStyle:function(e){var t=this.getWidth()||e.width,n=this.getHeight()||e.height;fabric.util.setStyle(e,{position:"absolute",width:t+"px",height:n+"px",left:0,top:0}),e.width=t,e.height=n,fabric.util.makeElementUnselectable(e)},_copyCanvasStyle:function(e,t){t.style.cssText=e.style.cssText},getSelectionContext:function(){return this.contextTop},getSelectionElement:function(){return this.upperCanvasEl},setActiveObject:function(e,t){return this._activeObject&&this._activeObject.set("active",!1),this._activeObject=e,e.set("active",!0),this.renderAll(),this.fire("object:selected",{target:e,e:t}),e.fire("selected",{e:t}),this},getActiveObject:function(){return this._activeObject},discardActiveObject:function(){return this._activeObject&&this._activeObject.set("active",!1),this._activeObject=null,this},setActiveGroup:function(e){return this._activeGroup=e,e&&(e.canvas=this,e.set("active",!0)),this},getActiveGroup:function(){return this._activeGroup},discardActiveGroup:function(){var e=this.getActiveGroup();return e&&e.destroy(),this.setActiveGroup(null)},deactivateAll:function(){var e=this.getObjects(),t=0,n=e.length;for(;t<n;t++)e[t].set("active",!1);return this.discardActiveGroup(),this.discardActiveObject(),this},deactivateAllWithDispatch:function(){var e=this.getActiveGroup()||this.getActiveObject();return e&&this.fire("before:selection:cleared",{target:e}),this.deactivateAll(),e&&this.fire("selection:cleared"),this},drawControls:function(e){var t=this.getActiveGroup();if(t)e.save(),fabric.Group.prototype.transform.call(t,e),t.drawBorders(e).drawControls(e),e.restore();else for(var n=0,r=this._objects.length;n<r;++n){if(!this._objects[n]||!this._objects[n].active)continue;e.save(),fabric.Object.prototype.transform.call(this._objects[n],e),this._objects[n].drawBorders(e).drawControls(e),e.restore(),this.lastRenderedObjectWithControlsAboveOverlay=this._objects[n]}}});for(var a in fabric.StaticCanvas)a!=="prototype"&&(fabric.Canvas[a]=fabric.StaticCanvas[a]);fabric.isTouchSupported&&(fabric.Canvas.prototype._setCursorFromEvent=function(){}),fabric.Element=fabric.Canvas}(),function(){var e=["n-resize","ne-resize","e-resize","se-resize","s-resize","sw-resize","w-resize","nw-resize"],t={mt:0,tr:1,mr:2,br:3,mb:4,bl:5,ml:6,tl:7},n=fabric.util.addListener,r=fabric.util.removeListener,i=fabric.util.getPointer;fabric.util.object.extend(fabric.Canvas.prototype,{_initEvents:function(){var e=this;this._onMouseDown=this._onMouseDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),this._onMouseUp=this._onMouseUp.bind(this),this._onResize=this._onResize.bind(this),this._onGesture=function(t,n){e.__onTransformGesture(t,n)},n(fabric.window,"resize",this._onResize),fabric.isTouchSupported?(n(this.upperCanvasEl,"touchstart",this._onMouseDown),n(this.upperCanvasEl,"touchmove",this._onMouseMove),typeof Event!="undefined"&&"add"in Event&&Event.add(this.upperCanvasEl,"gesture",this._onGesture)):(n(this.upperCanvasEl,"mousedown",this._onMouseDown),n(this.upperCanvasEl,"mousemove",this._onMouseMove))},_onMouseDown:function(e){this.__onMouseDown(e),!fabric.isTouchSupported&&n(fabric.document,"mouseup",this._onMouseUp),fabric.isTouchSupported&&n(fabric.document,"touchend",this._onMouseUp),!fabric.isTouchSupported&&n(fabric.document,"mousemove",this._onMouseMove),fabric.isTouchSupported&&
n(fabric.document,"touchmove",this._onMouseMove),!fabric.isTouchSupported&&r(this.upperCanvasEl,"mousemove",this._onMouseMove),fabric.isTouchSupported&&r(this.upperCanvasEl,"touchmove",this._onMouseMove)},_onMouseUp:function(e){this.__onMouseUp(e),!fabric.isTouchSupported&&r(fabric.document,"mouseup",this._onMouseUp),fabric.isTouchSupported&&r(fabric.document,"touchend",this._onMouseUp),!fabric.isTouchSupported&&r(fabric.document,"mousemove",this._onMouseMove),fabric.isTouchSupported&&r(fabric.document,"touchmove",this._onMouseMove),!fabric.isTouchSupported&&n(this.upperCanvasEl,"mousemove",this._onMouseMove),fabric.isTouchSupported&&n(this.upperCanvasEl,"touchmove",this._onMouseMove)},_onMouseMove:function(e){!this.allowTouchScrolling&&e.preventDefault&&e.preventDefault(),this.__onMouseMove(e)},_onResize:function(){this.calcOffset()},_shouldRender:function(e,t){var n=this.getActiveGroup()||this.getActiveObject();return e&&(e.isMoving||e!==n)||!e&&n||t&&this._previousPointer&&this.selection&&(t.x!==this._previousPointer.x||t.y!==this._previousPointer.y)},__onMouseUp:function(e){var t,n,r;if(this.isDrawingMode&&this._isCurrentlyDrawing){this._isCurrentlyDrawing=!1,this.clipTo&&this.contextTop.restore(),this.freeDrawingBrush.onMouseUp(),this.fire("mouse:up",{e:e});return}if(this._currentTransform){var i=this._currentTransform;t=i.target,t._scaling&&(t._scaling=!1),t.setCoords(),this.stateful&&t.hasStateChanged()&&(this.fire("object:modified",{target:t}),t.fire("modified"));if(this._previousOriginX&&this._previousOriginY){var s=t.translateToOriginPoint(t.getCenterPoint(),this._previousOriginX,this._previousOriginY);t.originX=this._previousOriginX,t.originY=this._previousOriginY,t.left=s.x,t.top=s.y,this._previousOriginX=null,this._previousOriginY=null}}else n=this.getPointer(e);r=this._shouldRender(t,n),this.selection&&this._groupSelector&&this._findSelectedObjects(e);var o=this.getActiveGroup();o&&(o.setObjectsCoords(),o.isMoving=!1,this._setCursor(this.defaultCursor)),this._groupSelector=null,this._currentTransform=null,t&&(t.isMoving=!1),r&&this.renderAll(),this._setCursorFromEvent(e,t);var u=this;setTimeout(function(){u._setCursorFromEvent(e,t)},50),this.fire("mouse:up",{target:t,e:e}),t&&t.fire("mouseup",{e:e})},_onMouseDownInDrawingMode:function(e){this._isCurrentlyDrawing=!0,this.discardActiveObject().renderAll(),this.clipTo&&fabric.util.clipContext(this,this.contextTop),this.freeDrawingBrush.onMouseDown(this.getPointer(e)),this.fire("mouse:down",{e:e})},__onMouseDown:function(e){var t="which"in e?e.which===1:e.button===1;if(!t&&!fabric.isTouchSupported)return;if(this.isDrawingMode){this._onMouseDownInDrawingMode(e);return}if(this._currentTransform)return;var n=this.findTarget(e),r=this.getPointer(e),i,s;this._previousPointer=r,s=this._shouldRender(n,r),this._shouldClearSelection(e,n)?(this.selection&&(this._groupSelector={ex:r.x,ey:r.y,top:0,left:0}),this.deactivateAllWithDispatch(),n&&n.selectable&&this.setActiveObject(n,e)):this._shouldHandleGroupLogic(e,n)?(this._handleGroupLogic(e,n),n=this.getActiveGroup()):(this.stateful&&n.saveState(),(i=n._findTargetCorner(e,this._offset))&&this.onBeforeScaleRotate(n),n!==this.getActiveGroup()&&n!==this.getActiveObject()&&(this.deactivateAll(),this.setActiveObject(n,e)),this._setupCurrentTransform(e,n)),s&&this.renderAll(),this.fire("mouse:down",{target:n,e:e}),n&&n.fire("mousedown",{e:e}),i==="mtr"&&n.centerTransform&&this._setOriginToCenter(n)},_setOriginToCenter:function(e){this._previousOriginX=this._currentTransform.target.originX,this._previousOriginY=this._currentTransform.target.originY;var t=e.getCenterPoint();e.originX="center",e.originY="center",e.left=t.x,e.top=t.y,this._currentTransform.left=e.left,this._currentTransform.top=e.top},__onMouseMove:function(e){var t,n;if(this.isDrawingMode){this._isCurrentlyDrawing&&(n=this.getPointer(e),this.freeDrawingBrush.onMouseMove(n)),this.upperCanvasEl.style.cursor=this.freeDrawingCursor,this.fire("mouse:move",{e:e});return}var r=this._groupSelector;if(r)n=i(e,this.upperCanvasEl),r.left=n.x-this._offset.left-r.ex,r.top=n.y-this._offset.top-r.ey,this.renderTop();else if(!this._currentTransform){var s=this.upperCanvasEl.style;t=this.findTarget(e),!t||t&&!t.selectable?s.cursor=this.defaultCursor:this._setCursorFromEvent(e,t)}else{n=i(e,this.upperCanvasEl);var o=n.x,u=n.y,a=!1,f=this._currentTransform;t=f.target,t.isMoving=!0,(f.action==="scale"||f.action==="scaleX"||f.action==="scaleY")&&(e.altKey&&(f.originX!=="center"||f.originY!=="center")||!e.altKey&&f.originX==="center"&&f.originY==="center")&&(this._resetCurrentTransform(e),a=!0),f.action==="rotate"?(this._rotateObject(o,u),this.fire("object:rotating",{target:t,e:e}),t.fire("rotating",{e:e})):f.action==="scale"?((e.shiftKey||this.uniScaleTransform)&&!t.get("lockUniScaling")?(f.currentAction="scale",this._scaleObject(o,u)):(!a&&f.currentAction==="scale"&&this._resetCurrentTransform(e),f.currentAction="scaleEqually",this._scaleObject(o,u,"equally")),this.fire("object:scaling",{target:t,e:e}),t.fire("scaling",{e:e})):f.action==="scaleX"?(this._scaleObject(o,u,"x"),this.fire("object:scaling",{target:t,e:e}),t.fire("scaling",{e:e})):f.action==="scaleY"?(this._scaleObject(o,u,"y"),this.fire("object:scaling",{target:t,e:e}),t.fire("scaling",{e:e})):(this._translateObject(o,u),this.fire("object:moving",{target:t,e:e}),t.fire("moving",{e:e}),this._setCursor(this.moveCursor)),this.renderAll()}this.fire("mouse:move",{target:t,e:e}),t&&t.fire("mousemove",{e:e})},_setCursorFromEvent:function(n,r){var i=this.upperCanvasEl.style;if(!r)return i.cursor=this.defaultCursor,!1;var s=this.getActiveGroup(),o=r._findTargetCorner&&(!s||!s.contains(r))&&r._findTargetCorner(n,this._offset);if(!o)i.cursor=r.hoverCursor||this.hoverCursor;else if(o in t){var u=Math.round(r.getAngle()%360/45);u<0&&(u+=8),u+=t[o],u%=8,i.cursor=e[u]}else{if(o!=="mtr"||!r.hasRotatingPoint)return i.cursor=this.defaultCursor,!1;i.cursor=this.rotationCursor}return!0}})}(),fabric.util.object.extend(fabric.StaticCanvas.prototype,{toDataURL:function(e){e||(e={});var t=e.format||"png",n=e.quality||1,r=e.multiplier||1,i={left:e.left,top:e.top,width:e.width,height:e.height};return r!==1?this.__toDataURLWithMultiplier(t,n,i,r):this.__toDataURL(t,n,i)},__toDataURL:function(e,t,n){this.renderAll(!0);var r=this.upperCanvasEl||this.lowerCanvasEl,i=this.__getCroppedCanvas(r,n);e==="jpg"&&(e="jpeg");var s=fabric.StaticCanvas.supports("toDataURLWithQuality")?(i||r).toDataURL("image/"+e,t):(i||r).toDataURL("image/"+e);return this.contextTop&&this.clearContext(this.contextTop),this.renderAll(),i&&(i=null),s},__getCroppedCanvas:function(e,t){var n,r,i="left"in t||"top"in t||"width"in t||"height"in t;return i&&(n=fabric.util.createCanvasElement(),r=n.getContext("2d"),n.width=t.width||this.width,n.height=t.height||this.height,r.drawImage(e,-t.left||0,-t.top||0)),n},__toDataURLWithMultiplier:function(e,t,n,r){var i=this.getWidth(),s=this.getHeight(),o=i*r,u=s*r,a=this.getActiveObject(),f=this.getActiveGroup(),l=this.contextTop||this.contextContainer;this.setWidth(o).setHeight(u),l.scale(r,r),n.left&&(n.left*=r),n.top&&(n.top*=r),n.width&&(n.width*=r),n.height&&(n.height*=r),f?this._tempRemoveBordersControlsFromGroup(f):a&&this.deactivateAll&&this.deactivateAll(),this.width=i,this.height=s,this.renderAll(!0);var c=this.__toDataURL(e,t,n);return l.scale(1/r,1/r),this.setWidth(i).setHeight(s),f?this._restoreBordersControlsOnGroup(f):a&&this.setActiveObject&&this.setActiveObject(a),this.contextTop&&this.clearContext(this.contextTop),this.renderAll(),c},toDataURLWithMultiplier:function(e,t,n){return this.toDataURL({format:e,multiplier:t,quality:n})},_tempRemoveBordersControlsFromGroup:function(e){e.origHasControls=e.hasControls,e.origBorderColor=e.borderColor,e.hasControls=!0,e.borderColor="rgba(0,0,0,0)",e.forEachObject(function(e){e.origBorderColor=e.borderColor,e.borderColor="rgba(0,0,0,0)"})},_restoreBordersControlsOnGroup:function(e){e.hideControls=e.origHideControls,e.borderColor=e.origBorderColor,e.forEachObject(function(e){e.borderColor=e.origBorderColor,delete e.origBorderColor})}}),fabric.util.object.extend(fabric.StaticCanvas.prototype,{loadFromDatalessJSON:function(e,t,n){return this.loadFromJSON(e,t,n)},loadFromJSON:function(e,t,n){if(!e)return;var r=typeof e=="string"?JSON.parse(e):e;this.clear();var i=this;return this._enlivenObjects(r.objects,function(){i._setBgOverlayImages(r,t)},n),this},_setBgOverlayImages:function(e,t){var n=this,r,i,s,o=function(){t&&i&&s&&r&&t()};e.backgroundImage?this.setBackgroundImage(e.backgroundImage,function(){n.backgroundImageOpacity=e.backgroundImageOpacity,n.backgroundImageStretch=e.backgroundImageStretch,n.renderAll(),i=!0,o()}):i=!0,e.overlayImage?this.setOverlayImage(e.overlayImage,function(){n.overlayImageLeft=e.overlayImageLeft||0,n.overlayImageTop=e.overlayImageTop||0,n.renderAll(),s=!0,o()}):s=!0,e.background?this.setBackgroundColor(e.background,function(){n.renderAll(),r=!0,o()}):r=!0,!e.backgroundImage&&!e.overlayImage&&!e.background&&t&&t()},_enlivenObjects:function(e,t,n){var r=this;e.length===0&&t&&t();var i=this.renderOnAddRemove;this.renderOnAddRemove=!1,fabric.util.enlivenObjects(e,function(e){e.forEach(function(e,t){r.insertAt(e,t,!0)}),r.renderOnAddRemove=i,t&&t()},null,n)},_toDataURL:function(e,t){this.clone(function(n){t(n.toDataURL(e))})},_toDataURLWithMultiplier:function(e,t,n){this.clone(function(r){n(r.toDataURLWithMultiplier(e,t))})},clone:function(e){var t=JSON.stringify(this);this.cloneWithoutData(function(n){n.loadFromJSON(t,function(){e&&e(n)})})},cloneWithoutData:function(e){var t=fabric.document.createElement("canvas");t.width=this.getWidth(),t.height=this.getHeight();var n=new fabric.Canvas(t);n.clipTo=this.clipTo,this.backgroundImage?(n.setBackgroundImage(this.backgroundImage.src,function(){n.renderAll(),e&&e(n)}),n.backgroundImageOpacity=this.backgroundImageOpacity,n.backgroundImageStretch=this.backgroundImageStretch):e&&e(n)}}),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend,r=t.util.toFixed,i=t.util.string.capitalize,s=t.util.degreesToRadians,o=t.StaticCanvas.supports("setLineDash");if(t.Object)return;t.Object=t.util.createClass({type:"object",originX:"center",originY:"center",top:0,left:0,width:0,height:0,scaleX:1,scaleY:1,flipX:!1,flipY:!1,opacity:1,angle:0,cornerSize:12,transparentCorners:!0,hoverCursor:null,padding:0,borderColor:"rgba(102,153,255,0.75)",cornerColor:"rgba(102,153,255,0.5)",centerTransform:!1,fill:"rgb(0,0,0)",fillRule:"source-over",overlayFill:null,stroke:null,strokeWidth:1,strokeDashArray:null,strokeLineCap:"butt",strokeLineJoin:"miter",strokeMiterLimit:10,shadow:null,borderOpacityWhenMoving:.4,borderScaleFactor:1,transformMatrix:null,minScaleLimit:.01,selectable:!0,visible:!0,hasControls:!0,hasBorders:!0,hasRotatingPoint:!0,rotatingPointOffset:40,perPixelTargetFind:!1,includeDefaultValues:!0,clipTo:null,lockMovementX:!1,lockMovementY:!1,lockRotation:!1,lockScalingX:!1,lockScalingY:!1,lockUniScaling:!1,stateProperties:"top left width height scaleX scaleY flipX flipY originX originY transformMatrix stroke strokeWidth strokeDashArray strokeLineCap strokeLineJoin strokeMiterLimit angle opacity fill fillRule overlayFill shadow clipTo visible".split(" "),initialize:function(e){e&&this.setOptions(e)},_initGradient:function(e){e.fill&&e.fill.colorStops&&!(e.fill instanceof t.Gradient)&&this.set("fill",new t.Gradient(e.fill))},_initPattern:function(e){e.fill&&e.fill.source&&!(e.fill instanceof t.Pattern)&&this.set("fill",new t.Pattern(e.fill)),e.stroke&&e.stroke.source&&!(e.stroke instanceof t.Pattern)&&this.set("stroke",new t.Pattern(e.stroke))},_initClipping:function(e){if(!e.clipTo||typeof e.clipTo!="string")return;var n=t.util.getFunctionBody(e.clipTo);typeof n!="undefined"&&(this.clipTo=new Function("ctx",n))},setOptions:function(e){for(var t in e)this.set(t,e[t]);this._initGradient(e),this._initPattern(e),this._initClipping(e)},transform:function(e,t){e.globalAlpha=this.opacity;var n=t?this._getLeftTopCoords():this.getCenterPoint();e.translate(n.x,n.y),e.rotate(s(this.angle)),e.scale(this.scaleX*(this.flipX?-1:1),this.scaleY*(this.flipY?-1:1))},toObject:function(e){var n=t.Object.NUM_FRACTION_DIGITS,i={type:this.type,originX:this.originX,originY:this.originY,left:r(this.left,n),top:r(this.top,n),width:r(this.width,n),height:r(this.height,n),fill:this.fill&&this.fill.toObject?this.fill.toObject():this.fill,overlayFill:this.overlayFill,stroke:this.stroke&&this.stroke.toObject?this.stroke.toObject():this.stroke,strokeWidth:r(this.strokeWidth,n),strokeDashArray:this.strokeDashArray,strokeLineCap:this.strokeLineCap,strokeLineJoin:this.strokeLineJoin,strokeMiterLimit:r(this.strokeMiterLimit,n),scaleX:r(this.scaleX,n),scaleY:r(this.scaleY,n),angle:r(this.getAngle(),n),flipX:this.flipX,flipY:this.flipY,opacity:r(this.opacity,n),shadow:this.shadow&&this.shadow.toObject?this.shadow.toObject():this.shadow,visible:this.visible,clipTo:this.clipTo&&String(this.clipTo)};return this.includeDefaultValues||(i=this._removeDefaultValues(i)),t.util.populateWithProperties(this,i,e),i},toDatalessObject:function(e){return this.toObject(e)},getSvgStyles:function(){var e=this.fill?this.fill.toLive?"url(#SVGID_"+this.fill.id+")":this.fill:"none",t=this.stroke?this.stroke.toLive?"url(#SVGID_"+this.stroke.id+")":this.stroke:"none",n=this.strokeWidth?this.strokeWidth:"0",r=this.strokeDashArray?this.strokeDashArray.join(" "):"",i=this.strokeLineCap?this.strokeLineCap:"butt",s=this.strokeLineJoin?this.strokeLineJoin:"miter",o=this.strokeMiterLimit?this.strokeMiterLimit:"4",u=typeof this.opacity!="undefined"?this.opacity:"1",a=this.visible?"":" visibility: hidden;",f=this.shadow&&this.type!=="text"?"filter: url(#SVGID_"+this.shadow.id+");":"";return["stroke: ",t,"; ","stroke-width: ",n,"; ","stroke-dasharray: ",r,"; ","stroke-linecap: ",i,"; ","stroke-linejoin: ",s,"; ","stroke-miterlimit: ",o,"; ","fill: ",e,"; ","opacity: ",u,";",f,a].join("")},getSvgTransform:function(){var e=this.getAngle(),n=this.getCenterPoint(),i=t.Object.NUM_FRACTION_DIGITS,s="translate("+r(n.x,i)+" "+r(n.y,i)+")",o=e!==0?" rotate("+r(e,i)+")":"",u=this.scaleX===1&&this.scaleY===1?"":" scale("+r(this.scaleX,i)+" "+r(this.scaleY,i)+")",a=this.flipX?"matrix(-1 0 0 1 0 0) ":"",f=this.flipY?"matrix(1 0 0 -1 0 0)":"";return[s,o,u,a,f].join("")},_createBaseSVGMarkup:function(){var e=[];return this.fill&&this.fill.toLive&&e.push(this.fill.toSVG(this,!1)),this.stroke&&this.stroke.toLive&&e.push(this.stroke.toSVG(this,!1)),this.shadow&&e.push(this.shadow.toSVG(this)),e},_removeDefaultValues:function(e){return this.stateProperties.forEach(function(t){e[t]===this.constructor.prototype[t]&&delete e[t]},this),e},toString:function(){return"#<fabric."+i(this.type)+">"},get:function(e){return this[e]},set:function(e,t){if(typeof e=="object")for(var n in e)this._set(n,e[n]);else typeof t=="function"&&e!=="clipTo"?this._set(e,t(this.get(e))):this._set(e,t);return this},_set:function(e,n){var i=e==="scaleX"||e==="scaleY";return i&&(n=this._constrainScale(n)),e==="scaleX"&&n<0?(this.flipX=!this.flipX,n*=-1):e==="scaleY"&&n<0?(this.flipY=!this.flipY,n*=-1):e==="width"||e==="height"?this.minScaleLimit=r(Math.min(.1,1/Math.max(this.width,this.height)),2):e==="shadow"&&n&&!(n instanceof t.Shadow)&&(n=new t.Shadow(n)),this[e]=n,this},toggle:function(e){var t=this.get(e);return typeof t=="boolean"&&this.set(e,!t),this},setSourcePath:function(e){return this.sourcePath=e,this},render:function(e,n){if(this.width===0||this.height===0||!this.visible)return;e.save();var r=this.transformMatrix;r&&!this.group&&e.setTransform(r[0],r[1],r[2],r[3],r[4],r[5]),n||this.transform(e),this.stroke&&(e.lineWidth=this.strokeWidth,e.lineCap=this.strokeLineCap,e.lineJoin=this.strokeLineJoin,e.miterLimit=this.strokeMiterLimit,e.strokeStyle=this.stroke.toLive?this.stroke.toLive(e):this.stroke),this.overlayFill?e.fillStyle=this.overlayFill:this.fill&&(e.fillStyle=this.fill.toLive?this.fill.toLive(e):this.fill),r&&this.group&&(e.translate(-this.group.width/2,-this.group.height/2),e.transform(r[0],r[1],r[2],r[3],r[4],r[5])),this._setShadow(e),this.clipTo&&t.util.clipContext(this,e),this._render(e,n),this.clipTo&&e.restore(),this._removeShadow(e),this.active&&!n&&(this.drawBorders(e),this.drawControls(e)),e.restore()},_setShadow:function(e){if(!this.shadow)return;e.shadowColor=this.shadow.color,e.shadowBlur=this.shadow.blur,e.shadowOffsetX=this.shadow.offsetX,e.shadowOffsetY=this.shadow.offsetY},_removeShadow:function(e){e.shadowColor="",e.shadowBlur=e.shadowOffsetX=e.shadowOffsetY=0},_renderFill:function(e){if(!this.fill)return;this.fill.toLive&&(e.save(),e.translate(-this.width/2+this.fill.offsetX||0,-this.height/2+this.fill.offsetY||0)),e.fill(),this.fill.toLive&&e.restore(),this.shadow&&!this.shadow.affectStroke&&this._removeShadow(e)},_renderStroke:function(e){if(!this.stroke)return;e.save(),this.strokeDashArray?(1&this.strokeDashArray.length&&this.strokeDashArray.push.apply(this.strokeDashArray,this.strokeDashArray),o?(e.setLineDash(this.strokeDashArray),this._stroke&&this._stroke(e)):this._renderDashedStroke&&this._renderDashedStroke(e),e.stroke()):this._stroke?this._stroke(e):e.stroke(),this._removeShadow(e),e.restore()},clone:function(e,n){return this.constructor.fromObject?this.constructor.fromObject(this.toObject(n),e):new t.Object(this.toObject(n))},cloneAsImage:function(e){var n=this.toDataURL();return t.util.loadImage(n,function(n){e&&e(new t.Image(n))}),this},toDataURL:function(e){e||(e={});var n=t.util.createCanvasElement(),r=this.getBoundingRect();n.width=r.width,n.height=r.height,t.util.wrapElement(n,"div");var i=new t.Canvas(n);e.format==="jpg"&&(e.format="jpeg"),e.format==="jpeg"&&(i.backgroundColor="#fff");var s={active:this.get("active"),left:this.getLeft(),top:this.getTop()};this.set("active",!1),this.setPositionByOrigin(new t.Point(n.width/2,n.height/2),"center","center"),i.add(this);var o=i.toDataURL(e);return this.set(s).setCoords(),i.dispose(),i=null,o},isType:function(e){return this.type===e},toGrayscale:function(){var e=this.get("fill");return e&&this.set("overlayFill",(new t.Color(e)).toGrayscale().toRgb()),this},complexity:function(){return 0},toJSON:function(e){return this.toObject(e)},setGradient:function(e,n){n||(n={});var r={colorStops:[]};r.type=n.type||(n.r1||n.r2?"radial":"linear"),r.coords={x1:n.x1,y1:n.y1,x2:n.x2,y2:n.y2};if(n.r1||n.r2)r.coords.r1=n.r1,r.coords.r2=n.r2;for(var i in n.colorStops){var s=new t.Color(n.colorStops[i]);r.colorStops.push({offset:i,color:s.toRgb(),opacity:s.getAlpha()})}return this.set(e,t.Gradient.forObject(this,r))},setPatternFill:function(e){return this.set("fill",new t.Pattern(e))},setShadow:function(e){return this.set("shadow",new t.Shadow(e))},setColor:function(e){return this.set("fill",e),this},centerH:function(){return this.canvas.centerObjectH(this),this},centerV:function(){return this.canvas.centerObjectV(this),this},center:function(){return this.centerH().centerV()},remove:function(){return this.canvas.remove(this)},sendToBack:function(){return this.group?t.StaticCanvas.prototype.sendToBack.call(this.group,this):this.canvas.sendToBack(this),this},bringToFront:function(){return this.group?t.StaticCanvas.prototype.bringToFront.call(this.group,this):this.canvas.bringToFront(this),this},sendBackwards:function(e){return this.group?t.StaticCanvas.prototype.sendBackwards.call(this.group,this,e):this.canvas.sendBackwards(this,e),this},bringForward:function(e){return this.group?t.StaticCanvas.prototype.bringForward.call(this.group,this,e):this.canvas.bringForward(this,e),this},moveTo:function(e){return this.group?t.StaticCanvas.prototype.moveTo.call(this.group,this,e):this.canvas.moveTo(this,e),this}}),t.util.createAccessors(t.Object),t.Object.prototype.rotate=t.Object.prototype.setAngle,n(t.Object.prototype,t.Observable),t.Object.NUM_FRACTION_DIGITS=2,t.Object.__uid=0}(typeof exports!="undefined"?exports:this),function(){var e=fabric.util.degreesToRadians;fabric.util.object.extend(fabric.Object.prototype,{translateToCenterPoint:function(t,n,r){var i=t.x,s=t.y;return n==="left"?i=t.x+(this.getWidth()+this.strokeWidth*this.scaleX)/2:n==="right"&&(i=t.x-(this.getWidth()+this.strokeWidth*this.scaleX)/2),r==="top"?s=t.y+(this.getHeight()+this.strokeWidth*this.scaleY)/2:r==="bottom"&&(s=t.y-(this.getHeight()+this.strokeWidth*this.scaleY)/2),fabric.util.rotatePoint(new fabric.Point(i,s),t,e(this.angle))},translateToOriginPoint:function(t,n,r){var i=t.x,s=t.y;return n==="left"?i=t.x-(this.getWidth()+this.strokeWidth*this.scaleX)/2:n==="right"&&(i=t.x+(this.getWidth()+this.strokeWidth*this.scaleX)/2),r==="top"?s=t.y-(this.getHeight()+this.strokeWidth*this.scaleY)/2:r==="bottom"&&(s=t.y+(this.getHeight()+this.strokeWidth*this.scaleY)/2),fabric.util.rotatePoint(new fabric.Point(i,s),t,e(this.angle))},getCenterPoint:function(){var e=new fabric.Point(this.left,this.top);return this.translateToCenterPoint(e,this.originX,this.originY)},getPointByOrigin:function(e,t){var n=this.getCenterPoint();return this.translateToOriginPoint(n,e,t)},toLocalPoint:function(t,n,r){var i=this.getCenterPoint(),s,o;return n!==undefined&&r!==undefined?(n==="left"?s=i.x-(this.getWidth()+this.strokeWidth*this.scaleX)/2:n==="right"?s=i.x+(this.getWidth()+this.strokeWidth*this.scaleX)/2:s=i.x,r==="top"?o=i.y-(this.getHeight()+this.strokeWidth*this.scaleY)/2:r==="bottom"?o=i.y+(this.getHeight()+this.strokeWidth*this.scaleY)/2:o=i.y):(s=this.left,o=this.top),fabric.util.rotatePoint(new fabric.Point(t.x,t.y),i,-e(this.angle)).subtractEquals(new fabric.Point(s,o))},setPositionByOrigin:function(e,t,n){var r=this.translateToCenterPoint(e,t,n),i=this.translateToOriginPoint(r,this.originX,this.originY);this.set("left",i.x),this.set("top",i.y)},adjustPosition:function(t){var n=e(this.angle),r=this.getWidth()/2,i=Math.cos(n)*r,s=Math.sin(n)*r,o=this.getWidth(),u=Math.cos(n)*o,a=Math.sin(n)*o;this.originX==="center"&&t==="left"||this.originX==="right"&&t==="center"?(this.left-=i,this.top-=s):this.originX==="left"&&t==="center"||this.originX==="center"&&t==="right"?(this.left+=i,this.top+=s):this.originX==="left"&&t==="right"?(this.left+=u,this.top+=a):this.originX==="right"&&t==="left"&&(this.left-=u,this.top-=a),this.setCoords(),this.originX=t},_getLeftTopCoords:function(){var t=e(this.angle),n=this.getWidth()/2,r=Math.cos(t)*n,i=Math.sin(t)*n,s=this.left,o=this.top;if(this.originX==="center"||this.originX==="right")s-=r;if(this.originY==="center"||this.originY==="bottom")o-=i;return{x:s,y:o}}})}(),function(){var e=fabric.util.degreesToRadians;fabric.util.object.extend(fabric.Object.prototype,{oCoords:null,intersectsWithRect:function(e,t){var n=this.oCoords,r=new fabric.Point(n.tl.x,n.tl.y),i=new fabric.Point(n.tr.x,n.tr.y),s=new fabric.Point(n.bl.x,n.bl.y),o=new fabric.Point(n.br.x,n.br.y),u=fabric.Intersection.intersectPolygonRectangle([r,i,o,s],e,t);return u.status==="Intersection"},intersectsWithObject:function(e){function t(e){return{tl:new fabric.Point(e.tl.x,e.tl.y),tr:new fabric.Point(e.tr.x,e.tr.y),bl:new fabric.Point(e.bl.x,e.bl.y),br:new fabric.Point(e.br.x,e.br.y)}}var n=t(this.oCoords),r=t(e.oCoords),i=fabric.Intersection.intersectPolygonPolygon([n.tl,n.tr,n.br,n.bl],[r.tl,r.tr,r.br,r.bl]);return i.status==="Intersection"},isContainedWithinObject:function(e){var t=e.getBoundingRect(),n=new fabric.Point(t.left,t.top),r=new fabric.Point(t.left+t.width,t.top+t.height);return this.isContainedWithinRect(n,r)},isContainedWithinRect:function(e,t){var n=this.getBoundingRect();return n.left>e.x&&n.left+n.width<t.x&&n.top>e.y&&n.top+n.height<t.y},containsPoint:function(e){var t=this._getImageLines(this.oCoords),n=this._findCrossPoints(e,t);return n!==0&&n%2===1},_getImageLines:function(e){return{topline:{o:e.tl,d:e.tr},rightline:{o:e.tr,d:e.br},bottomline:{o:e.br,d:e.bl},leftline:{o:e.bl,d:e.tl}}},_findCrossPoints:function(e,t){var n,r,i,s,o,u,a=0,f;for(var l in t){f=t[l];if(f.o.y<e.y&&f.d.y<e.y)continue;if(f.o.y>=e.y&&f.d.y>=e.y)continue;f.o.x===f.d.x&&f.o.x>=e.x?(o=f.o.x,u=e.y):(n=0,r=(f.d.y-f.o.y)/(f.d.x-f.o.x),i=e.y-n*e.x,s=f.o.y-r*f.o.x,o=-(i-s)/(n-r),u=i+n*o),o>=e.x&&(a+=1);if(a===2)break}return a},getBoundingRectWidth:function(){return this.getBoundingRect().width},getBoundingRectHeight:function(){return this.getBoundingRect().height},getBoundingRect:function(){this.oCoords||this.setCoords();var e=[this.oCoords.tl.x,this.oCoords.tr.x,this.oCoords.br.x,this.oCoords.bl.x],t=fabric.util.array.min(e),n=fabric.util.array.max(e),r=Math.abs(t-n),i=[this.oCoords.tl.y,this.oCoords.tr.y,this.oCoords.br.y,this.oCoords.bl.y],s=fabric.util.array.min(i),o=fabric.util.array.max(i),u=Math.abs(s-o);return{left:t,top:s,width:r,height:u}},getWidth:function(){return this.width*this.scaleX},getHeight:function(){return this.height*this.scaleY},_constrainScale:function(e){return Math.abs(e)<this.minScaleLimit?e<0?-this.minScaleLimit:this.minScaleLimit:e},scale:function(e){return e=this._constrainScale(e),e<0&&(this.flipX=!this.flipX,this.flipY=!this.flipY,e*=-1),this.scaleX=e,this.scaleY=e,this.setCoords(),this},scaleToWidth:function(e){var t=this.getBoundingRectWidth()/this.getWidth();return this.scale(e/this.width/t)},scaleToHeight:function(e){var t=this.getBoundingRectHeight()/this.getHeight();return this.scale(e/this.height/t)},setCoords:function(){var t=this.strokeWidth>1?this.strokeWidth:0,n=this.padding,r=e(this.angle);this.currentWidth=(this.width+t)*this.scaleX+n*2,this.currentHeight=(this.height+t)*this.scaleY+n*2,this.currentWidth<0&&(this.currentWidth=Math.abs(this.currentWidth));var i=Math.sqrt(Math.pow(this.currentWidth/2,2)+Math.pow(this.currentHeight/2,2)),s=Math.atan(isFinite(this.currentHeight/this.currentWidth)?this.currentHeight/this.currentWidth:0),o=Math.cos(s+r)*i,u=Math.sin(s+r)*i,a=Math.sin(r),f=Math.cos(r),l=this.getCenterPoint(),c={x:l.x-o,y:l.y-u},h={x:c.x+this.currentWidth*f,y:c.y+this.currentWidth*a},p={x:h.x-this.currentHeight*a,y:h.y+this.currentHeight*f},d={x:c.x-this.currentHeight*a,y:c.y+this.currentHeight*f},v={x:c.x-this.currentHeight/2*a,y:c.y+this.currentHeight/2*f},m={x:c.x+this.currentWidth/2*f,y:c.y+this.currentWidth/2*a},g={x:h.x-this.currentHeight/2*a,y:h.y+this.currentHeight/2*f},y={x:d.x+this.currentWidth/2*f,y:d.y+this.currentWidth/2*a},b={x:m.x,y:m.y};return this.oCoords={tl:c,tr:h,br:p,bl:d,ml:v,mt:m,mr:g,mb:y,mtr:b},this._setCornerCoords&&this._setCornerCoords(),this}})}(),fabric.util.object.extend(fabric.Object.prototype,{hasStateChanged:function(){return this.stateProperties.some(function(e){return this.get(e)!==this.originalState[e]},this)},saveState:function(e){return this.stateProperties.forEach(function(e){this.originalState[e]=this.get(e)},this),e&&e.stateProperties&&e.stateProperties.forEach(function(e){this.originalState[e]=this.get(e)},this),this},setupState:function(){return this.originalState={},this.saveState(),this}}),function(){var e=fabric.util.getPointer,t=fabric.util.degreesToRadians;fabric.util.object.extend(fabric.Object.prototype,{_findTargetCorner:function(t,n){if(!this.hasControls||!this.active)return!1;var r=e(t,this.canvas.upperCanvasEl),i=r.x-n.left,s=r.y-n.top,o,u;for(var a in this.oCoords){if(a==="mtr"&&!this.hasRotatingPoint)continue;if(!(!this.get("lockUniScaling")||a!=="mt"&&a!=="mr"&&a!=="mb"&&a!=="ml"))continue;u=this._getImageLines(this.oCoords[a].corner),o=this._findCrossPoints({x:i,y:s},u);if(o!==0&&o%2===1)return this.__corner=a,a}return!1},_setCornerCoords:function(){var e=this.oCoords,n=t(this.angle),r=t(45-this.angle),i=Math.sqrt(2*Math.pow(this.cornerSize,2))/2,s=i*Math.cos(r),o=i*Math.sin(r),u=Math.sin(n),a=Math.cos(n);e.tl.corner={tl:{x:e.tl.x-o,y:e.tl.y-s},tr:{x:e.tl.x+s,y:e.tl.y-o},bl:{x:e.tl.x-s,y:e.tl.y+o},br:{x:e.tl.x+o,y:e.tl.y+s}},e.tr.corner={tl:{x:e.tr.x-o,y:e.tr.y-s},tr:{x:e.tr.x+s,y:e.tr.y-o},br:{x:e.tr.x+o,y:e.tr.y+s},bl:{x:e.tr.x-s,y:e.tr.y+o}},e.bl.corner={tl:{x:e.bl.x-o,y:e.bl.y-s},bl:{x:e.bl.x-s,y:e.bl.y+o},br:{x:e.bl.x+o,y:e.bl.y+s},tr:{x:e.bl.x+s,y:e.bl.y-o}},e.br.corner={tr:{x:e.br.x+s,y:e.br.y-o},bl:{x:e.br.x-s,y:e.br.y+o},br:{x:e.br.x+o,y:e.br.y+s},tl:{x:e.br.x-o,y:e.br.y-s}},e.ml.corner={tl:{x:e.ml.x-o,y:e.ml.y-s},tr:{x:e.ml.x+s,y:e.ml.y-o},bl:{x:e.ml.x-s,y:e.ml.y+o},br:{x:e.ml.x+o,y:e.ml.y+s}},e.mt.corner={tl:{x:e.mt.x-o,y:e.mt.y-s},tr:{x:e.mt.x+s,y:e.mt.y-o},bl:{x:e.mt.x-s,y:e.mt.y+o},br:{x:e.mt.x+o,y:e.mt.y+s}},e.mr.corner={tl:{x:e.mr.x-o,y:e.mr.y-s},tr:{x:e.mr.x+s,y:e.mr.y-o},bl:{x:e.mr.x-s,y:e.mr.y+o},br:{x:e.mr.x+o,y:e.mr.y+s}},e.mb.corner={tl:{x:e.mb.x-o,y:e.mb.y-s},tr:{x:e.mb.x+s,y:e.mb.y-o},bl:{x:e.mb.x-s,y:e.mb.y+o},br:{x:e.mb.x+o,y:e.mb.y+s}},e.mtr.corner={tl:{x:e.mtr.x-o+u*this.rotatingPointOffset,y:e.mtr.y-s-a*this.rotatingPointOffset},tr:{x:e.mtr.x+s+u*this.rotatingPointOffset,y:e.mtr.y-o-a*this.rotatingPointOffset},bl:{x:e.mtr.x-s+u*this.rotatingPointOffset,y:e.mtr.y+o-a*this.rotatingPointOffset},br:{x:e.mtr.x+o+u*this.rotatingPointOffset,y:e.mtr.y+s-a*this.rotatingPointOffset}}},drawBorders:function(e){if(!this.hasBorders)return this;var t=this.padding,n=t*2,r=~~(this.strokeWidth/2)*2;e.save(),e.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1,e.strokeStyle=this.borderColor;var i=1/this._constrainScale(this.scaleX),s=1/this._constrainScale(this.scaleY);e.lineWidth=1/this.borderScaleFactor,e.scale(i,s);var o=this.getWidth(),u=this.getHeight();e.strokeRect(~~(-(o/2)-t-r/2*this.scaleX)-.5,~~(-(u/2)-t-r/2*this.scaleY)-.5,~~(o+n+r*this.scaleX)+1,~~(u+n+r*this.scaleY)+1);if(this.hasRotatingPoint&&!this.get("lockRotation")&&this.hasControls){var a=(this.flipY?u+r*this.scaleY+t*2:-u-r*this.scaleY-t*2)/2;e.beginPath(),e.moveTo(0,a),e.lineTo(0,a+(this.flipY?this.rotatingPointOffset:-this.rotatingPointOffset)),e.closePath(),e.stroke()}return e.restore(),this},drawControls:function(e){if(!this.hasControls)return this;var t=this.cornerSize,n=t/2,r=~~(this.strokeWidth/2),i=-(this.width/2),s=-(this.height/2),o,u,a=t/this.scaleX,f=t/this.scaleY,l=this.padding/this.scaleX,c=this.padding/this.scaleY,h=n/this.scaleY,p=n/this.scaleX,d=(n-t)/this.scaleX,v=(n-t)/this.scaleY,m=this.height,g=this.width,y=this.transparentCorners?"strokeRect":"fillRect",b=this.transparentCorners,w=typeof G_vmlCanvasManager!="undefined";return e.save(),e.lineWidth=1/Math.max(this.scaleX,this.scaleY),e.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1,e.strokeStyle=e.fillStyle=this.cornerColor,o=i-p-r-l,u=s-h-r-c,w||b||e.clearRect(o,u,a,f),e[y](o,u,a,f),o=i+g-p+r+l,u=s-h-r-c,w||b||e.clearRect(o,u,a,f),e[y](o,u,a,f),o=i-p-r-l,u=s+m+v+r+c,w||b||e.clearRect(o,u,a,f),e[y](o,u,a,f),o=i+g+d+r+l,u=s+m+v+r+c,w||b||e.clearRect(o,u,a,f),e[y](o,u,a,f),this.get("lockUniScaling")||(o=i+g/2-p,u=s-h-r-c,w||b||e.clearRect(o,u,a,f),e[y](o,u,a,f),o=i+g/2-p,u=s+m+v+r+c,w||b||e.clearRect(o,u,a,f),e[y](o,u,a,f),o=i+g+d+r+l,u=s+m/2-h,w||b||e.clearRect(o,u,a,f),e[y](o,u,a,f),o=i-p-r-l,u=s+m/2-h,w||b||e.clearRect(o,u,a,f),e[y](o,u,a,f)),this.hasRotatingPoint&&(o=i+g/2-p,u=this.flipY?s+m+this.rotatingPointOffset/this.scaleY-f/2+r+c:s-this.rotatingPointOffset/this.scaleY-f/2-r-c,w||b||e.clearRect(o,u,a,f),e[y](o,u,a,f)),e.restore(),this}})}(),fabric.util.object.extend(fabric.StaticCanvas.prototype,{FX_DURATION:500,fxCenterObjectH:function(e,t){t=t||{};var n=function(){},r=t.onComplete||n,i=t.onChange||n,s=this;return fabric.util.animate({startValue:e.get("left"),endValue:this.getCenter().left,duration:this.FX_DURATION,onChange:function(t){e.set("left",t),s.renderAll(),i()},onComplete:function(){e.setCoords(),r()}}),this},fxCenterObjectV:function(e,t){t=t||{};var n=function(){},r=t.onComplete||n,i=t.onChange||n,s=this;return fabric.util.animate({startValue:e.get("top"),endValue:this.getCenter().top,duration:this.FX_DURATION,onChange:function(t){e.set("top",t),s.renderAll(),i()},onComplete:function(){e.setCoords(),r()}}),this},fxRemove:function(e,t){t=t||{};var n=function(){},r=t.onComplete||n,i=t.onChange||n,s=this;return fabric.util.animate({startValue:e.get("opacity"),endValue:0,duration:this.FX_DURATION,onStart:function(){e.set("active",!1)},onChange:function(t){e.set("opacity",t),s.renderAll(),i()},onComplete:function(){s.remove(e),r()}}),this}}),fabric.util.object.extend(fabric.Object.prototype,{animate:function(){if(arguments[0]&&typeof arguments[0]=="object"){var e=[],t,n;for(t in arguments[0])e.push(t);for(var r=0,i=e.length;r<i;r++)t=e[r],n=r!==i-1,this._animate(t,arguments[0][t],arguments[1],n)}else this._animate.apply(this,arguments);return this},_animate:function(e,t,n,r){var i=this,s;t=t.toString(),n?n=fabric.util.object.clone(n):n={},~e.indexOf(".")&&(s=e.split("."));var o=s?this.get(s[0])[s[1]]:this.get(e);"from"in n||(n.from=o),~t.indexOf("=")?t=o+parseFloat(t.replace("=","")):t=parseFloat(t),fabric.util.animate({startValue:n.from,endValue:t,byValue
:n.by,easing:n.easing,duration:n.duration,abort:n.abort&&function(){return n.abort.call(i)},onChange:function(t){s?i[s[0]][s[1]]=t:i.set(e,t);if(r)return;n.onChange&&n.onChange()},onComplete:function(){if(r)return;i.setCoords(),n.onComplete&&n.onComplete()}})}}),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend,r={x1:1,x2:1,y1:1,y2:1},i=t.StaticCanvas.supports("setLineDash");if(t.Line){t.warn("fabric.Line is already defined");return}t.Line=t.util.createClass(t.Object,{type:"line",initialize:function(e,t){t=t||{},e||(e=[0,0,0,0]),this.callSuper("initialize",t),this.set("x1",e[0]),this.set("y1",e[1]),this.set("x2",e[2]),this.set("y2",e[3]),this._setWidthHeight(t)},_setWidthHeight:function(e){e||(e={}),this.set("width",Math.abs(this.x2-this.x1)||1),this.set("height",Math.abs(this.y2-this.y1)||1),this.set("left","left"in e?e.left:Math.min(this.x1,this.x2)+this.width/2),this.set("top","top"in e?e.top:Math.min(this.y1,this.y2)+this.height/2)},_set:function(e,t){return this[e]=t,e in r&&this._setWidthHeight(),this},_render:function(e){e.beginPath();var t=this.group&&this.group.type!=="group";t&&!this.transformMatrix&&e.translate(-this.group.width/2+this.left,-this.group.height/2+this.top);if(!this.strokeDashArray||this.strokeDashArray&&i){var n=this.x1<=this.x2?-1:1,r=this.y1<=this.y2?-1:1;e.moveTo(this.width===1?0:n*this.width/2,this.height===1?0:r*this.height/2),e.lineTo(this.width===1?0:n*-1*this.width/2,this.height===1?0:r*-1*this.height/2)}e.lineWidth=this.strokeWidth;var s=e.strokeStyle;e.strokeStyle=this.stroke||e.fillStyle,this._renderStroke(e),e.strokeStyle=s},_renderDashedStroke:function(e){var n=this.x1<=this.x2?-1:1,r=this.y1<=this.y2?-1:1,i=this.width===1?0:n*this.width/2,s=this.height===1?0:r*this.height/2;e.beginPath(),t.util.drawDashedLine(e,i,s,-i,-s,this.strokeDashArray),e.closePath()},toObject:function(e){return n(this.callSuper("toObject",e),{x1:this.get("x1"),y1:this.get("y1"),x2:this.get("x2"),y2:this.get("y2")})},toSVG:function(){var e=this._createBaseSVGMarkup();return e.push("<line ",'x1="',this.get("x1"),'" y1="',this.get("y1"),'" x2="',this.get("x2"),'" y2="',this.get("y2"),'" style="',this.getSvgStyles(),'"/>'),e.join("")},complexity:function(){return 1}}),t.Line.ATTRIBUTE_NAMES=t.SHARED_ATTRIBUTES.concat("x1 y1 x2 y2".split(" ")),t.Line.fromElement=function(e,r){var i=t.parseAttributes(e,t.Line.ATTRIBUTE_NAMES),s=[i.x1||0,i.y1||0,i.x2||0,i.y2||0];return new t.Line(s,n(i,r))},t.Line.fromObject=function(e){var n=[e.x1,e.y1,e.x2,e.y2];return new t.Line(n,e)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";function i(e){return"radius"in e&&e.radius>0}var t=e.fabric||(e.fabric={}),n=Math.PI*2,r=t.util.object.extend;if(t.Circle){t.warn("fabric.Circle is already defined.");return}t.Circle=t.util.createClass(t.Object,{type:"circle",initialize:function(e){e=e||{},this.set("radius",e.radius||0),this.callSuper("initialize",e)},_set:function(e,t){return this.callSuper("_set",e,t),e==="radius"&&this.setRadius(t),this},toObject:function(e){return r(this.callSuper("toObject",e),{radius:this.get("radius")})},toSVG:function(){var e=this._createBaseSVGMarkup();return e.push("<circle ",'cx="0" cy="0" ','r="',this.radius,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),'"/>'),e.join("")},_render:function(e,t){e.beginPath(),e.globalAlpha=this.group?e.globalAlpha*this.opacity:this.opacity,e.arc(t?this.left:0,t?this.top:0,this.radius,0,n,!1),e.closePath(),this._renderFill(e),this._renderStroke(e)},getRadiusX:function(){return this.get("radius")*this.get("scaleX")},getRadiusY:function(){return this.get("radius")*this.get("scaleY")},setRadius:function(e){this.radius=e,this.set("width",e*2).set("height",e*2)},complexity:function(){return 1}}),t.Circle.ATTRIBUTE_NAMES=t.SHARED_ATTRIBUTES.concat("cx cy r".split(" ")),t.Circle.fromElement=function(e,n){n||(n={});var s=t.parseAttributes(e,t.Circle.ATTRIBUTE_NAMES);if(!i(s))throw new Error("value of `r` attribute is required and can not be negative");"left"in s&&(s.left-=n.width/2||0),"top"in s&&(s.top-=n.height/2||0);var o=new t.Circle(r(s,n));return o.cx=parseFloat(e.getAttribute("cx"))||0,o.cy=parseFloat(e.getAttribute("cy"))||0,o},t.Circle.fromObject=function(e){return new t.Circle(e)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={});if(t.Triangle){t.warn("fabric.Triangle is already defined");return}t.Triangle=t.util.createClass(t.Object,{type:"triangle",initialize:function(e){e=e||{},this.callSuper("initialize",e),this.set("width",e.width||100).set("height",e.height||100)},_render:function(e){var t=this.width/2,n=this.height/2;e.beginPath(),e.moveTo(-t,n),e.lineTo(0,-n),e.lineTo(t,n),e.closePath(),this._renderFill(e),this._renderStroke(e)},_renderDashedStroke:function(e){var n=this.width/2,r=this.height/2;e.beginPath(),t.util.drawDashedLine(e,-n,r,0,-r,this.strokeDashArray),t.util.drawDashedLine(e,0,-r,n,r,this.strokeDashArray),t.util.drawDashedLine(e,n,r,-n,r,this.strokeDashArray),e.closePath()},toSVG:function(){var e=this._createBaseSVGMarkup(),t=this.width/2,n=this.height/2,r=[-t+" "+n,"0 "+ -n,t+" "+n].join(",");return e.push("<polygon ",'points="',r,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),'"/>'),e.join("")},complexity:function(){return 1}}),t.Triangle.fromObject=function(e){return new t.Triangle(e)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=Math.PI*2,r=t.util.object.extend;if(t.Ellipse){t.warn("fabric.Ellipse is already defined.");return}t.Ellipse=t.util.createClass(t.Object,{type:"ellipse",rx:0,ry:0,initialize:function(e){e=e||{},this.callSuper("initialize",e),this.set("rx",e.rx||0),this.set("ry",e.ry||0),this.set("width",this.get("rx")*2),this.set("height",this.get("ry")*2)},toObject:function(e){return r(this.callSuper("toObject",e),{rx:this.get("rx"),ry:this.get("ry")})},toSVG:function(){var e=this._createBaseSVGMarkup();return e.push("<ellipse ",'rx="',this.get("rx"),'" ry="',this.get("ry"),'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),'"/>'),e.join("")},render:function(e,t){if(this.rx===0||this.ry===0)return;return this.callSuper("render",e,t)},_render:function(e,t){e.beginPath(),e.save(),e.globalAlpha=this.group?e.globalAlpha*this.opacity:this.opacity,this.transformMatrix&&this.group&&e.translate(this.cx,this.cy),e.transform(1,0,0,this.ry/this.rx,0,0),e.arc(t?this.left:0,t?this.top:0,this.rx,0,n,!1),this._renderFill(e),this._renderStroke(e),e.restore()},complexity:function(){return 1}}),t.Ellipse.ATTRIBUTE_NAMES=t.SHARED_ATTRIBUTES.concat("cx cy rx ry".split(" ")),t.Ellipse.fromElement=function(e,n){n||(n={});var i=t.parseAttributes(e,t.Ellipse.ATTRIBUTE_NAMES),s=i.left,o=i.top;"left"in i&&(i.left-=n.width/2||0),"top"in i&&(i.top-=n.height/2||0);var u=new t.Ellipse(r(i,n));return u.cx=s||0,u.cy=o||0,u},t.Ellipse.fromObject=function(e){return new t.Ellipse(e)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";function i(e){return e.left=e.left||0,e.top=e.top||0,e}var t=e.fabric||(e.fabric={}),n=t.util.object.extend;if(t.Rect){console.warn("fabric.Rect is already defined");return}var r=t.Object.prototype.stateProperties.concat();r.push("rx","ry"),t.Rect=t.util.createClass(t.Object,{stateProperties:r,type:"rect",rx:0,ry:0,strokeDashArray:null,initialize:function(e){e=e||{},this.callSuper("initialize",e),this._initRxRy(),this.x=e.x||0,this.y=e.y||0},_initRxRy:function(){this.rx&&!this.ry?this.ry=this.rx:this.ry&&!this.rx&&(this.rx=this.ry)},_render:function(e){var t=this.rx||0,n=this.ry||0,r=-this.width/2,i=-this.height/2,s=this.width,o=this.height,u=this.group&&this.group.type!=="group";e.beginPath(),e.globalAlpha=u?e.globalAlpha*this.opacity:this.opacity,this.transformMatrix&&u&&e.translate(this.width/2+this.x,this.height/2+this.y),!this.transformMatrix&&u&&e.translate(-this.group.width/2+this.width/2+this.x,-this.group.height/2+this.height/2+this.y);var a=t!==0||n!==0;e.moveTo(r+t,i),e.lineTo(r+s-t,i),a&&e.quadraticCurveTo(r+s,i,r+s,i+n,r+s,i+n),e.lineTo(r+s,i+o-n),a&&e.quadraticCurveTo(r+s,i+o,r+s-t,i+o,r+s-t,i+o),e.lineTo(r+t,i+o),a&&e.quadraticCurveTo(r,i+o,r,i+o-n,r,i+o-n),e.lineTo(r,i+n),a&&e.quadraticCurveTo(r,i,r+t,i,r+t,i),e.closePath(),this._renderFill(e),this._renderStroke(e)},_renderDashedStroke:function(e){var n=-this.width/2,r=-this.height/2,i=this.width,s=this.height;e.beginPath(),t.util.drawDashedLine(e,n,r,n+i,r,this.strokeDashArray),t.util.drawDashedLine(e,n+i,r,n+i,r+s,this.strokeDashArray),t.util.drawDashedLine(e,n+i,r+s,n,r+s,this.strokeDashArray),t.util.drawDashedLine(e,n,r+s,n,r,this.strokeDashArray),e.closePath()},_normalizeLeftTopProperties:function(e){return"left"in e&&this.set("left",e.left+this.getWidth()/2),this.set("x",e.left||0),"top"in e&&this.set("top",e.top+this.getHeight()/2),this.set("y",e.top||0),this},toObject:function(e){return n(this.callSuper("toObject",e),{rx:this.get("rx")||0,ry:this.get("ry")||0,x:this.get("x"),y:this.get("y")})},toSVG:function(){var e=this._createBaseSVGMarkup();return e.push("<rect ",'x="',-1*this.width/2,'" y="',-1*this.height/2,'" rx="',this.get("rx"),'" ry="',this.get("ry"),'" width="',this.width,'" height="',this.height,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),'"/>'),e.join("")},complexity:function(){return 1}}),t.Rect.ATTRIBUTE_NAMES=t.SHARED_ATTRIBUTES.concat("x y rx ry width height".split(" ")),t.Rect.fromElement=function(e,r){if(!e)return null;var s=t.parseAttributes(e,t.Rect.ATTRIBUTE_NAMES);s=i(s);var o=new t.Rect(n(r?t.util.object.clone(r):{},s));return o._normalizeLeftTopProperties(s),o},t.Rect.fromObject=function(e){return new t.Rect(e)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.toFixed,r=t.util.array.min;if(t.Polyline){t.warn("fabric.Polyline is already defined");return}t.Polyline=t.util.createClass(t.Object,{type:"polyline",initialize:function(e,t,n){t=t||{},this.set("points",e),this.callSuper("initialize",t),this._calcDimensions(n)},_calcDimensions:function(e){return t.Polygon.prototype._calcDimensions.call(this,e)},toObject:function(e){return t.Polygon.prototype.toObject.call(this,e)},toSVG:function(){var e=[],t=this._createBaseSVGMarkup();for(var r=0,i=this.points.length;r<i;r++)e.push(n(this.points[r].x,2),",",n(this.points[r].y,2)," ");return t.push("<polyline ",'points="',e.join(""),'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),'"/>'),t.join("")},_render:function(e){var t;e.beginPath(),e.moveTo(this.points[0].x,this.points[0].y);for(var n=0,r=this.points.length;n<r;n++)t=this.points[n],e.lineTo(t.x,t.y);this._renderFill(e),this._renderStroke(e)},_renderDashedStroke:function(e){var n,r;e.beginPath();for(var i=0,s=this.points.length;i<s;i++)n=this.points[i],r=this.points[i+1]||n,t.util.drawDashedLine(e,n.x,n.y,r.x,r.y,this.strokeDashArray)},complexity:function(){return this.get("points").length}}),t.Polyline.ATTRIBUTE_NAMES=t.SHARED_ATTRIBUTES.concat(),t.Polyline.fromElement=function(e,n){if(!e)return null;n||(n={});var i=t.parsePointsAttribute(e.getAttribute("points")),s=t.parseAttributes(e,t.Polyline.ATTRIBUTE_NAMES),o=r(i,"x"),u=r(i,"y");o=o<0?o:0,u=o<0?u:0;for(var a=0,f=i.length;a<f;a++)i[a].x-=n.width/2+o||0,i[a].y-=n.height/2+u||0;return new t.Polyline(i,t.util.object.extend(s,n),!0)},t.Polyline.fromObject=function(e){var n=e.points;return new t.Polyline(n,e,!0)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend,r=t.util.array.min,i=t.util.array.max,s=t.util.toFixed;if(t.Polygon){t.warn("fabric.Polygon is already defined");return}t.Polygon=t.util.createClass(t.Object,{type:"polygon",initialize:function(e,t,n){t=t||{},this.points=e,this.callSuper("initialize",t),this._calcDimensions(n)},_calcDimensions:function(e){var t=this.points,n=r(t,"x"),s=r(t,"y"),o=i(t,"x"),u=i(t,"y");this.width=o-n||1,this.height=u-s||1,this.minX=n,this.minY=s;if(e)return;var a=this.width/2+this.minX,f=this.height/2+this.minY;this.points.forEach(function(e){e.x-=a,e.y-=f},this)},toObject:function(e){return n(this.callSuper("toObject",e),{points:this.points.concat()})},toSVG:function(){var e=[],t=this._createBaseSVGMarkup();for(var n=0,r=this.points.length;n<r;n++)e.push(s(this.points[n].x,2),",",s(this.points[n].y,2)," ");return t.push("<polygon ",'points="',e.join(""),'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),'"/>'),t.join("")},_render:function(e){var t;e.beginPath(),e.moveTo(this.points[0].x,this.points[0].y);for(var n=0,r=this.points.length;n<r;n++)t=this.points[n],e.lineTo(t.x,t.y);this._renderFill(e);if(this.stroke||this.strokeDashArray)e.closePath(),this._renderStroke(e)},_renderDashedStroke:function(e){var n,r;e.beginPath();for(var i=0,s=this.points.length;i<s;i++)n=this.points[i],r=this.points[i+1]||this.points[0],t.util.drawDashedLine(e,n.x,n.y,r.x,r.y,this.strokeDashArray);e.closePath()},complexity:function(){return this.points.length}}),t.Polygon.ATTRIBUTE_NAMES=t.SHARED_ATTRIBUTES.concat(),t.Polygon.fromElement=function(e,i){if(!e)return null;i||(i={});var s=t.parsePointsAttribute(e.getAttribute("points")),o=t.parseAttributes(e,t.Polygon.ATTRIBUTE_NAMES),u=r(s,"x"),a=r(s,"y");u=u<0?u:0,a=u<0?a:0;for(var f=0,l=s.length;f<l;f++)s[f].x-=i.width/2+u||0,s[f].y-=i.height/2+a||0;return new t.Polygon(s,n(o,i),!0)},t.Polygon.fromObject=function(e){return new t.Polygon(e.points,e,!0)}}(typeof exports!="undefined"?exports:this),function(e){function a(e){return e[0]==="H"?e[1]:e[e.length-2]}function f(e){return e[0]==="V"?e[1]:e[e.length-1]}var t={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7};"use strict";var n=e.fabric||(e.fabric={}),r=n.util.array.min,i=n.util.array.max,s=n.util.object.extend,o=Object.prototype.toString,u=n.util.drawArc;if(n.Path){n.warn("fabric.Path is already defined");return}n.Path=n.util.createClass(n.Object,{type:"path",initialize:function(e,t){t=t||{},this.setOptions(t);if(!e)throw new Error("`path` argument is required");var n=o.call(e)==="[object Array]";this.path=n?e:e.match&&e.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi);if(!this.path)return;n||(this.path=this._parsePath()),this._initializePath(t),t.sourcePath&&this.setSourcePath(t.sourcePath)},_initializePath:function(e){var t="width"in e&&e.width!=null,n="height"in e&&e.width!=null,r="left"in e,i="top"in e,o=r?this.left:0,u=i?this.top:0;!t||!n?(s(this,this._parseDimensions()),t&&(this.width=e.width),n&&(this.height=e.height)):(i||(this.top=this.height/2),r||(this.left=this.width/2)),this.pathOffset=this.pathOffset||this._calculatePathOffset(o,u)},_calculatePathOffset:function(e,t){return{x:this.left-e-this.width/2,y:this.top-t-this.height/2}},_render:function(e){var t,n=null,r=0,i=0,s=0,o=0,a,f,l,c,h=-(this.width/2+this.pathOffset.x),p=-(this.height/2+this.pathOffset.y);for(var d=0,v=this.path.length;d<v;++d){t=this.path[d];switch(t[0]){case"l":r+=t[1],i+=t[2],e.lineTo(r+h,i+p);break;case"L":r=t[1],i=t[2],e.lineTo(r+h,i+p);break;case"h":r+=t[1],e.lineTo(r+h,i+p);break;case"H":r=t[1],e.lineTo(r+h,i+p);break;case"v":i+=t[1],e.lineTo(r+h,i+p);break;case"V":i=t[1],e.lineTo(r+h,i+p);break;case"m":r+=t[1],i+=t[2],e[!n||n[0]!=="m"&&n[0]!=="M"?"moveTo":"lineTo"](r+h,i+p);break;case"M":r=t[1],i=t[2],e[!n||n[0]!=="m"&&n[0]!=="M"?"moveTo":"lineTo"](r+h,i+p);break;case"c":a=r+t[5],f=i+t[6],s=r+t[3],o=i+t[4],e.bezierCurveTo(r+t[1]+h,i+t[2]+p,s+h,o+p,a+h,f+p),r=a,i=f;break;case"C":r=t[5],i=t[6],s=t[3],o=t[4],e.bezierCurveTo(t[1]+h,t[2]+p,s+h,o+p,r+h,i+p);break;case"s":a=r+t[3],f=i+t[4],s=s?2*r-s:r,o=o?2*i-o:i,e.bezierCurveTo(s+h,o+p,r+t[1]+h,i+t[2]+p,a+h,f+p),s=r+t[1],o=i+t[2],r=a,i=f;break;case"S":a=t[3],f=t[4],s=2*r-s,o=2*i-o,e.bezierCurveTo(s+h,o+p,t[1]+h,t[2]+p,a+h,f+p),r=a,i=f,s=t[1],o=t[2];break;case"q":a=r+t[3],f=i+t[4],s=r+t[1],o=i+t[2],e.quadraticCurveTo(s+h,o+p,a+h,f+p),r=a,i=f;break;case"Q":a=t[3],f=t[4],e.quadraticCurveTo(t[1]+h,t[2]+p,a+h,f+p),r=a,i=f,s=t[1],o=t[2];break;case"t":a=r+t[1],f=i+t[2],n[0].match(/[QqTt]/)===null?(s=r,o=i):n[0]==="t"?(s=2*r-l,o=2*i-c):n[0]==="q"&&(s=2*r-s,o=2*i-o),l=s,c=o,e.quadraticCurveTo(s+h,o+p,a+h,f+p),r=a,i=f,s=r+t[1],o=i+t[2];break;case"T":a=t[1],f=t[2],s=2*r-s,o=2*i-o,e.quadraticCurveTo(s+h,o+p,a+h,f+p),r=a,i=f;break;case"a":u(e,r+h,i+p,[t[1],t[2],t[3],t[4],t[5],t[6]+r+h,t[7]+i+p]),r+=t[6],i+=t[7];break;case"A":u(e,r+h,i+p,[t[1],t[2],t[3],t[4],t[5],t[6]+h,t[7]+p]),r=t[6],i=t[7];break;case"z":case"Z":e.closePath()}n=t}},render:function(e,t){if(!this.visible)return;e.save();var r=this.transformMatrix;r&&e.transform(r[0],r[1],r[2],r[3],r[4],r[5]),t||this.transform(e),this.overlayFill?e.fillStyle=this.overlayFill:this.fill&&(e.fillStyle=this.fill.toLive?this.fill.toLive(e):this.fill),this.stroke&&(e.lineWidth=this.strokeWidth,e.lineCap=this.strokeLineCap,e.lineJoin=this.strokeLineJoin,e.miterLimit=this.strokeMiterLimit,e.strokeStyle=this.stroke.toLive?this.stroke.toLive(e):this.stroke),this._setShadow(e),this.clipTo&&n.util.clipContext(this,e),e.beginPath(),this._render(e),this._renderFill(e),this._renderStroke(e),this.clipTo&&e.restore(),this._removeShadow(e),!t&&this.active&&(this.drawBorders(e),this.drawControls(e)),e.restore()},toString:function(){return"#<fabric.Path ("+this.complexity()+'): { "top": '+this.top+', "left": '+this.left+" }>"},toObject:function(e){var t=s(this.callSuper("toObject",e),{path:this.path,pathOffset:this.pathOffset});return this.sourcePath&&(t.sourcePath=this.sourcePath),this.transformMatrix&&(t.transformMatrix=this.transformMatrix),t},toDatalessObject:function(e){var t=this.toObject(e);return this.sourcePath&&(t.path=this.sourcePath),delete t.sourcePath,t},toSVG:function(){var e=[],t=this._createBaseSVGMarkup();for(var n=0,r=this.path.length;n<r;n++)e.push(this.path[n].join(" "));var i=e.join(" ");return t.push('<g transform="',this.group?"":this.getSvgTransform(),'">',"<path ",'d="',i,'" style="',this.getSvgStyles(),'" transform="translate(',-this.width/2," ",-this.height/2,")",'" stroke-linecap="round" ',"/>","</g>"),t.join("")},complexity:function(){return this.path.length},_parsePath:function(){var e=[],n=[],r,i,s=/(-?\.\d+)|(-?\d+(\.\d+)?)/g,o,u;for(var a=0,f,l=this.path.length;a<l;a++){r=this.path[a],u=r.slice(1).trim(),n.length=0;while(o=s.exec(u))n.push(o[0]);f=[r.charAt(0)];for(var c=0,h=n.length;c<h;c++)i=parseFloat(n[c]),isNaN(i)||f.push(i);var p=f[0].toLowerCase(),d=t[p];if(f.length-1>d)for(var v=1,m=f.length;v<m;v+=d)e.push([f[0]].concat(f.slice(v,v+d)));else e.push(f)}return e},_parseDimensions:function(){var e=[],t=[],n,s,o=!1,u,l;this.path.forEach(function(r,i){r[0]!=="H"&&(n=i===0?a(r):a(this.path[i-1])),r[0]!=="V"&&(s=i===0?f(r):f(this.path[i-1])),r[0]===r[0].toLowerCase()&&(o=!0),u=o?n+a(r):r[0]==="V"?n:a(r),l=o?s+f(r):r[0]==="H"?s:f(r);var c=parseInt(u,10);isNaN(c)||e.push(c),c=parseInt(l,10),isNaN(c)||t.push(c)},this);var c=r(e),h=r(t),p=i(e),d=i(t),v=p-c,m=d-h,g={left:this.left+(c+v/2),top:this.top+(h+m/2),width:v,height:m};return g}}),n.Path.fromObject=function(e,t){typeof e.path=="string"?n.loadSVGFromURL(e.path,function(r){var i=r[0],s=e.path;delete e.path,n.util.object.extend(i,e),i.setSourcePath(s),t(i)}):t(new n.Path(e.path,e))},n.Path.ATTRIBUTE_NAMES=n.SHARED_ATTRIBUTES.concat(["d"]),n.Path.fromElement=function(e,t,r){var i=n.parseAttributes(e,n.Path.ATTRIBUTE_NAMES);t&&t(new n.Path(i.d,s(i,r)))},n.Path.async=!0}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend,r=t.util.array.invoke,i=t.Object.prototype.toObject;if(t.PathGroup){t.warn("fabric.PathGroup is already defined");return}t.PathGroup=t.util.createClass(t.Path,{type:"path-group",fill:"",initialize:function(e,t){t=t||{},this.paths=e||[];for(var n=this.paths.length;n--;)this.paths[n].group=this;this.setOptions(t),this.setCoords(),t.sourcePath&&this.setSourcePath(t.sourcePath)},render:function(e){if(!this.visible)return;e.save();var n=this.transformMatrix;n&&e.transform(n[0],n[1],n[2],n[3],n[4],n[5]),this.transform(e),this._setShadow(e),this.clipTo&&t.util.clipContext(this,e);for(var r=0,i=this.paths.length;r<i;++r)this.paths[r].render(e,!0);this.clipTo&&e.restore(),this._removeShadow(e),this.active&&(this.drawBorders(e),this.drawControls(e)),e.restore()},_set:function(e,t){if((e==="fill"||e==="overlayFill")&&t&&this.isSameColor()){var n=this.paths.length;while(n--)this.paths[n]._set(e,t)}return this.callSuper("_set",e,t)},toObject:function(e){return n(i.call(this,e),{paths:r(this.getObjects(),"toObject",e),sourcePath:this.sourcePath})},toDatalessObject:function(e){var t=this.toObject(e);return this.sourcePath&&(t.paths=this.sourcePath),t},toSVG:function(){var e=this.getObjects(),t=["<g ",'style="',this.getSvgStyles(),'" ','transform="',this.getSvgTransform(),'" ',">"];for(var n=0,r=e.length;n<r;n++)t.push(e[n].toSVG());return t.push("</g>"),t.join("")},toString:function(){return"#<fabric.PathGroup ("+this.complexity()+"): { top: "+this.top+", left: "+this.left+" }>"},isSameColor:function(){var e=this.getObjects()[0].get("fill");return this.getObjects().every(function(t){return t.get("fill")===e})},complexity:function(){return this.paths.reduce(function(e,t){return e+(t&&t.complexity?t.complexity():0)},0)},toGrayscale:function(){var e=this.paths.length;while(e--)this.paths[e].toGrayscale();return this},getObjects:function(){return this.paths}}),t.PathGroup.fromObject=function(e,n){typeof e.paths=="string"?t.loadSVGFromURL(e.paths,function(r){var i=e.paths;delete e.paths;var s=t.util.groupSVGElements(r,e,i);n(s)}):t.util.enlivenObjects(e.paths,function(r){delete e.paths,n(new t.PathGroup(r,e))})},t.PathGroup.async=!0}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend,r=t.util.array.min,i=t.util.array.max,s=t.util.array.invoke;if(t.Group)return;var o={lockMovementX:!0,lockMovementY:!0,lockRotation:!0,lockScalingX:!0,lockScalingY:!0,lockUniScaling:!0};t.Group=t.util.createClass(t.Object,t.Collection,{type:"group",initialize:function(e,t){t=t||{},this._objects=e||[];for(var r=this._objects.length;r--;)this._objects[r].group=this;this.originalState={},this.callSuper("initialize"),this._calcBounds(),this._updateObjectsCoords(),t&&n(this,t),this._setOpacityIfSame(),this.setCoords(!0),this.saveCoords()},_updateObjectsCoords:function(){var e=this.left,t=this.top;this.forEachObject(function(n){var r=n.get("left"),i=n.get("top");n.set("originalLeft",r),n.set("originalTop",i),n.set("left",r-e),n.set("top",i-t),n.setCoords(),n.__origHasControls=n.hasControls,n.hasControls=!1},this)},toString:function(){return"#<fabric.Group: ("+this.complexity()+")>"},getObjects:function(){return this._objects},addWithUpdate:function(e){return this._restoreObjectsState(),this._objects.push(e),e.group=this,this.forEachObject(function(e){e.set("active",!0),e.group=this},this),this._calcBounds(),this._updateObjectsCoords(),this},removeWithUpdate:function(e){return this._restoreObjectsState(),this.forEachObject(function(e){e.set("active",!0),e.group=this},this),this.remove(e),this._calcBounds(),this._updateObjectsCoords(),this},_onObjectAdded:function(e){e.group=this},_onObjectRemoved:function(e){delete e.group,e.set("active",!1)},delegatedProperties:{fill:!0,opacity:!0,fontFamily:!0,fontWeight:!0,fontSize:!0,fontStyle:!0,lineHeight:!0,textDecoration:!0,textAlign:!0,backgroundColor:!0},_set:function(e,t){if(e in this.delegatedProperties){var n=this._objects.length;this[e]=t;while(n--)this._objects[n].set(e,t)}else this[e]=t},toObject:function(e){return n(this.callSuper("toObject",e),{objects:s(this._objects,"toObject",e)})},render:function(e,n){if(!this.visible)return;e.save(),this.transform(e);var r=Math.max(this.scaleX,this.scaleY);this.clipTo&&t.util.clipContext(this,e);for(var i=0,s=this._objects.length;i<s;i++){var o=this._objects[i],u=o.borderScaleFactor,a=o.hasRotatingPoint;if(!o.visible)continue;o.borderScaleFactor=r,o.hasRotatingPoint=!1,o.render(e),o.borderScaleFactor=u,o.hasRotatingPoint=a}this.clipTo&&e.restore(),!n&&this.active&&(this.drawBorders(e),this.drawControls(e)),e.restore(),this.setCoords()},_restoreObjectsState:function(){return this._objects.forEach(this._restoreObjectState,this),this},_restoreObjectState:function(e){var t=this.get("left"),n=this.get("top"),r=this.getAngle()*(Math.PI/180),i=Math.cos(r)*e.get("top")*this.get("scaleY")+Math.sin(r)*e.get("left")*this.get("scaleX"),s=-Math.sin(r)*e.get("top")*this.get("scaleY")+Math.cos(r)*e.get("left")*this.get("scaleX");return e.setAngle(e.getAngle()+this.getAngle()),e.set("left",t+s),e.set("top",n+i),e.set("scaleX",e.get("scaleX")*this.get("scaleX")),e.set("scaleY",e.get("scaleY")*this.get("scaleY")),e.setCoords(),e.hasControls=e.__origHasControls,delete e.__origHasControls,e.set("active",!1),e.setCoords(),delete e.group,this},destroy:function(){return this._restoreObjectsState()},saveCoords:function(){return this._originalLeft=this.get("left"),this._originalTop=this.get("top"),this},hasMoved:function(){return this._originalLeft!==this.get("left")||this._originalTop!==this.get("top")},setObjectsCoords:function(){return this.forEachObject(function(e){e.setCoords()}),this},_setOpacityIfSame:function(){var e=this.getObjects(),t=e[0]?e[0].get("opacity"):1,n=e.every(function(e){return e.get("opacity")===t});n&&(this.opacity=t)},_calcBounds:function(){var e=[],t=[],n,s,o,u,a,f,l,c=0,h=this._objects.length;for(;c<h;++c){a=this._objects[c],a.setCoords();for(var p in a.oCoords)e.push(a.oCoords[p].x),t.push(a.oCoords[p].y)}n=r(e),o=i(e),s=r(t),u=i(t),f=o-n||0,l=u-s||0,this.width=f,this.height=l,this.left=n+f/2||0,this.top=s+l/2||0},toSVG:function(){var e=[];for(var t=0,n=this._objects.length;t<n;t++)e.push(this._objects[t].toSVG());return'<g transform="'+this.getSvgTransform()+'">'+e.join("")+"</g>"},get:function(e){if(e in o){if(this[e])return this[e];for(var t=0,n=this._objects.length;t<n;t++)if(this._objects[t][e])return!0;return!1}return e in this.delegatedProperties?this._objects[0]&&this._objects[0].get(e):this[e]}}),t.Group.fromObject=function(e,n){t.util.enlivenObjects(e.objects,function(r){delete e.objects,n&&n(new t.Group(r,e))})},t.Group.async=!0}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=fabric.util.object.extend;e.fabric||(e.fabric={});if(e.fabric.Image){fabric.warn("fabric.Image is already defined.");return}fabric.Image=fabric.util.createClass(fabric.Object,{type:"image",initialize:function(e,t){t||(t={}),this.filters=[],this.callSuper("initialize",t),this._initElement(e),this._initConfig(t),t.filters&&(this.filters=t.filters,this.applyFilters())},getElement:function(){return this._element},setElement:function(e,t){return this._element=e,this._originalElement=e,this._initConfig(),this.filters.length!==0&&this.applyFilters(t),this},getOriginalSize:function(){var e=this.getElement();return{width:e.width,height:e.height}},render:function(e,t){if(!this.visible)return;e.save();var n=this.transformMatrix,r=this.group&&this.group.type!=="group";r&&e.translate(-this.group.width/2+this.width/2,-this.group.height/2+this.height/2),n&&e.transform(n[0],n[1],n[2],n[3],n[4],n[5]),t||this.transform(e),e.save(),this._setShadow(e),this.clipTo&&fabric.util.clipContext(this,e),this._render(e),this.shadow&&!this.shadow.affectStroke&&this._removeShadow(e),this._renderStroke(e),this.clipTo&&e.restore(),e.restore(),this.active&&!t&&(this.drawBorders(e),this.drawControls(e)),e.restore()},_stroke:function(e){e.save(),e.lineWidth=this.strokeWidth,e.lineCap=this.strokeLineCap,e.lineJoin=this.strokeLineJoin,e.miterLimit=this.strokeMiterLimit,e.strokeStyle=this.stroke.toLive?this.stroke.toLive(e):this.stroke,e.beginPath(),e.strokeRect(-this.width/2,-this.height/2,this.width,this.height),e.closePath(),e.restore()},_renderDashedStroke:function(e){var t=-this.width/2,n=-this.height/2,r=this.width,i=this.height;e.save(),e.lineWidth=this.strokeWidth,e.lineCap=this.strokeLineCap,e.lineJoin=this.strokeLineJoin,e.miterLimit=this.strokeMiterLimit,e.strokeStyle=this.stroke.toLive?this.stroke.toLive(e):this.stroke,e.beginPath(),fabric.util.drawDashedLine(e,t,n,t+r,n,this.strokeDashArray),fabric.util.drawDashedLine(e,t+r,n,t+r,n+i,this.strokeDashArray),fabric.util.drawDashedLine(e,t+r,n+i,t,n+i,this.strokeDashArray),fabric.util.drawDashedLine(e,t,n+i,t,n,this.strokeDashArray),e.closePath(),e.restore()},toObject:function(e){return t(this.callSuper("toObject",e),{src:this._originalElement.src||this._originalElement._src,filters:this.filters.map(function(e){return e&&e.toObject()})})},toSVG:function(){var e=[];e.push('<g transform="',this.getSvgTransform(),'">','<image xlink:href="',this.getSvgSrc(),'" style="',this.getSvgStyles(),'" transform="translate('+ -this.width/2+" "+ -this.height/2+")",'" width="',this.width,'" height="',this.height,'"></image>');if(this.stroke||this.strokeDashArray){var t=this.fill;this.fill=null,e.push("<rect ",'x="',-1*this.width/2,'" y="',-1*this.height/2,'" width="',this.width,'" height="',this.height,'" style="',this.getSvgStyles(),'"/>'),this.fill=t}return e.push("</g>"),e.join("")},getSrc:function(){return this.getElement().src||this.getElement()._src},toString:function(){return'#<fabric.Image: { src: "'+this.getSrc()+'" }>'},clone:function(e,t){this.constructor.fromObject(this.toObject(t),e)},applyFilters:function(e){if(this.filters.length===0){this._element=this._originalElement,e&&e();return}var t=this._originalElement,n=fabric.util.createCanvasElement(),r=fabric.util.createImage(),i=this;return n.width=t.width,n.height=t.height,n.getContext("2d").drawImage(t,0,0,t.width,t.height),this.filters.forEach(function(e){e&&e.applyTo(n)}),r.width=t.width,r.height=t.height,fabric.isLikelyNode?(r.src=n.toBuffer(undefined,fabric.Image.pngCompression),i._element=r,e&&e()):(r.onload=function(){i._element=r,e&&e(),r.onload=n=t=null},r.src=n.toDataURL("image/png")),this},_render:function(e){e.drawImage(this._element,-this.width/2,-this.height/2,this.width,this.height)},_resetWidthHeight:function(){var e=this.getElement();this.set("width",e.width),this.set("height",e.height)},_initElement:function(e){this.setElement(fabric.util.getById(e)),fabric.util.addClass(this.getElement(),fabric.Image.CSS_CANVAS)},_initConfig:function(e){e||(e={}),this.setOptions(e),this._setWidthHeight(e)},_initFilters:function(e,t){e.filters&&e.filters.length?fabric.util.enlivenObjects(e.filters,function(e){t&&t(e)},"fabric.Image.filters"):t&&t()},_setWidthHeight:function(e){this.width="width"in e?e.width:this.getElement().width||0,this.height="height"in e?e.height:this.getElement().height||0},complexity:function(){return 1}}),fabric.Image.CSS_CANVAS="canvas-img",fabric.Image.prototype.getSvgSrc=fabric.Image.prototype.getSrc,fabric.Image.fromObject=function(e,t){var n=fabric.document.createElement("img"),r=e.src;n.onload=function(){fabric.Image.prototype._initFilters.call(e,e,function(r){e.filters=r||[];var i=new fabric.Image(n,e);t&&t(i),n=n.onload=n.onerror=null})},n.onerror=function(){fabric.log("Error loading "+n.src),t&&t(null,!0),n=n.onload=n.onerror=null},n.src=r},fabric.Image.fromURL=function(e,t,n){fabric.util.loadImage(e,function(e){t(new fabric.Image(e,n))})},fabric.Image.ATTRIBUTE_NAMES=fabric.SHARED_ATTRIBUTES.concat("x y width height xlink:href".split(" ")),fabric.Image.fromElement=function(e,n,r){var i=fabric.parseAttributes(e,fabric.Image.ATTRIBUTE_NAMES);fabric.Image.fromURL(i["xlink:href"],n,t(r?fabric.util.object.clone(r):{},i))},fabric.Image.async=!0,fabric.Image.pngCompression=1}(typeof exports!="undefined"?exports:this),fabric.util.object.extend(fabric.Object.prototype,{_getAngleValueForStraighten:function(){var e=this.getAngle()%360;return e>0?Math.round((e-1)/90)*90:Math.round(e/90)*90},straighten:function(){return this.setAngle(this._getAngleValueForStraighten()),this},fxStraighten:function(e){e=e||{};var t=function(){},n=e.onComplete||t,r=e.onChange||t,i=this;return fabric.util.animate({startValue:this.get("angle"),endValue:this._getAngleValueForStraighten(),duration:this.FX_DURATION,onChange:function(e){i.setAngle(e),r()},onComplete:function(){i.setCoords(),n()},onStart:function(){i.set("active",!1)}}),this}}),fabric.util.object.extend(fabric.StaticCanvas.prototype,{straightenObject:function(e){return e.straighten(),this.renderAll(),this},fxStraightenObject:function(e){return e.fxStraighten({onChange:this.renderAll.bind(this)}),this}}),fabric.Image.filters=fabric.Image.filters||{},fabric.Image.filters.BaseFilter=fabric.util.createClass({type:"BaseFilter",toObject:function(){return{type:this.type}},toJSON:function(){return this.toObject()}}),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend;t.Image.filters.Brightness=t.util.createClass
(t.Image.filters.BaseFilter,{type:"Brightness",initialize:function(e){e=e||{},this.brightness=e.brightness||100},applyTo:function(e){var t=e.getContext("2d"),n=t.getImageData(0,0,e.width,e.height),r=n.data,i=this.brightness;for(var s=0,o=r.length;s<o;s+=4)r[s]+=i,r[s+1]+=i,r[s+2]+=i;t.putImageData(n,0,0)},toObject:function(){return n(this.callSuper("toObject"),{brightness:this.brightness})}}),t.Image.filters.Brightness.fromObject=function(e){return new t.Image.filters.Brightness(e)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend;t.Image.filters.Convolute=t.util.createClass(t.Image.filters.BaseFilter,{type:"Convolute",initialize:function(e){e=e||{},this.opaque=e.opaque,this.matrix=e.matrix||[0,0,0,0,1,0,0,0,0];var n=t.util.createCanvasElement();this.tmpCtx=n.getContext("2d")},_createImageData:function(e,t){return this.tmpCtx.createImageData(e,t)},applyTo:function(e){var t=this.matrix,n=e.getContext("2d"),r=n.getImageData(0,0,e.width,e.height),i=Math.round(Math.sqrt(t.length)),s=Math.floor(i/2),o=r.data,u=r.width,a=r.height,f=u,l=a,c=this._createImageData(f,l),h=c.data,p=this.opaque?1:0;for(var d=0;d<l;d++)for(var v=0;v<f;v++){var m=d,g=v,y=(d*f+v)*4,b=0,w=0,E=0,S=0;for(var x=0;x<i;x++)for(var T=0;T<i;T++){var N=m+x-s,C=g+T-s;if(N>=0&&N<a&&C>=0&&C<u){var k=(N*u+C)*4,L=t[x*i+T];b+=o[k]*L,w+=o[k+1]*L,E+=o[k+2]*L,S+=o[k+3]*L}}h[y]=b,h[y+1]=w,h[y+2]=E,h[y+3]=S+p*(255-S)}n.putImageData(c,0,0)},toObject:function(){return n(this.callSuper("toObject"),{opaque:this.opaque,matrix:this.matrix})}}),t.Image.filters.Convolute.fromObject=function(e){return new t.Image.filters.Convolute(e)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend;t.Image.filters.GradientTransparency=t.util.createClass(t.Image.filters.BaseFilter,{type:"GradientTransparency",initialize:function(e){e=e||{},this.threshold=e.threshold||100},applyTo:function(e){var t=e.getContext("2d"),n=t.getImageData(0,0,e.width,e.height),r=n.data,i=this.threshold,s=r.length;for(var o=0,u=r.length;o<u;o+=4)r[o+3]=i+255*(s-o)/s;t.putImageData(n,0,0)},toObject:function(){return n(this.callSuper("toObject"),{threshold:this.threshold})}}),t.Image.filters.GradientTransparency.fromObject=function(e){return new t.Image.filters.GradientTransparency(e)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={});t.Image.filters.Grayscale=t.util.createClass(t.Image.filters.BaseFilter,{type:"Grayscale",applyTo:function(e){var t=e.getContext("2d"),n=t.getImageData(0,0,e.width,e.height),r=n.data,i=n.width*n.height*4,s=0,o;while(s<i)o=(r[s]+r[s+1]+r[s+2])/3,r[s]=o,r[s+1]=o,r[s+2]=o,s+=4;t.putImageData(n,0,0)}}),t.Image.filters.Grayscale.fromObject=function(){return new t.Image.filters.Grayscale}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={});t.Image.filters.Invert=t.util.createClass(t.Image.filters.BaseFilter,{type:"Invert",applyTo:function(e){var t=e.getContext("2d"),n=t.getImageData(0,0,e.width,e.height),r=n.data,i=r.length,s;for(s=0;s<i;s+=4)r[s]=255-r[s],r[s+1]=255-r[s+1],r[s+2]=255-r[s+2];t.putImageData(n,0,0)}}),t.Image.filters.Invert.fromObject=function(){return new t.Image.filters.Invert}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend;t.Image.filters.Mask=t.util.createClass(t.Image.filters.BaseFilter,{type:"Mask",initialize:function(e){e=e||{},this.mask=e.mask,this.channel=[0,1,2,3].indexOf(e.channel)>-1?e.channel:0},applyTo:function(e){if(!this.mask)return;var n=e.getContext("2d"),r=n.getImageData(0,0,e.width,e.height),i=r.data,s=this.mask.getElement(),o=t.util.createCanvasElement(),u=this.channel,a,f=r.width*r.height*4;o.width=s.width,o.height=s.height,o.getContext("2d").drawImage(s,0,0,s.width,s.height);var l=o.getContext("2d").getImageData(0,0,s.width,s.height),c=l.data;for(a=0;a<f;a+=4)i[a+3]=c[a+u];n.putImageData(r,0,0)},toObject:function(){return n(this.callSuper("toObject"),{mask:this.mask.toObject(),channel:this.channel})}}),t.Image.filters.Mask.fromObject=function(e,n){var r=t.document.createElement("img"),i=e.mask.src;r.onload=function(){e.mask=new t.Image(r,e.mask),n&&n(new t.Image.filters.Mask(e)),r=r.onload=r.onerror=null},r.onerror=function(){t.log("Error loading "+r.src),n&&n(null,!0),r=r.onload=r.onerror=null},r.src=i},t.Image.filters.Mask.async=!0}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend;t.Image.filters.Noise=t.util.createClass(t.Image.filters.BaseFilter,{type:"Noise",initialize:function(e){e=e||{},this.noise=e.noise||100},applyTo:function(e){var t=e.getContext("2d"),n=t.getImageData(0,0,e.width,e.height),r=n.data,i=this.noise,s;for(var o=0,u=r.length;o<u;o+=4)s=(.5-Math.random())*i,r[o]+=s,r[o+1]+=s,r[o+2]+=s;t.putImageData(n,0,0)},toObject:function(){return n(this.callSuper("toObject"),{noise:this.noise})}}),t.Image.filters.Noise.fromObject=function(e){return new t.Image.filters.Noise(e)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend;t.Image.filters.Pixelate=t.util.createClass(t.Image.filters.BaseFilter,{type:"Pixelate",initialize:function(e){e=e||{},this.blocksize=e.blocksize||4},applyTo:function(e){var t=e.getContext("2d"),n=t.getImageData(0,0,e.width,e.height),r=n.data,i=n.height,s=n.width,o,u,a,f,l,c,h;for(u=0;u<i;u+=this.blocksize)for(a=0;a<s;a+=this.blocksize){o=u*4*s+a*4,f=r[o],l=r[o+1],c=r[o+2],h=r[o+3];for(var p=u,d=u+this.blocksize;p<d;p++)for(var v=a,m=a+this.blocksize;v<m;v++)o=p*4*s+v*4,r[o]=f,r[o+1]=l,r[o+2]=c,r[o+3]=h}t.putImageData(n,0,0)},toObject:function(){return n(this.callSuper("toObject"),{blocksize:this.blocksize})}}),t.Image.filters.Pixelate.fromObject=function(e){return new t.Image.filters.Pixelate(e)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend;t.Image.filters.RemoveWhite=t.util.createClass(t.Image.filters.BaseFilter,{type:"RemoveWhite",initialize:function(e){e=e||{},this.threshold=e.threshold||30,this.distance=e.distance||20},applyTo:function(e){var t=e.getContext("2d"),n=t.getImageData(0,0,e.width,e.height),r=n.data,i=this.threshold,s=this.distance,o=255-i,u=Math.abs,a,f,l;for(var c=0,h=r.length;c<h;c+=4)a=r[c],f=r[c+1],l=r[c+2],a>o&&f>o&&l>o&&u(a-f)<s&&u(a-l)<s&&u(f-l)<s&&(r[c+3]=1);t.putImageData(n,0,0)},toObject:function(){return n(this.callSuper("toObject"),{threshold:this.threshold,distance:this.distance})}}),t.Image.filters.RemoveWhite.fromObject=function(e){return new t.Image.filters.RemoveWhite(e)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={});t.Image.filters.Sepia=t.util.createClass(t.Image.filters.BaseFilter,{type:"Sepia",applyTo:function(e){var t=e.getContext("2d"),n=t.getImageData(0,0,e.width,e.height),r=n.data,i=r.length,s,o;for(s=0;s<i;s+=4)o=.3*r[s]+.59*r[s+1]+.11*r[s+2],r[s]=o+100,r[s+1]=o+50,r[s+2]=o+255;t.putImageData(n,0,0)}}),t.Image.filters.Sepia.fromObject=function(){return new t.Image.filters.Sepia}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={});t.Image.filters.Sepia2=t.util.createClass(t.Image.filters.BaseFilter,{type:"Sepia2",applyTo:function(e){var t=e.getContext("2d"),n=t.getImageData(0,0,e.width,e.height),r=n.data,i=r.length,s,o,u,a;for(s=0;s<i;s+=4)o=r[s],u=r[s+1],a=r[s+2],r[s]=(o*.393+u*.769+a*.189)/1.351,r[s+1]=(o*.349+u*.686+a*.168)/1.203,r[s+2]=(o*.272+u*.534+a*.131)/2.14;t.putImageData(n,0,0)}}),t.Image.filters.Sepia2.fromObject=function(){return new t.Image.filters.Sepia2}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend;t.Image.filters.Tint=t.util.createClass(t.Image.filters.BaseFilter,{type:"Tint",initialize:function(e){e=e||{},this.color=e.color||0},applyTo:function(e){var t=e.getContext("2d"),n=t.getImageData(0,0,e.width,e.height),r=n.data,i=r.length,s,o,u=parseInt(this.color,10).toString(16);while(u.length<6)u="0"+u;var a=parseInt("0x"+u.substr(0,2),16),f=parseInt("0x"+u.substr(2,2),16),l=parseInt("0x"+u.substr(4,2),16);for(s=0;s<i;s+=4)o=r[s+3],o>0&&(r[s]=a,r[s+1]=f,r[s+2]=l);t.putImageData(n,0,0)},toObject:function(){return n(this.callSuper("toObject"),{color:this.color})}}),t.Image.filters.Tint.fromObject=function(e){return new t.Image.filters.Tint(e)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend,r=t.util.object.clone,i=t.util.toFixed,s=t.StaticCanvas.supports("setLineDash");if(t.Text){t.warn("fabric.Text is already defined");return}var o=t.Object.prototype.stateProperties.concat();o.push("fontFamily","fontWeight","fontSize","text","textDecoration","textAlign","fontStyle","lineHeight","backgroundColor","textBackgroundColor","useNative","path"),t.Text=t.util.createClass(t.Object,{_dimensionAffectingProps:{fontSize:!0,fontWeight:!0,fontFamily:!0,textDecoration:!0,fontStyle:!0,lineHeight:!0,stroke:!0,strokeWidth:!0,text:!0},type:"text",fontSize:40,fontWeight:"normal",fontFamily:"Times New Roman",textDecoration:"",textAlign:"left",fontStyle:"",lineHeight:1.3,backgroundColor:"",textBackgroundColor:"",path:null,useNative:!0,stateProperties:o,stroke:null,shadow:null,initialize:function(e,t){t=t||{},this.text=e,this.__skipDimension=!0,this.setOptions(t),this.__skipDimension=!1,this._initDimensions(),this.setCoords()},_initDimensions:function(){if(this.__skipDimension)return;var e=t.util.createCanvasElement();this._render(e.getContext("2d"))},toString:function(){return"#<fabric.Text ("+this.complexity()+'): { "text": "'+this.text+'", "fontFamily": "'+this.fontFamily+'" }>'},_render:function(e){var t=this.group&&this.group.type!=="group";t&&!this.transformMatrix?e.translate(-this.group.width/2+this.left,-this.group.height/2+this.top):t&&this.transformMatrix&&e.translate(-this.group.width/2,-this.group.height/2),typeof Cufon=="undefined"||this.useNative===!0?this._renderViaNative(e):this._renderViaCufon(e)},_renderViaNative:function(e){this.transform(e,t.isLikelyNode),this._setTextStyles(e);var n=this.text.split(/\r?\n/);this.width=this._getTextWidth(e,n),this.height=this._getTextHeight(e,n),this.clipTo&&t.util.clipContext(this,e),this._renderTextBackground(e,n),this.textAlign!=="left"&&this.textAlign!=="justify"&&(e.save(),e.translate(this.textAlign==="center"?this.width/2:this.width,0)),e.save(),this._setShadow(e),this._renderTextFill(e,n),this._renderTextStroke(e,n),this._removeShadow(e),e.restore(),this.textAlign!=="left"&&this.textAlign!=="justify"&&e.restore(),this._renderTextDecoration(e,n),this.clipTo&&e.restore(),this._setBoundaries(e,n),this._totalLineHeight=0},_setBoundaries:function(e,t){this._boundaries=[];for(var n=0,r=t.length;n<r;n++){var i=this._getLineWidth(e,t[n]),s=this._getLineLeftOffset(i);this._boundaries.push({height:this.fontSize*this.lineHeight,width:i,left:s})}},_setTextStyles:function(e){this.fill&&(e.fillStyle=this.fill.toLive?this.fill.toLive(e):this.fill),this.stroke&&(e.lineWidth=this.strokeWidth,e.lineCap=this.strokeLineCap,e.lineJoin=this.strokeLineJoin,e.miterLimit=this.strokeMiterLimit,e.strokeStyle=this.stroke.toLive?this.stroke.toLive(e):this.stroke),e.textBaseline="alphabetic",e.textAlign=this.textAlign,e.font=this._getFontDeclaration()},_getTextHeight:function(e,t){return this.fontSize*t.length*this.lineHeight},_getTextWidth:function(e,t){var n=e.measureText(t[0]).width;for(var r=1,i=t.length;r<i;r++){var s=e.measureText(t[r]).width;s>n&&(n=s)}return n},_drawChars:function(e,t,n,r,i){t[e](n,r,i)},_drawTextLine:function(e,t,n,r,i,s){i-=this.fontSize/4;if(this.textAlign!=="justify"){this._drawChars(e,t,n,r,i,s);return}var o=t.measureText(n).width,u=this.width;if(u>o){var a=n.split(/\s+/),f=t.measureText(n.replace(/\s+/g,"")).width,l=u-f,c=a.length-1,h=l/c,p=0;for(var d=0,v=a.length;d<v;d++)this._drawChars(e,t,a[d],r+p,i,s),p+=t.measureText(a[d]).width+h}else this._drawChars(e,t,n,r,i,s)},_getLeftOffset:function(){return!t.isLikelyNode||this.originX!=="left"&&this.originX!=="center"?-this.width/2:0},_getTopOffset:function(){if(t.isLikelyNode)return this.originY==="center"?-this.height/2:this.originY==="bottom"?-this.height:0;return-this.height/2},_renderTextFill:function(e,t){if(!this.fill&&!this.skipFillStrokeCheck)return;this._boundaries=[];var n=0;for(var r=0,i=t.length;r<i;r++){var s=this._getHeightOfLine(e,r,t);n+=s,this._drawTextLine("fillText",e,t[r],this._getLeftOffset(),this._getTopOffset()+n,r)}},_renderTextStroke:function(e,t){if(!this.stroke&&!this.skipFillStrokeCheck)return;var n=0;e.save(),this.strokeDashArray&&(1&this.strokeDashArray.length&&this.strokeDashArray.push.apply(this.strokeDashArray,this.strokeDashArray),s&&e.setLineDash(this.strokeDashArray)),e.beginPath();for(var r=0,i=t.length;r<i;r++){var o=this._getHeightOfLine(e,r,t);n+=o,this._drawTextLine("strokeText",e,t[r],this._getLeftOffset(),this._getTopOffset()+n,r)}e.closePath(),e.restore()},_getHeightOfLine:function(){return this.fontSize*this.lineHeight},_renderTextBackground:function(e,t){this._renderTextBoxBackground(e),this._renderTextLinesBackground(e,t)},_renderTextBoxBackground:function(e){if(!this.backgroundColor)return;e.save(),e.fillStyle=this.backgroundColor,e.fillRect(this._getLeftOffset(),this._getTopOffset(),this.width,this.height),e.restore()},_renderTextLinesBackground:function(e,t){if(!this.textBackgroundColor)return;e.save(),e.fillStyle=this.textBackgroundColor;for(var n=0,r=t.length;n<r;n++)if(t[n]!==""){var i=this._getLineWidth(e,t[n]),s=this._getLineLeftOffset(i);e.fillRect(this._getLeftOffset()+s,this._getTopOffset()+n*this.fontSize*this.lineHeight,i,this.fontSize*this.lineHeight)}e.restore()},_getLineLeftOffset:function(e){return this.textAlign==="center"?(this.width-e)/2:this.textAlign==="right"?this.width-e:0},_getLineWidth:function(e,t){return this.textAlign==="justify"?this.width:e.measureText(t).width},_renderTextDecoration:function(e,t){function i(i){for(var s=0,o=t.length;s<o;s++){var u=r._getLineWidth(e,t[s]),a=r._getLineLeftOffset(u);e.fillRect(r._getLeftOffset()+a,i+s*r._getHeightOfLine(e,s,t)-n,u,1)}}if(!this.textDecoration)return;var n=this._getTextHeight(e,t)/2,r=this,s=this.fontSize/4;this.textDecoration.indexOf("underline")>-1&&i(this.fontSize*this.lineHeight),this.textDecoration.indexOf("line-through")>-1&&i(this.fontSize*this.lineHeight-s),this.textDecoration.indexOf("overline")>-1&&i(s)},_getFontDeclaration:function(){return[t.isLikelyNode?this.fontWeight:this.fontStyle,t.isLikelyNode?this.fontStyle:this.fontWeight,this.fontSize+"px",t.isLikelyNode?'"'+this.fontFamily+'"':this.fontFamily].join(" ")},render:function(e,t){if(!this.visible)return;e.save(),this._render(e),!t&&this.active&&(this.drawBorders(e),this.drawControls(e)),e.restore()},toObject:function(e){return n(this.callSuper("toObject",e),{text:this.text,fontSize:this.fontSize,fontWeight:this.fontWeight,fontFamily:this.fontFamily,fontStyle:this.fontStyle,lineHeight:this.lineHeight,textDecoration:this.textDecoration,textAlign:this.textAlign,path:this.path,backgroundColor:this.backgroundColor,textBackgroundColor:this.textBackgroundColor,useNative:this.useNative})},toSVG:function(){var e=this.text.split(/\r?\n/),t=this.useNative?this.fontSize*this.lineHeight:-this._fontAscent-this._fontAscent/5*this.lineHeight,n=-(this.width/2),r=this.useNative?this.fontSize-1:this.height/2-e.length*this.fontSize-this._totalLineHeight,s=this._getSVGTextAndBg(t,n,e),o=this._getSVGShadows(t,e);return r+=this._fontAscent?this._fontAscent/5*this.lineHeight:0,['<g transform="',this.getSvgTransform(),'">',s.textBgRects.join(""),"<text ",this.fontFamily?'font-family="'+this.fontFamily.replace(/"/g,"'")+'" ':"",this.fontSize?'font-size="'+this.fontSize+'" ':"",this.fontStyle?'font-style="'+this.fontStyle+'" ':"",this.fontWeight?'font-weight="'+this.fontWeight+'" ':"",this.textDecoration?'text-decoration="'+this.textDecoration+'" ':"",'style="',this.getSvgStyles(),'" ','transform="translate(',i(n,2)," ",i(r,2),')">',o.join(""),s.textSpans.join(""),"</text>","</g>"].join("")},_getSVGShadows:function(e,n){var r=[],s,o,u=1;if(!this.shadow||!this._boundaries)return r;for(s=0,o=n.length;s<o;s++)if(n[s]!==""){var a=this._boundaries&&this._boundaries[s]?this._boundaries[s].left:0;r.push('<tspan x="',i(a+u+this.shadow.offsetX,2),s===0||this.useNative?'" y':'" dy','="',i(this.useNative?e*s-this.height/2+this.shadow.offsetY:e+(s===0?this.shadow.offsetY:0),2),'" ',this._getFillAttributes(this.shadow.color),">",t.util.string.escapeXml(n[s]),"</tspan>"),u=1}else u++;return r},_getSVGTextAndBg:function(e,n,r){var s=[],o=[],u,a,f,l=1;this.backgroundColor&&this._boundaries&&o.push("<rect ",this._getFillAttributes(this.backgroundColor),' x="',i(-this.width/2,2),'" y="',i(-this.height/2,2),'" width="',i(this.width,2),'" height="',i(this.height,2),'"></rect>');for(u=0,f=r.length;u<f;u++){r[u]!==""?(a=this._boundaries&&this._boundaries[u]?i(this._boundaries[u].left,2):0,s.push('<tspan x="',a,'" ',u===0||this.useNative?"y":"dy",'="',i(this.useNative?e*u-this.height/2:e*l,2),'" ',this._getFillAttributes(this.fill),">",t.util.string.escapeXml(r[u]),"</tspan>"),l=1):l++;if(!this.textBackgroundColor||!this._boundaries)continue;o.push("<rect ",this._getFillAttributes(this.textBackgroundColor),' x="',i(n+this._boundaries[u].left,2),'" y="',i(e*u-this.height/2,2),'" width="',i(this._boundaries[u].width,2),'" height="',i(this._boundaries[u].height,2),'"></rect>')}return{textSpans:s,textBgRects:o}},_getFillAttributes:function(e){var n=e&&typeof e=="string"?new t.Color(e):"";return!n||!n.getSource()||n.getAlpha()===1?'fill="'+e+'"':'opacity="'+n.getAlpha()+'" fill="'+n.setAlpha(1).toRgb()+'"'},_set:function(e,t){e==="fontFamily"&&this.path&&(this.path=this.path.replace(/(.*?)([^\/]*)(\.font\.js)/,"$1"+t+"$3")),this.callSuper("_set",e,t),e in this._dimensionAffectingProps&&(this._initDimensions(),this.setCoords())},complexity:function(){return 1}}),t.Text.ATTRIBUTE_NAMES=t.SHARED_ATTRIBUTES.concat("x y font-family font-style font-weight font-size text-decoration".split(" ")),t.Text.fromElement=function(e,n){if(!e)return null;var r=t.parseAttributes(e,t.Text.ATTRIBUTE_NAMES);n=t.util.object.extend(n?t.util.object.clone(n):{},r);var i=new t.Text(e.textContent,n);return i.set({left:i.getLeft()+i.getWidth()/2,top:i.getTop()-i.getHeight()/2}),i},t.Text.fromObject=function(e){return new t.Text(e.text,r(e))},t.util.createAccessors(t.Text)}(typeof exports!="undefined"?exports:this),fabric.util.object.extend(fabric.Text.prototype,{_renderViaCufon:function(e){var t=Cufon.textOptions||(Cufon.textOptions={});t.left=this.left,t.top=this.top,t.context=e,t.color=this.fill;var n=this._initDummyElementForCufon();this.transform(e),Cufon.replaceElement(n,{engine:"canvas",separate:"none",fontFamily:this.fontFamily,fontWeight:this.fontWeight,textDecoration:this.textDecoration,textShadow:this.shadow&&this.shadow.toString(),textAlign:this.textAlign,fontStyle:this.fontStyle,lineHeight:this.lineHeight,stroke:this.stroke,strokeWidth:this.strokeWidth,backgroundColor:this.backgroundColor,textBackgroundColor:this.textBackgroundColor}),this.width=t.width,this.height=t.height,this._totalLineHeight=t.totalLineHeight,this._fontAscent=t.fontAscent,this._boundaries=t.boundaries,n=null,this.setCoords()},_initDummyElementForCufon:function(){var e=fabric.document.createElement("pre"),t=fabric.document.createElement("div");return t.appendChild(e),typeof G_vmlCanvasManager=="undefined"?e.innerHTML=this.text:e.innerText=this.text.replace(/\r?\n/gi,"\r"),e.style.fontSize=this.fontSize+"px",e.style.letterSpacing="normal",e}}),function(){function request(e,t,n){var r=URL.parse(e);r.port||(r.port=r.protocol.indexOf("https:")===0?443:80);var i=r.port===443?HTTPS:HTTP,s=i.request({hostname:r.hostname,port:r.port,path:r.path,method:"GET"},function(e){var r="";t&&e.setEncoding(t),e.on("end",function(){n(r)}),e.on("data",function(t){e.statusCode===200&&(r+=t)})});s.on("error",function(e){e.errno===process.ECONNREFUSED?fabric.log("ECONNREFUSED: connection refused to "+r.hostname+":"+r.port):fabric.log(e.message)}),s.end()}function request_fs(e,t){var n=require("fs");n.readFile(e,function(e,n){if(e)throw fabric.log(e),e;t(n)})}if(typeof document!="undefined"&&typeof window!="undefined")return;var DOMParser=(new require("xmldom")).DOMParser,URL=require("url"),HTTP=require("http"),HTTPS=require("https"),Canvas=require("canvas"),Image=require("canvas").Image;fabric.util.loadImage=function(e,t,n){var r=function(r){i.src=new Buffer(r,"binary"),i._src=e,t&&t.call(n,i)},i=new Image;e&&(e instanceof Buffer||e.indexOf("data")===0)?(i.src=i._src=e,t&&t.call(n,i)):e&&e.indexOf("http")!==0?request_fs(e,r):e&&request(e,"binary",r)},fabric.loadSVGFromURL=function(e,t,n){e=e.replace(/^\n\s*/,"").replace(/\?.*$/,"").trim(),e.indexOf("http")!==0?request_fs(e,function(e){fabric.loadSVGFromString(e,t,n)}):request(e,"",function(e){fabric.loadSVGFromString(e,t,n)})},fabric.loadSVGFromString=function(e,t,n){var r=(new DOMParser).parseFromString(e);fabric.parseSVGDocument(r.documentElement,function(e,n){t&&t(e,n)},n)},fabric.util.getScript=function(url,callback){request(url,"",function(body){eval(body),callback&&callback()})},fabric.Image.fromObject=function(e,t){fabric.util.loadImage(e.src,function(n){var r=new fabric.Image(n);r._initConfig(e),r._initFilters(e,function(e){r.filters=e||[],t&&t(r)})})},fabric.createCanvasForNode=function(e,t){var n=fabric.document.createElement("canvas"),r=new Canvas(e||600,t||600);n.style={},n.width=r.width,n.height=r.height;var i=fabric.Canvas||fabric.StaticCanvas,s=new i(n);return s.contextContainer=r.getContext("2d"),s.nodeCanvas=r,s.Font=Canvas.Font,s},fabric.StaticCanvas.prototype.createPNGStream=function(){return this.nodeCanvas.createPNGStream()},fabric.StaticCanvas.prototype.createJPEGStream=function(e){return this.nodeCanvas.createJPEGStream(e)};var origSetWidth=fabric.StaticCanvas.prototype.setWidth;fabric.StaticCanvas.prototype.setWidth=function(e){return origSetWidth.call(this,e),this.nodeCanvas.width=e,this},fabric.Canvas&&(fabric.Canvas.prototype.setWidth=fabric.StaticCanvas.prototype.setWidth);var origSetHeight=fabric.StaticCanvas.prototype.setHeight;fabric.StaticCanvas.prototype.setHeight=function(e){return origSetHeight.call(this,e),this.nodeCanvas.height=e,this},fabric.Canvas&&(fabric.Canvas.prototype.setHeight=fabric.StaticCanvas.prototype.setHeight)}();
/*
  html2canvas 0.4.1 <http://html2canvas.hertzen.com>
  Copyright (c) 2013 Niklas von Hertzen

  Released under MIT License
*/

(function(window, document, undefined){

"use strict";

var _html2canvas = {},
previousElement,
computedCSS,
html2canvas;

_html2canvas.Util = {};

_html2canvas.Util.log = function(a) {
  if (_html2canvas.logging && window.console && window.console.log) {
    window.console.log(a);
  }
};

_html2canvas.Util.trimText = (function(isNative){
  return function(input) {
    return isNative ? isNative.apply(input) : ((input || '') + '').replace( /^\s+|\s+$/g , '' );
  };
})(String.prototype.trim);

_html2canvas.Util.asFloat = function(v) {
  return parseFloat(v);
};

(function() {
  // TODO: support all possible length values
  var TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g;
  var TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g;
  _html2canvas.Util.parseTextShadows = function (value) {
    if (!value || value === 'none') {
      return [];
    }

    // find multiple shadow declarations
    var shadows = value.match(TEXT_SHADOW_PROPERTY),
      results = [];
    for (var i = 0; shadows && (i < shadows.length); i++) {
      var s = shadows[i].match(TEXT_SHADOW_VALUES);
      results.push({
        color: s[0],
        offsetX: s[1] ? s[1].replace('px', '') : 0,
        offsetY: s[2] ? s[2].replace('px', '') : 0,
        blur: s[3] ? s[3].replace('px', '') : 0
      });
    }
    return results;
  };
})();


_html2canvas.Util.parseBackgroundImage = function (value) {
    var whitespace = ' \r\n\t',
        method, definition, prefix, prefix_i, block, results = [],
        c, mode = 0, numParen = 0, quote, args;

    var appendResult = function(){
        if(method) {
            if(definition.substr( 0, 1 ) === '"') {
                definition = definition.substr( 1, definition.length - 2 );
            }
            if(definition) {
                args.push(definition);
            }
            if(method.substr( 0, 1 ) === '-' &&
                    (prefix_i = method.indexOf( '-', 1 ) + 1) > 0) {
                prefix = method.substr( 0, prefix_i);
                method = method.substr( prefix_i );
            }
            results.push({
                prefix: prefix,
                method: method.toLowerCase(),
                value: block,
                args: args
            });
        }
        args = []; //for some odd reason, setting .length = 0 didn't work in safari
        method =
            prefix =
            definition =
            block = '';
    };

    appendResult();
    for(var i = 0, ii = value.length; i<ii; i++) {
        c = value[i];
        if(mode === 0 && whitespace.indexOf( c ) > -1){
            continue;
        }
        switch(c) {
            case '"':
                if(!quote) {
                    quote = c;
                }
                else if(quote === c) {
                    quote = null;
                }
                break;

            case '(':
                if(quote) { break; }
                else if(mode === 0) {
                    mode = 1;
                    block += c;
                    continue;
                } else {
                    numParen++;
                }
                break;

            case ')':
                if(quote) { break; }
                else if(mode === 1) {
                    if(numParen === 0) {
                        mode = 0;
                        block += c;
                        appendResult();
                        continue;
                    } else {
                        numParen--;
                    }
                }
                break;

            case ',':
                if(quote) { break; }
                else if(mode === 0) {
                    appendResult();
                    continue;
                }
                else if (mode === 1) {
                    if(numParen === 0 && !method.match(/^url$/i)) {
                        args.push(definition);
                        definition = '';
                        block += c;
                        continue;
                    }
                }
                break;
        }

        block += c;
        if(mode === 0) { method += c; }
        else { definition += c; }
    }
    appendResult();

    return results;
};

_html2canvas.Util.Bounds = function (element) {
  var clientRect, bounds = {};

  if (element.getBoundingClientRect){
    clientRect = element.getBoundingClientRect();

    // TODO add scroll position to bounds, so no scrolling of window necessary
    bounds.top = clientRect.top;
    bounds.bottom = clientRect.bottom || (clientRect.top + clientRect.height);
    bounds.left = clientRect.left;

    bounds.width = element.offsetWidth;
    bounds.height = element.offsetHeight;
  }

  return bounds;
};

// TODO ideally, we'd want everything to go through this function instead of Util.Bounds,
// but would require further work to calculate the correct positions for elements with offsetParents
_html2canvas.Util.OffsetBounds = function (element) {
  var parent = element.offsetParent ? _html2canvas.Util.OffsetBounds(element.offsetParent) : {top: 0, left: 0};

  return {
    top: element.offsetTop + parent.top,
    bottom: element.offsetTop + element.offsetHeight + parent.top,
    left: element.offsetLeft + parent.left,
    width: element.offsetWidth,
    height: element.offsetHeight
  };
};

function toPX(element, attribute, value ) {
    var rsLeft = element.runtimeStyle && element.runtimeStyle[attribute],
        left,
        style = element.style;

    // Check if we are not dealing with pixels, (Opera has issues with this)
    // Ported from jQuery css.js
    // From the awesome hack by Dean Edwards
    // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

    // If we're not dealing with a regular pixel number
    // but a number that has a weird ending, we need to convert it to pixels

    if ( !/^-?[0-9]+\.?[0-9]*(?:px)?$/i.test( value ) && /^-?\d/.test(value) ) {
        // Remember the original values
        left = style.left;

        // Put in the new values to get a computed value out
        if (rsLeft) {
            element.runtimeStyle.left = element.currentStyle.left;
        }
        style.left = attribute === "fontSize" ? "1em" : (value || 0);
        value = style.pixelLeft + "px";

        // Revert the changed values
        style.left = left;
        if (rsLeft) {
            element.runtimeStyle.left = rsLeft;
        }
    }

    if (!/^(thin|medium|thick)$/i.test(value)) {
        return Math.round(parseFloat(value)) + "px";
    }

    return value;
}

function asInt(val) {
    return parseInt(val, 10);
}

function parseBackgroundSizePosition(value, element, attribute, index) {
    value = (value || '').split(',');
    value = value[index || 0] || value[0] || 'auto';
    value = _html2canvas.Util.trimText(value).split(' ');

    if(attribute === 'backgroundSize' && (!value[0] || value[0].match(/cover|contain|auto/))) {
        //these values will be handled in the parent function
    } else {
        value[0] = (value[0].indexOf( "%" ) === -1) ? toPX(element, attribute + "X", value[0]) : value[0];
        if(value[1] === undefined) {
            if(attribute === 'backgroundSize') {
                value[1] = 'auto';
                return value;
            } else {
                // IE 9 doesn't return double digit always
                value[1] = value[0];
            }
        }
        value[1] = (value[1].indexOf("%") === -1) ? toPX(element, attribute + "Y", value[1]) : value[1];
    }
    return value;
}

_html2canvas.Util.getCSS = function (element, attribute, index) {
    if (previousElement !== element) {
      computedCSS = document.defaultView.getComputedStyle(element, null);
    }

    var value = computedCSS[attribute];

    if (/^background(Size|Position)$/.test(attribute)) {
        return parseBackgroundSizePosition(value, element, attribute, index);
    } else if (/border(Top|Bottom)(Left|Right)Radius/.test(attribute)) {
      var arr = value.split(" ");
      if (arr.length <= 1) {
          arr[1] = arr[0];
      }
      return arr.map(asInt);
    }

  return value;
};

_html2canvas.Util.resizeBounds = function( current_width, current_height, target_width, target_height, stretch_mode ){
  var target_ratio = target_width / target_height,
    current_ratio = current_width / current_height,
    output_width, output_height;

  if(!stretch_mode || stretch_mode === 'auto') {
    output_width = target_width;
    output_height = target_height;
  } else if(target_ratio < current_ratio ^ stretch_mode === 'contain') {
    output_height = target_height;
    output_width = target_height * current_ratio;
  } else {
    output_width = target_width;
    output_height = target_width / current_ratio;
  }

  return {
    width: output_width,
    height: output_height
  };
};

function backgroundBoundsFactory( prop, el, bounds, image, imageIndex, backgroundSize ) {
    var bgposition =  _html2canvas.Util.getCSS( el, prop, imageIndex ) ,
    topPos,
    left,
    percentage,
    val;

    if (bgposition.length === 1){
      val = bgposition[0];

      bgposition = [];

      bgposition[0] = val;
      bgposition[1] = val;
    }

    if (bgposition[0].toString().indexOf("%") !== -1){
      percentage = (parseFloat(bgposition[0])/100);
      left = bounds.width * percentage;
      if(prop !== 'backgroundSize') {
        left -= (backgroundSize || image).width*percentage;
      }
    } else {
      if(prop === 'backgroundSize') {
        if(bgposition[0] === 'auto') {
          left = image.width;
        } else {
          if (/contain|cover/.test(bgposition[0])) {
            var resized = _html2canvas.Util.resizeBounds(image.width, image.height, bounds.width, bounds.height, bgposition[0]);
            left = resized.width;
            topPos = resized.height;
          } else {
            left = parseInt(bgposition[0], 10);
          }
        }
      } else {
        left = parseInt( bgposition[0], 10);
      }
    }


    if(bgposition[1] === 'auto') {
      topPos = left / image.width * image.height;
    } else if (bgposition[1].toString().indexOf("%") !== -1){
      percentage = (parseFloat(bgposition[1])/100);
      topPos =  bounds.height * percentage;
      if(prop !== 'backgroundSize') {
        topPos -= (backgroundSize || image).height * percentage;
      }

    } else {
      topPos = parseInt(bgposition[1],10);
    }

    return [left, topPos];
}

_html2canvas.Util.BackgroundPosition = function( el, bounds, image, imageIndex, backgroundSize ) {
    var result = backgroundBoundsFactory( 'backgroundPosition', el, bounds, image, imageIndex, backgroundSize );
    return { left: result[0], top: result[1] };
};

_html2canvas.Util.BackgroundSize = function( el, bounds, image, imageIndex ) {
    var result = backgroundBoundsFactory( 'backgroundSize', el, bounds, image, imageIndex );
    return { width: result[0], height: result[1] };
};

_html2canvas.Util.Extend = function (options, defaults) {
  for (var key in options) {
    if (options.hasOwnProperty(key)) {
      defaults[key] = options[key];
    }
  }
  return defaults;
};


/*
 * Derived from jQuery.contents()
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
_html2canvas.Util.Children = function( elem ) {
  var children;
  try {
    children = (elem.nodeName && elem.nodeName.toUpperCase() === "IFRAME") ? elem.contentDocument || elem.contentWindow.document : (function(array) {
      var ret = [];
      if (array !== null) {
        (function(first, second ) {
          var i = first.length,
          j = 0;

          if (typeof second.length === "number") {
            for (var l = second.length; j < l; j++) {
              first[i++] = second[j];
            }
          } else {
            while (second[j] !== undefined) {
              first[i++] = second[j++];
            }
          }

          first.length = i;

          return first;
        })(ret, array);
      }
      return ret;
    })(elem.childNodes);

  } catch (ex) {
    _html2canvas.Util.log("html2canvas.Util.Children failed with exception: " + ex.message);
    children = [];
  }
  return children;
};

_html2canvas.Util.isTransparent = function(backgroundColor) {
  return (backgroundColor === "transparent" || backgroundColor === "rgba(0, 0, 0, 0)");
};
_html2canvas.Util.Font = (function () {

  var fontData = {};

  return function(font, fontSize, doc) {
    if (fontData[font + "-" + fontSize] !== undefined) {
      return fontData[font + "-" + fontSize];
    }

    var container = doc.createElement('div'),
    img = doc.createElement('img'),
    span = doc.createElement('span'),
    sampleText = 'Hidden Text',
    baseline,
    middle,
    metricsObj;

    container.style.visibility = "hidden";
    container.style.fontFamily = font;
    container.style.fontSize = fontSize;
    container.style.margin = 0;
    container.style.padding = 0;

    doc.body.appendChild(container);

    // http://probablyprogramming.com/2009/03/15/the-tiniest-gif-ever (handtinywhite.gif)
    img.src = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=";
    img.width = 1;
    img.height = 1;

    img.style.margin = 0;
    img.style.padding = 0;
    img.style.verticalAlign = "baseline";

    span.style.fontFamily = font;
    span.style.fontSize = fontSize;
    span.style.margin = 0;
    span.style.padding = 0;

    span.appendChild(doc.createTextNode(sampleText));
    container.appendChild(span);
    container.appendChild(img);
    baseline = (img.offsetTop - span.offsetTop) + 1;

    container.removeChild(span);
    container.appendChild(doc.createTextNode(sampleText));

    container.style.lineHeight = "normal";
    img.style.verticalAlign = "super";

    middle = (img.offsetTop-container.offsetTop) + 1;
    metricsObj = {
      baseline: baseline,
      lineWidth: 1,
      middle: middle
    };

    fontData[font + "-" + fontSize] = metricsObj;

    doc.body.removeChild(container);

    return metricsObj;
  };
})();

(function(){
  var Util = _html2canvas.Util,
    Generate = {};

  _html2canvas.Generate = Generate;

  var reGradients = [
  /^(-webkit-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,
  /^(-o-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,
  /^(-webkit-gradient)\((linear|radial),\s((?:\d{1,3}%?)\s(?:\d{1,3}%?),\s(?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)\-]+)\)$/,
  /^(-moz-linear-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)]+)\)$/,
  /^(-webkit-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/,
  /^(-moz-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s?([a-z\-]*)([\w\d\.\s,%\(\)]+)\)$/,
  /^(-o-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/
  ];

  /*
 * TODO: Add IE10 vendor prefix (-ms) support
 * TODO: Add W3C gradient (linear-gradient) support
 * TODO: Add old Webkit -webkit-gradient(radial, ...) support
 * TODO: Maybe some RegExp optimizations are possible ;o)
 */
  Generate.parseGradient = function(css, bounds) {
    var gradient, i, len = reGradients.length, m1, stop, m2, m2Len, step, m3, tl,tr,br,bl;

    for(i = 0; i < len; i+=1){
      m1 = css.match(reGradients[i]);
      if(m1) {
        break;
      }
    }

    if(m1) {
      switch(m1[1]) {
        case '-webkit-linear-gradient':
        case '-o-linear-gradient':

          gradient = {
            type: 'linear',
            x0: null,
            y0: null,
            x1: null,
            y1: null,
            colorStops: []
          };

          // get coordinates
          m2 = m1[2].match(/\w+/g);
          if(m2){
            m2Len = m2.length;
            for(i = 0; i < m2Len; i+=1){
              switch(m2[i]) {
                case 'top':
                  gradient.y0 = 0;
                  gradient.y1 = bounds.height;
                  break;

                case 'right':
                  gradient.x0 = bounds.width;
                  gradient.x1 = 0;
                  break;

                case 'bottom':
                  gradient.y0 = bounds.height;
                  gradient.y1 = 0;
                  break;

                case 'left':
                  gradient.x0 = 0;
                  gradient.x1 = bounds.width;
                  break;
              }
            }
          }
          if(gradient.x0 === null && gradient.x1 === null){ // center
            gradient.x0 = gradient.x1 = bounds.width / 2;
          }
          if(gradient.y0 === null && gradient.y1 === null){ // center
            gradient.y0 = gradient.y1 = bounds.height / 2;
          }

          // get colors and stops
          m2 = m1[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g);
          if(m2){
            m2Len = m2.length;
            step = 1 / Math.max(m2Len - 1, 1);
            for(i = 0; i < m2Len; i+=1){
              m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/);
              if(m3[2]){
                stop = parseFloat(m3[2]);
                if(m3[3] === '%'){
                  stop /= 100;
                } else { // px - stupid opera
                  stop /= bounds.width;
                }
              } else {
                stop = i * step;
              }
              gradient.colorStops.push({
                color: m3[1],
                stop: stop
              });
            }
          }
          break;

        case '-webkit-gradient':

          gradient = {
            type: m1[2] === 'radial' ? 'circle' : m1[2], // TODO: Add radial gradient support for older mozilla definitions
            x0: 0,
            y0: 0,
            x1: 0,
            y1: 0,
            colorStops: []
          };

          // get coordinates
          m2 = m1[3].match(/(\d{1,3})%?\s(\d{1,3})%?,\s(\d{1,3})%?\s(\d{1,3})%?/);
          if(m2){
            gradient.x0 = (m2[1] * bounds.width) / 100;
            gradient.y0 = (m2[2] * bounds.height) / 100;
            gradient.x1 = (m2[3] * bounds.width) / 100;
            gradient.y1 = (m2[4] * bounds.height) / 100;
          }

          // get colors and stops
          m2 = m1[4].match(/((?:from|to|color-stop)\((?:[0-9\.]+,\s)?(?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)\))+/g);
          if(m2){
            m2Len = m2.length;
            for(i = 0; i < m2Len; i+=1){
              m3 = m2[i].match(/(from|to|color-stop)\(([0-9\.]+)?(?:,\s)?((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\)/);
              stop = parseFloat(m3[2]);
              if(m3[1] === 'from') {
                stop = 0.0;
              }
              if(m3[1] === 'to') {
                stop = 1.0;
              }
              gradient.colorStops.push({
                color: m3[3],
                stop: stop
              });
            }
          }
          break;

        case '-moz-linear-gradient':

          gradient = {
            type: 'linear',
            x0: 0,
            y0: 0,
            x1: 0,
            y1: 0,
            colorStops: []
          };

          // get coordinates
          m2 = m1[2].match(/(\d{1,3})%?\s(\d{1,3})%?/);

          // m2[1] == 0%   -> left
          // m2[1] == 50%  -> center
          // m2[1] == 100% -> right

          // m2[2] == 0%   -> top
          // m2[2] == 50%  -> center
          // m2[2] == 100% -> bottom

          if(m2){
            gradient.x0 = (m2[1] * bounds.width) / 100;
            gradient.y0 = (m2[2] * bounds.height) / 100;
            gradient.x1 = bounds.width - gradient.x0;
            gradient.y1 = bounds.height - gradient.y0;
          }

          // get colors and stops
          m2 = m1[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}%)?)+/g);
          if(m2){
            m2Len = m2.length;
            step = 1 / Math.max(m2Len - 1, 1);
            for(i = 0; i < m2Len; i+=1){
              m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%)?/);
              if(m3[2]){
                stop = parseFloat(m3[2]);
                if(m3[3]){ // percentage
                  stop /= 100;
                }
              } else {
                stop = i * step;
              }
              gradient.colorStops.push({
                color: m3[1],
                stop: stop
              });
            }
          }
          break;

        case '-webkit-radial-gradient':
        case '-moz-radial-gradient':
        case '-o-radial-gradient':

          gradient = {
            type: 'circle',
            x0: 0,
            y0: 0,
            x1: bounds.width,
            y1: bounds.height,
            cx: 0,
            cy: 0,
            rx: 0,
            ry: 0,
            colorStops: []
          };

          // center
          m2 = m1[2].match(/(\d{1,3})%?\s(\d{1,3})%?/);
          if(m2){
            gradient.cx = (m2[1] * bounds.width) / 100;
            gradient.cy = (m2[2] * bounds.height) / 100;
          }

          // size
          m2 = m1[3].match(/\w+/);
          m3 = m1[4].match(/[a-z\-]*/);
          if(m2 && m3){
            switch(m3[0]){
              case 'farthest-corner':
              case 'cover': // is equivalent to farthest-corner
              case '': // mozilla removes "cover" from definition :(
                tl = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.cy, 2));
                tr = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                br = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                bl = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.cy, 2));
                gradient.rx = gradient.ry = Math.max(tl, tr, br, bl);
                break;
              case 'closest-corner':
                tl = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.cy, 2));
                tr = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                br = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                bl = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.cy, 2));
                gradient.rx = gradient.ry = Math.min(tl, tr, br, bl);
                break;
              case 'farthest-side':
                if(m2[0] === 'circle'){
                  gradient.rx = gradient.ry = Math.max(
                    gradient.cx,
                    gradient.cy,
                    gradient.x1 - gradient.cx,
                    gradient.y1 - gradient.cy
                    );
                } else { // ellipse

                  gradient.type = m2[0];

                  gradient.rx = Math.max(
                    gradient.cx,
                    gradient.x1 - gradient.cx
                    );
                  gradient.ry = Math.max(
                    gradient.cy,
                    gradient.y1 - gradient.cy
                    );
                }
                break;
              case 'closest-side':
              case 'contain': // is equivalent to closest-side
                if(m2[0] === 'circle'){
                  gradient.rx = gradient.ry = Math.min(
                    gradient.cx,
                    gradient.cy,
                    gradient.x1 - gradient.cx,
                    gradient.y1 - gradient.cy
                    );
                } else { // ellipse

                  gradient.type = m2[0];

                  gradient.rx = Math.min(
                    gradient.cx,
                    gradient.x1 - gradient.cx
                    );
                  gradient.ry = Math.min(
                    gradient.cy,
                    gradient.y1 - gradient.cy
                    );
                }
                break;

            // TODO: add support for "30px 40px" sizes (webkit only)
            }
          }

          // color stops
          m2 = m1[5].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g);
          if(m2){
            m2Len = m2.length;
            step = 1 / Math.max(m2Len - 1, 1);
            for(i = 0; i < m2Len; i+=1){
              m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/);
              if(m3[2]){
                stop = parseFloat(m3[2]);
                if(m3[3] === '%'){
                  stop /= 100;
                } else { // px - stupid opera
                  stop /= bounds.width;
                }
              } else {
                stop = i * step;
              }
              gradient.colorStops.push({
                color: m3[1],
                stop: stop
              });
            }
          }
          break;
      }
    }

    return gradient;
  };

  function addScrollStops(grad) {
    return function(colorStop) {
      try {
        grad.addColorStop(colorStop.stop, colorStop.color);
      }
      catch(e) {
        Util.log(['failed to add color stop: ', e, '; tried to add: ', colorStop]);
      }
    };
  }

  Generate.Gradient = function(src, bounds) {
    if(bounds.width === 0 || bounds.height === 0) {
      return;
    }

    var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    gradient, grad;

    canvas.width = bounds.width;
    canvas.height = bounds.height;

    // TODO: add support for multi defined background gradients
    gradient = _html2canvas.Generate.parseGradient(src, bounds);

    if(gradient) {
      switch(gradient.type) {
        case 'linear':
          grad = ctx.createLinearGradient(gradient.x0, gradient.y0, gradient.x1, gradient.y1);
          gradient.colorStops.forEach(addScrollStops(grad));
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, bounds.width, bounds.height);
          break;

        case 'circle':
          grad = ctx.createRadialGradient(gradient.cx, gradient.cy, 0, gradient.cx, gradient.cy, gradient.rx);
          gradient.colorStops.forEach(addScrollStops(grad));
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, bounds.width, bounds.height);
          break;

        case 'ellipse':
          var canvasRadial = document.createElement('canvas'),
            ctxRadial = canvasRadial.getContext('2d'),
            ri = Math.max(gradient.rx, gradient.ry),
            di = ri * 2;

          canvasRadial.width = canvasRadial.height = di;

          grad = ctxRadial.createRadialGradient(gradient.rx, gradient.ry, 0, gradient.rx, gradient.ry, ri);
          gradient.colorStops.forEach(addScrollStops(grad));

          ctxRadial.fillStyle = grad;
          ctxRadial.fillRect(0, 0, di, di);

          ctx.fillStyle = gradient.colorStops[gradient.colorStops.length - 1].color;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(canvasRadial, gradient.cx - gradient.rx, gradient.cy - gradient.ry, 2 * gradient.rx, 2 * gradient.ry);
          break;
      }
    }

    return canvas;
  };

  Generate.ListAlpha = function(number) {
    var tmp = "",
    modulus;

    do {
      modulus = number % 26;
      tmp = String.fromCharCode((modulus) + 64) + tmp;
      number = number / 26;
    }while((number*26) > 26);

    return tmp;
  };

  Generate.ListRoman = function(number) {
    var romanArray = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
    decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    roman = "",
    v,
    len = romanArray.length;

    if (number <= 0 || number >= 4000) {
      return number;
    }

    for (v=0; v < len; v+=1) {
      while (number >= decimal[v]) {
        number -= decimal[v];
        roman += romanArray[v];
      }
    }

    return roman;
  };
})();
function h2cRenderContext(width, height) {
  var storage = [];
  return {
    storage: storage,
    width: width,
    height: height,
    clip: function() {
      storage.push({
        type: "function",
        name: "clip",
        'arguments': arguments
      });
    },
    translate: function() {
      storage.push({
        type: "function",
        name: "translate",
        'arguments': arguments
      });
    },
    fill: function() {
      storage.push({
        type: "function",
        name: "fill",
        'arguments': arguments
      });
    },
    save: function() {
      storage.push({
        type: "function",
        name: "save",
        'arguments': arguments
      });
    },
    restore: function() {
      storage.push({
        type: "function",
        name: "restore",
        'arguments': arguments
      });
    },
    fillRect: function () {
      storage.push({
        type: "function",
        name: "fillRect",
        'arguments': arguments
      });
    },
    createPattern: function() {
      storage.push({
        type: "function",
        name: "createPattern",
        'arguments': arguments
      });
    },
    drawShape: function() {

      var shape = [];

      storage.push({
        type: "function",
        name: "drawShape",
        'arguments': shape
      });

      return {
        moveTo: function() {
          shape.push({
            name: "moveTo",
            'arguments': arguments
          });
        },
        lineTo: function() {
          shape.push({
            name: "lineTo",
            'arguments': arguments
          });
        },
        arcTo: function() {
          shape.push({
            name: "arcTo",
            'arguments': arguments
          });
        },
        bezierCurveTo: function() {
          shape.push({
            name: "bezierCurveTo",
            'arguments': arguments
          });
        },
        quadraticCurveTo: function() {
          shape.push({
            name: "quadraticCurveTo",
            'arguments': arguments
          });
        }
      };

    },
    drawImage: function () {
      storage.push({
        type: "function",
        name: "drawImage",
        'arguments': arguments
      });
    },
    fillText: function () {
      storage.push({
        type: "function",
        name: "fillText",
        'arguments': arguments
      });
    },
    setVariable: function (variable, value) {
      storage.push({
        type: "variable",
        name: variable,
        'arguments': value
      });
      return value;
    }
  };
}
_html2canvas.Parse = function (images, options) {
  window.scroll(0,0);

  var element = (( options.elements === undefined ) ? document.body : options.elements[0]), // select body by default
  numDraws = 0,
  doc = element.ownerDocument,
  Util = _html2canvas.Util,
  support = Util.Support(options, doc),
  ignoreElementsRegExp = new RegExp("(" + options.ignoreElements + ")"),
  body = doc.body,
  getCSS = Util.getCSS,
  pseudoHide = "___html2canvas___pseudoelement",
  hidePseudoElements = doc.createElement('style');

  hidePseudoElements.innerHTML = '.' + pseudoHide + '-before:before { content: "" !important; display: none !important; }' +
  '.' + pseudoHide + '-after:after { content: "" !important; display: none !important; }';

  body.appendChild(hidePseudoElements);

  images = images || {};

  function documentWidth () {
    return Math.max(
      Math.max(doc.body.scrollWidth, doc.documentElement.scrollWidth),
      Math.max(doc.body.offsetWidth, doc.documentElement.offsetWidth),
      Math.max(doc.body.clientWidth, doc.documentElement.clientWidth)
      );
  }

  function documentHeight () {
    return Math.max(
      Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight),
      Math.max(doc.body.offsetHeight, doc.documentElement.offsetHeight),
      Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
      );
  }

  function getCSSInt(element, attribute) {
    var val = parseInt(getCSS(element, attribute), 10);
    return (isNaN(val)) ? 0 : val; // borders in old IE are throwing 'medium' for demo.html
  }

  function renderRect (ctx, x, y, w, h, bgcolor) {
    if (bgcolor !== "transparent"){
      ctx.setVariable("fillStyle", bgcolor);
      ctx.fillRect(x, y, w, h);
      numDraws+=1;
    }
  }

  function capitalize(m, p1, p2) {
    if (m.length > 0) {
      return p1 + p2.toUpperCase();
    }
  }

  function textTransform (text, transform) {
    switch(transform){
      case "lowercase":
        return text.toLowerCase();
      case "capitalize":
        return text.replace( /(^|\s|:|-|\(|\))([a-z])/g, capitalize);
      case "uppercase":
        return text.toUpperCase();
      default:
        return text;
    }
  }

  function noLetterSpacing(letter_spacing) {
    return (/^(normal|none|0px)$/.test(letter_spacing));
  }

  function drawText(currentText, x, y, ctx){
    if (currentText !== null && Util.trimText(currentText).length > 0) {
      ctx.fillText(currentText, x, y);
      numDraws+=1;
    }
  }

  function setTextVariables(ctx, el, text_decoration, color) {
    var align = false,
    bold = getCSS(el, "fontWeight"),
    family = getCSS(el, "fontFamily"),
    size = getCSS(el, "fontSize"),
    shadows = Util.parseTextShadows(getCSS(el, "textShadow"));

    switch(parseInt(bold, 10)){
      case 401:
        bold = "bold";
        break;
      case 400:
        bold = "normal";
        break;
    }

    ctx.setVariable("fillStyle", color);
    ctx.setVariable("font", [getCSS(el, "fontStyle"), getCSS(el, "fontVariant"), bold, size, family].join(" "));
    ctx.setVariable("textAlign", (align) ? "right" : "left");

    if (shadows.length) {
      // TODO: support multiple text shadows
      // apply the first text shadow
      ctx.setVariable("shadowColor", shadows[0].color);
      ctx.setVariable("shadowOffsetX", shadows[0].offsetX);
      ctx.setVariable("shadowOffsetY", shadows[0].offsetY);
      ctx.setVariable("shadowBlur", shadows[0].blur);
    }

    if (text_decoration !== "none"){
      return Util.Font(family, size, doc);
    }
  }

  function renderTextDecoration(ctx, text_decoration, bounds, metrics, color) {
    switch(text_decoration) {
      case "underline":
        // Draws a line at the baseline of the font
        // TODO As some browsers display the line as more than 1px if the font-size is big, need to take that into account both in position and size
        renderRect(ctx, bounds.left, Math.round(bounds.top + metrics.baseline + metrics.lineWidth), bounds.width, 1, color);
        break;
      case "overline":
        renderRect(ctx, bounds.left, Math.round(bounds.top), bounds.width, 1, color);
        break;
      case "line-through":
        // TODO try and find exact position for line-through
        renderRect(ctx, bounds.left, Math.ceil(bounds.top + metrics.middle + metrics.lineWidth), bounds.width, 1, color);
        break;
    }
  }

  function getTextBounds(state, text, textDecoration, isLast, transform) {
    var bounds;
    if (support.rangeBounds && !transform) {
      if (textDecoration !== "none" || Util.trimText(text).length !== 0) {
        bounds = textRangeBounds(text, state.node, state.textOffset);
      }
      state.textOffset += text.length;
    } else if (state.node && typeof state.node.nodeValue === "string" ){
      var newTextNode = (isLast) ? state.node.splitText(text.length) : null;
      bounds = textWrapperBounds(state.node, transform);
      state.node = newTextNode;
    }
    return bounds;
  }

  function textRangeBounds(text, textNode, textOffset) {
    var range = doc.createRange();
    range.setStart(textNode, textOffset);
    range.setEnd(textNode, textOffset + text.length);
    return range.getBoundingClientRect();
  }

  function textWrapperBounds(oldTextNode, transform) {
    var parent = oldTextNode.parentNode,
    wrapElement = doc.createElement('wrapper'),
    backupText = oldTextNode.cloneNode(true);

    wrapElement.appendChild(oldTextNode.cloneNode(true));
    parent.replaceChild(wrapElement, oldTextNode);

    var bounds = transform ? Util.OffsetBounds(wrapElement) : Util.Bounds(wrapElement);
    parent.replaceChild(backupText, wrapElement);
    return bounds;
  }

  function renderText(el, textNode, stack) {
    var ctx = stack.ctx,
    color = getCSS(el, "color"),
    textDecoration = getCSS(el, "textDecoration"),
    textAlign = getCSS(el, "textAlign"),
    metrics,
    textList,
    state = {
      node: textNode,
      textOffset: 0
    };

    if (Util.trimText(textNode.nodeValue).length > 0) {
      textNode.nodeValue = textTransform(textNode.nodeValue, getCSS(el, "textTransform"));
      textAlign = textAlign.replace(["-webkit-auto"],["auto"]);

      textList = (!options.letterRendering && /^(left|right|justify|auto)$/.test(textAlign) && noLetterSpacing(getCSS(el, "letterSpacing"))) ?
      textNode.nodeValue.split(/(\b| )/)
      : textNode.nodeValue.split("");

      metrics = setTextVariables(ctx, el, textDecoration, color);

      if (options.chinese) {
        textList.forEach(function(word, index) {
          if (/.*[\u4E00-\u9FA5].*$/.test(word)) {
            word = word.split("");
            word.unshift(index, 1);
            textList.splice.apply(textList, word);
          }
        });
      }

      textList.forEach(function(text, index) {
        var bounds = getTextBounds(state, text, textDecoration, (index < textList.length - 1), stack.transform.matrix);
        if (bounds) {
          drawText(text, bounds.left, bounds.bottom, ctx);
          renderTextDecoration(ctx, textDecoration, bounds, metrics, color);
        }
      });
    }
  }

  function listPosition (element, val) {
    var boundElement = doc.createElement( "boundelement" ),
    originalType,
    bounds;

    boundElement.style.display = "inline";

    originalType = element.style.listStyleType;
    element.style.listStyleType = "none";

    boundElement.appendChild(doc.createTextNode(val));

    element.insertBefore(boundElement, element.firstChild);

    bounds = Util.Bounds(boundElement);
    element.removeChild(boundElement);
    element.style.listStyleType = originalType;
    return bounds;
  }

  function elementIndex(el) {
    var i = -1,
    count = 1,
    childs = el.parentNode.childNodes;

    if (el.parentNode) {
      while(childs[++i] !== el) {
        if (childs[i].nodeType === 1) {
          count++;
        }
      }
      return count;
    } else {
      return -1;
    }
  }

  function listItemText(element, type) {
    var currentIndex = elementIndex(element), text;
    switch(type){
      case "decimal":
        text = currentIndex;
        break;
      case "decimal-leading-zero":
        text = (currentIndex.toString().length === 1) ? currentIndex = "0" + currentIndex.toString() : currentIndex.toString();
        break;
      case "upper-roman":
        text = _html2canvas.Generate.ListRoman( currentIndex );
        break;
      case "lower-roman":
        text = _html2canvas.Generate.ListRoman( currentIndex ).toLowerCase();
        break;
      case "lower-alpha":
        text = _html2canvas.Generate.ListAlpha( currentIndex ).toLowerCase();
        break;
      case "upper-alpha":
        text = _html2canvas.Generate.ListAlpha( currentIndex );
        break;
    }

    return text + ". ";
  }

  function renderListItem(element, stack, elBounds) {
    var x,
    text,
    ctx = stack.ctx,
    type = getCSS(element, "listStyleType"),
    listBounds;

    if (/^(decimal|decimal-leading-zero|upper-alpha|upper-latin|upper-roman|lower-alpha|lower-greek|lower-latin|lower-roman)$/i.test(type)) {
      text = listItemText(element, type);
      listBounds = listPosition(element, text);
      setTextVariables(ctx, element, "none", getCSS(element, "color"));

      if (getCSS(element, "listStylePosition") === "inside") {
        ctx.setVariable("textAlign", "left");
        x = elBounds.left;
      } else {
        return;
      }

      drawText(text, x, listBounds.bottom, ctx);
    }
  }

  function loadImage (src){
    var img = images[src];
    return (img && img.succeeded === true) ? img.img : false;
  }

  function clipBounds(src, dst){
    var x = Math.max(src.left, dst.left),
    y = Math.max(src.top, dst.top),
    x2 = Math.min((src.left + src.width), (dst.left + dst.width)),
    y2 = Math.min((src.top + src.height), (dst.top + dst.height));

    return {
      left:x,
      top:y,
      width:x2-x,
      height:y2-y
    };
  }

  function setZ(element, stack, parentStack){
    var newContext,
    isPositioned = stack.cssPosition !== 'static',
    zIndex = isPositioned ? getCSS(element, 'zIndex') : 'auto',
    opacity = getCSS(element, 'opacity'),
    isFloated = getCSS(element, 'cssFloat') !== 'none';

    // https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context
    // When a new stacking context should be created:
    // the root element (HTML),
    // positioned (absolutely or relatively) with a z-index value other than "auto",
    // elements with an opacity value less than 1. (See the specification for opacity),
    // on mobile WebKit and Chrome 22+, position: fixed always creates a new stacking context, even when z-index is "auto" (See this post)

    stack.zIndex = newContext = h2czContext(zIndex);
    newContext.isPositioned = isPositioned;
    newContext.isFloated = isFloated;
    newContext.opacity = opacity;
    newContext.ownStacking = (zIndex !== 'auto' || opacity < 1);

    if (parentStack) {
      parentStack.zIndex.children.push(stack);
    }
  }

  function renderImage(ctx, element, image, bounds, borders) {

    var paddingLeft = getCSSInt(element, 'paddingLeft'),
    paddingTop = getCSSInt(element, 'paddingTop'),
    paddingRight = getCSSInt(element, 'paddingRight'),
    paddingBottom = getCSSInt(element, 'paddingBottom');

    drawImage(
      ctx,
      image,
      0, //sx
      0, //sy
      image.width, //sw
      image.height, //sh
      bounds.left + paddingLeft + borders[3].width, //dx
      bounds.top + paddingTop + borders[0].width, // dy
      bounds.width - (borders[1].width + borders[3].width + paddingLeft + paddingRight), //dw
      bounds.height - (borders[0].width + borders[2].width + paddingTop + paddingBottom) //dh
      );
  }

  function getBorderData(element) {
    return ["Top", "Right", "Bottom", "Left"].map(function(side) {
      return {
        width: getCSSInt(element, 'border' + side + 'Width'),
        color: getCSS(element, 'border' + side + 'Color')
      };
    });
  }

  function getBorderRadiusData(element) {
    return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function(side) {
      return getCSS(element, 'border' + side + 'Radius');
    });
  }

  var getCurvePoints = (function(kappa) {

    return function(x, y, r1, r2) {
      var ox = (r1) * kappa, // control point offset horizontal
      oy = (r2) * kappa, // control point offset vertical
      xm = x + r1, // x-middle
      ym = y + r2; // y-middle
      return {
        topLeft: bezierCurve({
          x:x,
          y:ym
        }, {
          x:x,
          y:ym - oy
        }, {
          x:xm - ox,
          y:y
        }, {
          x:xm,
          y:y
        }),
        topRight: bezierCurve({
          x:x,
          y:y
        }, {
          x:x + ox,
          y:y
        }, {
          x:xm,
          y:ym - oy
        }, {
          x:xm,
          y:ym
        }),
        bottomRight: bezierCurve({
          x:xm,
          y:y
        }, {
          x:xm,
          y:y + oy
        }, {
          x:x + ox,
          y:ym
        }, {
          x:x,
          y:ym
        }),
        bottomLeft: bezierCurve({
          x:xm,
          y:ym
        }, {
          x:xm - ox,
          y:ym
        }, {
          x:x,
          y:y + oy
        }, {
          x:x,
          y:y
        })
      };
    };
  })(4 * ((Math.sqrt(2) - 1) / 3));

  function bezierCurve(start, startControl, endControl, end) {

    var lerp = function (a, b, t) {
      return {
        x:a.x + (b.x - a.x) * t,
        y:a.y + (b.y - a.y) * t
      };
    };

    return {
      start: start,
      startControl: startControl,
      endControl: endControl,
      end: end,
      subdivide: function(t) {
        var ab = lerp(start, startControl, t),
        bc = lerp(startControl, endControl, t),
        cd = lerp(endControl, end, t),
        abbc = lerp(ab, bc, t),
        bccd = lerp(bc, cd, t),
        dest = lerp(abbc, bccd, t);
        return [bezierCurve(start, ab, abbc, dest), bezierCurve(dest, bccd, cd, end)];
      },
      curveTo: function(borderArgs) {
        borderArgs.push(["bezierCurve", startControl.x, startControl.y, endControl.x, endControl.y, end.x, end.y]);
      },
      curveToReversed: function(borderArgs) {
        borderArgs.push(["bezierCurve", endControl.x, endControl.y, startControl.x, startControl.y, start.x, start.y]);
      }
    };
  }

  function parseCorner(borderArgs, radius1, radius2, corner1, corner2, x, y) {
    if (radius1[0] > 0 || radius1[1] > 0) {
      borderArgs.push(["line", corner1[0].start.x, corner1[0].start.y]);
      corner1[0].curveTo(borderArgs);
      corner1[1].curveTo(borderArgs);
    } else {
      borderArgs.push(["line", x, y]);
    }

    if (radius2[0] > 0 || radius2[1] > 0) {
      borderArgs.push(["line", corner2[0].start.x, corner2[0].start.y]);
    }
  }

  function drawSide(borderData, radius1, radius2, outer1, inner1, outer2, inner2) {
    var borderArgs = [];

    if (radius1[0] > 0 || radius1[1] > 0) {
      borderArgs.push(["line", outer1[1].start.x, outer1[1].start.y]);
      outer1[1].curveTo(borderArgs);
    } else {
      borderArgs.push([ "line", borderData.c1[0], borderData.c1[1]]);
    }

    if (radius2[0] > 0 || radius2[1] > 0) {
      borderArgs.push(["line", outer2[0].start.x, outer2[0].start.y]);
      outer2[0].curveTo(borderArgs);
      borderArgs.push(["line", inner2[0].end.x, inner2[0].end.y]);
      inner2[0].curveToReversed(borderArgs);
    } else {
      borderArgs.push([ "line", borderData.c2[0], borderData.c2[1]]);
      borderArgs.push([ "line", borderData.c3[0], borderData.c3[1]]);
    }

    if (radius1[0] > 0 || radius1[1] > 0) {
      borderArgs.push(["line", inner1[1].end.x, inner1[1].end.y]);
      inner1[1].curveToReversed(borderArgs);
    } else {
      borderArgs.push([ "line", borderData.c4[0], borderData.c4[1]]);
    }

    return borderArgs;
  }

  function calculateCurvePoints(bounds, borderRadius, borders) {

    var x = bounds.left,
    y = bounds.top,
    width = bounds.width,
    height = bounds.height,

    tlh = borderRadius[0][0],
    tlv = borderRadius[0][1],
    trh = borderRadius[1][0],
    trv = borderRadius[1][1],
    brh = borderRadius[2][0],
    brv = borderRadius[2][1],
    blh = borderRadius[3][0],
    blv = borderRadius[3][1],

    topWidth = width - trh,
    rightHeight = height - brv,
    bottomWidth = width - brh,
    leftHeight = height - blv;

    return {
      topLeftOuter: getCurvePoints(
        x,
        y,
        tlh,
        tlv
        ).topLeft.subdivide(0.5),

      topLeftInner: getCurvePoints(
        x + borders[3].width,
        y + borders[0].width,
        Math.max(0, tlh - borders[3].width),
        Math.max(0, tlv - borders[0].width)
        ).topLeft.subdivide(0.5),

      topRightOuter: getCurvePoints(
        x + topWidth,
        y,
        trh,
        trv
        ).topRight.subdivide(0.5),

      topRightInner: getCurvePoints(
        x + Math.min(topWidth, width + borders[3].width),
        y + borders[0].width,
        (topWidth > width + borders[3].width) ? 0 :trh - borders[3].width,
        trv - borders[0].width
        ).topRight.subdivide(0.5),

      bottomRightOuter: getCurvePoints(
        x + bottomWidth,
        y + rightHeight,
        brh,
        brv
        ).bottomRight.subdivide(0.5),

      bottomRightInner: getCurvePoints(
        x + Math.min(bottomWidth, width + borders[3].width),
        y + Math.min(rightHeight, height + borders[0].width),
        Math.max(0, brh - borders[1].width),
        Math.max(0, brv - borders[2].width)
        ).bottomRight.subdivide(0.5),

      bottomLeftOuter: getCurvePoints(
        x,
        y + leftHeight,
        blh,
        blv
        ).bottomLeft.subdivide(0.5),

      bottomLeftInner: getCurvePoints(
        x + borders[3].width,
        y + leftHeight,
        Math.max(0, blh - borders[3].width),
        Math.max(0, blv - borders[2].width)
        ).bottomLeft.subdivide(0.5)
    };
  }

  function getBorderClip(element, borderPoints, borders, radius, bounds) {
    var backgroundClip = getCSS(element, 'backgroundClip'),
    borderArgs = [];

    switch(backgroundClip) {
      case "content-box":
      case "padding-box":
        parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftInner, borderPoints.topRightInner, bounds.left + borders[3].width, bounds.top + borders[0].width);
        parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightInner, borderPoints.bottomRightInner, bounds.left + bounds.width - borders[1].width, bounds.top + borders[0].width);
        parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightInner, borderPoints.bottomLeftInner, bounds.left + bounds.width - borders[1].width, bounds.top + bounds.height - borders[2].width);
        parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftInner, borderPoints.topLeftInner, bounds.left + borders[3].width, bounds.top + bounds.height - borders[2].width);
        break;

      default:
        parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftOuter, borderPoints.topRightOuter, bounds.left, bounds.top);
        parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightOuter, borderPoints.bottomRightOuter, bounds.left + bounds.width, bounds.top);
        parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightOuter, borderPoints.bottomLeftOuter, bounds.left + bounds.width, bounds.top + bounds.height);
        parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftOuter, borderPoints.topLeftOuter, bounds.left, bounds.top + bounds.height);
        break;
    }

    return borderArgs;
  }

  function parseBorders(element, bounds, borders){
    var x = bounds.left,
    y = bounds.top,
    width = bounds.width,
    height = bounds.height,
    borderSide,
    bx,
    by,
    bw,
    bh,
    borderArgs,
    // http://www.w3.org/TR/css3-background/#the-border-radius
    borderRadius = getBorderRadiusData(element),
    borderPoints = calculateCurvePoints(bounds, borderRadius, borders),
    borderData = {
      clip: getBorderClip(element, borderPoints, borders, borderRadius, bounds),
      borders: []
    };

    for (borderSide = 0; borderSide < 4; borderSide++) {

      if (borders[borderSide].width > 0) {
        bx = x;
        by = y;
        bw = width;
        bh = height - (borders[2].width);

        switch(borderSide) {
          case 0:
            // top border
            bh = borders[0].width;

            borderArgs = drawSide({
              c1: [bx, by],
              c2: [bx + bw, by],
              c3: [bx + bw - borders[1].width, by + bh],
              c4: [bx + borders[3].width, by + bh]
            }, borderRadius[0], borderRadius[1],
            borderPoints.topLeftOuter, borderPoints.topLeftInner, borderPoints.topRightOuter, borderPoints.topRightInner);
            break;
          case 1:
            // right border
            bx = x + width - (borders[1].width);
            bw = borders[1].width;

            borderArgs = drawSide({
              c1: [bx + bw, by],
              c2: [bx + bw, by + bh + borders[2].width],
              c3: [bx, by + bh],
              c4: [bx, by + borders[0].width]
            }, borderRadius[1], borderRadius[2],
            borderPoints.topRightOuter, borderPoints.topRightInner, borderPoints.bottomRightOuter, borderPoints.bottomRightInner);
            break;
          case 2:
            // bottom border
            by = (by + height) - (borders[2].width);
            bh = borders[2].width;

            borderArgs = drawSide({
              c1: [bx + bw, by + bh],
              c2: [bx, by + bh],
              c3: [bx + borders[3].width, by],
              c4: [bx + bw - borders[3].width, by]
            }, borderRadius[2], borderRadius[3],
            borderPoints.bottomRightOuter, borderPoints.bottomRightInner, borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner);
            break;
          case 3:
            // left border
            bw = borders[3].width;

            borderArgs = drawSide({
              c1: [bx, by + bh + borders[2].width],
              c2: [bx, by],
              c3: [bx + bw, by + borders[0].width],
              c4: [bx + bw, by + bh]
            }, borderRadius[3], borderRadius[0],
            borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner, borderPoints.topLeftOuter, borderPoints.topLeftInner);
            break;
        }

        borderData.borders.push({
          args: borderArgs,
          color: borders[borderSide].color
        });

      }
    }

    return borderData;
  }

  function createShape(ctx, args) {
    var shape = ctx.drawShape();
    args.forEach(function(border, index) {
      shape[(index === 0) ? "moveTo" : border[0] + "To" ].apply(null, border.slice(1));
    });
    return shape;
  }

  function renderBorders(ctx, borderArgs, color) {
    if (color !== "transparent") {
      ctx.setVariable( "fillStyle", color);
      createShape(ctx, borderArgs);
      ctx.fill();
      numDraws+=1;
    }
  }

  function renderFormValue (el, bounds, stack){

    var valueWrap = doc.createElement('valuewrap'),
    cssPropertyArray = ['lineHeight','textAlign','fontFamily','color','fontSize','paddingLeft','paddingTop','width','height','border','borderLeftWidth','borderTopWidth'],
    textValue,
    textNode;

    cssPropertyArray.forEach(function(property) {
      try {
        valueWrap.style[property] = getCSS(el, property);
      } catch(e) {
        // Older IE has issues with "border"
        Util.log("html2canvas: Parse: Exception caught in renderFormValue: " + e.message);
      }
    });

    valueWrap.style.borderColor = "black";
    valueWrap.style.borderStyle = "solid";
    valueWrap.style.display = "block";
    valueWrap.style.position = "absolute";

    if (/^(submit|reset|button|text|password)$/.test(el.type) || el.nodeName === "SELECT"){
      valueWrap.style.lineHeight = getCSS(el, "height");
    }

    valueWrap.style.top = bounds.top + "px";
    valueWrap.style.left = bounds.left + "px";

    textValue = (el.nodeName === "SELECT") ? (el.options[el.selectedIndex] || 0).text : el.value;
    if(!textValue) {
      textValue = el.placeholder;
    }

    textNode = doc.createTextNode(textValue);

    valueWrap.appendChild(textNode);
    body.appendChild(valueWrap);

    renderText(el, textNode, stack);
    body.removeChild(valueWrap);
  }

  function drawImage (ctx) {
    ctx.drawImage.apply(ctx, Array.prototype.slice.call(arguments, 1));
    numDraws+=1;
  }

  function getPseudoElement(el, which) {
    var elStyle = window.getComputedStyle(el, which);
    if(!elStyle || !elStyle.content || elStyle.content === "none" || elStyle.content === "-moz-alt-content" || elStyle.display === "none") {
      return;
    }
    var content = elStyle.content + '',
    first = content.substr( 0, 1 );
    //strips quotes
    if(first === content.substr( content.length - 1 ) && first.match(/'|"/)) {
      content = content.substr( 1, content.length - 2 );
    }

    var isImage = content.substr( 0, 3 ) === 'url',
    elps = document.createElement( isImage ? 'img' : 'span' );

    elps.className = pseudoHide + "-before " + pseudoHide + "-after";

    Object.keys(elStyle).filter(indexedProperty).forEach(function(prop) {
      // Prevent assigning of read only CSS Rules, ex. length, parentRule
      try {
        elps.style[prop] = elStyle[prop];
      } catch (e) {
        Util.log(['Tried to assign readonly property ', prop, 'Error:', e]);
      }
    });

    if(isImage) {
      elps.src = Util.parseBackgroundImage(content)[0].args[0];
    } else {
      elps.innerHTML = content;
    }
    return elps;
  }

  function indexedProperty(property) {
    return (isNaN(window.parseInt(property, 10)));
  }

  function injectPseudoElements(el, stack) {
    var before = getPseudoElement(el, ':before'),
    after = getPseudoElement(el, ':after');
    if(!before && !after) {
      return;
    }

    if(before) {
      el.className += " " + pseudoHide + "-before";
      el.parentNode.insertBefore(before, el);
      parseElement(before, stack, true);
      el.parentNode.removeChild(before);
      el.className = el.className.replace(pseudoHide + "-before", "").trim();
    }

    if (after) {
      el.className += " " + pseudoHide + "-after";
      el.appendChild(after);
      parseElement(after, stack, true);
      el.removeChild(after);
      el.className = el.className.replace(pseudoHide + "-after", "").trim();
    }

  }

  function renderBackgroundRepeat(ctx, image, backgroundPosition, bounds) {
    var offsetX = Math.round(bounds.left + backgroundPosition.left),
    offsetY = Math.round(bounds.top + backgroundPosition.top);

    ctx.createPattern(image);
    ctx.translate(offsetX, offsetY);
    ctx.fill();
    ctx.translate(-offsetX, -offsetY);
  }

  function backgroundRepeatShape(ctx, image, backgroundPosition, bounds, left, top, width, height) {
    var args = [];
    args.push(["line", Math.round(left), Math.round(top)]);
    args.push(["line", Math.round(left + width), Math.round(top)]);
    args.push(["line", Math.round(left + width), Math.round(height + top)]);
    args.push(["line", Math.round(left), Math.round(height + top)]);
    createShape(ctx, args);
    ctx.save();
    ctx.clip();
    renderBackgroundRepeat(ctx, image, backgroundPosition, bounds);
    ctx.restore();
  }

  function renderBackgroundColor(ctx, backgroundBounds, bgcolor) {
    renderRect(
      ctx,
      backgroundBounds.left,
      backgroundBounds.top,
      backgroundBounds.width,
      backgroundBounds.height,
      bgcolor
      );
  }

  function renderBackgroundRepeating(el, bounds, ctx, image, imageIndex) {
    var backgroundSize = Util.BackgroundSize(el, bounds, image, imageIndex),
    backgroundPosition = Util.BackgroundPosition(el, bounds, image, imageIndex, backgroundSize),
    backgroundRepeat = getCSS(el, "backgroundRepeat").split(",").map(Util.trimText);

    image = resizeImage(image, backgroundSize);

    backgroundRepeat = backgroundRepeat[imageIndex] || backgroundRepeat[0];

    switch (backgroundRepeat) {
      case "repeat-x":
        backgroundRepeatShape(ctx, image, backgroundPosition, bounds,
          bounds.left, bounds.top + backgroundPosition.top, 99999, image.height);
        break;

      case "repeat-y":
        backgroundRepeatShape(ctx, image, backgroundPosition, bounds,
          bounds.left + backgroundPosition.left, bounds.top, image.width, 99999);
        break;

      case "no-repeat":
        backgroundRepeatShape(ctx, image, backgroundPosition, bounds,
          bounds.left + backgroundPosition.left, bounds.top + backgroundPosition.top, image.width, image.height);
        break;

      default:
        renderBackgroundRepeat(ctx, image, backgroundPosition, {
          top: bounds.top,
          left: bounds.left,
          width: image.width,
          height: image.height
        });
        break;
    }
  }

  function renderBackgroundImage(element, bounds, ctx) {
    var backgroundImage = getCSS(element, "backgroundImage"),
    backgroundImages = Util.parseBackgroundImage(backgroundImage),
    image,
    imageIndex = backgroundImages.length;

    while(imageIndex--) {
      backgroundImage = backgroundImages[imageIndex];

      if (!backgroundImage.args || backgroundImage.args.length === 0) {
        continue;
      }

      var key = backgroundImage.method === 'url' ?
      backgroundImage.args[0] :
      backgroundImage.value;

      image = loadImage(key);

      // TODO add support for background-origin
      if (image) {
        renderBackgroundRepeating(element, bounds, ctx, image, imageIndex);
      } else {
        Util.log("html2canvas: Error loading background:", backgroundImage);
      }
    }
  }

  function resizeImage(image, bounds) {
    if(image.width === bounds.width && image.height === bounds.height) {
      return image;
    }

    var ctx, canvas = doc.createElement('canvas');
    canvas.width = bounds.width;
    canvas.height = bounds.height;
    ctx = canvas.getContext("2d");
    drawImage(ctx, image, 0, 0, image.width, image.height, 0, 0, bounds.width, bounds.height );
    return canvas;
  }

  function setOpacity(ctx, element, parentStack) {
    return ctx.setVariable("globalAlpha", getCSS(element, "opacity") * ((parentStack) ? parentStack.opacity : 1));
  }

  function removePx(str) {
    return str.replace("px", "");
  }

  var transformRegExp = /(matrix)\((.+)\)/;

  function getTransform(element, parentStack) {
    var transform = getCSS(element, "transform") || getCSS(element, "-webkit-transform") || getCSS(element, "-moz-transform") || getCSS(element, "-ms-transform") || getCSS(element, "-o-transform");
    var transformOrigin = getCSS(element, "transform-origin") || getCSS(element, "-webkit-transform-origin") || getCSS(element, "-moz-transform-origin") || getCSS(element, "-ms-transform-origin") || getCSS(element, "-o-transform-origin") || "0px 0px";

    transformOrigin = transformOrigin.split(" ").map(removePx).map(Util.asFloat);

    var matrix;
    if (transform && transform !== "none") {
      var match = transform.match(transformRegExp);
      if (match) {
        switch(match[1]) {
          case "matrix":
            matrix = match[2].split(",").map(Util.trimText).map(Util.asFloat);
            break;
        }
      }
    }

    return {
      origin: transformOrigin,
      matrix: matrix
    };
  }

  function createStack(element, parentStack, bounds, transform) {
    var ctx = h2cRenderContext((!parentStack) ? documentWidth() : bounds.width , (!parentStack) ? documentHeight() : bounds.height),
    stack = {
      ctx: ctx,
      opacity: setOpacity(ctx, element, parentStack),
      cssPosition: getCSS(element, "position"),
      borders: getBorderData(element),
      transform: transform,
      clip: (parentStack && parentStack.clip) ? Util.Extend( {}, parentStack.clip ) : null
    };

    setZ(element, stack, parentStack);

    // TODO correct overflow for absolute content residing under a static position
    if (options.useOverflow === true && /(hidden|scroll|auto)/.test(getCSS(element, "overflow")) === true && /(BODY)/i.test(element.nodeName) === false){
      stack.clip = (stack.clip) ? clipBounds(stack.clip, bounds) : bounds;
    }

    return stack;
  }

  function getBackgroundBounds(borders, bounds, clip) {
    var backgroundBounds = {
      left: bounds.left + borders[3].width,
      top: bounds.top + borders[0].width,
      width: bounds.width - (borders[1].width + borders[3].width),
      height: bounds.height - (borders[0].width + borders[2].width)
    };

    if (clip) {
      backgroundBounds = clipBounds(backgroundBounds, clip);
    }

    return backgroundBounds;
  }

  function getBounds(element, transform) {
    var bounds = (transform.matrix) ? Util.OffsetBounds(element) : Util.Bounds(element);
    transform.origin[0] += bounds.left;
    transform.origin[1] += bounds.top;
    return bounds;
  }

  function renderElement(element, parentStack, pseudoElement, ignoreBackground) {
    var transform = getTransform(element, parentStack),
    bounds = getBounds(element, transform),
    image,
    stack = createStack(element, parentStack, bounds, transform),
    borders = stack.borders,
    ctx = stack.ctx,
    backgroundBounds = getBackgroundBounds(borders, bounds, stack.clip),
    borderData = parseBorders(element, bounds, borders),
    backgroundColor = (ignoreElementsRegExp.test(element.nodeName)) ? "#efefef" : getCSS(element, "backgroundColor");


    createShape(ctx, borderData.clip);

    ctx.save();
    ctx.clip();

    if (backgroundBounds.height > 0 && backgroundBounds.width > 0 && !ignoreBackground) {
      renderBackgroundColor(ctx, bounds, backgroundColor);
      renderBackgroundImage(element, backgroundBounds, ctx);
    } else if (ignoreBackground) {
      stack.backgroundColor =  backgroundColor;
    }

    ctx.restore();

    borderData.borders.forEach(function(border) {
      renderBorders(ctx, border.args, border.color);
    });

    if (!pseudoElement) {
      injectPseudoElements(element, stack);
    }

    switch(element.nodeName){
      case "IMG":
        if ((image = loadImage(element.getAttribute('src')))) {
          renderImage(ctx, element, image, bounds, borders);
        } else {
          Util.log("html2canvas: Error loading <img>:" + element.getAttribute('src'));
        }
        break;
      case "INPUT":
        // TODO add all relevant type's, i.e. HTML5 new stuff
        // todo add support for placeholder attribute for browsers which support it
        if (/^(text|url|email|submit|button|reset)$/.test(element.type) && (element.value || element.placeholder || "").length > 0){
          renderFormValue(element, bounds, stack);
        }
        break;
      case "TEXTAREA":
        if ((element.value || element.placeholder || "").length > 0){
          renderFormValue(element, bounds, stack);
        }
        break;
      case "SELECT":
        if ((element.options||element.placeholder || "").length > 0){
          renderFormValue(element, bounds, stack);
        }
        break;
      case "LI":
        renderListItem(element, stack, backgroundBounds);
        break;
      case "CANVAS":
        renderImage(ctx, element, element, bounds, borders);
        break;
    }

    return stack;
  }

  function isElementVisible(element) {
    return (getCSS(element, 'display') !== "none" && getCSS(element, 'visibility') !== "hidden" && !element.hasAttribute("data-html2canvas-ignore"));
  }

  function parseElement (element, stack, pseudoElement) {
    if (isElementVisible(element)) {
      stack = renderElement(element, stack, pseudoElement, false) || stack;
      if (!ignoreElementsRegExp.test(element.nodeName)) {
        parseChildren(element, stack, pseudoElement);
      }
    }
  }

  function parseChildren(element, stack, pseudoElement) {
    Util.Children(element).forEach(function(node) {
      if (node.nodeType === node.ELEMENT_NODE) {
        parseElement(node, stack, pseudoElement);
      } else if (node.nodeType === node.TEXT_NODE) {
        renderText(element, node, stack);
      }
    });
  }

  function init() {
    var background = getCSS(document.documentElement, "backgroundColor"),
      transparentBackground = (Util.isTransparent(background) && element === document.body),
      stack = renderElement(element, null, false, transparentBackground);
    parseChildren(element, stack);

    if (transparentBackground) {
      background = stack.backgroundColor;
    }

    body.removeChild(hidePseudoElements);
    return {
      backgroundColor: background,
      stack: stack
    };
  }

  return init();
};

function h2czContext(zindex) {
  return {
    zindex: zindex,
    children: []
  };
}

_html2canvas.Preload = function( options ) {

  var images = {
    numLoaded: 0,   // also failed are counted here
    numFailed: 0,
    numTotal: 0,
    cleanupDone: false
  },
  pageOrigin,
  Util = _html2canvas.Util,
  methods,
  i,
  count = 0,
  element = options.elements[0] || document.body,
  doc = element.ownerDocument,
  domImages = element.getElementsByTagName('img'), // Fetch images of the present element only
  imgLen = domImages.length,
  link = doc.createElement("a"),
  supportCORS = (function( img ){
    return (img.crossOrigin !== undefined);
  })(new Image()),
  timeoutTimer;

  link.href = window.location.href;
  pageOrigin  = link.protocol + link.host;

  function isSameOrigin(url){
    link.href = url;
    link.href = link.href; // YES, BELIEVE IT OR NOT, that is required for IE9 - http://jsfiddle.net/niklasvh/2e48b/
    var origin = link.protocol + link.host;
    return (origin === pageOrigin);
  }

  function start(){
    Util.log("html2canvas: start: images: " + images.numLoaded + " / " + images.numTotal + " (failed: " + images.numFailed + ")");
    if (!images.firstRun && images.numLoaded >= images.numTotal){
      Util.log("Finished loading images: # " + images.numTotal + " (failed: " + images.numFailed + ")");

      if (typeof options.complete === "function"){
        options.complete(images);
      }

    }
  }

  // TODO modify proxy to serve images with CORS enabled, where available
  function proxyGetImage(url, img, imageObj){
    var callback_name,
    scriptUrl = options.proxy,
    script;

    link.href = url;
    url = link.href; // work around for pages with base href="" set - WARNING: this may change the url

    callback_name = 'html2canvas_' + (count++);
    imageObj.callbackname = callback_name;

    if (scriptUrl.indexOf("?") > -1) {
      scriptUrl += "&";
    } else {
      scriptUrl += "?";
    }
    scriptUrl += 'url=' + encodeURIComponent(url) + '&callback=' + callback_name;
    script = doc.createElement("script");

    window[callback_name] = function(a){
      if (a.substring(0,6) === "error:"){
        imageObj.succeeded = false;
        images.numLoaded++;
        images.numFailed++;
        start();
      } else {
        setImageLoadHandlers(img, imageObj);
        img.src = a;
      }
      window[callback_name] = undefined; // to work with IE<9  // NOTE: that the undefined callback property-name still exists on the window object (for IE<9)
      try {
        delete window[callback_name];  // for all browser that support this
      } catch(ex) {}
      script.parentNode.removeChild(script);
      script = null;
      delete imageObj.script;
      delete imageObj.callbackname;
    };

    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", scriptUrl);
    imageObj.script = script;
    window.document.body.appendChild(script);

  }

  function loadPseudoElement(element, type) {
    var style = window.getComputedStyle(element, type),
    content = style.content;
    if (content.substr(0, 3) === 'url') {
      methods.loadImage(_html2canvas.Util.parseBackgroundImage(content)[0].args[0]);
    }
    loadBackgroundImages(style.backgroundImage, element);
  }

  function loadPseudoElementImages(element) {
    loadPseudoElement(element, ":before");
    loadPseudoElement(element, ":after");
  }

  function loadGradientImage(backgroundImage, bounds) {
    var img = _html2canvas.Generate.Gradient(backgroundImage, bounds);

    if (img !== undefined){
      images[backgroundImage] = {
        img: img,
        succeeded: true
      };
      images.numTotal++;
      images.numLoaded++;
      start();
    }
  }

  function invalidBackgrounds(background_image) {
    return (background_image && background_image.method && background_image.args && background_image.args.length > 0 );
  }

  function loadBackgroundImages(background_image, el) {
    var bounds;

    _html2canvas.Util.parseBackgroundImage(background_image).filter(invalidBackgrounds).forEach(function(background_image) {
      if (background_image.method === 'url') {
        methods.loadImage(background_image.args[0]);
      } else if(background_image.method.match(/\-?gradient$/)) {
        if(bounds === undefined) {
          bounds = _html2canvas.Util.Bounds(el);
        }
        loadGradientImage(background_image.value, bounds);
      }
    });
  }

  function getImages (el) {
    var elNodeType = false;

    // Firefox fails with permission denied on pages with iframes
    try {
      Util.Children(el).forEach(getImages);
    }
    catch( e ) {}

    try {
      elNodeType = el.nodeType;
    } catch (ex) {
      elNodeType = false;
      Util.log("html2canvas: failed to access some element's nodeType - Exception: " + ex.message);
    }

    if (elNodeType === 1 || elNodeType === undefined) {
      loadPseudoElementImages(el);
      try {
        loadBackgroundImages(Util.getCSS(el, 'backgroundImage'), el);
      } catch(e) {
        Util.log("html2canvas: failed to get background-image - Exception: " + e.message);
      }
      loadBackgroundImages(el);
    }
  }

  function setImageLoadHandlers(img, imageObj) {
    img.onload = function() {
      if ( imageObj.timer !== undefined ) {
        // CORS succeeded
        window.clearTimeout( imageObj.timer );
      }

      images.numLoaded++;
      imageObj.succeeded = true;
      img.onerror = img.onload = null;
      start();
    };
    img.onerror = function() {
      if (img.crossOrigin === "anonymous") {
        // CORS failed
        window.clearTimeout( imageObj.timer );

        // let's try with proxy instead
        if ( options.proxy ) {
          var src = img.src;
          img = new Image();
          imageObj.img = img;
          img.src = src;

          proxyGetImage( img.src, img, imageObj );
          return;
        }
      }

      images.numLoaded++;
      images.numFailed++;
      imageObj.succeeded = false;
      img.onerror = img.onload = null;
      start();
    };
  }

  methods = {
    loadImage: function( src ) {
      var img, imageObj;
      if ( src && images[src] === undefined ) {
        img = new Image();
        if ( src.match(/data:image\/.*;base64,/i) ) {
          img.src = src.replace(/url\(['"]{0,}|['"]{0,}\)$/ig, '');
          imageObj = images[src] = {
            img: img
          };
          images.numTotal++;
          setImageLoadHandlers(img, imageObj);
        } else if ( isSameOrigin( src ) || options.allowTaint ===  true ) {
          imageObj = images[src] = {
            img: img
          };
          images.numTotal++;
          setImageLoadHandlers(img, imageObj);
          img.src = src;
        } else if ( supportCORS && !options.allowTaint && options.useCORS ) {
          // attempt to load with CORS

          img.crossOrigin = "anonymous";
          imageObj = images[src] = {
            img: img
          };
          images.numTotal++;
          setImageLoadHandlers(img, imageObj);
          img.src = src;
        } else if ( options.proxy ) {
          imageObj = images[src] = {
            img: img
          };
          images.numTotal++;
          proxyGetImage( src, img, imageObj );
        }
      }

    },
    cleanupDOM: function(cause) {
      var img, src;
      if (!images.cleanupDone) {
        if (cause && typeof cause === "string") {
          Util.log("html2canvas: Cleanup because: " + cause);
        } else {
          Util.log("html2canvas: Cleanup after timeout: " + options.timeout + " ms.");
        }

        for (src in images) {
          if (images.hasOwnProperty(src)) {
            img = images[src];
            if (typeof img === "object" && img.callbackname && img.succeeded === undefined) {
              // cancel proxy image request
              window[img.callbackname] = undefined; // to work with IE<9  // NOTE: that the undefined callback property-name still exists on the window object (for IE<9)
              try {
                delete window[img.callbackname];  // for all browser that support this
              } catch(ex) {}
              if (img.script && img.script.parentNode) {
                img.script.setAttribute("src", "about:blank");  // try to cancel running request
                img.script.parentNode.removeChild(img.script);
              }
              images.numLoaded++;
              images.numFailed++;
              Util.log("html2canvas: Cleaned up failed img: '" + src + "' Steps: " + images.numLoaded + " / " + images.numTotal);
            }
          }
        }

        // cancel any pending requests
        if(window.stop !== undefined) {
          window.stop();
        } else if(document.execCommand !== undefined) {
          document.execCommand("Stop", false);
        }
        if (document.close !== undefined) {
          document.close();
        }
        images.cleanupDone = true;
        if (!(cause && typeof cause === "string")) {
          start();
        }
      }
    },

    renderingDone: function() {
      if (timeoutTimer) {
        window.clearTimeout(timeoutTimer);
      }
    }
  };

  if (options.timeout > 0) {
    timeoutTimer = window.setTimeout(methods.cleanupDOM, options.timeout);
  }

  Util.log('html2canvas: Preload starts: finding background-images');
  images.firstRun = true;

  getImages(element);

  Util.log('html2canvas: Preload: Finding images');
  // load <img> images
  for (i = 0; i < imgLen; i+=1){
    methods.loadImage( domImages[i].getAttribute( "src" ) );
  }

  images.firstRun = false;
  Util.log('html2canvas: Preload: Done.');
  if (images.numTotal === images.numLoaded) {
    start();
  }

  return methods;
};

_html2canvas.Renderer = function(parseQueue, options){

  // http://www.w3.org/TR/CSS21/zindex.html
  function createRenderQueue(parseQueue) {
    var queue = [],
    rootContext;

    rootContext = (function buildStackingContext(rootNode) {
      var rootContext = {};
      function insert(context, node, specialParent) {
        var zi = (node.zIndex.zindex === 'auto') ? 0 : Number(node.zIndex.zindex),
        contextForChildren = context, // the stacking context for children
        isPositioned = node.zIndex.isPositioned,
        isFloated = node.zIndex.isFloated,
        stub = {node: node},
        childrenDest = specialParent; // where children without z-index should be pushed into

        if (node.zIndex.ownStacking) {
          // '!' comes before numbers in sorted array
          contextForChildren = stub.context = { '!': [{node:node, children: []}]};
          childrenDest = undefined;
        } else if (isPositioned || isFloated) {
          childrenDest = stub.children = [];
        }

        if (zi === 0 && specialParent) {
          specialParent.push(stub);
        } else {
          if (!context[zi]) { context[zi] = []; }
          context[zi].push(stub);
        }

        node.zIndex.children.forEach(function(childNode) {
          insert(contextForChildren, childNode, childrenDest);
        });
      }
      insert(rootContext, rootNode);
      return rootContext;
    })(parseQueue);

    function sortZ(context) {
      Object.keys(context).sort().forEach(function(zi) {
        var nonPositioned = [],
        floated = [],
        positioned = [],
        list = [];

        // positioned after static
        context[zi].forEach(function(v) {
          if (v.node.zIndex.isPositioned || v.node.zIndex.opacity < 1) {
            // http://www.w3.org/TR/css3-color/#transparency
            // non-positioned element with opactiy < 1 should be stacked as if it were a positioned element with ‘z-index: 0’ and ‘opacity: 1’.
            positioned.push(v);
          } else if (v.node.zIndex.isFloated) {
            floated.push(v);
          } else {
            nonPositioned.push(v);
          }
        });

        (function walk(arr) {
          arr.forEach(function(v) {
            list.push(v);
            if (v.children) { walk(v.children); }
          });
        })(nonPositioned.concat(floated, positioned));

        list.forEach(function(v) {
          if (v.context) {
            sortZ(v.context);
          } else {
            queue.push(v.node);
          }
        });
      });
    }

    sortZ(rootContext);

    return queue;
  }

  function getRenderer(rendererName) {
    var renderer;

    if (typeof options.renderer === "string" && _html2canvas.Renderer[rendererName] !== undefined) {
      renderer = _html2canvas.Renderer[rendererName](options);
    } else if (typeof rendererName === "function") {
      renderer = rendererName(options);
    } else {
      throw new Error("Unknown renderer");
    }

    if ( typeof renderer !== "function" ) {
      throw new Error("Invalid renderer defined");
    }
    return renderer;
  }

  return getRenderer(options.renderer)(parseQueue, options, document, createRenderQueue(parseQueue.stack), _html2canvas);
};

_html2canvas.Util.Support = function (options, doc) {

  function supportSVGRendering() {
    var img = new Image(),
    canvas = doc.createElement("canvas"),
    ctx = (canvas.getContext === undefined) ? false : canvas.getContext("2d");
    if (ctx === false) {
      return false;
    }
    canvas.width = canvas.height = 10;
    img.src = [
    "data:image/svg+xml,",
    "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'>",
    "<foreignObject width='10' height='10'>",
    "<div xmlns='http://www.w3.org/1999/xhtml' style='width:10;height:10;'>",
    "sup",
    "</div>",
    "</foreignObject>",
    "</svg>"
    ].join("");
    try {
      ctx.drawImage(img, 0, 0);
      canvas.toDataURL();
    } catch(e) {
      return false;
    }
    _html2canvas.Util.log('html2canvas: Parse: SVG powered rendering available');
    return true;
  }

  // Test whether we can use ranges to measure bounding boxes
  // Opera doesn't provide valid bounds.height/bottom even though it supports the method.

  function supportRangeBounds() {
    var r, testElement, rangeBounds, rangeHeight, support = false;

    if (doc.createRange) {
      r = doc.createRange();
      if (r.getBoundingClientRect) {
        testElement = doc.createElement('boundtest');
        testElement.style.height = "123px";
        testElement.style.display = "block";
        doc.body.appendChild(testElement);

        r.selectNode(testElement);
        rangeBounds = r.getBoundingClientRect();
        rangeHeight = rangeBounds.height;

        if (rangeHeight === 123) {
          support = true;
        }
        doc.body.removeChild(testElement);
      }
    }

    return support;
  }

  return {
    rangeBounds: supportRangeBounds(),
    svgRendering: options.svgRendering && supportSVGRendering()
  };
};
window.html2canvas = function(elements, opts) {
  elements = (elements.length) ? elements : [elements];
  var queue,
  canvas,
  options = {
    // general
    logging: false,
    elements: elements,
    background: "#fff",

    // preload options
    proxy: null,
    timeout: 0,    // no timeout
    useCORS: false, // try to load images as CORS (where available), before falling back to proxy
    allowTaint: false, // whether to allow images to taint the canvas, won't need proxy if set to true

    // parse options
    svgRendering: false, // use svg powered rendering where available (FF11+)
    ignoreElements: "IFRAME|OBJECT|PARAM",
    useOverflow: true,
    letterRendering: false,
    chinese: false,

    // render options

    width: null,
    height: null,
    taintTest: true, // do a taint test with all images before applying to canvas
    renderer: "Canvas"
  };

  options = _html2canvas.Util.Extend(opts, options);

  _html2canvas.logging = options.logging;
  options.complete = function( images ) {

    if (typeof options.onpreloaded === "function") {
      if ( options.onpreloaded( images ) === false ) {
        return;
      }
    }
    queue = _html2canvas.Parse( images, options );

    if (typeof options.onparsed === "function") {
      if ( options.onparsed( queue ) === false ) {
        return;
      }
    }

    canvas = _html2canvas.Renderer( queue, options );

    if (typeof options.onrendered === "function") {
      options.onrendered( canvas );
    }


  };

  // for pages without images, we still want this to be async, i.e. return methods before executing
  window.setTimeout( function(){
    _html2canvas.Preload( options );
  }, 0 );

  return {
    render: function( queue, opts ) {
      return _html2canvas.Renderer( queue, _html2canvas.Util.Extend(opts, options) );
    },
    parse: function( images, opts ) {
      return _html2canvas.Parse( images, _html2canvas.Util.Extend(opts, options) );
    },
    preload: function( opts ) {
      return _html2canvas.Preload( _html2canvas.Util.Extend(opts, options) );
    },
    log: _html2canvas.Util.log
  };
};

window.html2canvas.log = _html2canvas.Util.log; // for renderers
window.html2canvas.Renderer = {
  Canvas: undefined // We are assuming this will be used
};
_html2canvas.Renderer.Canvas = function(options) {
  options = options || {};

  var doc = document,
  safeImages = [],
  testCanvas = document.createElement("canvas"),
  testctx = testCanvas.getContext("2d"),
  Util = _html2canvas.Util,
  canvas = options.canvas || doc.createElement('canvas');

  function createShape(ctx, args) {
    ctx.beginPath();
    args.forEach(function(arg) {
      ctx[arg.name].apply(ctx, arg['arguments']);
    });
    ctx.closePath();
  }

  function safeImage(item) {
    if (safeImages.indexOf(item['arguments'][0].src ) === -1) {
      testctx.drawImage(item['arguments'][0], 0, 0);
      try {
        testctx.getImageData(0, 0, 1, 1);
      } catch(e) {
        testCanvas = doc.createElement("canvas");
        testctx = testCanvas.getContext("2d");
        return false;
      }
      safeImages.push(item['arguments'][0].src);
    }
    return true;
  }

  function renderItem(ctx, item) {
    switch(item.type){
      case "variable":
        ctx[item.name] = item['arguments'];
        break;
      case "function":
        switch(item.name) {
          case "createPattern":
            if (item['arguments'][0].width > 0 && item['arguments'][0].height > 0) {
              try {
                ctx.fillStyle = ctx.createPattern(item['arguments'][0], "repeat");
              }
              catch(e) {
                Util.log("html2canvas: Renderer: Error creating pattern", e.message);
              }
            }
            break;
          case "drawShape":
            createShape(ctx, item['arguments']);
            break;
          case "drawImage":
            if (item['arguments'][8] > 0 && item['arguments'][7] > 0) {
              if (!options.taintTest || (options.taintTest && safeImage(item))) {
                ctx.drawImage.apply( ctx, item['arguments'] );
              }
            }
            break;
          default:
            ctx[item.name].apply(ctx, item['arguments']);
        }
        break;
    }
  }

  return function(parsedData, options, document, queue, _html2canvas) {
    var ctx = canvas.getContext("2d"),
    newCanvas,
    bounds,
    fstyle,
    zStack = parsedData.stack;

    canvas.width = canvas.style.width =  options.width || zStack.ctx.width;
    canvas.height = canvas.style.height = options.height || zStack.ctx.height;

    fstyle = ctx.fillStyle;
    ctx.fillStyle = (Util.isTransparent(zStack.backgroundColor) && options.background !== undefined) ? options.background : parsedData.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = fstyle;

    queue.forEach(function(storageContext) {
      // set common settings for canvas
      ctx.textBaseline = "bottom";
      ctx.save();

      if (storageContext.transform.matrix) {
        ctx.translate(storageContext.transform.origin[0], storageContext.transform.origin[1]);
        ctx.transform.apply(ctx, storageContext.transform.matrix);
        ctx.translate(-storageContext.transform.origin[0], -storageContext.transform.origin[1]);
      }

      if (storageContext.clip){
        ctx.beginPath();
        ctx.rect(storageContext.clip.left, storageContext.clip.top, storageContext.clip.width, storageContext.clip.height);
        ctx.clip();
      }

      if (storageContext.ctx.storage) {
        storageContext.ctx.storage.forEach(function(item) {
          renderItem(ctx, item);
        });
      }

      ctx.restore();
    });

    Util.log("html2canvas: Renderer: Canvas renderer done - returning canvas obj");

    if (options.elements.length === 1) {
      if (typeof options.elements[0] === "object" && options.elements[0].nodeName !== "BODY") {
        // crop image to the bounds of selected (single) element
        bounds = _html2canvas.Util.Bounds(options.elements[0]);
        newCanvas = document.createElement('canvas');
        newCanvas.width = Math.ceil(bounds.width);
        newCanvas.height = Math.ceil(bounds.height);
        ctx = newCanvas.getContext("2d");

        ctx.drawImage(canvas, bounds.left, bounds.top, bounds.width, bounds.height, 0, 0, bounds.width, bounds.height);
        canvas = null;
        return newCanvas;
      }
    }

    return canvas;
  };
};
})(window,document);
/*
	CCV library
*/
if (parallable === undefined) {
	var parallable = function (file, funct) {
		parallable.core[funct.toString()] = funct().core;
		return function () {
			var i;
			var async, worker_num, params;
			if (arguments.length > 1) {
				async = arguments[arguments.length - 2];
				worker_num = arguments[arguments.length - 1];
				params = new Array(arguments.length - 2);
				for (i = 0; i < arguments.length - 2; i++)
					params[i] = arguments[i];
			} else {
				async = arguments[0].async;
				worker_num = arguments[0].worker;
				params = arguments[0];
				delete params["async"];
				delete params["worker"];
				params = [params];
			}
			var scope = { "shared" : {} };
			var ctrl = funct.apply(scope, params);
			if (async) {
				return function (complete, error) {
					var executed = 0;
					var outputs = new Array(worker_num);
					var inputs = ctrl.pre.apply(scope, [worker_num]);
					/* sanitize scope shared because for Chrome/WebKit, worker only support JSONable data */
					for (i in scope.shared)
						/* delete function, if any */
						if (typeof scope.shared[i] == "function")
							delete scope.shared[i];
						/* delete DOM object, if any */
						else if (scope.shared[i].tagName !== undefined)
							delete scope.shared[i];
					for (i = 0; i < worker_num; i++) {
						var worker = new Worker(file);
						worker.onmessage = (function (i) {
							return function (event) {
								outputs[i] = (typeof event.data == "string") ? JSON.parse(event.data) : event.data;
								executed++;
								if (executed == worker_num)
									complete(ctrl.post.apply(scope, [outputs]));
							}
						})(i);
						var msg = { "input" : inputs[i],
									"name" : funct.toString(),
									"shared" : scope.shared,
									"id" : i,
									"worker" : params.worker_num };
						try {
							worker.postMessage(msg);
						} catch (e) {
							worker.postMessage(JSON.stringify(msg));
						}
					}
				}
			} else {
				return ctrl.post.apply(scope, [[ctrl.core.apply(scope, [ctrl.pre.apply(scope, [1])[0], 0, 1])]]);
			}
		}
	};
	parallable.core = {};
}

function get_named_arguments(params, names) {
	if (params.length > 1) {
		var new_params = {};
		for (var i = 0; i < names.length; i++)
			new_params[names[i]] = params[i];
		return new_params;
	} else if (params.length == 1) {
		return params[0];
	} else {
		return {};
	}
}

var ccv = {
	pre : function (image) {
		if (image.tagName.toLowerCase() == "img") {
			var canvas = document.createElement("canvas");
			document.body.appendChild(image);
			canvas.width = image.offsetWidth;
			canvas.style.width = image.offsetWidth.toString() + "px";
			canvas.height = image.offsetHeight;
			canvas.style.height = image.offsetHeight.toString() + "px";
			document.body.removeChild(image);
			var ctx = canvas.getContext("2d");
			ctx.drawImage(image, 0, 0);
			return canvas;
		}
		return image;
	},

	grayscale : function (canvas) {
		var ctx = canvas.getContext("2d");
		var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
		var data = imageData.data;
		var pix1, pix2, pix = canvas.width * canvas.height * 4;
		while (pix > 0)
			data[pix -= 4] = data[pix1 = pix + 1] = data[pix2 = pix + 2] = (data[pix] * 0.3 + data[pix1] * 0.59 + data[pix2] * 0.11);
		ctx.putImageData(imageData, 0, 0);
		return canvas;
	},

	array_group : function (seq, gfunc) {
		var i, j;
		var node = new Array(seq.length);
		for (i = 0; i < seq.length; i++)
			node[i] = {"parent" : -1,
					   "element" : seq[i],
					   "rank" : 0};
		for (i = 0; i < seq.length; i++) {
			if (!node[i].element)
				continue;
			var root = i;
			while (node[root].parent != -1)
				root = node[root].parent;
			for (j = 0; j < seq.length; j++) {
				if( i != j && node[j].element && gfunc(node[i].element, node[j].element)) {
					var root2 = j;

					while (node[root2].parent != -1)
						root2 = node[root2].parent;

					if(root2 != root) {
						if(node[root].rank > node[root2].rank)
							node[root2].parent = root;
						else {
							node[root].parent = root2;
							if (node[root].rank == node[root2].rank)
							node[root2].rank++;
							root = root2;
						}

						/* compress path from node2 to the root: */
						var temp, node2 = j;
						while (node[node2].parent != -1) {
							temp = node2;
							node2 = node[node2].parent;
							node[temp].parent = root;
						}

						/* compress path from node to the root: */
						node2 = i;
						while (node[node2].parent != -1) {
							temp = node2;
							node2 = node[node2].parent;
							node[temp].parent = root;
						}
					}
				}
			}
		}
		var idx = new Array(seq.length);
		var class_idx = 0;
		for(i = 0; i < seq.length; i++) {
			j = -1;
			var node1 = i;
			if(node[node1].element) {
				while (node[node1].parent != -1)
					node1 = node[node1].parent;
				if(node[node1].rank >= 0)
					node[node1].rank = ~class_idx++;
				j = ~node[node1].rank;
			}
			idx[i] = j;
		}
		return {"index" : idx, "cat" : class_idx};
	},

	detect_objects : parallable("ccv.js", function (canvas, cascade, interval, min_neighbors) {
		if (this.shared !== undefined) {
			var params = get_named_arguments(arguments, ["canvas", "cascade", "interval", "min_neighbors"]);
			this.shared.canvas = params.canvas;
			this.shared.interval = params.interval;
			this.shared.min_neighbors = params.min_neighbors;
			this.shared.cascade = params.cascade;
			this.shared.scale = Math.pow(2, 1 / (params.interval + 1));
			this.shared.next = params.interval + 1;
			this.shared.scale_upto = Math.floor(Math.log(Math.min(params.canvas.width / params.cascade.width, params.canvas.height / params.cascade.height)) / Math.log(this.shared.scale));
			var i;
			for (i = 0; i < this.shared.cascade.stage_classifier.length; i++)
				this.shared.cascade.stage_classifier[i].orig_feature = this.shared.cascade.stage_classifier[i].feature;
		}
		function pre(worker_num) {
			var canvas = this.shared.canvas;
			var interval = this.shared.interval;
			var scale = this.shared.scale;
			var next = this.shared.next;
			var scale_upto = this.shared.scale_upto;
			var pyr = new Array((scale_upto + next * 2) * 4);
			var ret = new Array((scale_upto + next * 2) * 4);
			pyr[0] = canvas;
			ret[0] = { "width" : pyr[0].width,
					   "height" : pyr[0].height,
					   "data" : pyr[0].getContext("2d").getImageData(0, 0, pyr[0].width, pyr[0].height).data };
			var i;
			for (i = 1; i <= interval; i++) {
				pyr[i * 4] = document.createElement("canvas");
				pyr[i * 4].width = Math.floor(pyr[0].width / Math.pow(scale, i));
				pyr[i * 4].height = Math.floor(pyr[0].height / Math.pow(scale, i));
				pyr[i * 4].getContext("2d").drawImage(pyr[0], 0, 0, pyr[0].width, pyr[0].height, 0, 0, pyr[i * 4].width, pyr[i * 4].height);
				ret[i * 4] = { "width" : pyr[i * 4].width,
							   "height" : pyr[i * 4].height,
							   "data" : pyr[i * 4].getContext("2d").getImageData(0, 0, pyr[i * 4].width, pyr[i * 4].height).data };
			}
			for (i = next; i < scale_upto + next * 2; i++) {
				pyr[i * 4] = document.createElement("canvas");
				pyr[i * 4].width = Math.floor(pyr[i * 4 - next * 4].width / 2);
				pyr[i * 4].height = Math.floor(pyr[i * 4 - next * 4].height / 2);
				pyr[i * 4].getContext("2d").drawImage(pyr[i * 4 - next * 4], 0, 0, pyr[i * 4 - next * 4].width, pyr[i * 4 - next * 4].height, 0, 0, pyr[i * 4].width, pyr[i * 4].height);
				ret[i * 4] = { "width" : pyr[i * 4].width,
							   "height" : pyr[i * 4].height,
							   "data" : pyr[i * 4].getContext("2d").getImageData(0, 0, pyr[i * 4].width, pyr[i * 4].height).data };
			}
			for (i = next * 2; i < scale_upto + next * 2; i++) {
				pyr[i * 4 + 1] = document.createElement("canvas");
				pyr[i * 4 + 1].width = Math.floor(pyr[i * 4 - next * 4].width / 2);
				pyr[i * 4 + 1].height = Math.floor(pyr[i * 4 - next * 4].height / 2);
				pyr[i * 4 + 1].getContext("2d").drawImage(pyr[i * 4 - next * 4], 1, 0, pyr[i * 4 - next * 4].width - 1, pyr[i * 4 - next * 4].height, 0, 0, pyr[i * 4 + 1].width - 2, pyr[i * 4 + 1].height);
				ret[i * 4 + 1] = { "width" : pyr[i * 4 + 1].width,
								   "height" : pyr[i * 4 + 1].height,
								   "data" : pyr[i * 4 + 1].getContext("2d").getImageData(0, 0, pyr[i * 4 + 1].width, pyr[i * 4 + 1].height).data };
				pyr[i * 4 + 2] = document.createElement("canvas");
				pyr[i * 4 + 2].width = Math.floor(pyr[i * 4 - next * 4].width / 2);
				pyr[i * 4 + 2].height = Math.floor(pyr[i * 4 - next * 4].height / 2);
				pyr[i * 4 + 2].getContext("2d").drawImage(pyr[i * 4 - next * 4], 0, 1, pyr[i * 4 - next * 4].width, pyr[i * 4 - next * 4].height - 1, 0, 0, pyr[i * 4 + 2].width, pyr[i * 4 + 2].height - 2);
				ret[i * 4 + 2] = { "width" : pyr[i * 4 + 2].width,
								   "height" : pyr[i * 4 + 2].height,
								   "data" : pyr[i * 4 + 2].getContext("2d").getImageData(0, 0, pyr[i * 4 + 2].width, pyr[i * 4 + 2].height).data };
				pyr[i * 4 + 3] = document.createElement("canvas");
				pyr[i * 4 + 3].width = Math.floor(pyr[i * 4 - next * 4].width / 2);
				pyr[i * 4 + 3].height = Math.floor(pyr[i * 4 - next * 4].height / 2);
				pyr[i * 4 + 3].getContext("2d").drawImage(pyr[i * 4 - next * 4], 1, 1, pyr[i * 4 - next * 4].width - 1, pyr[i * 4 - next * 4].height - 1, 0, 0, pyr[i * 4 + 3].width - 2, pyr[i * 4 + 3].height - 2);
				ret[i * 4 + 3] = { "width" : pyr[i * 4 + 3].width,
								   "height" : pyr[i * 4 + 3].height,
								   "data" : pyr[i * 4 + 3].getContext("2d").getImageData(0, 0, pyr[i * 4 + 3].width, pyr[i * 4 + 3].height).data };
			}
			return [ret];
		};

		function core(pyr, id, worker_num) {
			var cascade = this.shared.cascade;
			var interval = this.shared.interval;
			var scale = this.shared.scale;
			var next = this.shared.next;
			var scale_upto = this.shared.scale_upto;
			var i, j, k, x, y, q;
			var scale_x = 1, scale_y = 1;
			var dx = [0, 1, 0, 1];
			var dy = [0, 0, 1, 1];
			var seq = [];
			for (i = 0; i < scale_upto; i++) {
				var qw = pyr[i * 4 + next * 8].width - Math.floor(cascade.width / 4);
				var qh = pyr[i * 4 + next * 8].height - Math.floor(cascade.height / 4);
				var step = [pyr[i * 4].width * 4, pyr[i * 4 + next * 4].width * 4, pyr[i * 4 + next * 8].width * 4];
				var paddings = [pyr[i * 4].width * 16 - qw * 16,
								pyr[i * 4 + next * 4].width * 8 - qw * 8,
								pyr[i * 4 + next * 8].width * 4 - qw * 4];
				for (j = 0; j < cascade.stage_classifier.length; j++) {
					var orig_feature = cascade.stage_classifier[j].orig_feature;
					var feature = cascade.stage_classifier[j].feature = new Array(cascade.stage_classifier[j].count);
					for (k = 0; k < cascade.stage_classifier[j].count; k++) {
						feature[k] = {"size" : orig_feature[k].size,
									  "px" : new Array(orig_feature[k].size),
									  "pz" : new Array(orig_feature[k].size),
									  "nx" : new Array(orig_feature[k].size),
									  "nz" : new Array(orig_feature[k].size)};
						for (q = 0; q < orig_feature[k].size; q++) {
							feature[k].px[q] = orig_feature[k].px[q] * 4 + orig_feature[k].py[q] * step[orig_feature[k].pz[q]];
							feature[k].pz[q] = orig_feature[k].pz[q];
							feature[k].nx[q] = orig_feature[k].nx[q] * 4 + orig_feature[k].ny[q] * step[orig_feature[k].nz[q]];
							feature[k].nz[q] = orig_feature[k].nz[q];
						}
					}
				}
				for (q = 0; q < 4; q++) {
					var u8 = [pyr[i * 4].data, pyr[i * 4 + next * 4].data, pyr[i * 4 + next * 8 + q].data];
					var u8o = [dx[q] * 8 + dy[q] * pyr[i * 4].width * 8, dx[q] * 4 + dy[q] * pyr[i * 4 + next * 4].width * 4, 0];
					for (y = 0; y < qh; y++) {
						for (x = 0; x < qw; x++) {
							var sum = 0;
							var flag = true;
							for (j = 0; j < cascade.stage_classifier.length; j++) {
								sum = 0;
								var alpha = cascade.stage_classifier[j].alpha;
								var feature = cascade.stage_classifier[j].feature;
								for (k = 0; k < cascade.stage_classifier[j].count; k++) {
									var feature_k = feature[k];
									var p, pmin = u8[feature_k.pz[0]][u8o[feature_k.pz[0]] + feature_k.px[0]];
									var n, nmax = u8[feature_k.nz[0]][u8o[feature_k.nz[0]] + feature_k.nx[0]];
									if (pmin <= nmax) {
										sum += alpha[k * 2];
									} else {
										var f, shortcut = true;
										for (f = 0; f < feature_k.size; f++) {
											if (feature_k.pz[f] >= 0) {
												p = u8[feature_k.pz[f]][u8o[feature_k.pz[f]] + feature_k.px[f]];
												if (p < pmin) {
													if (p <= nmax) {
														shortcut = false;
														break;
													}
													pmin = p;
												}
											}
											if (feature_k.nz[f] >= 0) {
												n = u8[feature_k.nz[f]][u8o[feature_k.nz[f]] + feature_k.nx[f]];
												if (n > nmax) {
													if (pmin <= n) {
														shortcut = false;
														break;
													}
													nmax = n;
												}
											}
										}
										sum += (shortcut) ? alpha[k * 2 + 1] : alpha[k * 2];
									}
								}
								if (sum < cascade.stage_classifier[j].threshold) {
									flag = false;
									break;
								}
							}
							if (flag) {
								seq.push({"x" : (x * 4 + dx[q] * 2) * scale_x,
										  "y" : (y * 4 + dy[q] * 2) * scale_y,
										  "width" : cascade.width * scale_x,
										  "height" : cascade.height * scale_y,
										  "neighbor" : 1,
										  "confidence" : sum});
							}
							u8o[0] += 16;
							u8o[1] += 8;
							u8o[2] += 4;
						}
						u8o[0] += paddings[0];
						u8o[1] += paddings[1];
						u8o[2] += paddings[2];
					}
				}
				scale_x *= scale;
				scale_y *= scale;
			}
			return seq;
		};

		function post(seq) {
			var min_neighbors = this.shared.min_neighbors;
			var cascade = this.shared.cascade;
			var interval = this.shared.interval;
			var scale = this.shared.scale;
			var next = this.shared.next;
			var scale_upto = this.shared.scale_upto;
			var i, j;
			for (i = 0; i < cascade.stage_classifier.length; i++)
				cascade.stage_classifier[i].feature = cascade.stage_classifier[i].orig_feature;
			seq = seq[0];
			if (!(min_neighbors > 0))
				return seq;
			else {
				var result = ccv.array_group(seq, function (r1, r2) {
					var distance = Math.floor(r1.width * 0.25 + 0.5);

					return r2.x <= r1.x + distance &&
						   r2.x >= r1.x - distance &&
						   r2.y <= r1.y + distance &&
						   r2.y >= r1.y - distance &&
						   r2.width <= Math.floor(r1.width * 1.5 + 0.5) &&
						   Math.floor(r2.width * 1.5 + 0.5) >= r1.width;
				});
				var ncomp = result.cat;
				var idx_seq = result.index;
				var comps = new Array(ncomp + 1);
				for (i = 0; i < comps.length; i++)
					comps[i] = {"neighbors" : 0,
								"x" : 0,
								"y" : 0,
								"width" : 0,
								"height" : 0,
								"confidence" : 0};

				// count number of neighbors
				for(i = 0; i < seq.length; i++)
				{
					var r1 = seq[i];
					var idx = idx_seq[i];

					if (comps[idx].neighbors == 0)
						comps[idx].confidence = r1.confidence;

					++comps[idx].neighbors;

					comps[idx].x += r1.x;
					comps[idx].y += r1.y;
					comps[idx].width += r1.width;
					comps[idx].height += r1.height;
					comps[idx].confidence = Math.max(comps[idx].confidence, r1.confidence);
				}

				var seq2 = [];
				// calculate average bounding box
				for(i = 0; i < ncomp; i++)
				{
					var n = comps[i].neighbors;
					if (n >= min_neighbors)
						seq2.push({"x" : (comps[i].x * 2 + n) / (2 * n),
								   "y" : (comps[i].y * 2 + n) / (2 * n),
								   "width" : (comps[i].width * 2 + n) / (2 * n),
								   "height" : (comps[i].height * 2 + n) / (2 * n),
								   "neighbors" : comps[i].neighbors,
								   "confidence" : comps[i].confidence});
				}

				var result_seq = [];
				// filter out small face rectangles inside large face rectangles
				for(i = 0; i < seq2.length; i++)
				{
					var r1 = seq2[i];
					var flag = true;
					for(j = 0; j < seq2.length; j++)
					{
						var r2 = seq2[j];
						var distance = Math.floor(r2.width * 0.25 + 0.5);

						if(i != j &&
						   r1.x >= r2.x - distance &&
						   r1.y >= r2.y - distance &&
						   r1.x + r1.width <= r2.x + r2.width + distance &&
						   r1.y + r1.height <= r2.y + r2.height + distance &&
						   (r2.neighbors > Math.max(3, r1.neighbors) || r1.neighbors < 3))
						{
							flag = false;
							break;
						}
					}

					if(flag)
						result_seq.push(r1);
				}
				return result_seq;
			}
		};
		return { "pre" : pre, "core" : core, "post" : post };
	})
}

// onmessage = function (event) {
// 	console.log(event);
// 	var data = (typeof event.data == "string") ? JSON.parse(event.data) : event.data;
// 	var scope = { "shared" : data.shared };
// 	var result = parallable.core[data.name].apply(scope, [data.input, data.id, data.worker]);
// 	try {
// 		postMessage(result);
// 	} catch (e) {
// 		postMessage(JSON.stringify(result));
// 	}
//}

/**
	Face Cascade
*/
var cascade = {"count" : 16, "width" : 24, "height" : 24, "stage_classifier" : [{"count":4,"threshold":-4.577530e+00,"feature":[{"size":4,"px":[3,5,8,11],"py":[2,2,6,3],"pz":[2,1,1,0],"nx":[8,4,0,0],"ny":[4,4,0,0],"nz":[1,1,-1,-1]},{"size":3,"px":[3,6,7],"py":[7,13,0],"pz":[1,0,-1],"nx":[2,3,4],"ny":[5,4,4],"nz":[2,1,1]},{"size":5,"px":[5,3,10,13,11],"py":[1,0,3,2,2],"pz":[1,2,0,0,0],"nx":[0,11,0,11,11],"ny":[0,2,3,1,1],"nz":[1,1,0,1,-1]},{"size":5,"px":[6,12,12,9,12],"py":[4,13,12,7,11],"pz":[1,0,0,1,0],"nx":[8,0,8,2,11],"ny":[4,0,8,5,1],"nz":[1,-1,-1,-1,-1]}],"alpha":[-2.879683e+00,2.879683e+00,-1.569341e+00,1.569341e+00,-1.286131e+00,1.286131e+00,-1.157626e+00,1.157626e+00]},{"count":4,"threshold":-4.339908e+00,"feature":[{"size":5,"px":[13,12,3,11,17],"py":[3,3,1,4,13],"pz":[0,0,2,0,0],"nx":[4,3,8,15,15],"ny":[4,5,4,8,8],"nz":[1,2,1,0,-1]},{"size":5,"px":[6,7,6,3,3],"py":[13,13,4,2,7],"pz":[0,0,1,2,1],"nx":[4,8,3,0,15],"ny":[4,4,4,3,8],"nz":[1,1,-1,-1,-1]},{"size":3,"px":[2,2,11],"py":[3,2,5],"pz":[2,2,0],"nx":[3,8,3],"ny":[4,4,4],"nz":[1,-1,-1]},{"size":5,"px":[15,13,9,11,7],"py":[2,1,2,1,0],"pz":[0,0,0,0,1],"nx":[23,11,23,22,23],"ny":[1,0,2,0,0],"nz":[0,1,0,0,0]}],"alpha":[-2.466029e+00,2.466029e+00,-1.839510e+00,1.839510e+00,-1.060559e+00,1.060559e+00,-1.094927e+00,1.094927e+00]},{"count":7,"threshold":-5.052474e+00,"feature":[{"size":5,"px":[17,13,3,11,10],"py":[13,2,1,4,3],"pz":[0,0,2,0,0],"nx":[4,8,8,3,7],"ny":[2,8,4,5,4],"nz":[2,0,1,2,1]},{"size":5,"px":[6,7,3,6,6],"py":[4,12,2,13,14],"pz":[1,0,2,0,0],"nx":[8,3,4,4,3],"ny":[4,4,2,0,2],"nz":[1,1,-1,-1,-1]},{"size":5,"px":[7,4,5,3,3],"py":[2,1,3,1,1],"pz":[0,1,0,1,-1],"nx":[1,0,1,1,0],"ny":[1,3,2,0,4],"nz":[0,0,0,0,0]},{"size":5,"px":[11,11,11,3,2],"py":[11,13,10,7,2],"pz":[0,0,0,1,2],"nx":[4,1,8,2,0],"ny":[4,1,12,0,4],"nz":[1,-1,-1,-1,-1]},{"size":3,"px":[9,13,1],"py":[7,19,4],"pz":[1,-1,-1],"nx":[4,7,4],"ny":[5,8,2],"nz":[2,1,2]},{"size":5,"px":[12,8,16,4,4],"py":[12,1,2,0,0],"pz":[0,1,0,2,-1],"nx":[11,22,11,23,23],"ny":[2,0,1,1,5],"nz":[1,0,1,0,0]},{"size":3,"px":[11,17,17],"py":[6,11,12],"pz":[0,0,0],"nx":[15,1,11],"ny":[9,1,1],"nz":[0,-1,-1]}],"alpha":[-2.156890e+00,2.156890e+00,-1.718246e+00,1.718246e+00,-9.651329e-01,9.651329e-01,-9.948090e-01,9.948090e-01,-8.802466e-01,8.802466e-01,-8.486741e-01,8.486741e-01,-8.141777e-01,8.141777e-01]},{"count":13,"threshold":-5.774400e+00,"feature":[{"size":5,"px":[6,10,3,12,14],"py":[5,3,1,2,2],"pz":[1,0,2,0,0],"nx":[3,4,14,8,4],"ny":[5,4,8,4,2],"nz":[2,1,0,1,2]},{"size":5,"px":[10,6,11,5,12],"py":[4,13,4,2,4],"pz":[0,0,0,1,0],"nx":[1,4,8,1,1],"ny":[2,4,4,4,3],"nz":[0,1,1,0,0]},{"size":3,"px":[18,6,12],"py":[12,4,8],"pz":[0,1,0],"nx":[7,4,8],"ny":[4,2,4],"nz":[1,-1,-1]},{"size":5,"px":[7,5,6,3,17],"py":[13,12,3,8,13],"pz":[0,0,1,1,0],"nx":[3,3,0,1,8],"ny":[4,5,5,10,4],"nz":[1,-1,-1,-1,-1]},{"size":5,"px":[16,7,16,7,7],"py":[1,1,2,0,0],"pz":[0,1,0,1,-1],"nx":[23,23,23,11,5],"ny":[2,14,1,2,1],"nz":[0,0,0,1,2]},{"size":3,"px":[9,18,16],"py":[7,14,2],"pz":[1,0,-1],"nx":[8,4,9],"ny":[10,2,4],"nz":[1,2,1]},{"size":4,"px":[3,16,1,22],"py":[7,4,5,11],"pz":[1,-1,-1,-1],"nx":[3,9,4,2],"ny":[4,9,7,5],"nz":[1,0,1,2]},{"size":5,"px":[4,7,8,8,9],"py":[0,2,2,1,1],"pz":[1,0,0,0,0],"nx":[0,0,1,0,0],"ny":[15,16,19,0,14],"nz":[0,0,0,1,0]},{"size":5,"px":[4,4,7,8,12],"py":[2,5,6,7,10],"pz":[2,2,1,1,0],"nx":[8,5,10,0,0],"ny":[4,2,5,3,14],"nz":[1,-1,-1,-1,-1]},{"size":2,"px":[11,0],"py":[13,4],"pz":[0,-1],"nx":[3,14],"ny":[4,16],"nz":[1,0]},{"size":5,"px":[17,8,18,4,4],"py":[3,1,3,0,0],"pz":[0,1,0,2,-1],"nx":[21,22,5,11,22],"ny":[0,1,0,1,2],"nz":[0,0,2,1,0]},{"size":4,"px":[7,8,2,11],"py":[13,12,2,7],"pz":[0,0,2,0],"nx":[4,0,23,3],"ny":[4,1,1,11],"nz":[1,-1,-1,-1]},{"size":5,"px":[4,18,8,9,15],"py":[4,16,7,7,23],"pz":[2,0,1,1,0],"nx":[0,1,1,1,1],"ny":[10,21,23,22,22],"nz":[1,0,0,0,-1]}],"alpha":[-1.956565e+00,1.956565e+00,-1.262438e+00,1.262438e+00,-1.056941e+00,1.056941e+00,-9.712509e-01,9.712509e-01,-8.261028e-01,8.261028e-01,-8.456506e-01,8.456506e-01,-6.652113e-01,6.652113e-01,-6.026287e-01,6.026287e-01,-6.915425e-01,6.915425e-01,-5.539286e-01,5.539286e-01,-5.515072e-01,5.515072e-01,-6.685884e-01,6.685884e-01,-4.656070e-01,4.656070e-01]},{"count":20,"threshold":-5.606853e+00,"feature":[{"size":5,"px":[17,11,6,14,9],"py":[13,4,4,3,3],"pz":[0,0,1,0,0],"nx":[14,4,8,7,8],"ny":[8,4,4,4,8],"nz":[0,1,1,1,0]},{"size":5,"px":[3,9,10,11,11],"py":[7,2,2,3,3],"pz":[1,0,0,0,-1],"nx":[3,8,4,2,5],"ny":[4,4,10,2,8],"nz":[1,1,1,2,1]},{"size":5,"px":[12,12,12,5,12],"py":[12,9,10,12,11],"pz":[0,0,0,0,0],"nx":[0,0,0,0,0],"ny":[2,1,3,0,0],"nz":[0,0,0,0,-1]},{"size":5,"px":[9,18,9,9,12],"py":[7,14,19,5,11],"pz":[1,-1,-1,-1,-1],"nx":[23,4,23,23,8],"ny":[13,5,14,16,4],"nz":[0,2,0,0,1]},{"size":5,"px":[12,12,12,6,1],"py":[13,11,12,6,5],"pz":[0,0,0,-1,-1],"nx":[4,6,8,4,9],"ny":[2,8,4,4,4],"nz":[2,1,1,1,1]},{"size":4,"px":[12,11,11,6],"py":[5,5,6,13],"pz":[0,0,0,0],"nx":[8,3,2,8],"ny":[4,4,17,2],"nz":[1,1,-1,-1]},{"size":5,"px":[3,14,12,15,13],"py":[0,2,2,2,2],"pz":[2,0,0,0,0],"nx":[22,23,22,23,7],"ny":[0,3,1,2,4],"nz":[0,0,0,0,1]},{"size":5,"px":[16,15,18,19,9],"py":[12,11,12,12,9],"pz":[0,0,0,0,1],"nx":[8,2,22,23,21],"ny":[4,1,1,2,20],"nz":[1,-1,-1,-1,-1]},{"size":3,"px":[4,7,7],"py":[0,2,2],"pz":[1,0,-1],"nx":[1,2,2],"ny":[2,0,2],"nz":[1,0,0]},{"size":3,"px":[4,11,11],"py":[6,9,8],"pz":[1,0,0],"nx":[9,2,8],"ny":[9,4,5],"nz":[0,-1,-1]},{"size":4,"px":[2,7,6,6],"py":[4,23,21,22],"pz":[2,0,0,0],"nx":[9,3,8,17],"ny":[21,2,5,1],"nz":[0,-1,-1,-1]},{"size":2,"px":[2,8],"py":[4,12],"pz":[2,0],"nx":[3,0],"ny":[4,4],"nz":[1,-1]},{"size":5,"px":[4,5,1,8,4],"py":[15,12,3,23,12],"pz":[0,0,2,0,0],"nx":[0,0,0,0,0],"ny":[23,10,22,21,11],"nz":[0,1,0,0,-1]},{"size":2,"px":[21,5],"py":[13,4],"pz":[0,2],"nx":[23,4],"ny":[23,5],"nz":[0,-1]},{"size":2,"px":[15,17],"py":[2,3],"pz":[0,0],"nx":[19,20],"ny":[2,1],"nz":[0,0]},{"size":5,"px":[12,1,8,17,4],"py":[14,2,13,6,12],"pz":[0,-1,-1,-1,-1],"nx":[8,13,15,15,7],"ny":[10,9,15,14,8],"nz":[1,0,0,0,1]},{"size":2,"px":[8,5],"py":[7,4],"pz":[1,-1],"nx":[4,13],"ny":[2,21],"nz":[2,0]},{"size":2,"px":[3,4],"py":[7,0],"pz":[1,-1],"nx":[4,2],"ny":[7,5],"nz":[1,2]},{"size":4,"px":[4,14,3,11],"py":[3,23,2,5],"pz":[2,0,2,0],"nx":[7,8,2,16],"ny":[8,0,1,15],"nz":[0,-1,-1,-1]},{"size":2,"px":[9,8],"py":[0,0],"pz":[0,0],"nx":[2,2],"ny":[3,5],"nz":[2,2]}],"alpha":[-1.957970e+00,1.957970e+00,-1.225984e+00,1.225984e+00,-8.310246e-01,8.310246e-01,-8.315741e-01,8.315741e-01,-7.973616e-01,7.973616e-01,-7.661959e-01,7.661959e-01,-6.042118e-01,6.042118e-01,-6.506833e-01,6.506833e-01,-4.808219e-01,4.808219e-01,-6.079504e-01,6.079504e-01,-5.163994e-01,5.163994e-01,-5.268142e-01,5.268142e-01,-4.935685e-01,4.935685e-01,-4.427544e-01,4.427544e-01,-4.053949e-01,4.053949e-01,-4.701274e-01,4.701274e-01,-4.387648e-01,4.387648e-01,-4.305499e-01,4.305499e-01,-4.042607e-01,4.042607e-01,-4.372088e-01,4.372088e-01]},{"count":22,"threshold":-5.679317e+00,"feature":[{"size":5,"px":[11,3,17,14,13],"py":[4,0,13,2,3],"pz":[0,2,0,0,0],"nx":[7,4,14,23,11],"ny":[8,4,8,4,0],"nz":[1,1,0,0,1]},{"size":5,"px":[7,12,6,12,12],"py":[12,8,3,10,9],"pz":[0,0,1,0,0],"nx":[4,9,8,15,15],"ny":[4,8,4,8,8],"nz":[1,0,1,0,-1]},{"size":3,"px":[4,2,10],"py":[1,4,1],"pz":[1,2,0],"nx":[2,3,8],"ny":[5,4,4],"nz":[2,1,-1]},{"size":5,"px":[3,17,6,6,16],"py":[2,12,4,14,12],"pz":[2,0,1,0,0],"nx":[8,3,7,5,15],"ny":[4,4,4,4,8],"nz":[1,1,-1,-1,-1]},{"size":5,"px":[5,6,7,4,8],"py":[3,3,3,1,3],"pz":[0,0,0,1,0],"nx":[0,0,0,0,1],"ny":[5,4,3,2,0],"nz":[0,0,0,0,0]},{"size":3,"px":[18,9,0],"py":[14,7,0],"pz":[0,1,-1],"nx":[8,14,8],"ny":[10,9,4],"nz":[1,0,1]},{"size":2,"px":[9,5],"py":[18,13],"pz":[0,0],"nx":[10,3],"ny":[16,4],"nz":[0,-1]},{"size":5,"px":[11,11,11,11,6],"py":[10,12,11,13,6],"pz":[0,0,0,0,-1],"nx":[5,21,22,22,22],"ny":[4,22,17,19,18],"nz":[2,0,0,0,0]},{"size":4,"px":[8,9,15,4],"py":[7,7,23,4],"pz":[1,1,0,2],"nx":[8,5,0,3],"ny":[4,18,4,9],"nz":[1,-1,-1,-1]},{"size":5,"px":[11,10,12,11,11],"py":[4,4,4,5,5],"pz":[0,0,0,0,-1],"nx":[4,6,8,2,8],"ny":[4,9,9,2,4],"nz":[1,1,0,2,1]},{"size":5,"px":[2,2,3,3,4],"py":[10,9,14,13,15],"pz":[1,1,0,0,0],"nx":[0,0,0,0,0],"ny":[5,9,10,19,18],"nz":[2,1,1,0,-1]},{"size":2,"px":[11,11],"py":[13,12],"pz":[0,0],"nx":[9,2],"ny":[15,2],"nz":[0,-1]},{"size":5,"px":[2,4,3,3,4],"py":[5,11,6,9,12],"pz":[1,0,1,0,0],"nx":[6,2,11,11,0],"ny":[9,1,5,20,18],"nz":[0,-1,-1,-1,-1]},{"size":5,"px":[18,9,17,19,16],"py":[2,0,2,2,1],"pz":[0,1,0,0,0],"nx":[22,23,11,23,23],"ny":[0,2,0,1,1],"nz":[0,0,1,0,-1]},{"size":5,"px":[5,5,6,7,6],"py":[17,16,15,23,22],"pz":[0,0,0,0,0],"nx":[7,6,2,5,23],"ny":[8,1,2,3,1],"nz":[0,-1,-1,-1,-1]},{"size":5,"px":[12,12,11,10,6],"py":[14,13,18,4,22],"pz":[0,-1,-1,-1,-1],"nx":[3,2,4,1,2],"ny":[19,4,23,13,16],"nz":[0,0,0,0,0]},{"size":4,"px":[11,16,11,17],"py":[7,11,8,12],"pz":[0,0,0,0],"nx":[7,14,10,4],"ny":[4,7,10,4],"nz":[1,0,-1,-1]},{"size":2,"px":[3,3],"py":[8,7],"pz":[1,1],"nx":[4,2],"ny":[10,2],"nz":[1,-1]},{"size":2,"px":[3,9],"py":[0,1],"pz":[1,0],"nx":[4,5],"ny":[1,0],"nz":[0,0]},{"size":2,"px":[14,16],"py":[3,3],"pz":[0,0],"nx":[9,14],"ny":[4,21],"nz":[1,0]},{"size":2,"px":[9,1],"py":[7,1],"pz":[1,-1],"nx":[8,9],"ny":[7,4],"nz":[1,1]},{"size":2,"px":[1,0],"py":[8,3],"pz":[0,2],"nx":[20,0],"ny":[3,3],"nz":[0,-1]}],"alpha":[-1.581077e+00,1.581077e+00,-1.389689e+00,1.389689e+00,-8.733094e-01,8.733094e-01,-8.525177e-01,8.525177e-01,-7.416304e-01,7.416304e-01,-6.609002e-01,6.609002e-01,-7.119043e-01,7.119043e-01,-6.204438e-01,6.204438e-01,-6.638519e-01,6.638519e-01,-5.518876e-01,5.518876e-01,-4.898991e-01,4.898991e-01,-5.508243e-01,5.508243e-01,-4.635525e-01,4.635525e-01,-5.163159e-01,5.163159e-01,-4.495338e-01,4.495338e-01,-4.515036e-01,4.515036e-01,-5.130473e-01,5.130473e-01,-4.694233e-01,4.694233e-01,-4.022514e-01,4.022514e-01,-4.055690e-01,4.055690e-01,-4.151817e-01,4.151817e-01,-3.352302e-01,3.352302e-01]},{"count":32,"threshold":-5.363782e+00,"feature":[{"size":5,"px":[12,9,6,8,14],"py":[4,2,13,3,3],"pz":[0,0,0,0,0],"nx":[0,15,0,9,5],"ny":[2,7,3,8,8],"nz":[0,0,0,0,1]},{"size":5,"px":[13,16,3,6,11],"py":[3,13,1,4,3],"pz":[0,0,2,1,0],"nx":[7,4,8,14,14],"ny":[4,4,4,8,8],"nz":[1,1,1,0,-1]},{"size":5,"px":[10,19,18,19,19],"py":[6,13,13,12,12],"pz":[1,0,0,0,-1],"nx":[23,5,23,23,11],"ny":[12,2,13,14,8],"nz":[0,2,0,0,1]},{"size":5,"px":[12,12,12,12,6],"py":[11,13,12,10,6],"pz":[0,0,0,0,1],"nx":[6,8,3,9,9],"ny":[8,4,4,4,4],"nz":[1,1,1,1,-1]},{"size":5,"px":[5,3,5,8,11],"py":[12,8,3,11,8],"pz":[0,1,1,0,0],"nx":[4,0,1,1,9],"ny":[4,3,4,3,4],"nz":[1,-1,-1,-1,-1]},{"size":5,"px":[13,3,12,14,12],"py":[1,0,1,2,3],"pz":[0,2,0,0,0],"nx":[7,9,8,4,4],"ny":[5,4,10,2,2],"nz":[1,1,1,2,-1]},{"size":5,"px":[18,16,12,15,8],"py":[12,23,7,11,8],"pz":[0,0,0,0,1],"nx":[8,6,10,12,4],"ny":[4,4,10,6,3],"nz":[1,-1,-1,-1,-1]},{"size":5,"px":[4,4,5,2,2],"py":[13,14,14,7,7],"pz":[0,0,0,1,-1],"nx":[0,0,0,0,1],"ny":[15,4,14,13,17],"nz":[0,2,0,0,0]},{"size":2,"px":[9,9],"py":[7,7],"pz":[1,-1],"nx":[4,7],"ny":[5,8],"nz":[2,1]},{"size":5,"px":[3,4,6,5,4],"py":[2,2,14,6,9],"pz":[1,1,0,1,1],"nx":[23,23,23,23,11],"ny":[0,3,2,1,0],"nz":[0,0,0,0,-1]},{"size":3,"px":[10,2,3],"py":[23,4,7],"pz":[0,2,1],"nx":[10,21,23],"ny":[21,9,2],"nz":[0,-1,-1]},{"size":5,"px":[20,21,21,10,12],"py":[13,12,8,8,12],"pz":[0,0,0,1,0],"nx":[8,16,3,3,11],"ny":[4,8,4,3,0],"nz":[1,-1,-1,-1,-1]},{"size":2,"px":[2,21],"py":[4,12],"pz":[2,-1],"nx":[2,3],"ny":[5,4],"nz":[2,1]},{"size":5,"px":[8,5,6,8,7],"py":[0,2,1,1,1],"pz":[0,0,0,0,0],"nx":[3,2,2,2,2],"ny":[0,0,1,2,2],"nz":[0,0,0,0,-1]},{"size":5,"px":[11,2,2,11,10],"py":[10,12,8,11,12],"pz":[0,0,0,0,0],"nx":[3,5,2,4,2],"ny":[4,1,4,2,2],"nz":[1,-1,-1,-1,-1]},{"size":4,"px":[15,16,8,17],"py":[2,1,0,2],"pz":[0,0,1,0],"nx":[19,20,0,8],"ny":[1,2,11,10],"nz":[0,0,-1,-1]},{"size":2,"px":[17,16],"py":[12,12],"pz":[0,0],"nx":[8,9],"ny":[5,1],"nz":[1,-1]},{"size":4,"px":[11,11,0,0],"py":[12,13,0,0],"pz":[0,0,-1,-1],"nx":[10,10,9,10],"ny":[10,12,13,11],"nz":[0,0,0,0]},{"size":3,"px":[11,10,8],"py":[5,2,6],"pz":[0,-1,-1],"nx":[8,12,4],"ny":[4,17,4],"nz":[1,0,1]},{"size":5,"px":[10,21,10,20,20],"py":[11,13,7,13,14],"pz":[1,0,1,0,0],"nx":[23,23,11,23,17],"ny":[23,22,11,21,21],"nz":[0,0,1,-1,-1]},{"size":2,"px":[4,7],"py":[3,9],"pz":[2,1],"nx":[9,23],"ny":[4,22],"nz":[1,-1]},{"size":4,"px":[3,2,2,5],"py":[11,5,4,20],"pz":[1,2,2,0],"nx":[4,23,11,23],"ny":[10,22,11,21],"nz":[1,-1,-1,-1]},{"size":2,"px":[7,5],"py":[13,4],"pz":[0,-1],"nx":[4,4],"ny":[8,6],"nz":[1,1]},{"size":2,"px":[2,5],"py":[4,9],"pz":[2,1],"nx":[10,10],"ny":[16,16],"nz":[0,-1]},{"size":2,"px":[4,2],"py":[6,3],"pz":[1,2],"nx":[3,0],"ny":[4,0],"nz":[1,-1]},{"size":5,"px":[7,3,12,13,6],"py":[11,5,23,23,7],"pz":[1,2,0,0,1],"nx":[1,0,0,0,0],"ny":[23,20,19,21,21],"nz":[0,0,0,0,-1]},{"size":5,"px":[0,0,0,0,0],"py":[10,9,6,13,13],"pz":[0,0,1,0,-1],"nx":[8,8,4,4,9],"ny":[4,11,5,4,5],"nz":[1,1,2,2,1]},{"size":2,"px":[9,18],"py":[8,15],"pz":[1,0],"nx":[15,4],"ny":[15,2],"nz":[0,-1]},{"size":2,"px":[5,13],"py":[6,17],"pz":[1,-1],"nx":[1,2],"ny":[2,4],"nz":[2,1]},{"size":5,"px":[19,10,20,18,18],"py":[2,0,2,2,2],"pz":[0,1,0,0,-1],"nx":[22,23,22,11,23],"ny":[1,3,0,1,2],"nz":[0,0,0,1,0]},{"size":5,"px":[4,2,2,2,6],"py":[7,2,5,4,14],"pz":[1,2,2,2,0],"nx":[16,7,9,15,23],"ny":[8,0,3,11,2],"nz":[0,-1,-1,-1,-1]},{"size":5,"px":[10,10,9,9,5],"py":[2,0,0,1,0],"pz":[0,0,0,0,1],"nx":[3,2,3,2,2],"ny":[11,3,9,5,5],"nz":[1,2,1,2,-1]}],"alpha":[-1.490426e+00,1.490426e+00,-1.214280e+00,1.214280e+00,-8.124863e-01,8.124863e-01,-7.307594e-01,7.307594e-01,-7.377259e-01,7.377259e-01,-5.982859e-01,5.982859e-01,-6.451736e-01,6.451736e-01,-6.117417e-01,6.117417e-01,-5.438949e-01,5.438949e-01,-4.563701e-01,4.563701e-01,-4.975362e-01,4.975362e-01,-4.707373e-01,4.707373e-01,-5.013868e-01,5.013868e-01,-5.139018e-01,5.139018e-01,-4.728007e-01,4.728007e-01,-4.839748e-01,4.839748e-01,-4.852528e-01,4.852528e-01,-5.768956e-01,5.768956e-01,-3.635091e-01,3.635091e-01,-4.190090e-01,4.190090e-01,-3.854715e-01,3.854715e-01,-3.409591e-01,3.409591e-01,-3.440222e-01,3.440222e-01,-3.375895e-01,3.375895e-01,-3.367032e-01,3.367032e-01,-3.708106e-01,3.708106e-01,-3.260956e-01,3.260956e-01,-3.657681e-01,3.657681e-01,-3.518800e-01,3.518800e-01,-3.845758e-01,3.845758e-01,-2.832236e-01,2.832236e-01,-2.865156e-01,2.865156e-01]},{"count":45,"threshold":-5.479836e+00,"feature":[{"size":5,"px":[15,6,17,6,9],"py":[2,13,13,4,3],"pz":[0,0,0,1,0],"nx":[3,9,4,8,14],"ny":[5,8,4,4,8],"nz":[2,0,1,1,0]},{"size":5,"px":[9,8,11,6,7],"py":[1,2,3,14,2],"pz":[0,0,0,0,0],"nx":[0,0,4,0,0],"ny":[4,2,4,1,0],"nz":[0,0,1,0,0]},{"size":5,"px":[2,2,11,11,11],"py":[2,4,10,8,6],"pz":[2,2,0,0,0],"nx":[8,4,3,23,23],"ny":[4,4,4,16,18],"nz":[1,1,-1,-1,-1]},{"size":5,"px":[18,16,17,15,9],"py":[2,2,2,2,1],"pz":[0,0,0,0,1],"nx":[22,22,21,23,23],"ny":[1,2,0,5,4],"nz":[0,0,0,0,0]},{"size":5,"px":[15,3,17,18,6],"py":[11,2,11,11,4],"pz":[0,2,0,0,1],"nx":[3,8,1,4,23],"ny":[4,4,3,9,4],"nz":[1,1,-1,-1,-1]},{"size":2,"px":[4,5],"py":[4,0],"pz":[2,-1],"nx":[7,4],"ny":[8,5],"nz":[1,2]},{"size":2,"px":[11,5],"py":[12,5],"pz":[0,-1],"nx":[4,9],"ny":[10,15],"nz":[1,0]},{"size":4,"px":[2,2,7,1],"py":[7,7,3,4],"pz":[1,-1,-1,-1],"nx":[0,2,1,2],"ny":[6,20,14,16],"nz":[1,0,0,0]},{"size":5,"px":[14,12,12,13,9],"py":[23,5,6,5,7],"pz":[0,0,0,0,1],"nx":[8,18,2,8,14],"ny":[4,9,0,12,7],"nz":[1,-1,-1,-1,-1]},{"size":5,"px":[3,10,13,11,9],"py":[0,3,2,3,2],"pz":[2,0,0,0,0],"nx":[3,11,22,22,22],"ny":[2,6,15,2,0],"nz":[2,1,0,0,0]},{"size":5,"px":[8,7,5,8,5],"py":[23,12,12,12,13],"pz":[0,0,0,0,0],"nx":[3,18,3,1,22],"ny":[4,4,4,2,0],"nz":[1,-1,-1,-1,-1]},{"size":5,"px":[22,22,22,21,22],"py":[9,11,10,14,12],"pz":[0,0,0,0,0],"nx":[23,23,11,1,22],"ny":[23,23,11,2,0],"nz":[0,-1,-1,-1,-1]},{"size":2,"px":[9,3],"py":[18,7],"pz":[0,1],"nx":[10,8],"ny":[16,19],"nz":[0,-1]},{"size":5,"px":[10,12,11,6,6],"py":[4,4,4,2,2],"pz":[0,0,0,1,-1],"nx":[3,8,7,8,4],"ny":[5,4,4,10,4],"nz":[2,1,1,0,1]},{"size":4,"px":[12,12,4,15],"py":[13,12,0,11],"pz":[0,0,-1,-1],"nx":[13,14,13,14],"ny":[9,12,10,13],"nz":[0,0,0,0]},{"size":2,"px":[4,4],"py":[3,3],"pz":[2,-1],"nx":[9,4],"ny":[4,2],"nz":[1,2]},{"size":3,"px":[9,7,0],"py":[7,5,5],"pz":[1,-1,-1],"nx":[4,15,9],"ny":[5,14,9],"nz":[2,0,1]},{"size":5,"px":[15,20,7,10,16],"py":[17,12,6,4,23],"pz":[0,0,1,1,0],"nx":[1,2,2,1,1],"ny":[3,0,1,2,2],"nz":[0,0,0,0,-1]},{"size":5,"px":[2,1,1,11,2],"py":[16,4,5,12,14],"pz":[0,1,1,0,0],"nx":[4,6,3,19,1],"ny":[4,2,5,19,2],"nz":[1,-1,-1,-1,-1]},{"size":3,"px":[15,14,14],"py":[1,1,0],"pz":[0,0,0],"nx":[4,8,4],"ny":[3,4,2],"nz":[2,1,2]},{"size":5,"px":[2,3,1,2,7],"py":[8,12,4,9,13],"pz":[1,0,2,1,0],"nx":[1,1,0,0,0],"ny":[21,20,18,17,9],"nz":[0,0,0,0,1]},{"size":5,"px":[17,15,17,16,16],"py":[12,12,22,23,12],"pz":[0,0,0,0,0],"nx":[7,3,16,1,0],"ny":[8,6,8,3,9],"nz":[0,-1,-1,-1,-1]},{"size":5,"px":[9,17,18,18,18],"py":[6,12,12,13,13],"pz":[1,0,0,0,-1],"nx":[23,23,20,11,11],"ny":[12,13,23,7,8],"nz":[0,0,0,1,1]},{"size":2,"px":[2,4],"py":[4,7],"pz":[2,1],"nx":[4,4],"ny":[10,5],"nz":[1,-1]},{"size":4,"px":[4,22,19,12],"py":[5,8,14,9],"pz":[2,0,0,0],"nx":[8,4,4,2],"ny":[4,4,1,2],"nz":[1,-1,-1,-1]},{"size":2,"px":[3,21],"py":[7,14],"pz":[1,-1],"nx":[4,2],"ny":[7,2],"nz":[1,2]},{"size":3,"px":[7,4,17],"py":[3,1,6],"pz":[0,1,-1],"nx":[3,4,5],"ny":[0,2,1],"nz":[1,0,0]},{"size":4,"px":[15,7,14,0],"py":[3,1,3,7],"pz":[0,1,0,-1],"nx":[8,18,17,18],"ny":[0,1,1,2],"nz":[1,0,0,0]},{"size":5,"px":[12,12,12,12,6],"py":[10,11,12,13,6],"pz":[0,0,0,0,-1],"nx":[8,15,15,4,8],"ny":[10,10,9,2,4],"nz":[0,0,0,2,1]},{"size":2,"px":[17,12],"py":[13,11],"pz":[0,-1],"nx":[9,8],"ny":[4,10],"nz":[1,1]},{"size":5,"px":[0,0,0,0,0],"py":[10,9,12,11,4],"pz":[0,0,0,0,1],"nx":[8,9,8,9,9],"ny":[10,4,4,5,5],"nz":[1,1,1,1,-1]},{"size":3,"px":[7,0,1],"py":[1,9,8],"pz":[0,-1,-1],"nx":[4,3,3],"ny":[7,15,16],"nz":[0,0,0]},{"size":2,"px":[4,7],"py":[15,23],"pz":[0,0],"nx":[9,18],"ny":[21,3],"nz":[0,-1]},{"size":5,"px":[17,4,19,18,8],"py":[12,3,12,17,6],"pz":[0,2,0,0,1],"nx":[23,23,11,22,16],"ny":[0,1,0,21,-1],"nz":[0,0,-1,-1,-1]},{"size":2,"px":[7,4],"py":[13,5],"pz":[0,-1],"nx":[4,2],"ny":[4,2],"nz":[1,2]},{"size":5,"px":[21,20,10,10,21],"py":[13,14,10,7,11],"pz":[0,0,1,1,0],"nx":[4,4,4,5,5],"ny":[18,17,19,20,20],"nz":[0,0,0,0,-1]},{"size":2,"px":[2,3],"py":[11,13],"pz":[1,0],"nx":[12,4],"ny":[17,17],"nz":[0,-1]},{"size":2,"px":[11,5],"py":[13,1],"pz":[0,-1],"nx":[1,2],"ny":[1,4],"nz":[2,1]},{"size":2,"px":[15,7],"py":[17,7],"pz":[0,1],"nx":[14,4],"ny":[15,3],"nz":[0,-1]},{"size":2,"px":[3,11],"py":[3,8],"pz":[2,0],"nx":[13,13],"ny":[9,8],"nz":[0,0]},{"size":2,"px":[8,3],"py":[11,2],"pz":[0,-1],"nx":[8,4],"ny":[9,5],"nz":[0,1]},{"size":3,"px":[12,6,9],"py":[9,10,11],"pz":[0,-1,-1],"nx":[2,1,5],"ny":[2,1,6],"nz":[2,2,1]},{"size":4,"px":[4,5,5,1],"py":[11,11,11,3],"pz":[1,0,1,2],"nx":[0,0,5,4],"ny":[23,22,0,0],"nz":[0,0,-1,-1]},{"size":5,"px":[15,7,17,15,16],"py":[1,0,2,2,0],"pz":[0,1,0,0,0],"nx":[7,4,7,4,8],"ny":[5,2,4,3,4],"nz":[1,2,1,2,-1]},{"size":2,"px":[6,12],"py":[11,23],"pz":[1,0],"nx":[12,4],"ny":[21,2],"nz":[0,-1]}],"alpha":[-1.535800e+00,1.535800e+00,-8.580514e-01,8.580514e-01,-8.625210e-01,8.625210e-01,-7.177500e-01,7.177500e-01,-6.832222e-01,6.832222e-01,-5.736298e-01,5.736298e-01,-5.028217e-01,5.028217e-01,-5.091788e-01,5.091788e-01,-5.791940e-01,5.791940e-01,-4.924942e-01,4.924942e-01,-5.489055e-01,5.489055e-01,-4.528190e-01,4.528190e-01,-4.748324e-01,4.748324e-01,-4.150403e-01,4.150403e-01,-4.820464e-01,4.820464e-01,-4.840212e-01,4.840212e-01,-3.941872e-01,3.941872e-01,-3.663507e-01,3.663507e-01,-3.814835e-01,3.814835e-01,-3.936426e-01,3.936426e-01,-3.049970e-01,3.049970e-01,-3.604256e-01,3.604256e-01,-3.974041e-01,3.974041e-01,-4.203486e-01,4.203486e-01,-3.174435e-01,3.174435e-01,-3.426336e-01,3.426336e-01,-4.492150e-01,4.492150e-01,-3.538784e-01,3.538784e-01,-3.679703e-01,3.679703e-01,-3.985452e-01,3.985452e-01,-2.884028e-01,2.884028e-01,-2.797264e-01,2.797264e-01,-2.664214e-01,2.664214e-01,-2.484857e-01,2.484857e-01,-2.581492e-01,2.581492e-01,-2.943778e-01,2.943778e-01,-2.315507e-01,2.315507e-01,-2.979337e-01,2.979337e-01,-2.976173e-01,2.976173e-01,-2.847965e-01,2.847965e-01,-2.814763e-01,2.814763e-01,-2.489068e-01,2.489068e-01,-2.632427e-01,2.632427e-01,-3.308292e-01,3.308292e-01,-2.790170e-01,2.790170e-01]},{"count":61,"threshold":-5.239104e+00,"feature":[{"size":5,"px":[8,8,11,15,6],"py":[3,6,5,3,4],"pz":[0,1,0,0,1],"nx":[3,9,14,8,4],"ny":[4,8,8,7,2],"nz":[1,0,0,0,2]},{"size":5,"px":[11,12,10,6,9],"py":[3,3,2,13,2],"pz":[0,0,0,0,0],"nx":[0,0,5,2,2],"ny":[13,1,8,5,2],"nz":[0,1,1,2,2]},{"size":5,"px":[11,5,11,11,4],"py":[9,13,10,11,6],"pz":[0,0,0,0,1],"nx":[4,15,9,3,3],"ny":[5,8,9,4,4],"nz":[1,0,0,1,-1]},{"size":5,"px":[15,16,8,17,17],"py":[1,2,0,2,2],"pz":[0,0,1,0,-1],"nx":[23,23,23,23,23],"ny":[4,0,2,3,1],"nz":[0,0,0,0,0]},{"size":4,"px":[9,18,17,18],"py":[7,13,13,14],"pz":[1,0,0,0],"nx":[9,7,4,8],"ny":[4,10,2,4],"nz":[1,1,2,1]},{"size":5,"px":[12,11,12,12,6],"py":[6,5,14,5,3],"pz":[0,0,0,0,1],"nx":[13,8,14,7,7],"ny":[16,4,7,4,4],"nz":[0,1,0,1,-1]},{"size":5,"px":[12,6,3,7,12],"py":[7,12,7,11,8],"pz":[0,0,1,0,0],"nx":[16,4,4,4,7],"ny":[8,4,4,4,4],"nz":[0,1,-1,-1,-1]},{"size":5,"px":[6,4,5,3,3],"py":[2,3,2,0,0],"pz":[0,0,0,1,-1],"nx":[1,0,1,0,0],"ny":[0,3,1,1,2],"nz":[0,0,0,1,0]},{"size":2,"px":[15,9],"py":[11,6],"pz":[0,1],"nx":[14,5],"ny":[9,11],"nz":[0,-1]},{"size":5,"px":[10,19,19,10,20],"py":[7,20,14,6,12],"pz":[1,0,0,1,0],"nx":[23,22,11,23,23],"ny":[21,23,9,20,20],"nz":[0,0,1,0,-1]},{"size":5,"px":[1,1,5,1,1],"py":[8,6,6,9,4],"pz":[0,1,1,0,2],"nx":[3,3,3,2,5],"ny":[4,4,2,5,4],"nz":[1,-1,-1,-1,-1]},{"size":5,"px":[13,12,3,11,11],"py":[2,2,0,1,2],"pz":[0,0,2,0,0],"nx":[3,6,8,4,3],"ny":[2,9,4,4,5],"nz":[2,1,1,1,-1]},{"size":3,"px":[12,12,6],"py":[11,12,9],"pz":[0,0,-1],"nx":[2,1,9],"ny":[6,1,14],"nz":[0,2,0]},{"size":5,"px":[6,3,17,16,16],"py":[4,2,14,23,13],"pz":[1,2,0,0,0],"nx":[8,10,21,5,1],"ny":[4,10,11,0,0],"nz":[1,-1,-1,-1,-1]},{"size":5,"px":[5,6,1,3,3],"py":[15,14,4,7,7],"pz":[0,0,2,1,-1],"nx":[1,0,0,1,1],"ny":[5,8,7,18,17],"nz":[2,1,1,0,0]},{"size":4,"px":[6,12,5,3],"py":[6,12,2,7],"pz":[1,-1,-1,-1],"nx":[14,13,13,7],"ny":[12,10,9,8],"nz":[0,0,0,1]},{"size":2,"px":[3,6],"py":[7,15],"pz":[1,0],"nx":[3,3],"ny":[4,2],"nz":[1,-1]},{"size":4,"px":[11,10,12,2],"py":[18,18,18,3],"pz":[0,0,0,2],"nx":[11,17,4,16],"ny":[16,4,4,21],"nz":[0,-1,-1,-1]},{"size":5,"px":[9,8,8,5,2],"py":[4,4,4,2,3],"pz":[0,0,-1,-1,-1],"nx":[2,2,4,4,2],"ny":[1,2,10,5,4],"nz":[2,2,1,1,2]},{"size":4,"px":[8,18,14,18],"py":[7,16,23,15],"pz":[1,0,0,0],"nx":[14,3,1,0],"ny":[21,1,9,3],"nz":[0,-1,-1,-1]},{"size":2,"px":[12,3],"py":[9,5],"pz":[0,2],"nx":[8,1],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[9,9],"py":[1,1],"pz":[1,-1],"nx":[19,20],"ny":[1,2],"nz":[0,0]},{"size":3,"px":[10,10,10],"py":[6,6,8],"pz":[1,-1,-1],"nx":[22,21,22],"ny":[13,18,12],"nz":[0,0,0]},{"size":2,"px":[2,2],"py":[4,1],"pz":[2,-1],"nx":[2,4],"ny":[5,4],"nz":[2,1]},{"size":5,"px":[21,21,21,21,21],"py":[19,17,18,15,16],"pz":[0,0,0,0,0],"nx":[11,21,6,1,21],"ny":[17,1,10,0,2],"nz":[0,-1,-1,-1,-1]},{"size":5,"px":[7,3,4,4,4],"py":[23,13,14,16,13],"pz":[0,0,0,0,0],"nx":[21,22,22,22,22],"ny":[23,21,20,19,19],"nz":[0,0,0,0,-1]},{"size":2,"px":[11,8],"py":[6,6],"pz":[0,1],"nx":[8,4],"ny":[4,2],"nz":[1,-1]},{"size":5,"px":[23,23,11,23,23],"py":[8,12,6,11,10],"pz":[0,0,1,0,0],"nx":[4,4,3,8,8],"ny":[3,8,4,4,4],"nz":[1,1,1,1,-1]},{"size":5,"px":[8,9,4,7,10],"py":[2,1,0,2,1],"pz":[0,0,1,0,0],"nx":[5,5,6,4,4],"ny":[1,0,0,2,1],"nz":[0,0,0,0,-1]},{"size":2,"px":[12,2],"py":[13,6],"pz":[0,-1],"nx":[15,9],"ny":[15,4],"nz":[0,1]},{"size":2,"px":[2,4],"py":[4,9],"pz":[2,1],"nx":[3,13],"ny":[4,1],"nz":[1,-1]},{"size":3,"px":[3,6,2],"py":[10,22,4],"pz":[1,0,2],"nx":[4,2,1],"ny":[10,4,3],"nz":[1,-1,-1]},{"size":2,"px":[1,0],"py":[9,7],"pz":[0,1],"nx":[0,0],"ny":[23,22],"nz":[0,0]},{"size":2,"px":[8,7],"py":[0,1],"pz":[0,0],"nx":[4,4],"ny":[8,8],"nz":[1,-1]},{"size":5,"px":[7,4,4,6,3],"py":[8,4,5,5,3],"pz":[1,2,2,1,2],"nx":[1,0,2,0,0],"ny":[1,0,0,2,4],"nz":[0,2,0,1,-1]},{"size":3,"px":[10,4,4],"py":[6,1,5],"pz":[1,-1,-1],"nx":[5,23,22],"ny":[4,13,7],"nz":[2,0,0]},{"size":2,"px":[2,2],"py":[6,5],"pz":[1,1],"nx":[6,0],"ny":[9,2],"nz":[0,-1]},{"size":5,"px":[0,1,1,0,0],"py":[5,18,19,16,6],"pz":[2,0,0,0,1],"nx":[5,9,4,8,8],"ny":[8,7,3,7,7],"nz":[1,0,1,0,-1]},{"size":2,"px":[13,12],"py":[23,23],"pz":[0,0],"nx":[7,6],"ny":[8,10],"nz":[0,-1]},{"size":2,"px":[14,19],"py":[12,8],"pz":[0,0],"nx":[18,5],"ny":[8,11],"nz":[0,-1]},{"size":5,"px":[2,8,6,4,4],"py":[3,23,14,6,9],"pz":[2,0,0,1,1],"nx":[0,0,0,0,1],"ny":[21,20,5,19,23],"nz":[0,0,2,0,0]},{"size":2,"px":[11,22],"py":[4,14],"pz":[0,-1],"nx":[3,8],"ny":[1,4],"nz":[2,1]},{"size":5,"px":[1,1,0,1,1],"py":[6,8,3,12,7],"pz":[1,1,2,0,1],"nx":[21,21,19,10,10],"ny":[14,16,23,9,9],"nz":[0,0,0,1,-1]},{"size":2,"px":[10,3],"py":[23,2],"pz":[0,2],"nx":[10,3],"ny":[21,5],"nz":[0,-1]},{"size":2,"px":[9,9],"py":[7,0],"pz":[1,-1],"nx":[9,9],"ny":[11,10],"nz":[1,1]},{"size":5,"px":[23,11,23,23,23],"py":[18,10,19,20,16],"pz":[0,1,0,0,0],"nx":[3,3,2,3,2],"ny":[15,16,10,17,9],"nz":[0,0,1,0,-1]},{"size":2,"px":[9,14],"py":[7,18],"pz":[1,0],"nx":[7,10],"ny":[8,8],"nz":[1,-1]},{"size":2,"px":[12,5],"py":[6,4],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[4,5],"py":[13,4],"pz":[0,-1],"nx":[4,4],"ny":[17,19],"nz":[0,0]},{"size":3,"px":[2,3,3],"py":[11,17,19],"pz":[1,0,0],"nx":[7,7,4],"ny":[8,8,5],"nz":[1,-1,-1]},{"size":2,"px":[6,6],"py":[6,5],"pz":[1,-1],"nx":[2,9],"ny":[4,12],"nz":[1,0]},{"size":5,"px":[8,8,9,2,2],"py":[18,13,12,3,3],"pz":[0,0,0,2,-1],"nx":[23,11,23,11,11],"ny":[13,6,14,7,8],"nz":[0,1,0,1,1]},{"size":2,"px":[9,11],"py":[6,13],"pz":[1,-1],"nx":[4,8],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[8,10],"py":[0,6],"pz":[1,1],"nx":[9,4],"ny":[6,7],"nz":[1,-1]},{"size":3,"px":[3,10,9],"py":[8,6,0],"pz":[1,-1,-1],"nx":[2,2,2],"ny":[15,16,9],"nz":[0,0,1]},{"size":3,"px":[14,15,0],"py":[2,2,5],"pz":[0,0,-1],"nx":[17,17,18],"ny":[0,1,2],"nz":[0,0,0]},{"size":2,"px":[11,5],"py":[14,1],"pz":[0,-1],"nx":[10,9],"ny":[12,14],"nz":[0,0]},{"size":2,"px":[8,8],"py":[7,8],"pz":[1,1],"nx":[8,4],"ny":[4,4],"nz":[1,-1]},{"size":5,"px":[0,0,0,0,0],"py":[19,18,10,5,20],"pz":[0,0,1,2,0],"nx":[4,8,2,4,4],"ny":[4,15,5,10,10],"nz":[1,0,2,1,-1]},{"size":2,"px":[7,0],"py":[13,18],"pz":[0,-1],"nx":[4,3],"ny":[4,4],"nz":[1,1]},{"size":5,"px":[23,22,22,11,22],"py":[16,13,7,6,14],"pz":[0,0,0,1,0],"nx":[13,7,15,14,14],"ny":[6,3,7,6,6],"nz":[0,1,0,0,-1]}],"alpha":[-1.428861e+00,1.428861e+00,-8.591837e-01,8.591837e-01,-7.734305e-01,7.734305e-01,-6.534460e-01,6.534460e-01,-6.262547e-01,6.262547e-01,-5.231782e-01,5.231782e-01,-4.984303e-01,4.984303e-01,-4.913187e-01,4.913187e-01,-4.852198e-01,4.852198e-01,-4.906681e-01,4.906681e-01,-4.126248e-01,4.126248e-01,-4.590814e-01,4.590814e-01,-4.653825e-01,4.653825e-01,-4.179600e-01,4.179600e-01,-4.357392e-01,4.357392e-01,-4.087982e-01,4.087982e-01,-4.594812e-01,4.594812e-01,-4.858794e-01,4.858794e-01,-3.713580e-01,3.713580e-01,-3.894534e-01,3.894534e-01,-3.127168e-01,3.127168e-01,-4.012654e-01,4.012654e-01,-3.370552e-01,3.370552e-01,-3.534712e-01,3.534712e-01,-3.843450e-01,3.843450e-01,-2.688805e-01,2.688805e-01,-3.500203e-01,3.500203e-01,-2.827120e-01,2.827120e-01,-3.742119e-01,3.742119e-01,-3.219074e-01,3.219074e-01,-2.544953e-01,2.544953e-01,-3.355513e-01,3.355513e-01,-2.672670e-01,2.672670e-01,-2.932047e-01,2.932047e-01,-2.404618e-01,2.404618e-01,-2.354372e-01,2.354372e-01,-2.657955e-01,2.657955e-01,-2.293701e-01,2.293701e-01,-2.708918e-01,2.708918e-01,-2.340181e-01,2.340181e-01,-2.464815e-01,2.464815e-01,-2.944239e-01,2.944239e-01,-2.407960e-01,2.407960e-01,-3.029642e-01,3.029642e-01,-2.684602e-01,2.684602e-01,-2.495078e-01,2.495078e-01,-2.539708e-01,2.539708e-01,-2.989293e-01,2.989293e-01,-2.391309e-01,2.391309e-01,-2.531372e-01,2.531372e-01,-2.500390e-01,2.500390e-01,-2.295077e-01,2.295077e-01,-2.526125e-01,2.526125e-01,-2.337182e-01,2.337182e-01,-1.984756e-01,1.984756e-01,-3.089996e-01,3.089996e-01,-2.589053e-01,2.589053e-01,-2.962490e-01,2.962490e-01,-2.458660e-01,2.458660e-01,-2.515206e-01,2.515206e-01,-2.637299e-01,2.637299e-01]},{"count":80,"threshold":-5.185898e+00,"feature":[{"size":5,"px":[12,17,13,10,15],"py":[9,13,3,3,2],"pz":[0,0,0,0,0],"nx":[8,14,6,9,4],"ny":[10,9,8,8,2],"nz":[1,0,1,0,2]},{"size":5,"px":[3,11,8,10,9],"py":[7,4,3,3,3],"pz":[1,0,0,0,0],"nx":[2,1,5,0,0],"ny":[2,15,8,4,13],"nz":[2,0,1,0,0]},{"size":5,"px":[11,11,11,4,17],"py":[7,9,8,6,11],"pz":[0,0,0,1,0],"nx":[8,8,8,3,0],"ny":[4,8,8,8,13],"nz":[1,0,-1,-1,-1]},{"size":5,"px":[14,15,7,16,16],"py":[3,3,1,3,3],"pz":[0,0,1,0,-1],"nx":[23,22,23,22,22],"ny":[6,2,14,3,4],"nz":[0,0,0,0,0]},{"size":4,"px":[6,4,7,15],"py":[4,2,6,17],"pz":[1,2,1,0],"nx":[3,8,3,14],"ny":[4,4,10,22],"nz":[1,1,-1,-1]},{"size":3,"px":[3,5,22],"py":[7,7,5],"pz":[1,-1,-1],"nx":[2,2,4],"ny":[5,2,7],"nz":[2,2,1]},{"size":5,"px":[7,6,5,6,3],"py":[0,1,2,2,0],"pz":[0,0,0,0,1],"nx":[0,1,1,0,1],"ny":[0,2,1,2,0],"nz":[2,0,0,1,0]},{"size":5,"px":[11,11,11,11,5],"py":[11,10,13,12,6],"pz":[0,0,0,0,-1],"nx":[15,14,5,2,8],"ny":[9,8,10,2,10],"nz":[0,0,1,2,0]},{"size":5,"px":[8,5,6,8,7],"py":[12,12,12,23,12],"pz":[0,0,0,0,0],"nx":[3,17,5,2,8],"ny":[4,0,10,2,10],"nz":[1,-1,-1,-1,-1]},{"size":5,"px":[10,10,10,19,20],"py":[8,10,9,15,13],"pz":[1,1,1,0,0],"nx":[23,11,5,23,23],"ny":[20,10,5,19,19],"nz":[0,1,2,0,-1]},{"size":5,"px":[9,13,3,10,12],"py":[2,0,0,1,1],"pz":[0,0,2,0,0],"nx":[3,3,6,7,7],"ny":[5,2,11,4,4],"nz":[2,2,1,1,-1]},{"size":2,"px":[15,7],"py":[17,6],"pz":[0,1],"nx":[14,0],"ny":[16,10],"nz":[0,-1]},{"size":5,"px":[17,15,18,12,19],"py":[22,12,13,7,15],"pz":[0,0,0,0,0],"nx":[8,15,6,1,7],"ny":[4,8,22,5,4],"nz":[1,-1,-1,-1,-1]},{"size":5,"px":[10,9,18,19,8],"py":[2,1,3,3,1],"pz":[1,1,0,0,1],"nx":[23,23,23,11,11],"ny":[0,1,2,0,1],"nz":[0,0,0,1,-1]},{"size":5,"px":[12,23,0,1,8],"py":[14,5,0,17,1],"pz":[0,-1,-1,-1,-1],"nx":[8,14,15,18,14],"ny":[10,11,14,19,10],"nz":[1,0,0,0,0]},{"size":2,"px":[4,6],"py":[6,13],"pz":[1,0],"nx":[4,12],"ny":[10,14],"nz":[1,-1]},{"size":5,"px":[5,23,11,23,13],"py":[3,10,4,11,12],"pz":[2,0,1,0,0],"nx":[7,4,9,8,8],"ny":[4,2,4,4,4],"nz":[1,2,1,1,-1]},{"size":3,"px":[9,5,11],"py":[4,2,4],"pz":[0,1,-1],"nx":[5,2,4],"ny":[0,1,2],"nz":[0,2,0]},{"size":5,"px":[5,2,2,5,8],"py":[12,4,4,6,13],"pz":[0,2,1,1,0],"nx":[3,9,4,4,8],"ny":[4,0,2,2,4],"nz":[1,-1,-1,-1,-1]},{"size":3,"px":[9,5,22],"py":[7,4,20],"pz":[1,-1,-1],"nx":[8,19,4],"ny":[4,18,5],"nz":[1,0,2]},{"size":5,"px":[2,3,3,3,3],"py":[10,16,15,14,13],"pz":[1,0,0,0,0],"nx":[0,0,0,1,0],"ny":[10,20,5,23,21],"nz":[1,0,2,0,0]},{"size":2,"px":[12,11],"py":[4,18],"pz":[0,0],"nx":[11,23],"ny":[17,13],"nz":[0,-1]},{"size":2,"px":[17,8],"py":[16,7],"pz":[0,1],"nx":[8,3],"ny":[4,6],"nz":[1,-1]},{"size":5,"px":[13,5,14,12,3],"py":[4,7,4,5,3],"pz":[0,1,0,0,1],"nx":[21,20,21,21,21],"ny":[2,0,4,3,3],"nz":[0,0,0,0,-1]},{"size":4,"px":[20,20,20,10],"py":[21,19,20,8],"pz":[0,0,0,1],"nx":[8,11,0,2],"ny":[10,8,1,3],"nz":[1,-1,-1,-1]},{"size":4,"px":[6,7,12,8],"py":[12,12,8,11],"pz":[0,0,0,0],"nx":[9,5,5,18],"ny":[9,2,0,20],"nz":[0,-1,-1,-1]},{"size":3,"px":[11,5,9],"py":[0,0,0],"pz":[0,1,0],"nx":[2,6,3],"ny":[3,7,4],"nz":[2,0,1]},{"size":5,"px":[18,18,9,17,17],"py":[15,14,7,14,14],"pz":[0,0,1,0,-1],"nx":[21,21,21,22,20],"ny":[15,21,17,14,23],"nz":[0,0,0,0,0]},{"size":5,"px":[9,12,12,7,4],"py":[4,11,12,6,5],"pz":[1,0,0,1,2],"nx":[16,11,9,6,20],"ny":[8,4,11,10,23],"nz":[0,-1,-1,-1,-1]},{"size":5,"px":[12,11,10,11,11],"py":[23,4,4,5,23],"pz":[0,0,0,0,0],"nx":[11,11,7,3,20],"ny":[21,21,11,1,23],"nz":[0,-1,-1,-1,-1]},{"size":2,"px":[12,1],"py":[12,3],"pz":[0,-1],"nx":[10,10],"ny":[3,2],"nz":[1,1]},{"size":5,"px":[9,4,15,9,9],"py":[8,4,23,7,7],"pz":[1,2,0,1,-1],"nx":[5,3,3,3,2],"ny":[23,19,17,18,15],"nz":[0,0,0,0,0]},{"size":2,"px":[2,0],"py":[16,3],"pz":[0,2],"nx":[9,4],"ny":[15,2],"nz":[0,-1]},{"size":2,"px":[2,3],"py":[3,7],"pz":[2,1],"nx":[3,8],"ny":[4,10],"nz":[1,-1]},{"size":3,"px":[9,4,3],"py":[18,0,14],"pz":[0,-1,-1],"nx":[3,5,2],"ny":[5,8,5],"nz":[2,1,2]},{"size":3,"px":[1,1,10],"py":[2,1,7],"pz":[1,-1,-1],"nx":[0,0,0],"ny":[3,5,1],"nz":[0,0,1]},{"size":4,"px":[11,11,5,2],"py":[12,13,7,3],"pz":[0,0,-1,-1],"nx":[5,10,10,9],"ny":[6,9,10,13],"nz":[1,0,0,0]},{"size":2,"px":[4,8],"py":[3,6],"pz":[2,1],"nx":[9,1],"ny":[4,3],"nz":[1,-1]},{"size":5,"px":[0,0,1,1,0],"py":[4,10,12,13,5],"pz":[1,0,0,0,1],"nx":[4,4,8,7,7],"ny":[3,2,10,4,4],"nz":[2,2,1,1,-1]},{"size":3,"px":[3,4,3],"py":[1,1,2],"pz":[1,-1,-1],"nx":[4,5,3],"ny":[1,0,2],"nz":[0,0,0]},{"size":2,"px":[9,2],"py":[6,4],"pz":[1,-1],"nx":[8,4],"ny":[6,2],"nz":[1,2]},{"size":5,"px":[12,13,15,16,7],"py":[1,1,2,2,1],"pz":[0,0,0,0,1],"nx":[4,4,4,3,7],"ny":[2,2,4,2,4],"nz":[2,-1,-1,-1,-1]},{"size":5,"px":[9,3,2,11,5],"py":[23,7,4,10,6],"pz":[0,1,2,0,1],"nx":[21,20,11,21,21],"ny":[21,23,8,20,20],"nz":[0,0,1,0,-1]},{"size":4,"px":[12,6,13,12],"py":[7,3,5,6],"pz":[0,1,0,0],"nx":[3,0,5,10],"ny":[4,6,5,1],"nz":[1,-1,-1,-1]},{"size":2,"px":[10,4],"py":[4,0],"pz":[0,-1],"nx":[12,11],"ny":[2,1],"nz":[0,0]},{"size":4,"px":[2,3,22,5],"py":[6,1,18,5],"pz":[1,-1,-1,-1],"nx":[0,0,0,3],"ny":[14,3,12,18],"nz":[0,2,0,0]},{"size":3,"px":[10,20,21],"py":[10,18,15],"pz":[1,0,0],"nx":[15,1,2],"ny":[7,0,8],"nz":[0,-1,-1]},{"size":5,"px":[0,0,0,0,0],"py":[4,7,13,4,6],"pz":[1,1,0,2,1],"nx":[5,9,8,4,4],"ny":[3,7,7,3,3],"nz":[1,0,0,1,-1]},{"size":3,"px":[13,12,14],"py":[2,2,2],"pz":[0,0,0],"nx":[4,4,4],"ny":[2,2,5],"nz":[2,-1,-1]},{"size":5,"px":[5,4,6,2,12],"py":[7,9,7,4,10],"pz":[0,1,0,2,0],"nx":[6,1,2,5,2],"ny":[9,2,4,13,4],"nz":[0,-1,-1,-1,-1]},{"size":2,"px":[11,1],"py":[12,5],"pz":[0,-1],"nx":[1,0],"ny":[7,2],"nz":[0,2]},{"size":5,"px":[8,8,1,16,6],"py":[6,6,4,8,11],"pz":[1,-1,-1,-1,-1],"nx":[13,5,4,4,13],"ny":[12,1,2,5,11],"nz":[0,2,2,2,0]},{"size":2,"px":[5,6],"py":[4,14],"pz":[1,0],"nx":[9,5],"ny":[7,1],"nz":[0,-1]},{"size":2,"px":[2,6],"py":[4,14],"pz":[2,0],"nx":[9,2],"ny":[15,1],"nz":[0,-1]},{"size":5,"px":[10,19,20,10,9],"py":[1,2,3,0,0],"pz":[1,0,0,1,-1],"nx":[11,23,23,11,23],"ny":[0,3,1,1,2],"nz":[1,0,0,1,0]},{"size":2,"px":[2,9],"py":[3,12],"pz":[2,0],"nx":[2,6],"ny":[4,6],"nz":[1,-1]},{"size":5,"px":[0,0,0,0,0],"py":[4,10,11,9,9],"pz":[1,0,0,0,-1],"nx":[16,2,17,8,4],"ny":[10,2,9,4,4],"nz":[0,2,0,1,1]},{"size":2,"px":[12,0],"py":[5,4],"pz":[0,-1],"nx":[7,8],"ny":[4,8],"nz":[1,1]},{"size":2,"px":[21,21],"py":[9,10],"pz":[0,0],"nx":[11,8],"ny":[18,8],"nz":[0,-1]},{"size":2,"px":[14,7],"py":[23,9],"pz":[0,1],"nx":[7,13],"ny":[10,4],"nz":[1,-1]},{"size":5,"px":[12,12,12,6,2],"py":[11,13,12,6,4],"pz":[0,0,0,-1,-1],"nx":[0,0,0,0,0],"ny":[14,13,6,12,11],"nz":[0,0,1,0,0]},{"size":2,"px":[8,9],"py":[6,11],"pz":[1,-1],"nx":[15,15],"ny":[11,10],"nz":[0,0]},{"size":4,"px":[4,6,7,2],"py":[8,4,23,7],"pz":[1,-1,-1,-1],"nx":[4,20,19,17],"ny":[0,3,1,1],"nz":[2,0,0,0]},{"size":2,"px":[7,0],"py":[6,0],"pz":[1,-1],"nx":[7,4],"ny":[8,2],"nz":[1,2]},{"size":2,"px":[10,0],"py":[7,0],"pz":[1,-1],"nx":[15,15],"ny":[15,14],"nz":[0,0]},{"size":5,"px":[6,2,5,2,4],"py":[23,7,21,8,16],"pz":[0,1,0,1,0],"nx":[18,2,10,0,11],"ny":[9,3,23,5,3],"nz":[0,-1,-1,-1,-1]},{"size":5,"px":[9,9,8,10,4],"py":[0,2,2,1,1],"pz":[0,0,0,0,1],"nx":[4,3,2,2,5],"ny":[7,3,4,2,17],"nz":[0,1,2,2,0]},{"size":2,"px":[10,7],"py":[5,6],"pz":[1,-1],"nx":[11,11],"ny":[6,5],"nz":[1,1]},{"size":5,"px":[11,11,5,6,11],"py":[8,10,5,5,9],"pz":[0,0,1,1,0],"nx":[13,16,11,14,4],"ny":[9,13,11,20,23],"nz":[0,-1,-1,-1,-1]},{"size":2,"px":[7,14],"py":[14,22],"pz":[0,-1],"nx":[3,4],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[4,11],"py":[4,5],"pz":[2,-1],"nx":[2,4],"ny":[5,7],"nz":[2,1]},{"size":2,"px":[1,0],"py":[0,0],"pz":[0,1],"nx":[0,4],"ny":[0,2],"nz":[0,-1]},{"size":5,"px":[11,11,11,4,9],"py":[5,5,2,9,23],"pz":[0,-1,-1,-1,-1],"nx":[11,12,10,9,5],"ny":[2,2,2,2,1],"nz":[0,0,0,0,1]},{"size":3,"px":[16,14,15],"py":[1,1,0],"pz":[0,0,0],"nx":[4,7,4],"ny":[2,4,4],"nz":[2,1,-1]},{"size":2,"px":[5,0],"py":[14,5],"pz":[0,-1],"nx":[2,4],"ny":[5,17],"nz":[2,0]},{"size":5,"px":[18,7,16,19,4],"py":[13,6,23,13,3],"pz":[0,1,0,0,2],"nx":[5,2,3,4,4],"ny":[1,1,4,1,3],"nz":[0,1,0,0,0]},{"size":2,"px":[8,8],"py":[7,6],"pz":[1,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[2,1],"py":[10,4],"pz":[1,2],"nx":[4,4],"ny":[3,3],"nz":[2,-1]},{"size":2,"px":[10,5],"py":[19,1],"pz":[0,-1],"nx":[4,12],"ny":[10,17],"nz":[1,0]},{"size":5,"px":[12,6,2,4,11],"py":[14,4,2,1,5],"pz":[0,-1,-1,-1,-1],"nx":[3,4,3,4,3],"ny":[13,17,14,16,15],"nz":[0,0,0,0,0]}],"alpha":[-1.368326e+00,1.368326e+00,-7.706897e-01,7.706897e-01,-8.378147e-01,8.378147e-01,-6.120624e-01,6.120624e-01,-5.139189e-01,5.139189e-01,-4.759130e-01,4.759130e-01,-5.161374e-01,5.161374e-01,-5.407743e-01,5.407743e-01,-4.216105e-01,4.216105e-01,-4.418693e-01,4.418693e-01,-4.435335e-01,4.435335e-01,-4.052076e-01,4.052076e-01,-4.293050e-01,4.293050e-01,-3.431154e-01,3.431154e-01,-4.231203e-01,4.231203e-01,-3.917100e-01,3.917100e-01,-3.623450e-01,3.623450e-01,-3.202670e-01,3.202670e-01,-3.331602e-01,3.331602e-01,-3.552034e-01,3.552034e-01,-3.784556e-01,3.784556e-01,-3.295428e-01,3.295428e-01,-3.587038e-01,3.587038e-01,-2.861332e-01,2.861332e-01,-3.403258e-01,3.403258e-01,-3.989002e-01,3.989002e-01,-2.631159e-01,2.631159e-01,-3.272156e-01,3.272156e-01,-2.816567e-01,2.816567e-01,-3.125926e-01,3.125926e-01,-3.146982e-01,3.146982e-01,-2.521825e-01,2.521825e-01,-2.434554e-01,2.434554e-01,-3.435378e-01,3.435378e-01,-3.161172e-01,3.161172e-01,-2.805027e-01,2.805027e-01,-3.303579e-01,3.303579e-01,-2.725089e-01,2.725089e-01,-2.575051e-01,2.575051e-01,-3.210646e-01,3.210646e-01,-2.986997e-01,2.986997e-01,-2.408925e-01,2.408925e-01,-2.456291e-01,2.456291e-01,-2.836550e-01,2.836550e-01,-2.469860e-01,2.469860e-01,-2.915900e-01,2.915900e-01,-2.513559e-01,2.513559e-01,-2.433728e-01,2.433728e-01,-2.377905e-01,2.377905e-01,-2.089327e-01,2.089327e-01,-1.978434e-01,1.978434e-01,-3.017699e-01,3.017699e-01,-2.339661e-01,2.339661e-01,-1.932560e-01,1.932560e-01,-2.278285e-01,2.278285e-01,-2.438200e-01,2.438200e-01,-2.216769e-01,2.216769e-01,-1.941995e-01,1.941995e-01,-2.129081e-01,2.129081e-01,-2.270319e-01,2.270319e-01,-2.393942e-01,2.393942e-01,-2.132518e-01,2.132518e-01,-1.867741e-01,1.867741e-01,-2.394237e-01,2.394237e-01,-2.005917e-01,2.005917e-01,-2.445217e-01,2.445217e-01,-2.229078e-01,2.229078e-01,-2.342967e-01,2.342967e-01,-2.481784e-01,2.481784e-01,-2.735603e-01,2.735603e-01,-2.187604e-01,2.187604e-01,-1.677239e-01,1.677239e-01,-2.248867e-01,2.248867e-01,-2.505358e-01,2.505358e-01,-1.867706e-01,1.867706e-01,-1.904305e-01,1.904305e-01,-1.939881e-01,1.939881e-01,-2.249474e-01,2.249474e-01,-1.762483e-01,1.762483e-01,-2.299974e-01,2.299974e-01]},{"count":115,"threshold":-5.151920e+00,"feature":[{"size":5,"px":[7,14,7,10,6],"py":[3,3,12,4,4],"pz":[0,0,0,0,1],"nx":[14,3,14,9,3],"ny":[7,4,8,8,5],"nz":[0,1,0,0,2]},{"size":5,"px":[13,18,16,17,15],"py":[1,13,1,2,0],"pz":[0,0,0,0,0],"nx":[23,23,8,11,22],"ny":[3,4,4,8,0],"nz":[0,0,1,1,0]},{"size":5,"px":[16,6,6,7,12],"py":[12,13,4,12,5],"pz":[0,0,1,0,0],"nx":[0,0,8,4,0],"ny":[0,2,4,4,2],"nz":[0,0,1,1,-1]},{"size":3,"px":[12,13,7],"py":[13,18,6],"pz":[0,0,1],"nx":[13,5,6],"ny":[16,3,8],"nz":[0,-1,-1]},{"size":5,"px":[10,12,9,13,11],"py":[3,3,3,3,3],"pz":[0,0,0,0,0],"nx":[3,4,15,4,4],"ny":[2,5,10,4,4],"nz":[2,1,0,1,-1]},{"size":5,"px":[12,12,12,3,12],"py":[7,9,8,3,10],"pz":[0,0,0,2,0],"nx":[4,8,15,9,9],"ny":[4,4,8,8,8],"nz":[1,1,0,0,-1]},{"size":5,"px":[6,3,4,4,2],"py":[22,12,13,14,7],"pz":[0,0,0,0,1],"nx":[2,0,1,1,1],"ny":[23,5,22,21,21],"nz":[0,2,0,0,-1]},{"size":2,"px":[3,3],"py":[8,8],"pz":[1,-1],"nx":[3,4],"ny":[4,10],"nz":[1,1]},{"size":5,"px":[11,11,11,11,0],"py":[10,12,11,13,2],"pz":[0,0,0,-1,-1],"nx":[8,13,13,13,13],"ny":[10,8,9,11,10],"nz":[1,0,0,0,0]},{"size":5,"px":[16,16,15,17,18],"py":[12,23,11,12,12],"pz":[0,0,0,0,0],"nx":[8,8,9,3,13],"ny":[4,4,12,3,10],"nz":[1,-1,-1,-1,-1]},{"size":4,"px":[17,16,6,5],"py":[14,13,4,5],"pz":[0,0,-1,-1],"nx":[8,15,4,7],"ny":[10,14,4,8],"nz":[1,0,2,1]},{"size":5,"px":[20,10,20,21,19],"py":[14,7,13,12,22],"pz":[0,1,0,0,0],"nx":[22,23,11,23,23],"ny":[23,22,11,21,20],"nz":[0,0,1,0,-1]},{"size":4,"px":[12,13,1,18],"py":[14,23,3,5],"pz":[0,-1,-1,-1],"nx":[2,10,5,9],"ny":[2,9,8,14],"nz":[2,0,1,0]},{"size":5,"px":[10,4,7,9,8],"py":[1,0,2,0,1],"pz":[0,1,0,0,0],"nx":[2,3,5,3,3],"ny":[2,4,8,3,3],"nz":[2,1,1,1,-1]},{"size":4,"px":[11,2,2,11],"py":[6,4,5,7],"pz":[0,2,2,0],"nx":[3,0,5,3],"ny":[4,9,8,3],"nz":[1,-1,-1,-1]},{"size":5,"px":[12,10,9,12,12],"py":[11,2,1,10,10],"pz":[0,1,1,0,-1],"nx":[22,11,5,22,23],"ny":[1,1,0,0,3],"nz":[0,1,2,0,0]},{"size":4,"px":[5,10,7,11],"py":[14,3,0,4],"pz":[0,-1,-1,-1],"nx":[4,4,4,4],"ny":[17,18,15,16],"nz":[0,0,0,0]},{"size":5,"px":[2,2,3,2,2],"py":[16,12,20,15,17],"pz":[0,0,0,0,0],"nx":[12,8,4,15,15],"ny":[17,4,4,8,8],"nz":[0,1,1,0,-1]},{"size":5,"px":[12,12,1,6,12],"py":[11,10,3,6,10],"pz":[0,0,-1,-1,-1],"nx":[0,0,1,0,2],"ny":[4,0,2,1,0],"nz":[0,2,0,1,0]},{"size":5,"px":[21,20,21,21,14],"py":[9,16,11,8,12],"pz":[0,0,0,0,0],"nx":[17,6,15,0,2],"ny":[8,23,13,2,0],"nz":[0,-1,-1,-1,-1]},{"size":4,"px":[6,9,9,5],"py":[14,18,23,14],"pz":[0,0,0,0],"nx":[9,5,5,12],"ny":[21,5,3,1],"nz":[0,-1,-1,-1]},{"size":2,"px":[12,13],"py":[4,4],"pz":[0,0],"nx":[4,3],"ny":[4,1],"nz":[1,2]},{"size":5,"px":[7,8,11,4,10],"py":[3,3,2,1,2],"pz":[0,0,0,1,0],"nx":[19,20,19,20,20],"ny":[0,3,1,2,2],"nz":[0,0,0,0,-1]},{"size":2,"px":[9,1],"py":[7,4],"pz":[1,-1],"nx":[4,7],"ny":[5,9],"nz":[2,1]},{"size":5,"px":[11,10,1,5,1],"py":[10,12,6,6,5],"pz":[0,0,1,1,1],"nx":[16,3,2,4,4],"ny":[10,4,2,4,4],"nz":[0,1,2,1,-1]},{"size":2,"px":[15,0],"py":[17,0],"pz":[0,-1],"nx":[7,4],"ny":[8,5],"nz":[1,2]},{"size":5,"px":[8,10,9,9,9],"py":[2,2,2,1,1],"pz":[0,0,0,0,-1],"nx":[4,2,3,3,2],"ny":[0,3,2,1,4],"nz":[0,0,0,0,0]},{"size":4,"px":[11,15,17,16],"py":[8,10,11,11],"pz":[0,0,0,0],"nx":[14,1,1,2],"ny":[9,5,7,0],"nz":[0,-1,-1,-1]},{"size":3,"px":[3,5,9],"py":[8,6,12],"pz":[0,1,0],"nx":[3,4,18],"ny":[4,2,22],"nz":[1,-1,-1]},{"size":5,"px":[6,1,7,3,3],"py":[13,4,13,7,7],"pz":[0,2,0,1,-1],"nx":[0,0,0,0,0],"ny":[16,15,8,13,14],"nz":[0,0,1,0,0]},{"size":2,"px":[5,16],"py":[13,10],"pz":[0,-1],"nx":[3,4],"ny":[4,5],"nz":[1,1]},{"size":5,"px":[5,23,11,23,23],"py":[5,12,4,16,15],"pz":[2,0,1,0,0],"nx":[3,2,4,5,5],"ny":[4,2,4,11,11],"nz":[1,2,1,1,-1]},{"size":4,"px":[10,10,3,23],"py":[7,7,3,16],"pz":[1,-1,-1,-1],"nx":[5,23,11,22],"ny":[4,13,7,16],"nz":[2,0,1,0]},{"size":5,"px":[15,14,13,15,16],"py":[1,0,0,0,1],"pz":[0,0,0,0,0],"nx":[4,9,8,8,8],"ny":[2,4,9,4,4],"nz":[2,1,1,1,-1]},{"size":2,"px":[10,4],"py":[5,5],"pz":[0,-1],"nx":[3,15],"ny":[1,8],"nz":[2,0]},{"size":2,"px":[6,12],"py":[6,9],"pz":[1,0],"nx":[10,10],"ny":[10,10],"nz":[0,-1]},{"size":5,"px":[1,0,0,0,0],"py":[5,4,11,9,12],"pz":[0,1,0,0,0],"nx":[9,8,2,4,7],"ny":[7,7,2,4,7],"nz":[0,0,2,1,0]},{"size":2,"px":[4,8],"py":[4,7],"pz":[2,1],"nx":[9,8],"ny":[4,7],"nz":[1,-1]},{"size":2,"px":[5,6],"py":[4,1],"pz":[2,-1],"nx":[8,6],"ny":[7,3],"nz":[1,1]},{"size":5,"px":[8,5,7,6,11],"py":[12,5,13,13,22],"pz":[0,1,0,0,0],"nx":[23,23,23,22,22],"ny":[20,19,21,23,23],"nz":[0,0,0,0,-1]},{"size":2,"px":[3,17],"py":[6,9],"pz":[1,-1],"nx":[3,3],"ny":[10,9],"nz":[1,1]},{"size":2,"px":[14,11],"py":[23,5],"pz":[0,0],"nx":[7,3],"ny":[10,20],"nz":[1,-1]},{"size":2,"px":[3,4],"py":[8,8],"pz":[1,1],"nx":[9,4],"ny":[15,4],"nz":[0,-1]},{"size":2,"px":[2,4],"py":[4,7],"pz":[2,1],"nx":[2,4],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[23,11],"py":[21,10],"pz":[0,1],"nx":[2,3],"ny":[11,14],"nz":[1,0]},{"size":4,"px":[11,11,11,3],"py":[13,12,11,4],"pz":[0,0,0,-1],"nx":[14,13,13,6],"ny":[13,11,10,5],"nz":[0,0,0,1]},{"size":2,"px":[4,7],"py":[3,6],"pz":[2,1],"nx":[9,19],"ny":[4,14],"nz":[1,-1]},{"size":3,"px":[10,5,7],"py":[5,0,6],"pz":[1,-1,-1],"nx":[10,21,5],"ny":[0,5,3],"nz":[1,0,2]},{"size":2,"px":[16,13],"py":[3,15],"pz":[0,-1],"nx":[17,7],"ny":[23,8],"nz":[0,1]},{"size":3,"px":[4,2,2],"py":[15,7,19],"pz":[0,1,-1],"nx":[2,8,4],"ny":[5,14,9],"nz":[2,0,1]},{"size":3,"px":[8,3,6],"py":[10,2,4],"pz":[0,2,1],"nx":[3,8,4],"ny":[4,14,9],"nz":[1,-1,-1]},{"size":2,"px":[14,3],"py":[18,3],"pz":[0,-1],"nx":[12,14],"ny":[17,9],"nz":[0,0]},{"size":3,"px":[7,1,10],"py":[14,10,10],"pz":[0,-1,-1],"nx":[9,6,2],"ny":[13,18,2],"nz":[0,0,2]},{"size":2,"px":[11,8],"py":[13,11],"pz":[0,-1],"nx":[2,4],"ny":[7,18],"nz":[1,0]},{"size":2,"px":[5,4],"py":[21,17],"pz":[0,0],"nx":[9,3],"ny":[5,1],"nz":[1,-1]},{"size":2,"px":[6,6],"py":[4,0],"pz":[0,-1],"nx":[4,3],"ny":[2,0],"nz":[0,1]},{"size":2,"px":[2,1],"py":[1,5],"pz":[0,-1],"nx":[0,1],"ny":[1,0],"nz":[1,0]},{"size":2,"px":[18,1],"py":[13,5],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":5,"px":[0,0,0,0,1],"py":[4,3,2,12,15],"pz":[1,1,2,0,0],"nx":[5,9,4,8,8],"ny":[3,6,3,6,6],"nz":[1,0,1,0,-1]},{"size":2,"px":[2,5],"py":[0,2],"pz":[1,-1],"nx":[2,1],"ny":[0,1],"nz":[0,1]},{"size":4,"px":[7,15,4,20],"py":[8,23,4,8],"pz":[1,0,2,0],"nx":[6,0,3,4],"ny":[9,2,13,6],"nz":[0,-1,-1,-1]},{"size":4,"px":[11,11,10,20],"py":[10,9,11,8],"pz":[0,0,0,-1],"nx":[21,20,21,21],"ny":[18,23,19,17],"nz":[0,0,0,0]},{"size":2,"px":[3,8],"py":[7,5],"pz":[1,-1],"nx":[3,4],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[5,11],"py":[3,4],"pz":[2,1],"nx":[8,7],"ny":[5,12],"nz":[1,0]},{"size":2,"px":[4,1],"py":[1,3],"pz":[1,-1],"nx":[3,6],"ny":[0,0],"nz":[1,0]},{"size":2,"px":[19,9],"py":[16,8],"pz":[0,1],"nx":[14,6],"ny":[15,1],"nz":[0,-1]},{"size":2,"px":[12,6],"py":[13,5],"pz":[0,-1],"nx":[5,5],"ny":[1,2],"nz":[2,2]},{"size":5,"px":[16,14,4,15,12],"py":[1,1,1,2,1],"pz":[0,0,2,0,0],"nx":[6,4,3,2,10],"ny":[22,8,2,1,7],"nz":[0,1,1,2,0]},{"size":5,"px":[6,8,6,5,5],"py":[1,0,0,1,0],"pz":[0,0,0,0,0],"nx":[4,4,4,4,8],"ny":[4,3,2,5,10],"nz":[2,2,2,2,1]},{"size":2,"px":[9,8],"py":[17,0],"pz":[0,-1],"nx":[2,5],"ny":[5,8],"nz":[2,1]},{"size":2,"px":[8,0],"py":[7,3],"pz":[1,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[10,21],"py":[11,20],"pz":[1,0],"nx":[11,4],"ny":[17,1],"nz":[0,-1]},{"size":5,"px":[5,10,4,17,10],"py":[3,6,3,11,5],"pz":[1,0,1,0,0],"nx":[21,20,9,19,10],"ny":[4,3,0,2,1],"nz":[0,0,1,0,-1]},{"size":2,"px":[23,23],"py":[10,10],"pz":[0,-1],"nx":[23,23],"ny":[21,22],"nz":[0,0]},{"size":5,"px":[9,20,19,20,20],"py":[0,3,1,2,2],"pz":[1,0,0,0,-1],"nx":[11,23,11,23,5],"ny":[1,2,0,1,0],"nz":[1,0,1,0,2]},{"size":3,"px":[6,8,7],"py":[4,10,11],"pz":[1,0,0],"nx":[8,3,4],"ny":[9,4,4],"nz":[0,-1,-1]},{"size":4,"px":[13,13,10,4],"py":[14,23,1,5],"pz":[0,-1,-1,-1],"nx":[15,14,8,8],"ny":[13,12,8,9],"nz":[0,0,1,1]},{"size":2,"px":[11,9],"py":[5,8],"pz":[0,-1],"nx":[7,8],"ny":[7,4],"nz":[0,1]},{"size":5,"px":[4,8,4,7,7],"py":[2,3,3,11,11],"pz":[2,1,2,1,-1],"nx":[0,0,1,0,0],"ny":[4,6,15,3,2],"nz":[1,1,0,2,2]},{"size":2,"px":[6,1],"py":[12,1],"pz":[0,-1],"nx":[1,10],"ny":[2,11],"nz":[2,0]},{"size":5,"px":[0,0,2,3,7],"py":[0,1,4,3,11],"pz":[0,-1,-1,-1,-1],"nx":[9,11,9,6,12],"ny":[2,1,1,0,2],"nz":[0,0,0,1,0]},{"size":2,"px":[10,11],"py":[4,4],"pz":[0,0],"nx":[8,4],"ny":[4,2],"nz":[1,-1]},{"size":5,"px":[1,1,1,1,1],"py":[15,10,19,16,18],"pz":[0,1,0,0,0],"nx":[4,5,3,5,6],"ny":[4,19,9,18,19],"nz":[1,0,1,0,-1]},{"size":5,"px":[12,12,12,12,20],"py":[11,12,13,13,18],"pz":[0,0,0,-1,-1],"nx":[0,0,0,0,0],"ny":[4,2,7,6,12],"nz":[1,2,1,1,0]},{"size":2,"px":[0,0],"py":[9,11],"pz":[0,0],"nx":[10,4],"ny":[5,3],"nz":[1,-1]},{"size":2,"px":[11,8],"py":[9,6],"pz":[0,1],"nx":[13,13],"ny":[10,10],"nz":[0,-1]},{"size":2,"px":[6,3],"py":[5,3],"pz":[1,2],"nx":[3,3],"ny":[5,5],"nz":[2,-1]},{"size":2,"px":[19,9],"py":[10,6],"pz":[0,1],"nx":[4,1],"ny":[2,2],"nz":[2,-1]},{"size":2,"px":[14,4],"py":[19,12],"pz":[0,-1],"nx":[14,8],"ny":[17,10],"nz":[0,1]},{"size":4,"px":[4,2,13,2],"py":[12,6,9,3],"pz":[0,1,-1,-1],"nx":[1,0,1,0],"ny":[16,14,11,15],"nz":[0,0,1,0]},{"size":2,"px":[3,3],"py":[8,7],"pz":[1,1],"nx":[4,4],"ny":[4,8],"nz":[1,-1]},{"size":5,"px":[9,11,12,6,10],"py":[2,1,2,1,2],"pz":[0,0,0,1,0],"nx":[4,6,4,6,2],"ny":[4,0,9,1,8],"nz":[0,0,1,0,1]},{"size":5,"px":[4,4,7,2,2],"py":[19,20,23,8,9],"pz":[0,0,0,1,1],"nx":[7,0,5,6,2],"ny":[10,5,4,1,8],"nz":[1,-1,-1,-1,-1]},{"size":5,"px":[18,18,17,18,18],"py":[15,16,14,20,17],"pz":[0,0,0,0,0],"nx":[15,2,2,5,2],"ny":[8,0,2,9,4],"nz":[0,-1,-1,-1,-1]},{"size":4,"px":[13,13,13,18],"py":[11,12,12,20],"pz":[0,0,-1,-1],"nx":[1,3,10,10],"ny":[1,6,12,11],"nz":[2,0,0,0]},{"size":2,"px":[8,9],"py":[0,1],"pz":[1,1],"nx":[19,4],"ny":[2,2],"nz":[0,-1]},{"size":2,"px":[6,3],"py":[4,2],"pz":[1,2],"nx":[8,4],"ny":[4,0],"nz":[1,-1]},{"size":5,"px":[23,11,22,13,13],"py":[8,3,3,12,12],"pz":[0,1,0,0,-1],"nx":[15,7,14,13,8],"ny":[7,3,6,6,3],"nz":[0,1,0,0,1]},{"size":3,"px":[9,11,19],"py":[7,3,0],"pz":[1,-1,-1],"nx":[23,23,11],"ny":[16,12,7],"nz":[0,0,1]},{"size":2,"px":[15,8],"py":[23,7],"pz":[0,-1],"nx":[4,3],"ny":[5,4],"nz":[2,2]},{"size":2,"px":[4,10],"py":[6,13],"pz":[1,-1],"nx":[2,3],"ny":[4,10],"nz":[2,1]},{"size":2,"px":[4,1],"py":[11,2],"pz":[1,2],"nx":[9,2],"ny":[5,2],"nz":[1,-1]},{"size":2,"px":[22,22],"py":[22,21],"pz":[0,0],"nx":[3,0],"ny":[5,3],"nz":[1,-1]},{"size":2,"px":[20,10],"py":[12,6],"pz":[0,1],"nx":[20,10],"ny":[23,11],"nz":[0,-1]},{"size":4,"px":[10,3,3,4],"py":[5,3,4,9],"pz":[0,-1,-1,-1],"nx":[14,4,3,11],"ny":[2,1,1,3],"nz":[0,2,2,0]},{"size":3,"px":[15,15,3],"py":[1,1,4],"pz":[0,-1,-1],"nx":[7,4,4],"ny":[8,2,3],"nz":[1,2,2]},{"size":3,"px":[0,0,0],"py":[3,4,6],"pz":[2,2,1],"nx":[0,21,4],"ny":[23,14,3],"nz":[0,-1,-1]},{"size":5,"px":[4,4,5,3,4],"py":[9,11,8,4,8],"pz":[1,1,1,2,1],"nx":[21,21,10,19,19],"ny":[3,4,1,0,0],"nz":[0,0,1,0,-1]},{"size":4,"px":[21,20,20,21],"py":[18,21,20,17],"pz":[0,0,0,0],"nx":[8,1,4,2],"ny":[10,0,2,4],"nz":[1,-1,-1,-1]},{"size":2,"px":[3,6],"py":[7,14],"pz":[1,0],"nx":[3,5],"ny":[4,5],"nz":[1,-1]},{"size":3,"px":[12,0,23],"py":[20,2,13],"pz":[0,-1,-1],"nx":[12,2,9],"ny":[19,2,7],"nz":[0,2,0]},{"size":2,"px":[0,6],"py":[22,11],"pz":[0,-1],"nx":[20,18],"ny":[12,23],"nz":[0,0]},{"size":5,"px":[9,15,15,16,8],"py":[2,1,2,2,1],"pz":[1,0,0,0,1],"nx":[1,1,1,1,1],"ny":[16,10,17,18,18],"nz":[0,1,0,0,-1]},{"size":5,"px":[10,5,3,5,8],"py":[14,2,1,4,1],"pz":[0,-1,-1,-1,-1],"nx":[23,23,23,23,23],"ny":[18,15,16,14,17],"nz":[0,0,0,0,0]},{"size":5,"px":[2,2,2,3,2],"py":[16,17,15,20,11],"pz":[0,0,0,0,1],"nx":[8,22,2,1,23],"ny":[20,11,5,0,17],"nz":[0,-1,-1,-1,-1]}],"alpha":[-1.299972e+00,1.299972e+00,-7.630804e-01,7.630804e-01,-5.530378e-01,5.530378e-01,-5.444703e-01,5.444703e-01,-5.207701e-01,5.207701e-01,-5.035143e-01,5.035143e-01,-4.514416e-01,4.514416e-01,-4.897723e-01,4.897723e-01,-5.006264e-01,5.006264e-01,-4.626049e-01,4.626049e-01,-4.375402e-01,4.375402e-01,-3.742565e-01,3.742565e-01,-3.873996e-01,3.873996e-01,-3.715484e-01,3.715484e-01,-3.562480e-01,3.562480e-01,-3.216189e-01,3.216189e-01,-3.983409e-01,3.983409e-01,-3.191891e-01,3.191891e-01,-3.242173e-01,3.242173e-01,-3.528040e-01,3.528040e-01,-3.562318e-01,3.562318e-01,-3.592398e-01,3.592398e-01,-2.557584e-01,2.557584e-01,-2.747951e-01,2.747951e-01,-2.747554e-01,2.747554e-01,-2.980481e-01,2.980481e-01,-2.887670e-01,2.887670e-01,-3.895318e-01,3.895318e-01,-2.786896e-01,2.786896e-01,-2.763841e-01,2.763841e-01,-2.704816e-01,2.704816e-01,-2.075489e-01,2.075489e-01,-3.104773e-01,3.104773e-01,-2.580337e-01,2.580337e-01,-2.448334e-01,2.448334e-01,-3.054279e-01,3.054279e-01,-2.335804e-01,2.335804e-01,-2.972322e-01,2.972322e-01,-2.270521e-01,2.270521e-01,-2.134621e-01,2.134621e-01,-2.261655e-01,2.261655e-01,-2.091024e-01,2.091024e-01,-2.478928e-01,2.478928e-01,-2.468972e-01,2.468972e-01,-1.919746e-01,1.919746e-01,-2.756623e-01,2.756623e-01,-2.629717e-01,2.629717e-01,-2.198653e-01,2.198653e-01,-2.174434e-01,2.174434e-01,-2.193626e-01,2.193626e-01,-1.956262e-01,1.956262e-01,-1.720459e-01,1.720459e-01,-1.781067e-01,1.781067e-01,-1.773484e-01,1.773484e-01,-1.793871e-01,1.793871e-01,-1.973396e-01,1.973396e-01,-2.397262e-01,2.397262e-01,-2.164685e-01,2.164685e-01,-2.214348e-01,2.214348e-01,-2.265941e-01,2.265941e-01,-2.075436e-01,2.075436e-01,-2.244070e-01,2.244070e-01,-2.291992e-01,2.291992e-01,-2.223506e-01,2.223506e-01,-1.639398e-01,1.639398e-01,-1.732374e-01,1.732374e-01,-1.808631e-01,1.808631e-01,-1.860962e-01,1.860962e-01,-1.781604e-01,1.781604e-01,-2.108322e-01,2.108322e-01,-2.386390e-01,2.386390e-01,-1.942083e-01,1.942083e-01,-1.949161e-01,1.949161e-01,-1.953729e-01,1.953729e-01,-2.317591e-01,2.317591e-01,-2.335136e-01,2.335136e-01,-2.282835e-01,2.282835e-01,-2.148716e-01,2.148716e-01,-1.588127e-01,1.588127e-01,-1.566765e-01,1.566765e-01,-1.644839e-01,1.644839e-01,-2.386947e-01,2.386947e-01,-1.704126e-01,1.704126e-01,-2.213945e-01,2.213945e-01,-1.740398e-01,1.740398e-01,-2.451678e-01,2.451678e-01,-2.120524e-01,2.120524e-01,-1.886646e-01,1.886646e-01,-2.824447e-01,2.824447e-01,-1.900364e-01,1.900364e-01,-2.179183e-01,2.179183e-01,-2.257696e-01,2.257696e-01,-2.023404e-01,2.023404e-01,-1.886901e-01,1.886901e-01,-1.850663e-01,1.850663e-01,-2.035414e-01,2.035414e-01,-1.930174e-01,1.930174e-01,-1.898282e-01,1.898282e-01,-1.666640e-01,1.666640e-01,-1.646143e-01,1.646143e-01,-1.543475e-01,1.543475e-01,-1.366289e-01,1.366289e-01,-1.636837e-01,1.636837e-01,-2.547716e-01,2.547716e-01,-1.281869e-01,1.281869e-01,-1.509159e-01,1.509159e-01,-1.447827e-01,1.447827e-01,-1.626126e-01,1.626126e-01,-2.387014e-01,2.387014e-01,-2.571160e-01,2.571160e-01,-1.719175e-01,1.719175e-01,-1.646742e-01,1.646742e-01,-1.717041e-01,1.717041e-01,-2.039217e-01,2.039217e-01,-1.796907e-01,1.796907e-01]},{"count":153,"threshold":-4.971032e+00,"feature":[{"size":5,"px":[14,13,18,10,16],"py":[2,2,13,3,12],"pz":[0,0,0,0,0],"nx":[21,7,14,23,23],"ny":[16,7,8,3,13],"nz":[0,1,0,0,0]},{"size":5,"px":[12,12,12,15,14],"py":[9,10,11,3,3],"pz":[0,0,0,0,0],"nx":[9,9,8,14,3],"ny":[9,8,5,9,5],"nz":[0,0,1,0,2]},{"size":5,"px":[5,11,7,6,8],"py":[12,8,12,12,11],"pz":[0,0,0,0,0],"nx":[8,4,3,9,9],"ny":[4,4,4,9,9],"nz":[1,1,1,0,-1]},{"size":5,"px":[9,8,4,10,6],"py":[2,2,1,3,13],"pz":[0,0,1,0,0],"nx":[1,1,5,1,1],"ny":[2,3,8,4,16],"nz":[0,0,1,0,0]},{"size":5,"px":[3,16,6,17,15],"py":[2,17,4,12,12],"pz":[2,0,1,0,0],"nx":[4,8,15,1,1],"ny":[4,4,8,16,16],"nz":[1,1,-1,-1,-1]},{"size":4,"px":[18,15,8,17],"py":[12,23,6,12],"pz":[0,0,1,0],"nx":[15,4,10,5],"ny":[21,8,14,3],"nz":[0,-1,-1,-1]},{"size":5,"px":[18,17,9,19,19],"py":[3,1,0,3,3],"pz":[0,0,1,0,-1],"nx":[22,11,23,23,23],"ny":[0,1,2,3,4],"nz":[0,1,0,0,0]},{"size":4,"px":[9,5,5,10],"py":[18,15,14,18],"pz":[0,0,0,0],"nx":[10,11,2,0],"ny":[16,7,12,7],"nz":[0,-1,-1,-1]},{"size":2,"px":[2,12],"py":[4,6],"pz":[2,0],"nx":[3,12],"ny":[4,19],"nz":[1,-1]},{"size":5,"px":[3,4,5,2,2],"py":[3,3,3,1,1],"pz":[0,0,0,1,-1],"nx":[0,0,1,0,0],"ny":[3,4,0,1,2],"nz":[0,0,0,1,0]},{"size":5,"px":[12,12,12,8,10],"py":[13,12,12,1,18],"pz":[0,0,-1,-1,-1],"nx":[13,8,7,14,9],"ny":[10,10,7,13,4],"nz":[0,1,1,0,1]},{"size":5,"px":[15,4,12,14,12],"py":[12,3,9,10,8],"pz":[0,2,0,0,0],"nx":[14,7,11,2,9],"ny":[8,4,7,5,4],"nz":[0,1,-1,-1,-1]},{"size":3,"px":[3,9,7],"py":[7,23,15],"pz":[1,-1,-1],"nx":[4,4,2],"ny":[9,7,5],"nz":[1,1,2]},{"size":3,"px":[5,17,5],"py":[3,23,4],"pz":[2,0,2],"nx":[23,2,4],"ny":[23,16,4],"nz":[0,-1,-1]},{"size":5,"px":[4,9,9,10,8],"py":[1,0,1,0,2],"pz":[1,0,0,0,0],"nx":[2,5,4,2,2],"ny":[2,19,11,4,1],"nz":[2,0,1,2,2]},{"size":5,"px":[8,3,8,4,7],"py":[23,9,13,8,16],"pz":[0,1,0,1,0],"nx":[8,2,5,3,2],"ny":[8,15,1,1,1],"nz":[0,-1,-1,-1,-1]},{"size":2,"px":[11,5],"py":[14,5],"pz":[0,-1],"nx":[1,9],"ny":[3,13],"nz":[2,0]},{"size":5,"px":[5,8,1,8,6],"py":[12,12,3,23,12],"pz":[0,0,2,0,0],"nx":[1,1,2,1,1],"ny":[22,21,23,20,20],"nz":[0,0,0,0,-1]},{"size":5,"px":[14,21,19,21,20],"py":[13,8,20,10,7],"pz":[0,0,0,0,0],"nx":[16,0,14,23,1],"ny":[8,1,23,10,20],"nz":[0,-1,-1,-1,-1]},{"size":5,"px":[15,16,13,14,14],"py":[3,3,3,3,3],"pz":[0,0,0,0,-1],"nx":[18,19,18,9,17],"ny":[2,2,1,1,0],"nz":[0,0,0,1,0]},{"size":2,"px":[17,9],"py":[14,4],"pz":[0,-1],"nx":[9,18],"ny":[4,18],"nz":[1,0]},{"size":2,"px":[21,20],"py":[17,21],"pz":[0,0],"nx":[12,3],"ny":[17,10],"nz":[0,-1]},{"size":2,"px":[2,1],"py":[10,4],"pz":[1,2],"nx":[4,1],"ny":[10,5],"nz":[1,-1]},{"size":5,"px":[7,8,4,9,9],"py":[2,2,0,2,2],"pz":[0,0,1,0,-1],"nx":[5,5,4,6,3],"ny":[0,1,2,0,0],"nz":[0,0,0,0,1]},{"size":2,"px":[2,5],"py":[3,5],"pz":[2,-1],"nx":[3,2],"ny":[4,2],"nz":[1,2]},{"size":5,"px":[0,0,0,0,0],"py":[0,1,3,4,4],"pz":[2,2,1,1,-1],"nx":[20,20,19,20,19],"ny":[21,20,23,19,22],"nz":[0,0,0,0,0]},{"size":2,"px":[9,18],"py":[8,16],"pz":[1,0],"nx":[14,6],"ny":[15,16],"nz":[0,-1]},{"size":3,"px":[3,4,7],"py":[3,3,9],"pz":[2,2,1],"nx":[8,9,7],"ny":[4,11,4],"nz":[1,-1,-1]},{"size":5,"px":[6,14,4,7,7],"py":[4,23,3,6,6],"pz":[1,0,2,1,-1],"nx":[2,0,2,1,3],"ny":[20,4,21,10,23],"nz":[0,2,0,1,0]},{"size":5,"px":[2,4,8,9,10],"py":[3,8,13,23,23],"pz":[2,1,0,0,0],"nx":[10,4,0,3,3],"ny":[21,3,0,3,23],"nz":[0,-1,-1,-1,-1]},{"size":3,"px":[11,10,11],"py":[6,5,5],"pz":[0,0,0],"nx":[14,6,1],"ny":[7,9,5],"nz":[0,1,-1]},{"size":5,"px":[11,11,11,11,6],"py":[11,12,10,13,6],"pz":[0,0,0,0,1],"nx":[9,13,13,13,4],"ny":[4,9,10,11,2],"nz":[1,0,0,0,-1]},{"size":2,"px":[2,4],"py":[3,6],"pz":[2,1],"nx":[3,11],"ny":[4,7],"nz":[1,-1]},{"size":2,"px":[1,2],"py":[4,11],"pz":[2,0],"nx":[8,8],"ny":[15,15],"nz":[0,-1]},{"size":5,"px":[12,12,13,12,12],"py":[10,11,13,12,12],"pz":[0,0,0,0,-1],"nx":[0,0,0,1,0],"ny":[13,2,12,5,14],"nz":[0,2,0,0,0]},{"size":5,"px":[0,0,0,1,1],"py":[4,3,11,15,13],"pz":[1,2,0,0,0],"nx":[2,3,3,1,0],"ny":[2,4,4,5,14],"nz":[2,1,-1,-1,-1]},{"size":2,"px":[4,11],"py":[12,10],"pz":[0,-1],"nx":[1,2],"ny":[2,4],"nz":[2,1]},{"size":5,"px":[18,8,9,9,9],"py":[15,7,8,10,7],"pz":[0,1,1,1,1],"nx":[22,23,21,22,11],"ny":[20,16,23,19,9],"nz":[0,0,0,0,1]},{"size":5,"px":[14,12,13,14,15],"py":[1,0,0,0,1],"pz":[0,0,0,0,0],"nx":[4,9,4,7,7],"ny":[2,3,1,8,8],"nz":[2,1,2,1,-1]},{"size":2,"px":[13,9],"py":[14,19],"pz":[0,-1],"nx":[6,10],"ny":[0,2],"nz":[1,0]},{"size":2,"px":[13,12],"py":[4,4],"pz":[0,0],"nx":[3,3],"ny":[1,1],"nz":[2,-1]},{"size":3,"px":[14,5,5],"py":[18,3,4],"pz":[0,-1,-1],"nx":[8,7,8],"ny":[4,8,10],"nz":[1,1,1]},{"size":2,"px":[8,18],"py":[6,11],"pz":[1,0],"nx":[9,1],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[16,11],"py":[9,7],"pz":[0,0],"nx":[7,7],"ny":[4,4],"nz":[1,-1]},{"size":5,"px":[23,11,23,11,23],"py":[13,4,12,7,10],"pz":[0,1,0,1,0],"nx":[7,4,8,15,15],"ny":[9,2,4,8,8],"nz":[0,2,1,0,-1]},{"size":2,"px":[6,3],"py":[1,0],"pz":[0,1],"nx":[4,1],"ny":[1,2],"nz":[0,-1]},{"size":2,"px":[5,5],"py":[7,6],"pz":[0,1],"nx":[6,4],"ny":[9,11],"nz":[0,-1]},{"size":4,"px":[5,6,5,5],"py":[8,6,11,6],"pz":[1,1,1,0],"nx":[23,0,4,5],"ny":[0,2,2,1],"nz":[0,-1,-1,-1]},{"size":2,"px":[18,4],"py":[13,3],"pz":[0,-1],"nx":[15,4],"ny":[11,2],"nz":[0,2]},{"size":2,"px":[4,0],"py":[8,0],"pz":[1,-1],"nx":[9,2],"ny":[15,5],"nz":[0,2]},{"size":5,"px":[15,15,16,14,14],"py":[0,1,1,0,0],"pz":[0,0,0,0,-1],"nx":[4,4,8,8,15],"ny":[4,5,4,11,23],"nz":[2,2,1,1,0]},{"size":4,"px":[12,11,3,14],"py":[14,22,1,0],"pz":[0,-1,-1,-1],"nx":[8,15,7,16],"ny":[2,3,1,3],"nz":[1,0,1,0]},{"size":2,"px":[5,12],"py":[6,17],"pz":[1,-1],"nx":[2,1],"ny":[4,2],"nz":[1,2]},{"size":5,"px":[13,12,12,7,7],"py":[5,6,5,14,14],"pz":[0,0,0,0,-1],"nx":[10,3,10,1,10],"ny":[13,8,11,3,10],"nz":[0,0,0,1,0]},{"size":2,"px":[4,4],"py":[15,0],"pz":[0,-1],"nx":[4,4],"ny":[16,17],"nz":[0,0]},{"size":5,"px":[1,4,2,1,2],"py":[4,0,1,1,0],"pz":[1,1,1,2,1],"nx":[4,9,1,5,1],"ny":[3,4,4,5,5],"nz":[1,-1,-1,-1,-1]},{"size":2,"px":[10,3],"py":[3,1],"pz":[0,2],"nx":[8,8],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[16,0],"py":[21,0],"pz":[0,-1],"nx":[6,8],"ny":[8,4],"nz":[1,1]},{"size":2,"px":[7,11],"py":[4,18],"pz":[0,-1],"nx":[5,7],"ny":[0,2],"nz":[2,0]},{"size":2,"px":[9,7],"py":[0,3],"pz":[1,-1],"nx":[20,10],"ny":[0,1],"nz":[0,1]},{"size":4,"px":[10,4,1,5],"py":[0,6,8,4],"pz":[1,-1,-1,-1],"nx":[6,15,4,14],"ny":[3,5,1,5],"nz":[1,0,2,0]},{"size":2,"px":[4,4],"py":[3,4],"pz":[2,2],"nx":[9,2],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[8,4],"py":[3,4],"pz":[0,-1],"nx":[8,6],"ny":[2,1],"nz":[0,0]},{"size":2,"px":[2,0],"py":[6,3],"pz":[1,2],"nx":[0,7],"ny":[7,8],"nz":[1,-1]},{"size":2,"px":[10,0],"py":[7,3],"pz":[1,-1],"nx":[15,4],"ny":[14,4],"nz":[0,2]},{"size":4,"px":[3,1,2,2],"py":[20,7,18,17],"pz":[0,1,0,0],"nx":[9,5,5,4],"ny":[5,4,18,4],"nz":[1,-1,-1,-1]},{"size":2,"px":[5,4],"py":[3,1],"pz":[2,-1],"nx":[23,23],"ny":[14,13],"nz":[0,0]},{"size":2,"px":[12,4],"py":[6,1],"pz":[0,-1],"nx":[8,4],"ny":[4,4],"nz":[1,1]},{"size":5,"px":[22,22,11,11,11],"py":[12,13,4,6,6],"pz":[0,0,1,1,-1],"nx":[4,4,4,4,3],"ny":[16,15,18,14,11],"nz":[0,0,0,0,1]},{"size":2,"px":[4,10],"py":[0,1],"pz":[1,0],"nx":[2,2],"ny":[2,2],"nz":[2,-1]},{"size":2,"px":[15,6],"py":[4,4],"pz":[0,-1],"nx":[15,4],"ny":[2,1],"nz":[0,2]},{"size":2,"px":[11,2],"py":[10,20],"pz":[0,-1],"nx":[4,9],"ny":[1,2],"nz":[2,1]},{"size":2,"px":[4,19],"py":[3,8],"pz":[2,0],"nx":[8,21],"ny":[4,20],"nz":[1,-1]},{"size":5,"px":[4,6,7,6,2],"py":[6,15,13,14,3],"pz":[1,0,0,0,-1],"nx":[21,22,19,21,10],"ny":[6,12,0,3,2],"nz":[0,0,0,0,1]},{"size":5,"px":[8,12,15,14,13],"py":[0,0,0,0,0],"pz":[1,0,0,0,0],"nx":[4,3,1,3,4],"ny":[19,16,3,15,4],"nz":[0,0,2,0,1]},{"size":2,"px":[3,3],"py":[2,3],"pz":[2,2],"nx":[8,4],"ny":[4,1],"nz":[1,-1]},{"size":4,"px":[0,0,0,5],"py":[10,9,11,21],"pz":[1,1,-1,-1],"nx":[12,4,3,11],"ny":[3,1,1,3],"nz":[0,2,2,0]},{"size":2,"px":[3,1],"py":[0,0],"pz":[1,2],"nx":[1,4],"ny":[2,1],"nz":[1,-1]},{"size":5,"px":[2,5,1,0,1],"py":[14,23,7,5,9],"pz":[0,0,1,1,1],"nx":[0,0,7,9,11],"ny":[23,22,4,9,3],"nz":[0,-1,-1,-1,-1]},{"size":2,"px":[8,9],"py":[7,1],"pz":[1,-1],"nx":[8,8],"ny":[8,9],"nz":[1,1]},{"size":2,"px":[11,9],"py":[11,3],"pz":[1,-1],"nx":[3,2],"ny":[14,10],"nz":[0,1]},{"size":4,"px":[2,4,5,4],"py":[8,20,22,16],"pz":[1,0,0,0],"nx":[8,2,11,3],"ny":[7,4,15,4],"nz":[0,-1,-1,-1]},{"size":3,"px":[1,2,3],"py":[2,1,0],"pz":[0,0,0],"nx":[0,0,15],"ny":[1,0,11],"nz":[0,0,-1]},{"size":2,"px":[12,22],"py":[6,7],"pz":[0,-1],"nx":[4,8],"ny":[2,4],"nz":[2,1]},{"size":3,"px":[13,0,5],"py":[19,10,2],"pz":[0,-1,-1],"nx":[3,4,6],"ny":[5,5,9],"nz":[2,2,1]},{"size":2,"px":[8,15],"py":[8,22],"pz":[1,0],"nx":[7,4],"ny":[10,7],"nz":[1,-1]},{"size":2,"px":[10,10],"py":[7,6],"pz":[1,1],"nx":[10,1],"ny":[9,0],"nz":[1,-1]},{"size":2,"px":[9,11],"py":[4,3],"pz":[0,-1],"nx":[5,9],"ny":[0,1],"nz":[1,0]},{"size":5,"px":[14,13,14,12,15],"py":[1,2,2,2,2],"pz":[0,0,0,0,0],"nx":[4,8,4,7,4],"ny":[2,4,3,4,4],"nz":[2,1,2,1,-1]},{"size":3,"px":[13,8,2],"py":[14,5,8],"pz":[0,-1,-1],"nx":[6,8,9],"ny":[3,2,2],"nz":[0,0,0]},{"size":3,"px":[3,6,8],"py":[7,4,12],"pz":[1,1,0],"nx":[3,8,9],"ny":[5,2,2],"nz":[1,-1,-1]},{"size":2,"px":[13,4],"py":[16,3],"pz":[0,2],"nx":[13,7],"ny":[15,5],"nz":[0,-1]},{"size":2,"px":[3,0],"py":[7,9],"pz":[1,-1],"nx":[2,8],"ny":[2,4],"nz":[2,1]},{"size":5,"px":[3,6,8,7,7],"py":[0,1,0,0,0],"pz":[1,0,0,0,-1],"nx":[7,9,4,3,4],"ny":[9,7,4,2,2],"nz":[1,1,1,2,2]},{"size":3,"px":[3,4,16],"py":[4,4,6],"pz":[1,2,0],"nx":[2,2,2],"ny":[0,0,1],"nz":[0,-1,-1]},{"size":2,"px":[0,0],"py":[1,0],"pz":[2,2],"nx":[5,5],"ny":[2,2],"nz":[1,-1]},{"size":2,"px":[9,3],"py":[7,20],"pz":[1,-1],"nx":[4,8],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[8,21],"py":[10,18],"pz":[0,-1],"nx":[9,4],"ny":[10,4],"nz":[0,1]},{"size":2,"px":[6,13],"py":[6,23],"pz":[1,-1],"nx":[10,10],"ny":[11,12],"nz":[0,0]},{"size":5,"px":[10,9,5,10,10],"py":[9,13,6,10,10],"pz":[0,0,1,0,-1],"nx":[21,21,21,10,21],"ny":[18,20,19,11,17],"nz":[0,0,0,1,0]},{"size":2,"px":[8,8],"py":[7,6],"pz":[1,1],"nx":[8,1],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[11,4],"py":[14,7],"pz":[0,-1],"nx":[13,13],"ny":[13,11],"nz":[0,0]},{"size":2,"px":[4,4],"py":[4,5],"pz":[2,2],"nx":[12,5],"ny":[16,2],"nz":[0,-1]},{"size":3,"px":[1,3,20],"py":[3,9,2],"pz":[2,-1,-1],"nx":[0,0,0],"ny":[7,4,13],"nz":[1,2,0]},{"size":2,"px":[0,0],"py":[4,2],"pz":[1,2],"nx":[1,0],"ny":[4,4],"nz":[1,-1]},{"size":3,"px":[8,9,11],"py":[2,1,2],"pz":[0,0,0],"nx":[2,2,0],"ny":[2,2,13],"nz":[2,-1,-1]},{"size":2,"px":[1,10],"py":[23,5],"pz":[0,-1],"nx":[3,6],"ny":[1,1],"nz":[2,1]},{"size":4,"px":[13,6,3,4],"py":[8,6,4,2],"pz":[0,-1,-1,-1],"nx":[1,1,1,4],"ny":[9,7,8,20],"nz":[1,1,1,0]},{"size":5,"px":[11,4,4,10,3],"py":[9,16,13,12,7],"pz":[0,0,0,0,0],"nx":[7,11,3,17,4],"ny":[8,11,9,0,4],"nz":[0,-1,-1,-1,-1]},{"size":2,"px":[6,6],"py":[6,8],"pz":[1,-1],"nx":[0,0],"ny":[1,2],"nz":[2,2]},{"size":2,"px":[10,5],"py":[7,2],"pz":[0,-1],"nx":[4,13],"ny":[5,9],"nz":[2,0]},{"size":2,"px":[10,5],"py":[8,2],"pz":[1,-1],"nx":[16,4],"ny":[14,5],"nz":[0,2]},{"size":2,"px":[1,1],"py":[16,15],"pz":[0,0],"nx":[1,20],"ny":[23,1],"nz":[0,-1]},{"size":2,"px":[2,3],"py":[4,7],"pz":[2,1],"nx":[2,3],"ny":[5,4],"nz":[2,-1]},{"size":2,"px":[19,8],"py":[5,4],"pz":[0,-1],"nx":[10,10],"ny":[1,3],"nz":[1,1]},{"size":2,"px":[21,21],"py":[18,16],"pz":[0,0],"nx":[10,3],"ny":[17,5],"nz":[0,-1]},{"size":2,"px":[9,2],"py":[23,4],"pz":[0,2],"nx":[5,11],"ny":[3,7],"nz":[2,1]},{"size":2,"px":[7,0],"py":[3,2],"pz":[0,-1],"nx":[3,6],"ny":[1,1],"nz":[1,0]},{"size":4,"px":[5,9,8,9],"py":[8,12,13,18],"pz":[0,0,0,0],"nx":[6,5,2,5],"ny":[8,4,7,11],"nz":[0,-1,-1,-1]},{"size":2,"px":[7,2],"py":[0,0],"pz":[0,2],"nx":[5,5],"ny":[3,4],"nz":[1,-1]},{"size":2,"px":[11,11],"py":[12,13],"pz":[0,0],"nx":[9,1],"ny":[14,3],"nz":[0,-1]},{"size":5,"px":[8,16,9,4,15],"py":[11,13,8,4,12],"pz":[1,0,1,2,0],"nx":[3,3,3,3,4],"ny":[4,2,1,3,0],"nz":[0,0,0,0,0]},{"size":2,"px":[9,5],"py":[7,6],"pz":[1,-1],"nx":[19,8],"ny":[17,11],"nz":[0,1]},{"size":5,"px":[14,15,12,13,13],"py":[2,2,2,2,2],"pz":[0,0,0,0,-1],"nx":[20,9,19,20,4],"ny":[14,2,5,15,1],"nz":[0,1,0,0,2]},{"size":2,"px":[18,8],"py":[20,7],"pz":[0,1],"nx":[4,9],"ny":[2,2],"nz":[2,-1]},{"size":2,"px":[6,3],"py":[11,5],"pz":[1,2],"nx":[13,19],"ny":[20,20],"nz":[0,-1]},{"size":3,"px":[12,11,3],"py":[20,20,5],"pz":[0,0,-1],"nx":[11,12,6],"ny":[21,21,10],"nz":[0,0,1]},{"size":2,"px":[3,6],"py":[7,14],"pz":[1,0],"nx":[3,13],"ny":[4,8],"nz":[1,-1]},{"size":2,"px":[0,0],"py":[5,9],"pz":[2,1],"nx":[2,11],"ny":[8,6],"nz":[1,-1]},{"size":2,"px":[2,2],"py":[5,5],"pz":[1,-1],"nx":[0,0],"ny":[6,3],"nz":[1,2]},{"size":2,"px":[11,23],"py":[5,9],"pz":[1,0],"nx":[8,2],"ny":[11,0],"nz":[0,-1]},{"size":2,"px":[11,23],"py":[12,9],"pz":[0,-1],"nx":[11,22],"ny":[10,21],"nz":[1,0]},{"size":2,"px":[12,12],"py":[7,7],"pz":[0,-1],"nx":[5,4],"ny":[7,10],"nz":[1,1]},{"size":2,"px":[9,8],"py":[18,1],"pz":[0,-1],"nx":[5,4],"ny":[8,10],"nz":[1,1]},{"size":2,"px":[16,17],"py":[11,11],"pz":[0,0],"nx":[15,2],"ny":[9,4],"nz":[0,-1]},{"size":2,"px":[0,1],"py":[3,0],"pz":[2,-1],"nx":[9,10],"ny":[6,5],"nz":[1,1]},{"size":2,"px":[13,13],"py":[20,21],"pz":[0,-1],"nx":[2,2],"ny":[6,5],"nz":[1,1]},{"size":5,"px":[20,20,4,18,19],"py":[17,16,5,22,20],"pz":[0,0,2,0,0],"nx":[8,11,5,6,2],"ny":[10,15,11,10,1],"nz":[1,-1,-1,-1,-1]},{"size":2,"px":[11,11],"py":[4,4],"pz":[0,-1],"nx":[8,4],"ny":[4,4],"nz":[1,1]},{"size":3,"px":[6,5,6],"py":[8,10,10],"pz":[1,1,1],"nx":[11,8,22],"ny":[19,2,15],"nz":[0,-1,-1]},{"size":3,"px":[5,2,13],"py":[7,10,10],"pz":[1,-1,-1],"nx":[11,11,23],"ny":[8,9,14],"nz":[1,1,0]},{"size":5,"px":[3,6,1,5,10],"py":[7,14,1,9,2],"pz":[1,-1,-1,-1,-1],"nx":[11,0,1,5,1],"ny":[14,12,18,5,19],"nz":[0,0,0,1,0]},{"size":3,"px":[21,21,10],"py":[16,17,10],"pz":[0,0,1],"nx":[5,5,1],"ny":[9,9,18],"nz":[1,-1,-1]},{"size":2,"px":[6,21],"py":[6,17],"pz":[1,-1],"nx":[20,10],"ny":[7,4],"nz":[0,1]},{"size":2,"px":[10,11],"py":[0,0],"pz":[1,-1],"nx":[6,13],"ny":[2,4],"nz":[1,0]},{"size":4,"px":[4,4,7,9],"py":[3,4,10,3],"pz":[2,2,1,1],"nx":[21,2,15,5],"ny":[0,0,0,2],"nz":[0,-1,-1,-1]},{"size":3,"px":[11,11,11],"py":[7,6,9],"pz":[1,1,1],"nx":[23,4,9],"ny":[23,5,6],"nz":[0,-1,-1]},{"size":2,"px":[14,15],"py":[1,1],"pz":[0,0],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":5,"px":[11,23,11,23,23],"py":[11,22,10,21,20],"pz":[1,0,1,0,0],"nx":[10,9,19,10,10],"ny":[10,11,20,9,9],"nz":[1,1,0,1,-1]},{"size":2,"px":[7,23],"py":[13,22],"pz":[0,-1],"nx":[8,4],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[12,1],"py":[19,0],"pz":[0,-1],"nx":[11,12],"ny":[22,17],"nz":[0,0]},{"size":2,"px":[10,8],"py":[4,3],"pz":[1,-1],"nx":[5,23],"ny":[2,7],"nz":[2,0]},{"size":2,"px":[9,10],"py":[6,20],"pz":[1,-1],"nx":[8,8],"ny":[4,6],"nz":[1,1]}],"alpha":[-1.135386e+00,1.135386e+00,-9.090800e-01,9.090800e-01,-5.913780e-01,5.913780e-01,-5.556534e-01,5.556534e-01,-5.084150e-01,5.084150e-01,-4.464489e-01,4.464489e-01,-4.463241e-01,4.463241e-01,-4.985226e-01,4.985226e-01,-4.424638e-01,4.424638e-01,-4.300093e-01,4.300093e-01,-4.231341e-01,4.231341e-01,-4.087428e-01,4.087428e-01,-3.374480e-01,3.374480e-01,-3.230151e-01,3.230151e-01,-3.084427e-01,3.084427e-01,-3.235494e-01,3.235494e-01,-2.589281e-01,2.589281e-01,-2.970292e-01,2.970292e-01,-2.957065e-01,2.957065e-01,-3.997619e-01,3.997619e-01,-3.535901e-01,3.535901e-01,-2.725396e-01,2.725396e-01,-2.649725e-01,2.649725e-01,-3.103888e-01,3.103888e-01,-3.117775e-01,3.117775e-01,-2.589620e-01,2.589620e-01,-2.689202e-01,2.689202e-01,-2.127024e-01,2.127024e-01,-2.436322e-01,2.436322e-01,-3.120574e-01,3.120574e-01,-2.786010e-01,2.786010e-01,-2.649072e-01,2.649072e-01,-2.766509e-01,2.766509e-01,-2.367237e-01,2.367237e-01,-2.658049e-01,2.658049e-01,-2.103463e-01,2.103463e-01,-1.911522e-01,1.911522e-01,-2.535425e-01,2.535425e-01,-2.434696e-01,2.434696e-01,-2.180788e-01,2.180788e-01,-2.496873e-01,2.496873e-01,-2.700969e-01,2.700969e-01,-2.565479e-01,2.565479e-01,-2.737741e-01,2.737741e-01,-1.675507e-01,1.675507e-01,-2.551417e-01,2.551417e-01,-2.067648e-01,2.067648e-01,-1.636834e-01,1.636834e-01,-2.129306e-01,2.129306e-01,-1.656758e-01,1.656758e-01,-1.919369e-01,1.919369e-01,-2.031763e-01,2.031763e-01,-2.062327e-01,2.062327e-01,-2.577950e-01,2.577950e-01,-2.951823e-01,2.951823e-01,-2.023160e-01,2.023160e-01,-2.022234e-01,2.022234e-01,-2.132906e-01,2.132906e-01,-1.653278e-01,1.653278e-01,-1.648474e-01,1.648474e-01,-1.593352e-01,1.593352e-01,-1.735650e-01,1.735650e-01,-1.688778e-01,1.688778e-01,-1.519705e-01,1.519705e-01,-1.812202e-01,1.812202e-01,-1.967481e-01,1.967481e-01,-1.852954e-01,1.852954e-01,-2.317780e-01,2.317780e-01,-2.036251e-01,2.036251e-01,-1.609324e-01,1.609324e-01,-2.160205e-01,2.160205e-01,-2.026190e-01,2.026190e-01,-1.854761e-01,1.854761e-01,-1.832038e-01,1.832038e-01,-2.001141e-01,2.001141e-01,-1.418333e-01,1.418333e-01,-1.704773e-01,1.704773e-01,-1.586261e-01,1.586261e-01,-1.587582e-01,1.587582e-01,-1.899489e-01,1.899489e-01,-1.477160e-01,1.477160e-01,-2.260467e-01,2.260467e-01,-2.393598e-01,2.393598e-01,-1.582373e-01,1.582373e-01,-1.702498e-01,1.702498e-01,-1.737398e-01,1.737398e-01,-1.462529e-01,1.462529e-01,-1.396517e-01,1.396517e-01,-1.629625e-01,1.629625e-01,-1.446933e-01,1.446933e-01,-1.811657e-01,1.811657e-01,-1.336427e-01,1.336427e-01,-1.924813e-01,1.924813e-01,-1.457520e-01,1.457520e-01,-1.600259e-01,1.600259e-01,-1.297000e-01,1.297000e-01,-2.076199e-01,2.076199e-01,-1.510060e-01,1.510060e-01,-1.914568e-01,1.914568e-01,-2.138162e-01,2.138162e-01,-1.856916e-01,1.856916e-01,-1.843047e-01,1.843047e-01,-1.526846e-01,1.526846e-01,-1.328320e-01,1.328320e-01,-1.751311e-01,1.751311e-01,-1.643908e-01,1.643908e-01,-1.482706e-01,1.482706e-01,-1.622298e-01,1.622298e-01,-1.884979e-01,1.884979e-01,-1.633604e-01,1.633604e-01,-1.554166e-01,1.554166e-01,-1.405332e-01,1.405332e-01,-1.772398e-01,1.772398e-01,-1.410008e-01,1.410008e-01,-1.362301e-01,1.362301e-01,-1.709087e-01,1.709087e-01,-1.584613e-01,1.584613e-01,-1.188814e-01,1.188814e-01,-1.423888e-01,1.423888e-01,-1.345565e-01,1.345565e-01,-1.835986e-01,1.835986e-01,-1.445329e-01,1.445329e-01,-1.385826e-01,1.385826e-01,-1.558917e-01,1.558917e-01,-1.476053e-01,1.476053e-01,-1.370722e-01,1.370722e-01,-2.362666e-01,2.362666e-01,-2.907774e-01,2.907774e-01,-1.656360e-01,1.656360e-01,-1.644407e-01,1.644407e-01,-1.443394e-01,1.443394e-01,-1.438823e-01,1.438823e-01,-1.476964e-01,1.476964e-01,-1.956593e-01,1.956593e-01,-2.417519e-01,2.417519e-01,-1.659315e-01,1.659315e-01,-1.466254e-01,1.466254e-01,-2.034909e-01,2.034909e-01,-2.128771e-01,2.128771e-01,-1.665429e-01,1.665429e-01,-1.387131e-01,1.387131e-01,-1.298823e-01,1.298823e-01,-1.329495e-01,1.329495e-01,-1.769587e-01,1.769587e-01,-1.366530e-01,1.366530e-01,-1.254359e-01,1.254359e-01,-1.673022e-01,1.673022e-01,-1.602519e-01,1.602519e-01,-1.897245e-01,1.897245e-01,-1.893579e-01,1.893579e-01,-1.579350e-01,1.579350e-01,-1.472589e-01,1.472589e-01,-1.614193e-01,1.614193e-01]},{"count":203,"threshold":-4.769677e+00,"feature":[{"size":5,"px":[12,5,14,9,7],"py":[9,13,3,1,3],"pz":[0,0,0,0,0],"nx":[1,0,5,14,9],"ny":[5,3,8,8,9],"nz":[2,0,1,0,0]},{"size":5,"px":[14,13,11,17,12],"py":[2,2,4,13,3],"pz":[0,0,0,0,0],"nx":[7,22,8,23,22],"ny":[8,15,11,12,3],"nz":[1,0,1,0,0]},{"size":5,"px":[9,11,11,11,16],"py":[4,8,7,9,12],"pz":[0,0,0,0,0],"nx":[4,8,14,9,9],"ny":[4,4,8,8,8],"nz":[1,1,0,0,-1]},{"size":5,"px":[6,12,12,8,3],"py":[11,7,8,10,2],"pz":[0,0,0,0,2],"nx":[8,4,4,4,0],"ny":[4,4,4,11,0],"nz":[1,1,-1,-1,-1]},{"size":5,"px":[19,17,18,9,9],"py":[3,2,3,1,1],"pz":[0,0,0,1,-1],"nx":[21,21,10,22,22],"ny":[1,2,0,4,3],"nz":[0,0,1,0,0]},{"size":2,"px":[4,7],"py":[4,6],"pz":[2,1],"nx":[8,7],"ny":[4,10],"nz":[1,1]},{"size":5,"px":[14,17,17,13,12],"py":[18,15,16,18,18],"pz":[0,0,0,0,0],"nx":[13,19,5,20,6],"ny":[16,4,1,19,0],"nz":[0,-1,-1,-1,-1]},{"size":5,"px":[6,7,4,5,5],"py":[15,23,6,12,16],"pz":[0,0,1,0,0],"nx":[3,14,14,6,6],"ny":[4,11,11,9,0],"nz":[1,-1,-1,-1,-1]},{"size":5,"px":[16,9,6,3,11],"py":[2,2,5,3,2],"pz":[0,0,1,2,0],"nx":[3,4,2,5,5],"ny":[4,11,2,8,8],"nz":[1,1,2,1,-1]},{"size":5,"px":[6,1,5,3,3],"py":[14,4,15,7,7],"pz":[0,2,0,1,-1],"nx":[0,0,1,1,1],"ny":[7,8,18,17,5],"nz":[1,1,0,0,2]},{"size":5,"px":[12,12,9,5,3],"py":[14,14,0,3,7],"pz":[0,-1,-1,-1,-1],"nx":[7,7,14,8,13],"ny":[7,8,13,10,10],"nz":[1,1,0,1,0]},{"size":2,"px":[3,4],"py":[7,9],"pz":[1,-1],"nx":[2,4],"ny":[5,4],"nz":[2,1]},{"size":3,"px":[10,21,17],"py":[7,11,23],"pz":[1,0,0],"nx":[21,9,3],"ny":[23,5,5],"nz":[0,-1,-1]},{"size":5,"px":[8,11,9,10,11],"py":[2,0,1,1,2],"pz":[0,0,0,0,0],"nx":[4,5,6,4,3],"ny":[8,4,18,7,4],"nz":[1,1,0,1,-1]},{"size":5,"px":[20,22,3,19,10],"py":[20,9,4,22,3],"pz":[0,0,2,0,1],"nx":[8,20,8,3,2],"ny":[4,3,6,4,3],"nz":[1,-1,-1,-1,-1]},{"size":2,"px":[4,4],"py":[8,7],"pz":[1,1],"nx":[9,2],"ny":[15,5],"nz":[0,-1]},{"size":2,"px":[11,13],"py":[13,4],"pz":[0,-1],"nx":[20,21],"ny":[1,4],"nz":[0,0]},{"size":5,"px":[1,2,7,6,8],"py":[0,2,3,3,3],"pz":[2,1,0,0,0],"nx":[1,2,1,1,1],"ny":[0,0,4,3,3],"nz":[1,0,0,0,-1]},{"size":2,"px":[3,10],"py":[9,11],"pz":[0,0],"nx":[6,3],"ny":[9,2],"nz":[0,-1]},{"size":5,"px":[12,12,12,12,6],"py":[10,11,13,12,6],"pz":[0,0,0,0,-1],"nx":[10,2,1,10,10],"ny":[10,4,2,11,9],"nz":[0,1,2,0,0]},{"size":5,"px":[16,18,11,17,15],"py":[11,12,8,12,11],"pz":[0,0,0,0,0],"nx":[14,0,19,0,10],"ny":[9,3,14,8,9],"nz":[0,-1,-1,-1,-1]},{"size":4,"px":[5,9,5,8],"py":[21,18,20,23],"pz":[0,0,0,0],"nx":[8,4,3,1],"ny":[20,3,4,3],"nz":[0,-1,-1,-1]},{"size":2,"px":[2,3],"py":[3,2],"pz":[2,2],"nx":[3,12],"ny":[4,23],"nz":[1,-1]},{"size":5,"px":[0,1,1,1,1],"py":[2,16,14,13,12],"pz":[2,0,0,0,0],"nx":[8,4,9,4,7],"ny":[9,3,4,2,9],"nz":[1,2,1,2,1]},{"size":2,"px":[4,9],"py":[3,7],"pz":[2,-1],"nx":[4,9],"ny":[2,4],"nz":[2,1]},{"size":5,"px":[15,16,17,15,8],"py":[3,3,3,18,1],"pz":[0,0,0,0,1],"nx":[1,2,2,1,3],"ny":[5,3,2,6,0],"nz":[0,0,0,0,0]},{"size":2,"px":[4,17],"py":[4,14],"pz":[2,0],"nx":[15,7],"ny":[15,10],"nz":[0,-1]},{"size":3,"px":[14,12,3],"py":[3,13,3],"pz":[0,-1,-1],"nx":[4,17,4],"ny":[3,19,4],"nz":[2,0,2]},{"size":4,"px":[4,5,12,2],"py":[9,6,19,4],"pz":[1,1,0,2],"nx":[12,17,4,4],"ny":[18,19,4,4],"nz":[0,-1,-1,-1]},{"size":5,"px":[10,19,20,20,19],"py":[7,14,13,14,13],"pz":[1,0,0,0,-1],"nx":[11,23,23,23,23],"ny":[9,15,13,16,14],"nz":[1,0,0,0,0]},{"size":4,"px":[0,0,0,2],"py":[5,6,5,14],"pz":[1,1,2,0],"nx":[0,3,3,17],"ny":[23,5,5,9],"nz":[0,-1,-1,-1]},{"size":2,"px":[15,4],"py":[23,5],"pz":[0,2],"nx":[9,3],"ny":[4,4],"nz":[1,-1]},{"size":4,"px":[6,5,10,12],"py":[3,3,23,23],"pz":[1,1,0,0],"nx":[11,1,1,4],"ny":[21,3,5,5],"nz":[0,-1,-1,-1]},{"size":2,"px":[5,2],"py":[9,4],"pz":[1,2],"nx":[4,9],"ny":[4,2],"nz":[1,-1]},{"size":5,"px":[23,23,23,23,23],"py":[14,9,13,11,12],"pz":[0,0,0,0,0],"nx":[6,13,7,8,8],"ny":[9,6,3,3,3],"nz":[1,0,1,1,-1]},{"size":2,"px":[10,3],"py":[4,5],"pz":[0,-1],"nx":[3,8],"ny":[1,3],"nz":[2,1]},{"size":2,"px":[3,12],"py":[4,18],"pz":[2,0],"nx":[12,0],"ny":[16,3],"nz":[0,-1]},{"size":2,"px":[16,2],"py":[4,4],"pz":[0,-1],"nx":[16,4],"ny":[1,0],"nz":[0,2]},{"size":2,"px":[3,4],"py":[7,1],"pz":[1,-1],"nx":[5,3],"ny":[19,9],"nz":[0,1]},{"size":4,"px":[20,19,20,21],"py":[2,0,1,3],"pz":[0,0,0,0],"nx":[11,5,23,11],"ny":[0,0,1,1],"nz":[1,2,0,1]},{"size":2,"px":[12,13],"py":[7,5],"pz":[0,0],"nx":[8,5],"ny":[3,5],"nz":[1,-1]},{"size":5,"px":[22,21,22,22,22],"py":[20,22,18,19,16],"pz":[0,0,0,0,0],"nx":[2,3,3,15,15],"ny":[4,5,4,7,7],"nz":[1,2,1,0,-1]},{"size":3,"px":[15,14,14],"py":[1,1,1],"pz":[0,0,-1],"nx":[17,18,16],"ny":[1,2,1],"nz":[0,0,0]},{"size":4,"px":[17,16,16,15],"py":[2,1,0,0],"pz":[0,0,0,0],"nx":[7,4,2,11],"ny":[11,2,1,4],"nz":[1,2,-1,-1]},{"size":4,"px":[18,0,0,0],"py":[14,6,5,4],"pz":[0,-1,-1,-1],"nx":[19,19,19,19],"ny":[16,19,17,18],"nz":[0,0,0,0]},{"size":4,"px":[11,5,5,0],"py":[14,1,4,4],"pz":[0,-1,-1,-1],"nx":[11,8,2,15],"ny":[17,14,1,9],"nz":[0,0,2,0]},{"size":2,"px":[4,5],"py":[19,21],"pz":[0,0],"nx":[10,2],"ny":[15,4],"nz":[0,-1]},{"size":2,"px":[6,4],"py":[4,6],"pz":[1,1],"nx":[3,3],"ny":[4,5],"nz":[1,-1]},{"size":2,"px":[2,7],"py":[1,13],"pz":[2,0],"nx":[7,2],"ny":[1,4],"nz":[1,-1]},{"size":4,"px":[15,10,4,7],"py":[23,3,1,7],"pz":[0,1,2,1],"nx":[0,4,1,1],"ny":[0,2,0,-1900147915],"nz":[0,-1,-1,-1]},{"size":2,"px":[7,2],"py":[12,11],"pz":[0,-1],"nx":[2,4],"ny":[2,5],"nz":[2,1]},{"size":5,"px":[0,0,0,1,0],"py":[9,4,3,2,6],"pz":[0,1,2,1,1],"nx":[9,4,2,16,16],"ny":[7,4,2,8,8],"nz":[0,1,2,0,-1]},{"size":5,"px":[18,4,9,4,4],"py":[12,5,6,3,4],"pz":[0,2,1,2,-1],"nx":[4,3,3,2,3],"ny":[23,19,21,16,18],"nz":[0,0,0,0,0]},{"size":2,"px":[6,6],"py":[14,13],"pz":[0,0],"nx":[3,10],"ny":[4,7],"nz":[1,-1]},{"size":5,"px":[3,4,4,2,2],"py":[8,11,7,4,4],"pz":[1,1,1,2,-1],"nx":[20,18,19,20,19],"ny":[4,0,2,3,1],"nz":[0,0,0,0,0]},{"size":5,"px":[17,12,14,8,16],"py":[2,0,0,0,0],"pz":[0,0,0,1,0],"nx":[3,15,3,2,2],"ny":[2,9,7,2,2],"nz":[2,0,1,2,-1]},{"size":5,"px":[11,10,11,11,11],"py":[10,12,11,12,12],"pz":[0,0,0,0,-1],"nx":[13,13,20,10,13],"ny":[9,11,8,4,10],"nz":[0,0,0,1,0]},{"size":2,"px":[8,16],"py":[7,13],"pz":[1,0],"nx":[8,13],"ny":[4,11],"nz":[1,-1]},{"size":2,"px":[6,7],"py":[20,3],"pz":[0,-1],"nx":[3,4],"ny":[10,10],"nz":[1,1]},{"size":3,"px":[13,10,17],"py":[9,3,5],"pz":[0,-1,-1],"nx":[1,3,1],"ny":[5,16,6],"nz":[2,0,1]},{"size":2,"px":[0,0],"py":[5,5],"pz":[2,-1],"nx":[8,3],"ny":[14,10],"nz":[0,1]},{"size":4,"px":[11,9,12,10],"py":[2,2,2,2],"pz":[0,0,0,0],"nx":[4,4,4,10],"ny":[5,5,0,16],"nz":[1,-1,-1,-1]},{"size":3,"px":[7,9,12],"py":[2,2,2],"pz":[1,-1,-1],"nx":[4,7,2],"ny":[3,1,0],"nz":[0,0,2]},{"size":2,"px":[2,4],"py":[3,12],"pz":[2,0],"nx":[7,4],"ny":[6,5],"nz":[1,2]},{"size":4,"px":[12,12,6,3],"py":[12,11,21,7],"pz":[0,0,-1,-1],"nx":[1,0,0,0],"ny":[13,3,6,5],"nz":[0,2,1,1]},{"size":3,"px":[3,1,3],"py":[21,8,18],"pz":[0,1,0],"nx":[11,20,0],"ny":[17,17,6],"nz":[0,-1,-1]},{"size":2,"px":[2,8],"py":[3,12],"pz":[2,0],"nx":[2,20],"ny":[4,17],"nz":[1,-1]},{"size":5,"px":[2,3,4,3,2],"py":[10,14,14,15,13],"pz":[1,0,0,0,0],"nx":[0,0,1,0,0],"ny":[21,20,23,19,19],"nz":[0,0,0,0,-1]},{"size":2,"px":[2,15],"py":[7,4],"pz":[1,-1],"nx":[3,8],"ny":[4,14],"nz":[1,0]},{"size":5,"px":[19,14,12,15,4],"py":[8,12,10,16,2],"pz":[0,0,0,0,2],"nx":[8,0,12,4,0],"ny":[4,1,12,2,19],"nz":[1,-1,-1,-1,-1]},{"size":2,"px":[18,9],"py":[15,3],"pz":[0,-1],"nx":[8,15],"ny":[9,14],"nz":[1,0]},{"size":5,"px":[4,2,3,4,9],"py":[9,4,3,8,23],"pz":[1,2,1,1,0],"nx":[11,23,23,11,11],"ny":[0,2,3,1,1],"nz":[1,0,0,1,-1]},{"size":2,"px":[6,7],"py":[1,1],"pz":[0,0],"nx":[3,4],"ny":[10,5],"nz":[1,-1]},{"size":4,"px":[11,9,8,5],"py":[12,15,13,3],"pz":[0,-1,-1,-1],"nx":[3,12,14,13],"ny":[0,3,3,3],"nz":[2,0,0,0]},{"size":2,"px":[11,11],"py":[6,5],"pz":[0,0],"nx":[8,11],"ny":[4,20],"nz":[1,-1]},{"size":5,"px":[21,20,21,21,21],"py":[18,21,17,19,19],"pz":[0,0,0,0,-1],"nx":[2,5,4,4,5],"ny":[5,12,11,10,10],"nz":[1,0,0,0,0]},{"size":5,"px":[1,1,1,1,1],"py":[10,11,7,9,8],"pz":[0,0,0,0,0],"nx":[11,23,23,23,23],"ny":[10,20,21,19,19],"nz":[1,0,0,0,-1]},{"size":5,"px":[7,8,7,3,1],"py":[14,13,13,2,2],"pz":[0,0,-1,-1,-1],"nx":[1,10,2,2,10],"ny":[2,13,4,16,12],"nz":[2,0,1,0,0]},{"size":2,"px":[17,18],"py":[12,12],"pz":[0,0],"nx":[8,8],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[17,0],"py":[5,20],"pz":[0,-1],"nx":[4,9],"ny":[0,2],"nz":[2,1]},{"size":5,"px":[22,22,22,11,23],"py":[16,15,14,6,13],"pz":[0,0,0,1,0],"nx":[16,15,7,9,9],"ny":[15,8,4,10,10],"nz":[0,0,1,1,-1]},{"size":2,"px":[13,3],"py":[3,1],"pz":[0,2],"nx":[8,3],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[5,6],"py":[4,1],"pz":[1,-1],"nx":[6,3],"ny":[4,2],"nz":[1,2]},{"size":3,"px":[4,2,6],"py":[6,3,4],"pz":[1,2,1],"nx":[10,0,4],"ny":[9,4,3],"nz":[0,-1,-1]},{"size":4,"px":[2,8,4,10],"py":[4,23,7,23],"pz":[2,0,1,0],"nx":[9,4,11,9],"ny":[21,5,16,0],"nz":[0,-1,-1,-1]},{"size":2,"px":[6,3],"py":[13,0],"pz":[0,-1],"nx":[8,2],"ny":[11,2],"nz":[0,2]},{"size":2,"px":[3,3],"py":[1,4],"pz":[1,-1],"nx":[3,5],"ny":[0,1],"nz":[1,0]},{"size":2,"px":[7,2],"py":[0,0],"pz":[0,2],"nx":[2,10],"ny":[1,6],"nz":[2,0]},{"size":2,"px":[10,2],"py":[7,0],"pz":[1,-1],"nx":[21,5],"ny":[15,4],"nz":[0,2]},{"size":2,"px":[1,1],"py":[10,9],"pz":[0,0],"nx":[0,3],"ny":[13,11],"nz":[0,-1]},{"size":2,"px":[11,9],"py":[13,0],"pz":[0,-1],"nx":[3,3],"ny":[4,3],"nz":[1,1]},{"size":5,"px":[14,13,13,14,14],"py":[12,10,11,13,13],"pz":[0,0,0,0,-1],"nx":[9,8,4,5,7],"ny":[4,4,2,2,4],"nz":[0,0,1,1,0]},{"size":3,"px":[2,4,1],"py":[2,0,0],"pz":[0,0,1],"nx":[0,7,4],"ny":[0,3,2],"nz":[1,-1,-1]},{"size":2,"px":[11,4],"py":[5,0],"pz":[0,-1],"nx":[8,6],"ny":[4,9],"nz":[1,1]},{"size":3,"px":[0,0,0],"py":[20,2,4],"pz":[0,-1,-1],"nx":[12,3,10],"ny":[3,1,3],"nz":[0,2,0]},{"size":5,"px":[5,11,10,13,13],"py":[0,0,0,2,2],"pz":[1,0,0,0,-1],"nx":[4,5,5,4,5],"ny":[14,0,2,6,1],"nz":[0,0,0,0,0]},{"size":2,"px":[2,4],"py":[3,6],"pz":[2,1],"nx":[3,11],"ny":[4,1],"nz":[1,-1]},{"size":2,"px":[14,-1715597992],"py":[19,9],"pz":[0,-1],"nx":[7,14],"ny":[10,17],"nz":[1,0]},{"size":2,"px":[11,1],"py":[9,0],"pz":[0,-1],"nx":[1,12],"ny":[2,10],"nz":[2,0]},{"size":2,"px":[17,9],"py":[13,17],"pz":[0,-1],"nx":[8,4],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[0,7],"py":[1,9],"pz":[1,-1],"nx":[18,4],"ny":[14,2],"nz":[0,2]},{"size":2,"px":[14,7],"py":[23,9],"pz":[0,-1],"nx":[4,8],"ny":[5,10],"nz":[2,1]},{"size":2,"px":[8,7],"py":[17,9],"pz":[0,-1],"nx":[3,2],"ny":[0,3],"nz":[0,0]},{"size":2,"px":[13,4],"py":[20,1],"pz":[0,-1],"nx":[5,3],"ny":[21,17],"nz":[0,0]},{"size":3,"px":[0,0,1],"py":[3,6,15],"pz":[2,1,0],"nx":[10,8,3],"ny":[6,4,2],"nz":[0,-1,-1]},{"size":2,"px":[8,8],"py":[18,8],"pz":[0,-1],"nx":[5,4],"ny":[8,10],"nz":[1,1]},{"size":2,"px":[6,5],"py":[2,2],"pz":[1,1],"nx":[8,9],"ny":[4,3],"nz":[1,-1]},{"size":2,"px":[6,3],"py":[11,5],"pz":[1,2],"nx":[13,3],"ny":[19,2],"nz":[0,-1]},{"size":2,"px":[4,6],"py":[1,11],"pz":[2,-1],"nx":[3,2],"ny":[1,0],"nz":[1,2]},{"size":2,"px":[9,4],"py":[10,5],"pz":[1,2],"nx":[8,4],"ny":[10,4],"nz":[1,-1]},{"size":2,"px":[12,12],"py":[11,20],"pz":[0,-1],"nx":[0,0],"ny":[6,10],"nz":[1,0]},{"size":2,"px":[7,12],"py":[2,20],"pz":[0,-1],"nx":[2,2],"ny":[2,3],"nz":[2,2]},{"size":2,"px":[0,15],"py":[5,21],"pz":[1,-1],"nx":[10,9],"ny":[3,3],"nz":[0,1]},{"size":2,"px":[15,9],"py":[1,0],"pz":[0,1],"nx":[19,3],"ny":[0,3],"nz":[0,-1]},{"size":2,"px":[21,5],"py":[13,5],"pz":[0,2],"nx":[23,6],"ny":[23,5],"nz":[0,-1]},{"size":2,"px":[5,8],"py":[3,1],"pz":[2,-1],"nx":[9,9],"ny":[6,5],"nz":[1,1]},{"size":2,"px":[2,2],"py":[7,7],"pz":[1,-1],"nx":[5,3],"ny":[23,17],"nz":[0,0]},{"size":2,"px":[11,3],"py":[6,4],"pz":[0,-1],"nx":[2,4],"ny":[2,4],"nz":[2,1]},{"size":3,"px":[14,0,17],"py":[20,3,21],"pz":[0,-1,-1],"nx":[11,11,11],"ny":[7,9,10],"nz":[1,1,1]},{"size":5,"px":[11,11,23,23,12],"py":[10,11,21,20,12],"pz":[1,1,0,0,0],"nx":[8,3,6,7,7],"ny":[4,5,11,11,11],"nz":[1,2,1,1,-1]},{"size":2,"px":[11,11],"py":[11,10],"pz":[0,0],"nx":[9,3],"ny":[2,5],"nz":[1,-1]},{"size":2,"px":[12,14],"py":[19,19],"pz":[0,0],"nx":[12,13],"ny":[18,17],"nz":[0,-1]},{"size":5,"px":[13,14,12,15,14],"py":[0,0,1,1,1],"pz":[0,0,0,0,0],"nx":[4,8,4,7,7],"ny":[3,4,2,5,5],"nz":[2,1,2,1,-1]},{"size":2,"px":[17,5],"py":[10,2],"pz":[0,-1],"nx":[4,9],"ny":[2,3],"nz":[2,1]},{"size":2,"px":[18,10],"py":[6,10],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":5,"px":[8,18,8,4,16],"py":[6,12,9,4,13],"pz":[1,0,1,2,0],"nx":[3,4,3,5,5],"ny":[0,2,3,1,1],"nz":[1,0,0,0,-1]},{"size":2,"px":[3,6],"py":[2,4],"pz":[2,1],"nx":[8,0],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[0,0],"py":[4,5],"pz":[2,-1],"nx":[4,2],"ny":[14,7],"nz":[0,1]},{"size":4,"px":[3,4,4,3],"py":[11,12,12,2],"pz":[0,0,-1,-1],"nx":[1,2,1,2],"ny":[11,14,12,16],"nz":[0,0,0,0]},{"size":2,"px":[6,0],"py":[11,0],"pz":[0,-1],"nx":[3,4],"ny":[4,5],"nz":[1,1]},{"size":2,"px":[3,2],"py":[21,11],"pz":[0,1],"nx":[3,2],"ny":[10,0],"nz":[1,-1]},{"size":3,"px":[10,3,13],"py":[2,0,2],"pz":[0,2,0],"nx":[7,16,1],"ny":[10,4,1],"nz":[0,-1,-1]},{"size":2,"px":[6,12],"py":[2,5],"pz":[1,0],"nx":[6,18],"ny":[1,19],"nz":[1,-1]},{"size":2,"px":[3,16],"py":[0,16],"pz":[1,-1],"nx":[11,2],"ny":[5,1],"nz":[0,2]},{"size":2,"px":[11,10],"py":[13,1],"pz":[0,-1],"nx":[1,1],"ny":[22,21],"nz":[0,0]},{"size":2,"px":[11,10],"py":[18,18],"pz":[0,0],"nx":[5,8],"ny":[9,0],"nz":[1,-1]},{"size":2,"px":[3,2],"py":[20,18],"pz":[0,0],"nx":[8,3],"ny":[5,1],"nz":[1,-1]},{"size":2,"px":[14,2],"py":[17,1],"pz":[0,-1],"nx":[14,13],"ny":[15,15],"nz":[0,0]},{"size":2,"px":[3,4],"py":[2,3],"pz":[2,2],"nx":[8,3],"ny":[4,0],"nz":[1,-1]},{"size":5,"px":[8,18,18,8,7],"py":[6,11,11,7,9],"pz":[1,0,-1,-1,-1],"nx":[5,13,5,11,5],"ny":[3,11,0,8,2],"nz":[2,0,2,1,2]},{"size":5,"px":[12,0,5,4,7],"py":[15,0,4,0,9],"pz":[0,-1,-1,-1,-1],"nx":[8,7,4,16,6],"ny":[17,12,9,10,12],"nz":[0,0,1,0,0]},{"size":2,"px":[6,7],"py":[14,1],"pz":[0,-1],"nx":[5,4],"ny":[9,4],"nz":[1,1]},{"size":4,"px":[8,0,22,4],"py":[4,4,23,0],"pz":[0,-1,-1,-1],"nx":[2,4,2,5],"ny":[0,1,2,9],"nz":[2,1,2,1]},{"size":5,"px":[9,9,10,10,8],"py":[0,1,1,2,0],"pz":[1,1,1,1,1],"nx":[4,16,16,16,6],"ny":[2,11,11,11,12],"nz":[2,0,-1,-1,-1]},{"size":2,"px":[6,6],"py":[6,5],"pz":[1,1],"nx":[0,4],"ny":[3,2],"nz":[1,-1]},{"size":3,"px":[10,3,4],"py":[5,9,8],"pz":[1,-1,-1],"nx":[11,23,23],"ny":[7,12,11],"nz":[1,0,0]},{"size":3,"px":[13,12,7],"py":[19,19,10],"pz":[0,0,1],"nx":[13,5,19],"ny":[20,15,22],"nz":[0,-1,-1]},{"size":2,"px":[12,12],"py":[12,13],"pz":[0,0],"nx":[9,10],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[0,12],"py":[1,13],"pz":[2,-1],"nx":[2,7],"ny":[2,13],"nz":[2,0]},{"size":2,"px":[10,10],"py":[8,9],"pz":[1,1],"nx":[19,7],"ny":[23,13],"nz":[0,-1]},{"size":4,"px":[8,7,23,15],"py":[11,12,4,21],"pz":[0,0,-1,-1],"nx":[2,5,1,10],"ny":[6,6,2,13],"nz":[0,1,1,0]},{"size":2,"px":[10,9],"py":[3,3],"pz":[0,0],"nx":[2,3],"ny":[2,4],"nz":[2,-1]},{"size":2,"px":[5,2],"py":[3,4],"pz":[2,-1],"nx":[3,6],"ny":[1,2],"nz":[2,1]},{"size":2,"px":[7,11],"py":[20,16],"pz":[0,-1],"nx":[2,4],"ny":[5,20],"nz":[2,0]},{"size":2,"px":[9,7],"py":[7,5],"pz":[1,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[4,2],"py":[11,3],"pz":[1,2],"nx":[5,5],"ny":[3,5],"nz":[2,-1]},{"size":2,"px":[11,3],"py":[11,5],"pz":[1,-1],"nx":[4,1],"ny":[12,3],"nz":[0,2]},{"size":2,"px":[9,11],"py":[6,4],"pz":[1,-1],"nx":[10,20],"ny":[9,18],"nz":[1,0]},{"size":5,"px":[2,2,2,2,1],"py":[15,13,16,14,7],"pz":[0,0,0,0,1],"nx":[15,8,9,8,4],"ny":[11,6,5,5,4],"nz":[0,1,1,1,-1]},{"size":2,"px":[12,2],"py":[5,5],"pz":[0,-1],"nx":[3,2],"ny":[7,2],"nz":[1,2]},{"size":2,"px":[5,11],"py":[1,3],"pz":[2,1],"nx":[10,10],"ny":[3,3],"nz":[1,-1]},{"size":2,"px":[17,11],"py":[13,18],"pz":[0,-1],"nx":[6,9],"ny":[9,4],"nz":[1,1]},{"size":5,"px":[5,1,2,5,6],"py":[14,4,9,15,23],"pz":[0,2,1,0,0],"nx":[4,9,18,16,17],"ny":[0,1,1,0,0],"nz":[2,1,0,0,0]},{"size":2,"px":[16,17],"py":[0,0],"pz":[0,0],"nx":[23,23],"ny":[5,4],"nz":[0,-1]},{"size":2,"px":[13,8],"py":[20,6],"pz":[0,-1],"nx":[5,6],"ny":[12,10],"nz":[0,1]},{"size":2,"px":[6,15],"py":[15,0],"pz":[0,-1],"nx":[6,3],"ny":[16,4],"nz":[0,1]},{"size":2,"px":[18,20],"py":[7,8],"pz":[0,0],"nx":[18,11],"ny":[9,14],"nz":[0,-1]},{"size":2,"px":[9,4],"py":[12,6],"pz":[0,1],"nx":[3,15],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[0,0],"py":[5,2],"pz":[1,2],"nx":[5,5],"ny":[2,2],"nz":[1,-1]},{"size":2,"px":[5,20],"py":[1,20],"pz":[1,-1],"nx":[15,17],"ny":[1,2],"nz":[0,0]},{"size":2,"px":[7,2],"py":[16,4],"pz":[0,2],"nx":[4,0],"ny":[10,6],"nz":[1,-1]},{"size":2,"px":[3,8],"py":[5,0],"pz":[1,-1],"nx":[1,1],"ny":[10,18],"nz":[1,0]},{"size":2,"px":[22,0],"py":[3,0],"pz":[0,-1],"nx":[23,11],"ny":[4,1],"nz":[0,1]},{"size":3,"px":[19,10,20],"py":[21,8,18],"pz":[0,1,0],"nx":[3,6,20],"ny":[5,11,14],"nz":[2,-1,-1]},{"size":4,"px":[2,1,6,5],"py":[7,4,23,22],"pz":[1,2,0,0],"nx":[9,19,20,4],"ny":[8,11,9,2],"nz":[0,-1,-1,-1]},{"size":2,"px":[3,6],"py":[2,11],"pz":[2,1],"nx":[12,10],"ny":[21,9],"nz":[0,-1]},{"size":4,"px":[6,0,2,2],"py":[6,1,4,1],"pz":[1,-1,-1,-1],"nx":[0,0,0,0],"ny":[5,8,9,4],"nz":[1,0,0,1]},{"size":5,"px":[3,13,6,11,9],"py":[0,3,1,1,2],"pz":[2,0,1,0,0],"nx":[7,20,16,4,7],"ny":[7,2,19,2,6],"nz":[1,0,0,2,1]},{"size":4,"px":[7,5,2,6],"py":[7,7,4,11],"pz":[0,0,2,1],"nx":[7,1,21,0],"ny":[8,4,11,3],"nz":[0,-1,-1,-1]},{"size":2,"px":[2,2],"py":[3,2],"pz":[2,2],"nx":[8,9],"ny":[3,11],"nz":[1,-1]},{"size":2,"px":[7,13],"py":[3,5],"pz":[1,0],"nx":[4,3],"ny":[2,2],"nz":[1,-1]},{"size":4,"px":[3,12,13,11],"py":[0,1,1,1],"pz":[2,0,0,0],"nx":[8,9,13,0],"ny":[4,1,16,3],"nz":[1,-1,-1,-1]},{"size":2,"px":[10,1],"py":[4,14],"pz":[0,-1],"nx":[5,10],"ny":[1,2],"nz":[1,0]},{"size":2,"px":[11,12],"py":[21,21],"pz":[0,0],"nx":[10,11],"ny":[19,19],"nz":[0,0]},{"size":2,"px":[8,12],"py":[6,21],"pz":[1,-1],"nx":[4,8],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[11,7],"py":[19,0],"pz":[0,-1],"nx":[6,5],"ny":[9,11],"nz":[1,1]},{"size":5,"px":[11,11,11,10,10],"py":[10,12,11,13,13],"pz":[0,0,0,0,-1],"nx":[7,13,6,12,7],"ny":[10,6,3,6,11],"nz":[0,0,1,0,0]},{"size":2,"px":[12,11],"py":[6,12],"pz":[0,-1],"nx":[4,8],"ny":[4,4],"nz":[1,1]},{"size":5,"px":[16,15,16,15,17],"py":[1,0,0,1,1],"pz":[0,0,0,0,0],"nx":[13,7,6,12,12],"ny":[5,4,3,6,6],"nz":[0,1,1,0,-1]},{"size":2,"px":[2,3],"py":[1,3],"pz":[2,1],"nx":[1,5],"ny":[1,3],"nz":[2,-1]},{"size":2,"px":[6,3],"py":[13,6],"pz":[0,1],"nx":[4,9],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[0,3],"py":[4,3],"pz":[1,-1],"nx":[4,8],"ny":[3,6],"nz":[2,1]},{"size":2,"px":[6,3],"py":[2,1],"pz":[0,1],"nx":[5,5],"ny":[7,21],"nz":[1,-1]},{"size":2,"px":[8,4],"py":[0,0],"pz":[1,-1],"nx":[19,17],"ny":[1,0],"nz":[0,0]},{"size":4,"px":[8,11,5,0],"py":[6,1,1,22],"pz":[1,-1,-1,-1],"nx":[0,10,10,1],"ny":[6,12,13,4],"nz":[1,0,0,1]},{"size":2,"px":[8,17],"py":[6,13],"pz":[1,0],"nx":[14,17],"ny":[9,3],"nz":[0,-1]},{"size":2,"px":[5,8],"py":[0,4],"pz":[2,-1],"nx":[9,8],"ny":[1,1],"nz":[0,0]},{"size":2,"px":[11,14],"py":[13,9],"pz":[0,-1],"nx":[23,23],"ny":[21,19],"nz":[0,0]},{"size":2,"px":[10,9],"py":[9,3],"pz":[0,-1],"nx":[6,3],"ny":[2,1],"nz":[1,2]},{"size":2,"px":[11,1],"py":[4,4],"pz":[0,-1],"nx":[2,4],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[5,9],"py":[3,3],"pz":[2,-1],"nx":[17,9],"ny":[12,5],"nz":[0,1]},{"size":2,"px":[9,7],"py":[18,16],"pz":[0,-1],"nx":[5,2],"ny":[9,5],"nz":[1,2]},{"size":2,"px":[3,6],"py":[0,1],"pz":[1,-1],"nx":[4,5],"ny":[1,0],"nz":[0,0]}],"alpha":[-1.149973e+00,1.149973e+00,-6.844773e-01,6.844773e-01,-6.635048e-01,6.635048e-01,-4.888349e-01,4.888349e-01,-4.267976e-01,4.267976e-01,-4.258100e-01,4.258100e-01,-4.815853e-01,4.815853e-01,-4.091859e-01,4.091859e-01,-3.137414e-01,3.137414e-01,-3.339860e-01,3.339860e-01,-3.891196e-01,3.891196e-01,-4.167691e-01,4.167691e-01,-3.186609e-01,3.186609e-01,-2.957171e-01,2.957171e-01,-3.210062e-01,3.210062e-01,-2.725684e-01,2.725684e-01,-2.452176e-01,2.452176e-01,-2.812662e-01,2.812662e-01,-3.029622e-01,3.029622e-01,-3.293745e-01,3.293745e-01,-3.441536e-01,3.441536e-01,-2.946918e-01,2.946918e-01,-2.890545e-01,2.890545e-01,-1.949205e-01,1.949205e-01,-2.176102e-01,2.176102e-01,-2.595190e-01,2.595190e-01,-2.690931e-01,2.690931e-01,-2.130294e-01,2.130294e-01,-2.316308e-01,2.316308e-01,-2.798562e-01,2.798562e-01,-2.146988e-01,2.146988e-01,-2.332089e-01,2.332089e-01,-2.470614e-01,2.470614e-01,-2.204300e-01,2.204300e-01,-2.272045e-01,2.272045e-01,-2.583686e-01,2.583686e-01,-2.072299e-01,2.072299e-01,-1.834971e-01,1.834971e-01,-2.332656e-01,2.332656e-01,-3.271297e-01,3.271297e-01,-2.401937e-01,2.401937e-01,-2.006316e-01,2.006316e-01,-2.401947e-01,2.401947e-01,-2.475346e-01,2.475346e-01,-2.579532e-01,2.579532e-01,-2.466235e-01,2.466235e-01,-1.787582e-01,1.787582e-01,-2.036892e-01,2.036892e-01,-1.665028e-01,1.665028e-01,-1.576510e-01,1.576510e-01,-2.036997e-01,2.036997e-01,-2.040734e-01,2.040734e-01,-1.792532e-01,1.792532e-01,-2.174767e-01,2.174767e-01,-1.876948e-01,1.876948e-01,-1.883137e-01,1.883137e-01,-1.923872e-01,1.923872e-01,-2.620218e-01,2.620218e-01,-1.659873e-01,1.659873e-01,-1.475948e-01,1.475948e-01,-1.731607e-01,1.731607e-01,-2.059256e-01,2.059256e-01,-1.586309e-01,1.586309e-01,-1.607668e-01,1.607668e-01,-1.975101e-01,1.975101e-01,-2.130745e-01,2.130745e-01,-1.898872e-01,1.898872e-01,-2.052598e-01,2.052598e-01,-1.599397e-01,1.599397e-01,-1.770134e-01,1.770134e-01,-1.888249e-01,1.888249e-01,-1.515406e-01,1.515406e-01,-1.907771e-01,1.907771e-01,-1.698406e-01,1.698406e-01,-2.079535e-01,2.079535e-01,-1.966967e-01,1.966967e-01,-1.631391e-01,1.631391e-01,-2.158666e-01,2.158666e-01,-2.891774e-01,2.891774e-01,-1.581556e-01,1.581556e-01,-1.475359e-01,1.475359e-01,-1.806169e-01,1.806169e-01,-1.782238e-01,1.782238e-01,-1.660440e-01,1.660440e-01,-1.576919e-01,1.576919e-01,-1.741775e-01,1.741775e-01,-1.427265e-01,1.427265e-01,-1.695880e-01,1.695880e-01,-1.486712e-01,1.486712e-01,-1.533565e-01,1.533565e-01,-1.601464e-01,1.601464e-01,-1.978414e-01,1.978414e-01,-1.746566e-01,1.746566e-01,-1.794736e-01,1.794736e-01,-1.896567e-01,1.896567e-01,-1.666197e-01,1.666197e-01,-1.969351e-01,1.969351e-01,-2.321735e-01,2.321735e-01,-1.592485e-01,1.592485e-01,-1.671464e-01,1.671464e-01,-1.688885e-01,1.688885e-01,-1.868042e-01,1.868042e-01,-1.301138e-01,1.301138e-01,-1.330094e-01,1.330094e-01,-1.268423e-01,1.268423e-01,-1.820868e-01,1.820868e-01,-1.881020e-01,1.881020e-01,-1.580814e-01,1.580814e-01,-1.302653e-01,1.302653e-01,-1.787262e-01,1.787262e-01,-1.658453e-01,1.658453e-01,-1.240772e-01,1.240772e-01,-1.315621e-01,1.315621e-01,-1.756341e-01,1.756341e-01,-1.429438e-01,1.429438e-01,-1.351775e-01,1.351775e-01,-2.035692e-01,2.035692e-01,-1.267670e-01,1.267670e-01,-1.288470e-01,1.288470e-01,-1.393648e-01,1.393648e-01,-1.755962e-01,1.755962e-01,-1.308445e-01,1.308445e-01,-1.703894e-01,1.703894e-01,-1.461334e-01,1.461334e-01,-1.368683e-01,1.368683e-01,-1.244085e-01,1.244085e-01,-1.718163e-01,1.718163e-01,-1.415624e-01,1.415624e-01,-1.752024e-01,1.752024e-01,-1.666463e-01,1.666463e-01,-1.407325e-01,1.407325e-01,-1.258317e-01,1.258317e-01,-1.416511e-01,1.416511e-01,-1.420816e-01,1.420816e-01,-1.562547e-01,1.562547e-01,-1.542952e-01,1.542952e-01,-1.158829e-01,1.158829e-01,-1.392875e-01,1.392875e-01,-1.610095e-01,1.610095e-01,-1.546440e-01,1.546440e-01,-1.416235e-01,1.416235e-01,-2.028817e-01,2.028817e-01,-1.106779e-01,1.106779e-01,-9.231660e-02,9.231660e-02,-1.164460e-01,1.164460e-01,-1.701578e-01,1.701578e-01,-1.277995e-01,1.277995e-01,-1.946177e-01,1.946177e-01,-1.394509e-01,1.394509e-01,-1.370145e-01,1.370145e-01,-1.446031e-01,1.446031e-01,-1.665215e-01,1.665215e-01,-1.435822e-01,1.435822e-01,-1.559354e-01,1.559354e-01,-1.591860e-01,1.591860e-01,-1.193338e-01,1.193338e-01,-1.236954e-01,1.236954e-01,-1.209139e-01,1.209139e-01,-1.267385e-01,1.267385e-01,-1.232397e-01,1.232397e-01,-1.299632e-01,1.299632e-01,-1.302020e-01,1.302020e-01,-1.202975e-01,1.202975e-01,-1.525378e-01,1.525378e-01,-1.123073e-01,1.123073e-01,-1.605678e-01,1.605678e-01,-1.406867e-01,1.406867e-01,-1.354273e-01,1.354273e-01,-1.393192e-01,1.393192e-01,-1.278263e-01,1.278263e-01,-1.172073e-01,1.172073e-01,-1.153493e-01,1.153493e-01,-1.356318e-01,1.356318e-01,-1.316614e-01,1.316614e-01,-1.374489e-01,1.374489e-01,-1.018254e-01,1.018254e-01,-1.473336e-01,1.473336e-01,-1.289687e-01,1.289687e-01,-1.299183e-01,1.299183e-01,-1.178391e-01,1.178391e-01,-1.619059e-01,1.619059e-01,-1.842569e-01,1.842569e-01,-1.829095e-01,1.829095e-01,-1.939918e-01,1.939918e-01,-1.395362e-01,1.395362e-01,-1.774673e-01,1.774673e-01,-1.688216e-01,1.688216e-01,-1.671747e-01,1.671747e-01,-1.850178e-01,1.850178e-01,-1.106695e-01,1.106695e-01,-1.258323e-01,1.258323e-01,-1.246819e-01,1.246819e-01,-9.892193e-02,9.892193e-02,-1.399638e-01,1.399638e-01,-1.228375e-01,1.228375e-01,-1.756236e-01,1.756236e-01,-1.360307e-01,1.360307e-01,-1.266574e-01,1.266574e-01,-1.372135e-01,1.372135e-01,-1.175947e-01,1.175947e-01,-1.330075e-01,1.330075e-01,-1.396152e-01,1.396152e-01,-2.088443e-01,2.088443e-01]},{"count":301,"threshold":-4.887516e+00,"feature":[{"size":5,"px":[8,11,8,14,10],"py":[6,9,3,3,4],"pz":[1,0,0,0,0],"nx":[8,7,19,7,13],"ny":[11,8,8,5,8],"nz":[1,1,0,1,0]},{"size":5,"px":[14,3,13,12,12],"py":[4,6,4,4,8],"pz":[0,1,0,0,0],"nx":[2,5,2,10,10],"ny":[2,8,5,8,8],"nz":[2,1,2,0,-1]},{"size":5,"px":[6,5,3,7,7],"py":[2,3,1,2,2],"pz":[0,0,1,0,-1],"nx":[2,2,1,2,1],"ny":[3,1,2,2,2],"nz":[0,0,2,0,1]},{"size":5,"px":[3,3,6,12,8],"py":[4,2,4,10,17],"pz":[2,2,1,0,0],"nx":[4,8,8,2,1],"ny":[4,4,4,2,2],"nz":[1,1,-1,-1,-1]},{"size":5,"px":[18,19,17,9,16],"py":[1,2,2,0,2],"pz":[0,0,0,1,0],"nx":[23,23,22,22,22],"ny":[4,3,1,0,2],"nz":[0,0,0,0,0]},{"size":3,"px":[15,4,14],"py":[23,4,18],"pz":[0,2,0],"nx":[7,0,5],"ny":[10,4,9],"nz":[1,-1,-1]},{"size":5,"px":[11,11,16,11,17],"py":[8,6,11,7,11],"pz":[0,0,0,0,0],"nx":[8,4,14,14,1],"ny":[4,4,8,8,5],"nz":[1,1,0,-1,-1]},{"size":5,"px":[12,12,12,12,12],"py":[13,10,11,12,12],"pz":[0,0,0,0,-1],"nx":[4,4,1,2,9],"ny":[8,10,2,4,15],"nz":[0,1,2,1,0]},{"size":2,"px":[19,0],"py":[14,17],"pz":[0,-1],"nx":[20,19],"ny":[15,22],"nz":[0,0]},{"size":5,"px":[3,3,1,3,5],"py":[13,15,6,14,22],"pz":[0,0,1,0,0],"nx":[0,0,1,0,0],"ny":[11,21,23,5,5],"nz":[1,0,0,2,-1]},{"size":5,"px":[4,2,10,4,3],"py":[19,4,13,16,13],"pz":[0,1,0,0,0],"nx":[3,20,7,4,0],"ny":[4,19,5,1,5],"nz":[1,-1,-1,-1,-1]},{"size":2,"px":[11,5],"py":[4,4],"pz":[0,-1],"nx":[15,3],"ny":[15,1],"nz":[0,2]},{"size":4,"px":[17,17,12,11],"py":[14,15,18,18],"pz":[0,0,0,0],"nx":[11,4,1,0],"ny":[17,20,8,5],"nz":[0,-1,-1,-1]},{"size":5,"px":[6,2,1,2,11],"py":[14,4,1,1,18],"pz":[0,-1,-1,-1,-1],"nx":[5,5,3,5,2],"ny":[18,17,7,9,2],"nz":[0,0,1,1,2]},{"size":5,"px":[20,19,20,15,20],"py":[17,20,12,12,8],"pz":[0,0,0,0,0],"nx":[17,0,5,2,2],"ny":[8,4,9,2,2],"nz":[0,-1,-1,-1,-1]},{"size":2,"px":[6,8],"py":[7,11],"pz":[1,-1],"nx":[7,8],"ny":[7,10],"nz":[1,1]},{"size":5,"px":[15,16,14,8,8],"py":[2,2,2,0,0],"pz":[0,0,0,1,-1],"nx":[20,11,21,18,19],"ny":[3,6,5,1,2],"nz":[0,1,0,0,0]},{"size":4,"px":[17,18,9,8],"py":[23,21,7,8],"pz":[0,0,1,1],"nx":[8,17,10,18],"ny":[4,12,2,1],"nz":[1,-1,-1,-1]},{"size":5,"px":[2,2,9,4,8],"py":[7,3,12,12,23],"pz":[1,1,0,0,0],"nx":[0,0,0,0,0],"ny":[3,1,2,4,4],"nz":[0,0,0,0,-1]},{"size":3,"px":[7,8,5],"py":[22,23,9],"pz":[0,0,1],"nx":[9,4,2],"ny":[21,4,0],"nz":[0,-1,-1]},{"size":2,"px":[3,3],"py":[7,7],"pz":[1,-1],"nx":[3,2],"ny":[4,2],"nz":[1,2]},{"size":5,"px":[15,11,10,3,17],"py":[0,1,2,3,1],"pz":[0,0,0,2,0],"nx":[5,8,4,3,3],"ny":[9,4,7,10,10],"nz":[1,1,1,1,-1]},{"size":3,"px":[22,11,22],"py":[12,5,14],"pz":[0,1,0],"nx":[23,23,3],"ny":[22,23,8],"nz":[0,0,-1]},{"size":2,"px":[3,11],"py":[7,5],"pz":[1,-1],"nx":[8,2],"ny":[14,5],"nz":[0,2]},{"size":4,"px":[17,16,2,4],"py":[14,13,5,0],"pz":[0,0,-1,-1],"nx":[8,9,15,8],"ny":[8,9,14,7],"nz":[1,1,0,1]},{"size":2,"px":[5,16],"py":[6,13],"pz":[1,-1],"nx":[2,1],"ny":[4,2],"nz":[1,2]},{"size":5,"px":[1,0,1,2,1],"py":[15,2,16,19,12],"pz":[0,2,0,0,0],"nx":[8,7,4,9,9],"ny":[5,11,4,5,5],"nz":[1,1,1,1,-1]},{"size":2,"px":[8,7],"py":[11,12],"pz":[0,0],"nx":[9,1],"ny":[10,16],"nz":[0,-1]},{"size":2,"px":[15,13],"py":[17,10],"pz":[0,-1],"nx":[7,4],"ny":[8,4],"nz":[1,2]},{"size":5,"px":[11,10,7,8,9],"py":[0,0,1,1,1],"pz":[0,0,0,0,0],"nx":[4,5,4,5,6],"ny":[1,0,2,1,0],"nz":[0,0,0,0,-1]},{"size":2,"px":[2,2],"py":[4,3],"pz":[2,2],"nx":[3,21],"ny":[4,20],"nz":[1,-1]},{"size":5,"px":[10,11,5,2,11],"py":[12,10,6,11,11],"pz":[0,0,1,0,0],"nx":[4,15,16,7,7],"ny":[5,10,11,10,10],"nz":[1,0,0,0,-1]},{"size":5,"px":[13,14,1,11,11],"py":[2,2,3,2,2],"pz":[0,0,2,0,-1],"nx":[3,0,0,1,0],"ny":[23,15,14,9,8],"nz":[0,0,0,1,1]},{"size":2,"px":[17,2],"py":[13,5],"pz":[0,-1],"nx":[4,9],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[10,5],"py":[4,1],"pz":[0,-1],"nx":[11,3],"ny":[3,0],"nz":[0,2]},{"size":2,"px":[5,3],"py":[3,3],"pz":[2,-1],"nx":[11,23],"ny":[8,14],"nz":[1,0]},{"size":3,"px":[22,22,22],"py":[16,18,9],"pz":[0,0,0],"nx":[13,2,0],"ny":[17,3,5],"nz":[0,-1,-1]},{"size":5,"px":[13,10,13,14,11],"py":[2,2,1,2,1],"pz":[0,0,0,0,0],"nx":[3,3,8,6,6],"ny":[2,5,4,11,11],"nz":[2,2,1,1,-1]},{"size":3,"px":[12,1,1],"py":[14,0,1],"pz":[0,-1,-1],"nx":[8,15,7],"ny":[1,2,0],"nz":[1,0,1]},{"size":2,"px":[4,5],"py":[20,23],"pz":[0,0],"nx":[3,3],"ny":[10,2],"nz":[1,-1]},{"size":2,"px":[2,4],"py":[7,2],"pz":[1,-1],"nx":[4,3],"ny":[23,16],"nz":[0,0]},{"size":3,"px":[3,3,6],"py":[5,2,4],"pz":[2,2,1],"nx":[3,1,2],"ny":[5,17,0],"nz":[1,-1,-1]},{"size":2,"px":[14,8],"py":[17,6],"pz":[0,1],"nx":[13,10],"ny":[16,9],"nz":[0,-1]},{"size":5,"px":[15,7,14,13,14],"py":[1,0,0,0,1],"pz":[0,1,0,0,0],"nx":[4,4,4,8,8],"ny":[5,3,2,10,10],"nz":[2,2,2,1,-1]},{"size":5,"px":[8,9,4,5,4],"py":[13,12,9,5,7],"pz":[0,0,1,1,1],"nx":[22,21,22,22,22],"ny":[4,0,3,2,2],"nz":[0,0,0,0,-1]},{"size":2,"px":[17,17],"py":[16,13],"pz":[0,0],"nx":[14,21],"ny":[8,0],"nz":[0,-1]},{"size":2,"px":[16,10],"py":[4,9],"pz":[0,-1],"nx":[16,10],"ny":[3,3],"nz":[0,1]},{"size":5,"px":[1,1,0,1,0],"py":[17,16,7,15,8],"pz":[0,0,1,0,0],"nx":[4,3,8,9,7],"ny":[3,3,6,6,6],"nz":[1,1,0,0,-1]},{"size":2,"px":[3,3],"py":[2,3],"pz":[2,2],"nx":[8,3],"ny":[4,3],"nz":[1,-1]},{"size":2,"px":[10,2],"py":[17,4],"pz":[0,2],"nx":[10,12],"ny":[15,14],"nz":[0,-1]},{"size":2,"px":[11,11],"py":[14,12],"pz":[0,0],"nx":[9,10],"ny":[13,11],"nz":[0,0]},{"size":2,"px":[12,13],"py":[5,5],"pz":[0,0],"nx":[3,4],"ny":[4,1],"nz":[1,-1]},{"size":5,"px":[7,10,8,11,11],"py":[13,2,12,2,2],"pz":[0,0,0,0,-1],"nx":[10,1,1,10,1],"ny":[12,5,3,13,1],"nz":[0,1,1,0,2]},{"size":2,"px":[6,10],"py":[4,2],"pz":[1,-1],"nx":[4,6],"ny":[4,9],"nz":[1,1]},{"size":2,"px":[20,20],"py":[21,22],"pz":[0,0],"nx":[15,8],"ny":[5,5],"nz":[0,-1]},{"size":2,"px":[4,3],"py":[3,3],"pz":[2,2],"nx":[9,17],"ny":[4,15],"nz":[1,-1]},{"size":3,"px":[2,2,4],"py":[3,3,7],"pz":[2,-1,-1],"nx":[7,4,4],"ny":[6,5,4],"nz":[1,2,2]},{"size":5,"px":[8,9,16,17,17],"py":[1,2,1,1,1],"pz":[1,1,0,0,-1],"nx":[2,2,4,2,4],"ny":[16,14,22,15,21],"nz":[0,0,0,0,0]},{"size":2,"px":[9,9],"py":[18,0],"pz":[0,-1],"nx":[2,5],"ny":[5,8],"nz":[2,1]},{"size":2,"px":[7,8],"py":[11,11],"pz":[0,0],"nx":[15,5],"ny":[8,8],"nz":[0,-1]},{"size":2,"px":[0,3],"py":[4,3],"pz":[2,-1],"nx":[1,6],"ny":[4,14],"nz":[2,0]},{"size":2,"px":[6,12],"py":[7,11],"pz":[1,-1],"nx":[0,0],"ny":[7,12],"nz":[1,0]},{"size":2,"px":[3,7],"py":[10,22],"pz":[1,0],"nx":[4,3],"ny":[10,0],"nz":[1,-1]},{"size":2,"px":[5,19],"py":[4,21],"pz":[2,-1],"nx":[11,11],"ny":[8,9],"nz":[1,1]},{"size":2,"px":[3,3],"py":[8,7],"pz":[1,1],"nx":[4,20],"ny":[4,5],"nz":[1,-1]},{"size":5,"px":[11,23,23,23,23],"py":[7,13,19,20,21],"pz":[1,0,0,0,0],"nx":[4,3,2,8,8],"ny":[11,5,5,23,23],"nz":[1,1,2,0,-1]},{"size":2,"px":[4,1],"py":[0,2],"pz":[0,0],"nx":[0,6],"ny":[0,11],"nz":[0,-1]},{"size":2,"px":[11,8],"py":[12,1],"pz":[0,-1],"nx":[23,23],"ny":[13,12],"nz":[0,0]},{"size":5,"px":[23,11,23,11,11],"py":[13,7,12,5,6],"pz":[0,1,0,1,1],"nx":[6,3,8,7,7],"ny":[12,4,4,11,11],"nz":[0,1,1,0,-1]},{"size":2,"px":[20,5],"py":[15,5],"pz":[0,-1],"nx":[10,10],"ny":[11,10],"nz":[1,1]},{"size":2,"px":[11,4],"py":[19,8],"pz":[0,1],"nx":[11,19],"ny":[18,2],"nz":[0,-1]},{"size":2,"px":[14,6],"py":[3,4],"pz":[0,-1],"nx":[8,15],"ny":[1,0],"nz":[1,0]},{"size":4,"px":[14,5,13,12],"py":[23,3,23,23],"pz":[0,1,0,0],"nx":[12,0,1,4],"ny":[21,3,2,4],"nz":[0,-1,-1,-1]},{"size":2,"px":[19,5],"py":[12,2],"pz":[0,-1],"nx":[4,7],"ny":[3,5],"nz":[2,1]},{"size":2,"px":[0,8],"py":[5,3],"pz":[2,-1],"nx":[5,22],"ny":[3,11],"nz":[2,0]},{"size":2,"px":[2,6],"py":[3,12],"pz":[2,0],"nx":[3,5],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[5,5],"py":[0,6],"pz":[2,-1],"nx":[14,6],"ny":[4,2],"nz":[0,1]},{"size":2,"px":[16,11],"py":[1,0],"pz":[0,-1],"nx":[4,8],"ny":[4,10],"nz":[2,1]},{"size":2,"px":[9,4],"py":[4,3],"pz":[1,1],"nx":[5,8],"ny":[0,10],"nz":[2,-1]},{"size":2,"px":[16,1],"py":[22,1],"pz":[0,-1],"nx":[2,2],"ny":[4,2],"nz":[2,2]},{"size":2,"px":[12,2],"py":[11,2],"pz":[0,-1],"nx":[5,5],"ny":[1,0],"nz":[2,2]},{"size":2,"px":[11,11],"py":[4,3],"pz":[1,1],"nx":[7,5],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[9,2],"py":[22,3],"pz":[0,2],"nx":[4,9],"ny":[10,11],"nz":[1,-1]},{"size":2,"px":[2,4],"py":[8,10],"pz":[1,-1],"nx":[5,3],"ny":[23,18],"nz":[0,0]},{"size":2,"px":[12,6],"py":[21,9],"pz":[0,-1],"nx":[11,23],"ny":[6,10],"nz":[1,0]},{"size":2,"px":[9,9],"py":[8,7],"pz":[1,1],"nx":[18,8],"ny":[18,6],"nz":[0,-1]},{"size":2,"px":[13,3],"py":[19,0],"pz":[0,-1],"nx":[6,5],"ny":[9,11],"nz":[1,1]},{"size":5,"px":[2,10,9,7,8],"py":[0,1,0,1,0],"pz":[2,0,0,0,0],"nx":[3,4,6,8,8],"ny":[2,4,9,4,4],"nz":[2,1,1,1,-1]},{"size":2,"px":[8,4],"py":[6,3],"pz":[1,2],"nx":[9,4],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[0,4],"py":[23,3],"pz":[0,-1],"nx":[12,9],"ny":[2,2],"nz":[0,0]},{"size":2,"px":[4,2],"py":[10,3],"pz":[1,2],"nx":[0,2],"ny":[23,5],"nz":[0,-1]},{"size":2,"px":[12,14],"py":[18,0],"pz":[0,-1],"nx":[12,8],"ny":[16,10],"nz":[0,1]},{"size":4,"px":[10,18,7,5],"py":[14,8,0,3],"pz":[0,-1,-1,-1],"nx":[8,6,8,5],"ny":[11,12,5,5],"nz":[0,0,1,1]},{"size":2,"px":[6,5],"py":[2,2],"pz":[1,1],"nx":[8,8],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[12,10],"py":[20,20],"pz":[0,0],"nx":[11,10],"ny":[19,19],"nz":[0,0]},{"size":2,"px":[17,10],"py":[16,20],"pz":[0,-1],"nx":[8,7],"ny":[4,8],"nz":[1,1]},{"size":3,"px":[2,1,3],"py":[20,4,21],"pz":[0,2,0],"nx":[3,4,0],"ny":[10,1,0],"nz":[1,-1,-1]},{"size":5,"px":[6,7,3,6,6],"py":[15,14,7,16,19],"pz":[0,0,1,0,0],"nx":[0,0,0,0,0],"ny":[18,19,16,17,17],"nz":[0,0,0,0,-1]},{"size":2,"px":[8,16],"py":[6,12],"pz":[1,0],"nx":[8,15],"ny":[4,10],"nz":[1,-1]},{"size":5,"px":[0,0,0,0,0],"py":[1,3,2,0,4],"pz":[2,2,2,2,1],"nx":[13,8,14,4,7],"ny":[23,6,23,3,9],"nz":[0,1,0,2,-1]},{"size":2,"px":[3,6],"py":[3,5],"pz":[2,1],"nx":[10,8],"ny":[11,6],"nz":[0,-1]},{"size":2,"px":[11,10],"py":[4,4],"pz":[0,0],"nx":[8,5],"ny":[4,9],"nz":[1,-1]},{"size":5,"px":[15,18,9,16,4],"py":[12,13,6,23,3],"pz":[0,0,1,0,2],"nx":[6,3,6,2,7],"ny":[2,3,0,1,0],"nz":[0,0,0,1,0]},{"size":2,"px":[4,18],"py":[12,13],"pz":[0,-1],"nx":[2,8],"ny":[3,4],"nz":[2,1]},{"size":2,"px":[4,2],"py":[10,4],"pz":[1,2],"nx":[3,3],"ny":[5,0],"nz":[2,-1]},{"size":2,"px":[9,19],"py":[7,8],"pz":[1,0],"nx":[8,3],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[6,0],"py":[6,0],"pz":[0,-1],"nx":[0,0],"ny":[7,2],"nz":[1,2]},{"size":2,"px":[8,8],"py":[0,0],"pz":[1,-1],"nx":[17,18],"ny":[0,2],"nz":[0,0]},{"size":4,"px":[13,4,4,1],"py":[14,7,3,5],"pz":[0,-1,-1,-1],"nx":[3,16,3,7],"ny":[1,15,5,13],"nz":[2,0,2,0]},{"size":2,"px":[4,9],"py":[6,11],"pz":[1,0],"nx":[3,23],"ny":[4,8],"nz":[1,-1]},{"size":5,"px":[9,17,4,16,16],"py":[2,3,1,3,3],"pz":[1,0,2,0,-1],"nx":[2,3,3,2,3],"ny":[1,7,2,3,3],"nz":[2,1,1,1,1]},{"size":2,"px":[10,5],"py":[22,9],"pz":[0,1],"nx":[10,3],"ny":[21,2],"nz":[0,-1]},{"size":2,"px":[11,11],"py":[6,3],"pz":[0,-1],"nx":[8,5],"ny":[4,3],"nz":[1,1]},{"size":2,"px":[10,5],"py":[8,3],"pz":[0,-1],"nx":[14,5],"ny":[14,2],"nz":[0,2]},{"size":2,"px":[7,8],"py":[3,2],"pz":[0,-1],"nx":[8,2],"ny":[18,2],"nz":[0,2]},{"size":2,"px":[1,1],"py":[19,11],"pz":[0,1],"nx":[9,4],"ny":[5,1],"nz":[0,-1]},{"size":2,"px":[2,4],"py":[3,6],"pz":[2,1],"nx":[3,3],"ny":[4,4],"nz":[1,-1]},{"size":5,"px":[7,15,13,14,4],"py":[6,12,9,11,4],"pz":[1,0,0,0,2],"nx":[7,3,8,4,5],"ny":[0,3,0,2,1],"nz":[0,0,0,0,0]},{"size":5,"px":[10,13,7,8,9],"py":[0,1,1,0,1],"pz":[0,0,0,0,0],"nx":[7,4,4,4,8],"ny":[8,3,4,2,4],"nz":[1,2,2,2,1]},{"size":2,"px":[6,1],"py":[6,0],"pz":[1,-1],"nx":[11,7],"ny":[3,2],"nz":[0,1]},{"size":2,"px":[13,0],"py":[13,2],"pz":[0,-1],"nx":[0,1],"ny":[13,16],"nz":[0,0]},{"size":2,"px":[8,17],"py":[6,13],"pz":[1,0],"nx":[8,1],"ny":[4,16],"nz":[1,-1]},{"size":5,"px":[12,11,3,6,17],"py":[4,4,1,2,14],"pz":[0,0,2,1,0],"nx":[6,23,23,6,23],"ny":[5,7,6,6,14],"nz":[1,0,0,1,0]},{"size":2,"px":[5,22],"py":[4,17],"pz":[2,-1],"nx":[4,8],"ny":[5,7],"nz":[2,1]},{"size":2,"px":[15,14],"py":[1,1],"pz":[0,0],"nx":[4,7],"ny":[2,4],"nz":[2,-1]},{"size":2,"px":[15,17],"py":[12,7],"pz":[0,-1],"nx":[14,10],"ny":[11,4],"nz":[0,1]},{"size":4,"px":[10,2,9,15],"py":[5,11,1,13],"pz":[0,-1,-1,-1],"nx":[11,3,3,13],"ny":[1,1,0,1],"nz":[0,2,2,0]},{"size":2,"px":[7,21],"py":[15,22],"pz":[0,-1],"nx":[4,9],"ny":[8,14],"nz":[1,0]},{"size":2,"px":[6,5],"py":[21,2],"pz":[0,-1],"nx":[3,5],"ny":[11,21],"nz":[1,0]},{"size":2,"px":[17,7],"py":[2,0],"pz":[0,-1],"nx":[4,8],"ny":[5,11],"nz":[2,1]},{"size":2,"px":[11,8],"py":[10,4],"pz":[0,-1],"nx":[13,12],"ny":[3,3],"nz":[0,0]},{"size":2,"px":[6,5],"py":[2,2],"pz":[1,1],"nx":[7,1],"ny":[8,2],"nz":[0,-1]},{"size":5,"px":[0,0,1,0,0],"py":[12,4,14,0,2],"pz":[0,1,0,2,2],"nx":[9,5,8,4,4],"ny":[6,3,6,3,3],"nz":[0,1,0,1,-1]},{"size":5,"px":[8,0,0,3,2],"py":[6,5,0,8,2],"pz":[1,-1,-1,-1,-1],"nx":[23,7,22,11,4],"ny":[12,6,14,4,3],"nz":[0,1,0,1,2]},{"size":4,"px":[12,12,4,8],"py":[12,11,3,10],"pz":[0,0,-1,-1],"nx":[0,0,0,0],"ny":[2,1,0,3],"nz":[1,2,2,1]},{"size":2,"px":[10,6],"py":[7,6],"pz":[1,-1],"nx":[16,4],"ny":[12,2],"nz":[0,2]},{"size":5,"px":[2,1,3,3,3],"py":[14,8,20,21,21],"pz":[0,1,0,0,-1],"nx":[20,10,21,21,21],"ny":[23,11,21,23,20],"nz":[0,1,0,0,0]},{"size":2,"px":[6,13],"py":[2,4],"pz":[1,0],"nx":[7,21],"ny":[8,0],"nz":[0,-1]},{"size":2,"px":[12,3],"py":[17,4],"pz":[0,2],"nx":[11,10],"ny":[15,7],"nz":[0,-1]},{"size":4,"px":[11,0,19,2],"py":[15,2,23,10],"pz":[0,-1,-1,-1],"nx":[6,8,16,2],"ny":[13,11,10,2],"nz":[0,0,0,2]},{"size":2,"px":[6,3],"py":[14,7],"pz":[0,1],"nx":[3,1],"ny":[4,1],"nz":[1,-1]},{"size":4,"px":[12,17,5,10],"py":[19,15,14,3],"pz":[0,-1,-1,-1],"nx":[4,12,6,12],"ny":[4,18,9,22],"nz":[1,0,1,0]},{"size":2,"px":[8,3],"py":[13,5],"pz":[0,-1],"nx":[3,4],"ny":[4,9],"nz":[1,1]},{"size":5,"px":[6,5,4,5,3],"py":[2,1,2,2,0],"pz":[0,0,0,0,1],"nx":[7,4,9,18,18],"ny":[4,4,7,14,14],"nz":[1,1,1,0,-1]},{"size":4,"px":[8,3,20,1],"py":[6,3,18,0],"pz":[1,-1,-1,-1],"nx":[13,11,5,22],"ny":[12,6,2,17],"nz":[0,1,2,0]},{"size":2,"px":[6,3],"py":[6,3],"pz":[1,2],"nx":[8,5],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[21,7],"py":[14,7],"pz":[0,1],"nx":[16,11],"ny":[14,6],"nz":[0,-1]},{"size":2,"px":[10,4],"py":[3,1],"pz":[0,-1],"nx":[9,5],"ny":[0,0],"nz":[0,1]},{"size":2,"px":[4,10],"py":[5,8],"pz":[2,1],"nx":[5,14],"ny":[9,7],"nz":[1,-1]},{"size":2,"px":[9,2],"py":[23,4],"pz":[0,2],"nx":[2,2],"ny":[5,5],"nz":[2,-1]},{"size":5,"px":[10,9,11,10,10],"py":[2,2,1,1,1],"pz":[0,0,0,0,-1],"nx":[2,3,2,4,5],"ny":[4,10,2,4,3],"nz":[2,1,1,0,0]},{"size":2,"px":[11,4],"py":[13,4],"pz":[0,-1],"nx":[8,4],"ny":[4,1],"nz":[1,2]},{"size":2,"px":[17,5],"py":[15,1],"pz":[0,-1],"nx":[20,19],"ny":[14,14],"nz":[0,0]},{"size":2,"px":[2,2],"py":[20,18],"pz":[0,0],"nx":[2,1],"ny":[23,5],"nz":[0,-1]},{"size":2,"px":[10,1],"py":[18,3],"pz":[0,2],"nx":[11,3],"ny":[16,5],"nz":[0,-1]},{"size":2,"px":[3,8],"py":[6,10],"pz":[1,0],"nx":[9,0],"ny":[9,3],"nz":[0,-1]},{"size":2,"px":[20,10],"py":[21,7],"pz":[0,1],"nx":[7,2],"ny":[3,5],"nz":[1,-1]},{"size":2,"px":[10,6],"py":[4,7],"pz":[1,-1],"nx":[23,5],"ny":[9,2],"nz":[0,2]},{"size":5,"px":[2,4,5,3,4],"py":[0,1,1,2,2],"pz":[1,0,0,0,0],"nx":[1,0,1,1,1],"ny":[2,1,0,1,1],"nz":[0,1,0,0,-1]},{"size":2,"px":[8,16],"py":[7,13],"pz":[1,0],"nx":[8,3],"ny":[4,16],"nz":[1,-1]},{"size":2,"px":[17,15],"py":[7,19],"pz":[0,-1],"nx":[4,8],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[4,3],"py":[11,5],"pz":[1,2],"nx":[7,8],"ny":[9,4],"nz":[1,-1]},{"size":2,"px":[23,11],"py":[9,6],"pz":[0,1],"nx":[22,22],"ny":[23,23],"nz":[0,-1]},{"size":2,"px":[23,23],"py":[21,20],"pz":[0,0],"nx":[2,2],"ny":[5,4],"nz":[1,-1]},{"size":2,"px":[17,4],"py":[12,2],"pz":[0,-1],"nx":[9,8],"ny":[4,5],"nz":[1,1]},{"size":2,"px":[6,14],"py":[2,4],"pz":[1,0],"nx":[7,18],"ny":[1,1],"nz":[1,-1]},{"size":2,"px":[20,22],"py":[1,2],"pz":[0,0],"nx":[23,23],"ny":[1,1],"nz":[0,-1]},{"size":2,"px":[0,1],"py":[9,10],"pz":[1,1],"nx":[8,0],"ny":[15,0],"nz":[0,-1]},{"size":3,"px":[11,11,6],"py":[10,11,11],"pz":[0,0,-1],"nx":[23,23,23],"ny":[19,21,20],"nz":[0,0,0]},{"size":5,"px":[23,23,23,6,6],"py":[21,22,22,3,6],"pz":[0,0,-1,-1,-1],"nx":[8,8,8,17,4],"ny":[7,10,8,16,5],"nz":[1,1,1,0,2]},{"size":2,"px":[10,23],"py":[1,22],"pz":[0,-1],"nx":[7,2],"ny":[11,2],"nz":[0,2]},{"size":2,"px":[7,14],"py":[3,10],"pz":[1,-1],"nx":[5,3],"ny":[2,1],"nz":[0,1]},{"size":2,"px":[5,3],"py":[13,7],"pz":[0,1],"nx":[4,10],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[10,0],"py":[15,6],"pz":[0,-1],"nx":[3,6],"ny":[1,2],"nz":[2,1]},{"size":2,"px":[13,4],"py":[18,17],"pz":[0,-1],"nx":[7,6],"ny":[10,7],"nz":[1,1]},{"size":2,"px":[12,11],"py":[3,8],"pz":[0,-1],"nx":[7,8],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[17,4],"py":[5,7],"pz":[0,1],"nx":[17,10],"ny":[4,0],"nz":[0,-1]},{"size":5,"px":[16,8,16,15,15],"py":[0,0,1,0,1],"pz":[0,1,0,0,0],"nx":[7,4,7,4,4],"ny":[7,5,8,1,1],"nz":[1,2,1,2,-1]},{"size":2,"px":[13,11],"py":[5,6],"pz":[0,-1],"nx":[4,5],"ny":[2,2],"nz":[1,1]},{"size":2,"px":[3,6],"py":[3,6],"pz":[2,1],"nx":[8,4],"ny":[4,3],"nz":[1,-1]},{"size":2,"px":[10,16],"py":[8,10],"pz":[0,0],"nx":[7,2],"ny":[3,3],"nz":[1,-1]},{"size":2,"px":[6,8],"py":[4,11],"pz":[1,0],"nx":[10,1],"ny":[9,20],"nz":[0,-1]},{"size":2,"px":[5,1],"py":[4,2],"pz":[2,-1],"nx":[23,23],"ny":[15,16],"nz":[0,0]},{"size":5,"px":[9,8,2,4,9],"py":[1,1,0,1,2],"pz":[0,0,2,1,0],"nx":[8,3,8,4,4],"ny":[6,2,4,2,2],"nz":[1,2,1,2,-1]},{"size":2,"px":[13,6],"py":[10,5],"pz":[0,-1],"nx":[13,7],"ny":[6,3],"nz":[0,1]},{"size":2,"px":[11,5],"py":[10,5],"pz":[1,2],"nx":[10,8],"ny":[10,9],"nz":[1,-1]},{"size":2,"px":[7,4],"py":[6,3],"pz":[1,2],"nx":[9,14],"ny":[4,9],"nz":[1,-1]},{"size":3,"px":[5,2,15],"py":[3,1,22],"pz":[1,-1,-1],"nx":[15,9,4],"ny":[0,1,0],"nz":[0,1,2]},{"size":2,"px":[10,19],"py":[9,21],"pz":[1,0],"nx":[2,17],"ny":[5,14],"nz":[2,-1]},{"size":3,"px":[16,2,1],"py":[2,10,4],"pz":[0,-1,-1],"nx":[4,4,9],"ny":[3,2,6],"nz":[2,2,1]},{"size":2,"px":[10,2],"py":[6,10],"pz":[1,-1],"nx":[21,22],"ny":[16,12],"nz":[0,0]},{"size":2,"px":[7,16],"py":[4,23],"pz":[0,-1],"nx":[7,3],"ny":[3,3],"nz":[0,1]},{"size":2,"px":[1,1],"py":[13,14],"pz":[0,0],"nx":[1,2],"ny":[18,3],"nz":[0,-1]},{"size":2,"px":[18,5],"py":[13,4],"pz":[0,-1],"nx":[4,13],"ny":[2,11],"nz":[2,0]},{"size":2,"px":[18,17],"py":[3,3],"pz":[0,0],"nx":[19,19],"ny":[1,1],"nz":[0,-1]},{"size":2,"px":[9,5],"py":[0,5],"pz":[1,-1],"nx":[12,3],"ny":[5,1],"nz":[0,2]},{"size":2,"px":[5,3],"py":[2,1],"pz":[1,2],"nx":[18,4],"ny":[4,1],"nz":[0,-1]},{"size":5,"px":[13,13,2,10,15],"py":[11,12,13,17,23],"pz":[0,-1,-1,-1,-1],"nx":[12,13,4,3,8],"ny":[4,4,1,0,3],"nz":[0,0,2,2,1]},{"size":2,"px":[9,3],"py":[2,2],"pz":[0,-1],"nx":[4,2],"ny":[7,2],"nz":[1,2]},{"size":2,"px":[13,4],"py":[5,1],"pz":[0,-1],"nx":[18,4],"ny":[12,2],"nz":[0,2]},{"size":2,"px":[19,4],"py":[11,1],"pz":[0,-1],"nx":[4,7],"ny":[2,2],"nz":[2,1]},{"size":2,"px":[4,2],"py":[6,3],"pz":[1,2],"nx":[3,2],"ny":[4,5],"nz":[1,-1]},{"size":2,"px":[4,0],"py":[7,7],"pz":[0,-1],"nx":[4,9],"ny":[0,2],"nz":[2,1]},{"size":2,"px":[4,9],"py":[0,2],"pz":[2,1],"nx":[6,4],"ny":[3,4],"nz":[0,-1]},{"size":2,"px":[4,2],"py":[9,4],"pz":[1,2],"nx":[13,5],"ny":[18,2],"nz":[0,-1]},{"size":3,"px":[5,23,23],"py":[2,8,7],"pz":[2,0,0],"nx":[10,12,1],"ny":[4,1,0],"nz":[1,-1,-1]},{"size":2,"px":[13,0],"py":[3,3],"pz":[0,-1],"nx":[4,4],"ny":[2,3],"nz":[2,2]},{"size":2,"px":[6,5],"py":[10,5],"pz":[0,-1],"nx":[0,0],"ny":[4,11],"nz":[1,0]},{"size":2,"px":[11,2],"py":[14,11],"pz":[0,-1],"nx":[10,11],"ny":[4,13],"nz":[1,0]},{"size":2,"px":[5,6],"py":[21,23],"pz":[0,0],"nx":[7,0],"ny":[21,3],"nz":[0,-1]},{"size":2,"px":[8,4],"py":[6,3],"pz":[1,2],"nx":[8,5],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[7,6],"py":[8,8],"pz":[0,0],"nx":[6,14],"ny":[9,15],"nz":[0,-1]},{"size":2,"px":[16,6],"py":[4,8],"pz":[0,-1],"nx":[16,8],"ny":[0,1],"nz":[0,1]},{"size":4,"px":[3,6,0,9],"py":[0,8,5,23],"pz":[1,-1,-1,-1],"nx":[12,2,6,10],"ny":[5,0,3,5],"nz":[0,2,1,0]},{"size":2,"px":[3,6],"py":[7,13],"pz":[1,0],"nx":[3,9],"ny":[4,9],"nz":[1,-1]},{"size":2,"px":[2,5],"py":[8,23],"pz":[1,0],"nx":[8,9],"ny":[15,0],"nz":[0,-1]},{"size":2,"px":[13,18],"py":[8,0],"pz":[0,-1],"nx":[1,1],"ny":[9,8],"nz":[1,1]},{"size":2,"px":[2,7],"py":[4,21],"pz":[2,0],"nx":[13,11],"ny":[8,9],"nz":[0,-1]},{"size":2,"px":[5,4],"py":[8,8],"pz":[0,0],"nx":[6,1],"ny":[8,5],"nz":[0,-1]},{"size":2,"px":[7,3],"py":[20,7],"pz":[0,-1],"nx":[4,3],"ny":[10,4],"nz":[1,1]},{"size":2,"px":[9,9],"py":[8,7],"pz":[1,-1],"nx":[1,2],"ny":[4,9],"nz":[2,1]},{"size":2,"px":[5,10],"py":[5,13],"pz":[1,-1],"nx":[3,6],"ny":[1,2],"nz":[2,1]},{"size":2,"px":[12,5],"py":[6,3],"pz":[0,-1],"nx":[8,4],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[10,10],"py":[4,4],"pz":[1,-1],"nx":[5,11],"ny":[2,5],"nz":[2,1]},{"size":5,"px":[11,23,11,23,11],"py":[4,9,5,10,6],"pz":[1,0,1,0,1],"nx":[7,14,13,7,3],"ny":[9,5,6,4,4],"nz":[0,0,0,1,-1]},{"size":2,"px":[8,5],"py":[0,0],"pz":[1,-1],"nx":[9,20],"ny":[1,4],"nz":[1,0]},{"size":2,"px":[19,20],"py":[0,3],"pz":[0,0],"nx":[4,6],"ny":[11,3],"nz":[1,-1]},{"size":4,"px":[13,5,20,5],"py":[14,3,23,4],"pz":[0,-1,-1,-1],"nx":[8,15,7,16],"ny":[8,14,6,15],"nz":[1,0,1,0]},{"size":2,"px":[10,20],"py":[5,17],"pz":[0,-1],"nx":[7,3],"ny":[10,1],"nz":[0,2]},{"size":3,"px":[1,12,7],"py":[3,7,10],"pz":[2,0,0],"nx":[2,2,3],"ny":[3,2,2],"nz":[1,-1,-1]},{"size":3,"px":[10,5,7],"py":[7,10,10],"pz":[1,-1,-1],"nx":[10,10,18],"ny":[10,9,23],"nz":[1,1,0]},{"size":3,"px":[14,14,4],"py":[3,3,4],"pz":[0,-1,-1],"nx":[4,4,8],"ny":[3,2,6],"nz":[2,2,1]},{"size":2,"px":[4,12],"py":[4,17],"pz":[2,0],"nx":[13,1],"ny":[15,4],"nz":[0,-1]},{"size":2,"px":[10,20],"py":[9,22],"pz":[0,-1],"nx":[9,4],"ny":[2,0],"nz":[1,2]},{"size":2,"px":[11,2],"py":[3,6],"pz":[0,-1],"nx":[2,4],"ny":[2,4],"nz":[2,1]},{"size":3,"px":[15,10,1],"py":[12,2,3],"pz":[0,-1,-1],"nx":[7,5,10],"ny":[2,1,1],"nz":[0,1,0]},{"size":5,"px":[9,11,10,12,12],"py":[0,0,0,0,0],"pz":[0,0,0,0,-1],"nx":[8,4,16,5,10],"ny":[4,4,10,3,6],"nz":[1,1,0,1,0]},{"size":2,"px":[0,10],"py":[3,5],"pz":[2,-1],"nx":[3,6],"ny":[0,1],"nz":[2,1]},{"size":5,"px":[7,8,7,2,12],"py":[14,13,13,16,0],"pz":[0,0,-1,-1,-1],"nx":[10,1,10,1,1],"ny":[13,2,12,4,9],"nz":[0,2,0,1,0]},{"size":3,"px":[6,14,13],"py":[1,2,1],"pz":[1,0,0],"nx":[8,21,10],"ny":[4,23,12],"nz":[1,-1,-1]},{"size":2,"px":[19,19],"py":[22,21],"pz":[0,0],"nx":[20,1],"ny":[22,5],"nz":[0,-1]},{"size":2,"px":[13,12],"py":[19,22],"pz":[0,-1],"nx":[2,3],"ny":[0,1],"nz":[2,1]},{"size":4,"px":[11,9,21,4],"py":[13,3,19,5],"pz":[0,-1,-1,-1],"nx":[9,9,9,5],"ny":[13,14,12,6],"nz":[0,0,0,1]},{"size":4,"px":[11,12,13,14],"py":[22,22,22,22],"pz":[0,0,0,0],"nx":[13,2,4,5],"ny":[20,0,0,6],"nz":[0,-1,-1,-1]},{"size":2,"px":[4,2],"py":[6,3],"pz":[1,2],"nx":[3,1],"ny":[4,3],"nz":[1,-1]},{"size":2,"px":[0,0],"py":[0,1],"pz":[2,2],"nx":[9,4],"ny":[6,5],"nz":[1,-1]},{"size":2,"px":[17,0],"py":[10,1],"pz":[0,-1],"nx":[9,4],"ny":[3,2],"nz":[1,2]},{"size":2,"px":[10,4],"py":[3,1],"pz":[1,2],"nx":[12,18],"ny":[17,4],"nz":[0,-1]},{"size":3,"px":[2,3,4],"py":[4,3,9],"pz":[2,2,1],"nx":[0,3,17],"ny":[0,1,18],"nz":[0,-1,-1]},{"size":2,"px":[7,3],"py":[12,6],"pz":[0,1],"nx":[5,1],"ny":[11,1],"nz":[1,-1]},{"size":2,"px":[10,17],"py":[20,6],"pz":[0,-1],"nx":[5,2],"ny":[9,5],"nz":[1,2]},{"size":2,"px":[8,11],"py":[18,2],"pz":[0,-1],"nx":[5,4],"ny":[9,9],"nz":[1,1]},{"size":2,"px":[16,15],"py":[2,2],"pz":[0,0],"nx":[17,12],"ny":[2,2],"nz":[0,-1]},{"size":2,"px":[18,4],"py":[5,5],"pz":[0,-1],"nx":[7,5],"ny":[23,19],"nz":[0,0]},{"size":2,"px":[12,13],"py":[23,23],"pz":[0,0],"nx":[7,11],"ny":[10,20],"nz":[1,-1]},{"size":2,"px":[5,10],"py":[3,18],"pz":[2,-1],"nx":[9,9],"ny":[5,6],"nz":[1,1]},{"size":2,"px":[5,10],"py":[2,4],"pz":[1,0],"nx":[4,23],"ny":[4,20],"nz":[1,-1]},{"size":2,"px":[2,3],"py":[8,1],"pz":[1,-1],"nx":[15,12],"ny":[2,1],"nz":[0,0]},{"size":2,"px":[4,7],"py":[3,10],"pz":[2,1],"nx":[10,1],"ny":[20,4],"nz":[0,-1]},{"size":2,"px":[11,11],"py":[10,11],"pz":[0,0],"nx":[22,3],"ny":[5,4],"nz":[0,-1]},{"size":5,"px":[8,17,17,9,18],"py":[0,1,0,1,0],"pz":[1,0,0,1,0],"nx":[11,8,9,4,4],"ny":[23,4,6,2,2],"nz":[0,1,0,2,-1]},{"size":2,"px":[5,5],"py":[4,4],"pz":[1,-1],"nx":[13,4],"ny":[9,2],"nz":[0,2]},{"size":5,"px":[9,4,8,7,7],"py":[3,1,3,3,3],"pz":[0,1,0,0,-1],"nx":[4,2,5,3,2],"ny":[1,15,1,4,13],"nz":[0,0,0,0,0]},{"size":2,"px":[17,7],"py":[13,7],"pz":[0,-1],"nx":[4,8],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[1,2],"py":[1,12],"pz":[2,0],"nx":[9,21],"ny":[5,4],"nz":[0,-1]},{"size":2,"px":[12,0],"py":[14,1],"pz":[0,-1],"nx":[1,1],"ny":[19,10],"nz":[0,1]},{"size":2,"px":[16,1],"py":[5,9],"pz":[0,-1],"nx":[16,15],"ny":[3,3],"nz":[0,0]},{"size":2,"px":[4,8],"py":[3,6],"pz":[2,1],"nx":[8,4],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[11,6],"py":[17,15],"pz":[0,0],"nx":[11,0],"ny":[16,4],"nz":[0,-1]},{"size":4,"px":[12,11,0,3],"py":[16,8,7,1],"pz":[0,-1,-1,-1],"nx":[10,5,10,5],"ny":[11,9,10,8],"nz":[0,1,0,1]},{"size":2,"px":[3,6],"py":[7,13],"pz":[1,0],"nx":[4,14],"ny":[4,16],"nz":[1,-1]},{"size":2,"px":[7,17],"py":[6,13],"pz":[0,-1],"nx":[4,8],"ny":[4,9],"nz":[2,1]},{"size":2,"px":[15,11],"py":[3,2],"pz":[0,-1],"nx":[4,15],"ny":[1,2],"nz":[2,0]},{"size":2,"px":[10,11],"py":[18,4],"pz":[0,-1],"nx":[5,5],"ny":[8,9],"nz":[1,1]},{"size":2,"px":[8,4],"py":[7,4],"pz":[1,2],"nx":[4,3],"ny":[5,7],"nz":[2,-1]},{"size":2,"px":[12,4],"py":[15,4],"pz":[0,-1],"nx":[11,8],"ny":[14,19],"nz":[0,0]},{"size":2,"px":[18,13],"py":[13,20],"pz":[0,0],"nx":[13,4],"ny":[18,2],"nz":[0,-1]},{"size":2,"px":[12,4],"py":[6,3],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":5,"px":[21,5,11,5,10],"py":[1,1,3,0,0],"pz":[0,2,1,2,1],"nx":[7,14,15,4,8],"ny":[3,6,11,3,4],"nz":[1,-1,-1,-1,-1]},{"size":2,"px":[10,6],"py":[15,10],"pz":[0,-1],"nx":[21,22],"ny":[14,12],"nz":[0,0]},{"size":2,"px":[18,0],"py":[20,0],"pz":[0,-1],"nx":[2,3],"ny":[2,4],"nz":[2,1]},{"size":5,"px":[12,6,13,11,7],"py":[1,1,1,2,1],"pz":[0,1,0,0,1],"nx":[7,6,8,5,5],"ny":[4,15,4,16,16],"nz":[1,0,1,0,-1]},{"size":3,"px":[22,21,21],"py":[14,15,17],"pz":[0,0,0],"nx":[5,9,4],"ny":[0,5,0],"nz":[2,-1,-1]},{"size":2,"px":[10,2],"py":[14,1],"pz":[0,-1],"nx":[23,11],"ny":[16,8],"nz":[0,1]},{"size":4,"px":[21,21,0,18],"py":[14,15,5,4],"pz":[0,0,-1,-1],"nx":[8,8,9,4],"ny":[7,8,10,5],"nz":[1,1,1,2]},{"size":2,"px":[15,5],"py":[18,1],"pz":[0,-1],"nx":[23,23],"ny":[16,18],"nz":[0,0]},{"size":2,"px":[15,14],"py":[1,1],"pz":[0,0],"nx":[4,4],"ny":[2,3],"nz":[2,-1]},{"size":2,"px":[2,6],"py":[6,5],"pz":[1,-1],"nx":[14,11],"ny":[1,1],"nz":[0,0]},{"size":2,"px":[3,17],"py":[2,8],"pz":[2,0],"nx":[8,3],"ny":[4,9],"nz":[1,-1]},{"size":2,"px":[17,8],"py":[13,10],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[0,0],"py":[8,3],"pz":[0,1],"nx":[1,11],"ny":[4,7],"nz":[1,-1]},{"size":2,"px":[6,8],"py":[5,0],"pz":[1,-1],"nx":[0,0],"ny":[3,1],"nz":[1,2]},{"size":2,"px":[0,0],"py":[5,3],"pz":[1,2],"nx":[1,18],"ny":[5,7],"nz":[1,-1]},{"size":2,"px":[7,3],"py":[6,6],"pz":[0,1],"nx":[7,12],"ny":[5,20],"nz":[0,-1]},{"size":2,"px":[8,1],"py":[0,5],"pz":[0,-1],"nx":[4,2],"ny":[9,3],"nz":[1,2]},{"size":2,"px":[0,0],"py":[10,11],"pz":[0,0],"nx":[0,5],"ny":[5,9],"nz":[0,-1]},{"size":2,"px":[8,1],"py":[23,4],"pz":[0,2],"nx":[0,0],"ny":[13,2],"nz":[0,-1]},{"size":2,"px":[4,1],"py":[6,4],"pz":[0,-1],"nx":[4,4],"ny":[4,5],"nz":[2,2]},{"size":2,"px":[7,6],"py":[6,5],"pz":[1,1],"nx":[3,9],"ny":[4,16],"nz":[1,-1]},{"size":2,"px":[5,3],"py":[9,13],"pz":[0,-1],"nx":[4,10],"ny":[3,7],"nz":[1,0]},{"size":5,"px":[13,9,6,10,10],"py":[2,2,1,2,2],"pz":[0,0,1,0,-1],"nx":[7,5,6,5,6],"ny":[0,2,2,1,1],"nz":[0,0,0,0,0]}],"alpha":[-1.119615e+00,1.119615e+00,-8.169953e-01,8.169953e-01,-5.291213e-01,5.291213e-01,-4.904488e-01,4.904488e-01,-4.930982e-01,4.930982e-01,-4.106179e-01,4.106179e-01,-4.246842e-01,4.246842e-01,-3.802383e-01,3.802383e-01,-3.364358e-01,3.364358e-01,-3.214186e-01,3.214186e-01,-3.210798e-01,3.210798e-01,-2.993167e-01,2.993167e-01,-3.426336e-01,3.426336e-01,-3.199184e-01,3.199184e-01,-3.061071e-01,3.061071e-01,-2.758972e-01,2.758972e-01,-3.075590e-01,3.075590e-01,-3.009565e-01,3.009565e-01,-2.015739e-01,2.015739e-01,-2.603266e-01,2.603266e-01,-2.772993e-01,2.772993e-01,-2.184913e-01,2.184913e-01,-2.306681e-01,2.306681e-01,-1.983223e-01,1.983223e-01,-2.194760e-01,2.194760e-01,-2.528421e-01,2.528421e-01,-2.436416e-01,2.436416e-01,-3.032886e-01,3.032886e-01,-2.556071e-01,2.556071e-01,-2.562170e-01,2.562170e-01,-1.930298e-01,1.930298e-01,-2.735898e-01,2.735898e-01,-1.814703e-01,1.814703e-01,-2.054824e-01,2.054824e-01,-1.986146e-01,1.986146e-01,-1.769226e-01,1.769226e-01,-1.775257e-01,1.775257e-01,-2.167927e-01,2.167927e-01,-1.823633e-01,1.823633e-01,-1.584280e-01,1.584280e-01,-1.778321e-01,1.778321e-01,-1.826777e-01,1.826777e-01,-1.979903e-01,1.979903e-01,-1.898326e-01,1.898326e-01,-1.835506e-01,1.835506e-01,-1.967860e-01,1.967860e-01,-1.871528e-01,1.871528e-01,-1.772414e-01,1.772414e-01,-1.985514e-01,1.985514e-01,-2.144078e-01,2.144078e-01,-2.742303e-01,2.742303e-01,-2.240550e-01,2.240550e-01,-2.132534e-01,2.132534e-01,-1.552127e-01,1.552127e-01,-1.568276e-01,1.568276e-01,-1.630086e-01,1.630086e-01,-1.458232e-01,1.458232e-01,-1.559541e-01,1.559541e-01,-1.720131e-01,1.720131e-01,-1.708434e-01,1.708434e-01,-1.624431e-01,1.624431e-01,-1.814161e-01,1.814161e-01,-1.552639e-01,1.552639e-01,-1.242354e-01,1.242354e-01,-1.552139e-01,1.552139e-01,-1.694359e-01,1.694359e-01,-1.801481e-01,1.801481e-01,-1.387182e-01,1.387182e-01,-1.409679e-01,1.409679e-01,-1.486724e-01,1.486724e-01,-1.779553e-01,1.779553e-01,-1.524595e-01,1.524595e-01,-1.788086e-01,1.788086e-01,-1.671479e-01,1.671479e-01,-1.376197e-01,1.376197e-01,-1.511808e-01,1.511808e-01,-1.524632e-01,1.524632e-01,-1.198986e-01,1.198986e-01,-1.382641e-01,1.382641e-01,-1.148901e-01,1.148901e-01,-1.131803e-01,1.131803e-01,-1.273508e-01,1.273508e-01,-1.405125e-01,1.405125e-01,-1.322132e-01,1.322132e-01,-1.386966e-01,1.386966e-01,-1.275621e-01,1.275621e-01,-1.180573e-01,1.180573e-01,-1.238803e-01,1.238803e-01,-1.428389e-01,1.428389e-01,-1.694437e-01,1.694437e-01,-1.290855e-01,1.290855e-01,-1.520260e-01,1.520260e-01,-1.398282e-01,1.398282e-01,-1.890736e-01,1.890736e-01,-2.280428e-01,2.280428e-01,-1.325099e-01,1.325099e-01,-1.342873e-01,1.342873e-01,-1.463841e-01,1.463841e-01,-1.983567e-01,1.983567e-01,-1.585711e-01,1.585711e-01,-1.260154e-01,1.260154e-01,-1.426774e-01,1.426774e-01,-1.554278e-01,1.554278e-01,-1.361201e-01,1.361201e-01,-1.181856e-01,1.181856e-01,-1.255941e-01,1.255941e-01,-1.113275e-01,1.113275e-01,-1.506576e-01,1.506576e-01,-1.202859e-01,1.202859e-01,-2.159751e-01,2.159751e-01,-1.443150e-01,1.443150e-01,-1.379194e-01,1.379194e-01,-1.805758e-01,1.805758e-01,-1.465612e-01,1.465612e-01,-1.328856e-01,1.328856e-01,-1.532173e-01,1.532173e-01,-1.590635e-01,1.590635e-01,-1.462229e-01,1.462229e-01,-1.350012e-01,1.350012e-01,-1.195634e-01,1.195634e-01,-1.173221e-01,1.173221e-01,-1.192867e-01,1.192867e-01,-1.595013e-01,1.595013e-01,-1.209751e-01,1.209751e-01,-1.571290e-01,1.571290e-01,-1.527274e-01,1.527274e-01,-1.373708e-01,1.373708e-01,-1.318313e-01,1.318313e-01,-1.273391e-01,1.273391e-01,-1.271365e-01,1.271365e-01,-1.528693e-01,1.528693e-01,-1.590476e-01,1.590476e-01,-1.581911e-01,1.581911e-01,-1.183023e-01,1.183023e-01,-1.559822e-01,1.559822e-01,-1.214999e-01,1.214999e-01,-1.283378e-01,1.283378e-01,-1.542583e-01,1.542583e-01,-1.336377e-01,1.336377e-01,-1.800416e-01,1.800416e-01,-1.710931e-01,1.710931e-01,-1.621737e-01,1.621737e-01,-1.239002e-01,1.239002e-01,-1.432928e-01,1.432928e-01,-1.392447e-01,1.392447e-01,-1.383938e-01,1.383938e-01,-1.357633e-01,1.357633e-01,-1.175842e-01,1.175842e-01,-1.085318e-01,1.085318e-01,-1.148885e-01,1.148885e-01,-1.320396e-01,1.320396e-01,-1.351204e-01,1.351204e-01,-1.581518e-01,1.581518e-01,-1.459574e-01,1.459574e-01,-1.180068e-01,1.180068e-01,-1.464196e-01,1.464196e-01,-1.179543e-01,1.179543e-01,-1.004204e-01,1.004204e-01,-1.294660e-01,1.294660e-01,-1.534244e-01,1.534244e-01,-1.378970e-01,1.378970e-01,-1.226545e-01,1.226545e-01,-1.281182e-01,1.281182e-01,-1.201471e-01,1.201471e-01,-1.448701e-01,1.448701e-01,-1.290980e-01,1.290980e-01,-1.388764e-01,1.388764e-01,-9.605773e-02,9.605773e-02,-1.411021e-01,1.411021e-01,-1.295693e-01,1.295693e-01,-1.371739e-01,1.371739e-01,-1.167579e-01,1.167579e-01,-1.400486e-01,1.400486e-01,-1.214224e-01,1.214224e-01,-1.287835e-01,1.287835e-01,-1.197646e-01,1.197646e-01,-1.192358e-01,1.192358e-01,-1.218651e-01,1.218651e-01,-1.564816e-01,1.564816e-01,-1.172391e-01,1.172391e-01,-1.342268e-01,1.342268e-01,-1.492471e-01,1.492471e-01,-1.157299e-01,1.157299e-01,-1.046703e-01,1.046703e-01,-1.255571e-01,1.255571e-01,-1.100135e-01,1.100135e-01,-1.501592e-01,1.501592e-01,-1.155712e-01,1.155712e-01,-1.145563e-01,1.145563e-01,-1.013425e-01,1.013425e-01,-1.145783e-01,1.145783e-01,-1.328031e-01,1.328031e-01,-1.077413e-01,1.077413e-01,-1.064996e-01,1.064996e-01,-1.191170e-01,1.191170e-01,-1.213217e-01,1.213217e-01,-1.260969e-01,1.260969e-01,-1.156494e-01,1.156494e-01,-1.268126e-01,1.268126e-01,-1.070999e-01,1.070999e-01,-1.112365e-01,1.112365e-01,-1.243916e-01,1.243916e-01,-1.283152e-01,1.283152e-01,-1.166925e-01,1.166925e-01,-8.997633e-02,8.997633e-02,-1.583840e-01,1.583840e-01,-1.211178e-01,1.211178e-01,-1.090830e-01,1.090830e-01,-1.030818e-01,1.030818e-01,-1.440600e-01,1.440600e-01,-1.458713e-01,1.458713e-01,-1.559082e-01,1.559082e-01,-1.058868e-01,1.058868e-01,-1.010130e-01,1.010130e-01,-1.642301e-01,1.642301e-01,-1.236850e-01,1.236850e-01,-1.467589e-01,1.467589e-01,-1.109359e-01,1.109359e-01,-1.673655e-01,1.673655e-01,-1.239984e-01,1.239984e-01,-1.039509e-01,1.039509e-01,-1.089378e-01,1.089378e-01,-1.545085e-01,1.545085e-01,-1.200862e-01,1.200862e-01,-1.105608e-01,1.105608e-01,-1.235262e-01,1.235262e-01,-8.496153e-02,8.496153e-02,-1.181372e-01,1.181372e-01,-1.139467e-01,1.139467e-01,-1.189317e-01,1.189317e-01,-1.266519e-01,1.266519e-01,-9.470736e-02,9.470736e-02,-1.336735e-01,1.336735e-01,-8.726601e-02,8.726601e-02,-1.304782e-01,1.304782e-01,-1.186529e-01,1.186529e-01,-1.355944e-01,1.355944e-01,-9.568801e-02,9.568801e-02,-1.282618e-01,1.282618e-01,-1.625632e-01,1.625632e-01,-1.167652e-01,1.167652e-01,-1.001301e-01,1.001301e-01,-1.292419e-01,1.292419e-01,-1.904213e-01,1.904213e-01,-1.511542e-01,1.511542e-01,-9.814394e-02,9.814394e-02,-1.171564e-01,1.171564e-01,-9.806486e-02,9.806486e-02,-9.217615e-02,9.217615e-02,-8.505645e-02,8.505645e-02,-1.573637e-01,1.573637e-01,-1.419174e-01,1.419174e-01,-1.298601e-01,1.298601e-01,-1.120613e-01,1.120613e-01,-1.158363e-01,1.158363e-01,-1.090957e-01,1.090957e-01,-1.204516e-01,1.204516e-01,-1.139852e-01,1.139852e-01,-9.642479e-02,9.642479e-02,-1.410872e-01,1.410872e-01,-1.142779e-01,1.142779e-01,-1.043991e-01,1.043991e-01,-9.736463e-02,9.736463e-02,-1.451046e-01,1.451046e-01,-1.205668e-01,1.205668e-01,-9.881445e-02,9.881445e-02,-1.612822e-01,1.612822e-01,-1.175681e-01,1.175681e-01,-1.522528e-01,1.522528e-01,-1.617520e-01,1.617520e-01,-1.582938e-01,1.582938e-01,-1.208202e-01,1.208202e-01,-1.016003e-01,1.016003e-01,-1.232059e-01,1.232059e-01,-9.583025e-02,9.583025e-02,-1.013990e-01,1.013990e-01,-1.178752e-01,1.178752e-01,-1.215972e-01,1.215972e-01,-1.294932e-01,1.294932e-01,-1.158270e-01,1.158270e-01,-1.008645e-01,1.008645e-01,-9.699190e-02,9.699190e-02,-1.022144e-01,1.022144e-01,-9.878768e-02,9.878768e-02,-1.339052e-01,1.339052e-01,-9.279961e-02,9.279961e-02,-1.047606e-01,1.047606e-01,-1.141163e-01,1.141163e-01,-1.267600e-01,1.267600e-01,-1.252763e-01,1.252763e-01,-9.775003e-02,9.775003e-02,-9.169116e-02,9.169116e-02,-1.006496e-01,1.006496e-01,-9.493293e-02,9.493293e-02,-1.213694e-01,1.213694e-01,-1.109243e-01,1.109243e-01,-1.115973e-01,1.115973e-01,-7.979327e-02,7.979327e-02,-9.220953e-02,9.220953e-02,-1.028913e-01,1.028913e-01,-1.253510e-01,1.253510e-01]},{"count":391,"threshold":-4.665692e+00,"feature":[{"size":5,"px":[14,9,11,17,12],"py":[2,3,9,13,3],"pz":[0,0,0,0,0],"nx":[21,8,7,20,13],"ny":[16,10,7,7,9],"nz":[0,1,1,0,0]},{"size":5,"px":[12,10,6,11,13],"py":[9,3,13,3,4],"pz":[0,0,0,0,0],"nx":[10,4,5,10,2],"ny":[9,10,8,8,2],"nz":[0,1,1,0,2]},{"size":5,"px":[6,9,7,8,8],"py":[3,3,3,3,3],"pz":[0,0,0,0,-1],"nx":[0,0,0,4,9],"ny":[4,2,3,10,8],"nz":[0,0,0,1,0]},{"size":5,"px":[6,2,16,6,8],"py":[16,2,11,4,11],"pz":[0,2,0,1,0],"nx":[3,8,4,1,1],"ny":[4,4,4,5,13],"nz":[1,1,-1,-1,-1]},{"size":3,"px":[16,13,9],"py":[23,18,10],"pz":[0,0,1],"nx":[14,15,8],"ny":[21,22,3],"nz":[0,-1,-1]},{"size":5,"px":[9,16,19,17,17],"py":[1,2,3,2,2],"pz":[1,0,0,0,-1],"nx":[23,23,23,23,23],"ny":[6,2,1,3,5],"nz":[0,0,0,0,0]},{"size":5,"px":[12,12,12,12,12],"py":[10,11,12,13,13],"pz":[0,0,0,0,-1],"nx":[4,8,14,4,6],"ny":[2,4,7,4,8],"nz":[2,1,0,1,1]},{"size":5,"px":[1,2,3,6,4],"py":[6,10,12,23,13],"pz":[1,1,0,0,0],"nx":[2,0,0,1,1],"ny":[23,5,10,21,21],"nz":[0,2,1,0,-1]},{"size":5,"px":[12,16,12,4,12],"py":[6,17,7,2,8],"pz":[0,0,0,2,0],"nx":[8,8,12,0,6],"ny":[4,4,16,0,8],"nz":[1,-1,-1,-1,-1]},{"size":2,"px":[9,2],"py":[18,4],"pz":[0,-1],"nx":[4,9],"ny":[10,16],"nz":[1,0]},{"size":5,"px":[9,9,2,0,12],"py":[6,6,21,4,8],"pz":[1,-1,-1,-1,-1],"nx":[8,4,9,7,7],"ny":[10,2,4,5,8],"nz":[1,2,1,1,1]},{"size":5,"px":[10,10,10,18,19],"py":[10,8,7,14,14],"pz":[1,1,1,0,0],"nx":[21,23,22,22,11],"ny":[23,19,21,22,10],"nz":[0,0,0,0,-1]},{"size":5,"px":[12,3,15,4,19],"py":[14,0,5,5,14],"pz":[0,-1,-1,-1,-1],"nx":[12,17,15,3,8],"ny":[18,18,14,2,10],"nz":[0,0,0,2,0]},{"size":5,"px":[8,11,3,11,4],"py":[23,7,9,8,8],"pz":[0,0,1,0,1],"nx":[8,0,10,0,8],"ny":[8,2,8,4,10],"nz":[0,-1,-1,-1,-1]},{"size":5,"px":[10,11,12,8,4],"py":[3,0,0,1,1],"pz":[0,0,0,0,1],"nx":[2,3,4,3,3],"ny":[14,5,0,1,2],"nz":[0,0,0,0,0]},{"size":2,"px":[3,11],"py":[7,0],"pz":[1,-1],"nx":[5,2],"ny":[9,5],"nz":[1,2]},{"size":5,"px":[7,1,0,10,1],"py":[0,0,2,12,6],"pz":[0,2,2,0,1],"nx":[4,6,2,8,8],"ny":[4,11,2,4,4],"nz":[1,1,2,1,-1]},{"size":2,"px":[4,15],"py":[4,12],"pz":[2,0],"nx":[4,6],"ny":[5,11],"nz":[2,-1]},{"size":5,"px":[9,4,16,14,14],"py":[8,4,23,18,18],"pz":[1,2,0,0,-1],"nx":[0,2,1,1,0],"ny":[2,0,3,2,3],"nz":[1,0,0,0,1]},{"size":5,"px":[17,7,7,18,19],"py":[7,11,8,7,7],"pz":[0,1,1,0,0],"nx":[17,5,8,2,0],"ny":[8,0,7,5,3],"nz":[0,-1,-1,-1,-1]},{"size":2,"px":[5,14],"py":[12,3],"pz":[0,-1],"nx":[4,3],"ny":[5,4],"nz":[1,1]},{"size":5,"px":[10,8,16,11,11],"py":[5,6,12,4,4],"pz":[0,1,0,0,-1],"nx":[14,13,5,9,5],"ny":[13,10,1,4,2],"nz":[0,0,2,1,2]},{"size":5,"px":[15,14,16,8,8],"py":[2,2,2,0,0],"pz":[0,0,0,1,-1],"nx":[9,18,19,18,17],"ny":[0,0,2,1,0],"nz":[1,0,0,0,0]},{"size":2,"px":[17,15],"py":[12,11],"pz":[0,0],"nx":[14,4],"ny":[9,15],"nz":[0,-1]},{"size":3,"px":[5,11,11],"py":[3,4,5],"pz":[2,1,1],"nx":[14,3,18],"ny":[6,5,0],"nz":[0,1,-1]},{"size":5,"px":[16,14,17,15,9],"py":[2,2,2,2,1],"pz":[0,0,0,0,1],"nx":[21,20,11,21,21],"ny":[2,0,7,3,3],"nz":[0,0,1,0,-1]},{"size":5,"px":[2,1,1,1,5],"py":[12,9,7,3,6],"pz":[0,0,1,1,1],"nx":[4,8,3,4,17],"ny":[4,4,0,8,0],"nz":[1,-1,-1,-1,-1]},{"size":2,"px":[8,4],"py":[6,3],"pz":[1,2],"nx":[9,2],"ny":[4,17],"nz":[1,-1]},{"size":2,"px":[8,5],"py":[16,9],"pz":[0,1],"nx":[10,17],"ny":[16,8],"nz":[0,-1]},{"size":4,"px":[11,5,9,15],"py":[14,9,11,5],"pz":[0,-1,-1,-1],"nx":[10,1,9,4],"ny":[9,2,13,7],"nz":[0,2,0,1]},{"size":5,"px":[2,5,10,7,10],"py":[7,12,2,13,3],"pz":[1,-1,-1,-1,-1],"nx":[5,2,3,3,2],"ny":[23,15,17,16,14],"nz":[0,0,0,0,0]},{"size":2,"px":[11,7],"py":[8,10],"pz":[0,-1],"nx":[7,14],"ny":[5,8],"nz":[1,0]},{"size":2,"px":[9,16],"py":[7,23],"pz":[1,0],"nx":[4,4],"ny":[2,1],"nz":[2,-1]},{"size":5,"px":[16,14,18,4,17],"py":[0,0,4,0,1],"pz":[0,0,0,2,0],"nx":[8,8,16,9,9],"ny":[5,4,11,7,7],"nz":[1,1,0,0,-1]},{"size":5,"px":[12,13,7,8,4],"py":[9,12,6,11,5],"pz":[0,0,1,1,2],"nx":[23,23,16,9,9],"ny":[0,1,11,7,7],"nz":[0,-1,-1,-1,-1]},{"size":3,"px":[6,7,2],"py":[21,23,4],"pz":[0,0,2],"nx":[4,1,16],"ny":[10,5,11],"nz":[1,-1,-1]},{"size":2,"px":[2,2],"py":[3,4],"pz":[2,2],"nx":[3,1],"ny":[4,5],"nz":[1,-1]},{"size":5,"px":[1,2,1,0,1],"py":[7,13,12,4,13],"pz":[0,0,0,2,0],"nx":[18,9,9,19,19],"ny":[23,5,11,19,19],"nz":[0,1,1,0,-1]},{"size":3,"px":[4,10,12],"py":[6,2,5],"pz":[1,-1,-1],"nx":[10,0,0],"ny":[12,1,3],"nz":[0,2,2]},{"size":2,"px":[2,4],"py":[3,6],"pz":[2,1],"nx":[3,0],"ny":[4,3],"nz":[1,-1]},{"size":5,"px":[19,17,10,14,18],"py":[2,1,7,0,1],"pz":[0,0,1,0,0],"nx":[3,3,3,7,5],"ny":[9,10,7,23,18],"nz":[1,1,1,0,0]},{"size":2,"px":[10,10],"py":[8,7],"pz":[1,1],"nx":[14,4],"ny":[15,6],"nz":[0,-1]},{"size":2,"px":[7,15],"py":[1,3],"pz":[1,0],"nx":[16,19],"ny":[1,3],"nz":[0,-1]},{"size":5,"px":[11,11,1,2,11],"py":[11,12,1,13,12],"pz":[0,0,-1,-1,-1],"nx":[12,17,8,16,8],"ny":[7,12,11,16,6],"nz":[0,0,0,0,1]},{"size":5,"px":[13,11,10,12,5],"py":[0,0,0,0,0],"pz":[0,0,0,0,1],"nx":[8,4,3,4,4],"ny":[4,5,2,4,4],"nz":[1,1,2,1,-1]},{"size":5,"px":[6,1,3,2,3],"py":[13,3,3,4,10],"pz":[0,2,1,1,1],"nx":[0,1,0,0,0],"ny":[2,0,5,4,4],"nz":[0,0,0,0,-1]},{"size":2,"px":[15,1],"py":[4,3],"pz":[0,-1],"nx":[16,15],"ny":[2,2],"nz":[0,0]},{"size":2,"px":[3,7],"py":[7,13],"pz":[1,0],"nx":[3,0],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[14,15],"py":[18,14],"pz":[0,-1],"nx":[4,14],"ny":[4,16],"nz":[1,0]},{"size":2,"px":[4,6],"py":[3,4],"pz":[2,1],"nx":[9,5],"ny":[14,2],"nz":[0,-1]},{"size":2,"px":[16,6],"py":[1,5],"pz":[0,-1],"nx":[4,9],"ny":[0,4],"nz":[2,1]},{"size":2,"px":[9,0],"py":[4,2],"pz":[0,-1],"nx":[5,3],"ny":[1,0],"nz":[1,2]},{"size":5,"px":[1,1,1,0,0],"py":[16,15,17,6,9],"pz":[0,0,0,1,0],"nx":[9,5,4,9,8],"ny":[7,3,3,6,7],"nz":[0,1,1,0,-1]},{"size":2,"px":[9,1],"py":[8,15],"pz":[1,-1],"nx":[9,8],"ny":[9,4],"nz":[1,1]},{"size":2,"px":[20,19],"py":[19,22],"pz":[0,0],"nx":[7,0],"ny":[3,0],"nz":[1,-1]},{"size":5,"px":[8,4,2,5,5],"py":[12,6,3,5,5],"pz":[0,1,2,1,-1],"nx":[22,21,20,21,22],"ny":[17,20,22,19,16],"nz":[0,0,0,0,0]},{"size":2,"px":[6,12],"py":[2,6],"pz":[1,0],"nx":[8,3],"ny":[3,2],"nz":[1,-1]},{"size":2,"px":[11,11],"py":[9,4],"pz":[1,1],"nx":[12,4],"ny":[17,5],"nz":[0,-1]},{"size":3,"px":[0,1,0],"py":[5,13,3],"pz":[2,0,2],"nx":[0,4,11],"ny":[23,5,1],"nz":[0,-1,-1]},{"size":2,"px":[10,5],"py":[6,3],"pz":[0,1],"nx":[4,4],"ny":[3,0],"nz":[1,-1]},{"size":2,"px":[6,5],"py":[7,3],"pz":[0,-1],"nx":[0,1],"ny":[4,10],"nz":[2,1]},{"size":5,"px":[12,13,12,12,12],"py":[12,13,11,10,10],"pz":[0,0,0,0,-1],"nx":[10,8,8,16,15],"ny":[7,4,10,11,10],"nz":[0,1,0,0,0]},{"size":2,"px":[4,8],"py":[3,6],"pz":[2,1],"nx":[4,2],"ny":[5,5],"nz":[2,-1]},{"size":2,"px":[9,17],"py":[17,7],"pz":[0,-1],"nx":[5,2],"ny":[9,4],"nz":[1,2]},{"size":2,"px":[4,4],"py":[3,5],"pz":[2,2],"nx":[12,8],"ny":[16,2],"nz":[0,-1]},{"size":2,"px":[1,1],"py":[2,0],"pz":[1,1],"nx":[0,4],"ny":[0,1],"nz":[2,-1]},{"size":2,"px":[11,1],"py":[5,0],"pz":[0,-1],"nx":[2,3],"ny":[2,4],"nz":[2,1]},{"size":4,"px":[0,6,4,22],"py":[23,2,4,12],"pz":[0,-1,-1,-1],"nx":[7,6,8,5],"ny":[1,1,2,1],"nz":[1,1,1,1]},{"size":2,"px":[4,10],"py":[0,9],"pz":[1,-1],"nx":[2,4],"ny":[3,10],"nz":[2,1]},{"size":2,"px":[11,8],"py":[15,13],"pz":[0,-1],"nx":[23,11],"ny":[13,5],"nz":[0,1]},{"size":2,"px":[18,4],"py":[5,4],"pz":[0,-1],"nx":[18,20],"ny":[4,7],"nz":[0,0]},{"size":5,"px":[21,20,20,10,20],"py":[17,22,19,10,21],"pz":[0,0,0,1,0],"nx":[5,5,3,14,7],"ny":[9,9,0,8,4],"nz":[0,-1,-1,-1,-1]},{"size":5,"px":[3,7,13,7,3],"py":[6,12,3,0,3],"pz":[1,-1,-1,-1,-1],"nx":[1,5,0,0,2],"ny":[16,6,13,5,4],"nz":[0,1,0,1,0]},{"size":2,"px":[7,4],"py":[6,3],"pz":[1,2],"nx":[9,5],"ny":[4,6],"nz":[1,-1]},{"size":3,"px":[14,9,13],"py":[19,22,8],"pz":[0,-1,-1],"nx":[13,4,4],"ny":[17,2,5],"nz":[0,2,2]},{"size":2,"px":[16,4],"py":[9,3],"pz":[0,2],"nx":[7,4],"ny":[4,5],"nz":[1,-1]},{"size":4,"px":[10,2,4,2],"py":[23,4,8,3],"pz":[0,2,1,2],"nx":[14,0,4,11],"ny":[19,3,5,3],"nz":[0,-1,-1,-1]},{"size":5,"px":[9,10,8,7,11],"py":[2,2,2,2,2],"pz":[0,0,0,0,0],"nx":[6,5,3,4,4],"ny":[0,1,0,2,2],"nz":[0,0,1,0,-1]},{"size":2,"px":[6,4],"py":[13,6],"pz":[0,-1],"nx":[15,4],"ny":[8,4],"nz":[0,1]},{"size":2,"px":[0,8],"py":[1,2],"pz":[2,-1],"nx":[5,4],"ny":[2,2],"nz":[1,1]},{"size":5,"px":[16,13,14,15,15],"py":[1,0,0,0,0],"pz":[0,0,0,0,-1],"nx":[4,9,4,18,8],"ny":[5,9,4,18,11],"nz":[2,1,2,0,1]},{"size":2,"px":[5,6],"py":[2,6],"pz":[2,1],"nx":[22,9],"ny":[23,9],"nz":[0,-1]},{"size":2,"px":[19,19],"py":[5,5],"pz":[0,-1],"nx":[21,22],"ny":[2,4],"nz":[0,0]},{"size":2,"px":[2,5],"py":[8,6],"pz":[0,1],"nx":[3,4],"ny":[4,9],"nz":[1,-1]},{"size":2,"px":[18,14],"py":[13,17],"pz":[0,0],"nx":[14,4],"ny":[16,3],"nz":[0,-1]},{"size":2,"px":[6,6],"py":[6,3],"pz":[1,-1],"nx":[1,0],"ny":[2,2],"nz":[1,2]},{"size":2,"px":[23,21],"py":[21,14],"pz":[0,-1],"nx":[7,5],"ny":[0,0],"nz":[0,1]},{"size":2,"px":[15,10],"py":[23,7],"pz":[0,-1],"nx":[9,4],"ny":[4,5],"nz":[1,2]},{"size":2,"px":[4,18],"py":[3,8],"pz":[2,0],"nx":[8,4],"ny":[4,5],"nz":[1,-1]},{"size":2,"px":[13,7],"py":[2,11],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":5,"px":[2,3,5,6,1],"py":[7,14,2,2,4],"pz":[1,0,0,0,2],"nx":[8,4,4,7,7],"ny":[7,5,4,9,9],"nz":[1,2,2,1,-1]},{"size":2,"px":[5,3],"py":[6,3],"pz":[1,-1],"nx":[1,2],"ny":[2,4],"nz":[2,1]},{"size":5,"px":[7,20,4,10,10],"py":[9,16,4,10,8],"pz":[1,0,2,1,1],"nx":[4,2,3,5,3],"ny":[11,5,6,12,5],"nz":[0,1,1,0,-1]},{"size":2,"px":[6,11],"py":[4,18],"pz":[1,-1],"nx":[8,6],"ny":[4,9],"nz":[1,1]},{"size":2,"px":[2,8],"py":[5,23],"pz":[2,0],"nx":[9,4],"ny":[0,2],"nz":[1,-1]},{"size":5,"px":[3,1,2,2,2],"py":[12,6,12,11,11],"pz":[0,1,0,0,-1],"nx":[0,0,0,0,0],"ny":[13,12,11,14,7],"nz":[0,0,0,0,1]},{"size":2,"px":[3,6],"py":[1,2],"pz":[2,1],"nx":[8,4],"ny":[4,14],"nz":[1,-1]},{"size":5,"px":[11,23,23,22,22],"py":[8,12,6,13,14],"pz":[1,0,0,0,0],"nx":[13,8,7,6,6],"ny":[6,3,3,9,9],"nz":[0,1,1,0,-1]},{"size":4,"px":[9,23,23,22],"py":[7,12,6,13],"pz":[1,-1,-1,-1],"nx":[11,23,23,23],"ny":[6,13,17,10],"nz":[1,0,0,0]},{"size":5,"px":[0,0,0,0,0],"py":[19,5,9,16,10],"pz":[0,2,1,0,1],"nx":[5,2,1,2,2],"ny":[18,10,5,9,9],"nz":[0,1,2,1,-1]},{"size":2,"px":[11,5],"py":[10,4],"pz":[1,2],"nx":[23,14],"ny":[23,3],"nz":[0,-1]},{"size":2,"px":[2,4],"py":[3,6],"pz":[2,1],"nx":[3,1],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[8,10],"py":[4,8],"pz":[0,-1],"nx":[8,8],"ny":[2,3],"nz":[0,0]},{"size":3,"px":[7,10,11],"py":[1,6,13],"pz":[0,-1,-1],"nx":[4,4,2],"ny":[3,8,2],"nz":[1,1,2]},{"size":2,"px":[8,4],"py":[8,2],"pz":[1,2],"nx":[10,5],"ny":[10,0],"nz":[0,-1]},{"size":2,"px":[7,16],"py":[20,21],"pz":[0,-1],"nx":[2,4],"ny":[5,10],"nz":[2,1]},{"size":2,"px":[3,10],"py":[7,8],"pz":[1,-1],"nx":[7,4],"ny":[20,7],"nz":[0,1]},{"size":5,"px":[11,11,11,11,11],"py":[10,12,13,11,11],"pz":[0,0,0,0,-1],"nx":[11,12,16,3,8],"ny":[6,6,10,1,8],"nz":[0,0,0,2,0]},{"size":2,"px":[12,6],"py":[4,2],"pz":[0,1],"nx":[7,7],"ny":[8,1],"nz":[0,-1]},{"size":5,"px":[23,23,23,23,23],"py":[22,20,21,19,19],"pz":[0,0,0,0,-1],"nx":[4,6,3,4,3],"ny":[19,23,15,20,16],"nz":[0,0,0,0,0]},{"size":3,"px":[8,4,14],"py":[12,3,8],"pz":[0,-1,-1],"nx":[4,2,10],"ny":[10,3,13],"nz":[1,2,0]},{"size":2,"px":[11,18],"py":[13,23],"pz":[0,-1],"nx":[5,5],"ny":[1,2],"nz":[2,2]},{"size":3,"px":[11,2,10],"py":[17,4,17],"pz":[0,2,0],"nx":[11,0,22],"ny":[15,2,4],"nz":[0,-1,-1]},{"size":3,"px":[11,3,0],"py":[15,4,8],"pz":[0,-1,-1],"nx":[14,11,4],"ny":[9,17,7],"nz":[0,0,1]},{"size":2,"px":[17,16],"py":[2,1],"pz":[0,0],"nx":[9,11],"ny":[4,6],"nz":[1,-1]},{"size":2,"px":[3,4],"py":[21,23],"pz":[0,0],"nx":[4,0],"ny":[3,3],"nz":[1,-1]},{"size":2,"px":[18,2],"py":[20,0],"pz":[0,-1],"nx":[4,9],"ny":[5,10],"nz":[2,1]},{"size":2,"px":[9,1],"py":[19,3],"pz":[0,-1],"nx":[0,0],"ny":[9,21],"nz":[1,0]},{"size":2,"px":[19,19],"py":[21,22],"pz":[0,0],"nx":[19,0],"ny":[23,0],"nz":[0,-1]},{"size":4,"px":[11,2,3,2],"py":[6,6,9,4],"pz":[0,-1,-1,-1],"nx":[4,9,19,19],"ny":[5,10,17,18],"nz":[2,1,0,0]},{"size":2,"px":[2,4],"py":[4,8],"pz":[2,1],"nx":[4,9],"ny":[10,10],"nz":[1,-1]},{"size":2,"px":[23,22],"py":[8,12],"pz":[0,-1],"nx":[7,4],"ny":[11,2],"nz":[0,2]},{"size":2,"px":[12,1],"py":[5,2],"pz":[0,-1],"nx":[9,11],"ny":[2,1],"nz":[0,0]},{"size":2,"px":[4,4],"py":[2,2],"pz":[0,-1],"nx":[3,2],"ny":[1,2],"nz":[0,0]},{"size":2,"px":[17,9],"py":[13,7],"pz":[0,1],"nx":[9,5],"ny":[4,0],"nz":[1,-1]},{"size":4,"px":[0,0,9,13],"py":[3,3,7,3],"pz":[2,-1,-1,-1],"nx":[2,4,4,11],"ny":[1,2,8,5],"nz":[2,1,1,0]},{"size":5,"px":[3,6,5,6,6],"py":[0,0,2,1,1],"pz":[1,0,0,0,-1],"nx":[2,2,2,1,1],"ny":[21,19,20,16,17],"nz":[0,0,0,0,0]},{"size":2,"px":[13,3],"py":[22,10],"pz":[0,-1],"nx":[7,4],"ny":[10,5],"nz":[1,2]},{"size":2,"px":[3,2],"py":[7,3],"pz":[1,2],"nx":[8,4],"ny":[4,5],"nz":[1,-1]},{"size":5,"px":[17,8,15,7,15],"py":[13,6,16,5,12],"pz":[0,1,0,1,0],"nx":[5,4,6,3,4],"ny":[1,2,1,0,3],"nz":[0,0,0,1,-1]},{"size":5,"px":[12,9,11,12,10],"py":[0,1,2,2,0],"pz":[0,0,0,0,0],"nx":[8,16,7,4,4],"ny":[9,23,9,3,2],"nz":[1,0,1,2,-1]},{"size":2,"px":[4,11],"py":[1,4],"pz":[2,-1],"nx":[8,7],"ny":[4,4],"nz":[0,0]},{"size":4,"px":[7,4,5,8],"py":[13,2,1,3],"pz":[0,-1,-1,-1],"nx":[9,4,9,9],"ny":[9,5,10,11],"nz":[0,1,0,0]},{"size":2,"px":[10,11],"py":[10,11],"pz":[0,-1],"nx":[2,6],"ny":[2,2],"nz":[2,1]},{"size":2,"px":[21,3],"py":[11,2],"pz":[0,-1],"nx":[22,22],"ny":[20,18],"nz":[0,0]},{"size":2,"px":[7,6],"py":[1,2],"pz":[0,0],"nx":[5,10],"ny":[1,0],"nz":[0,-1]},{"size":2,"px":[21,3],"py":[18,1],"pz":[0,-1],"nx":[16,15],"ny":[4,4],"nz":[0,0]},{"size":2,"px":[12,7],"py":[4,1],"pz":[0,-1],"nx":[4,8],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[13,11],"py":[23,17],"pz":[0,0],"nx":[11,21],"ny":[16,0],"nz":[0,-1]},{"size":2,"px":[1,2],"py":[0,6],"pz":[1,-1],"nx":[16,16],"ny":[9,11],"nz":[0,0]},{"size":2,"px":[12,13],"py":[20,20],"pz":[0,0],"nx":[11,3],"ny":[21,7],"nz":[0,-1]},{"size":3,"px":[19,20,9],"py":[21,18,11],"pz":[0,0,1],"nx":[17,4,11],"ny":[19,2,0],"nz":[0,-1,-1]},{"size":2,"px":[12,5],"py":[5,2],"pz":[0,1],"nx":[7,9],"ny":[7,8],"nz":[0,-1]},{"size":5,"px":[8,4,4,8,4],"py":[4,4,5,10,3],"pz":[1,1,2,0,2],"nx":[11,22,11,23,23],"ny":[0,0,1,3,3],"nz":[1,0,1,0,-1]},{"size":2,"px":[8,14],"py":[10,23],"pz":[1,0],"nx":[7,2],"ny":[10,9],"nz":[1,-1]},{"size":2,"px":[5,14],"py":[6,23],"pz":[1,-1],"nx":[1,2],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[11,2],"py":[19,3],"pz":[0,-1],"nx":[10,12],"ny":[18,18],"nz":[0,0]},{"size":2,"px":[12,3],"py":[4,1],"pz":[0,2],"nx":[6,6],"ny":[11,11],"nz":[1,-1]},{"size":5,"px":[0,0,0,0,0],"py":[18,10,20,19,19],"pz":[0,1,0,0,-1],"nx":[11,10,14,12,13],"ny":[2,2,2,2,2],"nz":[0,0,0,0,0]},{"size":3,"px":[12,2,9],"py":[14,5,10],"pz":[0,-1,-1],"nx":[11,10,5],"ny":[10,13,5],"nz":[0,0,1]},{"size":2,"px":[2,3],"py":[3,7],"pz":[2,1],"nx":[3,10],"ny":[4,13],"nz":[1,-1]},{"size":2,"px":[9,3],"py":[21,7],"pz":[0,-1],"nx":[10,21],"ny":[7,15],"nz":[1,0]},{"size":2,"px":[21,10],"py":[16,8],"pz":[0,1],"nx":[8,2],"ny":[10,8],"nz":[1,-1]},{"size":2,"px":[8,8],"py":[6,7],"pz":[1,-1],"nx":[12,11],"ny":[11,7],"nz":[0,1]},{"size":2,"px":[3,11],"py":[4,20],"pz":[2,0],"nx":[11,10],"ny":[19,1],"nz":[0,-1]},{"size":2,"px":[17,5],"py":[13,3],"pz":[0,-1],"nx":[7,8],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[7,1],"py":[23,3],"pz":[0,2],"nx":[14,6],"ny":[12,9],"nz":[0,-1]},{"size":2,"px":[12,5],"py":[11,2],"pz":[0,-1],"nx":[11,7],"ny":[3,1],"nz":[0,1]},{"size":2,"px":[9,6],"py":[2,17],"pz":[0,-1],"nx":[4,6],"ny":[4,12],"nz":[1,0]},{"size":2,"px":[14,19],"py":[5,6],"pz":[0,-1],"nx":[9,3],"ny":[9,1],"nz":[0,2]},{"size":5,"px":[12,13,13,13,12],"py":[9,11,12,13,10],"pz":[0,0,0,0,0],"nx":[2,4,4,4,4],"ny":[7,18,17,14,14],"nz":[1,0,0,0,-1]},{"size":2,"px":[10,10],"py":[6,6],"pz":[1,-1],"nx":[20,18],"ny":[18,23],"nz":[0,0]},{"size":2,"px":[5,6],"py":[4,14],"pz":[1,-1],"nx":[9,4],"ny":[2,1],"nz":[1,2]},{"size":2,"px":[11,9],"py":[4,18],"pz":[0,-1],"nx":[4,8],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[15,0],"py":[18,4],"pz":[0,-1],"nx":[3,4],"ny":[5,4],"nz":[2,2]},{"size":4,"px":[7,3,6,6],"py":[8,4,6,5],"pz":[1,2,1,1],"nx":[10,4,13,0],"ny":[10,4,9,22],"nz":[0,-1,-1,-1]},{"size":2,"px":[10,8],"py":[18,11],"pz":[0,-1],"nx":[5,4],"ny":[8,10],"nz":[1,1]},{"size":4,"px":[17,2,10,2],"py":[14,1,10,3],"pz":[0,-1,-1,-1],"nx":[8,8,17,8],"ny":[4,5,12,6],"nz":[1,1,0,1]},{"size":5,"px":[9,11,9,4,10],"py":[1,1,0,0,1],"pz":[0,0,0,1,0],"nx":[8,4,7,15,15],"ny":[7,2,4,17,17],"nz":[1,2,1,0,-1]},{"size":2,"px":[4,3],"py":[11,8],"pz":[0,-1],"nx":[2,2],"ny":[1,2],"nz":[2,2]},{"size":2,"px":[11,3],"py":[13,8],"pz":[0,-1],"nx":[1,1],"ny":[5,2],"nz":[1,2]},{"size":2,"px":[6,2],"py":[8,3],"pz":[0,2],"nx":[3,1],"ny":[5,2],"nz":[1,-1]},{"size":5,"px":[10,5,7,8,6],"py":[9,7,7,7,7],"pz":[0,0,0,0,0],"nx":[7,3,0,2,15],"ny":[8,0,1,18,17],"nz":[0,-1,-1,-1,-1]},{"size":2,"px":[17,8],"py":[12,6],"pz":[0,1],"nx":[8,8],"ny":[4,4],"nz":[1,-1]},{"size":5,"px":[3,11,8,10,12],"py":[0,2,10,2,3],"pz":[2,0,0,0,0],"nx":[3,2,10,2,2],"ny":[6,4,11,3,3],"nz":[0,1,0,1,-1]},{"size":2,"px":[3,6],"py":[2,4],"pz":[2,1],"nx":[8,19],"ny":[4,16],"nz":[1,-1]},{"size":2,"px":[2,2],"py":[1,1],"pz":[2,-1],"nx":[7,17],"ny":[1,2],"nz":[1,0]},{"size":5,"px":[16,15,14,13,7],"py":[0,0,0,0,0],"pz":[0,0,0,0,-1],"nx":[6,4,8,3,11],"ny":[3,4,4,1,6],"nz":[1,1,1,2,0]},{"size":2,"px":[11,1],"py":[8,5],"pz":[0,-1],"nx":[13,4],"ny":[10,2],"nz":[0,2]},{"size":2,"px":[4,9],"py":[0,2],"pz":[2,1],"nx":[4,11],"ny":[0,2],"nz":[0,-1]},{"size":2,"px":[15,15],"py":[2,2],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[8,17],"py":[9,22],"pz":[1,0],"nx":[8,20],"ny":[10,2],"nz":[1,-1]},{"size":2,"px":[10,10],"py":[14,22],"pz":[0,-1],"nx":[3,11],"ny":[3,3],"nz":[1,0]},{"size":2,"px":[4,2],"py":[1,0],"pz":[1,2],"nx":[5,8],"ny":[3,9],"nz":[0,-1]},{"size":2,"px":[2,3],"py":[4,8],"pz":[2,1],"nx":[9,5],"ny":[15,19],"nz":[0,-1]},{"size":2,"px":[5,2],"py":[1,1],"pz":[0,1],"nx":[10,10],"ny":[6,6],"nz":[0,-1]},{"size":2,"px":[17,6],"py":[10,2],"pz":[0,-1],"nx":[4,8],"ny":[2,4],"nz":[2,1]},{"size":3,"px":[13,7,3],"py":[5,2,6],"pz":[0,1,-1],"nx":[17,16,17],"ny":[1,1,2],"nz":[0,0,0]},{"size":2,"px":[11,10],"py":[3,3],"pz":[0,0],"nx":[8,4],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[4,8],"py":[0,8],"pz":[2,-1],"nx":[3,4],"ny":[0,0],"nz":[1,1]},{"size":5,"px":[9,2,4,1,2],"py":[13,3,9,2,5],"pz":[0,2,1,2,2],"nx":[9,5,10,4,10],"ny":[5,1,3,0,0],"nz":[1,-1,-1,-1,-1]},{"size":2,"px":[6,12],"py":[5,9],"pz":[1,0],"nx":[0,2],"ny":[23,9],"nz":[0,-1]},{"size":2,"px":[22,11],"py":[21,8],"pz":[0,1],"nx":[10,0],"ny":[17,2],"nz":[0,-1]},{"size":2,"px":[3,1],"py":[22,9],"pz":[0,1],"nx":[22,5],"ny":[11,2],"nz":[0,2]},{"size":2,"px":[4,2],"py":[6,3],"pz":[1,2],"nx":[5,6],"ny":[10,9],"nz":[1,-1]},{"size":4,"px":[7,3,17,7],"py":[8,2,10,11],"pz":[0,2,0,1],"nx":[6,10,5,23],"ny":[9,21,1,23],"nz":[0,-1,-1,-1]},{"size":2,"px":[8,3],"py":[7,2],"pz":[1,2],"nx":[8,9],"ny":[4,9],"nz":[1,-1]},{"size":2,"px":[9,5],"py":[14,6],"pz":[0,1],"nx":[8,8],"ny":[13,13],"nz":[0,-1]},{"size":3,"px":[11,6,8],"py":[20,3,20],"pz":[0,-1,-1],"nx":[5,3,12],"ny":[9,5,18],"nz":[1,2,0]},{"size":2,"px":[3,9],"py":[1,3],"pz":[1,0],"nx":[2,8],"ny":[5,8],"nz":[0,-1]},{"size":2,"px":[15,9],"py":[21,3],"pz":[0,-1],"nx":[3,4],"ny":[5,5],"nz":[2,2]},{"size":2,"px":[2,9],"py":[7,11],"pz":[1,-1],"nx":[2,2],"ny":[8,9],"nz":[1,1]},{"size":4,"px":[3,4,3,1],"py":[14,21,19,6],"pz":[0,0,0,1],"nx":[10,16,4,5],"ny":[8,1,7,6],"nz":[0,-1,-1,-1]},{"size":4,"px":[10,4,3,1],"py":[5,21,19,6],"pz":[1,-1,-1,-1],"nx":[21,10,5,11],"ny":[4,2,3,4],"nz":[0,1,2,1]},{"size":2,"px":[4,17],"py":[3,8],"pz":[2,0],"nx":[17,2],"ny":[9,22],"nz":[0,-1]},{"size":2,"px":[17,12],"py":[14,20],"pz":[0,-1],"nx":[7,8],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[10,12],"py":[9,20],"pz":[0,-1],"nx":[11,23],"ny":[8,18],"nz":[1,0]},{"size":2,"px":[5,11],"py":[4,7],"pz":[2,1],"nx":[8,15],"ny":[7,5],"nz":[1,-1]},{"size":2,"px":[11,15],"py":[13,8],"pz":[0,-1],"nx":[11,11],"ny":[6,7],"nz":[1,1]},{"size":2,"px":[6,15],"py":[14,8],"pz":[0,-1],"nx":[4,4],"ny":[12,13],"nz":[0,0]},{"size":2,"px":[5,5],"py":[0,1],"pz":[2,2],"nx":[15,4],"ny":[5,5],"nz":[0,-1]},{"size":2,"px":[16,17],"py":[2,2],"pz":[0,0],"nx":[20,8],"ny":[3,7],"nz":[0,-1]},{"size":3,"px":[6,3,2],"py":[10,6,1],"pz":[0,-1,-1],"nx":[4,3,2],"ny":[3,4,2],"nz":[1,1,2]},{"size":2,"px":[10,6],"py":[4,6],"pz":[0,-1],"nx":[6,13],"ny":[0,1],"nz":[1,0]},{"size":2,"px":[10,10],"py":[8,7],"pz":[1,1],"nx":[8,2],"ny":[7,2],"nz":[1,-1]},{"size":2,"px":[7,1],"py":[12,4],"pz":[0,-1],"nx":[3,4],"ny":[5,5],"nz":[1,1]},{"size":2,"px":[11,15],"py":[15,14],"pz":[0,-1],"nx":[3,11],"ny":[4,13],"nz":[1,0]},{"size":5,"px":[13,9,11,14,12],"py":[0,2,0,0,2],"pz":[0,0,0,0,0],"nx":[5,4,4,3,4],"ny":[4,4,18,7,17],"nz":[1,1,0,1,0]},{"size":3,"px":[13,12,11],"py":[22,22,22],"pz":[0,0,0],"nx":[11,12,13],"ny":[20,20,20],"nz":[0,0,0]},{"size":2,"px":[6,13],"py":[2,4],"pz":[1,0],"nx":[7,6],"ny":[8,9],"nz":[0,-1]},{"size":2,"px":[0,0],"py":[23,4],"pz":[0,-1],"nx":[5,9],"ny":[1,1],"nz":[1,0]},{"size":2,"px":[14,14],"py":[19,19],"pz":[0,-1],"nx":[11,11],"ny":[10,9],"nz":[1,1]},{"size":2,"px":[23,23],"py":[11,9],"pz":[0,0],"nx":[23,23],"ny":[0,11],"nz":[0,-1]},{"size":2,"px":[23,3],"py":[23,5],"pz":[0,-1],"nx":[4,1],"ny":[23,10],"nz":[0,1]},{"size":2,"px":[9,1],"py":[7,4],"pz":[1,-1],"nx":[19,10],"ny":[20,9],"nz":[0,1]},{"size":2,"px":[16,1],"py":[9,4],"pz":[0,-1],"nx":[7,8],"ny":[3,3],"nz":[1,1]},{"size":2,"px":[7,6],"py":[13,13],"pz":[0,0],"nx":[4,5],"ny":[4,11],"nz":[1,-1]},{"size":5,"px":[19,20,20,10,10],"py":[0,0,2,0,1],"pz":[0,0,0,1,1],"nx":[7,7,15,4,4],"ny":[4,13,7,4,4],"nz":[1,0,0,1,-1]},{"size":2,"px":[12,23],"py":[6,5],"pz":[0,-1],"nx":[18,18],"ny":[17,16],"nz":[0,0]},{"size":2,"px":[6,3],"py":[9,2],"pz":[1,2],"nx":[14,18],"ny":[9,1],"nz":[0,-1]},{"size":2,"px":[9,13],"py":[16,5],"pz":[0,-1],"nx":[5,4],"ny":[7,9],"nz":[1,1]},{"size":2,"px":[10,10],"py":[8,10],"pz":[1,1],"nx":[4,1],"ny":[5,3],"nz":[2,-1]},{"size":2,"px":[12,11],"py":[13,4],"pz":[0,-1],"nx":[0,0],"ny":[14,15],"nz":[0,0]},{"size":2,"px":[2,1],"py":[20,17],"pz":[0,0],"nx":[12,12],"ny":[22,2],"nz":[0,-1]},{"size":2,"px":[2,3],"py":[6,7],"pz":[1,-1],"nx":[21,21],"ny":[13,12],"nz":[0,0]},{"size":2,"px":[3,10],"py":[4,23],"pz":[2,0],"nx":[10,2],"ny":[21,5],"nz":[0,-1]},{"size":2,"px":[6,12],"py":[3,6],"pz":[1,0],"nx":[11,0],"ny":[17,1],"nz":[0,-1]},{"size":2,"px":[11,4],"py":[21,9],"pz":[0,-1],"nx":[2,3],"ny":[18,22],"nz":[0,0]},{"size":2,"px":[13,5],"py":[18,9],"pz":[0,-1],"nx":[6,7],"ny":[8,9],"nz":[1,1]},{"size":2,"px":[21,4],"py":[16,3],"pz":[0,-1],"nx":[23,23],"ny":[16,15],"nz":[0,0]},{"size":2,"px":[2,0],"py":[7,4],"pz":[1,-1],"nx":[3,8],"ny":[7,4],"nz":[1,1]},{"size":2,"px":[15,16],"py":[11,12],"pz":[0,0],"nx":[8,5],"ny":[4,5],"nz":[1,-1]},{"size":2,"px":[0,0],"py":[7,5],"pz":[0,0],"nx":[17,17],"ny":[11,10],"nz":[0,-1]},{"size":5,"px":[8,13,12,3,3],"py":[6,23,23,3,3],"pz":[1,0,0,2,-1],"nx":[0,1,0,0,0],"ny":[2,13,4,5,6],"nz":[2,0,1,1,1]},{"size":2,"px":[0,1],"py":[7,8],"pz":[1,-1],"nx":[0,0],"ny":[1,0],"nz":[2,2]},{"size":2,"px":[2,12],"py":[1,7],"pz":[1,-1],"nx":[0,0],"ny":[12,14],"nz":[0,0]},{"size":2,"px":[5,1],"py":[7,4],"pz":[1,2],"nx":[8,0],"ny":[15,14],"nz":[0,-1]},{"size":2,"px":[7,4],"py":[14,8],"pz":[0,-1],"nx":[2,4],"ny":[1,4],"nz":[2,1]},{"size":2,"px":[5,3],"py":[3,1],"pz":[2,-1],"nx":[9,9],"ny":[5,6],"nz":[1,1]},{"size":2,"px":[4,5],"py":[2,3],"pz":[1,-1],"nx":[11,12],"ny":[23,23],"nz":[0,0]},{"size":2,"px":[10,5],"py":[7,0],"pz":[1,-1],"nx":[22,22],"ny":[19,18],"nz":[0,0]},{"size":3,"px":[10,2,9],"py":[20,9,4],"pz":[0,-1,-1],"nx":[1,10,11],"ny":[2,11,9],"nz":[2,0,0]},{"size":2,"px":[4,8],"py":[3,6],"pz":[2,1],"nx":[9,3],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[17,6],"py":[7,16],"pz":[0,-1],"nx":[17,17],"ny":[9,6],"nz":[0,0]},{"size":3,"px":[8,1,9],"py":[6,3,4],"pz":[1,-1,-1],"nx":[2,9,2],"ny":[5,13,3],"nz":[2,0,2]},{"size":4,"px":[10,10,9,2],"py":[12,11,2,10],"pz":[0,0,-1,-1],"nx":[6,11,3,13],"ny":[2,4,1,4],"nz":[1,0,2,0]},{"size":2,"px":[3,3],"py":[7,1],"pz":[1,-1],"nx":[4,3],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[0,0],"py":[4,8],"pz":[2,1],"nx":[4,4],"ny":[15,5],"nz":[0,-1]},{"size":2,"px":[5,0],"py":[4,8],"pz":[1,-1],"nx":[13,13],"ny":[9,10],"nz":[0,0]},{"size":2,"px":[6,3],"py":[2,1],"pz":[1,2],"nx":[8,17],"ny":[4,12],"nz":[1,-1]},{"size":2,"px":[15,16],"py":[11,6],"pz":[0,0],"nx":[16,17],"ny":[5,12],"nz":[0,-1]},{"size":2,"px":[13,11],"py":[9,7],"pz":[0,-1],"nx":[0,1],"ny":[9,20],"nz":[1,0]},{"size":3,"px":[16,11,20],"py":[4,7,23],"pz":[0,-1,-1],"nx":[8,9,4],"ny":[4,6,4],"nz":[1,1,2]},{"size":2,"px":[1,1],"py":[18,17],"pz":[0,0],"nx":[9,6],"ny":[7,11],"nz":[0,-1]},{"size":3,"px":[4,4,19],"py":[3,2,9],"pz":[2,2,0],"nx":[2,14,11],"ny":[5,3,9],"nz":[1,-1,-1]},{"size":2,"px":[11,19],"py":[13,9],"pz":[0,-1],"nx":[11,11],"ny":[4,5],"nz":[1,1]},{"size":2,"px":[13,7],"py":[19,2],"pz":[0,-1],"nx":[3,5],"ny":[6,12],"nz":[1,0]},{"size":4,"px":[9,4,4,2],"py":[13,9,8,4],"pz":[0,1,1,2],"nx":[13,0,0,14],"ny":[18,11,6,1],"nz":[0,-1,-1,-1]},{"size":2,"px":[11,15],"py":[8,10],"pz":[0,0],"nx":[14,11],"ny":[9,2],"nz":[0,-1]},{"size":2,"px":[3,2],"py":[8,5],"pz":[1,2],"nx":[4,4],"ny":[10,10],"nz":[1,-1]},{"size":4,"px":[4,6,16,14],"py":[1,1,1,7],"pz":[2,1,0,0],"nx":[10,1,1,2],"ny":[8,5,10,3],"nz":[0,-1,-1,-1]},{"size":4,"px":[2,3,1,2],"py":[3,1,0,2],"pz":[0,0,1,0],"nx":[0,0,0,0],"ny":[1,1,2,0],"nz":[0,1,0,1]},{"size":2,"px":[8,8],"py":[6,7],"pz":[1,1],"nx":[8,0],"ny":[4,1],"nz":[1,-1]},{"size":2,"px":[0,0],"py":[3,0],"pz":[0,1],"nx":[2,2],"ny":[1,16],"nz":[1,-1]},{"size":2,"px":[6,6],"py":[19,18],"pz":[0,0],"nx":[2,10],"ny":[5,8],"nz":[2,-1]},{"size":2,"px":[8,5],"py":[21,11],"pz":[0,-1],"nx":[3,2],"ny":[11,5],"nz":[1,2]},{"size":2,"px":[4,9],"py":[4,7],"pz":[2,1],"nx":[8,7],"ny":[10,4],"nz":[1,-1]},{"size":5,"px":[4,18,19,16,19],"py":[3,12,12,23,13],"pz":[2,0,0,0,0],"nx":[2,8,3,2,2],"ny":[4,23,10,5,5],"nz":[2,0,1,2,-1]},{"size":2,"px":[4,8],"py":[6,11],"pz":[1,0],"nx":[8,3],"ny":[4,7],"nz":[1,-1]},{"size":2,"px":[3,12],"py":[4,13],"pz":[2,0],"nx":[10,5],"ny":[15,21],"nz":[0,-1]},{"size":2,"px":[2,9],"py":[4,23],"pz":[2,0],"nx":[19,4],"ny":[9,3],"nz":[0,2]},{"size":2,"px":[3,6],"py":[8,15],"pz":[1,0],"nx":[6,1],"ny":[18,5],"nz":[0,-1]},{"size":2,"px":[9,0],"py":[20,3],"pz":[0,-1],"nx":[2,10],"ny":[5,17],"nz":[2,0]},{"size":3,"px":[10,6,3],"py":[2,7,3],"pz":[0,-1,-1],"nx":[5,4,2],"ny":[9,7,2],"nz":[1,1,2]},{"size":2,"px":[14,6],"py":[12,7],"pz":[0,-1],"nx":[2,10],"ny":[0,1],"nz":[2,0]},{"size":3,"px":[10,5,1],"py":[15,5,4],"pz":[0,-1,-1],"nx":[9,4,18],"ny":[2,0,4],"nz":[1,2,0]},{"size":2,"px":[17,2],"py":[12,6],"pz":[0,-1],"nx":[8,16],"ny":[4,11],"nz":[1,0]},{"size":3,"px":[7,13,4],"py":[0,0,1],"pz":[1,0,-1],"nx":[18,4,4],"ny":[13,2,3],"nz":[0,2,2]},{"size":2,"px":[1,11],"py":[10,6],"pz":[0,-1],"nx":[0,1],"ny":[15,17],"nz":[0,0]},{"size":3,"px":[9,12,8],"py":[8,17,11],"pz":[1,0,1],"nx":[12,0,20],"ny":[16,9,13],"nz":[0,-1,-1]},{"size":2,"px":[11,4],"py":[5,8],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[16,3],"py":[9,8],"pz":[0,-1],"nx":[4,8],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[6,3],"py":[11,5],"pz":[1,2],"nx":[11,5],"ny":[21,5],"nz":[0,-1]},{"size":2,"px":[11,13],"py":[1,1],"pz":[0,0],"nx":[4,4],"ny":[5,5],"nz":[1,-1]},{"size":2,"px":[14,4],"py":[4,3],"pz":[0,-1],"nx":[12,10],"ny":[2,2],"nz":[0,0]},{"size":2,"px":[3,6],"py":[2,4],"pz":[2,1],"nx":[9,7],"ny":[9,7],"nz":[0,-1]},{"size":3,"px":[5,6,6],"py":[4,4,4],"pz":[1,-1,-1],"nx":[13,8,7],"ny":[8,3,4],"nz":[0,1,1]},{"size":2,"px":[5,5],"py":[2,11],"pz":[1,1],"nx":[10,11],"ny":[22,22],"nz":[0,0]},{"size":2,"px":[16,9],"py":[13,7],"pz":[0,1],"nx":[8,14],"ny":[4,12],"nz":[1,-1]},{"size":2,"px":[13,5],"py":[13,3],"pz":[0,2],"nx":[16,22],"ny":[13,6],"nz":[0,-1]},{"size":4,"px":[4,4,3,4],"py":[4,3,4,5],"pz":[2,2,2,2],"nx":[21,5,17,7],"ny":[0,2,5,23],"nz":[0,-1,-1,-1]},{"size":2,"px":[4,16],"py":[0,1],"pz":[2,0],"nx":[15,1],"ny":[23,10],"nz":[0,-1]},{"size":2,"px":[4,6],"py":[11,2],"pz":[0,-1],"nx":[15,6],"ny":[2,1],"nz":[0,1]},{"size":2,"px":[6,3],"py":[2,1],"pz":[1,2],"nx":[8,8],"ny":[4,4],"nz":[1,-1]},{"size":3,"px":[13,14,5],"py":[9,15,2],"pz":[0,-1,-1],"nx":[11,1,11],"ny":[10,3,11],"nz":[0,1,0]},{"size":2,"px":[5,1],"py":[6,2],"pz":[1,-1],"nx":[1,1],"ny":[2,5],"nz":[2,1]},{"size":2,"px":[11,5],"py":[1,0],"pz":[1,2],"nx":[10,4],"ny":[2,3],"nz":[1,-1]},{"size":2,"px":[11,11],"py":[8,9],"pz":[1,1],"nx":[23,4],"ny":[23,2],"nz":[0,-1]},{"size":2,"px":[5,2],"py":[10,2],"pz":[0,-1],"nx":[18,10],"ny":[0,1],"nz":[0,1]},{"size":2,"px":[20,4],"py":[7,3],"pz":[0,2],"nx":[8,4],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[10,4],"py":[5,4],"pz":[1,-1],"nx":[11,11],"ny":[5,6],"nz":[1,1]},{"size":3,"px":[14,15,16],"py":[0,0,1],"pz":[0,0,0],"nx":[8,5,15],"ny":[7,2,10],"nz":[1,-1,-1]},{"size":2,"px":[2,2],"py":[1,1],"pz":[2,-1],"nx":[17,18],"ny":[2,2],"nz":[0,0]},{"size":2,"px":[13,8],"py":[15,7],"pz":[0,-1],"nx":[9,4],"ny":[5,2],"nz":[0,1]},{"size":2,"px":[4,0],"py":[6,17],"pz":[1,-1],"nx":[3,2],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[14,8],"py":[17,9],"pz":[0,-1],"nx":[7,6],"ny":[8,8],"nz":[1,1]},{"size":2,"px":[10,4],"py":[7,1],"pz":[1,-1],"nx":[15,6],"ny":[14,4],"nz":[0,1]},{"size":2,"px":[3,12],"py":[8,19],"pz":[1,0],"nx":[13,10],"ny":[17,9],"nz":[0,-1]},{"size":2,"px":[7,12],"py":[2,4],"pz":[1,0],"nx":[6,11],"ny":[3,2],"nz":[0,-1]},{"size":4,"px":[2,1,6,1],"py":[10,3,23,8],"pz":[1,2,0,1],"nx":[17,10,23,0],"ny":[9,2,20,3],"nz":[0,-1,-1,-1]},{"size":2,"px":[9,9],"py":[2,8],"pz":[0,-1],"nx":[2,2],"ny":[4,2],"nz":[2,2]},{"size":2,"px":[3,16],"py":[1,6],"pz":[2,0],"nx":[8,4],"ny":[2,5],"nz":[1,-1]},{"size":2,"px":[3,6],"py":[1,2],"pz":[2,1],"nx":[8,8],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[5,6],"py":[3,0],"pz":[2,-1],"nx":[9,5],"ny":[2,1],"nz":[0,1]},{"size":2,"px":[3,16],"py":[5,23],"pz":[1,-1],"nx":[0,0],"ny":[6,3],"nz":[1,2]},{"size":4,"px":[0,0,0,0],"py":[3,2,12,5],"pz":[2,2,0,1],"nx":[2,3,2,13],"ny":[5,5,2,19],"nz":[1,-1,-1,-1]},{"size":2,"px":[11,11],"py":[10,11],"pz":[0,0],"nx":[5,5],"ny":[1,1],"nz":[2,-1]},{"size":2,"px":[5,2],"py":[0,4],"pz":[2,-1],"nx":[2,2],"ny":[10,8],"nz":[1,1]},{"size":4,"px":[16,2,8,4],"py":[14,0,11,5],"pz":[0,-1,-1,-1],"nx":[18,14,7,7],"ny":[13,14,8,6],"nz":[0,0,1,1]},{"size":2,"px":[8,9],"py":[2,2],"pz":[0,0],"nx":[5,14],"ny":[4,14],"nz":[1,-1]},{"size":2,"px":[3,5],"py":[11,20],"pz":[1,0],"nx":[11,4],"ny":[0,2],"nz":[0,-1]},{"size":2,"px":[2,2],"py":[3,4],"pz":[2,2],"nx":[3,4],"ny":[4,2],"nz":[1,-1]},{"size":3,"px":[10,4,3],"py":[5,5,3],"pz":[0,-1,-1],"nx":[11,3,10],"ny":[2,0,2],"nz":[0,2,0]},{"size":2,"px":[15,15],"py":[1,1],"pz":[0,-1],"nx":[7,4],"ny":[5,2],"nz":[1,2]},{"size":4,"px":[9,5,2,6],"py":[22,8,4,19],"pz":[0,1,2,0],"nx":[9,5,0,3],"ny":[20,5,22,4],"nz":[0,-1,-1,-1]},{"size":3,"px":[1,4,10],"py":[3,9,12],"pz":[2,1,0],"nx":[0,10,0],"ny":[0,5,0],"nz":[0,-1,-1]},{"size":2,"px":[1,6],"py":[0,7],"pz":[0,-1],"nx":[20,19],"ny":[14,14],"nz":[0,0]},{"size":2,"px":[13,4],"py":[14,15],"pz":[0,-1],"nx":[2,1],"ny":[5,7],"nz":[0,0]},{"size":2,"px":[17,7],"py":[9,11],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[17,9],"py":[12,6],"pz":[0,1],"nx":[15,10],"ny":[9,8],"nz":[0,-1]},{"size":2,"px":[0,0],"py":[0,1],"pz":[2,2],"nx":[9,7],"ny":[6,17],"nz":[1,-1]},{"size":3,"px":[3,3,15],"py":[3,4,6],"pz":[2,1,0],"nx":[0,2,22],"ny":[5,8,9],"nz":[0,-1,-1]},{"size":4,"px":[15,15,15,1],"py":[12,6,6,1],"pz":[0,-1,-1,-1],"nx":[4,7,13,4],"ny":[4,7,12,2],"nz":[2,1,0,2]},{"size":2,"px":[3,15],"py":[12,6],"pz":[0,-1],"nx":[9,1],"ny":[14,2],"nz":[0,2]},{"size":2,"px":[12,12],"py":[11,12],"pz":[0,0],"nx":[9,5],"ny":[4,4],"nz":[1,-1]},{"size":3,"px":[23,6,7],"py":[23,3,4],"pz":[0,-1,-1],"nx":[19,16,17],"ny":[17,14,15],"nz":[0,0,0]},{"size":2,"px":[9,5],"py":[2,7],"pz":[1,-1],"nx":[11,23],"ny":[10,18],"nz":[1,0]},{"size":3,"px":[0,0,0],"py":[4,9,2],"pz":[1,0,2],"nx":[2,0,0],"ny":[9,2,1],"nz":[0,-1,-1]},{"size":2,"px":[12,0],"py":[11,9],"pz":[0,-1],"nx":[1,0],"ny":[18,5],"nz":[0,2]},{"size":2,"px":[5,4],"py":[10,6],"pz":[0,1],"nx":[10,6],"ny":[10,18],"nz":[0,-1]},{"size":2,"px":[13,12],"py":[13,13],"pz":[0,-1],"nx":[5,11],"ny":[1,3],"nz":[2,1]},{"size":2,"px":[10,19],"py":[5,22],"pz":[1,-1],"nx":[4,12],"ny":[1,5],"nz":[2,0]},{"size":2,"px":[8,6],"py":[0,0],"pz":[0,0],"nx":[3,12],"ny":[0,3],"nz":[0,-1]},{"size":2,"px":[9,6],"py":[7,0],"pz":[1,-1],"nx":[12,12],"ny":[10,11],"nz":[0,0]},{"size":4,"px":[3,1,3,2],"py":[20,9,21,19],"pz":[0,1,0,0],"nx":[20,20,5,12],"ny":[10,15,2,10],"nz":[0,-1,-1,-1]},{"size":2,"px":[2,4],"py":[3,6],"pz":[2,1],"nx":[3,1],"ny":[4,6],"nz":[1,-1]},{"size":3,"px":[5,11,11],"py":[1,3,4],"pz":[2,1,1],"nx":[3,3,7],"ny":[5,5,0],"nz":[1,-1,-1]},{"size":3,"px":[8,6,7],"py":[10,5,6],"pz":[1,1,1],"nx":[23,3,7],"ny":[0,5,0],"nz":[0,-1,-1]},{"size":2,"px":[2,7],"py":[2,14],"pz":[1,-1],"nx":[7,3],"ny":[12,4],"nz":[0,1]},{"size":2,"px":[5,3],"py":[6,3],"pz":[1,2],"nx":[13,3],"ny":[12,4],"nz":[0,-1]},{"size":2,"px":[11,18],"py":[11,4],"pz":[0,-1],"nx":[23,11],"ny":[19,10],"nz":[0,1]},{"size":2,"px":[7,2],"py":[12,3],"pz":[0,-1],"nx":[8,4],"ny":[11,5],"nz":[0,1]},{"size":2,"px":[11,11],"py":[0,11],"pz":[1,-1],"nx":[3,3],"ny":[19,18],"nz":[0,0]},{"size":2,"px":[11,1],"py":[11,11],"pz":[1,-1],"nx":[13,15],"ny":[6,5],"nz":[0,0]},{"size":2,"px":[8,8],"py":[9,9],"pz":[0,-1],"nx":[5,11],"ny":[1,3],"nz":[2,1]},{"size":4,"px":[6,4,8,3],"py":[6,2,4,3],"pz":[0,2,1,2],"nx":[7,0,15,8],"ny":[8,8,16,7],"nz":[0,-1,-1,-1]},{"size":2,"px":[4,3],"py":[22,20],"pz":[0,0],"nx":[2,8],"ny":[5,4],"nz":[2,-1]},{"size":2,"px":[12,6],"py":[11,0],"pz":[0,-1],"nx":[0,0],"ny":[3,1],"nz":[1,2]},{"size":2,"px":[0,0],"py":[12,7],"pz":[0,1],"nx":[3,1],"ny":[23,9],"nz":[0,-1]},{"size":2,"px":[7,0],"py":[11,5],"pz":[1,-1],"nx":[0,0],"ny":[2,3],"nz":[2,2]},{"size":2,"px":[8,8],"py":[10,10],"pz":[0,-1],"nx":[4,3],"ny":[5,4],"nz":[2,2]},{"size":2,"px":[13,3],"py":[2,4],"pz":[0,-1],"nx":[4,3],"ny":[3,5],"nz":[2,2]},{"size":2,"px":[1,1],"py":[23,22],"pz":[0,0],"nx":[9,0],"ny":[7,3],"nz":[0,-1]},{"size":2,"px":[1,0],"py":[16,15],"pz":[0,0],"nx":[0,14],"ny":[23,12],"nz":[0,-1]},{"size":2,"px":[13,8],"py":[22,0],"pz":[0,-1],"nx":[5,3],"ny":[0,1],"nz":[1,1]},{"size":2,"px":[13,13],"py":[7,7],"pz":[0,-1],"nx":[3,2],"ny":[17,10],"nz":[0,1]},{"size":2,"px":[20,20],"py":[15,16],"pz":[0,0],"nx":[7,3],"ny":[9,17],"nz":[1,-1]},{"size":5,"px":[10,12,11,13,11],"py":[2,2,1,2,2],"pz":[0,0,0,0,0],"nx":[10,18,21,21,19],"ny":[3,1,13,11,2],"nz":[1,0,0,0,0]},{"size":2,"px":[16,3],"py":[6,1],"pz":[0,2],"nx":[15,18],"ny":[8,1],"nz":[0,-1]},{"size":2,"px":[19,3],"py":[8,1],"pz":[0,-1],"nx":[9,8],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[10,3],"py":[15,18],"pz":[0,-1],"nx":[3,3],"ny":[0,1],"nz":[2,2]},{"size":2,"px":[3,3],"py":[2,3],"pz":[2,2],"nx":[7,3],"ny":[11,1],"nz":[1,-1]},{"size":2,"px":[11,10],"py":[17,9],"pz":[0,-1],"nx":[11,10],"ny":[15,15],"nz":[0,0]},{"size":2,"px":[5,10],"py":[2,4],"pz":[1,0],"nx":[8,8],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[9,10],"py":[3,4],"pz":[0,-1],"nx":[9,10],"ny":[2,1],"nz":[0,0]},{"size":2,"px":[23,11],"py":[13,10],"pz":[0,1],"nx":[14,7],"ny":[5,14],"nz":[0,-1]},{"size":2,"px":[4,4],"py":[5,4],"pz":[2,2],"nx":[9,8],"ny":[3,3],"nz":[1,-1]},{"size":3,"px":[12,4,15],"py":[5,4,7],"pz":[0,-1,-1],"nx":[3,4,2],"ny":[7,11,5],"nz":[1,1,2]},{"size":2,"px":[11,4],"py":[15,4],"pz":[0,-1],"nx":[5,9],"ny":[7,15],"nz":[1,0]},{"size":2,"px":[9,7],"py":[0,1],"pz":[1,-1],"nx":[11,11],"ny":[8,7],"nz":[1,1]},{"size":5,"px":[1,1,1,1,1],"py":[11,12,10,9,9],"pz":[0,0,0,0,-1],"nx":[4,5,8,16,11],"ny":[4,3,8,8,6],"nz":[1,1,0,0,0]}],"alpha":[-1.059083e+00,1.059083e+00,-7.846122e-01,7.846122e-01,-4.451160e-01,4.451160e-01,-4.483277e-01,4.483277e-01,-3.905999e-01,3.905999e-01,-3.789250e-01,3.789250e-01,-3.874610e-01,3.874610e-01,-3.110541e-01,3.110541e-01,-3.565056e-01,3.565056e-01,-3.812617e-01,3.812617e-01,-3.325142e-01,3.325142e-01,-2.787282e-01,2.787282e-01,-3.238869e-01,3.238869e-01,-2.993499e-01,2.993499e-01,-2.807737e-01,2.807737e-01,-2.855285e-01,2.855285e-01,-2.277550e-01,2.277550e-01,-2.031261e-01,2.031261e-01,-2.071574e-01,2.071574e-01,-2.534142e-01,2.534142e-01,-2.266871e-01,2.266871e-01,-2.229078e-01,2.229078e-01,-2.716325e-01,2.716325e-01,-3.046938e-01,3.046938e-01,-2.271601e-01,2.271601e-01,-1.987651e-01,1.987651e-01,-1.953664e-01,1.953664e-01,-2.178737e-01,2.178737e-01,-2.285148e-01,2.285148e-01,-1.891073e-01,1.891073e-01,-2.926469e-01,2.926469e-01,-2.094783e-01,2.094783e-01,-1.478037e-01,1.478037e-01,-1.707579e-01,1.707579e-01,-1.464390e-01,1.464390e-01,-2.462321e-01,2.462321e-01,-2.319978e-01,2.319978e-01,-1.781651e-01,1.781651e-01,-1.471349e-01,1.471349e-01,-1.953006e-01,1.953006e-01,-2.145108e-01,2.145108e-01,-1.567881e-01,1.567881e-01,-2.024617e-01,2.024617e-01,-1.883198e-01,1.883198e-01,-1.996976e-01,1.996976e-01,-1.292330e-01,1.292330e-01,-2.142242e-01,2.142242e-01,-2.473748e-01,2.473748e-01,-1.880902e-01,1.880902e-01,-1.874572e-01,1.874572e-01,-1.495984e-01,1.495984e-01,-1.608525e-01,1.608525e-01,-1.698402e-01,1.698402e-01,-1.898871e-01,1.898871e-01,-1.350238e-01,1.350238e-01,-1.727032e-01,1.727032e-01,-1.593352e-01,1.593352e-01,-1.476968e-01,1.476968e-01,-1.428431e-01,1.428431e-01,-1.766261e-01,1.766261e-01,-1.453226e-01,1.453226e-01,-1.929885e-01,1.929885e-01,-1.337582e-01,1.337582e-01,-1.629078e-01,1.629078e-01,-9.973085e-02,9.973085e-02,-1.172760e-01,1.172760e-01,-1.399242e-01,1.399242e-01,-1.613189e-01,1.613189e-01,-1.145695e-01,1.145695e-01,-1.191093e-01,1.191093e-01,-1.225900e-01,1.225900e-01,-1.641114e-01,1.641114e-01,-1.419878e-01,1.419878e-01,-2.183465e-01,2.183465e-01,-1.566968e-01,1.566968e-01,-1.288216e-01,1.288216e-01,-1.422831e-01,1.422831e-01,-2.000107e-01,2.000107e-01,-1.817265e-01,1.817265e-01,-1.793796e-01,1.793796e-01,-1.428926e-01,1.428926e-01,-1.182032e-01,1.182032e-01,-1.150421e-01,1.150421e-01,-1.336584e-01,1.336584e-01,-1.656178e-01,1.656178e-01,-1.386549e-01,1.386549e-01,-1.387461e-01,1.387461e-01,-1.313023e-01,1.313023e-01,-1.360391e-01,1.360391e-01,-1.305505e-01,1.305505e-01,-1.323399e-01,1.323399e-01,-1.502891e-01,1.502891e-01,-1.488859e-01,1.488859e-01,-1.126628e-01,1.126628e-01,-1.233623e-01,1.233623e-01,-1.702106e-01,1.702106e-01,-1.629639e-01,1.629639e-01,-1.337706e-01,1.337706e-01,-1.290384e-01,1.290384e-01,-1.165519e-01,1.165519e-01,-1.412778e-01,1.412778e-01,-1.470204e-01,1.470204e-01,-2.213780e-01,2.213780e-01,-1.472619e-01,1.472619e-01,-1.357071e-01,1.357071e-01,-1.416513e-01,1.416513e-01,-1.050208e-01,1.050208e-01,-1.480033e-01,1.480033e-01,-1.899871e-01,1.899871e-01,-1.466249e-01,1.466249e-01,-1.076952e-01,1.076952e-01,-1.035096e-01,1.035096e-01,-1.566970e-01,1.566970e-01,-1.364115e-01,1.364115e-01,-1.512889e-01,1.512889e-01,-1.252851e-01,1.252851e-01,-1.206300e-01,1.206300e-01,-1.059134e-01,1.059134e-01,-1.140398e-01,1.140398e-01,-1.359912e-01,1.359912e-01,-1.231201e-01,1.231201e-01,-1.231867e-01,1.231867e-01,-9.789923e-02,9.789923e-02,-1.590213e-01,1.590213e-01,-1.002206e-01,1.002206e-01,-1.518339e-01,1.518339e-01,-1.055203e-01,1.055203e-01,-1.012579e-01,1.012579e-01,-1.094956e-01,1.094956e-01,-1.429592e-01,1.429592e-01,-1.108838e-01,1.108838e-01,-1.116475e-01,1.116475e-01,-1.735371e-01,1.735371e-01,-1.067758e-01,1.067758e-01,-1.290406e-01,1.290406e-01,-1.156822e-01,1.156822e-01,-9.668217e-02,9.668217e-02,-1.170053e-01,1.170053e-01,-1.252092e-01,1.252092e-01,-1.135158e-01,1.135158e-01,-1.105896e-01,1.105896e-01,-1.038175e-01,1.038175e-01,-1.210459e-01,1.210459e-01,-1.078878e-01,1.078878e-01,-1.050808e-01,1.050808e-01,-1.428227e-01,1.428227e-01,-1.664600e-01,1.664600e-01,-1.013508e-01,1.013508e-01,-1.206930e-01,1.206930e-01,-1.088972e-01,1.088972e-01,-1.381026e-01,1.381026e-01,-1.109115e-01,1.109115e-01,-7.921549e-02,7.921549e-02,-1.057832e-01,1.057832e-01,-9.385827e-02,9.385827e-02,-1.486035e-01,1.486035e-01,-1.247401e-01,1.247401e-01,-9.451327e-02,9.451327e-02,-1.272805e-01,1.272805e-01,-9.616206e-02,9.616206e-02,-9.051084e-02,9.051084e-02,-1.138458e-01,1.138458e-01,-1.047581e-01,1.047581e-01,-1.382394e-01,1.382394e-01,-1.122203e-01,1.122203e-01,-1.052936e-01,1.052936e-01,-1.239318e-01,1.239318e-01,-1.241439e-01,1.241439e-01,-1.259012e-01,1.259012e-01,-1.211701e-01,1.211701e-01,-1.344131e-01,1.344131e-01,-1.127778e-01,1.127778e-01,-1.609745e-01,1.609745e-01,-1.901382e-01,1.901382e-01,-1.618962e-01,1.618962e-01,-1.230398e-01,1.230398e-01,-1.319311e-01,1.319311e-01,-1.431410e-01,1.431410e-01,-1.143306e-01,1.143306e-01,-9.390938e-02,9.390938e-02,-1.154161e-01,1.154161e-01,-1.141205e-01,1.141205e-01,-1.098048e-01,1.098048e-01,-8.870072e-02,8.870072e-02,-1.122444e-01,1.122444e-01,-1.114147e-01,1.114147e-01,-1.185710e-01,1.185710e-01,-1.107775e-01,1.107775e-01,-1.259167e-01,1.259167e-01,-1.105176e-01,1.105176e-01,-1.020691e-01,1.020691e-01,-9.607863e-02,9.607863e-02,-9.573700e-02,9.573700e-02,-1.054349e-01,1.054349e-01,-1.137856e-01,1.137856e-01,-1.192043e-01,1.192043e-01,-1.113264e-01,1.113264e-01,-1.093137e-01,1.093137e-01,-1.010919e-01,1.010919e-01,-9.625901e-02,9.625901e-02,-9.338459e-02,9.338459e-02,-1.142944e-01,1.142944e-01,-1.038877e-01,1.038877e-01,-9.772862e-02,9.772862e-02,-1.375298e-01,1.375298e-01,-1.394776e-01,1.394776e-01,-9.454765e-02,9.454765e-02,-1.203246e-01,1.203246e-01,-8.684943e-02,8.684943e-02,-1.135622e-01,1.135622e-01,-1.058181e-01,1.058181e-01,-1.082152e-01,1.082152e-01,-1.411355e-01,1.411355e-01,-9.978846e-02,9.978846e-02,-1.057874e-01,1.057874e-01,-1.415366e-01,1.415366e-01,-9.981014e-02,9.981014e-02,-9.261151e-02,9.261151e-02,-1.737173e-01,1.737173e-01,-1.580335e-01,1.580335e-01,-9.594668e-02,9.594668e-02,-9.336013e-02,9.336013e-02,-1.102373e-01,1.102373e-01,-8.546557e-02,8.546557e-02,-9.945057e-02,9.945057e-02,-1.146358e-01,1.146358e-01,-1.324734e-01,1.324734e-01,-1.422296e-01,1.422296e-01,-9.937990e-02,9.937990e-02,-8.381049e-02,8.381049e-02,-1.270714e-01,1.270714e-01,-1.091738e-01,1.091738e-01,-1.314881e-01,1.314881e-01,-1.085159e-01,1.085159e-01,-9.247554e-02,9.247554e-02,-8.121645e-02,8.121645e-02,-1.059589e-01,1.059589e-01,-8.307793e-02,8.307793e-02,-1.033103e-01,1.033103e-01,-1.056706e-01,1.056706e-01,-1.032803e-01,1.032803e-01,-1.266840e-01,1.266840e-01,-9.341601e-02,9.341601e-02,-7.683570e-02,7.683570e-02,-1.030530e-01,1.030530e-01,-1.051872e-01,1.051872e-01,-9.114946e-02,9.114946e-02,-1.329341e-01,1.329341e-01,-9.270830e-02,9.270830e-02,-1.141750e-01,1.141750e-01,-9.889318e-02,9.889318e-02,-8.856485e-02,8.856485e-02,-1.054210e-01,1.054210e-01,-1.092704e-01,1.092704e-01,-8.729085e-02,8.729085e-02,-1.141057e-01,1.141057e-01,-1.530774e-01,1.530774e-01,-8.129720e-02,8.129720e-02,-1.143335e-01,1.143335e-01,-1.175777e-01,1.175777e-01,-1.371729e-01,1.371729e-01,-1.394356e-01,1.394356e-01,-1.016308e-01,1.016308e-01,-1.125547e-01,1.125547e-01,-9.672600e-02,9.672600e-02,-1.036631e-01,1.036631e-01,-8.702514e-02,8.702514e-02,-1.264807e-01,1.264807e-01,-1.465688e-01,1.465688e-01,-8.781464e-02,8.781464e-02,-8.552605e-02,8.552605e-02,-1.145072e-01,1.145072e-01,-1.378489e-01,1.378489e-01,-1.013312e-01,1.013312e-01,-1.020083e-01,1.020083e-01,-1.015816e-01,1.015816e-01,-8.407101e-02,8.407101e-02,-8.296485e-02,8.296485e-02,-8.033655e-02,8.033655e-02,-9.003615e-02,9.003615e-02,-7.504954e-02,7.504954e-02,-1.224941e-01,1.224941e-01,-9.347814e-02,9.347814e-02,-9.555575e-02,9.555575e-02,-9.810025e-02,9.810025e-02,-1.237068e-01,1.237068e-01,-1.283586e-01,1.283586e-01,-1.082763e-01,1.082763e-01,-1.018145e-01,1.018145e-01,-1.175161e-01,1.175161e-01,-1.252279e-01,1.252279e-01,-1.370559e-01,1.370559e-01,-9.941339e-02,9.941339e-02,-8.506938e-02,8.506938e-02,-1.260902e-01,1.260902e-01,-1.014152e-01,1.014152e-01,-9.728694e-02,9.728694e-02,-9.374910e-02,9.374910e-02,-9.587429e-02,9.587429e-02,-9.516036e-02,9.516036e-02,-7.375173e-02,7.375173e-02,-9.332487e-02,9.332487e-02,-9.020733e-02,9.020733e-02,-1.133381e-01,1.133381e-01,-1.542180e-01,1.542180e-01,-9.692168e-02,9.692168e-02,-7.960904e-02,7.960904e-02,-8.947089e-02,8.947089e-02,-7.830286e-02,7.830286e-02,-9.900050e-02,9.900050e-02,-1.041293e-01,1.041293e-01,-9.572501e-02,9.572501e-02,-8.230575e-02,8.230575e-02,-9.194901e-02,9.194901e-02,-1.076971e-01,1.076971e-01,-1.027782e-01,1.027782e-01,-1.028538e-01,1.028538e-01,-1.013992e-01,1.013992e-01,-9.087585e-02,9.087585e-02,-1.100706e-01,1.100706e-01,-1.094934e-01,1.094934e-01,-1.107879e-01,1.107879e-01,-1.026915e-01,1.026915e-01,-1.017572e-01,1.017572e-01,-7.984776e-02,7.984776e-02,-9.015413e-02,9.015413e-02,-1.299870e-01,1.299870e-01,-9.164982e-02,9.164982e-02,-1.062788e-01,1.062788e-01,-1.160203e-01,1.160203e-01,-8.858603e-02,8.858603e-02,-9.762964e-02,9.762964e-02,-1.070694e-01,1.070694e-01,-9.549046e-02,9.549046e-02,-1.533034e-01,1.533034e-01,-8.663316e-02,8.663316e-02,-9.303018e-02,9.303018e-02,-9.853582e-02,9.853582e-02,-9.733371e-02,9.733371e-02,-1.048555e-01,1.048555e-01,-9.056041e-02,9.056041e-02,-7.552283e-02,7.552283e-02,-8.780631e-02,8.780631e-02,-1.123953e-01,1.123953e-01,-1.452948e-01,1.452948e-01,-1.156423e-01,1.156423e-01,-8.701142e-02,8.701142e-02,-9.713334e-02,9.713334e-02,-9.970888e-02,9.970888e-02,-8.614129e-02,8.614129e-02,-7.459861e-02,7.459861e-02,-9.253517e-02,9.253517e-02,-9.570092e-02,9.570092e-02,-9.485535e-02,9.485535e-02,-1.148365e-01,1.148365e-01,-1.063193e-01,1.063193e-01,-9.986686e-02,9.986686e-02,-7.523412e-02,7.523412e-02,-1.005881e-01,1.005881e-01,-8.249716e-02,8.249716e-02,-1.055866e-01,1.055866e-01,-1.343050e-01,1.343050e-01,-1.371056e-01,1.371056e-01,-9.604689e-02,9.604689e-02,-1.224268e-01,1.224268e-01,-9.211478e-02,9.211478e-02,-1.108371e-01,1.108371e-01,-1.100547e-01,1.100547e-01,-8.938970e-02,8.938970e-02,-8.655951e-02,8.655951e-02,-7.085816e-02,7.085816e-02,-8.101028e-02,8.101028e-02,-8.338046e-02,8.338046e-02,-8.309588e-02,8.309588e-02,-9.090584e-02,9.090584e-02,-8.124564e-02,8.124564e-02,-9.367843e-02,9.367843e-02,-1.011747e-01,1.011747e-01,-9.885045e-02,9.885045e-02,-8.944266e-02,8.944266e-02,-8.453859e-02,8.453859e-02,-8.308847e-02,8.308847e-02,-1.367280e-01,1.367280e-01,-1.295144e-01,1.295144e-01,-1.063965e-01,1.063965e-01,-7.752328e-02,7.752328e-02,-9.681524e-02,9.681524e-02,-7.862345e-02,7.862345e-02,-8.767746e-02,8.767746e-02,-9.198041e-02,9.198041e-02,-9.686489e-02,9.686489e-02]},{"count":564,"threshold":-4.517456e+00,"feature":[{"size":5,"px":[15,9,8,12,11],"py":[3,6,3,0,8],"pz":[0,1,0,0,0],"nx":[6,14,9,22,23],"ny":[8,7,8,17,3],"nz":[1,0,0,0,0]},{"size":5,"px":[12,13,11,14,12],"py":[9,4,4,4,5],"pz":[0,0,0,0,0],"nx":[4,6,10,4,15],"ny":[3,8,7,10,9],"nz":[1,1,0,1,0]},{"size":5,"px":[7,5,6,8,8],"py":[2,13,2,1,1],"pz":[0,0,0,0,-1],"nx":[3,0,4,1,0],"ny":[4,3,10,3,13],"nz":[1,1,1,0,0]},{"size":5,"px":[11,2,2,11,16],"py":[9,4,2,7,11],"pz":[0,2,2,0,0],"nx":[8,4,1,14,0],"ny":[4,4,16,5,13],"nz":[1,1,-1,-1,-1]},{"size":2,"px":[14,14],"py":[18,18],"pz":[0,-1],"nx":[8,13],"ny":[10,16],"nz":[1,0]},{"size":5,"px":[15,17,16,8,18],"py":[1,2,1,0,2],"pz":[0,0,0,1,0],"nx":[21,22,22,22,22],"ny":[1,5,3,4,2],"nz":[0,0,0,0,-1]},{"size":2,"px":[15,4],"py":[23,3],"pz":[0,2],"nx":[7,3],"ny":[10,6],"nz":[1,-1]},{"size":5,"px":[3,6,4,3,11],"py":[10,11,8,3,8],"pz":[1,0,1,1,0],"nx":[3,5,6,3,0],"ny":[4,9,9,9,0],"nz":[1,-1,-1,-1,-1]},{"size":3,"px":[11,11,2],"py":[11,13,16],"pz":[0,0,-1],"nx":[10,10,9],"ny":[10,11,14],"nz":[0,0,0]},{"size":2,"px":[8,4],"py":[12,6],"pz":[0,1],"nx":[4,5],"ny":[11,11],"nz":[1,-1]},{"size":5,"px":[10,11,13,3,12],"py":[3,4,3,0,1],"pz":[0,0,0,2,0],"nx":[14,18,20,19,15],"ny":[13,1,15,2,18],"nz":[0,0,0,0,0]},{"size":5,"px":[20,14,10,12,12],"py":[12,12,4,10,11],"pz":[0,0,1,0,0],"nx":[9,2,9,9,9],"ny":[4,12,5,9,14],"nz":[1,-1,-1,-1,-1]},{"size":5,"px":[3,3,3,4,2],"py":[15,16,14,21,12],"pz":[0,0,0,0,0],"nx":[0,0,0,0,0],"ny":[20,10,5,21,21],"nz":[0,1,2,0,-1]},{"size":2,"px":[18,8],"py":[16,7],"pz":[0,1],"nx":[14,0],"ny":[8,10],"nz":[0,-1]},{"size":4,"px":[12,4,16,1],"py":[14,3,8,3],"pz":[0,-1,-1,-1],"nx":[14,10,20,13],"ny":[13,5,16,9],"nz":[0,1,0,0]},{"size":5,"px":[3,8,2,3,3],"py":[7,2,1,2,4],"pz":[1,-1,-1,-1,-1],"nx":[1,9,2,1,1],"ny":[3,14,9,7,2],"nz":[1,0,1,1,1]},{"size":5,"px":[4,1,3,2,3],"py":[2,1,2,4,3],"pz":[0,1,0,0,0],"nx":[0,0,0,0,0],"ny":[3,1,2,0,0],"nz":[0,1,0,2,-1]},{"size":4,"px":[4,8,7,9],"py":[6,11,11,10],"pz":[1,0,0,0],"nx":[3,10,2,20],"ny":[4,4,4,8],"nz":[1,-1,-1,-1]},{"size":2,"px":[1,8],"py":[3,11],"pz":[2,-1],"nx":[8,2],"ny":[15,5],"nz":[0,2]},{"size":2,"px":[17,0],"py":[13,10],"pz":[0,-1],"nx":[14,14],"ny":[11,10],"nz":[0,0]},{"size":5,"px":[22,22,22,5,22],"py":[16,18,17,2,15],"pz":[0,0,0,2,0],"nx":[8,4,15,6,6],"ny":[4,2,7,11,11],"nz":[1,2,0,1,-1]},{"size":5,"px":[16,9,8,17,15],"py":[12,6,6,22,12],"pz":[0,1,1,0,0],"nx":[11,23,23,23,22],"ny":[11,23,22,21,23],"nz":[1,0,0,0,-1]},{"size":5,"px":[5,2,4,4,9],"py":[22,3,15,20,18],"pz":[0,2,0,0,0],"nx":[9,4,23,7,22],"ny":[8,4,22,19,23],"nz":[0,-1,-1,-1,-1]},{"size":5,"px":[8,6,9,7,3],"py":[3,3,3,3,1],"pz":[0,0,0,0,1],"nx":[5,5,4,4,4],"ny":[0,1,1,2,0],"nz":[0,0,0,0,-1]},{"size":2,"px":[2,3],"py":[3,3],"pz":[2,2],"nx":[3,6],"ny":[4,6],"nz":[1,-1]},{"size":5,"px":[1,1,0,1,0],"py":[17,15,6,16,10],"pz":[0,0,1,0,0],"nx":[4,4,7,4,8],"ny":[2,5,9,4,4],"nz":[2,2,1,2,-1]},{"size":5,"px":[12,12,12,13,13],"py":[10,9,11,13,13],"pz":[0,0,0,0,-1],"nx":[4,3,3,5,3],"ny":[21,18,17,23,16],"nz":[0,0,0,0,0]},{"size":4,"px":[5,6,5,9],"py":[13,7,9,23],"pz":[0,0,1,0],"nx":[6,15,7,5],"ny":[9,20,7,23],"nz":[0,-1,-1,-1]},{"size":2,"px":[6,3],"py":[4,2],"pz":[1,2],"nx":[8,23],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[9,7],"py":[18,0],"pz":[0,0],"nx":[5,7],"ny":[8,10],"nz":[1,1]},{"size":2,"px":[4,6],"py":[11,16],"pz":[1,0],"nx":[10,9],"ny":[16,7],"nz":[0,-1]},{"size":4,"px":[11,11,11,11],"py":[11,10,12,13],"pz":[0,0,0,0],"nx":[13,13,13,9],"ny":[11,9,10,4],"nz":[0,0,0,1]},{"size":4,"px":[12,6,7,6],"py":[7,11,8,4],"pz":[0,1,1,1],"nx":[10,0,19,7],"ny":[21,3,12,11],"nz":[0,-1,-1,-1]},{"size":2,"px":[4,4],"py":[3,4],"pz":[2,2],"nx":[9,1],"ny":[4,7],"nz":[1,-1]},{"size":2,"px":[19,19],"py":[21,20],"pz":[0,0],"nx":[7,7],"ny":[3,13],"nz":[1,-1]},{"size":5,"px":[12,9,13,11,5],"py":[0,2,2,0,0],"pz":[0,0,0,0,1],"nx":[6,4,5,5,5],"ny":[1,3,5,2,6],"nz":[0,0,1,0,1]},{"size":5,"px":[4,3,2,5,7],"py":[11,3,3,7,17],"pz":[1,2,2,0,0],"nx":[23,5,11,5,5],"ny":[0,4,10,2,6],"nz":[0,-1,-1,-1,-1]},{"size":2,"px":[20,17],"py":[12,3],"pz":[0,-1],"nx":[20,19],"ny":[21,23],"nz":[0,0]},{"size":2,"px":[2,1],"py":[12,8],"pz":[0,0],"nx":[2,8],"ny":[2,16],"nz":[2,-1]},{"size":2,"px":[16,5],"py":[4,5],"pz":[0,-1],"nx":[7,8],"ny":[9,1],"nz":[1,1]},{"size":2,"px":[2,2],"py":[0,1],"pz":[1,1],"nx":[1,8],"ny":[5,1],"nz":[0,-1]},{"size":2,"px":[1,1],"py":[12,10],"pz":[0,1],"nx":[2,20],"ny":[23,9],"nz":[0,-1]},{"size":4,"px":[11,0,0,2],"py":[14,3,9,22],"pz":[0,-1,-1,-1],"nx":[13,14,7,3],"ny":[6,7,11,1],"nz":[0,0,0,2]},{"size":2,"px":[14,0],"py":[2,3],"pz":[0,-1],"nx":[4,4],"ny":[4,3],"nz":[2,2]},{"size":2,"px":[23,11],"py":[18,11],"pz":[0,1],"nx":[3,2],"ny":[1,21],"nz":[1,-1]},{"size":2,"px":[9,9],"py":[17,14],"pz":[0,-1],"nx":[4,5],"ny":[10,8],"nz":[1,1]},{"size":2,"px":[9,18],"py":[7,14],"pz":[1,0],"nx":[18,9],"ny":[17,8],"nz":[0,-1]},{"size":2,"px":[2,8],"py":[4,22],"pz":[2,0],"nx":[4,3],"ny":[10,1],"nz":[1,-1]},{"size":2,"px":[5,22],"py":[4,9],"pz":[2,-1],"nx":[11,23],"ny":[8,14],"nz":[1,0]},{"size":3,"px":[23,5,5],"py":[8,2,1],"pz":[0,2,2],"nx":[10,10,2],"ny":[4,4,2],"nz":[1,-1,-1]},{"size":2,"px":[11,11],"py":[14,23],"pz":[0,-1],"nx":[3,11],"ny":[4,13],"nz":[1,0]},{"size":2,"px":[3,2],"py":[7,0],"pz":[1,-1],"nx":[4,3],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[12,1],"py":[19,13],"pz":[0,-1],"nx":[9,12],"ny":[10,18],"nz":[1,0]},{"size":2,"px":[10,10],"py":[11,10],"pz":[1,1],"nx":[4,1],"ny":[5,11],"nz":[2,-1]},{"size":5,"px":[9,12,4,8,8],"py":[3,5,2,9,8],"pz":[1,0,2,1,1],"nx":[23,23,23,23,23],"ny":[3,4,6,5,5],"nz":[0,0,0,0,-1]},{"size":2,"px":[2,4],"py":[3,6],"pz":[2,1],"nx":[3,9],"ny":[4,6],"nz":[1,-1]},{"size":5,"px":[13,13,13,7,7],"py":[11,10,9,6,6],"pz":[0,0,0,1,-1],"nx":[5,5,15,5,2],"ny":[5,15,9,9,1],"nz":[0,0,0,1,2]},{"size":2,"px":[19,7],"py":[21,7],"pz":[0,1],"nx":[14,10],"ny":[15,4],"nz":[0,-1]},{"size":2,"px":[5,5],"py":[3,4],"pz":[2,2],"nx":[21,0],"ny":[23,5],"nz":[0,-1]},{"size":2,"px":[2,0],"py":[0,0],"pz":[1,-1],"nx":[3,2],"ny":[1,2],"nz":[0,0]},{"size":2,"px":[9,0],"py":[4,0],"pz":[0,-1],"nx":[5,12],"ny":[0,1],"nz":[1,0]},{"size":5,"px":[14,16,12,15,13],"py":[0,1,0,0,0],"pz":[0,0,0,0,0],"nx":[4,8,8,4,9],"ny":[2,3,4,1,3],"nz":[2,1,1,2,-1]},{"size":3,"px":[4,17,2],"py":[11,14,1],"pz":[1,-1,-1],"nx":[9,8,17],"ny":[1,4,0],"nz":[1,1,0]},{"size":2,"px":[18,9],"py":[17,7],"pz":[0,1],"nx":[8,4],"ny":[4,7],"nz":[1,-1]},{"size":2,"px":[0,0],"py":[3,0],"pz":[1,2],"nx":[10,11],"ny":[6,5],"nz":[1,-1]},{"size":5,"px":[21,21,21,21,20],"py":[17,16,19,18,21],"pz":[0,0,0,0,0],"nx":[0,0,0,0,0],"ny":[4,9,11,6,6],"nz":[1,0,0,1,-1]},{"size":2,"px":[12,0],"py":[7,1],"pz":[0,-1],"nx":[8,11],"ny":[4,17],"nz":[1,0]},{"size":4,"px":[13,0,0,0],"py":[15,0,0,0],"pz":[0,-1,-1,-1],"nx":[3,7,4,6],"ny":[2,7,5,9],"nz":[2,1,2,1]},{"size":2,"px":[2,9],"py":[3,12],"pz":[2,0],"nx":[2,0],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[10,3],"py":[6,1],"pz":[1,-1],"nx":[20,21],"ny":[19,14],"nz":[0,0]},{"size":5,"px":[5,22,22,11,22],"py":[1,4,3,3,2],"pz":[2,0,0,1,-1],"nx":[7,13,14,8,15],"ny":[3,6,6,3,7],"nz":[1,0,0,1,0]},{"size":2,"px":[12,19],"py":[5,15],"pz":[0,-1],"nx":[16,4],"ny":[8,2],"nz":[0,2]},{"size":2,"px":[1,0],"py":[11,9],"pz":[1,1],"nx":[5,0],"ny":[3,3],"nz":[1,-1]},{"size":4,"px":[8,3,4,2],"py":[6,7,5,3],"pz":[1,-1,-1,-1],"nx":[13,14,11,11],"ny":[11,13,3,5],"nz":[0,0,1,1]},{"size":2,"px":[11,11],"py":[5,6],"pz":[0,0],"nx":[8,4],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[5,9],"py":[6,17],"pz":[1,0],"nx":[9,4],"ny":[15,11],"nz":[0,-1]},{"size":3,"px":[6,3,6],"py":[6,3,5],"pz":[1,2,1],"nx":[11,10,4],"ny":[8,11,5],"nz":[0,0,-1]},{"size":2,"px":[8,16],"py":[0,1],"pz":[1,-1],"nx":[19,17],"ny":[1,0],"nz":[0,0]},{"size":2,"px":[21,20],"py":[4,1],"pz":[0,0],"nx":[11,5],"ny":[0,0],"nz":[1,2]},{"size":2,"px":[8,4],"py":[6,3],"pz":[1,2],"nx":[8,9],"ny":[4,10],"nz":[1,-1]},{"size":2,"px":[10,1],"py":[0,0],"pz":[1,-1],"nx":[13,12],"ny":[6,5],"nz":[0,0]},{"size":2,"px":[5,4],"py":[3,11],"pz":[1,-1],"nx":[3,17],"ny":[1,3],"nz":[2,0]},{"size":2,"px":[12,13],"py":[4,4],"pz":[0,0],"nx":[3,3],"ny":[1,1],"nz":[2,-1]},{"size":2,"px":[3,18],"py":[2,7],"pz":[2,0],"nx":[8,1],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[16,6],"py":[8,2],"pz":[0,1],"nx":[8,9],"ny":[4,19],"nz":[1,-1]},{"size":3,"px":[12,3,14],"py":[13,3,15],"pz":[0,-1,-1],"nx":[0,1,0],"ny":[16,18,15],"nz":[0,0,0]},{"size":2,"px":[3,1],"py":[3,4],"pz":[2,-1],"nx":[7,14],"ny":[10,14],"nz":[1,0]},{"size":2,"px":[9,16],"py":[6,10],"pz":[1,0],"nx":[8,8],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[7,11],"py":[4,4],"pz":[0,0],"nx":[7,23],"ny":[3,11],"nz":[0,-1]},{"size":5,"px":[2,4,3,4,4],"py":[1,2,0,1,1],"pz":[1,0,1,0,-1],"nx":[11,9,4,9,5],"ny":[6,5,3,6,3],"nz":[0,0,1,0,1]},{"size":2,"px":[6,0],"py":[14,1],"pz":[0,-1],"nx":[2,5],"ny":[2,9],"nz":[2,1]},{"size":2,"px":[6,7],"py":[7,12],"pz":[0,0],"nx":[3,22],"ny":[3,16],"nz":[1,-1]},{"size":2,"px":[10,4],"py":[1,1],"pz":[0,1],"nx":[2,6],"ny":[2,21],"nz":[2,-1]},{"size":2,"px":[13,1],"py":[11,6],"pz":[0,-1],"nx":[12,6],"ny":[5,2],"nz":[0,1]},{"size":5,"px":[10,5,11,10,10],"py":[4,3,4,6,5],"pz":[0,1,0,0,0],"nx":[4,7,13,8,4],"ny":[2,8,9,4,4],"nz":[2,1,0,1,-1]},{"size":4,"px":[7,8,7,8],"py":[11,3,4,7],"pz":[1,1,1,1],"nx":[0,7,3,8],"ny":[0,12,2,4],"nz":[0,-1,-1,-1]},{"size":2,"px":[0,0],"py":[4,7],"pz":[2,1],"nx":[10,1],"ny":[7,0],"nz":[0,-1]},{"size":2,"px":[11,5],"py":[19,5],"pz":[0,-1],"nx":[11,5],"ny":[17,10],"nz":[0,1]},{"size":2,"px":[11,12],"py":[4,4],"pz":[0,0],"nx":[7,5],"ny":[8,3],"nz":[0,-1]},{"size":3,"px":[4,8,4],"py":[2,9,4],"pz":[2,1,2],"nx":[3,19,3],"ny":[1,16,5],"nz":[1,-1,-1]},{"size":2,"px":[3,7],"py":[0,1],"pz":[1,0],"nx":[2,3],"ny":[15,2],"nz":[0,-1]},{"size":2,"px":[0,4],"py":[2,0],"pz":[2,-1],"nx":[9,16],"ny":[5,11],"nz":[1,0]},{"size":2,"px":[14,15],"py":[23,16],"pz":[0,0],"nx":[13,3],"ny":[15,1],"nz":[0,-1]},{"size":2,"px":[4,3],"py":[0,1],"pz":[1,-1],"nx":[3,7],"ny":[0,0],"nz":[1,0]},{"size":2,"px":[7,6],"py":[12,12],"pz":[0,0],"nx":[4,8],"ny":[5,4],"nz":[1,-1]},{"size":5,"px":[4,1,2,4,5],"py":[1,0,0,0,6],"pz":[0,2,1,0,1],"nx":[4,8,7,8,6],"ny":[4,10,11,4,4],"nz":[1,0,0,1,1]},{"size":2,"px":[12,12],"py":[15,8],"pz":[0,-1],"nx":[7,15],"ny":[16,14],"nz":[0,0]},{"size":2,"px":[4,8],"py":[3,6],"pz":[2,1],"nx":[4,6],"ny":[2,8],"nz":[2,-1]},{"size":2,"px":[14,4],"py":[19,23],"pz":[0,-1],"nx":[7,14],"ny":[11,18],"nz":[1,0]},{"size":2,"px":[4,2],"py":[7,4],"pz":[1,2],"nx":[2,22],"ny":[5,19],"nz":[2,-1]},{"size":2,"px":[8,15],"py":[7,17],"pz":[1,0],"nx":[14,4],"ny":[15,5],"nz":[0,2]},{"size":2,"px":[10,11],"py":[9,8],"pz":[1,-1],"nx":[23,5],"ny":[19,4],"nz":[0,2]},{"size":2,"px":[11,1],"py":[7,9],"pz":[0,-1],"nx":[4,4],"ny":[4,5],"nz":[1,1]},{"size":2,"px":[14,7],"py":[6,9],"pz":[0,0],"nx":[4,11],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[5,4],"py":[0,5],"pz":[0,-1],"nx":[2,2],"ny":[0,4],"nz":[1,0]},{"size":2,"px":[10,22],"py":[5,20],"pz":[0,-1],"nx":[3,4],"ny":[1,2],"nz":[2,2]},{"size":3,"px":[23,11,11],"py":[17,9,8],"pz":[0,1,1],"nx":[13,8,8],"ny":[5,3,3],"nz":[0,1,-1]},{"size":2,"px":[18,9],"py":[0,21],"pz":[0,-1],"nx":[10,10],"ny":[2,1],"nz":[1,1]},{"size":5,"px":[11,10,11,11,11],"py":[11,13,10,12,12],"pz":[0,0,0,0,-1],"nx":[11,13,12,3,8],"ny":[5,5,5,1,10],"nz":[0,0,0,2,0]},{"size":2,"px":[7,8],"py":[11,11],"pz":[0,0],"nx":[9,16],"ny":[9,19],"nz":[0,-1]},{"size":2,"px":[9,18],"py":[23,7],"pz":[0,-1],"nx":[21,21],"ny":[7,13],"nz":[0,0]},{"size":2,"px":[8,8],"py":[7,8],"pz":[1,1],"nx":[5,21],"ny":[9,13],"nz":[1,-1]},{"size":2,"px":[17,8],"py":[22,8],"pz":[0,-1],"nx":[4,8],"ny":[5,10],"nz":[2,1]},{"size":5,"px":[2,5,8,8,4],"py":[3,9,13,23,7],"pz":[2,1,0,0,1],"nx":[9,17,18,19,20],"ny":[0,0,0,2,3],"nz":[1,0,0,0,0]},{"size":3,"px":[16,15,2],"py":[3,3,13],"pz":[0,0,-1],"nx":[4,8,4],"ny":[3,6,2],"nz":[2,1,2]},{"size":2,"px":[4,7],"py":[3,7],"pz":[2,1],"nx":[15,1],"ny":[15,0],"nz":[0,-1]},{"size":2,"px":[3,6],"py":[2,3],"pz":[2,1],"nx":[3,18],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[2,4],"py":[2,4],"pz":[2,1],"nx":[3,0],"ny":[5,0],"nz":[1,-1]},{"size":2,"px":[10,0],"py":[10,0],"pz":[0,-1],"nx":[9,4],"ny":[2,0],"nz":[1,2]},{"size":2,"px":[2,0],"py":[8,3],"pz":[1,-1],"nx":[4,8],"ny":[4,14],"nz":[1,0]},{"size":2,"px":[13,18],"py":[14,14],"pz":[0,-1],"nx":[1,1],"ny":[15,13],"nz":[0,0]},{"size":3,"px":[3,2,2],"py":[17,10,15],"pz":[0,1,0],"nx":[13,2,7],"ny":[19,11,0],"nz":[0,-1,-1]},{"size":2,"px":[4,17],"py":[0,2],"pz":[2,0],"nx":[8,5],"ny":[11,3],"nz":[1,-1]},{"size":2,"px":[15,21],"py":[5,4],"pz":[0,-1],"nx":[15,10],"ny":[3,0],"nz":[0,1]},{"size":2,"px":[7,3],"py":[13,8],"pz":[0,-1],"nx":[8,4],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[7,22],"py":[3,4],"pz":[1,-1],"nx":[4,2],"ny":[2,3],"nz":[1,1]},{"size":4,"px":[6,2,6,5],"py":[21,10,22,20],"pz":[0,1,0,0],"nx":[2,3,4,4],"ny":[11,21,23,23],"nz":[1,0,0,-1]},{"size":2,"px":[7,2],"py":[6,8],"pz":[1,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":4,"px":[11,11,5,11],"py":[6,5,2,4],"pz":[1,1,2,1],"nx":[13,7,8,3],"ny":[7,3,5,2],"nz":[0,1,-1,-1]},{"size":2,"px":[3,3],"py":[7,8],"pz":[1,0],"nx":[3,11],"ny":[4,2],"nz":[1,-1]},{"size":3,"px":[16,1,5],"py":[3,3,11],"pz":[0,-1,-1],"nx":[16,4,8],"ny":[2,0,1],"nz":[0,2,1]},{"size":2,"px":[10,0],"py":[8,1],"pz":[0,-1],"nx":[19,18],"ny":[20,23],"nz":[0,0]},{"size":2,"px":[17,4],"py":[10,4],"pz":[0,-1],"nx":[4,14],"ny":[2,9],"nz":[2,0]},{"size":5,"px":[11,12,9,10,11],"py":[2,3,2,2,3],"pz":[0,0,0,0,0],"nx":[6,4,2,2,2],"ny":[18,9,3,2,2],"nz":[0,1,2,2,-1]},{"size":2,"px":[0,1],"py":[6,16],"pz":[1,0],"nx":[8,16],"ny":[5,16],"nz":[0,-1]},{"size":2,"px":[3,3],"py":[2,3],"pz":[2,2],"nx":[8,17],"ny":[4,9],"nz":[1,-1]},{"size":3,"px":[2,5,2],"py":[5,6,4],"pz":[1,-1,-1],"nx":[0,0,0],"ny":[3,5,6],"nz":[2,1,1]},{"size":5,"px":[0,0,0,0,0],"py":[6,15,16,13,14],"pz":[1,0,0,0,0],"nx":[4,5,8,6,8],"ny":[4,16,8,15,4],"nz":[1,0,0,0,-1]},{"size":2,"px":[4,2],"py":[6,3],"pz":[1,2],"nx":[3,5],"ny":[4,16],"nz":[1,-1]},{"size":5,"px":[21,19,21,21,21],"py":[17,23,18,19,20],"pz":[0,0,0,0,0],"nx":[5,2,3,6,6],"ny":[12,5,5,12,12],"nz":[0,1,1,0,-1]},{"size":2,"px":[5,2],"py":[11,1],"pz":[1,-1],"nx":[5,11],"ny":[3,5],"nz":[2,1]},{"size":2,"px":[10,5],"py":[5,3],"pz":[0,1],"nx":[6,15],"ny":[11,5],"nz":[1,-1]},{"size":2,"px":[6,2],"py":[4,2],"pz":[1,-1],"nx":[4,3],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[10,6],"py":[20,6],"pz":[0,-1],"nx":[5,10],"ny":[11,17],"nz":[1,0]},{"size":4,"px":[8,4,7,11],"py":[7,4,5,8],"pz":[1,2,1,0],"nx":[13,10,5,21],"ny":[9,3,5,4],"nz":[0,-1,-1,-1]},{"size":2,"px":[7,13],"py":[10,7],"pz":[0,0],"nx":[10,8],"ny":[9,18],"nz":[0,-1]},{"size":2,"px":[3,3],"py":[1,0],"pz":[2,2],"nx":[8,5],"ny":[4,2],"nz":[1,-1]},{"size":5,"px":[5,2,5,8,4],"py":[8,4,14,23,7],"pz":[1,2,0,0,1],"nx":[18,4,16,17,17],"ny":[1,0,0,1,1],"nz":[0,2,0,0,-1]},{"size":2,"px":[6,2],"py":[2,4],"pz":[1,-1],"nx":[8,8],"ny":[4,3],"nz":[1,1]},{"size":2,"px":[6,1],"py":[8,15],"pz":[0,-1],"nx":[8,3],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[10,1],"py":[7,2],"pz":[1,-1],"nx":[6,6],"ny":[9,4],"nz":[1,1]},{"size":2,"px":[4,1],"py":[6,2],"pz":[1,-1],"nx":[1,10],"ny":[16,12],"nz":[0,0]},{"size":2,"px":[8,4],"py":[7,2],"pz":[1,-1],"nx":[8,9],"ny":[8,10],"nz":[1,1]},{"size":5,"px":[4,8,7,6,6],"py":[0,0,0,1,1],"pz":[1,0,0,0,-1],"nx":[11,5,8,4,10],"ny":[5,3,4,4,5],"nz":[0,1,1,1,0]},{"size":2,"px":[5,6],"py":[8,5],"pz":[0,0],"nx":[6,6],"ny":[8,3],"nz":[0,-1]},{"size":2,"px":[18,5],"py":[19,5],"pz":[0,-1],"nx":[4,21],"ny":[5,19],"nz":[2,0]},{"size":2,"px":[9,5],"py":[13,6],"pz":[0,1],"nx":[2,2],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[10,4],"py":[17,6],"pz":[0,1],"nx":[10,2],"ny":[15,4],"nz":[0,-1]},{"size":3,"px":[13,13,19],"py":[11,12,8],"pz":[0,0,-1],"nx":[12,3,8],"ny":[4,1,4],"nz":[0,2,1]},{"size":3,"px":[11,7,4],"py":[5,2,1],"pz":[0,-1,-1],"nx":[9,2,4],"ny":[11,3,6],"nz":[0,2,1]},{"size":2,"px":[10,7],"py":[15,2],"pz":[0,-1],"nx":[4,4],"ny":[0,1],"nz":[2,2]},{"size":5,"px":[8,9,16,18,18],"py":[0,1,1,1,1],"pz":[1,1,0,0,-1],"nx":[5,5,6,4,4],"ny":[21,20,23,17,18],"nz":[0,0,0,0,0]},{"size":2,"px":[6,7],"py":[1,1],"pz":[1,1],"nx":[20,19],"ny":[2,1],"nz":[0,0]},{"size":2,"px":[2,2],"py":[10,11],"pz":[1,1],"nx":[3,3],"ny":[10,10],"nz":[1,-1]},{"size":2,"px":[9,5],"py":[23,1],"pz":[0,-1],"nx":[4,3],"ny":[10,4],"nz":[1,1]},{"size":2,"px":[1,10],"py":[4,7],"pz":[2,-1],"nx":[4,3],"ny":[23,21],"nz":[0,0]},{"size":2,"px":[10,21],"py":[11,18],"pz":[1,0],"nx":[10,4],"ny":[18,1],"nz":[0,-1]},{"size":2,"px":[11,23],"py":[11,15],"pz":[0,-1],"nx":[11,11],"ny":[7,9],"nz":[1,1]},{"size":2,"px":[10,1],"py":[7,7],"pz":[1,-1],"nx":[15,4],"ny":[14,4],"nz":[0,2]},{"size":2,"px":[1,2],"py":[9,20],"pz":[1,0],"nx":[21,3],"ny":[12,20],"nz":[0,-1]},{"size":2,"px":[7,4],"py":[0,0],"pz":[1,2],"nx":[4,2],"ny":[0,19],"nz":[0,-1]},{"size":2,"px":[2,4],"py":[3,6],"pz":[2,1],"nx":[3,0],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[5,1],"py":[5,0],"pz":[1,-1],"nx":[12,10],"ny":[11,4],"nz":[0,1]},{"size":2,"px":[11,12],"py":[11,14],"pz":[1,-1],"nx":[18,16],"ny":[21,15],"nz":[0,0]},{"size":2,"px":[3,18],"py":[1,5],"pz":[2,-1],"nx":[4,8],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[9,10],"py":[18,7],"pz":[0,-1],"nx":[3,6],"ny":[0,0],"nz":[2,1]},{"size":2,"px":[19,2],"py":[1,4],"pz":[0,-1],"nx":[22,22],"ny":[13,15],"nz":[0,0]},{"size":3,"px":[13,15,20],"py":[14,21,10],"pz":[0,-1,-1],"nx":[15,7,7],"ny":[13,6,8],"nz":[0,1,1]},{"size":2,"px":[9,9],"py":[6,7],"pz":[1,1],"nx":[8,7],"ny":[4,8],"nz":[1,-1]},{"size":2,"px":[0,0],"py":[5,3],"pz":[1,2],"nx":[5,10],"ny":[2,9],"nz":[1,-1]},{"size":2,"px":[14,11],"py":[7,16],"pz":[0,-1],"nx":[1,0],"ny":[17,4],"nz":[0,2]},{"size":2,"px":[14,18],"py":[17,18],"pz":[0,-1],"nx":[8,14],"ny":[10,16],"nz":[1,0]},{"size":2,"px":[6,11],"py":[13,11],"pz":[0,-1],"nx":[8,9],"ny":[12,9],"nz":[0,0]},{"size":2,"px":[8,9],"py":[2,2],"pz":[0,0],"nx":[3,3],"ny":[2,2],"nz":[2,-1]},{"size":3,"px":[21,21,21],"py":[14,16,15],"pz":[0,0,0],"nx":[14,12,0],"ny":[5,12,6],"nz":[0,-1,-1]},{"size":2,"px":[4,21],"py":[6,15],"pz":[1,-1],"nx":[5,1],"ny":[6,5],"nz":[1,1]},{"size":2,"px":[6,3],"py":[2,1],"pz":[1,2],"nx":[8,0],"ny":[4,20],"nz":[1,-1]},{"size":2,"px":[13,2],"py":[9,1],"pz":[0,-1],"nx":[3,5],"ny":[1,2],"nz":[2,1]},{"size":2,"px":[16,1],"py":[5,4],"pz":[0,-1],"nx":[17,8],"ny":[3,2],"nz":[0,1]},{"size":2,"px":[9,2],"py":[7,1],"pz":[1,-1],"nx":[20,20],"ny":[17,16],"nz":[0,0]},{"size":2,"px":[5,7],"py":[3,6],"pz":[2,-1],"nx":[9,9],"ny":[6,5],"nz":[1,1]},{"size":2,"px":[11,17],"py":[4,1],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[15,2],"py":[11,0],"pz":[0,-1],"nx":[5,14],"ny":[1,12],"nz":[2,0]},{"size":2,"px":[22,19],"py":[3,0],"pz":[0,-1],"nx":[9,4],"ny":[6,4],"nz":[1,1]},{"size":2,"px":[1,22],"py":[3,21],"pz":[0,-1],"nx":[0,0],"ny":[1,0],"nz":[2,2]},{"size":2,"px":[11,11],"py":[11,12],"pz":[0,0],"nx":[1,2],"ny":[1,4],"nz":[2,-1]},{"size":2,"px":[18,3],"py":[8,1],"pz":[0,2],"nx":[13,1],"ny":[8,5],"nz":[0,-1]},{"size":2,"px":[13,6],"py":[21,3],"pz":[0,-1],"nx":[11,11],"ny":[6,5],"nz":[1,1]},{"size":2,"px":[15,14],"py":[4,4],"pz":[0,0],"nx":[17,1],"ny":[12,5],"nz":[0,-1]},{"size":2,"px":[11,3],"py":[12,1],"pz":[0,-1],"nx":[1,2],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[3,2],"py":[7,3],"pz":[0,1],"nx":[16,2],"ny":[3,5],"nz":[0,-1]},{"size":2,"px":[10,5],"py":[7,20],"pz":[1,-1],"nx":[9,8],"ny":[4,6],"nz":[1,1]},{"size":2,"px":[19,2],"py":[10,2],"pz":[0,-1],"nx":[9,4],"ny":[3,1],"nz":[1,2]},{"size":2,"px":[14,9],"py":[0,23],"pz":[0,-1],"nx":[4,4],"ny":[3,2],"nz":[2,2]},{"size":2,"px":[6,9],"py":[4,10],"pz":[1,0],"nx":[10,9],"ny":[9,0],"nz":[0,-1]},{"size":4,"px":[6,9,10,8],"py":[20,23,18,23],"pz":[0,0,0,0],"nx":[9,22,1,2],"ny":[21,14,2,5],"nz":[0,-1,-1,-1]},{"size":2,"px":[17,18],"py":[13,6],"pz":[0,-1],"nx":[6,7],"ny":[9,11],"nz":[1,1]},{"size":5,"px":[18,19,20,19,20],"py":[15,19,16,20,17],"pz":[0,0,0,0,0],"nx":[11,22,23,23,23],"ny":[10,22,20,19,19],"nz":[1,0,0,0,-1]},{"size":2,"px":[10,10],"py":[1,0],"pz":[1,1],"nx":[21,11],"ny":[0,4],"nz":[0,-1]},{"size":2,"px":[11,0],"py":[9,3],"pz":[0,-1],"nx":[9,4],"ny":[2,1],"nz":[1,2]},{"size":2,"px":[14,23],"py":[2,18],"pz":[0,-1],"nx":[15,18],"ny":[1,2],"nz":[0,0]},{"size":2,"px":[9,3],"py":[0,0],"pz":[1,-1],"nx":[3,12],"ny":[1,5],"nz":[2,0]},{"size":2,"px":[8,8],"py":[7,8],"pz":[1,1],"nx":[8,8],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[1,0],"py":[1,3],"pz":[2,-1],"nx":[7,19],"ny":[9,15],"nz":[1,0]},{"size":3,"px":[16,6,4],"py":[21,5,4],"pz":[0,-1,-1],"nx":[4,19,8],"ny":[5,21,11],"nz":[2,0,1]},{"size":2,"px":[5,5],"py":[6,6],"pz":[1,-1],"nx":[10,10],"ny":[10,12],"nz":[0,0]},{"size":2,"px":[6,11],"py":[2,5],"pz":[1,0],"nx":[3,4],"ny":[4,7],"nz":[1,-1]},{"size":3,"px":[8,6,2],"py":[4,10,2],"pz":[1,1,2],"nx":[2,18,5],"ny":[0,11,5],"nz":[0,-1,-1]},{"size":2,"px":[11,7],"py":[9,7],"pz":[0,-1],"nx":[12,3],"ny":[9,5],"nz":[0,1]},{"size":2,"px":[14,13],"py":[20,20],"pz":[0,0],"nx":[13,3],"ny":[21,5],"nz":[0,-1]},{"size":2,"px":[13,7],"py":[5,3],"pz":[0,-1],"nx":[3,4],"ny":[1,4],"nz":[2,1]},{"size":2,"px":[6,2],"py":[21,5],"pz":[0,-1],"nx":[2,3],"ny":[5,10],"nz":[2,1]},{"size":2,"px":[23,5],"py":[6,0],"pz":[0,2],"nx":[21,4],"ny":[6,1],"nz":[0,-1]},{"size":2,"px":[9,9],"py":[7,6],"pz":[1,1],"nx":[8,2],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[22,11],"py":[20,9],"pz":[0,1],"nx":[8,8],"ny":[10,10],"nz":[1,-1]},{"size":2,"px":[8,16],"py":[21,12],"pz":[0,-1],"nx":[2,7],"ny":[5,23],"nz":[2,0]},{"size":5,"px":[0,1,1,1,1],"py":[3,1,9,4,7],"pz":[2,2,1,1,1],"nx":[11,22,22,23,23],"ny":[10,21,22,19,20],"nz":[1,0,0,0,-1]},{"size":2,"px":[17,5],"py":[12,4],"pz":[0,-1],"nx":[8,8],"ny":[4,5],"nz":[1,1]},{"size":2,"px":[16,4],"py":[7,10],"pz":[0,-1],"nx":[9,15],"ny":[4,6],"nz":[1,0]},{"size":2,"px":[3,6],"py":[3,5],"pz":[2,1],"nx":[11,12],"ny":[11,23],"nz":[0,-1]},{"size":2,"px":[5,2],"py":[14,7],"pz":[0,1],"nx":[4,17],"ny":[18,16],"nz":[0,-1]},{"size":3,"px":[10,1,1],"py":[12,5,4],"pz":[0,-1,-1],"nx":[7,11,5],"ny":[1,2,1],"nz":[1,0,1]},{"size":2,"px":[7,6],"py":[3,9],"pz":[0,-1],"nx":[2,2],"ny":[2,3],"nz":[2,2]},{"size":2,"px":[13,6],"py":[22,9],"pz":[0,-1],"nx":[8,4],"ny":[4,3],"nz":[1,2]},{"size":5,"px":[12,9,10,11,11],"py":[0,0,0,0,0],"pz":[0,0,0,0,-1],"nx":[16,5,10,4,8],"ny":[10,3,6,4,4],"nz":[0,1,0,1,1]},{"size":2,"px":[18,19],"py":[23,20],"pz":[0,0],"nx":[8,5],"ny":[11,3],"nz":[1,-1]},{"size":2,"px":[8,3],"py":[7,2],"pz":[1,2],"nx":[8,4],"ny":[4,3],"nz":[1,-1]},{"size":5,"px":[8,14,8,7,4],"py":[6,12,8,6,3],"pz":[1,0,1,1,2],"nx":[2,6,6,7,7],"ny":[0,1,2,0,0],"nz":[2,0,0,0,-1]},{"size":3,"px":[1,2,3],"py":[15,18,21],"pz":[0,0,0],"nx":[19,5,18],"ny":[23,5,8],"nz":[0,-1,-1]},{"size":2,"px":[6,2],"py":[6,1],"pz":[1,-1],"nx":[0,0],"ny":[12,4],"nz":[0,1]},{"size":2,"px":[3,5],"py":[5,11],"pz":[2,1],"nx":[14,5],"ny":[19,5],"nz":[0,-1]},{"size":2,"px":[10,4],"py":[4,4],"pz":[1,-1],"nx":[11,5],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[18,4],"py":[6,4],"pz":[0,-1],"nx":[4,8],"ny":[5,4],"nz":[1,1]},{"size":2,"px":[6,12],"py":[2,4],"pz":[1,0],"nx":[8,8],"ny":[3,4],"nz":[1,-1]},{"size":2,"px":[1,0],"py":[1,1],"pz":[1,2],"nx":[7,2],"ny":[4,7],"nz":[0,-1]},{"size":2,"px":[8,0],"py":[20,0],"pz":[0,-1],"nx":[4,5],"ny":[10,11],"nz":[1,1]},{"size":2,"px":[6,14],"py":[5,2],"pz":[1,-1],"nx":[0,0],"ny":[0,2],"nz":[1,0]},{"size":2,"px":[5,15],"py":[4,7],"pz":[1,-1],"nx":[4,7],"ny":[1,2],"nz":[2,1]},{"size":2,"px":[7,5],"py":[2,1],"pz":[0,1],"nx":[3,1],"ny":[4,1],"nz":[1,-1]},{"size":2,"px":[8,9],"py":[4,2],"pz":[0,-1],"nx":[11,9],"ny":[1,3],"nz":[0,0]},{"size":2,"px":[6,3],"py":[2,4],"pz":[1,-1],"nx":[4,8],"ny":[4,4],"nz":[1,1]},{"size":2,"px":[3,7],"py":[3,7],"pz":[2,1],"nx":[6,8],"ny":[14,4],"nz":[0,-1]},{"size":2,"px":[3,0],"py":[21,3],"pz":[0,2],"nx":[20,8],"ny":[10,4],"nz":[0,-1]},{"size":2,"px":[6,3],"py":[5,8],"pz":[0,-1],"nx":[4,3],"ny":[4,2],"nz":[0,1]},{"size":2,"px":[3,6],"py":[7,13],"pz":[1,0],"nx":[3,2],"ny":[4,3],"nz":[1,-1]},{"size":2,"px":[16,10],"py":[9,7],"pz":[0,1],"nx":[7,9],"ny":[3,10],"nz":[1,-1]},{"size":2,"px":[13,10],"py":[6,7],"pz":[0,-1],"nx":[8,17],"ny":[4,12],"nz":[1,0]},{"size":2,"px":[5,10],"py":[4,10],"pz":[2,1],"nx":[5,4],"ny":[9,2],"nz":[1,-1]},{"size":4,"px":[15,3,5,0],"py":[12,4,2,3],"pz":[0,-1,-1,-1],"nx":[13,7,5,7],"ny":[12,6,0,7],"nz":[0,1,2,1]},{"size":4,"px":[2,3,16,17],"py":[3,4,6,6],"pz":[2,1,0,0],"nx":[16,16,8,16],"ny":[8,3,10,13],"nz":[0,-1,-1,-1]},{"size":2,"px":[16,8],"py":[1,4],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[9,14],"py":[6,2],"pz":[1,-1],"nx":[8,8],"ny":[6,4],"nz":[1,1]},{"size":2,"px":[8,4],"py":[10,4],"pz":[1,2],"nx":[10,0],"ny":[5,7],"nz":[1,-1]},{"size":2,"px":[9,10],"py":[4,4],"pz":[0,0],"nx":[9,7],"ny":[3,5],"nz":[0,-1]},{"size":5,"px":[11,10,13,6,12],"py":[2,2,2,1,2],"pz":[0,0,0,1,0],"nx":[4,18,18,13,13],"ny":[2,18,19,7,7],"nz":[2,0,0,0,-1]},{"size":4,"px":[13,13,13,2],"py":[13,12,11,3],"pz":[0,0,0,-1],"nx":[4,6,8,11],"ny":[2,2,4,4],"nz":[2,1,1,0]},{"size":2,"px":[4,7],"py":[6,13],"pz":[1,0],"nx":[8,10],"ny":[4,22],"nz":[1,-1]},{"size":2,"px":[0,7],"py":[4,17],"pz":[1,-1],"nx":[0,1],"ny":[5,21],"nz":[2,0]},{"size":2,"px":[12,13],"py":[22,22],"pz":[0,0],"nx":[2,2],"ny":[13,13],"nz":[0,-1]},{"size":3,"px":[4,4,3],"py":[22,23,19],"pz":[0,0,0],"nx":[8,12,3],"ny":[22,15,2],"nz":[0,-1,-1]},{"size":2,"px":[10,12],"py":[3,13],"pz":[0,-1],"nx":[15,2],"ny":[10,2],"nz":[0,2]},{"size":2,"px":[1,1],"py":[3,3],"pz":[2,-1],"nx":[8,4],"ny":[0,0],"nz":[1,2]},{"size":2,"px":[6,12],"py":[6,18],"pz":[1,0],"nx":[12,19],"ny":[17,16],"nz":[0,-1]},{"size":2,"px":[10,5],"py":[2,1],"pz":[0,1],"nx":[5,4],"ny":[4,17],"nz":[0,-1]},{"size":3,"px":[3,12,11],"py":[5,23,23],"pz":[2,0,0],"nx":[12,4,4],"ny":[21,17,1],"nz":[0,-1,-1]},{"size":2,"px":[12,0],"py":[21,5],"pz":[0,-1],"nx":[0,0],"ny":[7,9],"nz":[1,1]},{"size":2,"px":[17,17],"py":[12,11],"pz":[0,0],"nx":[8,11],"ny":[4,11],"nz":[1,-1]},{"size":2,"px":[11,0],"py":[22,1],"pz":[0,-1],"nx":[4,6],"ny":[1,0],"nz":[1,1]},{"size":2,"px":[11,11],"py":[9,5],"pz":[1,1],"nx":[23,11],"ny":[23,20],"nz":[0,-1]},{"size":5,"px":[4,12,11,9,8],"py":[0,1,1,0,1],"pz":[1,0,0,0,0],"nx":[4,17,8,7,7],"ny":[2,13,4,4,4],"nz":[2,0,1,1,-1]},{"size":2,"px":[11,13],"py":[12,12],"pz":[0,-1],"nx":[1,1],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[23,4],"py":[23,2],"pz":[0,-1],"nx":[5,2],"ny":[23,6],"nz":[0,1]},{"size":3,"px":[8,16,0],"py":[5,15,6],"pz":[1,-1,-1],"nx":[23,23,11],"ny":[18,17,8],"nz":[0,0,1]},{"size":2,"px":[1,16],"py":[4,15],"pz":[2,-1],"nx":[2,2],"ny":[3,2],"nz":[2,2]},{"size":2,"px":[3,8],"py":[7,9],"pz":[1,-1],"nx":[4,2],"ny":[10,5],"nz":[1,2]},{"size":3,"px":[22,1,9],"py":[23,2,3],"pz":[0,-1,-1],"nx":[2,2,5],"ny":[5,4,19],"nz":[2,2,0]},{"size":2,"px":[2,20],"py":[5,15],"pz":[1,-1],"nx":[2,1],"ny":[1,2],"nz":[2,2]},{"size":2,"px":[4,8],"py":[1,19],"pz":[1,-1],"nx":[2,2],"ny":[5,4],"nz":[2,2]},{"size":2,"px":[9,10],"py":[21,0],"pz":[0,-1],"nx":[6,5],"ny":[1,1],"nz":[1,1]},{"size":2,"px":[4,8],"py":[3,6],"pz":[2,1],"nx":[9,2],"ny":[4,1],"nz":[1,-1]},{"size":3,"px":[17,3,10],"py":[8,0,2],"pz":[0,2,0],"nx":[13,2,6],"ny":[15,5,1],"nz":[0,-1,-1]},{"size":2,"px":[9,6],"py":[20,21],"pz":[0,-1],"nx":[4,2],"ny":[10,5],"nz":[1,2]},{"size":2,"px":[3,7],"py":[0,1],"pz":[2,1],"nx":[7,20],"ny":[1,19],"nz":[0,-1]},{"size":2,"px":[4,5],"py":[0,1],"pz":[1,0],"nx":[3,2],"ny":[4,2],"nz":[0,-1]},{"size":2,"px":[2,7],"py":[4,19],"pz":[2,0],"nx":[5,2],"ny":[10,2],"nz":[1,-1]},{"size":5,"px":[3,3,4,7,7],"py":[1,0,0,0,1],"pz":[1,1,1,0,0],"nx":[5,4,10,8,8],"ny":[3,3,5,4,4],"nz":[1,1,0,1,-1]},{"size":2,"px":[1,5],"py":[0,3],"pz":[1,-1],"nx":[1,0],"ny":[0,1],"nz":[0,1]},{"size":2,"px":[10,0],"py":[5,5],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[0,9],"py":[0,4],"pz":[2,-1],"nx":[13,10],"ny":[0,0],"nz":[0,0]},{"size":2,"px":[13,4],"py":[14,5],"pz":[0,-1],"nx":[4,2],"ny":[0,0],"nz":[0,1]},{"size":2,"px":[17,4],"py":[13,3],"pz":[0,-1],"nx":[4,2],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[1,0],"py":[6,2],"pz":[1,-1],"nx":[1,6],"ny":[2,12],"nz":[2,0]},{"size":2,"px":[12,4],"py":[6,0],"pz":[0,-1],"nx":[3,3],"ny":[8,9],"nz":[1,1]},{"size":2,"px":[1,5],"py":[1,5],"pz":[1,-1],"nx":[17,17],"ny":[13,7],"nz":[0,0]},{"size":2,"px":[7,3],"py":[12,6],"pz":[0,1],"nx":[3,4],"ny":[4,11],"nz":[1,-1]},{"size":2,"px":[6,17],"py":[2,8],"pz":[1,0],"nx":[3,3],"ny":[1,2],"nz":[1,-1]},{"size":3,"px":[13,6,6],"py":[22,11,10],"pz":[0,1,1],"nx":[13,12,11],"ny":[20,20,20],"nz":[0,0,0]},{"size":2,"px":[4,2],"py":[6,3],"pz":[1,2],"nx":[3,12],"ny":[4,20],"nz":[1,-1]},{"size":2,"px":[5,2],"py":[1,1],"pz":[1,-1],"nx":[13,6],"ny":[0,0],"nz":[0,1]},{"size":2,"px":[2,8],"py":[3,9],"pz":[2,0],"nx":[8,16],"ny":[5,17],"nz":[0,-1]},{"size":2,"px":[16,15],"py":[1,1],"pz":[0,0],"nx":[7,11],"ny":[8,0],"nz":[1,-1]},{"size":2,"px":[11,18],"py":[21,23],"pz":[0,-1],"nx":[1,1],"ny":[4,3],"nz":[1,2]},{"size":2,"px":[1,5],"py":[0,2],"pz":[1,-1],"nx":[15,11],"ny":[8,7],"nz":[0,0]},{"size":2,"px":[5,4],"py":[7,8],"pz":[1,-1],"nx":[9,10],"ny":[13,11],"nz":[0,0]},{"size":2,"px":[7,4],"py":[10,4],"pz":[1,2],"nx":[22,4],"ny":[0,2],"nz":[0,-1]},{"size":2,"px":[11,3],"py":[3,1],"pz":[0,2],"nx":[8,0],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[5,21],"py":[11,22],"pz":[0,-1],"nx":[10,11],"ny":[11,9],"nz":[0,0]},{"size":2,"px":[5,5],"py":[0,1],"pz":[2,2],"nx":[2,21],"ny":[6,14],"nz":[0,-1]},{"size":3,"px":[10,10,1],"py":[11,0,5],"pz":[0,-1,-1],"nx":[6,12,5],"ny":[2,5,2],"nz":[1,0,1]},{"size":2,"px":[9,10],"py":[5,6],"pz":[0,0],"nx":[12,19],"ny":[23,5],"nz":[0,-1]},{"size":2,"px":[11,5],"py":[9,6],"pz":[0,1],"nx":[21,0],"ny":[23,0],"nz":[0,-1]},{"size":2,"px":[13,12],"py":[19,15],"pz":[0,0],"nx":[13,0],"ny":[17,0],"nz":[0,-1]},{"size":2,"px":[14,0],"py":[17,3],"pz":[0,-1],"nx":[7,16],"ny":[8,19],"nz":[1,0]},{"size":2,"px":[3,6],"py":[2,4],"pz":[2,1],"nx":[8,1],"ny":[4,4],"nz":[1,-1]},{"size":2,"px":[13,10],"py":[23,20],"pz":[0,-1],"nx":[4,7],"ny":[5,10],"nz":[2,1]},{"size":2,"px":[16,9],"py":[22,5],"pz":[0,-1],"nx":[4,2],"ny":[10,3],"nz":[1,2]},{"size":4,"px":[3,1,1,5],"py":[4,2,1,2],"pz":[0,2,2,1],"nx":[13,5,8,0],"ny":[22,2,9,2],"nz":[0,-1,-1,-1]},{"size":2,"px":[9,9],"py":[0,0],"pz":[1,-1],"nx":[19,20],"ny":[1,2],"nz":[0,0]},{"size":2,"px":[7,22],"py":[6,8],"pz":[1,0],"nx":[4,4],"ny":[2,4],"nz":[2,-1]},{"size":2,"px":[3,6],"py":[4,4],"pz":[2,1],"nx":[10,20],"ny":[10,6],"nz":[0,-1]},{"size":2,"px":[6,12],"py":[6,15],"pz":[1,-1],"nx":[0,0],"ny":[2,5],"nz":[2,1]},{"size":2,"px":[2,7],"py":[4,10],"pz":[2,-1],"nx":[3,6],"ny":[4,8],"nz":[2,1]},{"size":3,"px":[11,11,4],"py":[0,5,7],"pz":[1,-1,-1],"nx":[6,12,12],"ny":[1,1,2],"nz":[1,0,0]},{"size":2,"px":[11,17],"py":[4,18],"pz":[0,-1],"nx":[8,2],"ny":[10,2],"nz":[0,2]},{"size":2,"px":[17,17],"py":[10,18],"pz":[0,-1],"nx":[8,8],"ny":[2,3],"nz":[1,1]},{"size":2,"px":[9,9],"py":[7,7],"pz":[1,-1],"nx":[7,4],"ny":[6,3],"nz":[1,2]},{"size":2,"px":[18,21],"py":[0,0],"pz":[0,-1],"nx":[11,6],"ny":[5,3],"nz":[0,1]},{"size":2,"px":[5,2],"py":[8,4],"pz":[0,2],"nx":[5,8],"ny":[9,16],"nz":[0,-1]},{"size":2,"px":[12,2],"py":[5,4],"pz":[0,-1],"nx":[4,15],"ny":[4,8],"nz":[1,0]},{"size":2,"px":[1,1],"py":[4,6],"pz":[1,1],"nx":[11,3],"ny":[7,9],"nz":[0,-1]},{"size":2,"px":[2,1],"py":[3,3],"pz":[2,2],"nx":[2,2],"ny":[15,16],"nz":[0,0]},{"size":2,"px":[17,18],"py":[5,5],"pz":[0,0],"nx":[9,21],"ny":[2,10],"nz":[1,-1]},{"size":2,"px":[6,3],"py":[14,7],"pz":[0,1],"nx":[3,4],"ny":[4,5],"nz":[1,-1]},{"size":2,"px":[0,3],"py":[3,1],"pz":[1,-1],"nx":[19,10],"ny":[12,4],"nz":[0,1]},{"size":2,"px":[6,16],"py":[3,8],"pz":[1,0],"nx":[8,10],"ny":[20,4],"nz":[0,-1]},{"size":3,"px":[5,5,2],"py":[21,8,4],"pz":[0,1,2],"nx":[10,6,3],"ny":[15,2,1],"nz":[0,-1,-1]},{"size":2,"px":[11,10],"py":[10,12],"pz":[0,0],"nx":[11,11],"ny":[2,1],"nz":[1,-1]},{"size":2,"px":[10,10],"py":[3,2],"pz":[1,1],"nx":[8,11],"ny":[3,5],"nz":[1,-1]},{"size":2,"px":[13,3],"py":[5,8],"pz":[0,-1],"nx":[12,3],"ny":[3,1],"nz":[0,2]},{"size":2,"px":[13,7],"py":[2,1],"pz":[0,1],"nx":[5,5],"ny":[1,1],"nz":[0,-1]},{"size":2,"px":[11,10],"py":[10,8],"pz":[0,-1],"nx":[14,16],"ny":[10,15],"nz":[0,0]},{"size":2,"px":[2,10],"py":[7,8],"pz":[1,-1],"nx":[2,6],"ny":[5,6],"nz":[2,1]},{"size":2,"px":[10,10],"py":[1,8],"pz":[0,-1],"nx":[2,2],"ny":[3,2],"nz":[2,2]},{"size":2,"px":[4,0],"py":[5,2],"pz":[1,-1],"nx":[1,2],"ny":[2,3],"nz":[2,1]},{"size":2,"px":[1,12],"py":[1,9],"pz":[2,-1],"nx":[16,17],"ny":[3,3],"nz":[0,0]},{"size":2,"px":[12,6],"py":[5,8],"pz":[0,-1],"nx":[3,4],"ny":[7,4],"nz":[1,1]},{"size":2,"px":[14,3],"py":[11,5],"pz":[0,-1],"nx":[11,4],"ny":[0,0],"nz":[0,1]},{"size":2,"px":[6,10],"py":[6,6],"pz":[1,-1],"nx":[0,0],"ny":[1,0],"nz":[2,2]},{"size":2,"px":[3,7],"py":[0,7],"pz":[1,-1],"nx":[15,13],"ny":[8,4],"nz":[0,0]},{"size":2,"px":[18,1],"py":[15,0],"pz":[0,-1],"nx":[18,18],"ny":[18,17],"nz":[0,0]},{"size":2,"px":[5,2],"py":[4,4],"pz":[0,-1],"nx":[4,18],"ny":[4,15],"nz":[1,0]},{"size":3,"px":[3,14,13],"py":[2,7,8],"pz":[2,0,0],"nx":[10,0,2],"ny":[8,3,2],"nz":[0,-1,-1]},{"size":2,"px":[16,0],"py":[14,3],"pz":[0,-1],"nx":[18,3],"ny":[12,5],"nz":[0,2]},{"size":2,"px":[5,3],"py":[8,3],"pz":[1,2],"nx":[13,4],"ny":[10,4],"nz":[0,-1]},{"size":2,"px":[3,6],"py":[1,2],"pz":[2,1],"nx":[8,1],"ny":[4,20],"nz":[1,-1]},{"size":2,"px":[10,10],"py":[8,3],"pz":[1,-1],"nx":[12,7],"ny":[2,1],"nz":[0,1]},{"size":2,"px":[17,3],"py":[9,2],"pz":[0,2],"nx":[7,6],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[12,1],"py":[2,1],"pz":[0,-1],"nx":[4,4],"ny":[2,3],"nz":[2,2]},{"size":2,"px":[22,5],"py":[15,3],"pz":[0,2],"nx":[16,17],"ny":[14,2],"nz":[0,-1]},{"size":2,"px":[8,11],"py":[19,13],"pz":[0,-1],"nx":[0,0],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[8,11],"py":[8,1],"pz":[1,-1],"nx":[3,3],"ny":[2,5],"nz":[1,2]},{"size":3,"px":[3,8,0],"py":[7,7,5],"pz":[1,-1,-1],"nx":[11,5,1],"ny":[11,7,5],"nz":[0,1,1]},{"size":2,"px":[12,6],"py":[12,6],"pz":[0,1],"nx":[9,0],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[16,12],"py":[7,1],"pz":[0,-1],"nx":[16,7],"ny":[6,4],"nz":[0,1]},{"size":2,"px":[13,5],"py":[14,0],"pz":[0,-1],"nx":[13,10],"ny":[0,0],"nz":[0,0]},{"size":5,"px":[11,12,13,12,7],"py":[0,1,0,0,0],"pz":[0,0,0,0,1],"nx":[13,16,14,4,4],"ny":[18,23,18,5,5],"nz":[0,0,0,2,-1]},{"size":2,"px":[14,5],"py":[12,4],"pz":[0,-1],"nx":[7,7],"ny":[8,2],"nz":[1,1]},{"size":2,"px":[19,3],"py":[2,5],"pz":[0,-1],"nx":[11,23],"ny":[7,13],"nz":[1,0]},{"size":2,"px":[0,0],"py":[19,20],"pz":[0,0],"nx":[9,4],"ny":[5,2],"nz":[0,-1]},{"size":2,"px":[15,4],"py":[12,3],"pz":[0,2],"nx":[9,5],"ny":[4,5],"nz":[1,-1]},{"size":4,"px":[8,0,1,21],"py":[6,0,7,16],"pz":[1,-1,-1,-1],"nx":[11,6,11,5],"ny":[8,6,4,3],"nz":[1,1,1,2]},{"size":2,"px":[11,11],"py":[7,5],"pz":[0,-1],"nx":[9,10],"ny":[6,7],"nz":[0,0]},{"size":2,"px":[2,4],"py":[1,2],"pz":[2,1],"nx":[16,6],"ny":[0,1],"nz":[0,-1]},{"size":2,"px":[0,0],"py":[5,3],"pz":[1,2],"nx":[1,21],"ny":[23,8],"nz":[0,-1]},{"size":2,"px":[10,0],"py":[7,0],"pz":[0,-1],"nx":[4,13],"ny":[4,10],"nz":[1,0]},{"size":2,"px":[11,4],"py":[0,4],"pz":[1,-1],"nx":[4,2],"ny":[16,8],"nz":[0,1]},{"size":2,"px":[5,3],"py":[12,6],"pz":[0,1],"nx":[3,3],"ny":[4,2],"nz":[1,-1]},{"size":2,"px":[10,0],"py":[19,11],"pz":[0,-1],"nx":[9,5],"ny":[21,9],"nz":[0,1]},{"size":2,"px":[0,0],"py":[17,9],"pz":[0,1],"nx":[0,5],"ny":[0,9],"nz":[2,-1]},{"size":2,"px":[4,5],"py":[2,4],"pz":[0,-1],"nx":[4,4],"ny":[5,6],"nz":[1,1]},{"size":2,"px":[8,4],"py":[1,0],"pz":[1,2],"nx":[4,3],"ny":[3,6],"nz":[0,-1]},{"size":2,"px":[11,0],"py":[7,2],"pz":[1,-1],"nx":[5,5],"ny":[1,0],"nz":[2,2]},{"size":2,"px":[13,0],"py":[17,2],"pz":[0,-1],"nx":[3,6],"ny":[5,8],"nz":[2,1]},{"size":2,"px":[2,1],"py":[0,5],"pz":[2,-1],"nx":[4,9],"ny":[2,7],"nz":[2,1]},{"size":2,"px":[12,5],"py":[13,8],"pz":[0,-1],"nx":[23,11],"ny":[13,7],"nz":[0,1]},{"size":2,"px":[0,0],"py":[0,2],"pz":[1,0],"nx":[3,6],"ny":[11,18],"nz":[0,-1]},{"size":2,"px":[4,3],"py":[6,5],"pz":[0,-1],"nx":[1,1],"ny":[1,3],"nz":[2,1]},{"size":4,"px":[3,6,3,6],"py":[3,6,2,5],"pz":[2,1,2,1],"nx":[0,4,1,1],"ny":[0,22,17,0],"nz":[0,-1,-1,-1]},{"size":2,"px":[8,4],"py":[6,3],"pz":[1,2],"nx":[9,15],"ny":[4,8],"nz":[1,-1]},{"size":2,"px":[8,18],"py":[7,8],"pz":[1,0],"nx":[8,5],"ny":[4,0],"nz":[1,-1]},{"size":2,"px":[0,0],"py":[4,5],"pz":[1,-1],"nx":[5,6],"ny":[0,0],"nz":[1,1]},{"size":2,"px":[13,18],"py":[23,19],"pz":[0,0],"nx":[7,13],"ny":[10,20],"nz":[1,-1]},{"size":2,"px":[10,6],"py":[2,0],"pz":[0,1],"nx":[4,1],"ny":[5,1],"nz":[1,-1]},{"size":2,"px":[1,1],"py":[5,4],"pz":[2,2],"nx":[0,20],"ny":[4,4],"nz":[2,-1]},{"size":2,"px":[5,5],"py":[1,0],"pz":[2,2],"nx":[12,6],"ny":[18,11],"nz":[0,-1]},{"size":5,"px":[2,1,3,1,5],"py":[3,3,7,4,9],"pz":[2,2,1,2,1],"nx":[9,3,8,16,10],"ny":[5,3,10,6,7],"nz":[1,-1,-1,-1,-1]},{"size":2,"px":[4,1],"py":[12,3],"pz":[0,-1],"nx":[10,1],"ny":[11,2],"nz":[0,2]},{"size":2,"px":[19,0],"py":[10,7],"pz":[0,-1],"nx":[14,7],"ny":[6,3],"nz":[0,1]},{"size":2,"px":[7,4],"py":[2,1],"pz":[1,2],"nx":[6,0],"ny":[2,18],"nz":[0,-1]},{"size":2,"px":[14,8],"py":[3,0],"pz":[0,1],"nx":[17,1],"ny":[1,4],"nz":[0,-1]},{"size":2,"px":[18,19],"py":[1,17],"pz":[0,-1],"nx":[5,11],"ny":[2,5],"nz":[2,1]},{"size":5,"px":[12,12,12,6,12],"py":[10,11,12,6,9],"pz":[0,0,0,1,0],"nx":[13,3,12,6,6],"ny":[4,1,4,2,2],"nz":[0,2,0,1,-1]},{"size":2,"px":[11,10],"py":[3,3],"pz":[0,0],"nx":[4,9],"ny":[4,17],"nz":[1,-1]},{"size":2,"px":[11,0],"py":[13,5],"pz":[0,2],"nx":[8,18],"ny":[15,15],"nz":[0,-1]},{"size":2,"px":[3,4],"py":[6,5],"pz":[1,1],"nx":[0,0],"ny":[9,4],"nz":[1,-1]},{"size":2,"px":[0,0],"py":[1,0],"pz":[2,2],"nx":[2,15],"ny":[2,1],"nz":[2,-1]},{"size":3,"px":[2,4,2],"py":[4,9,5],"pz":[2,1,2],"nx":[2,5,14],"ny":[0,1,4],"nz":[0,-1,-1]},{"size":2,"px":[11,12],"py":[20,20],"pz":[0,0],"nx":[6,10],"ny":[9,19],"nz":[1,-1]},{"size":2,"px":[7,0],"py":[16,8],"pz":[0,-1],"nx":[2,3],"ny":[2,4],"nz":[2,1]},{"size":5,"px":[16,17,15,16,15],"py":[1,1,1,0,0],"pz":[0,0,0,0,0],"nx":[8,8,4,12,12],"ny":[8,7,2,23,23],"nz":[1,1,2,0,-1]},{"size":2,"px":[2,4],"py":[6,12],"pz":[1,-1],"nx":[8,13],"ny":[1,1],"nz":[1,0]},{"size":2,"px":[9,2],"py":[3,2],"pz":[0,-1],"nx":[3,4],"ny":[6,5],"nz":[1,1]},{"size":2,"px":[10,8],"py":[6,1],"pz":[1,-1],"nx":[11,8],"ny":[2,2],"nz":[0,0]},{"size":2,"px":[9,3],"py":[7,0],"pz":[1,-1],"nx":[19,19],"ny":[18,16],"nz":[0,0]},{"size":2,"px":[3,2],"py":[1,1],"pz":[2,2],"nx":[22,11],"ny":[4,0],"nz":[0,-1]},{"size":2,"px":[10,10],"py":[9,8],"pz":[1,1],"nx":[4,4],"ny":[10,2],"nz":[1,-1]},{"size":2,"px":[0,1],"py":[0,5],"pz":[0,-1],"nx":[10,8],"ny":[2,2],"nz":[0,0]},{"size":2,"px":[3,3],"py":[8,7],"pz":[1,1],"nx":[8,2],"ny":[8,3],"nz":[0,-1]},{"size":2,"px":[13,5],"py":[21,3],"pz":[0,-1],"nx":[13,3],"ny":[20,5],"nz":[0,2]},{"size":2,"px":[12,5],"py":[11,2],"pz":[0,-1],"nx":[1,0],"ny":[19,9],"nz":[0,1]},{"size":2,"px":[7,10],"py":[9,10],"pz":[1,1],"nx":[8,4],"ny":[10,2],"nz":[1,-1]},{"size":2,"px":[0,0],"py":[5,9],"pz":[2,1],"nx":[2,11],"ny":[9,19],"nz":[1,-1]},{"size":2,"px":[3,5],"py":[1,2],"pz":[2,1],"nx":[8,23],"ny":[4,9],"nz":[1,-1]},{"size":2,"px":[3,4],"py":[2,4],"pz":[2,1],"nx":[5,9],"ny":[2,5],"nz":[2,-1]},{"size":2,"px":[11,11],"py":[2,3],"pz":[1,1],"nx":[19,9],"ny":[6,5],"nz":[0,-1]},{"size":2,"px":[9,4],"py":[5,10],"pz":[1,-1],"nx":[10,22],"ny":[0,16],"nz":[1,0]},{"size":3,"px":[19,9,19],"py":[3,1,2],"pz":[0,1,0],"nx":[6,3,6],"ny":[10,3,0],"nz":[1,-1,-1]},{"size":2,"px":[8,3],"py":[10,3],"pz":[1,2],"nx":[23,14],"ny":[3,18],"nz":[0,-1]},{"size":2,"px":[11,11],"py":[19,0],"pz":[0,-1],"nx":[4,16],"ny":[4,11],"nz":[1,0]},{"size":2,"px":[22,23],"py":[3,22],"pz":[0,-1],"nx":[9,3],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[7,2],"py":[12,4],"pz":[0,-1],"nx":[8,4],"ny":[10,5],"nz":[0,1]},{"size":2,"px":[12,13],"py":[5,13],"pz":[0,-1],"nx":[11,3],"ny":[2,0],"nz":[0,2]},{"size":2,"px":[3,17],"py":[0,16],"pz":[1,-1],"nx":[12,12],"ny":[5,6],"nz":[0,0]},{"size":2,"px":[4,3],"py":[1,0],"pz":[2,2],"nx":[4,3],"ny":[0,3],"nz":[0,-1]},{"size":2,"px":[10,3],"py":[12,0],"pz":[0,-1],"nx":[12,12],"ny":[13,12],"nz":[0,0]},{"size":2,"px":[13,4],"py":[11,14],"pz":[0,-1],"nx":[0,0],"ny":[4,6],"nz":[1,0]},{"size":2,"px":[8,7],"py":[7,8],"pz":[1,1],"nx":[3,0],"ny":[5,21],"nz":[2,-1]},{"size":2,"px":[1,3],"py":[4,14],"pz":[2,0],"nx":[8,8],"ny":[7,7],"nz":[1,-1]},{"size":2,"px":[13,11],"py":[20,7],"pz":[0,-1],"nx":[21,21],"ny":[20,18],"nz":[0,0]},{"size":2,"px":[2,1],"py":[11,0],"pz":[0,-1],"nx":[2,2],"ny":[15,14],"nz":[0,0]},{"size":2,"px":[10,1],"py":[8,0],"pz":[1,-1],"nx":[8,4],"ny":[7,4],"nz":[1,2]},{"size":2,"px":[17,6],"py":[13,1],"pz":[0,-1],"nx":[4,8],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[7,15],"py":[1,3],"pz":[1,0],"nx":[15,5],"ny":[1,8],"nz":[0,-1]},{"size":2,"px":[16,1],"py":[20,10],"pz":[0,-1],"nx":[6,8],"ny":[11,10],"nz":[1,1]},{"size":2,"px":[7,14],"py":[0,0],"pz":[1,0],"nx":[7,8],"ny":[7,3],"nz":[1,-1]},{"size":2,"px":[12,5],"py":[17,4],"pz":[0,-1],"nx":[12,5],"ny":[16,10],"nz":[0,1]},{"size":2,"px":[13,3],"py":[15,0],"pz":[0,-1],"nx":[12,7],"ny":[17,8],"nz":[0,1]},{"size":2,"px":[7,1],"py":[14,1],"pz":[0,-1],"nx":[4,6],"ny":[6,12],"nz":[1,0]},{"size":2,"px":[8,7],"py":[0,0],"pz":[0,0],"nx":[6,20],"ny":[5,5],"nz":[0,-1]},{"size":2,"px":[10,2],"py":[22,5],"pz":[0,-1],"nx":[4,8],"ny":[4,9],"nz":[2,1]},{"size":4,"px":[8,2,2,9],"py":[6,5,3,11],"pz":[1,-1,-1,-1],"nx":[2,7,4,3],"ny":[2,1,0,2],"nz":[2,0,1,2]},{"size":2,"px":[12,6],"py":[12,6],"pz":[0,1],"nx":[8,2],"ny":[4,1],"nz":[1,-1]},{"size":2,"px":[13,11],"py":[19,8],"pz":[0,-1],"nx":[13,13],"ny":[20,17],"nz":[0,0]},{"size":2,"px":[11,19],"py":[5,14],"pz":[0,-1],"nx":[3,4],"ny":[8,4],"nz":[1,1]},{"size":2,"px":[10,0],"py":[8,6],"pz":[1,-1],"nx":[21,21],"ny":[16,15],"nz":[0,0]},{"size":2,"px":[1,12],"py":[7,6],"pz":[1,-1],"nx":[2,7],"ny":[5,14],"nz":[2,0]},{"size":2,"px":[2,9],"py":[7,5],"pz":[1,-1],"nx":[2,5],"ny":[5,9],"nz":[2,1]},{"size":2,"px":[12,5],"py":[15,6],"pz":[0,-1],"nx":[3,12],"ny":[0,2],"nz":[2,0]},{"size":2,"px":[23,22],"py":[23,1],"pz":[0,-1],"nx":[0,0],"ny":[2,3],"nz":[2,2]},{"size":2,"px":[3,6],"py":[1,2],"pz":[2,1],"nx":[8,0],"ny":[4,3],"nz":[1,-1]},{"size":2,"px":[5,1],"py":[9,1],"pz":[0,-1],"nx":[4,2],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[0,1],"py":[0,0],"pz":[2,0],"nx":[2,3],"ny":[9,10],"nz":[0,-1]},{"size":2,"px":[6,0],"py":[16,14],"pz":[0,-1],"nx":[6,3],"ny":[23,14],"nz":[0,0]},{"size":2,"px":[3,3],"py":[2,3],"pz":[2,1],"nx":[13,3],"ny":[19,14],"nz":[0,-1]},{"size":2,"px":[11,5],"py":[8,18],"pz":[0,-1],"nx":[4,7],"ny":[1,2],"nz":[2,1]},{"size":2,"px":[4,4],"py":[5,6],"pz":[1,1],"nx":[2,2],"ny":[5,3],"nz":[2,-1]},{"size":2,"px":[7,3],"py":[13,7],"pz":[0,1],"nx":[4,3],"ny":[4,1],"nz":[1,-1]},{"size":2,"px":[0,0],"py":[5,6],"pz":[1,0],"nx":[2,1],"ny":[5,1],"nz":[1,-1]},{"size":2,"px":[7,14],"py":[3,5],"pz":[1,0],"nx":[5,0],"ny":[16,7],"nz":[0,-1]},{"size":2,"px":[11,2],"py":[18,5],"pz":[0,2],"nx":[11,4],"ny":[16,4],"nz":[0,-1]},{"size":2,"px":[6,16],"py":[19,20],"pz":[0,-1],"nx":[3,2],"ny":[10,5],"nz":[1,2]},{"size":2,"px":[5,3],"py":[3,1],"pz":[0,1],"nx":[1,3],"ny":[4,8],"nz":[0,-1]},{"size":2,"px":[12,6],"py":[13,6],"pz":[0,1],"nx":[10,1],"ny":[12,2],"nz":[0,-1]},{"size":2,"px":[8,3],"py":[6,2],"pz":[1,-1],"nx":[4,8],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[9,3],"py":[21,2],"pz":[0,-1],"nx":[8,4],"ny":[1,0],"nz":[1,2]},{"size":2,"px":[8,4],"py":[1,0],"pz":[1,-1],"nx":[8,6],"ny":[4,2],"nz":[1,1]},{"size":2,"px":[2,7],"py":[1,6],"pz":[2,-1],"nx":[7,9],"ny":[6,4],"nz":[1,1]},{"size":2,"px":[6,3],"py":[8,3],"pz":[1,2],"nx":[10,5],"ny":[19,11],"nz":[0,-1]},{"size":2,"px":[2,2],"py":[3,4],"pz":[2,2],"nx":[3,6],"ny":[4,6],"nz":[1,-1]},{"size":2,"px":[3,11],"py":[5,20],"pz":[2,0],"nx":[11,5],"ny":[21,8],"nz":[0,-1]},{"size":3,"px":[5,9,5],"py":[4,7,5],"pz":[2,0,2],"nx":[23,10,4],"ny":[23,3,22],"nz":[0,-1,-1]},{"size":4,"px":[11,9,7,1],"py":[13,8,11,10],"pz":[0,-1,-1,-1],"nx":[8,2,11,12],"ny":[4,2,4,4],"nz":[1,2,0,0]},{"size":2,"px":[0,0],"py":[7,6],"pz":[1,1],"nx":[0,4],"ny":[1,0],"nz":[2,-1]},{"size":2,"px":[19,20],"py":[0,1],"pz":[0,0],"nx":[21,1],"ny":[0,2],"nz":[0,-1]},{"size":2,"px":[8,5],"py":[11,0],"pz":[0,-1],"nx":[11,0],"ny":[12,1],"nz":[0,2]},{"size":2,"px":[11,11],"py":[1,1],"pz":[0,-1],"nx":[4,7],"ny":[5,4],"nz":[1,1]},{"size":2,"px":[5,12],"py":[4,23],"pz":[2,-1],"nx":[13,15],"ny":[5,4],"nz":[0,0]},{"size":2,"px":[12,20],"py":[4,16],"pz":[0,-1],"nx":[9,4],"ny":[2,1],"nz":[0,1]},{"size":2,"px":[12,13],"py":[2,2],"pz":[0,0],"nx":[4,16],"ny":[2,11],"nz":[2,0]},{"size":2,"px":[19,14],"py":[10,17],"pz":[0,-1],"nx":[3,8],"ny":[0,2],"nz":[2,0]},{"size":2,"px":[8,12],"py":[1,2],"pz":[1,0],"nx":[19,10],"ny":[3,1],"nz":[0,-1]},{"size":4,"px":[17,2,3,10],"py":[8,6,2,12],"pz":[0,1,2,0],"nx":[17,9,12,2],"ny":[9,22,13,5],"nz":[0,-1,-1,-1]},{"size":2,"px":[20,10],"py":[15,7],"pz":[0,1],"nx":[13,9],"ny":[7,3],"nz":[0,-1]},{"size":2,"px":[0,0],"py":[1,0],"pz":[2,2],"nx":[10,3],"ny":[9,2],"nz":[1,-1]},{"size":2,"px":[4,3],"py":[1,0],"pz":[2,2],"nx":[0,22],"ny":[14,6],"nz":[0,-1]},{"size":2,"px":[16,3],"py":[4,0],"pz":[0,2],"nx":[16,3],"ny":[2,0],"nz":[0,-1]},{"size":2,"px":[8,16],"py":[6,12],"pz":[1,0],"nx":[8,12],"ny":[4,7],"nz":[1,-1]},{"size":2,"px":[5,11],"py":[0,5],"pz":[2,1],"nx":[10,1],"ny":[5,5],"nz":[1,-1]},{"size":2,"px":[7,4],"py":[5,5],"pz":[0,-1],"nx":[3,6],"ny":[2,3],"nz":[1,0]},{"size":2,"px":[11,11],"py":[11,12],"pz":[0,0],"nx":[23,7],"ny":[20,2],"nz":[0,-1]},{"size":2,"px":[16,8],"py":[12,5],"pz":[0,1],"nx":[8,2],"ny":[2,1],"nz":[1,-1]},{"size":3,"px":[6,11,11],"py":[11,23,20],"pz":[1,0,0],"nx":[11,3,22],"ny":[21,3,16],"nz":[0,-1,-1]},{"size":2,"px":[17,15],"py":[3,2],"pz":[0,-1],"nx":[4,4],"ny":[3,2],"nz":[2,2]},{"size":2,"px":[21,21],"py":[11,10],"pz":[0,0],"nx":[11,3],"ny":[6,2],"nz":[1,-1]},{"size":2,"px":[23,21],"py":[22,10],"pz":[0,-1],"nx":[20,10],"ny":[18,10],"nz":[0,1]},{"size":2,"px":[4,2],"py":[6,3],"pz":[1,2],"nx":[3,2],"ny":[4,3],"nz":[1,-1]},{"size":2,"px":[16,0],"py":[18,11],"pz":[0,-1],"nx":[8,7],"ny":[4,4],"nz":[0,0]},{"size":2,"px":[6,21],"py":[3,16],"pz":[0,-1],"nx":[1,8],"ny":[2,14],"nz":[2,0]},{"size":2,"px":[8,1],"py":[3,0],"pz":[0,-1],"nx":[11,11],"ny":[2,1],"nz":[0,0]},{"size":3,"px":[11,11,11],"py":[9,10,8],"pz":[1,1,1],"nx":[23,1,0],"ny":[23,9,11],"nz":[0,-1,-1]},{"size":2,"px":[6,3],"py":[2,1],"pz":[1,2],"nx":[7,1],"ny":[8,2],"nz":[0,-1]},{"size":2,"px":[10,17],"py":[17,19],"pz":[0,-1],"nx":[10,4],"ny":[16,9],"nz":[0,1]},{"size":2,"px":[3,6],"py":[7,1],"pz":[1,-1],"nx":[11,0],"ny":[11,8],"nz":[0,1]},{"size":2,"px":[10,5],"py":[11,4],"pz":[1,2],"nx":[5,5],"ny":[0,0],"nz":[2,-1]},{"size":2,"px":[3,6],"py":[3,6],"pz":[2,1],"nx":[8,0],"ny":[4,16],"nz":[1,-1]},{"size":2,"px":[14,1],"py":[20,2],"pz":[0,-1],"nx":[7,7],"ny":[11,9],"nz":[1,1]},{"size":3,"px":[11,13,4],"py":[16,21,3],"pz":[0,0,2],"nx":[14,16,5],"ny":[20,14,9],"nz":[0,-1,-1]},{"size":2,"px":[7,0],"py":[1,1],"pz":[1,-1],"nx":[4,7],"ny":[2,4],"nz":[2,1]},{"size":2,"px":[23,11],"py":[9,4],"pz":[0,1],"nx":[11,3],"ny":[1,3],"nz":[0,-1]},{"size":2,"px":[11,13],"py":[23,23],"pz":[0,0],"nx":[13,13],"ny":[20,20],"nz":[0,-1]},{"size":2,"px":[10,8],"py":[5,11],"pz":[0,-1],"nx":[20,19],"ny":[18,20],"nz":[0,0]},{"size":2,"px":[19,5],"py":[22,4],"pz":[0,-1],"nx":[2,9],"ny":[3,17],"nz":[1,0]},{"size":2,"px":[15,2],"py":[13,7],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":2,"px":[14,13],"py":[17,2],"pz":[0,-1],"nx":[15,13],"ny":[19,15],"nz":[0,0]},{"size":2,"px":[12,23],"py":[8,22],"pz":[0,-1],"nx":[7,10],"ny":[5,9],"nz":[1,0]},{"size":2,"px":[2,6],"py":[21,10],"pz":[0,-1],"nx":[3,4],"ny":[3,3],"nz":[1,1]},{"size":2,"px":[15,11],"py":[5,0],"pz":[0,-1],"nx":[3,4],"ny":[17,16],"nz":[0,0]},{"size":2,"px":[3,1],"py":[18,8],"pz":[0,1],"nx":[14,4],"ny":[17,7],"nz":[0,-1]},{"size":2,"px":[15,3],"py":[18,3],"pz":[0,2],"nx":[1,22],"ny":[0,1],"nz":[0,-1]},{"size":2,"px":[13,3],"py":[9,3],"pz":[0,-1],"nx":[0,1],"ny":[9,20],"nz":[1,0]},{"size":2,"px":[1,1],"py":[1,0],"pz":[2,2],"nx":[9,23],"ny":[10,12],"nz":[1,-1]},{"size":4,"px":[9,0,9,1],"py":[8,0,0,10],"pz":[1,-1,-1,-1],"nx":[23,7,5,23],"ny":[20,7,5,19],"nz":[0,1,2,0]},{"size":2,"px":[18,18],"py":[12,12],"pz":[0,-1],"nx":[8,4],"ny":[4,2],"nz":[1,2]},{"size":3,"px":[0,4,1],"py":[3,5,3],"pz":[1,-1,-1],"nx":[16,11,8],"ny":[8,5,6],"nz":[0,0,0]},{"size":5,"px":[9,10,14,11,11],"py":[0,0,0,0,0],"pz":[0,0,0,0,-1],"nx":[8,3,4,6,2],"ny":[22,9,5,4,0],"nz":[0,1,0,0,2]},{"size":2,"px":[6,5],"py":[2,2],"pz":[1,1],"nx":[7,3],"ny":[8,7],"nz":[0,-1]},{"size":2,"px":[11,5],"py":[15,2],"pz":[0,-1],"nx":[3,10],"ny":[0,1],"nz":[2,0]},{"size":2,"px":[0,11],"py":[11,12],"pz":[1,-1],"nx":[22,22],"ny":[14,13],"nz":[0,0]},{"size":2,"px":[2,2],"py":[15,14],"pz":[0,0],"nx":[1,2],"ny":[11,8],"nz":[1,-1]},{"size":2,"px":[11,6],"py":[0,7],"pz":[1,-1],"nx":[19,5],"ny":[3,0],"nz":[0,2]},{"size":2,"px":[2,3],"py":[3,7],"pz":[2,1],"nx":[1,5],"ny":[5,0],"nz":[1,-1]},{"size":2,"px":[10,14],"py":[4,5],"pz":[0,-1],"nx":[4,18],"ny":[2,12],"nz":[2,0]},{"size":2,"px":[19,10],"py":[12,2],"pz":[0,-1],"nx":[13,4],"ny":[10,2],"nz":[0,2]},{"size":2,"px":[6,1],"py":[21,6],"pz":[0,-1],"nx":[6,5],"ny":[0,0],"nz":[1,1]}],"alpha":[-1.044179e+00,1.044179e+00,-6.003138e-01,6.003138e-01,-4.091282e-01,4.091282e-01,-4.590148e-01,4.590148e-01,-4.294004e-01,4.294004e-01,-3.360846e-01,3.360846e-01,-3.054186e-01,3.054186e-01,-2.901743e-01,2.901743e-01,-3.522417e-01,3.522417e-01,-3.195838e-01,3.195838e-01,-2.957309e-01,2.957309e-01,-2.876727e-01,2.876727e-01,-2.637460e-01,2.637460e-01,-2.607900e-01,2.607900e-01,-2.455714e-01,2.455714e-01,-2.749847e-01,2.749847e-01,-2.314217e-01,2.314217e-01,-2.540871e-01,2.540871e-01,-2.143416e-01,2.143416e-01,-2.565697e-01,2.565697e-01,-1.901272e-01,1.901272e-01,-2.259981e-01,2.259981e-01,-2.012333e-01,2.012333e-01,-2.448460e-01,2.448460e-01,-2.192845e-01,2.192845e-01,-2.005951e-01,2.005951e-01,-2.259000e-01,2.259000e-01,-1.955758e-01,1.955758e-01,-2.235332e-01,2.235332e-01,-1.704490e-01,1.704490e-01,-1.584628e-01,1.584628e-01,-2.167710e-01,2.167710e-01,-1.592909e-01,1.592909e-01,-1.967292e-01,1.967292e-01,-1.432268e-01,1.432268e-01,-2.039949e-01,2.039949e-01,-1.404068e-01,1.404068e-01,-1.788201e-01,1.788201e-01,-1.498714e-01,1.498714e-01,-1.282541e-01,1.282541e-01,-1.630182e-01,1.630182e-01,-1.398111e-01,1.398111e-01,-1.464143e-01,1.464143e-01,-1.281712e-01,1.281712e-01,-1.417014e-01,1.417014e-01,-1.779164e-01,1.779164e-01,-2.067174e-01,2.067174e-01,-1.344947e-01,1.344947e-01,-1.357351e-01,1.357351e-01,-1.683191e-01,1.683191e-01,-1.821768e-01,1.821768e-01,-2.158307e-01,2.158307e-01,-1.812857e-01,1.812857e-01,-1.635445e-01,1.635445e-01,-1.474934e-01,1.474934e-01,-1.771993e-01,1.771993e-01,-1.517620e-01,1.517620e-01,-1.283184e-01,1.283184e-01,-1.862675e-01,1.862675e-01,-1.420491e-01,1.420491e-01,-1.232165e-01,1.232165e-01,-1.472696e-01,1.472696e-01,-1.192156e-01,1.192156e-01,-1.602034e-01,1.602034e-01,-1.321473e-01,1.321473e-01,-1.358101e-01,1.358101e-01,-1.295821e-01,1.295821e-01,-1.289102e-01,1.289102e-01,-1.232520e-01,1.232520e-01,-1.332227e-01,1.332227e-01,-1.358887e-01,1.358887e-01,-1.179559e-01,1.179559e-01,-1.263694e-01,1.263694e-01,-1.444876e-01,1.444876e-01,-1.933141e-01,1.933141e-01,-1.917886e-01,1.917886e-01,-1.199760e-01,1.199760e-01,-1.359937e-01,1.359937e-01,-1.690073e-01,1.690073e-01,-1.894222e-01,1.894222e-01,-1.699422e-01,1.699422e-01,-1.340361e-01,1.340361e-01,-1.840622e-01,1.840622e-01,-1.277397e-01,1.277397e-01,-1.381610e-01,1.381610e-01,-1.282241e-01,1.282241e-01,-1.211334e-01,1.211334e-01,-1.264628e-01,1.264628e-01,-1.373010e-01,1.373010e-01,-1.363356e-01,1.363356e-01,-1.562568e-01,1.562568e-01,-1.268735e-01,1.268735e-01,-1.037859e-01,1.037859e-01,-1.394322e-01,1.394322e-01,-1.449225e-01,1.449225e-01,-1.109657e-01,1.109657e-01,-1.086931e-01,1.086931e-01,-1.379135e-01,1.379135e-01,-1.881974e-01,1.881974e-01,-1.304956e-01,1.304956e-01,-9.921777e-02,9.921777e-02,-1.398624e-01,1.398624e-01,-1.216469e-01,1.216469e-01,-1.272741e-01,1.272741e-01,-1.878236e-01,1.878236e-01,-1.336894e-01,1.336894e-01,-1.256289e-01,1.256289e-01,-1.247231e-01,1.247231e-01,-1.853400e-01,1.853400e-01,-1.087805e-01,1.087805e-01,-1.205676e-01,1.205676e-01,-1.023182e-01,1.023182e-01,-1.268422e-01,1.268422e-01,-1.422900e-01,1.422900e-01,-1.098174e-01,1.098174e-01,-1.317018e-01,1.317018e-01,-1.378142e-01,1.378142e-01,-1.274550e-01,1.274550e-01,-1.142944e-01,1.142944e-01,-1.713488e-01,1.713488e-01,-1.103035e-01,1.103035e-01,-1.045221e-01,1.045221e-01,-1.293015e-01,1.293015e-01,-9.763183e-02,9.763183e-02,-1.387213e-01,1.387213e-01,-9.031167e-02,9.031167e-02,-1.283052e-01,1.283052e-01,-1.133462e-01,1.133462e-01,-9.370681e-02,9.370681e-02,-1.079269e-01,1.079269e-01,-1.331913e-01,1.331913e-01,-8.969902e-02,8.969902e-02,-1.044560e-01,1.044560e-01,-9.387466e-02,9.387466e-02,-1.208988e-01,1.208988e-01,-1.252011e-01,1.252011e-01,-1.401277e-01,1.401277e-01,-1.461381e-01,1.461381e-01,-1.323763e-01,1.323763e-01,-9.923889e-02,9.923889e-02,-1.142899e-01,1.142899e-01,-9.110853e-02,9.110853e-02,-1.106607e-01,1.106607e-01,-1.253140e-01,1.253140e-01,-9.657895e-02,9.657895e-02,-1.030010e-01,1.030010e-01,-1.348857e-01,1.348857e-01,-1.237793e-01,1.237793e-01,-1.296943e-01,1.296943e-01,-1.323385e-01,1.323385e-01,-8.331554e-02,8.331554e-02,-8.417589e-02,8.417589e-02,-1.104431e-01,1.104431e-01,-1.170710e-01,1.170710e-01,-1.391725e-01,1.391725e-01,-1.485189e-01,1.485189e-01,-1.840393e-01,1.840393e-01,-1.238250e-01,1.238250e-01,-1.095287e-01,1.095287e-01,-1.177869e-01,1.177869e-01,-1.036409e-01,1.036409e-01,-9.802581e-02,9.802581e-02,-9.364054e-02,9.364054e-02,-9.936022e-02,9.936022e-02,-1.117201e-01,1.117201e-01,-1.081300e-01,1.081300e-01,-1.331861e-01,1.331861e-01,-1.192122e-01,1.192122e-01,-9.889761e-02,9.889761e-02,-1.173456e-01,1.173456e-01,-1.032917e-01,1.032917e-01,-9.268551e-02,9.268551e-02,-1.178563e-01,1.178563e-01,-1.215065e-01,1.215065e-01,-1.060437e-01,1.060437e-01,-1.010044e-01,1.010044e-01,-1.021683e-01,1.021683e-01,-9.974968e-02,9.974968e-02,-1.161528e-01,1.161528e-01,-8.686721e-02,8.686721e-02,-8.145259e-02,8.145259e-02,-9.937060e-02,9.937060e-02,-1.170885e-01,1.170885e-01,-7.693779e-02,7.693779e-02,-9.047233e-02,9.047233e-02,-9.168442e-02,9.168442e-02,-1.054105e-01,1.054105e-01,-9.036177e-02,9.036177e-02,-1.251949e-01,1.251949e-01,-9.523847e-02,9.523847e-02,-1.038930e-01,1.038930e-01,-1.433660e-01,1.433660e-01,-1.489830e-01,1.489830e-01,-8.393174e-02,8.393174e-02,-8.888026e-02,8.888026e-02,-9.347861e-02,9.347861e-02,-1.044838e-01,1.044838e-01,-1.102144e-01,1.102144e-01,-1.383415e-01,1.383415e-01,-1.466476e-01,1.466476e-01,-1.129741e-01,1.129741e-01,-1.310915e-01,1.310915e-01,-1.070648e-01,1.070648e-01,-7.559007e-02,7.559007e-02,-8.812082e-02,8.812082e-02,-1.234272e-01,1.234272e-01,-1.088022e-01,1.088022e-01,-8.388703e-02,8.388703e-02,-7.179593e-02,7.179593e-02,-1.008961e-01,1.008961e-01,-9.030070e-02,9.030070e-02,-8.581345e-02,8.581345e-02,-9.023431e-02,9.023431e-02,-9.807321e-02,9.807321e-02,-9.621402e-02,9.621402e-02,-1.730195e-01,1.730195e-01,-8.984631e-02,8.984631e-02,-9.556661e-02,9.556661e-02,-1.047576e-01,1.047576e-01,-7.854313e-02,7.854313e-02,-8.682118e-02,8.682118e-02,-1.159761e-01,1.159761e-01,-1.339540e-01,1.339540e-01,-1.003048e-01,1.003048e-01,-9.747544e-02,9.747544e-02,-9.501058e-02,9.501058e-02,-1.321566e-01,1.321566e-01,-9.194706e-02,9.194706e-02,-9.359276e-02,9.359276e-02,-1.015916e-01,1.015916e-01,-1.174192e-01,1.174192e-01,-1.039931e-01,1.039931e-01,-9.746733e-02,9.746733e-02,-1.286120e-01,1.286120e-01,-1.044899e-01,1.044899e-01,-1.066385e-01,1.066385e-01,-8.368626e-02,8.368626e-02,-1.271919e-01,1.271919e-01,-1.055946e-01,1.055946e-01,-8.272876e-02,8.272876e-02,-1.370564e-01,1.370564e-01,-8.539379e-02,8.539379e-02,-1.100343e-01,1.100343e-01,-8.102170e-02,8.102170e-02,-1.028728e-01,1.028728e-01,-1.305065e-01,1.305065e-01,-1.059506e-01,1.059506e-01,-1.264646e-01,1.264646e-01,-8.383843e-02,8.383843e-02,-9.357698e-02,9.357698e-02,-7.474400e-02,7.474400e-02,-7.814045e-02,7.814045e-02,-8.600970e-02,8.600970e-02,-1.206090e-01,1.206090e-01,-9.986512e-02,9.986512e-02,-8.516476e-02,8.516476e-02,-7.198783e-02,7.198783e-02,-7.838409e-02,7.838409e-02,-1.005142e-01,1.005142e-01,-9.951857e-02,9.951857e-02,-7.253998e-02,7.253998e-02,-9.913739e-02,9.913739e-02,-7.500360e-02,7.500360e-02,-9.258090e-02,9.258090e-02,-1.400287e-01,1.400287e-01,-1.044404e-01,1.044404e-01,-7.404339e-02,7.404339e-02,-7.256833e-02,7.256833e-02,-1.006995e-01,1.006995e-01,-1.426043e-01,1.426043e-01,-1.036529e-01,1.036529e-01,-1.208443e-01,1.208443e-01,-1.074245e-01,1.074245e-01,-1.141448e-01,1.141448e-01,-1.015809e-01,1.015809e-01,-1.028822e-01,1.028822e-01,-1.055682e-01,1.055682e-01,-9.468699e-02,9.468699e-02,-1.010098e-01,1.010098e-01,-1.205054e-01,1.205054e-01,-8.392956e-02,8.392956e-02,-8.052297e-02,8.052297e-02,-9.576507e-02,9.576507e-02,-9.515692e-02,9.515692e-02,-1.564745e-01,1.564745e-01,-7.357238e-02,7.357238e-02,-1.129262e-01,1.129262e-01,-1.013265e-01,1.013265e-01,-8.760761e-02,8.760761e-02,-8.714771e-02,8.714771e-02,-9.605039e-02,9.605039e-02,-9.064677e-02,9.064677e-02,-8.243857e-02,8.243857e-02,-8.495858e-02,8.495858e-02,-8.350249e-02,8.350249e-02,-7.423234e-02,7.423234e-02,-7.930799e-02,7.930799e-02,-6.620023e-02,6.620023e-02,-7.311919e-02,7.311919e-02,-1.237938e-01,1.237938e-01,-1.086814e-01,1.086814e-01,-6.379798e-02,6.379798e-02,-7.526021e-02,7.526021e-02,-8.297097e-02,8.297097e-02,-8.186337e-02,8.186337e-02,-7.627362e-02,7.627362e-02,-1.061638e-01,1.061638e-01,-8.328494e-02,8.328494e-02,-1.040895e-01,1.040895e-01,-7.649056e-02,7.649056e-02,-7.299058e-02,7.299058e-02,-9.195198e-02,9.195198e-02,-7.990880e-02,7.990880e-02,-7.429346e-02,7.429346e-02,-9.991702e-02,9.991702e-02,-9.755385e-02,9.755385e-02,-1.344138e-01,1.344138e-01,-1.707917e-01,1.707917e-01,-8.325450e-02,8.325450e-02,-8.137793e-02,8.137793e-02,-8.308659e-02,8.308659e-02,-7.440414e-02,7.440414e-02,-7.012744e-02,7.012744e-02,-8.122943e-02,8.122943e-02,-8.845462e-02,8.845462e-02,-8.803450e-02,8.803450e-02,-9.653392e-02,9.653392e-02,-8.795691e-02,8.795691e-02,-1.119045e-01,1.119045e-01,-1.068308e-01,1.068308e-01,-8.406359e-02,8.406359e-02,-1.220414e-01,1.220414e-01,-1.024235e-01,1.024235e-01,-1.252897e-01,1.252897e-01,-1.121234e-01,1.121234e-01,-9.054150e-02,9.054150e-02,-8.974435e-02,8.974435e-02,-1.351578e-01,1.351578e-01,-1.106442e-01,1.106442e-01,-8.093913e-02,8.093913e-02,-9.800762e-02,9.800762e-02,-7.012823e-02,7.012823e-02,-7.434949e-02,7.434949e-02,-8.684816e-02,8.684816e-02,-8.916388e-02,8.916388e-02,-8.773159e-02,8.773159e-02,-7.709608e-02,7.709608e-02,-7.230518e-02,7.230518e-02,-9.662156e-02,9.662156e-02,-7.957632e-02,7.957632e-02,-7.628441e-02,7.628441e-02,-8.050202e-02,8.050202e-02,-1.290593e-01,1.290593e-01,-9.246182e-02,9.246182e-02,-9.703662e-02,9.703662e-02,-7.866445e-02,7.866445e-02,-1.064783e-01,1.064783e-01,-1.012339e-01,1.012339e-01,-6.828389e-02,6.828389e-02,-1.005039e-01,1.005039e-01,-7.559687e-02,7.559687e-02,-6.359878e-02,6.359878e-02,-8.387002e-02,8.387002e-02,-7.851323e-02,7.851323e-02,-8.878569e-02,8.878569e-02,-7.767654e-02,7.767654e-02,-8.033338e-02,8.033338e-02,-9.142797e-02,9.142797e-02,-8.590585e-02,8.590585e-02,-1.052318e-01,1.052318e-01,-8.760062e-02,8.760062e-02,-9.222192e-02,9.222192e-02,-7.548828e-02,7.548828e-02,-8.003344e-02,8.003344e-02,-1.177076e-01,1.177076e-01,-1.064964e-01,1.064964e-01,-8.655553e-02,8.655553e-02,-9.418112e-02,9.418112e-02,-7.248163e-02,7.248163e-02,-7.120974e-02,7.120974e-02,-6.393114e-02,6.393114e-02,-7.997487e-02,7.997487e-02,-1.220941e-01,1.220941e-01,-9.892518e-02,9.892518e-02,-8.270271e-02,8.270271e-02,-1.069400e-01,1.069400e-01,-5.860771e-02,5.860771e-02,-9.126600e-02,9.126600e-02,-6.212559e-02,6.212559e-02,-9.397538e-02,9.397538e-02,-8.070447e-02,8.070447e-02,-8.415587e-02,8.415587e-02,-8.564455e-02,8.564455e-02,-7.791811e-02,7.791811e-02,-6.642259e-02,6.642259e-02,-8.266167e-02,8.266167e-02,-1.134986e-01,1.134986e-01,-1.045267e-01,1.045267e-01,-7.122085e-02,7.122085e-02,-7.979415e-02,7.979415e-02,-7.922347e-02,7.922347e-02,-9.003421e-02,9.003421e-02,-8.796449e-02,8.796449e-02,-7.933279e-02,7.933279e-02,-8.307947e-02,8.307947e-02,-8.946349e-02,8.946349e-02,-7.643384e-02,7.643384e-02,-7.818534e-02,7.818534e-02,-7.990991e-02,7.990991e-02,-9.885664e-02,9.885664e-02,-8.071329e-02,8.071329e-02,-6.952112e-02,6.952112e-02,-6.429706e-02,6.429706e-02,-6.307229e-02,6.307229e-02,-8.100137e-02,8.100137e-02,-7.693623e-02,7.693623e-02,-6.906625e-02,6.906625e-02,-7.390462e-02,7.390462e-02,-6.487217e-02,6.487217e-02,-1.233681e-01,1.233681e-01,-6.979273e-02,6.979273e-02,-8.358669e-02,8.358669e-02,-1.095420e-01,1.095420e-01,-8.519717e-02,8.519717e-02,-7.599857e-02,7.599857e-02,-6.042816e-02,6.042816e-02,-6.546304e-02,6.546304e-02,-1.016245e-01,1.016245e-01,-8.308787e-02,8.308787e-02,-7.385708e-02,7.385708e-02,-6.751630e-02,6.751630e-02,-9.036695e-02,9.036695e-02,-9.371335e-02,9.371335e-02,-1.116088e-01,1.116088e-01,-5.693741e-02,5.693741e-02,-6.383983e-02,6.383983e-02,-5.389843e-02,5.389843e-02,-8.383191e-02,8.383191e-02,-7.820822e-02,7.820822e-02,-7.067557e-02,7.067557e-02,-7.971948e-02,7.971948e-02,-7.360668e-02,7.360668e-02,-7.008027e-02,7.008027e-02,-8.013378e-02,8.013378e-02,-8.331605e-02,8.331605e-02,-7.145702e-02,7.145702e-02,-7.863940e-02,7.863940e-02,-6.992679e-02,6.992679e-02,-5.716495e-02,5.716495e-02,-5.306006e-02,5.306006e-02,-8.855639e-02,8.855639e-02,-7.656397e-02,7.656397e-02,-6.939272e-02,6.939272e-02,-7.523742e-02,7.523742e-02,-8.472299e-02,8.472299e-02,-8.114341e-02,8.114341e-02,-6.795517e-02,6.795517e-02,-7.890130e-02,7.890130e-02,-7.488741e-02,7.488741e-02,-9.281972e-02,9.281972e-02,-9.325498e-02,9.325498e-02,-1.401587e-01,1.401587e-01,-1.176284e-01,1.176284e-01,-8.867597e-02,8.867597e-02,-8.124232e-02,8.124232e-02,-9.441235e-02,9.441235e-02,-8.029452e-02,8.029452e-02,-8.581848e-02,8.581848e-02,-1.029819e-01,1.029819e-01,-9.569118e-02,9.569118e-02,-7.690893e-02,7.690893e-02,-9.018228e-02,9.018228e-02,-1.049209e-01,1.049209e-01,-8.969413e-02,8.969413e-02,-8.651891e-02,8.651891e-02,-8.613331e-02,8.613331e-02,-7.120468e-02,7.120468e-02,-8.743959e-02,8.743959e-02,-7.607158e-02,7.607158e-02,-1.015547e-01,1.015547e-01,-8.090879e-02,8.090879e-02,-7.114079e-02,7.114079e-02,-8.744835e-02,8.744835e-02,-6.074904e-02,6.074904e-02,-6.919871e-02,6.919871e-02,-7.607774e-02,7.607774e-02,-9.444600e-02,9.444600e-02,-7.833429e-02,7.833429e-02,-6.817555e-02,6.817555e-02,-8.997390e-02,8.997390e-02,-9.845223e-02,9.845223e-02,-7.894180e-02,7.894180e-02,-7.921373e-02,7.921373e-02,-7.448032e-02,7.448032e-02,-1.178165e-01,1.178165e-01,-8.216686e-02,8.216686e-02,-8.103286e-02,8.103286e-02,-6.981470e-02,6.981470e-02,-8.709008e-02,8.709008e-02,-8.336259e-02,8.336259e-02,-6.213589e-02,6.213589e-02,-7.068045e-02,7.068045e-02,-6.915676e-02,6.915676e-02,-7.103416e-02,7.103416e-02,-6.523849e-02,6.523849e-02,-7.634760e-02,7.634760e-02,-7.263038e-02,7.263038e-02,-7.164396e-02,7.164396e-02,-8.745559e-02,8.745559e-02,-6.960181e-02,6.960181e-02,-8.500098e-02,8.500098e-02,-6.523260e-02,6.523260e-02,-7.319714e-02,7.319714e-02,-6.268125e-02,6.268125e-02,-7.083135e-02,7.083135e-02,-7.984517e-02,7.984517e-02,-1.256265e-01,1.256265e-01,-1.065412e-01,1.065412e-01,-8.524323e-02,8.524323e-02,-9.291364e-02,9.291364e-02,-7.936567e-02,7.936567e-02,-8.607723e-02,8.607723e-02,-7.583416e-02,7.583416e-02,-7.931928e-02,7.931928e-02,-7.408357e-02,7.408357e-02,-1.034404e-01,1.034404e-01,-1.012127e-01,1.012127e-01,-7.916689e-02,7.916689e-02,-8.753651e-02,8.753651e-02,-6.090366e-02,6.090366e-02,-7.500103e-02,7.500103e-02,-1.228709e-01,1.228709e-01,-6.318201e-02,6.318201e-02,-7.585420e-02,7.585420e-02,-7.089090e-02,7.089090e-02,-1.053542e-01,1.053542e-01,-8.549521e-02,8.549521e-02,-7.906308e-02,7.906308e-02,-6.338780e-02,6.338780e-02,-8.417910e-02,8.417910e-02,-7.115511e-02,7.115511e-02,-7.693949e-02,7.693949e-02,-7.446749e-02,7.446749e-02,-1.037929e-01,1.037929e-01,-7.991005e-02,7.991005e-02,-7.119439e-02,7.119439e-02,-7.071340e-02,7.071340e-02,-8.587362e-02,8.587362e-02,-7.001236e-02,7.001236e-02,-7.567115e-02,7.567115e-02,-7.118930e-02,7.118930e-02,-6.844895e-02,6.844895e-02,-1.035118e-01,1.035118e-01,-8.156618e-02,8.156618e-02,-7.449593e-02,7.449593e-02,-8.154360e-02,8.154360e-02,-9.110878e-02,9.110878e-02,-6.222534e-02,6.222534e-02,-1.033841e-01,1.033841e-01,-6.811687e-02,6.811687e-02,-6.828443e-02,6.828443e-02,-5.769408e-02,5.769408e-02,-5.917684e-02,5.917684e-02,-8.358868e-02,8.358868e-02]}]};