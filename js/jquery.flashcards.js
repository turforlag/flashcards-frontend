/*************************************************************************
 *  [2016] - [2017] Turforlag.dk 
 *  All Rights Reserved.
 * 
 * NOTICE:  All information contained herein is, and remains
 * the property of Tur Forlag and its suppliers,
 * if any. The intellectual and technical concepts contained
 * herein are proprietary to Tur Forlag and its suppliers and
 * are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Tur Forlag Denmark.
 *
 * Version: 031017
 * Author: vanja@vanjapetrovic.com
 *
 */

!function(e){var t=!1;if("function"==typeof define&&define.amd&&(define(e),t=!0),"object"==typeof exports&&(module.exports=e(),t=!0),!t){var r=window.Storages,o=window.Storages=e();o.noConflict=function(){return window.Storages=r,o}}}(function(){function e(){var e,t,r,o,n,i=this._type,s=arguments.length,a=window[i],f=arguments,c=f[0];if(1>s)throw new Error("Minimum 1 argument must be given");if(Array.isArray(c)){t={};for(o in c)if(c.hasOwnProperty(o)){e=c[o];try{t[e]=JSON.parse(a.getItem(e))}catch(h){t[e]=a.getItem(e)}}return t}if(1!=s){try{t=JSON.parse(a.getItem(c))}catch(h){throw new ReferenceError(c+" is not defined in this storage")}for(o=1;s-1>o;o++)if(t=t[f[o]],void 0===t)throw new ReferenceError([].slice.call(f,1,o+1).join(".")+" is not defined in this storage");if(Array.isArray(f[o])){r=t,t={};for(n in f[o])f[o].hasOwnProperty(n)&&(t[f[o][n]]=r[f[o][n]]);return t}return t[f[o]]}try{return JSON.parse(a.getItem(c))}catch(h){return a.getItem(c)}}function t(){var e,t,r,o,n=this._type,i=arguments.length,s=window[n],a=arguments,f=a[0],h=a[1],l=isNaN(h)?{}:[];if(1>i||!c(f)&&2>i)throw new Error("Minimum 2 arguments must be given or first parameter must be an object");if(c(f)){for(o in f)f.hasOwnProperty(o)&&(e=f[o],c(e)||this.alwaysUseJson?s.setItem(o,JSON.stringify(e)):s.setItem(o,e));return f}if(2==i)return"object"==typeof h||this.alwaysUseJson?s.setItem(f,JSON.stringify(h)):s.setItem(f,h),h;try{r=s.getItem(f),null!=r&&(l=JSON.parse(r))}catch(u){}for(r=l,o=1;i-2>o;o++)e=a[o],t=isNaN(a[o+1])?"object":"array",(!r[e]||"object"==t&&!c(r[e])||"array"==t&&!Array.isArray(r[e]))&&("array"==t?r[e]=[]:r[e]={}),r=r[e];return r[a[o]]=a[o+1],s.setItem(f,JSON.stringify(l)),l}function r(){var e,t,r,o,n=this._type,i=arguments.length,s=window[n],a=arguments,f=a[0];if(1>i)throw new Error("Minimum 1 argument must be given");if(Array.isArray(f)){for(r in f)f.hasOwnProperty(r)&&s.removeItem(f[r]);return!0}if(1==i)return s.removeItem(f),!0;try{e=t=JSON.parse(s.getItem(f))}catch(c){throw new ReferenceError(f+" is not defined in this storage")}for(r=1;i-1>r;r++)if(t=t[a[r]],void 0===t)throw new ReferenceError([].slice.call(a,1,r).join(".")+" is not defined in this storage");if(Array.isArray(a[r]))for(o in a[r])a[r].hasOwnProperty(o)&&delete t[a[r][o]];else delete t[a[r]];return s.setItem(f,JSON.stringify(e)),!0}function o(e){var t,o=s.call(this);for(t in o)o.hasOwnProperty(t)&&r.call(this,o[t]);if(e)for(t in d.namespaceStorages)d.namespaceStorages.hasOwnProperty(t)&&a(t)}function n(){var t,r=arguments.length,o=arguments,i=o[0];if(0==r)return 0==s.call(this).length;if(Array.isArray(i)){for(t=0;t<i.length;t++)if(!n.call(this,i[t]))return!1;return!0}try{var a=e.apply(this,arguments);Array.isArray(o[r-1])||(a={totest:a});for(t in a)if(a.hasOwnProperty(t)&&!(c(a[t])&&h(a[t])||Array.isArray(a[t])&&!a[t].length||"boolean"!=typeof a[t]&&!a[t]))return!1;return!0}catch(f){return!0}}function i(){var t,r=arguments.length,o=arguments,n=o[0];if(1>r)throw new Error("Minimum 1 argument must be given");if(Array.isArray(n)){for(t=0;t<n.length;t++)if(!i.call(this,n[t]))return!1;return!0}try{var s=e.apply(this,arguments);Array.isArray(o[r-1])||(s={totest:s});for(t in s)if(s.hasOwnProperty(t)&&(void 0===s[t]||null===s[t]))return!1;return!0}catch(a){return!1}}function s(){var t=this._type,r=arguments.length,o=window[t],n=[],i={};if(i=r>0?e.apply(this,arguments):o,i&&i._cookie){var s=Cookies.get();for(var a in s)s.hasOwnProperty(a)&&""!=a&&n.push(a.replace(i._prefix,""))}else for(var f in i)i.hasOwnProperty(f)&&n.push(f);return n}function a(e){if(!e||"string"!=typeof e)throw new Error("First parameter must be a string");v?(window.localStorage.getItem(e)||window.localStorage.setItem(e,"{}"),window.sessionStorage.getItem(e)||window.sessionStorage.setItem(e,"{}")):(window.localCookieStorage.getItem(e)||window.localCookieStorage.setItem(e,"{}"),window.sessionCookieStorage.getItem(e)||window.sessionCookieStorage.setItem(e,"{}"));var t={localStorage:l({},d.localStorage,{_ns:e}),sessionStorage:l({},d.sessionStorage,{_ns:e})};return"undefined"!=typeof Cookies&&(window.cookieStorage.getItem(e)||window.cookieStorage.setItem(e,"{}"),t.cookieStorage=l({},d.cookieStorage,{_ns:e})),d.namespaceStorages[e]=t,t}function f(e){var t="jsapi";try{return window[e]?(window[e].setItem(t,t),window[e].removeItem(t),!0):!1}catch(r){return!1}}function c(e){var t,r;return e&&"[object Object]"===g.call(e)?(t=y(e))?(r=w.call(t,"constructor")&&t.constructor,"function"==typeof r&&p.call(r)===m):!0:!1}function h(e){var t;for(t in e)return!1;return!0}function l(){for(var e=1,t=arguments[0];e<arguments.length;e++){var r=arguments[e];for(var o in r)r.hasOwnProperty(o)&&(t[o]=r[o])}return t}var u={},g=u.toString,w=u.hasOwnProperty,p=w.toString,m=p.call(Object),y=Object.getPrototypeOf,d={},S="ls_",_="ss_",v=f("localStorage"),k={_type:"",_ns:"",_callMethod:function(e,t){t=Array.prototype.slice.call(t);var r=[],o=t[0];return this._ns&&r.push(this._ns),"string"==typeof o&&-1!==o.indexOf(".")&&(t.shift(),[].unshift.apply(t,o.split("."))),[].push.apply(r,t),e.apply(this,r)},alwaysUseJson:!1,get:function(){return this._callMethod(e,arguments)},set:function(){var e=arguments.length,r=arguments,o=r[0];if(1>e||!c(o)&&2>e)throw new Error("Minimum 2 arguments must be given or first parameter must be an object");if(c(o)&&this._ns){for(var n in o)o.hasOwnProperty(n)&&this._callMethod(t,[n,o[n]]);return o}var i=this._callMethod(t,r);return this._ns?i[o.split(".")[0]]:i},remove:function(){if(arguments.length<1)throw new Error("Minimum 1 argument must be given");return this._callMethod(r,arguments)},removeAll:function(e){return this._ns?(this._callMethod(t,[{}]),!0):this._callMethod(o,[e])},isEmpty:function(){return this._callMethod(n,arguments)},isSet:function(){if(arguments.length<1)throw new Error("Minimum 1 argument must be given");return this._callMethod(i,arguments)},keys:function(){return this._callMethod(s,arguments)}};if("undefined"!=typeof Cookies){window.name||(window.name=Math.floor(1e8*Math.random()));var O={_cookie:!0,_prefix:"",_expires:null,_path:null,_domain:null,setItem:function(e,t){Cookies.set(this._prefix+e,t,{expires:this._expires,path:this._path,domain:this._domain})},getItem:function(e){return Cookies.get(this._prefix+e)},removeItem:function(e){return Cookies.remove(this._prefix+e,{path:this._path})},clear:function(){var e=Cookies.get();for(var t in e)e.hasOwnProperty(t)&&""!=t&&(!this._prefix&&-1===t.indexOf(S)&&-1===t.indexOf(_)||this._prefix&&0===t.indexOf(this._prefix))&&Cookies.remove(t)},setExpires:function(e){return this._expires=e,this},setPath:function(e){return this._path=e,this},setDomain:function(e){return this._domain=e,this},setConf:function(e){return e.path&&(this._path=e.path),e.domain&&(this._domain=e.domain),e.expires&&(this._expires=e.expires),this},setDefaultConf:function(){this._path=this._domain=this._expires=null}};v||(window.localCookieStorage=l({},O,{_prefix:S,_expires:3650}),window.sessionCookieStorage=l({},O,{_prefix:_+window.name+"_"})),window.cookieStorage=l({},O),d.cookieStorage=l({},k,{_type:"cookieStorage",setExpires:function(e){return window.cookieStorage.setExpires(e),this},setPath:function(e){return window.cookieStorage.setPath(e),this},setDomain:function(e){return window.cookieStorage.setDomain(e),this},setConf:function(e){return window.cookieStorage.setConf(e),this},setDefaultConf:function(){return window.cookieStorage.setDefaultConf(),this}})}return d.initNamespaceStorage=function(e){return a(e)},v?(d.localStorage=l({},k,{_type:"localStorage"}),d.sessionStorage=l({},k,{_type:"sessionStorage"})):(d.localStorage=l({},k,{_type:"localCookieStorage"}),d.sessionStorage=l({},k,{_type:"sessionCookieStorage"})),d.namespaceStorages={},d.removeAllStorages=function(e){d.localStorage.removeAll(e),d.sessionStorage.removeAll(e),d.cookieStorage&&d.cookieStorage.removeAll(e),e||(d.namespaceStorages={})},d.alwaysUseJsonInStorage=function(e){k.alwaysUseJson=e,d.localStorage.alwaysUseJson=e,d.sessionStorage.alwaysUseJson=e,d.cookieStorage&&(d.cookieStorage.alwaysUseJson=e)},d});

