// console.log("hello");
//
// //konstruktor Furry
// var Furry = function() {
//     this.x = 0;
//     this.y = 0;
//     this.direction = "right";
// };
// //konstruktor monety
// var Coin = function() {
//     this.x=Math.floor(10*Math.random());
//     this.y=Math.floor(10*Math.random());
// };
// //konstruktor gry
// var Game = function() {
//
//     this.board = document.querySelectorAll(".board div");
//     this.furry = new Furry();
//     this.coin = new Coin();
//     this.score = 0;
//     this.index = function(x, y) {
//         return x + (y * 10);
//     };
//     this.showFurry = function() {
//         if(document.querySelector('.furry') != null){
//             this.hideVisibleFurry();
//         }
//             this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
//         };
//     this.showCoin = function() {
//         this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
//     };
//     var self = this;
//
//     this.startGame = function() {
//         this.idSetInterval = setInterval(function(){
//             self.moveFurry()}, 250);
//     }
//     this.turnFurry = function(event) {
//         if(event.which == 37){
//             this.furry.direction = 'left';
//         } else if (event.which == 39){
//             this.furry.direction = 'right';
//         } else if (event.which == 38){
//             this.furry.direction = 'up';
//         } else if (event.which == 40){
//             this.furry.direction = 'down';
//         }
//     }
//         document.addEventListener('keydown', function(event){
//             self.turnFurry(event);
//         });
//     this.checkCoinCollision = function() {{
//         if(this.furry.x == this.coin.x && this.furry.y == this.coin.y){
//             document.querySelector('.coin').classList.remove('coin');
//             this.score++
//             document.querySelector('.score strong').innerText = this.score;
//             this.coin = new Coin();
//             this.showCoin();
//         }
//     }
//
//     this.gameOver = function() {
//             if(this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
//                 document.querySelector('.over').classList.remove('invisible');
//                 document.querySelector('p span').innerText = this.score;
//                 return clearInterval(this.idSetInterval);
//             }
//         }
//
//     this.moveFurry = function() {
//         if(this.furry.direction === "right"){
//             this.furry.x += 1;
//         } else if (this.furry.direction === "left"){
//             this.furry.x -= 1;
//         } else if (this.furry.direction === "up") {
//             this.furry.y -= 1;
//         }else if (this.furry.direction === "down"){
//               this.furry.y += 1;
//             }
//         this.gameOver();
//         this.showFurry();
//         this.checkCoinCollision();
//     }
//     this.hideVisibleFurry = function() {
//         document.querySelector('.furry').classlist.remove('furry');
//     }
//
//     };
//
//
//
//
// };
// // module.exports = Game;
// //Uruchomienie
// var game = new Game();
// //wywołanie metod i eventu keydown

var Game = require('./game.js');

document.querySelector('.start button').addEventListener('click', function(){
    var play = new Game();
    play.showFurry();
    play.showCoin();
    play.startGame();

    document.querySelector('.start').classList.add('invisible');
});

document.querySelector('.over button').addEventListener('click', function(){
    document.querySelector('.score strong').innerText = 0;
    document.querySelector('.coin').classList.remove('coin');

    var play = new Game();
    play.showFurry();
    play.showCoin();
    play.startGame();

    document.querySelector('.over').classList.add('invisible');
});

//wszystko dziala tak jak trzeba, tylo dodalem przycisk startujacy wraz z opisem oraz ekran po zabiciu (szary troche przezroczysty)
