var Parallax;!function(t){var n=function(){function t(t,n){var r=this;this.perspective=n,this.surface=[],this.content=t,$(t).scroll(function(t){r.onContainerScroll(t)})}return t.prototype.onContainerScroll=function(t){for(var n=$(this.content).scrollTop(),r=1,e=0;e<this.surface.length;e++){var o=this.surface[e],a=-(n*r);o.currentY=a,r*=this.perspective}},t.prototype.addSurface=function(t){this.surface.push(t)},t}();t.ParallaxContainer=n;var r=function(){function t(t){this.content=t}return Object.defineProperty(t.prototype,"currentY",{get:function(){return-$(this.content).css("margin-top")},set:function(t){$(this.content).css({marginTop:t})},enumerable:!0,configurable:!0}),t}();t.ParallaxSurface=r}(Parallax||(Parallax={}));