const game = {
    height: 198,
    weight: 320,
    matrix: 2,
    cards: [
        {
            color: '#87D204',
            isShow: false,
        },
        {
            color: '#D27904',
            isShow: false,
        },
        {
            color: '#87D204',
            isShow: false,
        },
        {
            color: '#D27904',
            isShow: false,
        },
    ]    
}

game.cards = generateCards(game.matrix);

function generateCards(matrix) {
    const cards = [];
    const countCards = (matrix * matrix) / 2;

    for (let i = 0; i < countCards; i++) {
        const e = {
            color: randomcolorRGB(),
            isShow: false,
        };
   
        cards.push(e);
    }
    
    return softArray = ([...cards, ...cards]);


    function softArray(array)
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
        });
    }
});
