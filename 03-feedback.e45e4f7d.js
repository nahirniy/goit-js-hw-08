function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return c.Date.now()};function p(e,t,n){var i,o,r,u,a,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,l=t,u=e.apply(r,n)}function j(e){return l=e,a=setTimeout(w,t),c?y(e):u}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function w(){var e=m();if(h(e))return O(e);a=setTimeout(w,function(e){var n=t-(e-f);return s?v(n,r-(e-l)):n}(e))}function O(e){return a=void 0,p&&i?y(e):(i=o=void 0,u)}function T(){var e=m(),n=h(e);if(i=arguments,o=this,f=e,n){if(void 0===a)return j(f);if(s)return a=setTimeout(w,t),y(f)}return void 0===a&&(a=setTimeout(w,t)),u}return t=b(t)||0,g(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=f=o=a=void 0},T.flush=function(){return void 0===a?u:O(m())},T}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:i,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),{email:j,message:h}=y.elements,w=JSON.parse(localStorage.getItem("feedback-form-state"));var O,T;j.value=null!==(O=w.email)&&void 0!==O?O:"",h.value=null!==(T=w.message)&&void 0!==T?T:"",console.log(w),y.addEventListener("submit",(function(e){e.preventDefault(),console.log(w),y.reset()})),y.addEventListener("input",e(t)((function(){const e={email:j.value,message:h.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500));
//# sourceMappingURL=03-feedback.e45e4f7d.js.map
