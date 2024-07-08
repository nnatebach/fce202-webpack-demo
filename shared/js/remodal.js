function lockBody(){offsetY=window.pageYOffset,$("body").css({position:"fixed",width:"100%",top:-offsetY+"px"})}function unlockBody(){$("body").css("position","static"),$(window).scrollTop(offsetY)}!function(t,e){"function"==typeof define&&define.amd?define(["jquery"],(function(a){return e(t,a)})):"object"==typeof exports?e(t,require("jquery")):e(t,t.jQuery||t.Zepto)}(this,(function(t,e){"use strict";var a,o,n,i="remodal",s=t.REMODAL_GLOBALS&&t.REMODAL_GLOBALS.NAMESPACE||i,r=e.map(["animationstart","webkitAnimationStart","MSAnimationStart","oAnimationStart"],(function(t){return t+"."+s})).join(" "),d=e.map(["animationend","webkitAnimationEnd","MSAnimationEnd","oAnimationEnd"],(function(t){return t+"."+s})).join(" "),l=e.extend({hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnOutsideClick:!0,modifier:"",appendTo:null},t.REMODAL_GLOBALS&&t.REMODAL_GLOBALS.DEFAULTS),c="closing",m="closed",p="opening",u="opened",f="confirmation",g="cancellation",h=void 0!==(a=document.createElement("div").style).animationName||void 0!==a.WebkitAnimationName||void 0!==a.MozAnimationName||void 0!==a.msAnimationName||void 0!==a.OAnimationName,v=/iPad|iPhone|iPod/.test(navigator.platform);function y(t){if(h&&"none"===t.css("animation-name")&&"none"===t.css("-webkit-animation-name")&&"none"===t.css("-moz-animation-name")&&"none"===t.css("-o-animation-name")&&"none"===t.css("-ms-animation-name"))return 0;var e,a,o,n,i=t.css("animation-duration")||t.css("-webkit-animation-duration")||t.css("-moz-animation-duration")||t.css("-o-animation-duration")||t.css("-ms-animation-duration")||"0s",s=t.css("animation-delay")||t.css("-webkit-animation-delay")||t.css("-moz-animation-delay")||t.css("-o-animation-delay")||t.css("-ms-animation-delay")||"0s",r=t.css("animation-iteration-count")||t.css("-webkit-animation-iteration-count")||t.css("-moz-animation-iteration-count")||t.css("-o-animation-iteration-count")||t.css("-ms-animation-iteration-count")||"1";for(i=i.split(", "),s=s.split(", "),r=r.split(", "),n=0,a=i.length,e=Number.NEGATIVE_INFINITY;n<a;n++)(o=parseFloat(i[n])*parseInt(r[n],10)+parseFloat(s[n]))>e&&(e=o);return e}function $(){if(e(document).height()<=e(window).height())return 0;var t,a,o=document.createElement("div"),n=document.createElement("div");return o.style.visibility="hidden",o.style.width="100px",document.body.appendChild(o),t=o.offsetWidth,o.style.overflow="scroll",n.style.width="100%",o.appendChild(n),a=n.offsetWidth,o.parentNode.removeChild(o),t-a}function w(){if(!v){var t,a,o=e("html"),n=A("is-locked");o.hasClass(n)&&(a=e(document.body),t=parseInt(a.css("padding-right"),10)-$(),a.css("padding-right",t+"px"),o.removeClass(n))}}function C(t,e,a,o){var n=A("is",e),i=[A("is",c),A("is",p),A("is",m),A("is",u)].join(" ");t.$bg.removeClass(i).addClass(n),t.$overlay.removeClass(i).addClass(n),t.$wrapper.removeClass(i).addClass(n),t.$modal.removeClass(i).addClass(n),t.state=e,!a&&t.$modal.trigger({type:e,reason:o},[{reason:o}])}function k(t,a,o){var n=0,i=function(t){t.target===this&&n++},s=function(t){t.target===this&&0==--n&&(e.each(["$bg","$overlay","$wrapper","$modal"],(function(t,e){o[e].off(r+" "+d)})),a())};e.each(["$bg","$overlay","$wrapper","$modal"],(function(t,e){o[e].on(r,i).on(d,s)})),t(),0===y(o.$bg)&&0===y(o.$overlay)&&0===y(o.$wrapper)&&0===y(o.$modal)&&(e.each(["$bg","$overlay","$wrapper","$modal"],(function(t,e){o[e].off(r+" "+d)})),a())}function b(t){t.state!==m&&(e.each(["$bg","$overlay","$wrapper","$modal"],(function(e,a){t[a].off(r+" "+d)})),t.$bg.removeClass(t.settings.modifier),t.$overlay.removeClass(t.settings.modifier).hide(),t.$wrapper.hide(),w(),C(t,m,!0))}function A(){for(var t=s,e=0;e<arguments.length;++e)t+="-"+arguments[e];return t}function O(){var t,a,n=location.hash.replace("#","");if(n){try{a=e('[data-remodal-id="'+n+'"]')}catch(t){}a&&a.length&&(t=e.remodal.lookup[a.data(i)])&&t.settings.hashTracking&&(t.open(),lockBody())}else o&&o.state===u&&o.settings.hashTracking&&o.close()}function T(t,a){var o=e(document.body),n=this;n.settings=e.extend({},l,a),n.index=e.remodal.lookup.push(n)-1,n.state=m,n.$overlay=e("."+A("overlay")),null!==n.settings.appendTo&&n.settings.appendTo.length&&(o=e(n.settings.appendTo)),n.$overlay.length||(n.$overlay=e("<div>").addClass(A("overlay")+" "+A("is",m)).hide(),o.append(n.$overlay)),n.$bg=e("."+A("bg")).addClass(A("is",m)),n.$modal=t.addClass(s+" "+A("is-initialized")+" "+n.settings.modifier+" "+A("is",m)).attr("tabindex","-1"),n.$wrapper=e("<div>").addClass(A("wrapper")+" "+n.settings.modifier+" "+A("is",m)).hide().append(n.$modal),o.append(n.$wrapper),n.$wrapper.on("click."+s,'[data-remodal-action="close"]',(function(t){t.preventDefault(),n.close(),e("[data-remodal-target]").removeClass("active"),unlockBody()})),n.$wrapper.on("click."+s,'[data-remodal-action="cancel"]',(function(t){t.preventDefault(),n.$modal.trigger(g),n.settings.closeOnCancel&&(n.close(g),e("[data-remodal-target]").removeClass("active"),unlockBody())})),n.$wrapper.on("click."+s,'[data-remodal-action="confirm"]',(function(t){t.preventDefault(),n.$modal.trigger(f),n.settings.closeOnConfirm&&(n.close(f),e("[data-remodal-target]").removeClass("active"),unlockBody())})),n.$wrapper.on("click."+s,(function(t){e(t.target).hasClass(A("wrapper"))&&n.settings.closeOnOutsideClick&&(n.close(),e("[data-remodal-target]").removeClass("active"),unlockBody())}))}T.prototype.open=function(){var t,a=this;a.state!==p&&a.state!==c&&((t=a.$modal.attr("data-remodal-id"))&&a.settings.hashTracking&&(n=e(window).scrollTop(),location.hash=t),o&&o!==a&&b(o),o=a,function(){if(!v){var t,a,o=e("html"),n=A("is-locked");o.hasClass(n)||(a=e(document.body),t=parseInt(a.css("padding-right"),10)+$(),a.css("padding-right",t+"px"),o.addClass(n))}}(),a.$bg.addClass(a.settings.modifier),a.$overlay.addClass(a.settings.modifier).show(),a.$wrapper.show().scrollTop(0),a.$modal.focus(),k((function(){C(a,p)}),(function(){C(a,u)}),a))},T.prototype.close=function(t){var a=this;a.state!==p&&a.state!==c&&a.state!==m&&(a.settings.hashTracking&&a.$modal.attr("data-remodal-id")===location.hash.substr(1)&&(location.hash="",e(window).scrollTop(n)),k((function(){C(a,c,!1,t)}),(function(){a.$bg.removeClass(a.settings.modifier),a.$overlay.removeClass(a.settings.modifier).hide(),a.$wrapper.hide(),w(),C(a,m,!1,t)}),a))},T.prototype.getState=function(){return this.state},T.prototype.destroy=function(){var t=e.remodal.lookup;b(this),this.$wrapper.remove(),delete t[this.index],0===e.grep(t,(function(t){return!!t})).length&&(this.$overlay.remove(),this.$bg.removeClass(A("is",c)+" "+A("is",p)+" "+A("is",m)+" "+A("is",u)))},e.remodal={lookup:[]},e.fn.remodal=function(t){var a,o;return this.each((function(n,s){null==(o=e(s)).data(i)?(a=new T(o,t),o.data(i,a.index),a.settings.hashTracking&&o.attr("data-remodal-id")===location.hash.substr(1)&&(a.open(),lockBody())):a=e.remodal.lookup[o.data(i)]})),a},e(document).ready((function(){e(document).on("click","[data-remodal-target]",(function(t){t.preventDefault();var a=t.currentTarget.getAttribute("data-remodal-target"),o=e('[data-remodal-id="'+a+'"]');e(this).addClass("active"),lockBody(),e.remodal.lookup[o.data(i)].open()})),e(document).find("."+s).each((function(t,a){var o=e(a),n=o.data("remodal-options");n?("string"==typeof n||n instanceof String)&&(n=function(t){var e,a,o,n,i={};for(n=0,a=(e=(t=t.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,",")).split(",")).length;n<a;n++)e[n]=e[n].split(":"),("string"==typeof(o=e[n][1])||o instanceof String)&&(o="true"===o||"false"!==o&&o),("string"==typeof o||o instanceof String)&&(o=isNaN(o)?o:+o),i[e[n][0]]=o;return i}(n)):n={},o.remodal(n)})),e(document).on("keydown."+s,(function(t){o&&o.settings.closeOnEscape&&o.state===u&&27===t.keyCode&&o.close()})),e(window).on("hashchange."+s,O)}))}));