!function(t){var r={};function e(i){if(r[i])return r[i].exports;var n=r[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}e.m=t,e.c=r,e.d=function(t,r,i){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var n in t)e.d(i,n,function(r){return t[r]}.bind(null,n));return i},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=3)}([function(t,r){t.exports=function(){this.x=Math.floor(9*Math.random()),this.y=Math.floor(9*Math.random())}},function(t,r){t.exports=function(){this.x=0,this.y=0,this.direction="right"}},function(t,r,e){var i=e(1),n=e(0);t.exports=function(){this.board=document.querySelectorAll(".board div"),this.furry=new i,this.coin=new n,this.score=0,this.index=function(t,r){return t+10*r},this.showFurry=function(){null!=document.querySelector(".furry")&&this.hideVisibleFurry(),this.board[this.index(this.furry.x,this.furry.y)].classList.add("furry")},this.showCoin=function(){this.board[this.index(this.coin.x,this.coin.y)].classList.add("coin")};var t=this;this.startGame=function(){this.idSetInterval=setInterval(function(){t.turnFurry()},250)},this.turnFurry=function(){"right"===this.furry.direction?this.furry.x+=1:"left"===this.furry.direction?this.furry.x-=1:"up"===this.furry.direction?this.furry.y-=1:"down"===this.furry.direction&&(this.furry.y+=1),this.gameOver(),this.showFurry(),this.checkCoinCollision()},this.hideVisibleFurry=function(){document.querySelector(".furry").classList.remove("furry")},this.changeDirection=function(t){37==t.which?this.furry.direction="left":39==t.which?this.furry.direction="right":38==t.which?this.furry.direction="up":40==t.which&&(this.furry.direction="down")},document.addEventListener("keydown",function(r){t.changeDirection(r)}),this.checkCoinCollision=function(){this.furry.x==this.coin.x&&this.furry.y==this.coin.y&&(document.querySelector(".coin").classList.remove("coin"),this.score++,document.querySelector(".score strong").innerText=this.score,this.coin=new n,this.showCoin())},this.gameOver=function(){if(this.furry.x<0||this.furry.x>9||this.furry.y<0||this.furry.y>9)return document.querySelector(".over").classList.remove("invisible"),document.querySelector("p span").innerText=this.score,clearInterval(this.idSetInterval)}}},function(t,r,e){var i=e(2);document.querySelector(".start button").addEventListener("click",function(){var t=new i;t.showFurry(),t.showCoin(),t.startGame(),document.querySelector(".start").classList.add("invisible")}),document.querySelector(".over button").addEventListener("click",function(){document.querySelector(".score strong").innerText=0,document.querySelector(".coin").classList.remove("coin");var t=new i;t.showFurry(),t.showCoin(),t.startGame(),document.querySelector(".over").classList.add("invisible")})}]);