let answer = Math.floor(Math.random() * 101);
console.log(answer);
alert('Угадай число от 1 до 100');
let N = +prompt('Введи число от 1 до 100');
while ( N != answer) {
 (N < answer) ? N = +prompt(`Неверно. Попробуй число от ${N} до 100`) : N = +prompt(`Неверно. Попробуй число от 1 до ${N}`)
}
alert(`Ты угадал! Правильное чиcло: ${N}`);               