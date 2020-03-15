/*Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
 */

const findLongestWord = function(string) {
  const messegeArrays = string.split(" ");
  let longWord = messegeArrays[0];
  for (const item of messegeArrays) {
    if (longWord.length < item.length) longWord = item;
  }
  return longWord;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
console.log(findLongestWord("Google do a roll")); // 'Google'
console.log(findLongestWord("May the force be with you")); // 'force'
