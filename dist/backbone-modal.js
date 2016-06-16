define(["lodash","backbone","jquery"],function(t,e,i){return function(t){function e(o){if(i[o])return i[o].exports;var n=i[o]={exports:{},id:o,loaded:!1};return t[o].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){var o;o=function(t,e,o){i(1),i(5),o.exports=i(7)}.call(e,i,e,t),!(void 0!==o&&(t.exports=o))},function(t,e){},,,,function(t,e){},,function(t,e,i){var o;o=function(t,e,o){"use strict";var n=i(8),r=i(9),a=i(10),s=i(15),d=i(17),l=i(19),c=i(22),h=i(24),u=["Cancel","Keyboard","CheckPosition","DragStop","DragMove","Remove","ResizeMove","ResizeStop"],m=["Show","Hide","Resize","Drag"],p=r.View.extend(a).extend(s).extend(d).extend(c).extend(l).extend(h).extend({attributes:{"class":"mw__container"},events:{"click.modal .js-m-cancel:not(.is-disabled)":"modalCancel","click.modal .js-m-close:not(.is-disabled)":"modalCancel","click.modal .js-m-ok:not(.is-disabled)":"modalOk","mousedown.modal .js-m-draggable":"modalDragStart","mousedown.modal .js-m-resize-handle":"modalResizeStart"},modalHasBackground:!0,modalCloseOnOk:!0,modalIsResizeable:!1,initialize:function(){u.map(function(t){return"modal"+t}).forEach(function(t){this[t]=this[t].bind(this)},this),m.map(function(t){return"modalOn"+t}).forEach(function(t){this[t]&&n.isFunction(this[t])?this[t]=this[t].bind(this):this[t]=n.identity},this)},modalSerialize:function(){return{}},modalOk:function(){this.modalValidate()&&(this.trigger("modal-close",this.modalSerialize(),this),this.modalCloseOnOk&&this.remove())},modalCancel:function(){this.trigger("modal-close",!1,this),this.remove()}});p.extend=function(t){var e,i=t.render,o=t.initialize,a=t.remove;if(!i||!n.isFunction(i))throw new Error('View must have "render" function declared.');return e=r.View.extend.apply(this,arguments),e.prototype.events=n.extend({},this.prototype.events,t.events),e.prototype.render=function(t){return i.call(this,t),p.prototype.render.call(this,t),this.modalOnShow(),this},o&&n.isFunction(o)&&(e.prototype.initialize=function(t){return p.prototype.initialize.call(this,t),o.call(this,t)}),a&&n.isFunction(a)&&(e.prototype.remove=function(t){return p.prototype.remove.call(this,t),a.call(this,t)}),e},o.exports=p}.call(e,i,e,t),!(void 0!==o&&(t.exports=o))},function(e,i){e.exports=t},function(t,i){t.exports=e},function(t,e,i){var o;o=function(t,e,o){"use strict";var n=i(11),r=i(12),a=n(window);o.exports={modalDragStart:function(t){var e=r.getDragData(t,this.$el);this.$el.parent().addClass("mw-move"),a.one("mouseup.mw__drag",e,this.modalDragStop).on("mousemove.mw__drag",e,this.modalDragMove)},modalDragMove:function(t){this.$el.css(r.getDragChange(t,t.data)),this.modalOnDrag(t,t.data)},modalDragStop:function(t){a.off(".mw__drag"),this.$el.css(r.getDragChange(t,t.data)).parent().removeClass("mw-move"),this.modalOnDrag(t,t.data)}}}.call(e,i,e,t),!(void 0!==o&&(t.exports=o))},function(t,e){t.exports=i},function(t,e,i){var o;o=function(t,e,o){"use strict";var n=i(13),r=i(14);o.exports={getDragData:function(t,e){var i=e[0].getBoundingClientRect(),o=n(e);return{padX:t.pageX-i.left,padY:t.pageY-i.top,left:o.left,right:o.width-i.width+o.left,top:o.top,bottom:o.height-i.height+o.top}},getDragChange:function(t,e){return{top:r(t.pageY-e.padY,e.top,e.bottom),left:r(t.pageX-e.padX,e.left,e.right)}}}}.call(e,i,e,t),!(void 0!==o&&(t.exports=o))},function(t,e,i){var o;o=function(t,e,i){"use strict";i.exports=function(t){var e=t.siblings(".mw__background");return e.length?e[0].getBoundingClientRect():{top:0,left:0,width:window.innerWidth,height:window.innerHeight}}}.call(e,i,e,t),!(void 0!==o&&(t.exports=o))},function(t,e,i){var o;o=function(t,e,i){"use strict";i.exports=function(t,e,i){return Math.round(t>i?i:e>t?e:t)}}.call(e,i,e,t),!(void 0!==o&&(t.exports=o))},function(t,e,i){var o;o=function(t,e,o){"use strict";var n=i(11),r=i(16);o.exports={modalKeyboard:function(t){return 27!==t.which&&13!==t.which||r(t)||n(".mw__wrapper.mw--open").last().children(".mw__container")[0]!==this.el?void 0:(27===t.which?this.modalCancel():this.modalOk(),t.stopImmediatePropagation(),t.preventDefault(),!1)}}}.call(e,i,e,t),!(void 0!==o&&(t.exports=o))},function(t,e,i){var o;o=function(t,e,i){"use strict";i.exports=function(t){var e,i,o=t.srcElement||t.target;if(!o.readOnly&&!o.disabled){if(i=o.tagName.toUpperCase(),"TEXTAREA"===i)return!0;if("INPUT"===i)return e=o.type.toUpperCase(),"TEXT"===e||"PASSWORD"===e||"FILE"===e}return!1}}.call(e,i,e,t),!(void 0!==o&&(t.exports=o))},function(t,e,i){var o;o=function(t,e,o){"use strict";var n=i(18);o.exports={modalCheckPosition:function(){this.$el.css(n.getPositionChange(this.$el))},modalCenter:function(){this.$el.css(n.getCenter(this.$el))},modalSetPosition:function(t,e,i){return this.$el.css(n.getSetPosition(this.$el,t,e,i)),this}}}.call(e,i,e,t),!(void 0!==o&&(t.exports=o))},function(t,e,i){var o;o=function(t,e,o){"use strict";function n(t,e,i,o,n){var r;switch(e){case"left":case"top":r=i+o;break;case"right":case"bottom":r=-i;break;case"center":r=o/2;break;default:r=t>(n-o)/2&&(n+o)/2>t?o/2:n/2>t?-i:i+o}return a(t-r,i,n-o-i)}var r=i(8),a=i(14),s=i(13);o.exports={getPositionChange:function(t){var e=t[0].getBoundingClientRect(),i=s(t);return{top:a(e.top,0,i.top+i.height-e.height,0),left:a(e.left,0,i.left+i.width-e.width,0)}},getCenter:function(t){var e=t[0].getBoundingClientRect(),i=s(t);return{top:Math.round(i.top+(i.height-e.height)/2),left:Math.round(i.left+(i.width-e.width)/2)}},getSetPosition:function(t,e,i,o){o=r.extend({horizontal:"auto",vertical:"auto",padding:10},o);var a=t[0].getBoundingClientRect(),d=s(t);return{top:n(i,o.vertical,o.padding,a.height,d.height),left:n(e,o.horizontal,o.padding,a.width,d.width)}}}}.call(e,i,e,t),!(void 0!==o&&(t.exports=o))},function(t,e,i){var o;o=function(t,e,o){"use strict";var n=i(11),r=i(20),a=n("body"),s=n(window);o.exports={modalResizeRenderHandles:function(){this.$(".js-m-resize-handlers").off().remove(),this.$el.append(r.template)},modalResizeStart:function(t){var e=n(t.currentTarget),i=r.getResizeData(e,this.$el);return a.css("cursor",e.css("cursor")),s.on("mousemove.mw__resize",i,this.modalResizeMove).one("mouseup.mw__resize",i,this.modalResizeStop),this},modalResizeMove:function(t){var e=t.data;this.$el.css(r[e.dir](t,e)),this.modalOnResize(t,e)},modalResizeStop:function(t){s.off("mousemove.mw__resize"),a.css("cursor",""),this.modalOnResize(t,t.data)}}}.call(e,i,e,t),!(void 0!==o&&(t.exports=o))},function(t,e,i){var o;o=function(t,e,o){"use strict";var n=i(8),r=i(14),a=i(13),s=i(21),d=n.template(s);o.exports={template:d,getResizeData:function(t,e){var i=e[0].getBoundingClientRect(),o=a(e),n=parseInt(e.css("min-height"),10),r=parseInt(e.css("min-width"),10);return{dir:t.attr("data-dir"),top:i.top,left:i.left,right:i.right,bottom:i.bottom,ww:o.width,wh:o.height,nHeight:i.bottom-n,sHeight:i.top+n,wWidth:i.right-r,eWidth:i.left+r,minHeight:n,minWidth:r}},N:function(t,e){var i=r(t.pageY,0,e.nHeight);return{top:i,height:e.bottom-i}},S:function(t,e){return{height:r(t.pageY,e.sHeight,e.wh)-e.top}},W:function(t,e){var i=r(t.pageX,0,e.wWidth);return{left:i,width:e.right-i}},E:function(t,e){return{width:r(t.pageX,e.wWidth,e.ww)-e.left}},NE:function(t,e){var i=r(t.pageY,0,e.nHeight);return{top:i,height:e.bottom-i,width:r(t.pageX,e.eWidth,e.ww)-e.left}},SE:function(t,e){return{width:r(t.pageX,e.eWidth,e.ww)-e.left,height:r(t.pageY,e.sHeight,e.wh)-e.top}},SW:function(t,e){var i=r(t.pageX,0,e.wWidth);return{left:i,width:e.right-i,height:r(t.pageY,e.sHeight,e.wh)-e.top}},NW:function(t,e){var i=r(t.pageY,0,e.nHeight),o=r(t.pageX,0,e.wWidth);return{left:o,top:i,width:e.right-o,height:e.bottom-i}}}}.call(e,i,e,t),!(void 0!==o&&(t.exports=o))},function(t,e){t.exports="<div class=\"modal__resize-handlers js-m-resize-handlers\">\r\n  <% ['N', 'E', 'S', 'W', 'NE', 'SW', 'NW', 'SE'].forEach(function(handler){ %>\r\n    <div class=\"modal__resize-handler js-m-resize-handle\" data-dir=\"<%= handler %>\" />\r\n  <%}) %>\r\n</div>\r\n"},function(t,e,i){var o;o=function(t,e,o){"use strict";var n=i(11),r=i(9),a=i(23),s=n(window);o.exports={render:function(){this.modalIsResizeable&&this.modalResizeRenderHandles();var t=this.$el.parent();t.length&&t.hasClass("mw__wrapper")||(t=n('<div class="mw__wrapper"/>'),this.modalHasBackground&&t.append(n('<div class="mw__background"/>').on("click",this.modalCancel)),t.append(this.$el.addClass("mw__container")).appendTo("body").addClass("mw--open"),this.modalCenter(),s.on("keydown.mw__keybinds-"+this.cid,this.modalKeyboard).on("resize.mw__resize-"+this.cid,this.modalCheckPosition))},remove:function(){this.removed||(this.removed=!0,s.off("keydown.mw__keybinds-"+this.cid).off("resize.mw__resize-"+this.cid),this.$el.parent().removeClass("mw--open").addClass("mw--close"),setTimeout(this.modalRemove,300))},modalRemove:function(){var t=this.$el.parent();return this.modalOnHide(),r.View.prototype.remove.apply(this,arguments),t.remove(),a(this),this.removed=!0,this}}}.call(e,i,e,t),!(void 0!==o&&(t.exports=o))},function(t,e,i){var o;o=function(t,e,o){"use strict";function n(t){if(!r.isObject(t))return!1;for(var e in t)t.hasOwnProperty(e)&&(t[e]=null);return!0}var r=i(8);o.exports=n}.call(e,i,e,t),!(void 0!==o&&(t.exports=o))},function(t,e,i){var o;o=function(t,e,i){"use strict";i.exports={modalLock:function(t){return this.modalLockToggle(!0,t)},modalUnlock:function(t){return this.modalLockToggle(!1,!t)},modalLockToggle:function(t,e){return this.$(".js-m-ok").toggleClass("is-disabled",e),this.$(".js-m-content").toggleClass("is-disabled",t),this},modalValidate:function(){var t=this.modalIsValid();return this.$(".js-m-ok").toggleClass("is-disabled",!t),t},modalIsValid:function(){return!this.$(".has-error").length}}}.call(e,i,e,t),!(void 0!==o&&(t.exports=o))}])});