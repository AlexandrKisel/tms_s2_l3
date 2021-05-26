/** 
 * Что должно вывестись в консоль? Подумайте головой, сейчас - ваш моск и есть консоль!
 * */

console.log(19 % 3 + +'6'); //7
console.log(i++); //undefined
console.log(+'5p'); //NaN
console.log('pineapple'[4]); //a
console.log('pear'.length); //4
console.log([][4]); //undefined
console.log(['dog', 'fish', 'giraffe', 'hippo'][2][3]); //a
console.log(('0' && 5 > 4 || !'🔥🔥🔥🔥🔥') && '🚀🚀🚀🚀🚀'); //🚀🚀🚀🚀🚀
console.log(+'6' % 3 === 1 ? 'true' : 'false'); //false
console.log(`сейчас %c${new Date}`, 'color:red'); //Thu May 20 2021 19:27:42 GMT+0300 (Москва, стандартное время)


/** 
 * Конкатенируйте все слова в массиве, которые начинаются с буквы b и выведите результат в консоль 
 * */

const arr1 = [34, [], "🔥🔥", "barbecues", "begin", "🚀🚀🚀", "by", "battering", true, "bacon"];

let str = "";
for(let i = 0; i < arr1.length; i++) {
    if(arr1[i][0] == "b") {
        str += arr1[i] + " ";
    }
}

console.log(str);

/** 
 * Дана матрица, проставьте 1цы в шахматном порядке
 */

const matrix1 =
    [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ];

for(let i = 0; i < matrix1.length; i++) {
    for(let j = 0; j < matrix1[i].length; j++) {
         if((i + j) % 2 !== 0) matrix1[i][j] += 1;
    }
}

console.log(matrix1);

/** 
 * Дан пустой массив, создайте матрицу 5х5, заполните её числами по порядку, начиная с 1цы (1, 2, 3, ... 25)
 */

const matrix2 = [];
let number = 1; 

 for(let i = 0; i < 5; i++) {
    matrix2[i] = []; {
        for(let j = 0; j < 5; j++) {
            matrix2[i][j] = number; number++;
         }
    }
 }

 console.log(matrix2);

// Второй вариант

const makeMatrix = function(a,b) {
    const matrix2 = [];
    for(let i = 0; i < a; i++) {
    matrix2[i] = [];
        for(let j = 0; j < b; j++) {
            matrix2[i][j] = b * i + j + 1;
        }
    }
    return matrix2;
}

makeMatrix(5,5);

/** 
 * Посложнее! Есть шахматная доска, расставьте фигуры ('пешка', 'конь' ...) в правильном порядке перед началом игры
 */

const matrix3 =
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ];

    let chessFigure = ['rook', 'knight', 'bishop', 'queen', 'king', 'pawn'];
        
    for (let j = 0; j < 4; j++) {
        matrix3[0][j] = chessFigure[j];
        matrix3[7][j] = chessFigure[j];
        matrix3[0][7 - j] = chessFigure[j];
        matrix3[7][7 - j] = chessFigure[j];
    };
    
    for (let j = 0; j < 8; j++) {
        matrix3[1][j] = chessFigure[5];
        matrix3[6][j] = chessFigure[5];
    };
    
    matrix3[0][4] = chessFigure[4];
    matrix3[7][4] = chessFigure[4];
    
    console.log(matrix3);
