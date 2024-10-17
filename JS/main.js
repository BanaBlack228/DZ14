console.log("Первое Задание")
//Первое Задание
const StringLength = (str1, str2) => {
    if (str1.length > str2.length) {
        return 1;
    } else if (str1.length < str2.length) {
        return -1;
    } else {
        return 0;
    }
};

console.log(StringLength('My string!', 'My String'));
console.log(StringLength('My string', 'My String!'));
console.log(StringLength('My string', 'My String'));

console.log("Второе Задание")
//Второе Задание
const upperText = () => {
    const name = "my String";
    const result = name.charAt(0).toUpperCase() + name.slice(1);
    console.log(result);
};

upperText();
console.log("Третье Задание")
//Третье Задание
function vowels(a) {
    const vowelsList = "аеёиоуыэюяАЕЁИОУЫЭЮЯ";
    let i = 0;

    for(let vowel of a) {
        if(vowelsList.includes(vowel)){
            i++;
        }
    }
    return i;
}
console.log(vowels("Привет,это строка"))

console.log("Четвертое Задание")
//Четвертое Задание

const Spam = (str) => {
    const spamStr = str.toLowerCase();
    return spamStr.includes('скидка') || spamStr.includes('бесплатно') || spamStr.includes('акция');
};

console.log(Spam('Вам доступна скидка на продукт')); 
console.log(Spam('Бесплатный только сыр в мышеловке'));
console.log(Spam("Акция на обувь"));
console.log(Spam("Для вас сегодня все бесплатно"));
console.log(Spam("Это обычное сообщение.")); 


console.log("Пятое Задание")
//Пятое Задание

function reduction(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength -1) + '…' : str;
  }

  console.log(reduction("Hello World", 6))

console.log("Шестое Задание")
  //Шестое Задание

  function palindrome(str) {
            strReverse = str.split('').reverse().join('');
        if (strReverse == str) {
            return 'True';
        } else {
            return 'False';
        }
    }

  console.log(palindrome('казак'));
  console.log(palindrome('шалаш'));
  console.log(palindrome('самолёт'));
  console.log(palindrome('вертолёт'));

console.log("Седьмое Задание")
  //Седьмое Задание

  function words() {
    const str = 'Простой текст!'
    const words = str.split(' ').join();
    for (const i of words) {
        console.log(i.length)
    }
}

words()

console.log("Восьмое Задание")
  //Восьмое Задание

  const longest = (names) => names.reduce((Name1, Name2) => 
    Name1.length > Name2.length ? Name1 : Name2, 
"");

console.log(longest(["Виталя", "Аркадий", "Андрей"]));


  console.log("Девятое Задание")
  //Девятое Задание

  function lengthword(str) {
    const word = str.split(/\s+/);
    let sumWord = word.length;
    let Str1 = str.trim();
    let sumLetter = Str1.length;
    let result = sumLetter / sumWord

    return result;
  }

  console.log(lengthword("Ян","Юра","Андрей"))

  console.log("Десятое Задание")
  //Десятое Задание
  
  const findCharacterIndices = (str, char) => {
    const indices = [];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            indices.push(i); 
            count++; 
        }
    }

    console.log(`Индексы символа '${char}':`, indices);
    console.log(`Количество вхождений символа '${char}':`, count);
};

findCharacterIndices("Привет, мир!", "и");
findCharacterIndices("JavaScript", "a");
findCharacterIndices("Тестовая строка", "т");
findCharacterIndices("Hello, world!", "z");
