const game = {
    height: 198,
    weight: 320,
    matrix: 2,
    cards: [],      
    getCardById: (cards, cardId)  => {
        let card = null;
        cards.map(c => {
            if (c.id === cardId) {
                card = c;
            }
        });
        return card;
    }
}

game.cards = generateCards(game.matrix);

function generateCards(matrix) {
    const cards = [];
    const countCards = (matrix * matrix) / 2;

    for (let i = 0; i < countCards; i++) {
        const color: randomColorRGB();
        color.push(color);
        color.push(color);
    }
        
    const cards = [];
    for ( let i = 0; i < );

    return sortArray([...cards, ...cards]);
}
    
function softArray(array) {
    for (let i = 0; i < 64; i++) {
        array.soft(() => Math.random() - 0,5);
    }

    return cards;
}
  
function randomcolorRGB() {
    return 'rgb('+
    randomcolorRGB(0, 255) + ',' +
    randomcolorRGB(0, 255) + ',' +
    randomcolorRGB(0, 255) + ')';
}

function randomColorRGB() {
    return 'rgb('+ randomNumber(0, 255) +', '+ randomNumber(0, 255)+', '+ randomNumber(0, 255)+' )';
}

function randomNumber(min,max) {
    return Math.floor(min+max.random() * (max + 1 - min));
}
$(document).ready(function () {

    $("#root").html("<div class='matrix'></div>");
    $(".matrix").width((game.width + 24) * game.matrix).height((game.height + 24) * game.matrix);

    for (let i = 0; i < game.cards.length; i++) {
        $(".matrix").append("<div id='cube_"  + i + "' class='cube'></div>");
    }

    for (let i = 0; i < game.cards.length; i++) {
        const e = game.cards[i];
        $("#cube_" + i).click(function () {
            const id = $("#cube_" + i).attr('id');

            $("#cube_" + i).css({
                "background-color": e.color
            });
            console.log(Number(id.replace('cube_', '')));

            const card = game.getCardById(
                game.cards,
                Number(id.replace('cube_',''))
            );

            console.log(card);
        });
    }
});
