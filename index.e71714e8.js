const e={headers:{"x-api-key":"live_oco9x8YMDUogCKhdS7HWndmzEKKtYDTxBCgIu1bWIuyFPmWOKJqUYmA2eIrffrNG"}},t=function(){return fetch(" https://api.thecatapi.com/v1/breeds",e).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))},n=function(t){return fetch(` https://api.thecatapi.com/v1/images/search?breed_ids=${t}`,e).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))};console.log("чаокаока");const o={selectCheck:document.querySelector(".breed-select"),loadingData:document.querySelector(".loader"),errData:document.querySelector(".error"),container:document.querySelector(".cat-info")};console.dir(o.selectCheck),o.selectCheck.addEventListener("change",(function(e){const t=e.currentTarget.value;console.log(t),n(t).then((e=>{console.log(e),o.container.innerHTML=function(e){const t=e[0].breeds,n=e[0].url;return t.map((({name:e,temperament:t,description:o,id:r})=>`<img src="${n}" alt="${e}" />\n                  <div class="cat-info-text">\n                   <h2>${e}</h2>\n                  <p> ${o}</p>\n                    <h3>Temperament</h3>\n                    <p> ${t}</p>\n               </div>`)).join("")}(e)}))})),console.log(t()),t().then((e=>{console.dir(...e),console.dir({data:e}),dataImg=e.filter((e=>{var t;return null!=(null===(t=e.image)||void 0===t?void 0:t.url)}));for(let e=0;e<dataImg.length;e++){const t=dataImg[e];let n=document.createElement("option");t.image&&(n.value=t.id,n.innerHTML=t.name,o.selectCheck.append(n))}})).catch((e=>console.log(e))),console.log(n());n("beng").then((e=>{console.log(e)}));
//# sourceMappingURL=index.e71714e8.js.map