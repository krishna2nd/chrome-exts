;(function(){var g=/&/g,h=/</g,l=/>/g,m=/"/g,n=/'/g,q=/\x00/g,r=/[\x00&<>"']/;function t(a,b){var e={},c;for(c in a)e[c]=b.call(void 0,a[c],c,a);return e};function u(){this.data={};this.a="en";this.g=!1;this.f="";this.c=/\{(\S+?)\}/gm}this.i18n||(this.i18n=new u);u.prototype.setData=function(a,b){var e=this.data,c=typeof e;if("object"==c&&null!=e||"function"==c)for(var f in a)e[f]=a[f];else this.data=a;this.a=b||"en"};u.prototype.getLanguage=function(){return this.a};u.prototype.setDebug=function(a,b){this.g=a;b&&(this.f=b.split("").filter(function(a){return/[\w \.!@#$%^&*\?]/.test(a)}).join(""))};
u.prototype.getInLocale=function(a,b,e,c){b=a+"--"+b;e=e&&t(e,function(b){return"number"==typeof b?new I18nFormattedNumber(b,a,{}):b instanceof I18nFormattedNumber?new I18nFormattedNumber(b.value,a,b.b):b});c=this.get(b,e,c);return c==b?null:c};
u.prototype.get=function(a,b,e){b=b||{};if("count"in b){var c=b.count;if("number"==typeof c||c instanceof I18nFormattedNumber){var f=a;c=c instanceof I18nFormattedNumber?c.value:c;var k=this.a.split("-")[0].toLowerCase();f=k in v?v[k].call(this,f,c):w.call(this,f,c);f in this.data&&(a=f)}}if(!(a in this.data))return a;a=this.data[a];this.g&&(a=x(this,a));if(f=a.match(this.c))for(c=0;c<f.length;c++){k=f[c];var p=k.replace(this.c,"$1"),d=p;p in b&&(d=b[p],d instanceof I18nSafeString?d=d.value:d instanceof
I18nFormattedNumber?d=d.toString():"number"==typeof d?d=d.toLocaleString(this.a,{useGrouping:!1}):(d=""+d,r.test(d)&&(-1!=d.indexOf("&")&&(d=d.replace(g,"&amp;")),-1!=d.indexOf("<")&&(d=d.replace(h,"&lt;")),-1!=d.indexOf(">")&&(d=d.replace(l,"&gt;")),-1!=d.indexOf('"')&&(d=d.replace(m,"&quot;")),-1!=d.indexOf("'")&&(d=d.replace(n,"&#39;")),-1!=d.indexOf("\x00")&&(d=d.replace(q,"&#0;")))));k=new RegExp(k.replace(/\{/gm,"\\{").replace(/\}/gm,"\\}"));a=a.replace(k,d.replace(/\$/g,"$$$$"))}e=e||[];for(b=
0;b<e.length;b++)(f=a.match(new RegExp("<w"+b+">(.*)</w"+b+">")))&&(a=a.replace(f[0],e[b].replace("{}",f[1])));return a=a.replace(/<\/?w\d+>/g,"")};u.prototype.formatNumber=function(a,b){return new I18nFormattedNumber(a,this.a,b)};
function x(a,b){function e(a,b){for(var d=a[0],c=0;c<a.length-1;c++)d+=b[c]+a[c+1];return d}function c(a,b){return b.reduce(function(a,b){var d=a.pop(),c=d.indexOf(b);a.push(d.substr(0,c));a.push(d.substr(c+b.length));return a},[a])}var f=b.match(/<\/?w\d+>/g)||[];b=c(b,f).map(function(b){var f=b.match(a.c)||[];b=c(b,f).map(function(b){return b.replace(/\S/g,a.f)});return e(b,f)});return e(b,f)}function w(a,b){return a+[".one",".other"][1==b?0:1]}
var v={de:w,en:w,es:w,fr:function(a,b){return a+[".one",".other"][1>=b?0:1]},ja:function(a){return a+".other"},nl:w,pt:w,ru:function(a,b){return 1==b%10&&11!=b%100?a+".one":2<=b%10&&4>=b%10&&(10>b%100||20<=b%100)?a+".few":a+".many"},zh:function(a){return a+".other"}},y=I18nSafeString=function(a){this.value=a},z=["I18nSafeString"],A=this;z[0]in A||!A.execScript||A.execScript("var "+z[0]);for(var B;z.length&&(B=z.shift());)z.length||void 0===y?A=A[B]&&A[B]!==Object.prototype[B]?A[B]:A[B]={}:A[B]=y;
I18nFormattedNumber=function(a,b,e){this.value=+a;this.a=b;a={};for(var c in e)a[c]=e[c];this.b=a;"undefined"==typeof this.b.useGrouping&&(this.b.useGrouping=!1)};I18nFormattedNumber.prototype.toString=function(){return this.value.toLocaleString(this.a,this.b)};
})();