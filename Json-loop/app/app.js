var GAMES = [
    {
       "gameTitle":"Super Smash Bros",
       "gameThumbImg":"sthumb1_150x150.jpg",
       "gameFullImg":"thumb1_300x300.jpg",
       "gameBriefDes":" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus earum dolor ab delectus aperiam architecto amet ",
       "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus earum dolor ab delectus aperiam architecto amet aspernatur? Earum iure doloremque eligendi quo maiores nesciunt quam quibusdam quidem mollitiaautem",
       "gameRating":"E"
    },
    {
       "gameTitle":"Street Fighter",
       "gameThumbImg":"sthumb2_150x150.jpg",
       "gameFullImg":"thumb2_300x300.jpg",
       "gameBriefDes":" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus earum dolor ab delectus aperiam architecto amet ",
       "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus earum dolor ab delectus aperiam architecto amet aspernatur? Earum iure doloremque eligendi quo maiores nesciunt quam quibusdam quidem mollitiaautem",
       "gameRating":"T"
    },
    {
       "gameTitle":"Sonic",
       "gameThumbImg":"sthumb3_150x150.jpg",
       "gameFullImg":"thumb3_300x300.jpg",
       "gameBriefDes":" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus earum dolor ab delectus aperiam architecto amet ",
       "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus earum dolor ab delectus aperiam architecto amet aspernatur? Earum iure doloremque eligendi quo maiores nesciunt quam quibusdam quidem mollitiaautem",
       "gameRating":"E"
    },
    {
       "gameTitle":"Mortal Kombat",
       "gameThumbImg":"sthumb4_150x150.jpg",
       "gameFullImg":"thumb4_300x300.jpg",
       "gameBriefDes":" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus earum dolor ab delectus aperiam architecto amet ",
       "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus earum dolor ab delectus aperiam architecto amet aspernatur? Earum iure doloremque eligendi quo maiores nesciunt quam quibusdam quidem mollitiaautem",
       "gameRating":"T"
    },
    {
       "gameTitle":"Mario Kart",
       "gameThumbImg":"sthumb5_150x150.jpg",
       "gameFullImg":"thumb5_300x300.jpg",
       "gameBriefDes":" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus earum dolor ab delectus aperiam architecto amet ",
       "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus earum dolor ab delectus aperiam architecto amet aspernatur? Earum iure doloremque eligendi quo maiores nesciunt quam quibusdam quidem mollitiaautem",
       "gameRating":"E"
    },
    {
       "gameTitle":"Grand Theif Auto 5",
       "gameThumbImg":"sthumb6_150x150.jpg",
       "gameFullImg":"thumb6_300x300.jpg",
       "gameBriefDes":" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus earum dolor ab delectus aperiam architecto amet ",
       "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus earum dolor ab delectus aperiam architecto amet aspernatur? Earum iure doloremque eligendi quo maiores nesciunt quam quibusdam quidem mollitiaautem",
       "gameRating":"M"
    },
    {
       "gameTitle":"God Of War",
       "gameThumbImg":"sthumb7_150x150.jpg",
       "gameFullImg":"thumb7_300x300.jpg",
       "gameBriefDes":" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus earum dolor ab delectus aperiam architecto amet ",
       "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus earum dolor ab delectus aperiam architecto amet aspernatur? Earum iure doloremque eligendi quo maiores nesciunt quam quibusdam quidem mollitiaautem",
       "gameRating":"M"
    },
    {
       "gameTitle":"Fortnite",
       "gameThumbImg":"sthumb8_150x150.jpg",
       "gameFullImg":"thumb8_300x300.jpg",
       "gameBriefDes":" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus earum dolor ab delectus aperiam architecto amet ",
       "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus earum dolor ab delectus aperiam architecto amet aspernatur? Earum iure doloremque eligendi quo maiores nesciunt quam quibusdam quidem mollitiaautem",
       "gameRating":"E"
    },
    {
       "gameTitle":"Minecraft",
       "gameThumbImg":"sthumb9_150x150.jpg",
       "gameFullImg":"thumb9_300x300.jpg",
       "gameBriefDes":" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus earum dolor ab delectus aperiam architecto amet ",
       "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus earum dolor ab delectus aperiam architecto amet aspernatur? Earum iure doloremque eligendi quo maiores nesciunt quam quibusdam quidem mollitiaautem",
       "gameRating":"E"
    },
    {
       "gameTitle":"Apex Legends",
       "gameThumbImg":"sthumb10_150x150.jpg",
       "gameFullImg":"thumb10_300x300.jpg",
       "gameBriefDes":" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus earum dolor ab delectus aperiam architecto amet ",
       "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus earum dolor ab delectus aperiam architecto amet aspernatur? Earum iure doloremque eligendi quo maiores nesciunt quam quibusdam quidem mollitiaautem",
       "gameRating":"E"
    }
 ];


function loadData(){
    $.each(GAMES, function(index, game){
        $("#app").append(`<div  class="game-holder">
        <h4 class="game-name">${game.gameTitle}</h4>
        <div class="game-image">
          <img src="images/${game.gameThumbImg}" alt="${game.gameThumbImg}" />
        </div>
        <div class="quick-brief">
          <div class="brief-des">
            ${game.gameBriefDes}
          </div>
          <div class="rating">Rating: ${game.gameRating}</div>
        </div>
      </div>`);
    });
}

function initListeners(){

}

$(document).ready(function(){
    // initListeners();
    loadData();
});