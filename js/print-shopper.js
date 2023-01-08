let line = 0;
let count = 0;
let result = '';
let text = 'Наш користувач';
function typeLine() {
  let interval = setTimeout(() => {
    result += text[line][count];
    document.querySelector('.shopper__title').innerHTML = result + '|';

    count++;
    if (count >= text[line].length) {
      count = 0;
      line++;
      if (line == text.length) {
        clearTimeout(interval);
        document.querySelector('.shopper__title').innerHTML = result;
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
