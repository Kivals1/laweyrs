!function(){var e,t,n,o;e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),n=document.querySelectorAll(".mob-list__link"),o=function(){var n="true"===e.getAttribute("aria-expanded")||"false";e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!n),t.classList.toggle("is-open"),document.body.classList.toggle("modal-open")},e.addEventListener("click",(function(){o();for(var e=0;e<n.length;e++)n[e].onclick=function(e){e.preventDefault(),o()}}));var c=document.querySelector(".panel"),l=document.querySelector(".btn--servicess"),a=c.querySelector(".button-close");l.addEventListener("click",(function(){c.classList.add("panel--show")})),a.addEventListener("click",(function(){c.classList.remove("panel--show")}))}();
//# sourceMappingURL=index.175fb355.js.map
