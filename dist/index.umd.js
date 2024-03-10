!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("isomorphic-unfetch")):"function"==typeof define&&define.amd?define(["isomorphic-unfetch"],r):(t||self).sdkMovies=r(t.isomorphicUnfetch)}(this,function(t){function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=/*#__PURE__*/r(t);function n(){return n=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},n.apply(this,arguments)}function o(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,i(t,r)}function i(t,r){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},i(t,r)}var c=/*#__PURE__*/function(){function t(t){this.apikey=void 0,this.baseUrl=void 0,this.apikey=t.apiKey,this.baseUrl=t.baseUrl||"https://search.imdbot.workers.dev/"}return t.prototype.invoke=function(t,r,o){try{var i=""+this.baseUrl+t+"?"+r,c=n({headers:{"Content-Type":"application/json","x-api-key":this.apikey}},o);return Promise.resolve(e.default(i,c)).then(function(t){if(t.ok)return t.json();throw new Error(t.statusText)})}catch(t){return Promise.reject(t)}},t}();function u(t,r){try{var e=t()}catch(t){return r(t)}return e&&e.then?e.then(void 0,r):e}function s(t,r,e){if(!t.s){if(e instanceof f){if(!e.s)return void(e.o=s.bind(null,t,r));1&r&&(r=e.s),e=e.v}if(e&&e.then)return void e.then(s.bind(null,t,r),s.bind(null,t,2));t.s=r,t.v=e;var n=t.o;n&&n(t)}}var a,f=/*#__PURE__*/function(){function t(){}return t.prototype.then=function(r,e){var n=new t,o=this.s;if(o){var i=1&o?r:e;if(i){try{s(n,1,i(this.v))}catch(t){s(n,2,t)}return n}return this}return this.o=function(t){try{var o=t.v;1&t.s?s(n,1,r?r(o):o):e?s(n,1,e(o)):s(n,2,o)}catch(t){s(n,2,t)}},n},t}(),h=/*#__PURE__*/function(t){function r(){return t.apply(this,arguments)||this}o(r,t);var e=r.prototype;return e.search=function(t){try{return Promise.resolve(this.invoke("","q="+t)).then(function(t){var r=t.description;return{ok:t.ok,error_code:t.error_code,movies:null==r?void 0:r.map(function(t){return{title:t["#TITLE"],year:t["#YEAR"],imdbId:t["#IMDB_ID"],rank:t["#RANK"],actors:t["#ACTORS"],aka:t["#AKA"],imdbUrl:t["#IMDB_URL"],imdbIv:t["#IMDB_IV"],imgPoster:t["#IMG_POSTER"],photo_width:t.photo_width,photo_height:t.photo_height}})}})}catch(t){return Promise.reject(t)}},e.getMovieDetails=function(t){try{var r=this;return Promise.resolve(u(function(){return Promise.resolve(r.invoke("","tt="+t)).then(function(r){var e=r.short;return{details:{url:e.url,name:e.name,description:e.description,imageUrl:e.image,review:e.review,genres:e.genre,keywords:e.keywords,actors:e.actor,director:e.director,duration:e.duration,id:t,rating:e.contentRating},error_code:"200",ok:!0}})},function(){return{error_code:"400",ok:!1,details:null}}))}catch(t){return Promise.reject(t)}},e.getRandomMovies=function(t){void 0===t&&(t=10);try{var r=this,e="400";return Promise.resolve(u(function(){var n;function o(){return{ok:!0,movies:l.sort(function(t,r){return t.title-r.title}).slice(0,t),error_code:e}}var i,c,u,a,h,p,d=function(t){for(var r="",e=0;e<5;)r+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(Math.floor(52*Math.random())),e+=1;return r.split("")}(),l=[],v=(i=d,c=function(o){return Promise.resolve(r.search(d[o])).then(function(r){r.ok&&(l.push.apply(l,r.movies),l.length>=t&&(e="200",n=1))})},u=function(){return n},p=-1,function t(r){try{for(;++p<i.length&&(!u||!u());)if((r=c(p))&&r.then){if(!((e=r)instanceof f&&1&e.s))return void r.then(t,h||(h=s.bind(null,a=new f,2)));r=r.v}a?s(a,1,r):a=r}catch(t){s(a||(a=new f),2,t)}var e}(),a);return v&&v.then?v.then(o):o()},function(){return{ok:!0,movies:null,error_code:e}}))}catch(t){return Promise.reject(t)}},r}(c),p=/*#__PURE__*/function(t){function r(){return t.apply(this,arguments)||this}return o(r,t),r}(c);return a=p,[h].forEach(function(t){Object.getOwnPropertyNames(t.prototype).forEach(function(r){Object.defineProperty(a.prototype,r,Object.getOwnPropertyDescriptor(t.prototype,r))})}),p});