;(function (factory) {
	if(typeof module === "object" && typeof module.exports === "object") {
		factory(require("jquery"), window, document);
	} else {
		factory(jQuery, window, document);
	}
}( function( $, window, document, undefined ) {
	
	var instanceId = strhash(window.location.href); 
	
	function strhash( str ) {
		if (str.length % 32 > 0) str += Array(33 - str.length % 32).join("z");
		var hash = '', bytes = [], i = j = k = a = 0, dict = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','1','2','3','4','5','6','7','8','9'];
		for (i = 0; i < str.length; i++ ) {
			ch = str.charCodeAt(i);
			bytes[j++] = (ch < 127) ? ch & 0xFF : 127;
		}
		var chunk_len = Math.ceil(bytes.length / 32);   
		for (i=0; i<bytes.length; i++) {
			j += bytes[i];
			k++;
			if ((k == chunk_len) || (i == bytes.length-1)) {
				a = Math.floor( j / k );
				if (a < 32)
					hash += '0';
				else if (a > 126)
					hash += 'z';
				else
					hash += dict[  Math.floor( (a-32) / 2.76) ];
				j = k = 0;
			}
		}
		return hash;
	}
		
	var isMobile = false; //initiate as false
	var isIos = false;
	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
		|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
	
	 var userAgent = navigator.userAgent || navigator.vendor || window.opera;
		if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        isIos = true;
		}
	
	
	var storage = null;
	if(window.localStorage) {
	  storage = Storages.localStorage;
	} else {
	  storage = null;
	}
	var getInitialOrientation = function (){
		var orientation = "";
		if (window.orientation == 0){
			orientation = "Portrait";
		} else if (window.orientation == 90 || window.orientation == -90){
			orientation = "Landscape";
		}
			
		if (isMobile && orientation == "Portrait") {
			return "down";
		} else if (isMobile && orientation == "Landscape"){
			return "right";
		}else {
			return "right";
		}
	}
	
	var pluginName = "cardslider",
		defaults = {
			direction: getInitialOrientation(),
			nav: true,
			swipe: false
	};
	var rightZ = 1;
	
	function Plugin ( element, options ) {
		this.element = element;
		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;
		this._cards = [];
		this._activeCard = null;
		this._directionClass = 'cardslider--direction-'+this.settings.direction;
		this._animationClassBack = 'cardslider--sortback-left';
		this._animationClassFront = 'cardslider--sortfront-'+this.settings.direction;
		this._scaleClass = 'scale-'+this.settings.direction;
		this._dotnav = null;
		this._directionnav = null;
		this._buttonNext = null;
		this._buttonPrev = null;
		this._xDown = null;
		this._yDown = null;
		
		this.leftStack = [];
		this.rightStack = [];
		this.currentCard = null;
		this.lastSize = null;
		this.init();
	}
	$.extend( Plugin.prototype, {		
		init: function() {

			this.initCards();
			this._activeCard = this._cards[0];	
			
			window.addEventListener('orientationchange', this.changeOrientation.bind(this));
			
			this.getOrientation();
			this.loadFromLocalStorage();
			
			if (isMobile){
				$(".knowButton").parent().addClass("btnWrapper");
				$(".knowButton").css('position', 'static');
			}
		},
		changeOrientation: function(e){
			if (isMobile){
				this.destroy();
				this.getOrientation();
				this.initCards();
				this.loadFromLocalStorage();
				this._activeCard = this._cards[0];	
				this.currentCard = null;

				var parent = $("#flashcard").parent();
					if (isIos){
						$("div#flashcard").width($(window).width());	
						$("div#flashcard").height($(window).height());
					}else {
						if (window.orientation == 0){
							$("div#flashcard").width($(window).height());	
							$("div#flashcard").height($(window).width());
						} else if (window.orientation == 90 ||  window.orientation == -90){
							$("#flashcard").width($(window).height());	
							$("#flashcard").height($(window).width());
						}
					}
			}
		},
		initCards: function() {

			this._cards = [];
			this.element.className = this.element.className + ' cardslider ' + this._directionClass;

			var list = this.element.querySelector('ul');
			if(!list) return false;

			list.classList.add('cardslider__cards');

			var rawcards = list.querySelectorAll('li');
			for(var i = 0; i < rawcards.length; i++) {
				var rawcard = rawcards[i];
				var card = {
					elem: rawcard,
					active: i === 0? true : false,
					index: i,
					cardClass: 'cardslider__card--index-' + i,
					position: 'left',
					gid: i
				};
				card.elem.className = card.elem.className + ' cardslider__card cardslider__card--transitions ' + card.cardClass;
				card.elem.style.zIndex = rawcards.length - i;
				this._cards.push(card);
			}
			
			this.lastSize = $(".cardslider__cards").width() / 2 - 25;
		},
		getOrientation: function(){
			var orientation = "";
			if (window.orientation == 0){
				orientation = "Portrait";
			} else if (window.orientation == 90 || window.orientation == -90){
				orientation = "Landscape";
			}

			if (isMobile && orientation == "Portrait"){
				
				//Basic settings
				this.settings.direction = "down";
				this._directionClass = 'cardslider--direction-'+this.settings.direction;
				this._animationClassBack = 'cardslider--sortback-up';
				this._animationClassFront = 'cardslider--sortfront-'+this.settings.direction;
				this._scaleClass = 'scale-'+this.settings.direction;
				
				// CSS Styling dynamic
				var parentWidth = $("#containerFlashcards").width();
				var parentHeight = $("#containerFlashcards").height();

				$(".cardslider__cards").css("width",(parentHeight/2) - 25);
				$(".cardslider__cards").css("height",(parentHeight/2) - 25);
				$(".cardslider__cards").css("transform","none");
				$(".cardslider__cards").css("top","5%");
				
				$(".card-text").css("padding-bottom", "20px");
				$('.card-text').flowtype({
				   minFont : 12,
				   maxFont : 40
				});
				
				var fontSize = $(".card-text").css('font-size');
				$(".card-text").css("line-height", "130%");
				$(".card-text").css("padding-left", "6px");
				$(".card-text").css("padding-right", "6px");
				
				$(".knowButton").css("font-size", fontSize); 
				$(".knowButton").css("padding", "5px"); 
				$(".back").css("padding", "5px"); 
				
				$(".backHeader").css("padding-left", "6px");
				$(".backHeader").css("padding-top", "6px");
				
				$("img.speaker").css("margin-top", "-4px"); 
				$("img.speaker").css("margin-right", "10px");
				$("img.speaker").css("width", "20px");
				$("img.speaker").css("height", "20px");
				
								
				var left = (parentWidth - $(".cardslider__cards").width()) / 2;		
				$(".cardslider__cards").css("left",left);
				

							
			} else if (isMobile && orientation == "Landscape" ){
				
				//Basic settings
				this.settings.direction = "right";
				this._directionClass = 'cardslider--direction-'+this.settings.direction;
				this._animationClassBack = 'cardslider--sortback-left';
				this._animationClassFront = 'cardslider--sortfront-'+this.settings.direction;
				this._scaleClass = 'scale-'+this.settings.direction;
				
				// CSS Styling dynamic
				var parentWidth = $("#containerFlashcards").width();
				var parentHeight = $("#containerFlashcards").height();

				var nv = $(".cardslider__cards").css("width",(parentWidth/2) - 80);
				$(".cardslider__cards").css("height",(parentWidth/2) - 80);
				$(".cardslider__cards").css("left","25%");
				
				$(".card-text").css("padding-bottom", "20px");
				$('.card-text').flowtype({
				   minFont : 12,
				   maxFont : 40
				});
				
				var fontSize = $(".card-text").css('font-size');
				$(".card-text").css("line-height", fontSize+3);
				$(".card-text").css("padding-left", "6px");
				$(".card-text").css("padding-right", "6px");
				
				$(".knowButton").css("font-size", fontSize); 
				$(".knowButton").css("padding", "10px"); 
				$(".back").css("padding", "5px"); 
								
				$(".knowButton").css("font-size", fontSize); 
				$(".knowButton").css("padding", "5px"); 
				$(".back").css("padding", "5px"); 
				
				$(".backHeader").css("padding-left", "6px");
				$(".backHeader").css("padding-top", "6px");
				
				$("img.speaker").css("margin-top", "-4px"); 
				$("img.speaker").css("margin-right", "10px");
				$("img.speaker").css("width", "20px");
				$("img.speaker").css("height", "20px");
				
								
				var left = (parentWidth - $(".cardslider__cards").width()) / 2;		
				$(".cardslider__cards").css("left",left);
			}
			return orientation;
		},
		checkIsDone: function(){
			var done = true;
			this._cards.forEach(function(card) {
				if (card.position == "left"){
					done = false;
				}
			});
			
			if (done){
				swal({
				  title: "Godt klaret!",
				  text: "Du kender nu alle kortene",
				  type: "success",
				  confirmButtonText: "Start forfra"
				},function(){
					storage.remove(instanceId);
					location.reload();
				});
			}
		},
		dontKnowCard: function (){
			var test = $('.'+this._scaleClass);
			test.removeClass(this._scaleClass);
			test.children().removeClass('flipped');
			var that = this;
			setTimeout(function(){ 
			that.nextCard(); }, 120);
			
		},
		knowCard: function(){
			var test = $('.'+this._scaleClass);
			var test2 = $('.'+this._scaleClass).children();
			test2.toggleClass('flipped');
			test.removeClass(this._scaleClass);
			test.addClass("RIGHT");		
			this.nextCard(true);
			this.checkIsDone();
		},
		saveToLocalStorage: function(moveToRight){
			
			if (moveToRight == true && storage != null){
				this.rightStack.push(this._activeCard.gid);
				var myJsonString = JSON.stringify(this.rightStack);
				storage.set(instanceId,myJsonString) 
			}
		},
		loadFromLocalStorage: function(){
			//TODO: Read from local storage by instance ID
			var numbers = storage.get(instanceId);
			if (numbers == null){return;}
			numbers.sort(function(a, b) {
			  return a - b;
			});
			
			var that = this;
			this.rightStack = numbers;
			numbers.forEach(function(number){
				if (that._cards[number] === 'undefined'){
					storage.remove(instanceId);
					location.reload();	
				}
				that._cards[number].elem.classList.add('cardslider__card--out');
				that._cards[number].elem.classList.add('RIGHT');
				that._cards[number].elem.style.zIndex = rightZ;
				rightZ++;
			});
			
			for (var i = numbers.length -1; i >= 0; i--){
				this._cards.splice(numbers[i],1);
			}
			that.normalizeIndexAfterLoad();	
			this.checkIsDone();
			this._activeCard = this._cards[0];	
			
		},
		normalizeIndexAfterLoad: function(){
			
			function compare(a,b) {
			  if (a.index < b.index)
				return -1;
			  if (a.index > b.index)
				return 1;
			  return 0;
			}
			
			var that = this;
			var j = 0;
			for (var i=0; i< that._cards.length; i++){
				var cardClasses = that._cards[i].elem.className;
				cardClasses = cardClasses.replace(/cardslider__card--index-\d|cardslider__card--out/g, '');
				that._cards[i].elem.className = cardClasses.replace('  ',' ').trim();
				that._cards[i].elem.classList.add("cardslider__card--index-"+j);
				that._cards[i].index = j;
				that._cards[i].cardClass = 'cardslider__card--index-' + j;
				j++;
			}
			that._cards.sort(compare);
		},
		nextCard: function(moveToRight = false) {
					
			this.saveToLocalStorage(moveToRight);		
									
			if(this._activeCard.index + 1 < this._cards.length) {
				var newindex = parseInt(this._activeCard.index) +  parseInt(1);
				var oldCard = this._activeCard;
				var newCard = this._cards[newindex];
				var that = this;
				
				// Remove left over animations classes
				this._cards.forEach(function(card) {
						card.elem.classList.remove(that._animationClassFront);
						card.elem.classList.remove(that._animationClassBack);
						card.elem.classList.add('cardslider__card--transitions');
				});
					
				if (moveToRight) {
					oldCard.elem.classList.add('cardslider__card--out');
					oldCard.elem.style.zIndex = rightZ;
					rightZ++;
					this._cards.splice(oldCard.index,1);
					this.reorderIndexRight();
				}else {
					oldCard.elem.classList.remove('cardslider__card--transitions');
					oldCard.elem.classList.add(this._animationClassBack);
					this.reorderIndexLeft(oldCard.index);
				}
				
				this._activeCard = newCard;	
				
			}else {
				var that = this;
				// Remove left over animations classes
				this._cards.forEach(function(card) {
						card.elem.classList.remove(that._animationClassFront);
						card.elem.classList.remove(that._animationClassBack);
						card.elem.classList.add('cardslider__card--transitions');
				});
				
				//LAST CARD
				this._activeCard = this._cards[this._cards.length-1];
				var oldCard = this._activeCard;
				var newindex = parseInt(this._activeCard.index) +  parseInt(1);
				
				if (moveToRight) {
					oldCard.elem.classList.add('cardslider__card--out'); 
					oldCard.elem.style.zIndex = rightZ;
					rightZ++;
					this._cards.splice(oldCard.index,1);
					this.reorderIndexRight(); 
				}else {
					oldCard.elem.classList.remove('cardslider__card--transitions');
					oldCard.elem.classList.add('cardslider__card--transitions');
					oldCard.elem.classList.add(this._animationClassBack);
					
					this.reorderIndexLeft(oldCard.index);
					
				}
				this._activeCard = this._cards[0];	
			}
		},
		reorderIndexRight: function(){
			
			function compare(a,b) {
			  if (a.index < b.index)
				return -1;
			  if (a.index > b.index)
				return 1;
			  return 0;
			}
			
			var that = this;
			for (var i=0; i< that._cards.length; i++){
				if (that._cards[i].index != 0){
					var cardClasses = that._cards[i].elem.className;
					cardClasses = cardClasses.replace(/cardslider__card--index-\d|cardslider__card--out/g, '');
					that._cards[i].elem.className = cardClasses.replace('  ',' ').trim();
					var ind = that._cards[i].index-parseInt(1);
					that._cards[i].elem.classList.add("cardslider__card--index-"+ind);
					that._cards[i].index = ind;
					that._cards[i].cardClass = 'cardslider__card--index-' + ind;
				}else {
					var cardClasses = that._cards[i].elem.className;
					cardClasses = cardClasses.replace(/cardslider__card--index-\d|cardslider__card--out/g, '');
					that._cards[i].elem.className = cardClasses.replace('  ',' ').trim();
					that._cards[i].elem.classList.add("cardslider__card--index-"+0);
					that._cards[i].index = 0;
					that._cards[i].cardClass = 'cardslider__card--index-' + 0;
				}
			}
			that._cards.sort(compare);
		},
		
		reorderIndexLeft: function(index){
			// Helper function to sort by index value
			function compare(a,b) {
			  if (a.index < b.index)
				return -1;
			  if (a.index > b.index)
				return 1;
			  return 0;
			}

			var that = this;
			var selectedflashcard = that._cards[index];
			for (var i=0; i< that._cards.length; i++){
				if (that._cards[i].index != index){
				var cardClasses = that._cards[i].elem.className;
					cardClasses = cardClasses.replace(/cardslider__card--index-\d|cardslider__card--out/g, '');
					that._cards[i].elem.className = cardClasses.replace('  ',' ').trim();
					var ind = that._cards[i].index-parseInt(1);
					that._cards[i].elem.classList.add("cardslider__card--index-"+ind);
					that._cards[i].index = ind;
					that._cards[i].cardClass = 'cardslider__card--index-' + ind;
					//that.setZindex(that._cards[i], ind);
				} else {
					var cardClasses = that._cards[i].elem.className;
					cardClasses = cardClasses.replace(/cardslider__card--index-\d|cardslider__card--out/g, '');
					that._cards[i].elem.className = cardClasses.replace('  ',' ').trim();
					that._cards[i].elem.classList.add(that._cards[that._cards.length-1].cardClass);
					var ind = that._cards.length-parseInt(1);
					that._cards[i].index = that._cards.length-1;
					that._cards[i].cardClass = 'cardslider__card--index-' + ind;
					//that.setZindex(that._cards[i], 0);
				}
			}	
			that._cards.sort(compare);
		},
		setZindex: function(elem, index) {
  			elem.elem.style.zIndex = index;
		},
		destroy: function() {
			var list = this.element.querySelector('.cardslider__cards');
			this.element.className = this.element.className.replace(this.element.className.match(/card.*/g)[0], '');

			list.classList.remove('cardslider__cards');

			this._cards.forEach(function(card) {
				card.elem.className = card.elem.className.replace(card.elem.className.match(/card.*/g)[0], '');
				card.elem.removeAttribute('style');
				card.elem.removeAttribute('aria-hidden');
			});
			
			$("li.cardslider__cards").remove();
			
			$("*").removeClass( "flipped" );
			$("*").removeClass('scale-'+this.settings.direction);
			
			
			this.currentCard = null;
			this._cards = [];
			this._activeCard = null;
     		return this;
		}

	});

	$.fn[ pluginName ] = function( options ) {
		return this.each( function() {
			if ( !$.data( this, pluginName ) ) {
				$.data( this, pluginName, new Plugin( this, options ) );
			}
		} );
	};
}));
