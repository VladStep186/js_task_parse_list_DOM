var r,e=document.querySelector("ul");function a(r){return Number(r.replace(/[$,]/g,""))}(r=Array.from(e.children)).sort(function(r,e){return a(e.dataset.salary)-a(r.dataset.salary)}),r.forEach(function(r){return e.appendChild(r)});
//# sourceMappingURL=index.1bbfbc47.js.map
