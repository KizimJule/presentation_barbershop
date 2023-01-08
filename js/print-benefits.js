// var i = 0;
// var txt = 'Чому саме Filmoteka'; /* Текст */
// var speed = 80; /* Скорость/длительность эффекта в миллисекундах */

// function typeWriter() {
//   if (i < txt.length) {
//     document.querySelector('.benefits__title').innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }
// typeWriter();

let line = 0;
let count = 0;
let result = '';
let text = 'Чому саме Filmoteka';
function typeLine() {
  let interval = setTimeout(() => {
    result += text[line][count];
    document.querySelector('.benefits__title').innerHTML = result + '|';

    count++;
    if (count >= text[line].length) {
      count = 0;
      line++;
      if (line == text.length) {
        clearTimeout(interval);
        document.querySelector('benefits__title').innerHTML = result;
        return true;
      }
    }
    typeLine();
  }, getRandomInt(getRandomInt(250 * 2.5)));
}
typeLine();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
