function parallax(){$(document).ready(function(){$("div.bgParallax").each(function(){var e=$(this);$(window).scroll(function(){var t=-($(window).scrollTop()/e.data("speed"));var n="50% "+t+"px";e.css("background-position",n)})})})}function suavidade(){$(function(){var e=$(window);var t=1;var n=120;e.on("mousewheel DOMMouseScroll",function(r){r.preventDefault();var i=r.originalEvent.wheelDelta/120||-r.originalEvent.detail/3;var s=e.scrollTop();var o=s-parseInt(i*n);TweenMax.to(e,t,{scrollTo:{y:o,autoKill:true},ease:Power1.easeOut,autoKill:true,overwrite:5})})})}function scroll(){$(function(){function e(e){return e.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")}function r(e){for(var t=0,n=arguments.length;t<n;t++){var r=arguments[t],i=$(r);if(i.scrollTop()>0){return r}else{i.scrollTop(1);var s=i.scrollTop()>0;i.scrollTop(0);if(s){return r}}}return[]}var t=e(location.pathname);var n=r("html","body");$("a[href*=#]").each(function(){var r=e(this.pathname)||t;if(t==r&&(location.hostname==this.hostname||!this.hostname)&&this.hash.replace(/#/,"")){var i=$(this.hash),s=this.hash;if(s){var o=i.offset().top;$(this).click(function(e){e.preventDefault();$(n).animate({scrollTop:o},400,function(){location.hash=s})})}}})})}