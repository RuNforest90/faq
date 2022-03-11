function getResult_1(string) {
    return string[0].toUpperCase() + string.substring(1, string.length);
}

console.log(getResult_1('имя'), '==', 'Имя')

function getResult_2(array) {
    var number = 0;

    //for (let i = 0; i < array.length; i++) {
    //    number = number + array[i];
    //  }

    array.map((a) => {
        number = number + a
    })

    return number
}

console.log(getResult_2([1, 2, 3, 4, 5]), '==', 15)
console.log(getResult_2([-1, -2, -3, -4, -5]), '==', -15)
console.log(getResult_2([-2, -2, 0, 4]), '==', 0)


function getResult_3(string) {
    string.replace(/\d+/g, "!");
    return string
}

console.log(getResult_3('Текст с числами 2 и 3 до 5.'), '==', 'Текст с числами ! и ! до !.')